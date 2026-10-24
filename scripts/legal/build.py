"""
Jogi oldalak (ÁSZF, Impresszum, Adatfelhasználási nyilatkozat) HTML-tartalma három nyelven.

Használat:  python3 scripts/legal/build.py
- Szövegek: scripts/legal/<oldal>.<nyelv>.md  (oldal: aszf, impresszum, adatkezeles; nyelv: hu, en, de)
- Cégadatok: scripts/legal/operator.json – a null értékek a honlapon „[megadás alatt]” jelöléssel jelennek meg.
- Kimenet: src/app/jogi/content.ts (ne szerkeszd kézzel)
"""
import json, pathlib, re, markdown

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = ROOT / "scripts/legal"
OP = json.loads((SRC / "operator.json").read_text())
PENDING = {"hu": "[megadás alatt]", "en": "[to be added]", "de": "[wird ergänzt]"}
DOCS = ["aszf", "impresszum", "adatkezeles"]

def render(doc, lang):
    md = (SRC / f"{doc}.{lang}.md").read_text()
    # a képviselő sora csak akkor jelenik meg, ha meg van adva
    if not OP.get("REP"):
        md = "\n".join(l for l in md.split("\n") if "{{REP}}" not in l)
    def sub(m):
        v = OP.get(m.group(1))
        if v:
            if m.group(1) == "EMAIL":
                return f'<a href="mailto:{v}">{v}</a>'
            return v
        return f'<span class="ct-pending">{PENDING[lang]}</span>'
    md = re.sub(r"\{\{([A-Z]+)\}\}", sub, md)
    html = markdown.markdown(md, extensions=["tables", "sane_lists"])
    html = re.sub(r"<thead>\s*<tr>\s*<th></th>\s*<th></th>\s*</tr>\s*</thead>\s*", "", html)
    html = re.sub(r"(?<![\w/\"@.])((?:naih|vercel|supabase)\.(?:hu|com))", r'<a href="https://\1" rel="noopener">\1</a>', html)
    html = re.sub(r"(?<![\w:\">])(ugyfelszolgalat@naih\.hu)", r'<a href="mailto:\1">\1</a>', html)
    return html

out = {d: {l: render(d, l) for l in ("hu", "en", "de")} for d in DOCS}
missing = [k for k, v in OP.items() if not v and k != "REP"]
(ROOT / "src/app/jogi/content.ts").write_text(
    "// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: scripts/legal/*.md, operator.json; futtatás: python3 scripts/legal/build.py\n"
    f"export const LEGAL_HTML = {json.dumps(out, ensure_ascii=False, indent=1)} as const;\n"
    f"export const LEGAL_MISSING: readonly string[] = {json.dumps(missing)};\n")
print("kész; hiányzó cégadat:", ", ".join(missing) or "nincs")
