-- =====================================================================
-- Calm-Touch Pulse – adatmodell (Supabase / PostgreSQL)
--
-- Futtatás: Supabase → SQL Editor → New query → a teljes fájl beillesztése → Run.
--
-- Elvek
-- * Nincs név, e-mail vagy beosztás: a résztvevőt a saját 4 jegyű kódja azonosítja,
--   cégen belül.
-- * A táblákon RLS van, policy nélkül: a böngésző (anon / publishable kulcs) semmit
--   nem olvashat és nem írhat közvetlenül. Beküldeni csak az alábbi
--   SECURITY DEFINER függvényeken át lehet, amelyek ellenőriznek mindent.
-- * Az admin felület és a riport szerveroldalon, a titkos (service role / secret)
--   kulccsal olvas; ez a kulcs soha nem kerül a böngészőbe.
-- =====================================================================

create extension if not exists pgcrypto;

-- Cégek -----------------------------------------------------------------
create table if not exists public.ct_companies (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 120),
  created_at  timestamptz not null default now()
);

-- Csapatok (opcionális; a riport csapatonként csak legalább 5 főnél jelenik meg)
create table if not exists public.ct_teams (
  id          uuid primary key default gen_random_uuid(),
  company_id  uuid not null references public.ct_companies(id) on delete cascade,
  name        text not null check (char_length(name) between 1 and 80),
  unique (company_id, name)
);

-- Alkalmak: minden alkalomnak saját linkje / QR-kódja van (slug)
create table if not exists public.ct_occasions (
  id             uuid primary key default gen_random_uuid(),
  company_id     uuid not null references public.ct_companies(id) on delete cascade,
  slug           text not null unique default encode(gen_random_bytes(6), 'hex'),
  label          text check (char_length(label) <= 120),
  occasion_date  date not null default (now() at time zone 'Europe/Budapest')::date,
  active         boolean not null default true,
  created_at     timestamptz not null default now()
);
create index if not exists ct_occasions_company_idx on public.ct_occasions (company_id, occasion_date);

-- Pillanatképek: előtte (pre) és utána (post), 6 kérdés 1–10 skálán
--   answers[1] feszültség, [2] nyugalom, [3] pörgő gondolatok,
--   [4] mentális fáradtság, [5] energia, [6] testi feszülés
create table if not exists public.ct_snapshots (
  id                bigint generated always as identity primary key,
  occasion_id       uuid not null references public.ct_occasions(id) on delete cascade,
  company_id        uuid not null references public.ct_companies(id) on delete cascade,
  team_id           uuid references public.ct_teams(id) on delete set null,
  participant_code  text not null check (participant_code ~ '^[0-9]{4}$'),
  phase             text not null check (phase in ('pre', 'post')),
  answers           smallint[] not null check (
                      array_length(answers, 1) = 6 and 1 <= all (answers) and 10 >= all (answers)),
  comfort           smallint check (comfort between 1 and 10),     -- csak utána
  recommend         smallint check (recommend between 0 and 10),   -- csak utána (ajánlási mutató)
  word              text check (char_length(word) <= 60),          -- csak utána, nem kötelező
  consent_at        timestamptz not null,
  created_at        timestamptz not null default now(),
  unique (occasion_id, participant_code, phase)
);
create index if not exists ct_snapshots_company_idx on public.ct_snapshots (company_id, created_at);

-- Havi kérdőív: 11 állítás 1–10 skálán, kódonként havonta legfeljebb egyszer
create table if not exists public.ct_monthly (
  id                bigint generated always as identity primary key,
  company_id        uuid not null references public.ct_companies(id) on delete cascade,
  occasion_id       uuid references public.ct_occasions(id) on delete set null,
  team_id           uuid references public.ct_teams(id) on delete set null,
  participant_code  text not null check (participant_code ~ '^[0-9]{4}$'),
  month             date not null,  -- a hónap első napja (Europe/Budapest)
  answers           smallint[] not null check (
                      array_length(answers, 1) = 11 and 1 <= all (answers) and 10 >= all (answers)),
  open_text         text check (char_length(open_text) <= 1000),
  consent_at        timestamptz not null,
  created_at        timestamptz not null default now(),
  unique (company_id, participant_code, month)
);
create index if not exists ct_monthly_company_idx on public.ct_monthly (company_id, month);

-- RLS: bekapcsolva, policy nélkül → közvetlen hozzáférés nincs ------------
alter table public.ct_companies enable row level security;
alter table public.ct_teams     enable row level security;
alter table public.ct_occasions enable row level security;
alter table public.ct_snapshots enable row level security;
alter table public.ct_monthly   enable row level security;

-- Segédfüggvény: aktuális hónap első napja budapesti idő szerint
create or replace function public.ct_current_month()
returns date language sql stable as $$
  select date_trunc('month', now() at time zone 'Europe/Budapest')::date
$$;

-- Alkalom adatai a kérdőív fejlécéhez (csak aktív alkalom; érzékeny adat nincs benne)
create or replace function public.ct_occasion_info(p_slug text)
returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'company', c.name,
    'label', o.label,
    'date', o.occasion_date,
    'teams', coalesce((select json_agg(json_build_object('id', t.id, 'name', t.name) order by t.name)
                       from ct_teams t where t.company_id = c.id), '[]'::json)
  )
  from ct_occasions o join ct_companies c on c.id = o.company_id
  where o.slug = p_slug and o.active
$$;

-- Kitöltötte-e már a kód ebben a hónapban a havi kérdőívet (az alkalom cégénél)
create or replace function public.ct_monthly_done(p_slug text, p_code text)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from ct_monthly m
    join ct_occasions o on o.company_id = m.company_id
    where o.slug = p_slug and m.participant_code = p_code and m.month = ct_current_month()
  )
$$;

-- Pillanatkép beküldése. Visszatérés: 'ok' | 'duplicate'
create or replace function public.ct_submit_snapshot(
  p_slug text, p_code text, p_phase text, p_answers smallint[],
  p_team uuid default null, p_comfort smallint default null,
  p_recommend smallint default null, p_word text default null,
  p_consent boolean default false
) returns text
language plpgsql volatile security definer set search_path = public as $$
declare
  v_occ ct_occasions%rowtype;
  v_team uuid;
  v_rows int;
begin
  if not coalesce(p_consent, false) then
    raise exception 'consent_required';
  end if;
  select * into v_occ from ct_occasions where slug = p_slug and active;
  if not found then
    raise exception 'unknown_occasion';
  end if;
  select id into v_team from ct_teams where id = p_team and company_id = v_occ.company_id;

  insert into ct_snapshots (occasion_id, company_id, team_id, participant_code, phase, answers,
                            comfort, recommend, word, consent_at)
  values (v_occ.id, v_occ.company_id, v_team, p_code, p_phase, p_answers,
          case when p_phase = 'post' then p_comfort end,
          case when p_phase = 'post' then p_recommend end,
          case when p_phase = 'post' then nullif(trim(p_word), '') end,
          now())
  on conflict (occasion_id, participant_code, phase) do nothing;
  get diagnostics v_rows = row_count;
  return case when v_rows = 1 then 'ok' else 'duplicate' end;
end
$$;

-- Havi kérdőív beküldése. Visszatérés: 'ok' | 'already'
create or replace function public.ct_submit_monthly(
  p_slug text, p_code text, p_answers smallint[],
  p_team uuid default null, p_open text default null, p_consent boolean default false
) returns text
language plpgsql volatile security definer set search_path = public as $$
declare
  v_occ ct_occasions%rowtype;
  v_team uuid;
  v_rows int;
begin
  if not coalesce(p_consent, false) then
    raise exception 'consent_required';
  end if;
  select * into v_occ from ct_occasions where slug = p_slug and active;
  if not found then
    raise exception 'unknown_occasion';
  end if;
  select id into v_team from ct_teams where id = p_team and company_id = v_occ.company_id;

  insert into ct_monthly (company_id, occasion_id, team_id, participant_code, month, answers,
                          open_text, consent_at)
  values (v_occ.company_id, v_occ.id, v_team, p_code, ct_current_month(), p_answers,
          nullif(trim(p_open), ''), now())
  on conflict (company_id, participant_code, month) do nothing;
  get diagnostics v_rows = row_count;
  return case when v_rows = 1 then 'ok' else 'already' end;
end
$$;

-- Jogosultságok: a függvényeket a böngésző hívhatja, a táblákat nem -------
revoke all on function public.ct_occasion_info(text) from public;
revoke all on function public.ct_monthly_done(text, text) from public;
revoke all on function public.ct_submit_snapshot(text, text, text, smallint[], uuid, smallint, smallint, text, boolean) from public;
revoke all on function public.ct_submit_monthly(text, text, smallint[], uuid, text, boolean) from public;

grant execute on function public.ct_occasion_info(text) to anon, authenticated;
grant execute on function public.ct_monthly_done(text, text) to anon, authenticated;
grant execute on function public.ct_submit_snapshot(text, text, text, smallint[], uuid, smallint, smallint, text, boolean) to anon, authenticated;
grant execute on function public.ct_submit_monthly(text, text, smallint[], uuid, text, boolean) to anon, authenticated;
