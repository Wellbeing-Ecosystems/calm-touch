// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/cegeknek/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";
import { OfferForm } from "./OfferForm";

export const metadata: Metadata = pageMeta("en", "/cegeknek", "For companies – office stress-relief programme, packages and prices", "Calm Touch packages for companies in Budapest and within 20 km: pilot (3 hours, up to 8 people), regular sessions and Wellbeing Day, with an anonymous monthly Calm-Touch Pulse report.");

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${abs("en", "/cegeknek")}#gyik`,
      mainEntity: [
    { "@type": "Question", name: "Is this massage?", acceptedAnswer: { "@type": "Answer", text: "Not a classic massage: no strong pressure and no oil. Slow, gentle touch through clothing, aimed at mental refreshment." } },
    { "@type": "Question", name: "What if someone doesn't like being touched?", acceptedAnswer: { "@type": "Answer", text: "Participation is voluntary. Touch areas are agreed in advance, and the session can be stopped at any time." } },
    { "@type": "Question", name: "How much time does it take from work?", acceptedAnswer: { "@type": "Answer", text: "About 20 minutes in total, including the snapshots. The monthly questionnaire takes about 2 more minutes once a month." } },
    { "@type": "Question", name: "Who sees the answers?", acceptedAnswer: { "@type": "Answer", text: "The company only receives aggregated results, in groups of at least 5. We never share individual data; answers are paired by a personal code, not a name." } },
    { "@type": "Question", name: "Why is the longer questionnaire only once a month?", acceptedAnswer: { "@type": "Answer", text: "So it doesn't burden participants and the trend stays clean: one person gives one answer per month, so monthly data are comparable." } },
    { "@type": "Question", name: "Is this a healthcare service?", acceptedAnswer: { "@type": "Answer", text: "No. It is a wellbeing service; it does not diagnose or treat. The snapshot is a self-report, not a medical measurement." } },
    { "@type": "Question", name: "How is the benefit taxed?", acceptedAnswer: { "@type": "Answer", text: "We recommend checking the tax treatment with your company's accountant." } },
    { "@type": "Question", name: "Where is the service available?", acceptedAnswer: { "@type": "Answer", text: "The prices on this website apply in Budapest and within a 20 km radius. We also travel further; in that case travel costs are added." } }
      ],
    },
    {
      "@type": "Service",
      name: "Calm-Touch",
      serviceType: "Workplace stress-relief programme with gentle touch",
      url: abs("en", "/cegeknek"),
      provider: { "@type": "Organization", name: "Calm Touch", url: abs("en", "") },
      areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
      audience: { "@type": "BusinessAudience" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Regular package · introductory net prices per session",
        itemListElement: [
          { "@type": "Offer", name: "First session (pilot)", description: "3 hours · up to 8 people", price: 50000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Regular – weekly", description: "3 hours / session", price: 55000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Regular – every 2 weeks", description: "3 hours / session", price: 59000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Regular – every 3 weeks", description: "3 hours / session", price: 62000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Regular – monthly", description: "3 hours / session", price: 65000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Wellbeing Day", description: "2 × 3 hours · up to 16 people", price: 75000, priceCurrency: "HUF" },
        ],
      },
    },
  ],
};

export default function CegeknekPage() {
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
<a href="#pulse" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Pulse report</a>
<a href="#csomagok" style={{"textDecoration": "none", "color": "#2E3631"}}>Packages</a>
<a href="#gyik" style={{"textDecoration": "none", "color": "#2E3631"}}>FAQ</a>
<a href="#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a quote</a>
<SiteLang current="en" path="/cegeknek" />
<MobileMenu lang={{ current: "en", path: "/cegeknek" }} items={[{ href: "/calm-touch/en", label: "Home" }, { href: "#pulse", label: "Pulse report" }, { href: "#csomagok", label: "Packages" }, { href: "#gyik", label: "FAQ" }, { href: "/calm-touch/en/pulse-plus", label: "Pulse+ instrument-based assessment" }, { href: "/calm-touch/en/modszertan", label: "Measurement method" }, { href: "#ajanlat", label: "Request a quote", primary: true }]} />
</nav>
</div>
</header>
<section style={{"padding": "clamp(48px, 5.0vw, 72px) 20px clamp(48px, 5.6vw, 80px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#55665A", "fontWeight": "500"}}>FOR HR AND MANAGERS</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 4.5vw, 58px)", "lineHeight": "1.04", "textWrap": "balance"}}>Mental refreshment within the working day – with trackable feedback.</h1>
<p style={{"margin": "0", "fontSize": "19px", "color": "#3B443E", "textWrap": "pretty"}}>Your employees aren’t worn out by the amount of work, but by never being able to stop. Calm-Touch’s 15–20-minute office sessions give that pause back – and each month you receive an anonymous, aggregated Pulse report on how the team is coping and what the sessions changed.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px"}}>
<a href="#ajanlat" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a pilot quote</a>
<a href="/calm-touch/en/pulse-riport" style={{"textDecoration": "none", "color": "#55665A", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "border": "1px solid #55665A", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Example Pulse report</a>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="An HR manager and a wellbeing specialist chat informally in a meeting room, with a laptop and mugs." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<b style={{"fontSize": "18px"}}>Why now?</b>
<span style={{"color": "#3B443E"}}>29% of European workers report stress, depression or anxiety; more than 40% work under severe time pressure. Hungarians name workplace tension as the main cause of their unhealthy habits.</span>
<span style={{"color": "#3B443E"}}>Calm-Touch complements – but does not replace – psychosocial risk assessment and organisational measures.</span>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Sources: EU-OSHA, OSH Pulse 2025; STADA Health Report 2025</span>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#2C5069", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "maxWidth": "50rem"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.18em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08", "color": "#FFFFFF"}}>Stress relief and a short state check in one.</h2>
<p style={{"margin": "0", "fontSize": "18px", "color": "#E6EEF3", "textWrap": "pretty"}}>You see the team’s state not from an annual survey but from a real monthly picture. Every session gives three signals, each with a green–amber–red rating.</p>
</div>
<div style={{"overflowX": "auto", "background": "#FAF6F1", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "760px", "borderCollapse": "collapse", "color": "#2E3631", "fontSize": "15px"}}>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2"}}>
<th scope="col" style={{"padding": "16px 20px"}}>Signal</th>
<th scope="col" style={{"padding": "16px 20px"}}>What it shows</th>
<th scope="col" style={{"padding": "16px 20px"}}>Source and frequency</th>
<th scope="col" style={{"padding": "16px 20px"}}>Green</th>
<th scope="col" style={{"padding": "16px 20px"}}>Amber</th>
<th scope="col" style={{"padding": "16px 20px"}}>Red</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>1. State pulse</th>
<td style={{"padding": "16px 20px"}}>What state people arrive in</td>
<td style={{"padding": "16px 20px"}}>Before-snapshot, wellbeing index 1–10 · every session</td>
<td style={{"padding": "16px 20px"}}>above 6</td>
<td style={{"padding": "16px 20px"}}>4,1–6</td>
<td style={{"padding": "16px 20px"}}>4 or below</td>
</tr>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>2. Effect</th>
<td style={{"padding": "16px 20px"}}>How much the touch changed</td>
<td style={{"padding": "16px 20px"}}>Change in wellbeing index (after − before) · every session</td>
<td style={{"padding": "16px 20px"}}>at least +2 points</td>
<td style={{"padding": "16px 20px"}}>+1 to +1.9 points</td>
<td style={{"padding": "16px 20px"}}>below +1 point</td>
</tr>
<tr>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>3. Monthly trend</th>
<td style={{"padding": "16px 20px"}}>Whether the improvement lasts and the workload is sustainable</td>
<td style={{"padding": "16px 20px"}}>11-statement questionnaire, monthly wellbeing index 1–10 · monthly, once per participant</td>
<td style={{"padding": "16px 20px"}}>above 6.5</td>
<td style={{"padding": "16px 20px"}}>4,6–6,5</td>
<td style={{"padding": "16px 20px"}}>4.5 or below</td>
</tr>
</tbody>
</table>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"background": "#FAF6F1", "color": "#2E3631", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#DDE8EF", "border": "2px solid #3F6E8C", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse</span>
<b style={{"fontSize": "19px"}}>Before–after questionnaire measurement</b>
<span style={{"color": "#3B443E"}}>6 questions before and after every session on a 1–10 scale (1 = not at all, 10 = completely), plus a monthly 11-statement questionnaire. Included in every package.</span>
</div>
<div style={{"background": "#3F6E8C", "color": "#FFFFFF", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#FFFFFF", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse+</span>
<b style={{"fontSize": "19px"}}>Additional instrument-based assessment</b>
<span style={{"color": "#F2F6F9"}}>A one-off instrument-based assessment alongside the questionnaires: brain activity (qEEG), heart rate variability (HRV) and a cognitive test, adding objective physiological and cognitive data to how people feel. Price on individual quote.</span>
<a href="/calm-touch/en/pulse-plus" style={{"alignSelf": "flex-start", "color": "#FFFFFF", "fontWeight": "700"}}>Pulse+ details <span className="ct-arrow">→</span></a>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Regular load signal</b><span style={{"color": "#EEF0EA"}}>Each month you see which team’s tension is rising – for example at month-end close or project peaks.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Trackable change</b><span style={{"color": "#EEF0EA"}}>Wellbeing spending comes with indicators calculated from participants’ feedback, not just impressions.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Prevention</b><span style={{"color": "#EEF0EA"}}>A persistent red signal is an early warning: a targeted assessment, workshop or change in work organisation can be started in good time.</span></div>
</div>
<span style={{"fontSize": "14px", "color": "#E6EAE4"}}>All indicators are on a 1–10 scale where 10 = best state; for negatively worded questions (e.g. tension, exhaustion) scoring is reversed. Thresholds are initial proposals, refined using the first three months of data. The report also states its limits: it shows the self-reports of voluntary participants, not the whole organisation. The question set is our own compilation based on the research literature, not a validated diagnostic instrument.</span>
</div>
</section>
<section style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>MEASUREMENT RULES</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.1vw, 40px)", "lineHeight": "1.1"}}>Short, anonymous, and a burden to no one.</h2>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<li><b>6-question snapshot</b> before and after every session, about 30 seconds.</li>
<li><b>11-statement monthly questionnaire</b> once a month, at most once per participant per month – after the first session of the month. The system recognises from the personal code if someone has already completed it.</li>
<li>No name, e-mail or job title: participants choose their own 4-digit code.</li>
<li>The company only sees aggregated data for groups of at least 5 people. Retention: 12 months, after which only the aggregated report remains.</li>
</ul>
<a href="/calm-touch/en/folyamat" style={{"alignSelf": "flex-start", "color": "#55665A", "fontWeight": "500"}}>The full process as a diagram <span className="ct-arrow">→</span></a>
<a href="/calm-touch/en/modszertan" style={{"alignSelf": "flex-start", "color": "#3F6E8C", "fontWeight": "500"}}>Measurement method and scientific background <span className="ct-arrow">→</span></a>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<b style={{"fontSize": "18px"}}>What you get</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px", "color": "#3B443E"}}>
<li>Monthly Calm-Touch Pulse report: the team’s current load, the effect of the sessions and the monthly trend, with green–amber–red ratings.</li>
<li>At the end of the pilot: a one-page report on participation, change, satisfaction and recommendations.</li>
<li>With a regular package: a quarterly summary with recommended actions.</li>
<li>Optional: a 4-question monthly team pulse for non-participants too, for comparison.</li>
</ul>
<b style={{"fontSize": "18px", "marginTop": "8px"}}>What do we need from you?</b>
<span style={{"color": "#3B443E"}}>A quiet meeting room or corner, a chair and an internal sign-up list (we provide a template). We bring everything else – equipment, questionnaires and reports.</span>
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="A quiet office relaxation corner with an upholstered chair, a burgundy cushion, a small table, a QR sign and plants." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>This is what a prepared Calm-Touch corner looks like.</span>
</div>
</div>
</section>
<section id="csomagok" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>PACKAGES</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>From pilot to regular presence.</h2>
</div>
<p style={{"margin": "0", "color": "#3B443E", "maxWidth": "46rem"}}>A booking lasts at least 3 hours (up to 8 people); for larger teams 2 × 3 hours (up to 16 people). Regular presence can be booked weekly, every 2 or 3 weeks, or monthly – the more frequent, the lower the price per booking.</p>
<div style={{"overflowX": "auto", "border": "2px solid #55665A", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "560px", "borderCollapse": "collapse", "fontSize": "16px"}}>
<caption style={{"textAlign": "left", "padding": "18px 22px 0", "fontWeight": "600", "fontSize": "18px"}}>Regular package · introductory net prices per session</caption>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2", "color": "#5E6A62"}}>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>Frequency</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>3 hours / session</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>2 × 3 hours / session</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Weekly</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 55,000</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 80,000</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Every 2 weeks</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 59,000</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 87,000</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Every 3 weeks</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 62,000</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 90,000</td>
</tr>
<tr>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Monthly</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 65,000</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>HUF 95,000</td>
</tr>
</tbody>
</table>
<p style={{"margin": "0", "padding": "0 22px 18px", "fontSize": "14px", "color": "#5E6A62"}}>Every regular package includes a monthly Calm-Touch Pulse report and a quarterly summary.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>First session (pilot)</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>3 hours · up to 8 people</span>
<span style={{"color": "#3B443E"}}>One team tries it; an aggregated feedback report at the end.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>HUF 50,000</span>
</div>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Wellbeing Day</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>2 × 3 hours · up to 16 people</span>
<span style={{"color": "#3B443E"}}>Health day, event, leadership day.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>HUF 75,000</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Introductory net prices, in Budapest and within a 20 km radius; for locations further away, travel costs are added. Participant numbers are based on individual 15–20-minute sessions with one practitioner, including time for arrival and changeover. Invoiced to the company per session.</span>
</div>
</section>
<section id="gyik" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Frequently asked questions</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Is this massage?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Not a classic massage: no strong pressure and no oil. Slow, gentle touch through clothing, aimed at mental refreshment.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>What if someone doesn’t like being touched?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Participation is voluntary. Touch areas are agreed in advance, and the session can be stopped at any time.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>How much time does it take from work?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>About 20 minutes in total, including the snapshots. The monthly questionnaire takes about 2 more minutes once a month.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Who sees the answers?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>The company only receives aggregated results, in groups of at least 5. We never share individual data; answers are paired by a personal code, not a name.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Why is the longer questionnaire only once a month?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>So it doesn’t burden participants and the trend stays clean: one person gives one answer per month, so monthly data are comparable.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Is this a healthcare service?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>No. It is a wellbeing service; it does not diagnose or treat. The snapshot is a self-report, not a medical measurement.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>How is the benefit taxed?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>We recommend checking the tax treatment with your company’s accountant.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Where is the service available?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>The prices on this website apply in Budapest and within a 20 km radius. We also travel further; in that case travel costs are added.</p></details>
</div>
</div>
</section>
<section id="ajanlat" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Request a pilot quote</h2>
<span style={{"color": "#5A4248"}}>We reply within two working days.</span>
</div>
<OfferForm />
</div>
</section>
<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Operated by: Alternatíva Tanácsadó Csoport Kft.</span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px"}}>
<a href="/calm-touch/en/modszertan">Measurement method</a>
<a href="https://pszichoszoc.hu/adatkezelesi-tajekoztato">Privacy notice</a>
</div>
</div>
</footer>
</div>
  );
}
