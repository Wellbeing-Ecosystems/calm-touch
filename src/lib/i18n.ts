/** Nyelvek a résztvevői felületen és a riportban. Alapértelmezés: magyar. */
export type Lang = "hu" | "en" | "de";
export const LANGS: Lang[] = ["hu", "en", "de"];
export const LANG_LABEL: Record<Lang, string> = { hu: "HU", en: "EN", de: "DE" };
export const LANG_NAME: Record<Lang, string> = { hu: "Magyar", en: "English", de: "Deutsch" };

export const isLang = (v: unknown): v is Lang => v === "hu" || v === "en" || v === "de";

/** Böngészőben: ?lang= → korábbi választás → a telefon nyelve → magyar. */
export function detectLang(): Lang {
  if (typeof window === "undefined") return "hu";
  const q = new URLSearchParams(window.location.search).get("lang");
  if (isLang(q)) return q;
  try {
    const s = localStorage.getItem("ct-lang");
    if (isLang(s)) return s;
  } catch {}
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  return nav === "en" || nav === "de" ? nav : "hu";
}

export function storeLang(lang: Lang) {
  try { localStorage.setItem("ct-lang", lang); } catch {}
  try {
    const u = new URL(window.location.href);
    u.searchParams.set("lang", lang);
    window.history.replaceState(null, "", u.toString());
  } catch {}
}
