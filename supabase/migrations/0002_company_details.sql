-- Calm Touch – cégadatok az adminban (2026.10.24.)
-- Iparág, általános foglalkoztatotti létszám, megye (terület) és a kapcsolattartó (a riportok kiküldéséhez).
-- Az iparág, a létszám és a megye az összesített (több céges) riportok csoportosításához is kell.
-- Újrafuttatható. Futtatás: Supabase → SQL Editor → beillesztés → Run.

alter table public.ct_companies add column if not exists industry       text check (char_length(industry) <= 60);
alter table public.ct_companies add column if not exists headcount      integer check (headcount between 1 and 1000000);
alter table public.ct_companies add column if not exists region         text check (char_length(region) <= 40);
alter table public.ct_companies add column if not exists contact_name   text check (char_length(contact_name) <= 120);
alter table public.ct_companies add column if not exists contact_phone  text check (char_length(contact_phone) <= 40);
alter table public.ct_companies add column if not exists contact_email  text check (char_length(contact_email) <= 200);

-- A kapcsolattartó adatait csak a szerveroldali admin éri el (a böngésző a táblát nem látja);
-- a ct_occasion_info függvény továbbra is csak a cég nevét adja ki a kérdőívnek.
grant select, insert, update on public.ct_companies to service_role;
