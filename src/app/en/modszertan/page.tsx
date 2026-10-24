// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/modszertan/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";
import { methodHtml } from "./content_en";

export const metadata: Metadata = pageMeta("en", "/modszertan", "Calm-Touch Pulse – measurement method", "How Calm-Touch Pulse measures the effect of sessions: questions and their scientific background, indicators and colour ratings, data protection, limitations and references.");

const PDF = "/calm-touch/docs/calm-touch-pulse-measurement-method-en.pdf";

const ld = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Calm-Touch Pulse – measurement method",
  description: "How Calm-Touch Pulse measures the effect of sessions: questions and their scientific background, indicators and colour ratings, data protection, limitations and references.",
  url: abs("en", "/modszertan"),
  inLanguage: "en",
  datePublished: "2026-10-23",
  publisher: { "@type": "Organization", name: "Calm Touch", url: abs("en", "") },
};

export default function ModszertanPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.6", "fontSize": "17px"}}>
<HtmlLang lang="en" />
<JsonLd data={ld} />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch/en" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – stress relief through touch" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Main navigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch/en" style={{"textDecoration": "none", "color": "#2E3631"}}>Home</a>
<a href="/calm-touch/en/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>For companies</a>
<a href="/calm-touch/en/pulse-riport" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Example report</a>
<a href="/calm-touch/en/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a quote</a>
<SiteLang current="en" path="/modszertan" />
<MobileMenu lang={{ current: "en", path: "/modszertan" }} items={[{ href: "/calm-touch/en", label: "Home" }, { href: "/calm-touch/en/cegeknek", label: "For companies" }, { href: "/calm-touch/en/pulse-plus", label: "Pulse+ instrument-based assessment" }, { href: "/calm-touch/en/pulse-riport", label: "Example report" }, { href: "/calm-touch/en/cegeknek#ajanlat", label: "Request a quote", primary: true }]} />
</nav>
</div>
</header>
<main style={{"padding": "clamp(36px, 5vw, 64px) 20px clamp(48px, 6vw, 80px)"}}>
<div style={{"maxWidth": "880px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "12px", "letterSpacing": "0.2em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE · METHOD</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4vw, 48px)", "lineHeight": "1.08", "color": "#2C5069", "textWrap": "balance"}}>How do we measure the effect of the sessions?</h1>
<a href={PDF} download style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#3F6E8C", "color": "#FFFFFF", "padding": "12px 22px", "borderRadius": "999px", "fontWeight": "600", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Download as PDF</a>
<article className="ct-method" dangerouslySetInnerHTML={{ __html: methodHtml }} />
</div>
</main>
<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Operated by: Alternatíva Tanácsadó Csoport Kft.</span>
<a href="/calm-touch/en/cegeknek">For companies</a>
</div>
</footer>
</div>
  );
}
