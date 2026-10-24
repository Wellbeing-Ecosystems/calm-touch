# Angol és német honlap

A `/en` és `/de` oldalak a magyar oldalakból készülnek – **ne szerkeszd őket kézzel**.

1. Módosítsd a magyar oldalt (`src/app/...`).
2. Ha új szöveg került bele, írd be a fordítását a `site.json`-ba: `"magyar": ["english", "deutsch"]`.
3. Futtasd: `python3 scripts/i18n/generate.py` – kiírja, ha valamelyik szöveg fordítása hiányzik.
