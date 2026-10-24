// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/pulse-plus/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";

export const metadata: Metadata = pageMeta("de", "/pulse-plus", "Calm-Touch Pulse+ – apparative mentale Zustandserhebung", "Eine einmalige, integrierte apparative Zustandserhebung: qEEG, HRV und kognitiver Test in einer Untersuchung, mit persönlicher Auswertung und Sechs-Wochen-Entwicklungsplan.");

const blue = "#2C5069";
const mid = "#3F6E8C";
const pale = "#DDE8EF";

const measures = [
  { n: "1", t: "qEEG", d: "Aufzeichnung der elektrischen Hirnaktivität in Ruhe, mit offenen und geschlossenen Augen; sie zeigt die Verteilung auf die Frequenzbänder." },
  { n: "2", t: "HRV", d: "Messung der Schwankung der Abstände zwischen den Herzschlägen; sie gibt Aufschluss über die Regulation des vegetativen Nervensystems." },
  { n: "3", t: "Kognitiver Test", d: "Vier Computeraufgaben: Aufmerksamkeit, Reaktionszeit, Informationsverarbeitung, Entscheidung." },
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

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WAS DIE ERHEBUNG UMFASST</span>
<h2 style={h2}>Drei Messungen, ein gemeinsames Profil</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", "gap": "16px"}}>
{measures.map((m) => (
<div key={m.n} style={card}>
<span style={{"width": "40px", "height": "40px", "borderRadius": "20px", "background": mid, "color": "#FFFFFF", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontWeight": 800, "fontSize": "18px"}}>{m.n}</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "22px", "color": blue}}>{m.t}</b>
<span style={{"color": "#3B443E"}}>{m.d}</span>
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
<li>Zum Wellbeing-Programm kommen objektive, quantitative Daten hinzu</li>
<li>Ein anonymisiertes Bild der Belastung der Organisation auf Gruppenebene</li>
<li>Einzelergebnisse gehören der gemessenen Person; das Unternehmen sieht nur Zusammenfassungen</li>
</ul>
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
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px"}}>
<a href="/calm-touch/de/cegeknek">Für Unternehmen</a>
<a href="/calm-touch/de/modszertan">Messmethodik</a>
</div>
</div>
</footer>
</div>
  );
}
