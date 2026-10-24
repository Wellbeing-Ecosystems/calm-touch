import { LANGS, LANG_LABEL, LANG_NAME, type Lang } from "@/lib/i18n";

/** A nyilvános oldal megfelelője egy adott nyelven (magyar: előtag nélkül, angol: /en, német: /de). */
export const sitePath = (lang: Lang, path: string) => `/calm-touch${lang === "hu" ? "" : `/${lang}`}${path}`;

/** Nyelvváltó a honlap fejlécében (asztali nézet; telefonon a menüben van). */
export function SiteLang({ current, path }: { current: Lang; path: string }) {
  return (
    <span className="ct-lang" style={{ display: "inline-flex", gap: "2px", background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "2px" }}>
      {LANGS.map((l) => (
        <a key={l} className="ct-lang-link" href={sitePath(l, path)} hrefLang={l} lang={l} title={LANG_NAME[l]} aria-current={l === current ? "page" : undefined}
          style={{ minWidth: "34px", minHeight: "30px", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", fontSize: "12px", fontWeight: 700, textDecoration: "none", background: l === current ? "#2C5069" : "transparent", color: l === current ? "#FFFFFF" : "#2C5069" }}>
          {LANG_LABEL[l]}
        </a>
      ))}
    </span>
  );
}
