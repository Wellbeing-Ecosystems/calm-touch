// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/cegeknek/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";
import { OfferForm } from "./OfferForm";

export const metadata: Metadata = {
  title: "Für Unternehmen – Pilot, Pakete und Pulse-Bericht",
  description: "Calm-Touch-Pakete für Unternehmen: Pilot, regelmäßige Termine und Wellbeing Day, mit anonymem monatlichem Calm-Touch-Pulse-Bericht.",
  alternates: { canonical: "/calm-touch/de/cegeknek" },
};

export default function CegeknekPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.55", "fontSize": "17px"}}>
<HtmlLang lang="de" />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stressabbau durch Berührung" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Hauptnavigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "color": "#2E3631"}}>Startseite</a>
<a href="#pulse" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Pulse-Bericht</a>
<a href="#csomagok" style={{"textDecoration": "none", "color": "#2E3631"}}>Pakete</a>
<a href="#gyik" style={{"textDecoration": "none", "color": "#2E3631"}}>FAQ</a>
<a href="#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Angebot anfragen</a>
<SiteLang current="de" path="/cegeknek" />
<MobileMenu lang={{ current: "de", path: "/cegeknek" }} items={[{ href: "/calm-touch/de", label: "Startseite" }, { href: "#pulse", label: "Pulse-Bericht" }, { href: "#csomagok", label: "Pakete" }, { href: "#gyik", label: "FAQ" }, { href: "/calm-touch/de/pulse-plus", label: "Pulse+ apparative Erhebung" }, { href: "/calm-touch/de/modszertan", label: "Messmethodik" }, { href: "#ajanlat", label: "Angebot anfragen", primary: true }]} />
</nav>
</div>
</header>
<section style={{"padding": "clamp(48px, 5.0vw, 72px) 20px clamp(48px, 5.6vw, 80px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#55665A", "fontWeight": "500"}}>FÜR HR UND FÜHRUNGSKRÄFTE</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 4.5vw, 58px)", "lineHeight": "1.04", "textWrap": "balance"}}>Messbare mentale Erfrischung innerhalb des Arbeitstages.</h1>
<p style={{"margin": "0", "fontSize": "19px", "color": "#3B443E", "textWrap": "pretty"}}>Ihre Mitarbeitenden ermüdet nicht die Menge der Aufgaben, sondern dass es keinen Halt gibt. Die 15–20-minütigen Calm-Touch-Sitzungen im Büro geben diese Pause zurück – und monatlich erhalten Sie einen anonymen, zusammengefassten Pulse-Bericht darüber, wie es dem Team geht und was die Sitzungen bewirkt haben.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px"}}>
<a href="#ajanlat" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot-Angebot anfragen</a>
<a href="/calm-touch/de/pulse-riport" style={{"textDecoration": "none", "color": "#55665A", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "border": "1px solid #55665A", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Beispiel-Pulse-Bericht</a>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="Eine HR-Leiterin und eine Wellbeing-Expertin unterhalten sich zwanglos in einem Besprechungsraum, mit Laptop und Tassen." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<b style={{"fontSize": "18px"}}>Warum jetzt?</b>
<span style={{"color": "#3B443E"}}>29 % der Beschäftigten in Europa berichten von Stress, Depression oder Angst; mehr als 40 % arbeiten unter starkem Zeitdruck. In Ungarn gilt Anspannung am Arbeitsplatz als Hauptursache ungesunder Gewohnheiten.</span>
<span style={{"color": "#3B443E"}}>Calm-Touch ergänzt – ersetzt aber nicht – die Gefährdungsbeurteilung psychischer Belastungen und organisatorische Maßnahmen.</span>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Quellen: EU-OSHA, OSH Pulse 2025; STADA Health Report 2025</span>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#2C5069", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "maxWidth": "50rem"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.18em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08", "color": "#FFFFFF"}}>Stressabbau und Pulsmessung in einem.</h2>
<p style={{"margin": "0", "fontSize": "18px", "color": "#E6EEF3", "textWrap": "pretty"}}>Sie sehen den Zustand des Teams nicht aus einer jährlichen Umfrage, sondern aus einem echten monatlichen Lagebild. Jede Sitzung liefert drei Signale, jeweils mit Grün–Gelb–Rot-Ampel.</p>
</div>
<div style={{"overflowX": "auto", "background": "#FAF6F1", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "760px", "borderCollapse": "collapse", "color": "#2E3631", "fontSize": "15px"}}>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2"}}>
<th scope="col" style={{"padding": "16px 20px"}}>Signal</th>
<th scope="col" style={{"padding": "16px 20px"}}>Was es zeigt</th>
<th scope="col" style={{"padding": "16px 20px"}}>Quelle und Häufigkeit</th>
<th scope="col" style={{"padding": "16px 20px"}}>Grün</th>
<th scope="col" style={{"padding": "16px 20px"}}>Gelb</th>
<th scope="col" style={{"padding": "16px 20px"}}>Rot</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>1. Zustandspuls</th>
<td style={{"padding": "16px 20px"}}>In welchem Zustand die Menschen ankommen</td>
<td style={{"padding": "16px 20px"}}>Vorher-Momentaufnahme, Wohlbefindens-Index 1–10 · jede Sitzung</td>
<td style={{"padding": "16px 20px"}}>über 6</td>
<td style={{"padding": "16px 20px"}}>4,1–6</td>
<td style={{"padding": "16px 20px"}}>4 oder darunter</td>
</tr>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>2. Wirkung</th>
<td style={{"padding": "16px 20px"}}>Wie viel die Berührung verändert hat</td>
<td style={{"padding": "16px 20px"}}>Veränderung des Wohlbefindens-Index (nachher − vorher) · jede Sitzung</td>
<td style={{"padding": "16px 20px"}}>mindestens +2 Punkte</td>
<td style={{"padding": "16px 20px"}}>+1 bis +1,9 Punkte</td>
<td style={{"padding": "16px 20px"}}>unter +1 Punkt</td>
</tr>
<tr>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>3. Monatstrend</th>
<td style={{"padding": "16px 20px"}}>Ob die Verbesserung anhält und die Belastung tragbar ist</td>
<td style={{"padding": "16px 20px"}}>Fragebogen mit 11 Aussagen, monatlicher Wohlbefindens-Index 1–10 · monatlich, einmal pro Person</td>
<td style={{"padding": "16px 20px"}}>über 6,5</td>
<td style={{"padding": "16px 20px"}}>4,6–6,5</td>
<td style={{"padding": "16px 20px"}}>4,5 oder darunter</td>
</tr>
</tbody>
</table>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"background": "#FAF6F1", "color": "#2E3631", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#DDE8EF", "border": "2px solid #3F6E8C", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse</span>
<b style={{"fontSize": "19px"}}>Vorher–nachher-Messung per Fragebogen</b>
<span style={{"color": "#3B443E"}}>6 Fragen vor und nach jeder Sitzung auf einer Skala von 1–10 (1 = gar nicht, 10 = vollkommen), dazu ein monatlicher Fragebogen mit 11 Aussagen. In jedem Paket enthalten.</span>
</div>
<div style={{"background": "#3F6E8C", "color": "#FFFFFF", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#FFFFFF", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse+</span>
<b style={{"fontSize": "19px"}}>Ergänzende apparative Zustandserhebung</b>
<span style={{"color": "#F2F6F9"}}>Eine einmalige apparative Zustandserhebung ergänzend zu den Fragebögen: Hirnaktivität (qEEG), Herzratenvariabilität (HRV) und ein kognitiver Test – so wird neben dem Erleben auch die Belastung des Nervensystems sichtbar. Preis auf individuelles Angebot: [PULSE+ PREIS].</span>
<a href="/calm-touch/de/pulse-plus" style={{"alignSelf": "flex-start", "color": "#FFFFFF", "fontWeight": "700"}}>Details zu Pulse+ <span className="ct-arrow">→</span></a>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Belastungssignal in Echtzeit</b><span style={{"color": "#EEF0EA"}}>Sie sehen, in welchem Team und wann die Anspannung steigt – beim Monatsabschluss oder in Projektspitzen.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Nachgewiesene Wirkung</b><span style={{"color": "#EEF0EA"}}>Den Wellbeing-Ausgaben steht ein gemessenes Ergebnis gegenüber, nicht nur Zufriedenheitsfeedback.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Prävention</b><span style={{"color": "#EEF0EA"}}>Ein anhaltend rotes Signal ist eine Frühwarnung: Ein Workshop, eine Gefährdungsbeurteilung oder eine arbeitsorganisatorische Maßnahme kann starten, bevor daraus Burnout wird.</span></div>
</div>
<span style={{"fontSize": "14px", "color": "#E6EAE4"}}>Alle Kennzahlen stehen auf einer Skala von 1–10, wobei 10 = bester Zustand; bei negativ formulierten Fragen (z. B. Anspannung, Erschöpfung) wird umgekehrt gewertet. Die Schwellenwerte sind erste Vorschläge und werden anhand der Daten der ersten drei Monate verfeinert. Der Bericht nennt auch seine Grenzen: Er zeigt den Zustand der freiwillig Teilnehmenden, nicht der gesamten Organisation.</span>
</div>
</section>
<section style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>REGELN DER MESSUNG</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.1vw, 40px)", "lineHeight": "1.1"}}>Kurz, anonym und für niemanden eine Last.</h2>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<li><b>Momentaufnahme mit 6 Fragen</b> vor und nach jeder Sitzung, etwa 30 Sekunden.</li>
<li><b>Monatsfragebogen mit 11 Aussagen</b> einmal im Monat, höchstens einmal pro Person – nach der ersten Sitzung des Monats. Das System erkennt am eigenen Code, ob jemand ihn bereits ausgefüllt hat.</li>
<li>Kein Name, keine E-Mail, keine Position: Die Teilnehmenden wählen einen eigenen 4-stelligen Code.</li>
<li>Das Unternehmen sieht nur zusammengefasste Daten von Gruppen ab 5 Personen. Aufbewahrung: 12 Monate, danach bleibt nur der zusammengefasste Bericht.</li>
</ul>
<a href="/calm-touch/de/folyamat" style={{"alignSelf": "flex-start", "color": "#55665A", "fontWeight": "500"}}>Der gesamte Ablauf als Grafik <span className="ct-arrow">→</span></a>
<a href="/calm-touch/de/modszertan" style={{"alignSelf": "flex-start", "color": "#3F6E8C", "fontWeight": "500"}}>Messmethodik und fachlicher Hintergrund <span className="ct-arrow">→</span></a>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<b style={{"fontSize": "18px"}}>Was Sie erhalten</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px", "color": "#3B443E"}}>
<li>Monatlicher Calm-Touch-Pulse-Bericht: aktuelle Belastung des Teams, Wirkung der Sitzungen und Monatstrend, mit Grün–Gelb–Rot-Ampel.</li>
<li>Am Ende des Pilots: ein einseitiger Bericht zu Teilnahme, Veränderung, Zufriedenheit und Empfehlung.</li>
<li>Bei regelmäßigem Paket: eine Quartalszusammenfassung mit Handlungsempfehlungen.</li>
<li>Optional: ein monatlicher Team-Puls mit 4 Fragen auch für Nicht-Teilnehmende, zum Vergleich.</li>
</ul>
<b style={{"fontSize": "18px", "marginTop": "8px"}}>Was brauchen wir von Ihnen?</b>
<span style={{"color": "#3B443E"}}>Ein ruhiger Besprechungsraum oder eine Ecke, ein Stuhl und eine interne Anmeldeliste (wir stellen eine Vorlage bereit). Alles andere – Ausstattung, Fragebögen, Bericht – bringen wir mit.</span>
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="Eine ruhige Entspannungsecke im Büro mit Polstersessel, bordeauxrotem Kissen, kleinem Tisch, QR-Aufsteller und Pflanzen." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>So sieht eine vorbereitete Calm-Touch-Ecke aus.</span>
</div>
</div>
</section>
<section id="csomagok" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>PAKETE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Vom Pilot zur regelmäßigen Präsenz.</h2>
</div>
<p style={{"margin": "0", "color": "#3B443E", "maxWidth": "46rem"}}>Ein Termin dauert mindestens 3 Stunden (9–12 Personen); für größere Teams 2 × 3 Stunden (18–24 Personen). Regelmäßige Präsenz ist wöchentlich, alle 2 oder 3 Wochen oder monatlich buchbar – je häufiger, desto günstiger der Preis pro Termin.</p>
<div style={{"overflowX": "auto", "border": "2px solid #55665A", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "560px", "borderCollapse": "collapse", "fontSize": "16px"}}>
<caption style={{"textAlign": "left", "padding": "18px 22px 0", "fontWeight": "600", "fontSize": "18px"}}>Regelmäßiges Paket · Einführungspreise netto pro Termin</caption>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2", "color": "#5E6A62"}}>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>Häufigkeit</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>3 Stunden / Termin</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>2 × 3 Stunden / Termin</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Wöchentlich</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>55.000 HUF</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>80.000 HUF</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Alle 2 Wochen</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>59.000 HUF</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>87.000 HUF</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Alle 3 Wochen</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>62.000 HUF</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>90.000 HUF</td>
</tr>
<tr>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Monatlich</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>65.000 HUF</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>95.000 HUF</td>
</tr>
</tbody>
</table>
<p style={{"margin": "0", "padding": "0 22px 18px", "fontSize": "14px", "color": "#5E6A62"}}>Zu jedem regelmäßigen Paket gehören ein monatlicher Calm-Touch-Pulse-Bericht und eine Quartalszusammenfassung.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Erster Termin (Pilot)</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>3 Stunden · 9–12 Personen</span>
<span style={{"color": "#3B443E"}}>Ein Team probiert es aus; zusammengefasster Momentaufnahme-Bericht am Ende.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>50.000 HUF</span>
</div>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Wellbeing Day</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>2 × 3 Stunden · 18–24 Personen</span>
<span style={{"color": "#3B443E"}}>Gesundheitstag, Event, Führungskräftetag.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>75.000 HUF</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Einführungspreise netto. Teilnehmerzahl bei 15–20-minütigen Sitzungen mit einer Fachkraft. Rechnung an das Unternehmen, pro Termin.</span>
</div>
</section>
<section id="gyik" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Häufige Fragen</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Ist das eine Massage?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Keine klassische Massage: kein starker Druck, kein Öl. Langsame, sanfte Berührung durch die Kleidung, zur mentalen Erfrischung.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Was, wenn jemand nicht gern berührt wird?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Die Teilnahme ist freiwillig. Die Berührungsbereiche werden vorab abgestimmt, die Sitzung kann jederzeit beendet werden.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Wie viel Arbeitszeit kostet es?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Insgesamt etwa 20 Minuten, inklusive Momentaufnahmen. Der Monatsfragebogen dauert einmal im Monat etwa 2 Minuten zusätzlich.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Wer sieht die Antworten?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Das Unternehmen erhält nur zusammengefasste Ergebnisse, in Gruppen ab 5 Personen. Einzeldaten geben wir nicht heraus; die Antworten werden über einen eigenen Code verknüpft, nicht über einen Namen.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Warum gibt es den längeren Fragebogen nur einmal im Monat?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Damit die Teilnehmenden nicht belastet werden und der Trend sauber bleibt: eine Person, eine Antwort pro Monat – so sind die Monatsdaten vergleichbar.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Ist das eine Gesundheitsleistung?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Nein. Es ist ein Wellbeing-Angebot, es diagnostiziert und behandelt nicht. Die Momentaufnahme ist eine Selbsteinschätzung, keine medizinische Messung.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Wie wird die Leistung besteuert?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Wir empfehlen, die steuerliche Einordnung mit der Buchhaltung Ihres Unternehmens abzustimmen.</p></details>
</div>
</div>
</section>
<section id="ajanlat" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Pilot-Angebot anfragen</h2>
<span style={{"color": "#5A4248"}}>Wir antworten innerhalb von zwei Werktagen.</span>
</div>
<OfferForm />
</div>
</section>
<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Betreiber: Alternatíva Tanácsadó Csoport Kft. · [NAME] · [E-MAIL] · [TELEFON]</span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px"}}>
<a href="/calm-touch/de/modszertan">Messmethodik</a>
<a href="#ajanlat">Datenschutzhinweis</a>
<a href="#ajanlat">Impressum</a>
</div>
</div>
</footer>
</div>
  );
}
