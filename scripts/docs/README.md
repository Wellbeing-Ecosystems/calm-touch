# Módszertani dokumentumok (PDF + honlap-tartalom)

Források: `ceges.md` (magyar, cégeknek), `ceges_en.md`, `ceges_de.md`, `belso.md` (belső kézikönyv).

Újragenerálás (a `scripts/docs` mappában, egyszer `npm i @fontsource/nunito@5.1.0 @fontsource/nunito-sans@5.1.0 marked@12.0.2`):

```
node build.mjs      # HTML + content*.ts
python3 pdf.py      # PDF-ek (Playwright + Chromium)
```

Utána: `content.ts` → `src/app/modszertan/content.ts`, `content_en.ts` / `content_de.ts` → `scripts/i18n/`,
a PDF-ek → `public/docs/`, majd `python3 scripts/i18n/generate.py`.
