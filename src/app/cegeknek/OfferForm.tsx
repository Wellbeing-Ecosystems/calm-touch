"use client";

import type { FormEvent } from "react";
import { OFFER_EMAIL, OFFER_URL } from "../config";

const FIELDS: [string, string][] = [
  ["f-ceg", "Cégnév"],
  ["f-nev", "Kapcsolattartó"],
  ["f-email", "E-mail"],
  ["f-tel", "Telefon"],
  ["f-letszam", "Várható létszám"],
  ["f-csomag", "Érdeklődés"],
  ["f-hely", "Helyszín"],
  ["f-megj", "Megjegyzés"],
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
<p style={{"margin": "0", "color": "#3B443E"}}>Az ajánlatkérő űrlap egy új lapon nyílik meg.</p>
<a href={OFFER_URL} target="_blank" rel="noopener" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 28px", "borderRadius": "999px", "fontWeight": "600", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Ajánlatot kérek</a>
</div>
    );
  }
  if (!OFFER_EMAIL) {
    return (
<p style={{"margin": "0", "background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px", "color": "#3B443E"}}>Az online ajánlatkérés néhány napon belül indul.</p>
    );
  }
  return (
<form onSubmit={handleSubmit} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-ceg" style={{"fontWeight": "500"}}>Cégnév</label><input id="f-ceg" name="f-ceg" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-nev" style={{"fontWeight": "500"}}>Kapcsolattartó</label><input id="f-nev" name="f-nev" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-email" style={{"fontWeight": "500"}}>E-mail</label><input id="f-email" name="f-email" type="email" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-tel" style={{"fontWeight": "500"}}>Telefon</label><input id="f-tel" name="f-tel" type="tel" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-letszam" style={{"fontWeight": "500"}}>Várható létszám</label><input id="f-letszam" name="f-letszam" type="number" min="1" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-csomag" style={{"fontWeight": "500"}}>Érdeklődés</label><select id="f-csomag" name="f-csomag" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 12px", "font": "inherit", "background": "#FFFFFF"}}><option>Első alkalom (pilot), 3 óra</option><option>Rendszeres – hetente</option><option>Rendszeres – 2 hetente</option><option>Rendszeres – 3 hetente</option><option>Rendszeres – havonta</option><option>Wellbeing Day, 2 × 3 óra</option></select></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-hely" style={{"fontWeight": "500"}}>Helyszín</label><input id="f-hely" name="f-hely" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-megj" style={{"fontWeight": "500"}}>Megjegyzés</label><textarea id="f-megj" name="f-megj" rows={4} style={{"border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "12px 14px", "font": "inherit", "background": "#FFFFFF", "resize": "vertical"}}></textarea></div>
<div style={{"gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px"}}>
<button type="submit" style={{"background": "#7E3A4A", "color": "#FFFFFF", "border": "none", "padding": "14px 28px", "borderRadius": "999px", "font": "inherit", "fontWeight": "500", "minHeight": "48px", "cursor": "pointer"}}>Ajánlatot kérek</button>
<span style={{"fontSize": "14px", "color": "#5A4248"}}>Az elküldéssel elfogadja az <a href="/calm-touch/adatkezeles">adatkezelési tájékoztatót</a>.</span>
</div>
</form>
  );
}
