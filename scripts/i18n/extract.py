"""Kigyűjti a nyilvános oldalak fordítandó szövegeit (JSX szövegcsomópontok és szöveges string-literálok)."""
import re, json, sys, pathlib
FILES = ["src/app/page.tsx","src/app/cegeknek/page.tsx","src/app/cegeknek/OfferForm.tsx","src/app/pulse-plus/page.tsx",
         "src/app/modszertan/page.tsx","src/app/folyamat/page.tsx","src/app/pulse-riport/page.tsx"]
HU = re.compile(r"[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]")
CSSY = re.compile(r"(px|%|var\(|#[0-9A-Fa-f]{3,6}|rgba?\(|repeat\(|minmax|clamp\(|^\d|solid|auto|flex|grid|center|nowrap|inline|absolute|relative|uppercase|italic|break-word|pretty|balance|ease|translate|cover|contain|none|block)")
def is_text_literal(v):
    if not v.strip(): return False
    if v.startswith(("/", "#", "http", "mailto:", "tel:", "data:", "@/", "./", "../")): return False
    if HU.search(v): return True
    words = re.findall(r"[A-Za-z]{3,}", v)
    if len(words) >= 2 and not CSSY.search(v): return True
    return False
def candidates(src):
    out = []
    for m in re.finditer(r">([^<>{}]+)<", src):
        t = m.group(1)
        if t.strip() and re.search(r"[A-Za-zÁ-ű]", t): out.append(t.strip())
    for m in re.finditer(r'"((?:[^"\\\n]|\\.)*)"', src):
        v = m.group(1)
        if is_text_literal(v): out.append(v)
    for m in re.finditer(r"`([^`$\n]*)`", src):
        v = m.group(1)
        if is_text_literal(v): out.append(v)
    return out
if __name__ == "__main__":
    res = {}
    for f in FILES:
        src = pathlib.Path(f).read_text()
        seen = []
        for c in candidates(src):
            if c not in seen: seen.append(c)
        res[f] = seen
    json.dump(res, open(sys.argv[1], "w"), ensure_ascii=False, indent=1)
    print({k: len(v) for k, v in res.items()}, sum(len(v) for v in res.values()))
