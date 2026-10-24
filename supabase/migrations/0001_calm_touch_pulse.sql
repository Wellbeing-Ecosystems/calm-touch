-- =====================================================================
-- Calm-Touch Pulse – adatmodell (Supabase / PostgreSQL)
--
-- Futtatás: Supabase → SQL Editor → New query → a teljes fájl beillesztése → Run.
-- A fájl újrafuttatható: a már meglévő elemeket nem bántja, a hiányzókat létrehozza.
--
-- Elvek
-- * Nincs név, e-mail vagy beosztás: a résztvevőt a saját 4 jegyű kódja azonosítja,
--   cégen belül.
-- * A táblákon RLS van, policy nélkül: a böngésző (anon / publishable kulcs) semmit
--   nem olvashat és nem írhat közvetlenül. Beküldeni csak az alábbi
--   SECURITY DEFINER függvényeken át lehet, amelyek ellenőriznek mindent.
-- * Az admin felület és a riport szerveroldalon, a titkos (service role / secret)
--   kulccsal olvas; ez a kulcs soha nem kerül a böngészőbe.
--
-- Kódok (QR-linkek)
-- * Minden alkalomnak van általános kódja (ct_occasions.slug) – ez szakember nélküli.
-- * Minden alkalom × szakember párnak saját kódja van (ct_stations.slug). Egy alkalmon
--   több szakember is dolgozhat, és a helyszínen is hozzáadható / cserélhető. A válasz
--   annak a szakembernek számít, akinek a kódjával a résztvevő kitöltött.
-- =====================================================================

create extension if not exists pgcrypto;

-- Cégek -----------------------------------------------------------------
create table if not exists public.ct_companies (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 120),
  created_at  timestamptz not null default now()
);

-- Csapatok (opcionális; a riport csapatonként csak legalább 5 főnél jelenik meg)
-- cégadatok (a 0002_company_details.sql is tartalmazza; itt, hogy az új telepítés egy lépésben meglegyen)
alter table public.ct_companies add column if not exists industry       text check (char_length(industry) <= 60);
alter table public.ct_companies add column if not exists headcount      integer check (headcount between 1 and 1000000);
alter table public.ct_companies add column if not exists region         text check (char_length(region) <= 40);
alter table public.ct_companies add column if not exists contact_name   text check (char_length(contact_name) <= 120);
alter table public.ct_companies add column if not exists contact_phone  text check (char_length(contact_phone) <= 40);
alter table public.ct_companies add column if not exists contact_email  text check (char_length(contact_email) <= 200);

create table if not exists public.ct_teams (
  id          uuid primary key default gen_random_uuid(),
  company_id  uuid not null references public.ct_companies(id) on delete cascade,
  name        text not null check (char_length(name) between 1 and 80),
  unique (company_id, name)
);

-- Szakemberek (akik az alkalmakat tartják). Belső adat: csak az admin felület látja.
create table if not exists public.ct_practitioners (
  id          uuid primary key default gen_random_uuid(),
  name        text not null unique check (char_length(name) between 1 and 120),
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Alkalmak (cég + nap)
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

-- Állomások: alkalom × szakember, saját QR-kóddal
create table if not exists public.ct_stations (
  id               uuid primary key default gen_random_uuid(),
  occasion_id      uuid not null references public.ct_occasions(id) on delete cascade,
  practitioner_id  uuid not null references public.ct_practitioners(id) on delete cascade,
  slug             text not null unique default encode(gen_random_bytes(6), 'hex'),
  created_at       timestamptz not null default now(),
  unique (occasion_id, practitioner_id)
);

-- Pillanatképek: előtte (pre) és utána (post), 6 kérdés 1–10 skálán (nyers válaszok)
--   answers[1] feszültség, [2] nyugalom, [3] pörgő gondolatok,
--   [4] mentális fáradtság, [5] energia, [6] testi feszülés
--   A riport a negatív kérdéseket fordítva pontozza (11 − válasz).
create table if not exists public.ct_snapshots (
  id                bigint generated always as identity primary key,
  occasion_id       uuid not null references public.ct_occasions(id) on delete cascade,
  company_id        uuid not null references public.ct_companies(id) on delete cascade,
  practitioner_id   uuid references public.ct_practitioners(id) on delete set null,
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
alter table public.ct_snapshots
  add column if not exists practitioner_id uuid references public.ct_practitioners(id) on delete set null;
create index if not exists ct_snapshots_company_idx on public.ct_snapshots (company_id, created_at);
create index if not exists ct_snapshots_practitioner_idx on public.ct_snapshots (practitioner_id, created_at);

-- Havi kérdőív: 11 állítás 1–10 skálán, kódonként havonta legfeljebb egyszer
create table if not exists public.ct_monthly (
  id                bigint generated always as identity primary key,
  company_id        uuid not null references public.ct_companies(id) on delete cascade,
  occasion_id       uuid references public.ct_occasions(id) on delete set null,
  practitioner_id   uuid references public.ct_practitioners(id) on delete set null,
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
alter table public.ct_monthly
  add column if not exists practitioner_id uuid references public.ct_practitioners(id) on delete set null;
create index if not exists ct_monthly_company_idx on public.ct_monthly (company_id, month);

-- RLS: bekapcsolva, policy nélkül → közvetlen hozzáférés nincs ------------
alter table public.ct_companies     enable row level security;
alter table public.ct_teams         enable row level security;
alter table public.ct_practitioners enable row level security;
alter table public.ct_occasions     enable row level security;
alter table public.ct_stations      enable row level security;
alter table public.ct_snapshots     enable row level security;
alter table public.ct_monthly       enable row level security;

-- Segédfüggvény: aktuális hónap első napja budapesti idő szerint
create or replace function public.ct_current_month()
returns date language sql stable as $$
  select date_trunc('month', now() at time zone 'Europe/Budapest')::date
$$;

-- Kód feloldása: állomás- vagy alkalomkód → alkalom, cég, szakember (csak aktív alkalom)
create or replace function public.ct_resolve(p_slug text)
returns table (occasion_id uuid, company_id uuid, practitioner_id uuid)
language sql stable security definer set search_path = public as $$
  select o.id, o.company_id, s.practitioner_id
  from ct_stations s join ct_occasions o on o.id = s.occasion_id
  where s.slug = p_slug and o.active
  union all
  select o.id, o.company_id, null::uuid
  from ct_occasions o
  where o.slug = p_slug and o.active
  limit 1
$$;
revoke all on function public.ct_resolve(text) from public;

-- Alkalom adatai a kérdőív fejlécéhez (érzékeny adat nincs benne)
create or replace function public.ct_occasion_info(p_slug text)
returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'company', c.name,
    'label', o.label,
    'date', o.occasion_date,
    'practitioner', p.name,
    'teams', coalesce((select json_agg(json_build_object('id', t.id, 'name', t.name) order by t.name)
                       from ct_teams t where t.company_id = c.id), '[]'::json)
  )
  from ct_resolve(p_slug) r
  join ct_occasions o on o.id = r.occasion_id
  join ct_companies c on c.id = r.company_id
  left join ct_practitioners p on p.id = r.practitioner_id
$$;

-- Kitöltötte-e már a kód ebben a hónapban a havi kérdőívet (az alkalom cégénél)
create or replace function public.ct_monthly_done(p_slug text, p_code text)
returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from ct_monthly m
    join ct_resolve(p_slug) r on r.company_id = m.company_id
    where m.participant_code = p_code and m.month = ct_current_month()
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
  v record;
  v_team uuid;
  v_rows int;
begin
  if not coalesce(p_consent, false) then
    raise exception 'consent_required';
  end if;
  select * into v from ct_resolve(p_slug);
  if not found then
    raise exception 'unknown_occasion';
  end if;
  select id into v_team from ct_teams where id = p_team and company_id = v.company_id;

  insert into ct_snapshots (occasion_id, company_id, practitioner_id, team_id, participant_code, phase,
                            answers, comfort, recommend, word, consent_at)
  values (v.occasion_id, v.company_id, v.practitioner_id, v_team, p_code, p_phase, p_answers,
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
  v record;
  v_team uuid;
  v_rows int;
begin
  if not coalesce(p_consent, false) then
    raise exception 'consent_required';
  end if;
  select * into v from ct_resolve(p_slug);
  if not found then
    raise exception 'unknown_occasion';
  end if;
  select id into v_team from ct_teams where id = p_team and company_id = v.company_id;

  insert into ct_monthly (company_id, occasion_id, practitioner_id, team_id, participant_code, month,
                          answers, open_text, consent_at)
  values (v.company_id, v.occasion_id, v.practitioner_id, v_team, p_code, ct_current_month(), p_answers,
          nullif(trim(p_open), ''), now())
  on conflict (company_id, participant_code, month) do nothing;
  get diagnostics v_rows = row_count;
  return case when v_rows = 1 then 'ok' else 'already' end;
end
$$;

-- A szerveroldali admin (secret / service_role kulcs) teljes hozzáférése a ct_* táblákhoz.
-- Akkor is működik, ha a projektben ki van kapcsolva az „Automatically expose new tables”.
grant usage on schema public to service_role;
grant select, insert, update, delete on
  public.ct_companies, public.ct_teams, public.ct_practitioners, public.ct_occasions,
  public.ct_stations, public.ct_snapshots, public.ct_monthly
  to service_role;
grant usage, select on all sequences in schema public to service_role;

-- A böngésző (anon) közvetlenül egyik táblát sem éri el.
revoke all on
  public.ct_companies, public.ct_teams, public.ct_practitioners, public.ct_occasions,
  public.ct_stations, public.ct_snapshots, public.ct_monthly
  from anon, authenticated;

-- Jogosultságok: a függvényeket a böngésző hívhatja, a táblákat nem -------
revoke all on function public.ct_occasion_info(text) from public;
revoke all on function public.ct_monthly_done(text, text) from public;
revoke all on function public.ct_submit_snapshot(text, text, text, smallint[], uuid, smallint, smallint, text, boolean) from public;
revoke all on function public.ct_submit_monthly(text, text, smallint[], uuid, text, boolean) from public;

grant execute on function public.ct_occasion_info(text) to anon, authenticated;
grant execute on function public.ct_monthly_done(text, text) to anon, authenticated;
grant execute on function public.ct_submit_snapshot(text, text, text, smallint[], uuid, smallint, smallint, text, boolean) to anon, authenticated;
grant execute on function public.ct_submit_monthly(text, text, smallint[], uuid, text, boolean) to anon, authenticated;
