"use client";
// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/cegeknek/OfferForm.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { FormEvent } from "react";
import { OFFER_EMAIL, OFFER_URL } from "@/app/config";

const FIELDS: [string, string][] = [
  ["f-ceg", "Unternehmen"],
  ["f-nev", "Ansprechperson"],
  ["f-email", "E-Mail"],
  ["f-tel", "Telefon"],
  ["f-letszam", "Voraussichtliche Teilnehmerzahl"],
  ["f-csomag", "Interesse an"],
  ["f-hely", "Ort"],
  ["f-megj", "Anmerkungen"],
];

/** Ajánlatkérés: OFFER_URL (bevetel.hu) → link; különben OFFER_EMAIL → előre kitöltött e-mail; egyik sincs → rövid tájékoztatás. */
export function OfferForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!OFFER_EMAIL) return;
    const data = new FormData(event.currentTarget);
    const body = FIELDS.map(([key, label]) => `${label}: ${String(data.get(key) ?? "")}`).join("\n");
    const subject = `Calm Touch ajánlatkérés – ${String(data.get("f-ceg") ?? "")}`;
    window.location.href = `mailto:${OFFER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (OFFER_URL) {
    return (
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px"}}>
<p style={{"margin": "0", "color": "#3B443E"}}>Das Anfrageformular öffnet sich in einem neuen Tab.</p>
<a href={OFFER_URL} target="_blank" rel="noopener" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 28px", "borderRadius": "999px", "fontWeight": "600", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Angebot anfragen</a>
</div>
    );
  }
  if (!OFFER_EMAIL) {
    return (
<p style={{"margin": "0", "background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px", "color": "#3B443E"}}>Online-Angebotsanfragen sind in wenigen Tagen möglich.</p>
    );
  }
  return (
<form onSubmit={handleSubmit} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-ceg" style={{"fontWeight": "500"}}>Unternehmen</label><input id="f-ceg" name="f-ceg" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-nev" style={{"fontWeight": "500"}}>Ansprechperson</label><input id="f-nev" name="f-nev" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-email" style={{"fontWeight": "500"}}>E-Mail</label><input id="f-email" name="f-email" type="email" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-tel" style={{"fontWeight": "500"}}>Telefon</label><input id="f-tel" name="f-tel" type="tel" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-letszam" style={{"fontWeight": "500"}}>Voraussichtliche Teilnehmerzahl</label><input id="f-letszam" name="f-letszam" type="number" min="1" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-csomag" style={{"fontWeight": "500"}}>Interesse an</label><select id="f-csomag" name="f-csomag" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 12px", "font": "inherit", "background": "#FFFFFF"}}><option>Erster Termin (Pilot), 3 Stunden</option><option>Regelmäßig – wöchentlich</option><option>Regelmäßig – alle 2 Wochen</option><option>Regelmäßig – alle 3 Wochen</option><option>Regelmäßig – monatlich</option><option>Wellbeing Day, 2 × 3 Stunden</option></select></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-hely" style={{"fontWeight": "500"}}>Ort</label><input id="f-hely" name="f-hely" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-megj" style={{"fontWeight": "500"}}>Anmerkungen</label><textarea id="f-megj" name="f-megj" rows={4} style={{"border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "12px 14px", "font": "inherit", "background": "#FFFFFF", "resize": "vertical"}}></textarea></div>
<div style={{"gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px"}}>
<button type="submit" style={{"background": "#7E3A4A", "color": "#FFFFFF", "border": "none", "padding": "14px 28px", "borderRadius": "999px", "font": "inherit", "fontWeight": "500", "minHeight": "48px", "cursor": "pointer"}}>Angebot anfragen</button>
<span style={{"fontSize": "14px", "color": "#5A4248"}}>Mit dem Absenden akzeptieren Sie den <a href="/calm-touch/de/adatkezeles">Datenschutzhinweis</a>.</span>
</div>
</form>
  );
}
