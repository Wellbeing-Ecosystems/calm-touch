"use client";

import { useEffect, useRef, useState } from "react";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";
import { sitePath } from "./SiteLang";

type Item = { href: string; label: string; primary?: boolean };

/** Telefonos menü (hamburger): 760 px alatt látszik, a fejléc többi linkje ilyenkor rejtett. */
export function MobileMenu({ items, lang }: { items: Item[]; lang?: { current: Lang; path: string } }) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(72);
  const ref = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setTop(r.bottom + 10);
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div ref={ref} className="ct-burger" style={{ position: "relative" }}>
      <button
        type="button"
        aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        aria-expanded={open}
        aria-controls="ct-mobile-menu"
        onClick={toggle}
        style={{ width: "44px", height: "44px", border: "1px solid #CDB8A3", borderRadius: "12px", background: "#FFFFFF", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px", cursor: "pointer", padding: 0 }}
      >
        <span className={open ? "ct-bar ct-bar1" : "ct-bar"} />
        <span className={open ? "ct-bar ct-bar2" : "ct-bar"} />
        <span className={open ? "ct-bar ct-bar3" : "ct-bar"} />
      </button>
      {open && (
        <div
          id="ct-mobile-menu"
          role="menu"
          style={{ position: "fixed", left: "12px", right: "12px", top: `${top}px`, zIndex: 50, maxHeight: `calc(100vh - ${top + 12}px)`, overflowY: "auto", background: "#FFFFFF", border: "1px solid #EADFD2", borderRadius: "16px", boxShadow: "0 12px 32px rgba(46,54,49,0.14)", padding: "8px", display: "flex", flexDirection: "column" }}
        >
          {lang && (
            <div style={{ display: "flex", gap: "6px", padding: "6px 8px 10px", borderBottom: "1px solid #EADFD2", marginBottom: "6px" }}>
              {LANGS.map((l) => (
                <a key={l} href={sitePath(l, lang.path)} hrefLang={l} aria-current={l === lang.current ? "page" : undefined}
                  style={{ flex: 1, minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", fontWeight: 700, fontSize: "14px", textDecoration: "none", border: "1px solid #DDE8EF", background: l === lang.current ? "#2C5069" : "#FFFFFF", color: l === lang.current ? "#FFFFFF" : "#2C5069" }}>
                  {LANG_LABEL[l]}
                </a>
              ))}
            </div>
          )}
          {items.map((it) => (
            <a
              key={it.href + it.label}
              role="menuitem"
              href={it.href}
              onClick={() => setOpen(false)}
              style={it.primary
                ? { textDecoration: "none", color: "#FFFFFF", background: "#7E3A4A", fontWeight: 600, fontSize: "16px", padding: "12px 16px", borderRadius: "999px", minHeight: "48px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "6px" }
                : { textDecoration: "none", color: "#2E3631", fontWeight: 600, fontSize: "16px", padding: "12px 14px", borderRadius: "10px", minHeight: "44px", boxSizing: "border-box", display: "flex", alignItems: "center" }}
            >
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
