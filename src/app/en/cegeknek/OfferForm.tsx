"use client";
// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/cegeknek/OfferForm.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { FormEvent } from "react";
import { OFFER_EMAIL } from "@/app/config";

const FIELDS: [string, string][] = [
  ["f-ceg", "Company name"],
  ["f-nev", "Contact person"],
  ["f-email", "E-mail"],
  ["f-tel", "Phone"],
  ["f-letszam", "Expected number of people"],
  ["f-csomag", "Interested in"],
  ["f-hely", "Location"],
  ["f-megj", "Notes"],
];

/** Builds a pre-filled e-mail from the offer form; disabled until OFFER_EMAIL is set. */
export function OfferForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!OFFER_EMAIL) return;
    const data = new FormData(event.currentTarget);
    const body = FIELDS.map(([key, label]) => `${label}: ${String(data.get(key) ?? "")}`).join("\n");
    const subject = `Calm Touch ajánlatkérés – ${String(data.get("f-ceg") ?? "")}`;
    window.location.href = `mailto:${OFFER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
<form onSubmit={handleSubmit} style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-ceg" style={{"fontWeight": "500"}}>Company name</label><input id="f-ceg" name="f-ceg" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-nev" style={{"fontWeight": "500"}}>Contact person</label><input id="f-nev" name="f-nev" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-email" style={{"fontWeight": "500"}}>E-mail</label><input id="f-email" name="f-email" type="email" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-tel" style={{"fontWeight": "500"}}>Phone</label><input id="f-tel" name="f-tel" type="tel" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-letszam" style={{"fontWeight": "500"}}>Expected number of people</label><input id="f-letszam" name="f-letszam" type="number" min="1" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><label htmlFor="f-csomag" style={{"fontWeight": "500"}}>Interested in</label><select id="f-csomag" name="f-csomag" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 12px", "font": "inherit", "background": "#FFFFFF"}}><option>First session (pilot), 3 hours</option><option>Regular – weekly</option><option>Regular – every 2 weeks</option><option>Regular – every 3 weeks</option><option>Regular – monthly</option><option>Wellbeing Day, 2 × 3 hours</option></select></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-hely" style={{"fontWeight": "500"}}>Location</label><input id="f-hely" name="f-hely" type="text" style={{"minHeight": "48px", "border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "0 14px", "font": "inherit", "background": "#FFFFFF"}} /></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "gridColumn": "1 / -1"}}><label htmlFor="f-megj" style={{"fontWeight": "500"}}>Notes</label><textarea id="f-megj" name="f-megj" rows={4} style={{"border": "1px solid #CDB8A3", "borderRadius": "10px", "padding": "12px 14px", "font": "inherit", "background": "#FFFFFF", "resize": "vertical"}}></textarea></div>
<div style={{"gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px"}}>
<button type="submit" disabled={!OFFER_EMAIL} aria-describedby={OFFER_EMAIL ? undefined : "ajanlat-allapot"} style={{"background": "#7E3A4A", "color": "#FFFFFF", "border": "none", "padding": "14px 28px", "borderRadius": "999px", "font": "inherit", "fontWeight": "500", "minHeight": "48px", "cursor": "pointer"}}>Request a quote</button>
<span style={{"fontSize": "14px", "color": "#5A4248"}}>By sending you accept the <a href="#ajanlat">privacy notice</a>.</span>
</div>
{!OFFER_EMAIL && (<p id="ajanlat-allapot" style={{ gridColumn: "1 / -1", margin: 0, fontSize: "14px", color: "#5A4248" }}>Quote requests will be available soon.</p>)}
</form>
  );
}
