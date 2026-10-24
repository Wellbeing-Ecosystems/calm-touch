// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/pulse-plus/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "@/app/MobileMenu";

export const metadata: Metadata = pageMeta("de", "/pulse-plus", "Calm-Touch Pulse+ – apparative mentale Zustandserhebung", "Eine einmalige, integrierte apparative Zustandserhebung: qEEG, HRV und kognitiver Test in einer Untersuchung, mit persönlicher Auswertung und Sechs-Wochen-Entwicklungsplan.");

const blue = "#2C5069";
const mid = "#3F6E8C";
const pale = "#DDE8EF";

const measures = [
  { n: "1", t: "qEEG", sub: "das elektrische Bild des Gehirns", d: "Aufzeichnung der elektrischen Hirnaktivität mit offenen und geschlossenen Augen und Analyse der Verteilung der Hirnrhythmen.", w: "Die Qualität des Ruhezustands: Bei manchen arbeitet das Nervensystem selbst mit geschlossenen Augen, als hätte es eine Aufgabe – es kann nicht abschalten." },
  { n: "2", t: "HRV", sub: "der Betriebsmodus des Nervensystems", d: "Eine wenige Minuten lange Aufzeichnung der feinen zeitlichen Schwankungen zwischen den Herzschlägen.", w: "Das autonome Gleichgewicht und die Erholungsreserve: wie flexibel der Körper zwischen Belastung und Ruhe wechselt." },
  { n: "3", t: "Kognitiver Test", sub: "vier Computeraufgaben", d: "Aufmerksamkeit, Reaktionszeit, Informationsverarbeitung und Entscheidungen unter Druck.", w: "Harte Zahlen zur Leistung: Bei Erschöpfung verlängert sich die Reaktionszeit, die Aufmerksamkeit schwankt stärker, die Fehlerzahl steigt." },
];

const timeline = [
  { t: "Messbare Veränderung", d: "HRV, qEEG, Leistung", c: "#3F6E8C" },
  { t: "Subjektive Beschwerde", d: "„So kann ich nicht weitermachen“", c: "#B07D18" },
  { t: "Ausfall", d: "Krankschreibung, Kündigung, Ersatz", c: "#A63D32" },
];

const limits = [
  { t: "Keine Diagnose", d: "Aus dem qEEG wird kein Depressionstest, aus der HRV kein Burnout-Index." },
  { t: "Es gibt Störfaktoren", d: "Elektrodenkontakt, Alkohol am Vorabend, Kaffee vor der Messung – das muss bei der Messung berücksichtigt werden." },
  { t: "Allein zu wenig", d: "Aussagekraft entsteht dort, wo mehrere unabhängige Signale in dieselbe Richtung zeigen. Deshalb messen wir auf drei Arten am selben Tag." },
];

const card = { background: "#FFFFFF", borderRadius: "20px", padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column" as const, gap: "10px" };
const h2 = { overflowWrap: "break-word" as const, margin: "0", fontFamily: "var(--ct-display)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1, color: blue };
const eyebrow = { fontSize: "13px", letterSpacing: "0.18em", color: mid, fontWeight: 700 };

const ld = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calm-Touch Pulse+",
  serviceType: "Integrierte mentale Zustandserhebung",
  description: "Eine einmalige, integrierte apparative Zustandserhebung: qEEG, HRV und kognitiver Test in einer Untersuchung, mit persönlicher Auswertung und Sechs-Wochen-Entwicklungsplan.",
  url: abs("de", "/pulse-plus"),
  provider: { "@type": "Organization", name: "Calm Touch", url: abs("de", "") },
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
  audience: { "@type": "BusinessAudience" },
};

export default function PulsePlusPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.55", "fontSize": "17px"}}>
<HtmlLang lang="de" />
<JsonLd data={ld} />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo-de.webp" alt="Calm Touch – Stressabbau durch Berührung" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Hauptnavigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "color": "#2E3631"}}>Startseite</a>
<a href="/calm-touch/de/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>Für Unternehmen</a>
<a href="/calm-touch/de/modszertan" style={{"textDecoration": "none", "color": mid}}>Pulse-Methodik</a>
<a href="/calm-touch/de/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Angebot anfragen</a>
<SiteLang current="de" path="/pulse-plus" />
<MobileMenu lang={{ current: "de", path: "/pulse-plus" }} items={[{ href: "/calm-touch/de", label: "Startseite" }, { href: "/calm-touch/de/cegeknek", label: "Für Unternehmen" }, { href: "/calm-touch/de/modszertan", label: "Messmethodik" }, { href: "/calm-touch/de/pulse-riport", label: "Beispielbericht" }, { href: "/calm-touch/de/cegeknek#ajanlat", label: "Angebot anfragen", primary: true }]} />
</nav>
</div>
</header>

<section style={{"padding": "clamp(44px, 5vw, 72px) 20px clamp(36px, 4vw, 56px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": 800, "color": "#FFFFFF", "background": mid, "borderRadius": "999px", "padding": "4px 18px"}}>Pulse+</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": 700, "fontSize": "clamp(34px, 4.6vw, 56px)", "lineHeight": "1.05", "color": blue, "textWrap": "balance"}}>Integrierte mentale Zustandserhebung</h1>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "20px", "color": "#3B443E", "textWrap": "pretty"}}>Drei apparative Messungen in einer Untersuchung: Hirnaktivität, Herzratenvariabilität und kognitive Leistung. Die persönliche Auswertung zeigt, worauf es sich in den nächsten Wochen zu achten lohnt. Sie ergänzt die Fragebogen-Rückmeldung von Calm-Touch Pulse um objektive Daten.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>einmalige Erhebung</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>3 apparative Messungen</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>persönliche Auswertung</span>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WARUM WIR MESSEN</span>
<h2 style={h2}>Die Signale kommen vor der Beschwerde</h2>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>„Mir geht es gut“, sagt die Mitarbeiterin; laut Fragebogen ist alles in Ordnung, und die Führungskraft sieht es genauso. Doch der mentale Zustand hat auch einen Körper: Bis jemand ausspricht, dass er nicht mehr kann, ist es in seinem Körper oft schon seit Wochen oder Monaten sichtbar.</p>
<ol aria-label="Zeitleiste" style={{"listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", "gap": "12px"}}>
{timeline.map((s, i) => (
<li key={s.t} style={{...card, "background": "#FAF6F1", "borderTop": `5px solid ${s.c}`}}>
<span style={{"fontSize": "13px", "fontWeight": 700, "color": s.c}}>{i + 1}.</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": "#2E3631"}}>{s.t}</b>
<span style={{"color": "#3B443E"}}>{s.d}</span>
</li>
))}
</ol>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>Das Zeitfenster liegt zwischen dem ersten und dem zweiten Schritt. Vorbeugung ist deutlich günstiger als Wiederherstellung.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WAS DIE ERHEBUNG UMFASST</span>
<h2 style={h2}>Drei Messungen, ein gemeinsames Profil</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", "gap": "16px"}}>
{measures.map((m) => (
<div key={m.n} style={card}>
<span style={{"width": "40px", "height": "40px", "borderRadius": "20px", "background": mid, "color": "#FFFFFF", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontWeight": 800, "fontSize": "18px"}}>{m.n}</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "22px", "color": blue}}>{m.t} <span style={{"fontSize": "16px", "fontWeight": 600, "color": mid}}>· {m.sub}</span></b>
<span style={{"color": "#3B443E"}}>{m.d}</span>
<span style={{"color": "#2E3631"}}><b>Was sie zeigt:</b> {m.w}</span>
</div>
))}
</div>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>Die drei Ergebnisse fügen sich zu einem Profil zusammen – der Grundlage für einen persönlichen Entwicklungsplan.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>ABLAUF</span>
<h2 style={h2}>Zwei kurze Termine</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>1. Termin – Messung, etwa 40 Minuten</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Kurzes Vorgespräch</li>
<li>Durchführung der drei apparativen Messungen</li>
<li>Die Daten werden anschließend ausgewertet</li>
</ul>
</div>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>2. Termin – Auswertung, etwa 20 Minuten</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Ausführliche, verständliche Erklärung der Ergebnisse</li>
<li>Besprechung der Zusammenhänge</li>
<li>Entwicklungsrichtung und Sechs-Wochen-Plan</li>
</ul>
</div>
</div>
<p style={{"margin": "0", "maxWidth": "860px", "color": "#3B443E"}}>Die Erhebung ist für sich vollständig. Folgt die teilnehmende Person dem Sechs-Wochen-Plan, lässt sich die Messung mit demselben Protokoll wiederholen – im Unternehmen passt dieser Zyklus gut zum Quartalsrhythmus, und die zweite Messung zeigt die Veränderung.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={{...eyebrow, "color": "#7E3A4A"}}>EHRLICH GESAGT</span>
<h2 style={{...h2, "color": "#7E3A4A"}}>Was eine Messung nicht kann</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", "gap": "16px"}}>
{limits.map((l) => (
<div key={l.t} style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": "#7E3A4A"}}>{l.t}</b>
<span style={{"color": "#3B443E"}}>{l.d}</span>
</div>
))}
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WAS ES BRINGT</span>
<h2 style={h2}>Für Teilnehmende und Arbeitgeber</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>Für Teilnehmende</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Rückmeldung zu dem, was man bisher nur ahnte</li>
<li>Neutrale Daten, ohne Bewertung</li>
<li>Gezielte Empfehlungen zu Schlaf, Belastung und Aufmerksamkeit</li>
<li>Die Messung kann nach sechs Wochen wiederholt werden, so wird Veränderung sichtbar</li>
</ul>
</div>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>Für Arbeitgeber</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Nachweisbare Wirkung: Die Zufriedenheitsumfrage misst, wie gut es gefallen hat – die Physiologie, ob sich tatsächlich etwas verändert hat</li>
<li>Zum Wellbeing-Programm kommen objektive, quantitative Daten hinzu</li>
<li>Ein anonymisiertes Bild der Belastung der Organisation auf Gruppenebene</li>
<li>Das Einzelergebnis gehört der gemessenen Person; das Unternehmen sieht nur zusammengefasste Ergebnisse von mindestens 10 Personen</li>
<li>Die Erhebung erfolgt nur mit persönlicher, schriftlicher Einwilligung der teilnehmenden Person</li>
</ul>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "24px", "alignItems": "start"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>VERTRAUEN</span>
<h2 style={h2}>Ohne Vertrauen keine Messung</h2>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>Die gemessene Person</b>
<span style={{"color": "#3B443E"}}>Sieht das vollständige Einzelergebnis. Das Profil gehört ihr und niemandem sonst.</span>
</div>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>Das Unternehmen</b>
<span style={{"color": "#3B443E"}}>Sieht nur ein zusammengefasstes, anonymisiertes Bild aus den Daten von mindestens 10 Personen – nie mit Namen.</span>
</div>
<p style={{"margin": "0", "color": "#3B443E"}}>Wird diese Grenze auch nur einmal durchlässig, ist bei der nächsten Messung niemand mehr ehrlich.</p>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>DIE MESSUNG LEITET</span>
<div style={{...card, "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "gap": "20px"}}>
<img src="/calm-touch/images/szaloki-laszlo.webp" alt="László Szalóki" width={480} height={480} loading="lazy" style={{"width": "140px", "height": "140px", "objectFit": "cover", "borderRadius": "70px", "flex": "0 0 auto"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1 1 200px"}}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "24px", "color": blue}}>László Szalóki</b>
<span style={{"color": "#3B443E"}}>Kognitionsforscher · Neurotrainer</span>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>Bioptima Agytréner Központ</span>
</div>
<p style={{"margin": "0", "flex": "1 1 100%", "fontSize": "16px", "color": "#3B443E"}}>Elektroingenieur, Spezialist für Kognition und Neurotechnologie sowie Gehirntrainer. In seiner universitären Forschung untersuchte er die elektrophysiologischen Korrelate des Sprachverstehens. Mehr als zehn Jahre arbeitete er in der Forschungsabteilung für Leistungsdiagnostik des Országos Sportegészségügyi Intézet (ungarisches Landesinstitut für Sportmedizin), wo er als fachlicher Leiter des kognitiven Moduls die mentalen und neuronalen Faktoren sportlicher Leistung untersuchte. Er ist Gründungsmitglied der Magyar Teljesítménydiagnosztikai Társaság (ungarische Gesellschaft für Leistungsdiagnostik) und regelmäßiger Referent der Magyar Sporttudományi Társaság (ungarische Gesellschaft für Sportwissenschaft).</p>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>FÜR WEN</span>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>Bei anhaltendem Stress, Konzentrationsproblemen oder Stimmungsschwankungen oder wenn jemand seine Leistung im Beruf verbessern möchte. Im Unternehmen empfehlen wir es für Führungskräfte und stark belastete Teams, als Ergänzung zum Calm-Touch-Programm.</p>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>Für Unternehmenspakete, Gruppenerhebungen und Messungen vor Ort erstellen wir individuelle Angebote; den Preis senden wir auf Anfrage.</p>
<a href="/calm-touch/de/cegeknek#ajanlat" style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": 600, "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pulse+-Angebot anfragen</a>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Die integrierte mentale Zustandserhebung ist ein Erhebungs- und Entwicklungsangebot; sie stellt keine medizinische Diagnose und ersetzt keine Behandlung.</span>
</div>
</section>

<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Betreiber: Alternatíva Tanácsadó Csoport Kft.</span>
<LegalLinks current="de" method />
</div>
</footer>
</div>
  );
}
