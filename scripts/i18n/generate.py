"""
A magyar nyilvános oldalakból elkészíti az angol (/en) és német (/de) változatot.

Használat:  python3 scripts/i18n/generate.py
- A fordítások: scripts/i18n/site.json  ({"magyar szöveg": ["english", "deutsch"]})
- A módszertan tartalma: scripts/i18n/content_en.ts, content_de.ts (pdfbuild/build.mjs generálja)
- A kimenet: src/app/en/..., src/app/de/... (ezeket NE szerkeszd kézzel, mindig a magyart és a site.json-t)
Ha a magyar oldalon új szöveg jelenik meg, a szkript kiírja, mi hiányzik a site.json-ból.
"""
import json, re, pathlib, sys, posixpath

ROOT = pathlib.Path(__file__).resolve().parents[2]
APP = ROOT / "src/app"
TR = json.loads((ROOT / "scripts/i18n/site.json").read_text())
LANGS = {"en": 0, "de": 1}
PUBLIC = ["cegeknek", "pulse-plus", "modszertan", "folyamat", "pulse-riport"]
FILES = [  # (forrás, cél a nyelvi mappán belül)
    ("page.tsx", "page.tsx"),
    ("cegeknek/page.tsx", "cegeknek/page.tsx"),
    ("cegeknek/OfferForm.tsx", "cegeknek/OfferForm.tsx"),
    ("pulse-plus/page.tsx", "pulse-plus/page.tsx"),
    ("modszertan/page.tsx", "modszertan/page.tsx"),
    ("folyamat/page.tsx", "folyamat/page.tsx"),
    ("pulse-riport/page.tsx", "pulse-riport/page.tsx"),
]
GENERATED_LOCAL = {"./OfferForm", "./content"}
PDF = {"en": "calm-touch-pulse-measurement-method-en.pdf", "de": "calm-touch-pulse-messmethodik-de.pdf"}
SKIP = {"space-between", "ct-nav-cta", "border-box", "use client", "context-stroke", "ajanlat-allapot", ').join("\\n");\n    const subject = ', ';\n    window.location.href = '}

sys.path.insert(0, str(ROOT / "scripts/i18n"))
from extract import candidates  # noqa: E402

def link(href, lang):
    m = re.match(r"^/calm-touch(/[^?#\"]*)?(.*)$", href)
    if not m:
        return href
    path, rest = m.group(1) or "", m.group(2)
    seg = path.strip("/").split("/")[0] if path else ""
    if path in ("", "/"):
        return f"/calm-touch/{lang}{rest}"
    if seg in PUBLIC:
        return f"/calm-touch/{lang}{path}{rest}"
    if seg in ("pillanatkep", "havi-kerdoiv"):
        sep = "&" if "?" in rest else "?"
        return f"/calm-touch{path}{rest}{sep}lang={lang}" if "lang=" not in rest else href
    if path.startswith("/docs/calm-touch-pulse-meresi-modszertan.pdf"):
        return f"/calm-touch/docs/{PDF[lang]}"
    return href

def translate(src, lang, rel):
    i = LANGS[lang]
    missing = set()
    # JSX szövegcsomópontok
    def node(m):
        raw = m.group(1)
        key = raw.strip()
        if not key or not re.search(r"[A-Za-zÁ-ű]", key):
            return m.group(0)
        if key in TR:
            lead = raw[: len(raw) - len(raw.lstrip())]
            trail = raw[len(raw.rstrip()):]
            return ">" + lead + TR[key][i].replace("'", "’") + trail + "<"
        missing.add(key)
        return m.group(0)
    out = re.sub(r">([^<>{}]+)<", node, src)
    # string-literálok
    def lit(m):
        v = m.group(1)
        if v in TR:
            return '"' + TR[v][i].replace("\\", "\\\\").replace('"', '\\"') + '"'
        if v.startswith("/calm-touch"):
            return '"' + link(v, lang) + '"'
        return m.group(0)
    out = re.sub(r'"((?:[^"\\\n]|\\.)*)"', lit, out)
    # nyelvi jelölők a forrásban
    out = out.replace('current="hu"', f'current="{lang}"').replace('current: "hu"', f'current: "{lang}"')
    out = out.replace('("hu", ', f'("{lang}", ').replace('inLanguage: "hu"', f'inLanguage: "{lang}"')
    # relatív importok → @/app/...
    src_dir = posixpath.dirname(rel)
    def imp(m):
        spec = m.group(2)
        if spec in GENERATED_LOCAL:
            return m.group(0) if spec != "./content" else m.group(1) + f'"./content_{lang}"'
        target = posixpath.normpath(posixpath.join(src_dir, spec))
        return m.group(1) + f'"@/app/{target}"'
    out = re.sub(r'(from\s+)"(\.{1,2}/[^"]+)"', imp, out)
    # <html lang> a /en, /de oldalakon
    if rel.endswith("page.tsx") and "return (" in out:
        k = out.index("return (")
        j = out.index(">", out.index("<", k)) + 1
        out = out[:j] + f'\n<HtmlLang lang="{lang}" />' + out[j:]
        out = out.replace('import type { Metadata } from "next";', 'import type { Metadata } from "next";\nimport { HtmlLang } from "@/app/HtmlLang";', 1)
    header = "// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/" + rel + ", fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py\n"
    if out.startswith('"use client";'):
        out = '"use client";\n' + header + out[len('"use client";'):].lstrip("\n")
    else:
        out = header + out
    missing = {m for m in missing if m not in SKIP}
    return out, missing

def main():
    all_missing = {}
    for lang in LANGS:
        for rel, dst in FILES:
            src = (APP / rel).read_text()
            out, missing = translate(src, lang, rel)
            for c in candidates(src):
                if c not in TR and c not in SKIP and not c.startswith(("dc-", "url(")) and c not in ("Calm-Touch", "Pulse", "Pulse+", "HRV", "qEEG", "ASMR", "[IT]"):
                    missing.add(c)
            if missing:
                all_missing.setdefault(rel, set()).update(missing)
            p = APP / lang / dst
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(out)
        (APP / lang / "modszertan" / f"content_{lang}.ts").write_text((ROOT / f"scripts/i18n/content_{lang}.ts").read_text())
    if all_missing:
        print("HIÁNYZÓ FORDÍTÁSOK (site.json):")
        for f, ms in all_missing.items():
            for m in sorted(ms):
                print(f"  {f}: {m!r}")
    else:
        print("Kész: minden szöveg le van fordítva.")

if __name__ == "__main__":
    main()
