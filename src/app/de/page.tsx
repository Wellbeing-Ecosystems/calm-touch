// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";

export const metadata: Metadata = pageMeta("de", "", "Calm Touch – Stressabbau am Arbeitsplatz durch Berührung | Budapest", "15–20 Minuten Stressabbau im Büro durch sanfte Berührung über der Kleidung, in Budapest und Umgebung. Kurze Zustandsrückmeldung vor und nach jeder Sitzung, anonymer monatlicher HR-Bericht.", { absolute: true });

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${abs("de", "")}#szervezet`,
      name: "Calm Touch",
      url: abs("de", ""),
      logo: `${siteUrl}/calm-touch/brand/logo-negyzetes.webp`,
      description: "15–20 Minuten Stressabbau im Büro durch sanfte Berührung über der Kleidung, in Budapest und Umgebung. Kurze Zustandsrückmeldung vor und nach jeder Sitzung, anonymer monatlicher HR-Bericht.",
      parentOrganization: { "@type": "Organization", name: "Alternatíva Tanácsadó Csoport Kft." },
    },
    {
      "@type": "Service",
      name: "Calm-Touch",
      serviceType: "Betriebliches Stressabbau-Programm mit sanfter Berührung",
      description: "Kurze, sanfte Berührung im Sitzen, durch die Kleidung, an Kopf, Schultern und Armen. Kein Ausziehen, kein Öl, kein Verlassen des Büros.",
      provider: { "@id": `${abs("de", "")}#szervezet` },
      areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
      audience: { "@type": "BusinessAudience" },
      url: abs("de", ""),
    },
    { "@type": "WebSite", name: "Calm Touch", url: abs("de", ""), inLanguage: "de" },
  ],
};

export default function CalmTouchPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "fontSize": "17px", "lineHeight": "1.65"}}>
<HtmlLang lang="de" />
<JsonLd data={ld} />
<header style={{"background": "#FAF6F1"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "14px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="#kezdo" style={{"textDecoration": "none", "display": "flex", "alignItems": "center", "gap": "12px"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stressabbau durch Berührung" style={{"display": "block", "height": "60px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Hauptnavigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "26px", "fontSize": "15px", "fontWeight": "600"}}>
<a href="#hogyan" style={{"textDecoration": "none", "color": "#2E3631"}}>Wie funktioniert es?</a>
<a href="#pulse" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Calm-Touch Pulse</a>
<a href="/calm-touch/de/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>Für Unternehmen</a>
<a href="/calm-touch/de/cegeknek" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 22px", "borderRadius": "999px", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot-Termin anfragen</a>
<SiteLang current="de" path="" />
<MobileMenu lang={{ current: "de", path: "" }} items={[{ href: "#hogyan", label: "Wie funktioniert es?" }, { href: "#pulse", label: "Calm-Touch Pulse" }, { href: "/calm-touch/de/pulse-plus", label: "Pulse+ apparative Erhebung" }, { href: "/calm-touch/de/cegeknek", label: "Für Unternehmen" }, { href: "/calm-touch/de/modszertan", label: "Messmethodik" }, { href: "/calm-touch/de/cegeknek", label: "Pilot-Termin anfragen", primary: true }]} />
</nav>
</div>
</header>
<section id="kezdo" style={{"padding": "48px 20px clamp(58px, 6.7vw, 96px)", "overflow": "hidden"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "26px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.2em", "color": "#5C6830", "fontWeight": "700", "background": "#E9EBD6", "padding": "8px 16px", "borderRadius": "999px"}}>15–20 MINUTEN MENTALE ERFRISCHUNG</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(41px, 5.7vw, 74px)", "lineHeight": "1.02", "color": "#55665A", "letterSpacing": "-0.015em"}}>Eine kurze Pause.<br /><span style={{"color": "#7E3A4A", "fontStyle": "italic", "fontWeight": "600"}}>Echtes Auftanken.</span></h1>
<p style={{"margin": "0", "fontSize": "20px", "lineHeight": "1.65", "color": "#3B443E", "maxWidth": "32rem", "textWrap": "pretty"}}>Langsame, sanfte Berührung im Büro, wenn der Kopf nicht mehr von selbst abschaltet. Nach jeder Sitzung siehst du, was sich verändert hat – und das Unternehmen sieht monatlich, wie es dem Team geht.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "14px"}}>
<a href="/calm-touch/de/cegeknek" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot-Termin anfragen</a>
<a href="#hogyan" style={{"textDecoration": "none", "background": "#E9EBD6", "color": "#4A5426", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Wie funktioniert es?</a>
</div>
</div>
<div style={{"position": "relative", "display": "flex", "justifyContent": "center", "alignItems": "center", "minHeight": "clamp(440px, 48vw, 600px)"}}>
<div style={{"position": "absolute", "width": "470px", "height": "450px", "maxWidth": "92%", "top": "30px", "right": "0", "borderRadius": "58% 42% 52% 48% / 46% 56% 44% 54%", "background": "#F4E3E4"}}></div>
<div style={{"position": "absolute", "width": "260px", "height": "240px", "left": "10px", "top": "0", "borderRadius": "52% 48% 40% 60% / 55% 45% 55% 45%", "background": "#E9EBD6"}}></div>
<div style={{"position": "absolute", "width": "150px", "height": "140px", "right": "0", "bottom": "30px", "borderRadius": "45% 55% 60% 40% / 50% 40% 60% 50%", "background": "#E2C7AE"}}></div>
<img src="/calm-touch/images/01-kezdo-vallerintes.webp" alt="Eine Mitarbeiterin ruht mit geschlossenen Augen; die Hände der Fachkraft liegen sanft auf ihren bekleideten Schultern." style={{"position": "relative", "display": "block", "width": "100%", "maxWidth": "440px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"position": "absolute", "left": "0", "bottom": "4px", "background": "#FFFFFF", "borderRadius": "24px", "padding": "18px 20px", "boxShadow": "0 12px 32px rgba(44, 80, 105, 0.16)", "width": "256px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}><b style={{"fontSize": "15px", "color": "#2C5069"}}>Calm-Touch Pulse</b><span style={{"fontSize": "12px", "color": "#5E6A62"}}>Beispiel · 1–10</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}><span>Anspannung</span><b style={{"color": "#7E3A4A"}}>7 <span className="ct-arrow">→</span> 3</b></div>
<div style={{"height": "8px", "background": "#F4E3E4", "borderRadius": "4px"}}><div style={{"width": "30%", "height": "8px", "background": "#A65D6B", "borderRadius": "4px"}}></div></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}><span>Ruhe</span><b style={{"color": "#5C6830"}}>3 <span className="ct-arrow">→</span> 7</b></div>
<div style={{"height": "8px", "background": "#E9EBD6", "borderRadius": "4px"}}><div style={{"width": "70%", "height": "8px", "background": "#6E7B3C", "borderRadius": "4px"}}></div></div>
</div>
</div>
</div>
</section>
<section style={{"padding": "clamp(58px, 6.7vw, 96px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "44px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#7E3A4A", "fontWeight": "700"}}>EIN TAG IN DEINEM KOPF</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.2vw, 54px)", "lineHeight": "1.06", "color": "#4E2530", "textWrap": "balance"}}>Nicht die Arbeit ist zu viel. Sondern dass sie nie aufhört.</h2>
</div>
<img src="/calm-touch/images/03-egy-nap-a-fejedben.webp" alt="Ein müder Mitarbeiter am Laptop, eine Hand an der Stirn; auf dem Tisch Handy und Notizen." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "40px 40px 40px 10px"}} />
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#FAF6F1", "borderRadius": "32px 32px 32px 8px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>Noch kein Kaffee, aber schon drei Nachrichten beantwortet.</div>
<div style={{"background": "#E9EBD6", "borderRadius": "32px 32px 8px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>Zwischen den Meetings gibt es keinen Übergang – nur ein neues Fenster, eine neue Aufgabe.</div>
<div style={{"background": "#F5EEE3", "borderRadius": "32px 8px 32px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>Mittags sind deine Schultern bis zu den Ohren hochgezogen – und du merkst es erst am Abend.</div>
<div style={{"background": "#FAF6F1", "borderRadius": "8px 32px 32px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>Dein Körper geht nach Hause. Dein Kopf bleibt im Büro.</div>
</div>
<p style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontStyle": "italic", "fontSize": "32px", "lineHeight": "1.3", "color": "#7E3A4A", "maxWidth": "44rem"}}>Das ist keine Schwäche. Das ist ein Nervensystem, das seit Tagen in Alarmbereitschaft ist.</p>
</div>
</section>
<section style={{"padding": "clamp(50px, 5.8vw, 84px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "24px"}}>
<div style={{"background": "#E9EBD6", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#5C6830"}}>29%</span>
<span>der Beschäftigten in Europa kämpfen mit Stress, Depression oder Angst.</span>
</div>
<div style={{"background": "#F4E3E4", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#7E3A4A"}}>40%+</span>
<span>arbeiten unter starkem Zeitdruck.</span>
</div>
<div style={{"background": "#F5EEE3", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#86603F"}}>1 / 3</span>
<span>haben das Gefühl, dass ihr Einsatz unbemerkt bleibt.</span>
</div>
</div>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Quelle: EU-OSHA, OSH Pulse 2025</span>
</div>
</section>
<section style={{"padding": "clamp(58px, 6.7vw, 96px) 20px", "background": "#E9EBD6"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "56px", "alignItems": "center"}}>
<img src="/calm-touch/images/02-megoldas-fejerintes.webp" alt="Nahaufnahme einer Hand, die durch das Haar an der Schläfe eines Mannes mit geschlossenen Augen ruht." style={{"display": "block", "justifySelf": "center", "width": "100%", "maxWidth": "460px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#5C6830", "fontWeight": "700"}}>DIE LÖSUNG</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#3E4720"}}>Zehn bis zwanzig Minuten, in denen niemand etwas von dir erwartet.</h2>
<p style={{"margin": "0", "fontSize": "18px", "textWrap": "pretty"}}>Kurze, sanfte Berührung im Sitzen, durch die Kleidung, an Kopf, Schultern und Armen. Kein Ausziehen, kein Öl, kein Verlassen des Büros.</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#F4E3E4", "color": "#7E3A4A", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 12V8.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6.5 7-3 0-4.6-1.4-6-3.6L4 14a1.6 1.6 0 0 1 2.6-1.8L7 13" /></svg></span>
<span><b>Langsame, rhythmische Berührung</b> – kein Druck, sondern Präsenz</span>
</div>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#FAF6F1", "color": "#55665A", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /></svg></span>
<span><b>Ein ruhiger, sicherer Raum</b> – freiwillig, jederzeit beendbar</span>
</div>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#F5EEE3", "color": "#86603F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
<span><b>15–20 Minuten</b> – innerhalb des Arbeitstages, in jedem Besprechungsraum</span>
</div>
</div>
</div>
</div>
</section>
<section id="hogyan" style={{"padding": "clamp(58px, 6.7vw, 96px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "48px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center", "textAlign": "center"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>WIE LÄUFT ES AB?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Vier Schritte, etwa 20 Minuten.</h2>
</div>
<ol style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(160px, 100%), 1fr))", "gap": "clamp(20px, 2.5vw, 28px)"}}>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/04-egyeztetes.webp" alt="Fachkraft und Mitarbeiter sprechen neben einem Stuhl; die Fachkraft zeigt den Berührungsbereich an ihrer eigenen Schulter." style={{"display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "32px 32px 32px 8px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "52% 48% 46% 54% / 50% 54% 46% 50%", "background": "#E9EBD6", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#5C6830"}}>1</span>
<b style={{"fontSize": "19px"}}>Ankommen · 1 Minute</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>Kurze Absprache: wo Berührung guttut und wo nicht.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/05-qr-beolvasas.webp" alt="Ein Mitarbeiter scannt mit dem Handy den QR-Code auf einem Tischaufsteller." style={{"display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "32px 32px 8px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "48% 52% 54% 46% / 54% 46% 54% 46%", "background": "#DDE8EF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#2C5069"}}>2</span>
<b style={{"fontSize": "19px"}}>Vorher-Momentaufnahme · 30 Sek.</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>6 kurze Fragen auf deinem Handy, Skala 1–10, mit eigenem Code, ohne Namen.</span>
<span style={{"fontSize": "12px", "letterSpacing": "0.16em", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px"}}>PULSE</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/10-wellbeing-nap.webp" alt="Wellbeing-Tag im Büro: Hände ruhen sanft auf den Schultern einer sitzenden Mitarbeiterin im Vordergrund, im Hintergrund sprechende Kolleginnen und Kollegen." style={{"display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "objectPosition": "72% center", "borderRadius": "8px 32px 32px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "54% 46% 50% 50% / 46% 54% 46% 54%", "background": "#7E3A4A", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#FFFFFF"}}>3</span>
<b style={{"fontSize": "19px"}}>Calm-Touch · 15–20 Minuten</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>Langsame Berührung an Kopf, Schultern und Armen.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/06-alkalom-utan.webp" alt="Eine entspannte Mitarbeiterin sitzt auf einem Bürostuhl und schaut leicht lächelnd auf ihr Handy." style={{"display": "block", "width": "100%", "aspectRatio": "1 / 1", "objectFit": "cover", "borderRadius": "32px 8px 32px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "46% 54% 52% 48% / 52% 48% 52% 48%", "background": "#DDE8EF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#2C5069"}}>4</span>
<b style={{"fontSize": "19px"}}>Nachher-Momentaufnahme · 30 Sek.</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>Dieselben 6 Fragen – du siehst den Unterschied sofort.</span>
<span style={{"fontSize": "12px", "letterSpacing": "0.16em", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px"}}>PULSE</span>
</li>
</ol>
</div>
</section>
<section id="szakember" style={{"padding": "clamp(58px, 6.7vw, 96px) 20px", "background": "#F5EEE3"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "56px", "alignItems": "center"}}>
<div style={{"position": "relative", "display": "flex", "justifyContent": "center"}}>
<div style={{"position": "absolute", "width": "300px", "height": "280px", "left": "0", "bottom": "10px", "borderRadius": "52% 48% 40% 60% / 55% 45% 55% 45%", "background": "#E9EBD6"}}></div>
<img src="/calm-touch/images/11-szakember-portre.webp" alt="Andrea Mester, Calm-Touch-Fachkraft, lächelt in die Kamera." style={{"position": "relative", "display": "block", "width": "100%", "maxWidth": "420px", "aspectRatio": "4 / 5", "objectFit": "cover", "objectPosition": "center 20%", "borderRadius": "999px"}} />
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>WER BERÜHRT DICH?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.8vw, 50px)", "lineHeight": "1.06", "color": "#55665A"}}>Andrea Mester</h2>
<span style={{"fontFamily": "var(--ct-display)", "fontStyle": "italic", "fontWeight": "600", "fontSize": "22px", "color": "#7E3A4A"}}>Ausgebildete Expertin für ASMR und ayurvedische Massage</span>
<p style={{"margin": "0", "fontSize": "18px", "textWrap": "pretty"}}>In den Calm-Touch-Sitzungen verbindet Andrea die Ansätze von ASMR und ayurvedischer Massage: Mit langsamer, rhythmischer Berührung durch die Kleidung hilft sie, die Aufmerksamkeit für ein paar Minuten von der Arbeit zurück in den Körper zu lenken.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#4A5426", "background": "#E9EBD6", "borderRadius": "999px", "padding": "6px 14px"}}>ASMR</span>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#4A5426", "background": "#E9EBD6", "borderRadius": "999px", "padding": "6px 14px"}}>Ayurvedische Massage</span>
</div>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(62px, 7.2vw, 104px) 20px", "background": "#2C5069", "color": "#FAF6F1"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "52px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "40px", "alignItems": "end"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.2em", "color": "#2C5069", "fontWeight": "700", "background": "#DDE8EF", "padding": "8px 16px", "borderRadius": "999px"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.3vw, 56px)", "lineHeight": "1.04", "color": "#FAF6F1", "textWrap": "balance"}}>Du setzt dich ruhiger wieder hin. <span style={{"fontStyle": "italic", "fontWeight": "600", "color": "#F1D3D7"}}>Und das meldest du selbst zurück.</span></h2>
</div>
<p style={{"margin": "0", "fontSize": "18px", "color": "#E6EEF3", "textWrap": "pretty"}}>Jede Sitzung löst Anspannung und bittet zugleich um eine kurze Rückmeldung: mit welcher Belastung du ankommst, was die 15–20 Minuten verändert haben und monatlich, ob die Verbesserung anhält. Das Unternehmen erhält monatlich ein zusammengefasstes Bild davon, wie es den Teilnehmenden geht – anonym, in Gruppen ab 5 Personen.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#3F6E8C", "borderRadius": "32px 32px 32px 10px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#DDE8EF"}}>01</span>
<b style={{"fontSize": "21px"}}>Zustandspuls</b>
<span style={{"color": "#F2F6F9"}}>In welchem Zustand kommen die Menschen heute an?</span>
<span style={{"fontSize": "14px", "color": "#DDE8EF", "borderTop": "1px solid #A9C1D1", "paddingTop": "12px"}}>Aus den 6 Fragen vor der Sitzung · bei jeder Sitzung</span>
</div>
<div style={{"background": "#7E3A4A", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#F4E3E4"}}>02</span>
<b style={{"fontSize": "21px"}}>Wirkung</b>
<span style={{"color": "#FBEFF0"}}>Wie viel haben die 15–20 Minuten verändert?</span>
<span style={{"fontSize": "14px", "color": "#F4E3E4", "borderTop": "1px solid #A65D6B", "paddingTop": "12px"}}>Differenz zwischen Nachher- und Vorher-Werten · bei jeder Sitzung</span>
</div>
<div style={{"background": "#86603F", "borderRadius": "32px 32px 10px 32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#F5EEE3"}}>03</span>
<b style={{"fontSize": "21px"}}>Monatstrend</b>
<span style={{"color": "#FBF5EC"}}>Hält die Verbesserung an, und ist die Belastung tragbar?</span>
<span style={{"fontSize": "14px", "color": "#F5EEE3", "borderTop": "1px solid #B08A68", "paddingTop": "12px"}}>Monatsfragebogen mit 11 Aussagen · einmal im Monat pro Person</span>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<img src="/calm-touch/images/07-pulse-telefon.webp" alt="Ein Handy in der Hand mit dem Calm-Touch-Pulse-Bildschirm „Wie fühle ich mich?“ auf einer Skala von 1–10 mit Vorher- und Nachher-Balken: Anspannung von 7 auf 3, Ruhe von 3 auf 7, Energie von 4 auf 8; als Illustration gekennzeichnet." style={{"display": "block", "justifySelf": "center", "width": "100%", "maxWidth": "440px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"background": "#FAF6F1", "color": "#2E3631", "borderRadius": "32px 32px 32px 10px", "padding": "clamp(20px, 3vw, 30px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": "800", "color": "#2C5069", "background": "#DDE8EF", "border": "2px solid #3F6E8C", "borderRadius": "999px", "padding": "4px 18px"}}>Pulse</span>
<b style={{"fontSize": "22px", "fontFamily": "var(--ct-display)"}}>Vorher–nachher-Messung per Fragebogen</b>
<span style={{"color": "#3B443E"}}>6 kurze Fragen vor und nach der Sitzung, auf deinem eigenen Handy. Du beantwortest jede von 1 bis 10.</span>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(10, minmax(0, 1fr))", "gap": "4px", "marginTop": "4px"}} aria-hidden="true">
<span style={{"height": "14px", "borderRadius": "7px", "background": "#DDE8EF"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#CBDBE5"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#B9CEDB"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#A9C1D1"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#8FAEC2"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#769CB3"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#5D89A4"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#4C7B98"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#3F6E8C"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#2C5069"}}></span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px", "fontSize": "14px", "fontWeight": "600", "color": "#2C5069"}}><span>1 = gar nicht</span><span>10 = vollkommen</span></div>
</div>
<div style={{"background": "#3F6E8C", "color": "#FFFFFF", "borderRadius": "32px 32px 10px 32px", "padding": "clamp(20px, 3vw, 30px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": "800", "color": "#2C5069", "background": "#FFFFFF", "borderRadius": "999px", "padding": "4px 18px"}}>Pulse+</span>
<b style={{"fontSize": "22px", "fontFamily": "var(--ct-display)"}}>Ergänzende apparative Zustandserhebung</b>
<span style={{"color": "#F2F6F9"}}>Eine einmalige apparative Zustandserhebung ergänzend zu den Fragebögen: Hirnaktivität (qEEG), Herzratenvariabilität (HRV) und ein kognitiver Test. So kommen zum Erleben objektive physiologische und kognitive Daten hinzu.</span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>HRV</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>qEEG</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>kognitiver Test</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>einmalige Erhebung</span>
</div>
<a href="/calm-touch/de/pulse-plus" style={{"alignSelf": "flex-start", "color": "#FFFFFF", "fontWeight": "700"}}>Details zu Pulse+ <span className="ct-arrow">→</span></a>
</div>
</div>
</div>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "14px"}}>
<a href="/calm-touch/de/pulse-riport" style={{"textDecoration": "none", "background": "#FAF6F1", "color": "#2E3631", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Zum HR-Pulse-Bericht</a>
<a href="/calm-touch/pillanatkep?lang=de" style={{"textDecoration": "none", "color": "#FAF6F1", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "700", "border": "1px solid #F1D3D7", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Momentaufnahme ausprobieren</a>
<a href="/calm-touch/de/modszertan" style={{"textDecoration": "underline", "color": "#FAF6F1", "padding": "14px 6px", "fontWeight": "600", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Messmethodik</a>
</div>
</div>
</section>
<section style={{"padding": "clamp(58px, 6.7vw, 96px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#7E3A4A", "fontWeight": "700"}}>WAS IST ANDERS?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Keine Büromassage. <span style={{"fontStyle": "italic", "fontWeight": "600", "color": "#7E3A4A"}}>Mentale Erfrischung.</span></h2>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "32px"}}>
<div style={{"borderTop": "3px solid #6E7B3C", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Kein Druck, sondern Präsenz</b><span style={{"color": "#5E6A62"}}>Büromassage bearbeitet die Muskeln; Calm-Touch beruhigt das Nervensystem.</span></div>
<div style={{"borderTop": "3px solid #A65D6B", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Langsame Berührung mit wissenschaftlicher Grundlage</b><span style={{"color": "#5E6A62"}}>Eigene Nervenfasern reagieren auf langsames, sanftes Streicheln – sie sind mit Entspannung und einem Gefühl von Sicherheit verbunden.</span></div>
<div style={{"borderTop": "3px solid #A17856", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Ayurvedisch inspiriert, ASMR-Erlebnis</b><span style={{"color": "#5E6A62"}}>Traditioneller Entspannungsansatz und beruhigende, wiederkehrende Sinnesreize.</span></div>
<div style={{"borderTop": "3px solid #3F6E8C", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Nachvollziehbar, nicht nur angenehm</b><span style={{"color": "#5E6A62"}}>Jede Sitzung endet mit einer Vorher–nachher-Momentaufnahme, dazu monatlich ein Trendbericht.</span></div>
</div>
</div>
</section>
<section style={{"padding": "clamp(58px, 6.7vw, 96px) 20px", "background": "#F5EEE3"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>FÜR UNTERNEHMEN</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Starten Sie mit einem Pilot.</h2>
<p style={{"margin": "0", "fontSize": "18px", "color": "#3B443E", "textWrap": "pretty"}}>Nach einer kurzen Abstimmung können Sie es mit einem Team ausprobieren und erhalten am Ende des Pilots einen zusammengefassten Rückmeldebericht.</p>
</div>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="Eine HR-Leiterin und eine Wellbeing-Expertin unterhalten sich zwanglos in einem Besprechungsraum, mit Laptop und Tassen." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "40px 40px 10px 40px"}} />
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#E9EBD6", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#3E4720"}}>Pilot</span>
<span style={{"color": "#3B443E"}}>Mit einem Team ausprobieren. 3 Stunden, bis zu 8 Personen, mit zusammengefasster Rückmeldung am Ende.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#3E4720"}}>Einführungspreis netto: 50.000 HUF</span>
</div>
<div style={{"background": "#7E3A4A", "color": "#FFFFFF", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#FFFFFF"}}>Regelmäßig</span>
<span style={{"color": "#FBEFF0"}}>Wöchentlich, alle 2 oder 3 Wochen oder monatlich, mit Terminen à 3 oder 2 × 3 Stunden und monatlichem Calm-Touch-Pulse-Bericht.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#FFFFFF"}}>Einführungspreis netto: 3 Stunden ab 55.000 HUF</span>
</div>
<div style={{"background": "#F4E3E4", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#4E2530"}}>Wellbeing Day</span>
<span style={{"color": "#3B443E"}}>2 × 3 Stunden, bis zu 16 Personen. Ein Highlight für Gesundheitstage, Events und Führungskräftetage.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#4E2530"}}>Einführungspreis netto: 75.000 HUF</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Die angegebenen Einführungspreise (netto) gelten in Budapest und im Umkreis von 20 km; bei weiter entfernten Orten kommen Fahrtkosten hinzu.</span>
<a href="/calm-touch/de/cegeknek" style={{"alignSelf": "flex-start", "color": "#7E3A4A", "fontWeight": "700"}}>Details für Unternehmen <span className="ct-arrow">→</span></a>
</div>
</section>
<section style={{"padding": "clamp(50px, 5.8vw, 84px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="Eine ruhige Entspannungsecke im Büro mit Polstersessel, bordeauxrotem Kissen, kleinem Tisch, QR-Aufsteller und Pflanzen." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "40px 10px 40px 40px"}} />
<div style={{"display": "flex", "gap": "22px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<span style={{"flex": "none", "width": "58px", "height": "58px", "borderRadius": "50%", "background": "#E9EBD6", "color": "#5C6830", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg></span>
<div style={{"flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "6px", "maxWidth": "54rem"}}>
<b style={{"fontSize": "24px", "fontFamily": "var(--ct-display), 'Segoe UI', system-ui, sans-serif", "color": "#55665A"}}>Sicherheit und Einverständnis</b>
<span style={{"color": "#5E6A62"}}>Die Teilnahme ist immer freiwillig. Berührt wird nur durch die Kleidung, an vorab abgestimmten Stellen, und ein Wort genügt, um jederzeit aufzuhören. Calm-Touch ist ein Wellbeing-Angebot, keine medizinische Behandlung.</span>
</div>
</div>
</div>
</section>
<section style={{"padding": "clamp(58px, 6.7vw, 96px) 20px clamp(62px, 7.2vw, 104px)", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "760px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "26px", "textAlign": "center"}}>
<img src="/calm-touch/brand/logo-negyzetes.webp" alt="Calm Touch – Stressabbau durch Berührung" style={{"width": "220px", "maxWidth": "60%", "height": "auto"}} />
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.5vw, 46px)", "lineHeight": "1.1", "color": "#4E2530", "textWrap": "balance"}}>Schenken Sie Ihrem Team 15 Minuten, in denen es nichts leisten muss.</h2>
<a href="/calm-touch/de/cegeknek" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot-Termin anfragen</a>
</div>
</section>
<footer style={{"padding": "28px 24px", "background": "#3E4720", "color": "#E9EBD6"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px"}}>
<span style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}><img src="/calm-touch/brand/logo-fekvo-vilagos.webp" alt="Calm Touch – Stressabbau durch Berührung" width={900} height={186} style={{"display": "block", "alignSelf": "flex-start", "height": "48px", "width": "auto", "maxWidth": "100%", "objectFit": "contain"}} /><span>Betreiber: Alternatíva Tanácsadó Csoport Kft.</span></span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px"}}>
<a href="/calm-touch/de/modszertan" style={{"color": "#E9EBD6"}}>Messmethodik</a>
<a href="https://pszichoszoc.hu/adatkezelesi-tajekoztato" style={{"color": "#E9EBD6"}}>Datenschutzhinweis</a>
</div>
</div>
</footer>
</div>
  );
}
