// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/pulse-plus/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "@/app/MobileMenu";
import { FooterContact } from "@/app/FooterContact";

export const metadata: Metadata = pageMeta("en", "/pulse-plus", "Calm-Touch Pulse+ – instrument-based mental state assessment", "A one-off, integrated instrument-based assessment: qEEG, HRV and a cognitive test in one session, with a personal feedback session and a six-week development plan.");

const blue = "#2C5069";
const mid = "#3F6E8C";
const pale = "#DDE8EF";

const measures = [
  { n: "1", t: "qEEG", sub: "the brain’s electrical picture", d: "Recording the brain’s electrical activity with eyes open and closed, then analysing the distribution of brain rhythms.", w: "The quality of the resting state: for some people the nervous system works even with eyes closed as if it had a task – it cannot switch off." },
  { n: "2", t: "HRV", sub: "the nervous system’s operating mode", d: "A few minutes’ recording of the tiny time variations between heartbeats.", w: "Autonomic balance and recovery reserve: how flexibly the body switches between load and rest." },
  { n: "3", t: "Cognitive test", sub: "four computer tasks", d: "Attention, reaction time, information processing and decisions under pressure.", w: "Hard numbers on performance: with exhaustion, reaction time gets longer, attention fluctuates more and errors increase." },
];

const timeline = [
  { t: "Measurable change", d: "HRV, qEEG, performance", c: "#3F6E8C" },
  { t: "Subjective complaint", d: "“I can’t go on like this”", c: "#B07D18" },
  { t: "Absence", d: "sick leave, resignation, replacement", c: "#A63D32" },
];

const limits = [
  { t: "Not a diagnosis", d: "qEEG does not become a depression test, and HRV does not become a burnout index." },
  { t: "It has noise", d: "Electrode contact, alcohol the night before, coffee before the measurement – these must be handled during measurement." },
  { t: "Not enough on its own", d: "The value lies where several independent signals point in the same direction. That is why we measure in three ways on the same day." },
];

const card = { background: "#FFFFFF", borderRadius: "20px", padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column" as const, gap: "10px" };
const h2 = { overflowWrap: "break-word" as const, margin: "0", fontFamily: "var(--ct-display)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1, color: blue };
const eyebrow = { fontSize: "13px", letterSpacing: "0.18em", color: mid, fontWeight: 700 };

const ld = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calm-Touch Pulse+",
  serviceType: "Integrated mental state assessment",
  description: "A one-off, integrated instrument-based assessment: qEEG, HRV and a cognitive test in one session, with a personal feedback session and a six-week development plan.",
  url: abs("en", "/pulse-plus"),
  provider: { "@type": "Organization", name: "Calm Touch", url: abs("en", "") },
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
  audience: { "@type": "BusinessAudience" },
};

export default function PulsePlusPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.55", "fontSize": "17px"}}>
<HtmlLang lang="en" />
<JsonLd data={ld} />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch/en" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo-en.webp" alt="Calm Touch – stress relief through touch" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Main navigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch/en" style={{"textDecoration": "none", "color": "#2E3631"}}>Home</a>
<a href="/calm-touch/en/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>For companies</a>
<a href="/calm-touch/en/modszertan" style={{"textDecoration": "none", "color": mid}}>Pulse method</a>
<a href="/calm-touch/en/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a quote</a>
<SiteLang current="en" path="/pulse-plus" />
<MobileMenu lang={{ current: "en", path: "/pulse-plus" }} items={[{ href: "/calm-touch/en", label: "Home" }, { href: "/calm-touch/en/cegeknek", label: "For companies" }, { href: "/calm-touch/en/modszertan", label: "Measurement method" }, { href: "/calm-touch/en/pulse-riport", label: "Example report" }, { href: "/calm-touch/en/cegeknek#ajanlat", label: "Request a quote", primary: true }]} />
</nav>
</div>
</header>

<section style={{"padding": "clamp(44px, 5vw, 72px) 20px clamp(36px, 4vw, 56px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": 800, "color": "#FFFFFF", "background": mid, "borderRadius": "999px", "padding": "4px 18px"}}>Pulse+</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": 700, "fontSize": "clamp(34px, 4.6vw, 56px)", "lineHeight": "1.05", "color": blue, "textWrap": "balance"}}>Integrated mental state assessment</h1>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "20px", "color": "#3B443E", "textWrap": "pretty"}}>Three instrument-based measurements in one assessment: brain activity, heart rate variability and cognitive performance. The personal feedback session shows what is worth focusing on in the coming weeks. It complements the Calm-Touch Pulse questionnaire feedback with objective data.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>one-off assessment</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>3 instrument-based measurements</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>personal feedback session</span>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WHY WE MEASURE</span>
<h2 style={h2}>The signs come before the complaint</h2>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>“I’m fine,” says the employee; the survey says all is well, and the manager sees it the same way. But mental state has a body too: by the time someone says they can’t cope, it has been visible in their body for weeks or months.</p>
<ol aria-label="Timeline" style={{"listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", "gap": "12px"}}>
{timeline.map((s, i) => (
<li key={s.t} style={{...card, "background": "#FAF6F1", "borderTop": `5px solid ${s.c}`}}>
<span style={{"fontSize": "13px", "fontWeight": 700, "color": s.c}}>{i + 1}.</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": "#2E3631"}}>{s.t}</b>
<span style={{"color": "#3B443E"}}>{s.d}</span>
</li>
))}
</ol>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>The window of opportunity lies between the first and second step. Prevention costs far less than recovery.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>WHAT THE ASSESSMENT INCLUDES</span>
<h2 style={h2}>Three measurements, one profile</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", "gap": "16px"}}>
{measures.map((m) => (
<div key={m.n} style={card}>
<span style={{"width": "40px", "height": "40px", "borderRadius": "20px", "background": mid, "color": "#FFFFFF", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontWeight": 800, "fontSize": "18px"}}>{m.n}</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "22px", "color": blue}}>{m.t} <span style={{"fontSize": "16px", "fontWeight": 600, "color": mid}}>· {m.sub}</span></b>
<span style={{"color": "#3B443E"}}>{m.d}</span>
<span style={{"color": "#2E3631"}}><b>What it shows:</b> {m.w}</span>
</div>
))}
</div>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>The three results combine into a single profile – the basis for a personalised development plan.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>HOW IT WORKS</span>
<h2 style={h2}>Two short appointments</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>Appointment 1 – measurement, about 40 minutes</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>A short background conversation</li>
<li>The three instrument-based measurements</li>
<li>Data are processed afterwards</li>
</ul>
</div>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>Appointment 2 – feedback, about 20 minutes</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>A detailed, clear explanation of the results</li>
<li>Discussing how the results connect</li>
<li>Development direction and a six-week plan</li>
</ul>
</div>
</div>
<p style={{"margin": "0", "maxWidth": "860px", "color": "#3B443E"}}>The assessment is complete in itself. If the participant follows the six-week plan, the measurement can be repeated with the same protocol – in a company this cycle fits a quarterly rhythm well, and the second measurement shows the change.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={{...eyebrow, "color": "#7E3A4A"}}>HONESTLY</span>
<h2 style={{...h2, "color": "#7E3A4A"}}>What a measurement cannot do</h2>
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
<span style={eyebrow}>WHAT YOU GET</span>
<h2 style={h2}>For the participant and the employer</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>For the participant</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Feedback on what you previously only suspected</li>
<li>Neutral data, without judgement</li>
<li>Targeted recommendations on sleep, workload and attention</li>
<li>The measurement can be repeated after six weeks, so change can be tracked</li>
</ul>
</div>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>For the employer</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Demonstrable effect: a satisfaction survey measures how much people liked it – physiology shows whether something actually happened</li>
<li>Objective, quantitative data accompany the wellbeing programme</li>
<li>A group-level, anonymised picture of the organisation’s load</li>
<li>The individual result belongs to the person measured; the company only sees combined results for at least 10 people</li>
<li>The assessment only takes place with the participant’s personal, written consent</li>
</ul>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "24px", "alignItems": "start"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>TRUST</span>
<h2 style={h2}>No measurement without trust</h2>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>The person measured</b>
<span style={{"color": "#3B443E"}}>Sees their full individual result. The profile is theirs and no one else’s.</span>
</div>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>The company</b>
<span style={{"color": "#3B443E"}}>Only sees a combined, anonymised picture from at least 10 people – never with names.</span>
</div>
<p style={{"margin": "0", "color": "#3B443E"}}>If this boundary is crossed even once, no one will be honest at the next measurement.</p>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>LED BY</span>
<div style={{...card, "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "gap": "20px"}}>
<img src="/calm-touch/images/szaloki-laszlo.webp" alt="László Szalóki" width={480} height={480} loading="lazy" style={{"width": "140px", "height": "140px", "objectFit": "cover", "borderRadius": "70px", "flex": "0 0 auto"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1 1 200px"}}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "24px", "color": blue}}>László Szalóki</b>
<span style={{"color": "#3B443E"}}>Cognitive researcher · Neurotrainer</span>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>Bioptima Agytréner Központ</span>
</div>
<p style={{"margin": "0", "flex": "1 1 100%", "fontSize": "16px", "color": "#3B443E"}}>Electrical engineer, cognitive and neurotechnology specialist and brain trainer. His university research examined the electrophysiological correlates of language comprehension. For more than ten years he worked at the Performance Diagnostics Research Department of the Országos Sportegészségügyi Intézet (Hungarian national institute for sports medicine), where, as professional head of the cognitive module, he studied the mental and neural factors of athletic performance. He is a founding member of the Magyar Teljesítménydiagnosztikai Társaság (Hungarian society of performance diagnostics) and a regular speaker at the Magyar Sporttudományi Társaság (Hungarian society of sport science).</p>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>WHO IT’S FOR</span>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>For ongoing stress, attention difficulties or mood swings, or for anyone who wants to improve their performance at work. In a company setting we recommend it for managers and high-pressure teams, as a complement to the Calm-Touch programme.</p>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>We prepare individual quotes for company packages, group assessments and on-site measurement; we send the price based on your request.</p>
<a href="/calm-touch/en/cegeknek#ajanlat" style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": 600, "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a Pulse+ quote</a>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>The integrated mental state assessment is an assessment and development service; it does not provide a medical diagnosis and does not replace treatment.</span>
</div>
</section>

<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Operated by: Alternatíva Tanácsadó Csoport Kft.<FooterContact /></span>
<LegalLinks current="en" method />
</div>
</footer>
</div>
  );
}
