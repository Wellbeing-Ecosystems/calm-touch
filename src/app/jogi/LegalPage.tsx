import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { HtmlLang } from "@/app/HtmlLang";
import { SiteLang, sitePath } from "@/app/SiteLang";
import { MobileMenu } from "@/app/MobileMenu";
import { LegalLinks } from "./LegalLinks";
import { LEGAL_HTML } from "./content";
import { FooterContact } from "@/app/FooterContact";

/** A három jogi oldal (ÁSZF, Impresszum, Adatfelhasználási nyilatkozat) közös kerete, nyelvenként. */
export type LegalDoc = "aszf" | "impresszum" | "adatkezeles";

export const LEGAL_PATH: Record<LegalDoc, string> = { aszf: "/aszf", impresszum: "/impresszum", adatkezeles: "/adatkezeles" };

const TITLE: Record<LegalDoc, Record<Lang, string>> = {
  aszf: { hu: "Általános Szerződési Feltételek", en: "General Terms and Conditions", de: "Allgemeine Geschäftsbedingungen" },
  impresszum: { hu: "Impresszum", en: "Imprint", de: "Impressum" },
  adatkezeles: { hu: "Adatfelhasználási nyilatkozat", en: "Data Use Statement", de: "Datennutzungserklärung" },
};
const CHIP: Record<LegalDoc, Record<Lang, string>> = {
  aszf: { hu: "ÁSZF", en: "GTC", de: "AGB" },
  impresszum: { hu: "IMPRESSZUM", en: "IMPRINT", de: "IMPRESSUM" },
  adatkezeles: { hu: "ADATKEZELÉSI TÁJÉKOZTATÓ", en: "PRIVACY NOTICE", de: "DATENSCHUTZHINWEIS" },
};
const DESC: Record<LegalDoc, Record<Lang, string>> = {
  aszf: {
    hu: "A Calm Touch szolgáltatások általános szerződési feltételei cégeknek: szolgáltatás, díjak, lemondás, részvételi feltételek, Pulse mérés.",
    en: "General terms and conditions of Calm Touch services for companies: service, fees, cancellation, conditions of participation, Pulse measurement.",
    de: "Allgemeine Geschäftsbedingungen der Calm-Touch-Leistungen für Unternehmen: Leistung, Preise, Stornierung, Teilnahmebedingungen, Pulse-Messung.",
  },
  impresszum: {
    hu: "A Calm Touch honlap üzemeltetője, a szolgáltató adatai, tárhely és szerzői jog.",
    en: "Operator of the Calm Touch website, provider details, hosting and copyright.",
    de: "Betreiber der Calm-Touch-Website, Anbieterangaben, Hosting und Urheberrecht.",
  },
  adatkezeles: {
    hu: "Milyen adatot használ a Calm Touch: az alkalmakhoz és a Pulse kérdőívhez nem kérünk személyes adatot; a Pulse+ felmérés személyes hozzájáruláshoz kötött.",
    en: "What data Calm Touch uses: no personal data for sessions or the Pulse questionnaire; the Pulse+ assessment requires personal consent.",
    de: "Welche Daten Calm Touch verwendet: keine personenbezogenen Daten für Sitzungen und den Pulse-Fragebogen; Pulse+ erfordert eine persönliche Einwilligung.",
  },
};
const UI: Record<Lang, { home: string; companies: string; report: string; quote: string; pulsePlus: string; nav: string; logoAlt: string; operator: string }> = {
  hu: { home: "Főoldal", companies: "Cégeknek", report: "Példa riport", quote: "Ajánlatot kérek", pulsePlus: "Pulse+ műszeres felmérés", nav: "Fő navigáció", logoAlt: "Calm Touch – Stresszoldás érintéssel", operator: "Üzemeltető" },
  en: { home: "Home", companies: "For companies", report: "Example report", quote: "Request a quote", pulsePlus: "Pulse+ instrument-based assessment", nav: "Main navigation", logoAlt: "Calm Touch – stress relief through touch", operator: "Operator" },
  de: { home: "Startseite", companies: "Für Unternehmen", report: "Beispielbericht", quote: "Angebot anfordern", pulsePlus: "Pulse+ apparative Erhebung", nav: "Hauptnavigation", logoAlt: "Calm Touch – Stressabbau durch Berührung", operator: "Betreiber" },
};

export function legalMeta(lang: Lang, doc: LegalDoc): Metadata {
  return pageMeta(lang, LEGAL_PATH[doc], `${TITLE[doc][lang]} – Calm Touch`, DESC[doc][lang], { absolute: true });
}

export function LegalPage({ lang, doc }: { lang: Lang; doc: LegalDoc }) {
  const t = UI[lang];
  const path = LEGAL_PATH[doc];
  const logo = lang === "hu" ? "logo-fekvo" : `logo-fekvo-${lang}`;
  return (
    <div style={{ fontFamily: "var(--ct-text)", color: "#2E3631", background: "#FAF6F1", lineHeight: 1.6, fontSize: "17px", minHeight: "100vh" }}>
      {lang !== "hu" && <HtmlLang lang={lang} />}
      <header style={{ borderBottom: "1px solid #EADFD2" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "18px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href={sitePath(lang, "")} style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
            <img className="ct-logo" src={`/calm-touch/brand/${logo}.webp`} alt={t.logoAlt} style={{ display: "block", height: "56px", width: "auto", maxWidth: "100%" }} />
          </a>
          <nav aria-label={t.nav} className="ct-nav" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", fontSize: "15px" }}>
            <a href={sitePath(lang, "")} style={{ textDecoration: "none", color: "#2E3631" }}>{t.home}</a>
            <a href={sitePath(lang, "/cegeknek")} style={{ textDecoration: "none", color: "#2E3631" }}>{t.companies}</a>
            <a href={sitePath(lang, "/pulse-riport")} style={{ textDecoration: "none", color: "#3F6E8C" }}>{t.report}</a>
            <a href={sitePath(lang, "/cegeknek#ajanlat")} className="ct-nav-cta" style={{ textDecoration: "none", background: "#7E3A4A", color: "#FFFFFF", padding: "12px 20px", borderRadius: "999px", fontWeight: 500, minHeight: "44px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>{t.quote}</a>
            <SiteLang current={lang} path={path} />
            <MobileMenu lang={{ current: lang, path }} items={[{ href: sitePath(lang, ""), label: t.home }, { href: sitePath(lang, "/cegeknek"), label: t.companies }, { href: sitePath(lang, "/pulse-plus"), label: t.pulsePlus }, { href: sitePath(lang, "/pulse-riport"), label: t.report }, { href: sitePath(lang, "/cegeknek#ajanlat"), label: t.quote, primary: true }]} />
          </nav>
        </div>
      </header>
      <main style={{ padding: "clamp(36px, 5vw, 64px) 20px clamp(48px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={{ alignSelf: "flex-start", fontSize: "12px", letterSpacing: "0.2em", color: "#55665A", background: "#E9EBD6", borderRadius: "999px", padding: "6px 14px", fontWeight: 700 }}>{CHIP[doc][lang]}</span>
          <h1 style={{ overflowWrap: "break-word", margin: 0, fontFamily: "var(--ct-display)", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.08, color: "#55665A", textWrap: "balance" }}>{TITLE[doc][lang]}</h1>
          <article className="ct-method ct-legal" dangerouslySetInnerHTML={{ __html: LEGAL_HTML[doc][lang] }} />
        </div>
      </main>
      <footer style={{ padding: "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", borderTop: "1px solid #EADFD2" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "14px", color: "#5E6A62" }}>
          <span>Calm Touch · {t.operator}: Alternatíva Tanácsadó Csoport Kft.<FooterContact /></span>
          <LegalLinks current={lang} />
        </div>
      </footer>
    </div>
  );
}
