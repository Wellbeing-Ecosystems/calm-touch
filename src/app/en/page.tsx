// GENERÁLT FÁJL – ne szerkeszd kézzel. Forrás: src/app/page.tsx, fordítás: scripts/i18n/site.json, futtatás: python3 scripts/i18n/generate.py
import type { Metadata } from "next";
import { HtmlLang } from "@/app/HtmlLang";
import { abs, pageMeta } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "@/app/SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "@/app/MobileMenu";
import { FooterContact } from "@/app/FooterContact";

export const metadata: Metadata = pageMeta("en", "", "Calm Touch – workplace stress relief through touch | Budapest", "15–20-minute stress relief in the office through gentle touch over clothing, in Budapest and the surrounding area. A short state check before and after every session, and an anonymous monthly HR report.", { absolute: true });

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${abs("en", "")}#szervezet`,
      name: "Calm Touch",
      url: abs("en", ""),
      logo: `${siteUrl}/calm-touch/brand/logo-negyzetes.webp`,
      description: "15–20-minute stress relief in the office through gentle touch over clothing, in Budapest and the surrounding area. A short state check before and after every session, and an anonymous monthly HR report.",
      parentOrganization: { "@type": "Organization", name: "Alternatíva Tanácsadó Csoport Kft." },
    },
    {
      "@type": "Service",
      name: "Calm-Touch",
      serviceType: "Workplace stress-relief programme with gentle touch",
      description: "Short, gentle touch through clothing on the head, shoulders and arms, while seated. No undressing, no oil, no need to leave the office.",
      provider: { "@id": `${abs("en", "")}#szervezet` },
      areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
      audience: { "@type": "BusinessAudience" },
      url: abs("en", ""),
    },
    { "@type": "WebSite", name: "Calm Touch", url: abs("en", ""), inLanguage: "en" },
  ],
};

export default function CalmTouchPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "fontSize": "17px", "lineHeight": "1.65"}}>
<HtmlLang lang="en" />
<JsonLd data={ld} />
<header style={{"background": "#FAF6F1"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "14px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="#kezdo" style={{"textDecoration": "none", "display": "flex", "alignItems": "center", "gap": "12px"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo-en.webp" alt="Calm Touch – stress relief through touch" style={{"display": "block", "height": "60px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Main navigation" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "26px", "fontSize": "15px", "fontWeight": "600"}}>
<a href="#hogyan" style={{"textDecoration": "none", "color": "#2E3631"}}>How does it work?</a>
<a href="#pulse" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Calm-Touch Pulse</a>
<a href="/calm-touch/en/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>For companies</a>
<a href="/calm-touch/en/cegeknek" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 22px", "borderRadius": "999px", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a pilot session</a>
<SiteLang current="en" path="" />
<MobileMenu lang={{ current: "en", path: "" }} items={[{ href: "#hogyan", label: "How does it work?" }, { href: "#pulse", label: "Calm-Touch Pulse" }, { href: "/calm-touch/en/pulse-plus", label: "Pulse+ instrument-based assessment" }, { href: "/calm-touch/en/cegeknek", label: "For companies" }, { href: "/calm-touch/en/modszertan", label: "Measurement method" }, { href: "/calm-touch/en/cegeknek", label: "Request a pilot session", primary: true }]} />
</nav>
</div>
</header>
<section id="kezdo" style={{"padding": "28px 20px clamp(36px, 4.2vw, 60px)", "overflow": "hidden"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "26px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.2em", "color": "#5C6830", "fontWeight": "700", "background": "#E9EBD6", "padding": "8px 16px", "borderRadius": "999px"}}>15–20 MINUTES OF MENTAL REFRESHMENT</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(41px, 5.7vw, 74px)", "lineHeight": "1.02", "color": "#55665A", "letterSpacing": "-0.015em"}}>A short pause.<br /><span style={{"color": "#7E3A4A", "fontStyle": "italic", "fontWeight": "600"}}>Real recharge.</span></h1>
<p style={{"margin": "0", "fontSize": "20px", "lineHeight": "1.65", "color": "#3B443E", "maxWidth": "32rem", "textWrap": "pretty"}}>Slow, gentle touch in the office, when your mind no longer switches off on its own. After every session you see what changed – and each month the company sees how the team is coping.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "14px"}}>
<a href="/calm-touch/en/cegeknek" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a pilot session</a>
<a href="#hogyan" style={{"textDecoration": "none", "background": "#E9EBD6", "color": "#4A5426", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>How does it work?</a>
</div>
</div>
<div style={{"position": "relative", "display": "flex", "justifyContent": "center", "alignItems": "center", "minHeight": "clamp(340px, 38vw, 480px)"}}>
<div style={{"position": "absolute", "width": "470px", "height": "450px", "maxWidth": "92%", "top": "30px", "right": "0", "borderRadius": "58% 42% 52% 48% / 46% 56% 44% 54%", "background": "#F4E3E4"}}></div>
<div style={{"position": "absolute", "width": "260px", "height": "240px", "left": "10px", "top": "0", "borderRadius": "52% 48% 40% 60% / 55% 45% 55% 45%", "background": "#E9EBD6"}}></div>
<div style={{"position": "absolute", "width": "150px", "height": "140px", "right": "0", "bottom": "30px", "borderRadius": "45% 55% 60% 40% / 50% 40% 60% 50%", "background": "#E2C7AE"}}></div>
<img src="/calm-touch/images/01-kezdo-vallerintes.webp" alt="An employee resting with eyes closed; the practitioner's hands rest gently on her clothed shoulders." style={{"position": "relative", "display": "block", "width": "100%", "maxWidth": "340px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"position": "absolute", "left": "0", "bottom": "4px", "background": "#FFFFFF", "borderRadius": "24px", "padding": "18px 20px", "boxShadow": "0 12px 32px rgba(44, 80, 105, 0.16)", "width": "256px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}><b style={{"fontSize": "15px", "color": "#2C5069"}}>Calm-Touch Pulse</b><span style={{"fontSize": "12px", "color": "#5E6A62"}}>example · 1–10</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}><span>Tension</span><b style={{"color": "#7E3A4A"}}>7 <span className="ct-arrow">→</span> 3</b></div>
<div style={{"height": "8px", "background": "#F4E3E4", "borderRadius": "4px"}}><div style={{"width": "30%", "height": "8px", "background": "#A65D6B", "borderRadius": "4px"}}></div></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}><span>Calm</span><b style={{"color": "#5C6830"}}>3 <span className="ct-arrow">→</span> 7</b></div>
<div style={{"height": "8px", "background": "#E9EBD6", "borderRadius": "4px"}}><div style={{"width": "70%", "height": "8px", "background": "#6E7B3C", "borderRadius": "4px"}}></div></div>
</div>
</div>
</div>
</section>
<section style={{"padding": "clamp(36px, 4.2vw, 60px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#7E3A4A", "fontWeight": "700"}}>A DAY IN YOUR HEAD</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.2vw, 54px)", "lineHeight": "1.06", "color": "#4E2530", "textWrap": "balance"}}>It’s not that there’s too much work. It’s that it never ends.</h2>
</div>
<img src="/calm-touch/images/03-egy-nap-a-fejedben.webp" alt="A tired employee at a laptop with one hand on his forehead; a phone and notes on the desk." style={{"display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "borderRadius": "40px 40px 40px 10px"}} />
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#FAF6F1", "borderRadius": "32px 32px 32px 8px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>No coffee yet, and you’ve already answered three messages.</div>
<div style={{"background": "#E9EBD6", "borderRadius": "32px 32px 8px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>There’s no transition between meetings – just a new window, a new task.</div>
<div style={{"background": "#F5EEE3", "borderRadius": "32px 8px 32px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>By noon your shoulders are up at your ears, and you only notice it in the evening.</div>
<div style={{"background": "#FAF6F1", "borderRadius": "8px 32px 32px 32px", "padding": "clamp(22px, 3vw, 30px) clamp(20px, 3vw, 26px)", "fontSize": "18px", "lineHeight": "1.55"}}>Your body goes home. Your head stays at work.</div>
</div>
<p style={{"margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontStyle": "italic", "fontSize": "32px", "lineHeight": "1.3", "color": "#7E3A4A", "maxWidth": "44rem"}}>This isn’t weakness. It’s a nervous system that has been on standby for days.</p>
</div>
</section>
<section style={{"padding": "clamp(32px, 3.8vw, 52px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "24px"}}>
<div style={{"background": "#E9EBD6", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#5C6830"}}>29%</span>
<span>of European workers struggle with stress, depression or anxiety.</span>
</div>
<div style={{"background": "#F4E3E4", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#7E3A4A"}}>40%+</span>
<span>work under severe time pressure.</span>
</div>
<div style={{"background": "#F5EEE3", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "800", "fontSize": "68px", "lineHeight": "1", "color": "#86603F"}}>1 / 3</span>
<span>feel their efforts go unnoticed.</span>
</div>
</div>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Source: EU-OSHA, OSH Pulse 2025</span>
</div>
</section>
<section style={{"padding": "clamp(36px, 4.2vw, 60px) 20px", "background": "#E9EBD6"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "36px", "alignItems": "center"}}>
<img src="/calm-touch/images/02-megoldas-fejerintes.webp" alt="Close-up of a hand resting through the hair near the temple of a man with closed eyes." style={{"display": "block", "justifySelf": "center", "width": "100%", "maxWidth": "350px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#5C6830", "fontWeight": "700"}}>THE SOLUTION</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#3E4720"}}>Ten to twenty minutes when nobody expects anything of you.</h2>
<p style={{"margin": "0", "fontSize": "18px", "textWrap": "pretty"}}>Short, gentle touch through clothing on the head, shoulders and arms, while seated. No undressing, no oil, no need to leave the office.</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#F4E3E4", "color": "#7E3A4A", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 12V8.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6.5 7-3 0-4.6-1.4-6-3.6L4 14a1.6 1.6 0 0 1 2.6-1.8L7 13" /></svg></span>
<span><b>Slow, rhythmic touch</b> – not pressure, but presence</span>
</div>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#FAF6F1", "color": "#55665A", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /></svg></span>
<span><b>A quiet, safe space</b> – voluntary, can be stopped at any time</span>
</div>
<div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
<span style={{"flex": "none", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "#F5EEE3", "color": "#86603F", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
<span><b>15–20 minutes</b> – within the working day, in any meeting room</span>
</div>
</div>
</div>
</div>
</section>
<section id="hogyan" style={{"padding": "clamp(36px, 4.2vw, 60px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center", "textAlign": "center"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>HOW DOES IT WORK?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Four steps, about 20 minutes.</h2>
</div>
<ol style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(160px, 100%), 1fr))", "gap": "clamp(20px, 2.5vw, 28px)"}}>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/04-egyeztetes.webp" alt="Practitioner and employee talk next to a chair; the practitioner shows the touch area on her own shoulder." style={{"display": "block", "width": "100%", "aspectRatio": "4 / 3", "objectFit": "cover", "objectPosition": "center top", "borderRadius": "32px 32px 32px 8px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "52% 48% 46% 54% / 50% 54% 46% 50%", "background": "#E9EBD6", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#5C6830"}}>1</span>
<b style={{"fontSize": "19px"}}>Arrival · 1 minute</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>A short check-in: where touch feels good and where it doesn’t.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/05-qr-beolvasas.webp" alt="An employee scans the QR code on a table sign with a phone." style={{"display": "block", "width": "100%", "aspectRatio": "4 / 3", "objectFit": "cover", "objectPosition": "center 30%", "borderRadius": "32px 32px 8px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "48% 52% 54% 46% / 54% 46% 54% 46%", "background": "#DDE8EF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#2C5069"}}>2</span>
<b style={{"fontSize": "19px"}}>Before-snapshot · 30 sec</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>6 quick questions on your phone, on a 1–10 scale, with your own code, no name.</span>
<span style={{"fontSize": "12px", "letterSpacing": "0.16em", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px"}}>PULSE</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/10-wellbeing-nap.webp" alt="Office wellbeing day: hands resting gently on the shoulders of a seated employee in the foreground, colleagues talking in the background." style={{"display": "block", "width": "100%", "aspectRatio": "4 / 3", "objectFit": "cover", "objectPosition": "72% center", "borderRadius": "8px 32px 32px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "54% 46% 50% 50% / 46% 54% 46% 54%", "background": "#7E3A4A", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#FFFFFF"}}>3</span>
<b style={{"fontSize": "19px"}}>Calm-Touch · 15–20 minutes</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>Slow touch on the head, shoulders and arms.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "12px"}}>
<img src="/calm-touch/images/06-alkalom-utan.webp" alt="A relaxed employee sitting in an office chair, smiling slightly at her phone." style={{"display": "block", "width": "100%", "aspectRatio": "4 / 3", "objectFit": "cover", "objectPosition": "center top", "borderRadius": "32px 8px 32px 32px"}} />
<span style={{"position": "relative", "marginTop": "-52px", "width": "80px", "height": "76px", "border": "5px solid #FAF6F1", "borderRadius": "46% 54% 52% 48% / 52% 48% 52% 48%", "background": "#DDE8EF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "700", "color": "#2C5069"}}>4</span>
<b style={{"fontSize": "19px"}}>After-snapshot · 30 sec</b>
<span style={{"color": "#5E6A62", "maxWidth": "16rem"}}>The same 6 questions – you see the difference right away.</span>
<span style={{"fontSize": "12px", "letterSpacing": "0.16em", "fontWeight": "700", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "4px 12px"}}>PULSE</span>
</li>
</ol>
</div>
</section>
<section id="szakember" style={{"padding": "clamp(36px, 4.2vw, 60px) 20px", "background": "#F5EEE3"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "36px", "alignItems": "center"}}>
<div style={{"position": "relative", "display": "flex", "justifyContent": "center"}}>
<div style={{"position": "absolute", "width": "300px", "height": "280px", "left": "0", "bottom": "10px", "borderRadius": "52% 48% 40% 60% / 55% 45% 55% 45%", "background": "#E9EBD6"}}></div>
<img src="/calm-touch/images/11-szakember-portre.webp" alt="Andrea Mester, Calm-Touch practitioner, smiling at the camera." style={{"position": "relative", "display": "block", "width": "100%", "maxWidth": "330px", "aspectRatio": "4 / 5", "objectFit": "cover", "objectPosition": "center 20%", "borderRadius": "999px"}} />
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>WHO WILL TOUCH YOU?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.8vw, 50px)", "lineHeight": "1.06", "color": "#55665A"}}>Andrea Mester</h2>
<span style={{"fontFamily": "var(--ct-display)", "fontStyle": "italic", "fontWeight": "600", "fontSize": "22px", "color": "#7E3A4A"}}>Ayurvedic and ASMR massage specialist</span>
<p style={{"margin": "0", "fontSize": "18px", "textWrap": "pretty"}}>In Calm-Touch sessions Andrea combines the approaches of Ayurvedic massage and ASMR: with slow, rhythmic touch through clothing she helps attention return from work to the body for a few minutes. ASMR (autonomous sensory meridian response) is the pleasant, tingling and calming sensation – for many people starting on the scalp – triggered by slow, gentle touch and soft, repetitive stimuli; studies show that heart rate can also slow down during it.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "10px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#4A5426", "background": "#E9EBD6", "borderRadius": "999px", "padding": "6px 14px"}}>ASMR</span>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#4A5426", "background": "#E9EBD6", "borderRadius": "999px", "padding": "6px 14px"}}>Ayurvedic massage</span>
</div>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(40px, 4.6vw, 64px) 20px", "background": "#2C5069", "color": "#FAF6F1"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "28px", "alignItems": "end"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.2em", "color": "#2C5069", "fontWeight": "700", "background": "#DDE8EF", "padding": "8px 16px", "borderRadius": "999px"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.3vw, 56px)", "lineHeight": "1.04", "color": "#FAF6F1", "textWrap": "balance"}}>You sit back down calmer. <span style={{"fontStyle": "italic", "fontWeight": "600", "color": "#F1D3D7"}}>And you’re the one who reports it.</span></h2>
</div>
<p style={{"margin": "0", "fontSize": "18px", "color": "#E6EEF3", "textWrap": "pretty"}}>Every session relieves tension and also asks for brief feedback: how loaded you arrive, what the 15–20 minutes changed, and each month whether the improvement lasts. The company receives a monthly aggregated picture of how participants are doing – anonymously, in groups of at least 5.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#3F6E8C", "borderRadius": "32px 32px 32px 10px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#DDE8EF"}}>01</span>
<b style={{"fontSize": "21px"}}>State pulse</b>
<span style={{"color": "#F2F6F9"}}>What state are people arriving in today?</span>
<span style={{"fontSize": "14px", "color": "#DDE8EF", "borderTop": "1px solid #A9C1D1", "paddingTop": "12px"}}>From the 6 questions before the session · every session</span>
</div>
<div style={{"background": "#7E3A4A", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#F4E3E4"}}>02</span>
<b style={{"fontSize": "21px"}}>Effect</b>
<span style={{"color": "#FBEFF0"}}>How much did the 15–20 minutes change?</span>
<span style={{"fontSize": "14px", "color": "#F4E3E4", "borderTop": "1px solid #A65D6B", "paddingTop": "12px"}}>Difference between after and before values · every session</span>
</div>
<div style={{"background": "#86603F", "borderRadius": "32px 32px 10px 32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "46px", "lineHeight": "1", "color": "#F5EEE3"}}>03</span>
<b style={{"fontSize": "21px"}}>Monthly trend</b>
<span style={{"color": "#FBF5EC"}}>Does the improvement last, and is the workload sustainable?</span>
<span style={{"fontSize": "14px", "color": "#F5EEE3", "borderTop": "1px solid #B08A68", "paddingTop": "12px"}}>11-statement monthly questionnaire · once a month per participant</span>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<img src="/calm-touch/images/07-pulse-telefon.webp" alt="A hand-held phone showing the Calm-Touch Pulse “How do I feel?” screen on a 1–10 scale with before and after bars: tension from 7 to 3, calm from 3 to 7, energy from 4 to 8; marked as an illustration." style={{"display": "block", "justifySelf": "center", "width": "100%", "maxWidth": "340px", "aspectRatio": "4 / 5", "objectFit": "cover", "borderRadius": "999px"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"background": "#FAF6F1", "color": "#2E3631", "borderRadius": "32px 32px 32px 10px", "padding": "clamp(20px, 3vw, 30px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": "800", "color": "#2C5069", "background": "#DDE8EF", "border": "2px solid #3F6E8C", "borderRadius": "999px", "padding": "4px 18px"}}>Pulse</span>
<b style={{"fontSize": "22px", "fontFamily": "var(--ct-display)"}}>Before–after questionnaire measurement</b>
<span style={{"color": "#3B443E"}}>6 short questions before and after the session, on your own phone. You answer each one from 1 to 10.</span>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(10, minmax(0, 1fr))", "gap": "4px", "marginTop": "4px"}} aria-hidden="true">
<span style={{"height": "14px", "borderRadius": "7px", "background": "#DDE8EF"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#CBDBE5"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#B9CEDB"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#A9C1D1"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#8FAEC2"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#769CB3"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#5D89A4"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#4C7B98"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#3F6E8C"}}></span><span style={{"height": "14px", "borderRadius": "7px", "background": "#2C5069"}}></span>
</div>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px", "fontSize": "14px", "fontWeight": "600", "color": "#2C5069"}}><span>1 = not at all</span><span>10 = completely</span></div>
</div>
<div style={{"background": "#3F6E8C", "color": "#FFFFFF", "borderRadius": "32px 32px 10px 32px", "padding": "clamp(20px, 3vw, 30px)", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": "800", "color": "#2C5069", "background": "#FFFFFF", "borderRadius": "999px", "padding": "4px 18px"}}>Pulse+</span>
<b style={{"fontSize": "22px", "fontFamily": "var(--ct-display)"}}>Additional instrument-based assessment</b>
<span style={{"color": "#F2F6F9"}}>A one-off instrument-based assessment alongside the questionnaires: brain activity (qEEG), heart rate variability (HRV) and a cognitive test. This adds objective physiological and cognitive data to how people feel.</span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>HRV</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>qEEG</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>cognitive test</span>
<span style={{"fontSize": "14px", "fontWeight": "700", "color": "#FFFFFF", "border": "1px solid #A9C1D1", "borderRadius": "999px", "padding": "4px 14px"}}>one-off assessment</span>
</div>
<a href="/calm-touch/en/pulse-plus" style={{"alignSelf": "flex-start", "color": "#FFFFFF", "fontWeight": "700"}}>Pulse+ details <span className="ct-arrow">→</span></a>
</div>
</div>
</div>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "14px"}}>
<a href="/calm-touch/en/pulse-riport" style={{"textDecoration": "none", "background": "#FAF6F1", "color": "#2E3631", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>See the HR Pulse report</a>
<a href="/calm-touch/pillanatkep?lang=en" style={{"textDecoration": "none", "color": "#FAF6F1", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "700", "border": "1px solid #F1D3D7", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Try the snapshot</a>
<a href="/calm-touch/en/modszertan" style={{"textDecoration": "underline", "color": "#FAF6F1", "padding": "14px 6px", "fontWeight": "600", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Measurement method</a>
</div>
</div>
</section>
<section style={{"padding": "clamp(36px, 4.2vw, 60px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#7E3A4A", "fontWeight": "700"}}>WHAT MAKES IT DIFFERENT?</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Not an office massage. <span style={{"fontStyle": "italic", "fontWeight": "600", "color": "#7E3A4A"}}>Mental refreshment.</span></h2>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "32px"}}>
<div style={{"borderTop": "3px solid #6E7B3C", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Not pressure, but presence</b><span style={{"color": "#5E6A62"}}>Office massage works the muscles; Calm-Touch quiets the nervous system.</span></div>
<div style={{"borderTop": "3px solid #A65D6B", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Slow touch, with a scientific basis</b><span style={{"color": "#5E6A62"}}>Dedicated nerve fibres respond to slow, gentle stroking – they are linked to relaxation and a sense of safety.</span></div>
<div style={{"borderTop": "3px solid #A17856", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Ayurvedic inspiration, ASMR experience</b><span style={{"color": "#5E6A62"}}>A traditional approach to relaxation and soothing, repetitive sensory stimuli.</span></div>
<div style={{"borderTop": "3px solid #3F6E8C", "paddingTop": "20px", "display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Trackable, not just pleasant</b><span style={{"color": "#5E6A62"}}>Every session ends with a before–after snapshot, plus a monthly trend report.</span></div>
</div>
</div>
</section>
<section style={{"padding": "clamp(36px, 4.2vw, 60px) 20px", "background": "#F5EEE3"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.2em", "color": "#86603F", "fontWeight": "700"}}>FOR COMPANIES</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 4.0vw, 52px)", "lineHeight": "1.06", "color": "#55665A"}}>Start with a pilot.</h2>
<p style={{"margin": "0", "fontSize": "18px", "color": "#3B443E", "textWrap": "pretty"}}>After a short consultation you can try it with one team and receive an aggregated feedback report at the end of the pilot.</p>
</div>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="An HR manager and a wellbeing specialist chat informally in a meeting room, with a laptop and mugs." style={{"display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "borderRadius": "40px 40px 10px 40px"}} />
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "18px"}}>
<div style={{"background": "#E9EBD6", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#3E4720"}}>Pilot</span>
<span style={{"color": "#3B443E"}}>Try it with one team. 3 hours, up to 8 people, with aggregated feedback at the end.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#3E4720"}}>Introductory net price: HUF 50,000</span>
</div>
<div style={{"background": "#7E3A4A", "color": "#FFFFFF", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#FFFFFF"}}>Regular</span>
<span style={{"color": "#FBEFF0"}}>Weekly, every 2 or 3 weeks, or monthly, with 3-hour or 2 × 3-hour sessions and a monthly Calm-Touch Pulse report.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#FFFFFF"}}>Introductory net price: 3 hours from HUF 55,000</span>
</div>
<div style={{"background": "#F4E3E4", "borderRadius": "32px", "padding": "clamp(20px, 3vw, 32px)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "32px", "fontWeight": "600", "color": "#4E2530"}}>Wellbeing Day</span>
<span style={{"color": "#3B443E"}}>2 × 3 hours, up to 16 people. A highlight for health days, events and leadership days.</span>
<span style={{"marginTop": "6px", "fontWeight": "700", "color": "#4E2530"}}>Introductory net price: HUF 75,000</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>The introductory net prices shown apply in Budapest and within a 20 km radius; for locations further away, travel costs are added.</span>
<a href="/calm-touch/en/cegeknek" style={{"alignSelf": "flex-start", "color": "#7E3A4A", "fontWeight": "700"}}>See details for companies <span className="ct-arrow">→</span></a>
</div>
</section>
<section style={{"padding": "clamp(32px, 3.8vw, 52px) 20px"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="A quiet office relaxation corner with an upholstered chair, a burgundy cushion, a small table, a QR sign and plants." style={{"display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "borderRadius": "40px 10px 40px 40px"}} />
<div style={{"display": "flex", "gap": "22px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<span style={{"flex": "none", "width": "58px", "height": "58px", "borderRadius": "50%", "background": "#E9EBD6", "color": "#5C6830", "display": "flex", "alignItems": "center", "justifyContent": "center"}}><svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" style={{"fill": "none", "stroke": "currentColor", "strokeWidth": "1.6", "strokeLinecap": "round", "strokeLinejoin": "round"}}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg></span>
<div style={{"flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "6px", "maxWidth": "54rem"}}>
<b style={{"fontSize": "24px", "fontFamily": "var(--ct-display), 'Segoe UI', system-ui, sans-serif", "color": "#55665A"}}>Safety and consent</b>
<span style={{"color": "#5E6A62"}}>Participation is always voluntary. Touch only happens through clothing, on areas agreed in advance, and can be stopped at any time with a single word. Calm-Touch is a wellbeing service, not a medical treatment.</span>
</div>
</div>
</div>
</section>
<section style={{"padding": "clamp(36px, 4.2vw, 60px) 20px clamp(40px, 4.6vw, 64px)", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "760px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "26px", "textAlign": "center"}}>
<img src="/calm-touch/brand/logo-negyzetes-en.webp" alt="Calm Touch – stress relief through touch" style={{"width": "150px", "maxWidth": "50%", "height": "auto"}} />
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.5vw, 46px)", "lineHeight": "1.1", "color": "#4E2530", "textWrap": "balance"}}>Give your team 15 minutes when they don’t have to perform.</h2>
<a href="/calm-touch/en/cegeknek" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "15px 30px", "borderRadius": "999px", "fontWeight": "700", "minHeight": "52px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Request a pilot session</a>
</div>
</section>
<footer style={{"padding": "28px 24px", "background": "#3E4720", "color": "#E9EBD6"}}>
<div style={{"maxWidth": "1200px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px"}}>
<span style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}><img src="/calm-touch/brand/logo-fekvo-vilagos-en.webp" alt="Calm Touch – stress relief through touch" width={900} height={186} style={{"display": "block", "alignSelf": "flex-start", "height": "48px", "width": "auto", "maxWidth": "100%", "objectFit": "contain"}} /><span>Operated by: Alternatíva Tanácsadó Csoport Kft.<FooterContact /></span></span>
<LegalLinks current="en" method color="#E9EBD6" />
</div>
</footer>
</div>
  );
}
