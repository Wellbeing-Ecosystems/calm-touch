"use client";

import { useRef } from "react";
import { LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";
import { setAdminLang } from "./session-actions";

/** Nyelvváltó az admin fejlécében; váltás után ugyanazon az oldalon marad. */
export function AdminLangSwitch({ lang }: { lang: Lang }) {
  const back = useRef<HTMLInputElement>(null);
  const remember = () => {
    if (back.current) back.current.value = window.location.pathname.replace(/^\/calm-touch/, "") + window.location.search;
  };
  return (
    <form action={setAdminLang} style={{ display: "inline-flex", gap: "2px", margin: 0, background: "#F2F6F9", borderRadius: "999px", padding: "2px" }} aria-label="Nyelv / Language / Sprache">
      <input ref={back} type="hidden" name="vissza" defaultValue="" />
      {LANGS.map((l) => (
        <button key={l} type="submit" name="lang" value={l} onClick={remember} aria-pressed={l === lang} style={{ minWidth: "36px", minHeight: "32px", border: "none", borderRadius: "999px", font: "inherit", fontSize: "12px", fontWeight: 700, cursor: "pointer", background: l === lang ? "#2C5069" : "transparent", color: l === lang ? "#FFFFFF" : "#2C5069" }}>{LANG_LABEL[l]}</button>
      ))}
    </form>
  );
}
