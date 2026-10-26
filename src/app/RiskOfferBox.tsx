/** care4you pszichoszociális kockázatfelmérés – kedvezményes ajánlati doboz (főoldal és cégeknek oldalak, HU/EN/DE). */

type Lang = "hu" | "en" | "de";

const T = {
  hu: {
    tag: "PSZICHOSZOCIÁLIS KOCKÁZATFELMÉRÉS",
    title: "A pszichoszociális kockázatok felmérése munkáltatói kötelezettség.",
    body: (
      <>
        A munkavédelmi törvény szerint minden munkáltatónak fel kell mérnie a <b>pszichoszociális kockázatokat</b> is, és a kockázatértékelést <b>legalább ötévente</b> – lényeges változáskor, például átszervezés után azonnal – felül kell vizsgálni. A Calm-Touch Pulse megmutatja, hogyan bírja a csapat; a care4you felmérés azt is, <b>miért</b>, és hol kell beavatkozni.
      </>
    ),
    reports: ["Egyéni riport – Stresszleltár", "Csoportos riport", "Szervezeti riport ajánlásokkal"],
    deal: "KEDVEZMÉNY 2026. DECEMBER 15-IG",
    packs: "30 és 50 fős felmérési csomagok",
    a: "A csomag · max. 30 fő",
    b: "B csomag · max. 50 fő",
    priceA: "175 000 Ft",
    priceB: "275 000 Ft",
    vat: " + ÁFA",
    incl: "Egyéni, csoportos és szervezeti riport ajánlásokkal, 90 perces vezetői eredménybemutatóval. A felmérést 2027. február 15-ig kell elindítani.",
    cta: "Kedvezményes csomagot kérek →",
    more: "Részletek",
  },
  en: {
    tag: "PSYCHOSOCIAL RISK ASSESSMENT",
    title: "Assessing psychosocial risks is a legal obligation for employers.",
    body: (
      <>
        Under Hungarian occupational safety law, every employer must assess <b>psychosocial risks</b> as well, and the risk assessment must be reviewed <b>at least every five years</b> – and immediately after any significant change, such as a reorganisation. Calm-Touch Pulse shows how the team is coping; the care4you assessment also shows <b>why</b>, and where to intervene.
      </>
    ),
    reports: ["Individual report – Stress Inventory", "Group report", "Organisational report with recommendations"],
    deal: "DISCOUNT UNTIL 15 DECEMBER 2026",
    packs: "Assessment packages for 30 and 50 people",
    a: "Package A · up to 30 people",
    b: "Package B · up to 50 people",
    priceA: "HUF 175,000",
    priceB: "HUF 275,000",
    vat: " + VAT",
    incl: "Individual, group and organisational reports with recommendations, plus a 90-minute results briefing for management. The survey must start by 15 February 2027.",
    cta: "Request a discounted package →",
    more: "Details (in Hungarian)",
  },
  de: {
    tag: "PSYCHOSOZIALE GEFÄHRDUNGSBEURTEILUNG",
    title: "Die Beurteilung psychosozialer Risiken ist eine Pflicht des Arbeitgebers.",
    body: (
      <>
        Nach dem ungarischen Arbeitsschutzgesetz muss jeder Arbeitgeber auch die <b>psychosozialen Risiken</b> beurteilen; die Gefährdungsbeurteilung ist <b>mindestens alle fünf Jahre</b> – bei wesentlichen Änderungen, etwa nach einer Umstrukturierung, sofort – zu überprüfen. Der Calm-Touch Pulse zeigt, wie es dem Team geht; die care4you-Erhebung zeigt auch, <b>warum</b>, und wo man ansetzen sollte.
      </>
    ),
    reports: ["Einzelbericht – Stressinventar", "Gruppenbericht", "Organisationsbericht mit Empfehlungen"],
    deal: "RABATT BIS 15. DEZEMBER 2026",
    packs: "Erhebungspakete für 30 und 50 Personen",
    a: "Paket A · bis 30 Personen",
    b: "Paket B · bis 50 Personen",
    priceA: "175.000 HUF",
    priceB: "275.000 HUF",
    vat: " + MwSt.",
    incl: "Einzel-, Gruppen- und Organisationsbericht mit Empfehlungen sowie eine 90-minütige Ergebnispräsentation für die Führung. Die Erhebung muss bis zum 15. Februar 2027 starten.",
    cta: "Rabattpaket anfragen →",
    more: "Details (auf Ungarisch)",
  },
} as const;

const pill = { background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "6px 14px", fontSize: "15px", fontWeight: 700, color: "#2C5069" } as const;
const priceCard = { background: "rgba(255,255,255,.1)", borderRadius: "14px", padding: "12px 14px" } as const;

export function RiskOfferBox({ lang = "hu" }: { lang?: Lang }) {
  const t = T[lang];
  return (
<aside lang={lang} aria-labelledby="kockazatfelmeres-cim" style={{ background: "#FAF6F1", color: "#2E3631", borderRadius: "28px", borderTop: "8px solid #F5B942", padding: "clamp(22px, 4vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "clamp(20px, 3vw, 32px)", alignItems: "start", boxShadow: "0 24px 60px rgba(0,0,0,.25)" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
<img src="/calm-touch/partners/care4you-logo.png" alt="care4you" width={204} height={107} loading="lazy" decoding="async" style={{ display: "block", height: "48px", width: "auto" }} />
<span style={{ fontSize: "13px", letterSpacing: "0.16em", fontWeight: 700, color: "#7E3A4A", background: "#F4E3E4", borderRadius: "999px", padding: "6px 14px" }}>{t.tag}</span>
</div>
<h3 id="kockazatfelmeres-cim" style={{ margin: 0, fontFamily: "var(--ct-display)", fontSize: "clamp(26px, 2.8vw, 36px)", lineHeight: 1.12, color: "#2C5069" }}>{t.title}</h3>
<p style={{ margin: 0, color: "#3B443E" }}>{t.body}</p>
<ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
{t.reports.map((r) => <li key={r} style={pill}>{r}</li>)}
</ul>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "14px", background: "#2C5069", color: "#FFFFFF", borderRadius: "22px", padding: "clamp(20px, 3vw, 28px)" }}>
<span style={{ alignSelf: "flex-start", fontSize: "13px", letterSpacing: "0.14em", fontWeight: 800, color: "#2E2300", background: "#F5B942", borderRadius: "999px", padding: "6px 14px" }}>{t.deal}</span>
<b style={{ fontFamily: "var(--ct-display)", fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.2 }}>{t.packs}</b>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "10px" }}>
<div style={priceCard}><b style={{ display: "block", fontSize: "15px" }}>{t.a}</b><span style={{ fontSize: "20px", fontWeight: 800, whiteSpace: "nowrap" }}>{t.priceA}</span><span style={{ fontSize: "13px", color: "#DDE8EF" }}>{t.vat}</span></div>
<div style={priceCard}><b style={{ display: "block", fontSize: "15px" }}>{t.b}</b><span style={{ fontSize: "20px", fontWeight: 800, whiteSpace: "nowrap" }}>{t.priceB}</span><span style={{ fontSize: "13px", color: "#DDE8EF" }}>{t.vat}</span></div>
</div>
<span style={{ fontSize: "15px", color: "#E7EFF4" }}>{t.incl}</span>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "4px" }}>
<a href="https://bevetel.hu/intrest?id=52e8e51604b24ded&lang=hu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", background: "#F5B942", color: "#2E2300", padding: "13px 22px", borderRadius: "999px", fontWeight: 800, minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>{t.cta}</a>
{/* A pszichoszoc.hu kezdőlapjára mutat (basePath nélkül), ezért nem Link. */}
{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
<a href="/#csomagok" hrefLang="hu" style={{ textDecoration: "none", color: "#FFFFFF", padding: "13px 18px", borderRadius: "999px", fontWeight: 700, border: "1px solid rgba(255,255,255,.5)", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>{t.more}</a>
</div>
</div>
</aside>
  );
}
