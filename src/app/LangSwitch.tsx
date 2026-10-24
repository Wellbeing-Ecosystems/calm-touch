"use client";

import { LANGS, LANG_LABEL, LANG_NAME, type Lang } from "@/lib/i18n";

/** Kis nyelvválasztó (HU · EN · DE) a kérdőívek fejlécében. */
export function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div role="group" aria-label="Nyelv / Language / Sprache" style={{ display: "inline-flex", gap: "2px", background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "2px" }}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={l === lang}
          title={LANG_NAME[l]}
          onClick={() => onChange(l)}
          style={{ minWidth: "36px", minHeight: "32px", border: "none", borderRadius: "999px", font: "inherit", fontSize: "12px", fontWeight: 700, cursor: "pointer", background: l === lang ? "#2C5069" : "transparent", color: l === lang ? "#FFFFFF" : "#2C5069" }}
        >
          {LANG_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
