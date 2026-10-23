# Calm-Touch Pulse – Supabase beállítása

Ez a leírás egyszer kell: utána a pillanatkép és a havi kérdőív válaszai elmentődnek, és az
admin felületen elkészül a havi riport. Amíg nincs beállítva, a kérdőívek demóként futnak.

## 1. Supabase-fiók és projekt

1. [supabase.com](https://supabase.com) → **Start your project** → regisztráció (GitHub-fiókkal a legegyszerűbb).
2. **New project**
   - **Name:** `calm-touch`
   - **Database password:** erős jelszó – mentsd el egy jelszókezelőbe.
   - **Region:** **Need a specific region?** → **Central EU (Frankfurt)** – az adatok így az EU-ban maradnak.
   - **Security:** *Enable Data API* bekapcsolva; *Automatically expose new tables* **kikapcsolva**;
     *Enable automatic RLS* bekapcsolva (ha van ilyen sor). Az SQL-fájl minden szükséges jogot kifejezetten megad.
   - Csomag: a **Free** az induláshoz elég.
3. Várd meg, amíg a projekt elkészül (1–2 perc).

## 2. Az adatbázis létrehozása

1. A projektben bal oldalt **SQL Editor** → **New query**.
2. Másold be a teljes `supabase/migrations/0001_calm_touch_pulse.sql` fájlt.
3. **Run**. A végén „Success. No rows returned” üzenetnek kell megjelennie.

## 3. A kulcsok kimásolása

**Project Settings → API Keys** (régebbi felületen: **Settings → API**):

| Supabase-ben | Vercel változó neve |
|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` |
| Publishable key (`sb_publishable_…`), régebben *anon public* | `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` |
| Secret key (`sb_secret_…`), régebben *service_role* | `SUPABASE_SECRET_KEY` |

A **secret** kulcs teljes hozzáférést ad az adatbázishoz: csak a Vercelbe kerüljön, sehová máshová
(e-mailbe, chatbe, kódba ne).

## 4. Vercel beállítása

Vercel → **calm-touch** projekt → **Settings → Environment Variables**. Add hozzá (Environment: *Production* és *Preview*):

| Név | Érték |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | a Project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | a publishable key |
| `SUPABASE_SECRET_KEY` | a secret key |
| `ADMIN_PASSWORD` | az admin felület jelszava (legalább 12 karakter) |
| `ADMIN_USER` | *(nem kötelező)* felhasználónév, alapból `admin` |
| `ADMIN2_PASSWORD` | a helyszíni hozzáférés jelszava (admin2) – csak a helyszíni beállítást látja |
| `ADMIN2_USER` | *(nem kötelező)* felhasználónév, alapból `admin2` |
| `PULSE_LINK_BASE` | *(nem kötelező)* a QR-linkek alapcíme, pl. `https://pszichoszoc.hu` |

Utána **Deployments** → a legfelső sor **⋯** menüje → **Redeploy**. A változók csak új deploy után élnek.

## 5. Használat

### Hozzáférések
- **admin** – minden: cégek, alkalmak, szakemberek, havi riport, szakemberek értékelése.
- **admin2** – csak a **Helyszíni beállítás** (`…/calm-touch/admin/helyszin`): cég és szakember kiválasztása
  vagy felvétele, QR-kód megjelenítése. Riportot és értékelést nem lát (a szakemberek nem látják egymás eredményét).

### Helyszínen, a program előtt (admin vagy admin2)
1. Telefonon: `…/calm-touch/admin/helyszin`.
2. Cég (választás vagy új név) + szakember (választás vagy új név) → **QR-kód megjelenítése**.
   Ha a cégnek ma még nincs alkalma, a rendszer létrehozza; ha van, ahhoz kapcsolódik.
3. A résztvevők a szakember saját QR-kódját olvassák be. Csere vagy újabb szakember: ugyanezen az oldalon
   **Szakembercsere vagy újabb szakember ugyanitt** → saját QR-kód. A válasz mindig annak a szakembernek
   számít, akinek a kódján érkezett.

### Előre tervezve (admin)
- **Admin:** `…/calm-touch/admin` – a böngésző kéri a felhasználónevet és jelszót.
  - **Új cég** (csapatokkal, ha kell) → **Új alkalom** (első szakemberrel) → szakemberenként saját QR-kód, letölthető PNG-ben.
  - Alkalmanként további szakember adható hozzá; az „Általános” QR-kódon érkező válasz nem köthető szakemberhez.
  - A QR-kódot ki lehet nyomtatni az asztali táblára; a résztvevő ezzel nyitja meg a pillanatképet.
  - Az alkalom végén **Alkalom lezárása** – utána a link már nem fogad választ.
- **Riport:** `…/calm-touch/admin/riport` – cég és hónap kiválasztása, **Nyomtatás / PDF** gombbal menthető.
  - 5 fő alatt figyelmeztetés jelenik meg: a cég felé ilyenkor nem adható ki.
  - Csapat csak legalább 5 főnél jelenik meg külön.
- **Szakemberek értékelése:** `…/calm-touch/admin/szakemberek` – hónap vagy 3/12 hónap, az összes cégen át:
  hatás (jóllét-index változása), komfort, ajánlási mutató, alkalmak havi értékelése. Csak admin látja.

## Hogyan működik a védelem

- A böngésző csak a publishable kulccsal fér hozzá, és azzal **semmit nem tud olvasni**: a táblákon
  sorszintű védelem (RLS) van. Beküldeni csak ellenőrző adatbázis-függvényeken át lehet
  (érvényes alkalom, 4 jegyű kód, 1–10 közötti értékek, hozzájárulás, alkalmanként/havonta egyszer).
- Az admin felület jelszóval védett, és szerveroldalon, a secret kulccsal olvas.
- Tárolt adatok: a résztvevő saját 4 jegyű kódja, opcionálisan a csapata, a válaszok, az időpont, és hogy melyik
  szakember kódján érkezett.
  Név, e-mail, beosztás nincs.

## Később: HR-hozzáférés

Ha a cégek saját belépést kapnak, a következő lépés a Supabase Auth (e-mailes belépés) és egy
„ki melyik céget láthatja” tábla – a riport számításai (`src/lib/pulse-metrics.ts`) változatlanul
újrahasznosíthatók.
