# Calm Touch – stresszoldás érintéssel

A Calm Touch weboldala (Next.js 16, App Router). Most a **pszichoszoc.hu/calm-touch** aloldalként fut,
később saját domainre költözik.

## Útvonalak

| Útvonal | Oldal |
|---|---|
| `/calm-touch` | Főoldal |
| `/calm-touch/cegeknek` | Cégeknek: csomagok, Pulse riport, GYIK, ajánlatkérés |
| `/calm-touch/pulse-riport` | Havi HR Pulse riport – példa |
| `/calm-touch/folyamat` | Alkalom és havi Pulse ciklus ábra |
| `/calm-touch/pillanatkep?a=<alkalom>` | Pillanatkép előtte–utána (alkalom nélkül demó) |
| `/calm-touch/havi-kerdoiv?a=<alkalom>` | 11 állításos havi kérdőív (alkalom nélkül demó) |
| `/calm-touch/admin` | Admin: cégek, csapatok, alkalmak, QR-kódok (jelszóval védett) |
| `/calm-touch/admin/riport` | Havi Pulse riport valódi adatokból (jelszóval védett) |

A projekt `basePath: "/calm-touch"` beállítással fut (`next.config.ts`), a gyökér `/` ide irányít.

## Hol mi van

- `src/app/` – oldalak; az oldalak stílusa inline, a közös alapstílus a `calm-touch.css`.
- `src/app/config.ts` – `OFFER_EMAIL`: az ajánlatkérő űrlap fogadó címe (amíg `null`, a gomb letiltott); `PRIVACY_URL`: az adatkezelési tájékoztató címe.
- `supabase/migrations/` – az adatbázis séma (Calm-Touch Pulse). Beállítás: `docs/supabase-beallitas.md`.
- `src/lib/pulse-client.ts` – a kérdőívek beküldése (böngésző, publishable kulcs).
- `src/lib/pulse-server.ts`, `src/lib/pulse-metrics.ts` – admin és riportszámítás (szerver, secret kulcs).
- `src/proxy.ts` – az admin felület jelszavas védelme (`ADMIN_PASSWORD`).
- `public/images/` – fotók és illusztrációk (WebP), `og-1200x630.jpg` megosztási kép.
- `public/brand/` – logók, favicon, apple-touch-icon.
- `docs/arculat/logokeszlet/` – a teljes logókészlet (nyers anyag).
- `docs/kepek/` – képlista, alt szövegek, színpaletta.
- A tervezési forrás: „Calm-Touch honlapterv 1.0” (Claude Design vászon).

## Fejlesztés

```bash
npm ci
npm run dev   # http://localhost:3000/calm-touch
npm run build
```

## Telepítés: Vercel + pszichoszoc.hu

1. Vercel → Add New → Project → `Wellbeing-Ecosystems/calm-touch` importálása (Next.js, alapbeállítások).
2. Környezeti változó (opcionális): `NEXT_PUBLIC_SITE_URL = https://pszichoszoc.hu`.
3. A **pszichoszoc.hu** projekt `next.config.ts` fájljába rewrite kerül:

```ts
async rewrites() {
  return [
    { source: "/calm-touch", destination: "https://<calm-touch-projekt>.vercel.app/calm-touch" },
    { source: "/calm-touch/:path*", destination: "https://<calm-touch-projekt>.vercel.app/calm-touch/:path*" },
  ];
}
```

## Költözés saját domainre (később)

A Vercelen a Calm Touch projekthez hozzá kell adni az új domaint, átírni a `NEXT_PUBLIC_SITE_URL` értékét,
és a pszichoszoc.hu-ból törölni a rewrite-ot (helyette átirányítás az új domainre). A kódot nem kell mozgatni.

## Nyitott tételek élesítés előtt

- Supabase-projekt létrehozása és a környezeti változók megadása (`docs/supabase-beallitas.md`).
- `PRIVACY_URL` az éles adatkezelési tájékoztató címére (`src/app/config.ts`).

- Kapcsolati adatok: `[NÉV]`, `[E-MAIL]`, `[TELEFONSZÁM]`; `OFFER_EMAIL` a `config.ts`-ben.
- Pulse+ ára: `[PULSE+ ÁR]` (Cégeknek oldal).
- Jogi oldalak (adatkezelési tájékoztató, részvételi nyilatkozat, impresszum) – a láblécben most még `#` linkek.
- A 05 és 09 képen a QR-kód csak illusztráció.
- `docs/arculat/logokeszlet/03_emblema/calm-touch_emblema_512.png` sérült, újra kell exportálni.
