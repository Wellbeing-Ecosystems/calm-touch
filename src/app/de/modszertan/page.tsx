// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/modszertan/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";
import { methodHtml } from "./content_de";

export const metadata: Metadata = {
  title: "Calm-Touch Pulse – Messmethodik",
  description:
    "Wie Calm-Touch Pulse die Wirkung der Sitzungen misst: Fragen und ihr fachlicher Hintergrund, Kennzahlen und Ampelfarben, Datenschutz, Grenzen und Literatur.",
  alternates: { canonical: "/calm-touch/de/modszertan" },
};

const PDF = "/calm-touch/docs/calm-touch-pulse-messmethodik-de.pdf";

export default function ModszertanPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.6", "fontSize": "17px"}}>
<HtmlLang lang="de" />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stressabbau durch Berührung" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Hauptnavigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch/de" style={{"textDecoration": "none", "color": "#2E3631"}}>Startseite</a>
<a href="/calm-touch/de/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>Für Unternehmen</a>
<a href="/calm-touch/de/pulse-riport" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Beispielbericht</a>
<a href="/calm-touch/de/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Angebot anfragen</a>
<SiteLang current="de" path="/modszertan" />
<MobileMenu lang={{ current: "de", path: "/modszertan" }} items={[{ href: "/calm-touch/de", label: "Startseite" }, { href: "/calm-touch/de/cegeknek", label: "Für Unternehmen" }, { href: "/calm-touch/de/pulse-plus", label: "Pulse+ apparative Erhebung" }, { href: "/calm-touch/de/pulse-riport", label: "Beispielbericht" }, { href: "/calm-touch/de/cegeknek#ajanlat", label: "Angebot anfragen", primary: true }]} />
</nav>
</div>
</header>
<main style={{"padding": "clamp(36px, 5vw, 64px) 20px clamp(48px, 6vw, 80px)"}}>
<div style={{"maxWidth": "880px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "12px", "letterSpacing": "0.2em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE · METHODIK</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4vw, 48px)", "lineHeight": "1.08", "color": "#2C5069", "textWrap": "balance"}}>Wie messen wir die Wirkung der Sitzungen?</h1>
<a href={PDF} download style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#3F6E8C", "color": "#FFFFFF", "padding": "12px 22px", "borderRadius": "999px", "fontWeight": "600", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Als PDF herunterladen</a>
<article className="ct-method" dangerouslySetInnerHTML={{ __html: methodHtml }} />
</div>
</main>
<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Betreiber: Alternatíva Tanácsadó Csoport Kft.</span>
<a href="/calm-touch/de/cegeknek">Für Unternehmen</a>
</div>
</footer>
</div>
  );
}
