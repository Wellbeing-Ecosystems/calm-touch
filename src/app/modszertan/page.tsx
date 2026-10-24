import type { Metadata } from "next";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "../SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "../MobileMenu";
import { methodHtml } from "./content";

export const metadata: Metadata = pageMeta("hu", "/modszertan", "Calm-Touch Pulse – mérési módszertan", "Hogyan méri a Calm-Touch Pulse az alkalmak hatását: kérdések és szakmai hátterük, mutatók és színjelzések, adatvédelem, korlátok és szakmai hivatkozások.");

const PDF = "/calm-touch/docs/calm-touch-pulse-meresi-modszertan.pdf";

const ld = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Calm-Touch Pulse – mérési módszertan",
  description: "Hogyan méri a Calm-Touch Pulse az alkalmak hatását: kérdések és szakmai hátterük, mutatók és színjelzések, adatvédelem, korlátok és szakmai hivatkozások.",
  url: abs("hu", "/modszertan"),
  inLanguage: "hu",
  datePublished: "2026-10-23",
  publisher: { "@type": "Organization", name: "Calm Touch", url: abs("hu", "") },
};

export default function ModszertanPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.6", "fontSize": "17px"}}>
<JsonLd data={ld} />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stresszoldás érintéssel" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Fő navigáció" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch" style={{"textDecoration": "none", "color": "#2E3631"}}>Főoldal</a>
<a href="/calm-touch/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>Cégeknek</a>
<a href="/calm-touch/pulse-riport" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Példa riport</a>
<a href="/calm-touch/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Ajánlatot kérek</a>
<SiteLang current="hu" path="/modszertan" />
<MobileMenu lang={{ current: "hu", path: "/modszertan" }} items={[{ href: "/calm-touch", label: "Főoldal" }, { href: "/calm-touch/cegeknek", label: "Cégeknek" }, { href: "/calm-touch/pulse-plus", label: "Pulse+ műszeres felmérés" }, { href: "/calm-touch/pulse-riport", label: "Példa riport" }, { href: "/calm-touch/cegeknek#ajanlat", label: "Ajánlatot kérek", primary: true }]} />
</nav>
</div>
</header>
<main style={{"padding": "clamp(36px, 5vw, 64px) 20px clamp(48px, 6vw, 80px)"}}>
<div style={{"maxWidth": "880px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "12px", "letterSpacing": "0.2em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE · MÓDSZERTAN</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4vw, 48px)", "lineHeight": "1.08", "color": "#2C5069", "textWrap": "balance"}}>Hogyan mérjük az alkalmak hatását?</h1>
<a href={PDF} download style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#3F6E8C", "color": "#FFFFFF", "padding": "12px 22px", "borderRadius": "999px", "fontWeight": "600", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Letöltés PDF-ben</a>
<article className="ct-method" dangerouslySetInnerHTML={{ __html: methodHtml }} />
</div>
</main>
<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Üzemeltető: Alternatíva Tanácsadó Csoport Kft.</span>
<LegalLinks current="hu" />
</div>
</footer>
</div>
  );
}
