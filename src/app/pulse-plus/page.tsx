import type { Metadata } from "next";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "../SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "../MobileMenu";
import { FooterContact } from "@/app/FooterContact";

export const metadata: Metadata = pageMeta("hu", "/pulse-plus", "Calm-Touch Pulse+ – műszeres mentális állapotfelmérés", "Egyszeri, integrált műszeres állapotfelmérés: qEEG, HRV és kognitív teszt egy vizsgálat alatt, személyes kiértékeléssel és hathetes fejlesztési javaslattal.");

const blue = "#2C5069";
const mid = "#3F6E8C";
const pale = "#DDE8EF";

const measures = [
  { n: "1", t: "qEEG", sub: "az agy elektromos képe", d: "Az agyi elektromos aktivitás felvétele nyitott és csukott szemmel, majd az agyi ritmusok eloszlásának elemzése.", w: "A nyugalmi állapot minőségét: van, akinek csukott szemmel is úgy dolgozik az idegrendszere, mintha feladata lenne – nem tud leállni." },
  { n: "2", t: "HRV", sub: "az idegrendszer üzemmódja", d: "Néhány perces felvétel a szívverések közötti apró időbeli ingadozásokról.", w: "Az autonóm egyensúlyt és a regenerációs tartalékot: mennyire rugalmasan vált a szervezet terhelés és pihenés között." },
  { n: "3", t: "Kognitív teszt", sub: "négy számítógépes feladat", d: "Figyelem, reakcióidő, információfeldolgozás és döntés nyomás alatt.", w: "Kemény számokat a teljesítményről: kimerültségnél megnyúlik a reakcióidő, ingadozóbb a figyelem, nő a hibaszám." },
];

const timeline = [
  { t: "Mérhető változás", d: "HRV, qEEG, teljesítmény", c: "#3F6E8C" },
  { t: "Szubjektív panasz", d: "„Nem bírom így tovább”", c: "#B07D18" },
  { t: "Kiesés", d: "táppénz, kilépés, pótlás", c: "#A63D32" },
];

const limits = [
  { t: "Nem diagnózis", d: "A qEEG-ből nem lesz depresszióteszt, a HRV-ből nem lesz kiégésindex." },
  { t: "Van zaja", d: "Elektródakontaktus, előző esti alkohol, mérés előtti kávé – ezeket a mérés során kezelni kell." },
  { t: "Egyedül kevés", d: "Az érték ott keletkezik, ahol több független jel ugyanabba az irányba mutat. Ezért mérünk háromféleképpen, ugyanazon a napon." },
];

const card = { background: "#FFFFFF", borderRadius: "20px", padding: "clamp(20px, 3vw, 28px)", display: "flex", flexDirection: "column" as const, gap: "10px" };
const h2 = { overflowWrap: "break-word" as const, margin: "0", fontFamily: "var(--ct-display)", fontWeight: 700, fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1, color: blue };
const eyebrow = { fontSize: "13px", letterSpacing: "0.18em", color: mid, fontWeight: 700 };

const ld = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Calm-Touch Pulse+",
  serviceType: "Integrált mentális állapotfelmérés",
  description: "Egyszeri, integrált műszeres állapotfelmérés: qEEG, HRV és kognitív teszt egy vizsgálat alatt, személyes kiértékeléssel és hathetes fejlesztési javaslattal.",
  url: abs("hu", "/pulse-plus"),
  provider: { "@type": "Organization", name: "Calm Touch", url: abs("hu", "") },
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
  audience: { "@type": "BusinessAudience" },
};

export default function PulsePlusPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.55", "fontSize": "17px"}}>
<JsonLd data={ld} />
<header style={{"borderBottom": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "18px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px"}}>
<a href="/calm-touch" style={{"textDecoration": "none", "display": "flex", "flexDirection": "column"}}>
<img className="ct-logo" src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch – Stresszoldás érintéssel" style={{"display": "block", "height": "56px", "width": "auto", "maxWidth": "100%"}} />
</a>
<nav aria-label="Fő navigáció" className="ct-nav" style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px", "fontSize": "15px"}}>
<a href="/calm-touch" style={{"textDecoration": "none", "color": "#2E3631"}}>Főoldal</a>
<a href="/calm-touch/cegeknek" style={{"textDecoration": "none", "color": "#2E3631"}}>Cégeknek</a>
<a href="/calm-touch/modszertan" style={{"textDecoration": "none", "color": mid}}>Pulse módszertan</a>
<a href="/calm-touch/cegeknek#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Ajánlatot kérek</a>
<SiteLang current="hu" path="/pulse-plus" />
<MobileMenu lang={{ current: "hu", path: "/pulse-plus" }} items={[{ href: "/calm-touch", label: "Főoldal" }, { href: "/calm-touch/cegeknek", label: "Cégeknek" }, { href: "/calm-touch/modszertan", label: "Mérési módszertan" }, { href: "/calm-touch/pulse-riport", label: "Példa riport" }, { href: "/calm-touch/cegeknek#ajanlat", label: "Ajánlatot kérek", primary: true }]} />
</nav>
</div>
</header>

<section style={{"padding": "clamp(44px, 5vw, 72px) 20px clamp(36px, 4vw, 56px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "20px", "fontWeight": 800, "color": "#FFFFFF", "background": mid, "borderRadius": "999px", "padding": "4px 18px"}}>Pulse+</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": 700, "fontSize": "clamp(34px, 4.6vw, 56px)", "lineHeight": "1.05", "color": blue, "textWrap": "balance"}}>Integrált mentális állapotfelmérés</h1>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "20px", "color": "#3B443E", "textWrap": "pretty"}}>Három műszeres mérés egy vizsgálat alatt: agyi aktivitás, szívritmus-variabilitás és kognitív teljesítmény. A személyes kiértékelés megmutatja, mire érdemes figyelni a következő hetekben. A Calm-Touch Pulse kérdőíves visszajelzését egészíti ki objektív adatokkal.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>egyszeri felmérés</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>3 műszeres mérés</span>
<span style={{"fontSize": "14px", "fontWeight": 700, "color": blue, "background": pale, "borderRadius": "999px", "padding": "5px 14px"}}>személyes kiértékelés</span>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>MIÉRT MÉRÜNK</span>
<h2 style={h2}>A jelek korábban jönnek, mint a panasz</h2>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>„Jól vagyok” – mondja a munkatárs, a kérdőív szerint rendben van, a vezető is így látja. A mentális állapotnak azonban teste is van: mire valaki kimondja, hogy nem bírja, a szervezetében ez már hetek vagy hónapok óta látszik.</p>
<ol aria-label="Idővonal" style={{"listStyle": "none", "margin": "0", "padding": "0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", "gap": "12px"}}>
{timeline.map((s, i) => (
<li key={s.t} style={{...card, "background": "#FAF6F1", "borderTop": `5px solid ${s.c}`}}>
<span style={{"fontSize": "13px", "fontWeight": 700, "color": s.c}}>{i + 1}.</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": "#2E3631"}}>{s.t}</b>
<span style={{"color": "#3B443E"}}>{s.d}</span>
</li>
))}
</ol>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>Az időablak az első és a második lépés között van. A megelőzés lényegesen olcsóbb, mint a helyreállítás.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>MIBŐL ÁLL A FELMÉRÉS</span>
<h2 style={h2}>Három mérés, egy közös profil</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", "gap": "16px"}}>
{measures.map((m) => (
<div key={m.n} style={card}>
<span style={{"width": "40px", "height": "40px", "borderRadius": "20px", "background": mid, "color": "#FFFFFF", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--ct-display)", "fontWeight": 800, "fontSize": "18px"}}>{m.n}</span>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "22px", "color": blue}}>{m.t} <span style={{"fontSize": "16px", "fontWeight": 600, "color": mid}}>· {m.sub}</span></b>
<span style={{"color": "#3B443E"}}>{m.d}</span>
<span style={{"color": "#2E3631"}}><b>Mit mutat meg:</b> {m.w}</span>
</div>
))}
</div>
<p style={{"margin": "0", "color": blue, "fontWeight": 600}}>A három eredmény egyetlen profillá áll össze – ez a személyre szabott fejlesztési terv alapja.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={eyebrow}>HOGYAN ZAJLIK</span>
<h2 style={h2}>Két rövid alkalom</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>1. alkalom – mérés, kb. 40 perc</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Rövid előzménybeszélgetés</li>
<li>A három műszeres mérés elvégzése</li>
<li>Az adatok feldolgozása utólag történik</li>
</ul>
</div>
<div style={card}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "20px", "color": blue}}>2. alkalom – kiértékelés, kb. 20 perc</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Az eredmények részletes, érthető magyarázata</li>
<li>Az összefüggések átbeszélése</li>
<li>Fejlesztési irány és hathetes terv</li>
</ul>
</div>
</div>
<p style={{"margin": "0", "maxWidth": "860px", "color": "#3B443E"}}>A felmérés önmagában is teljes. Ha a résztvevő a hathetes tervet követi, a mérés ugyanazzal a protokollal megismételhető – cégnél ez a ciklus jól illeszkedik a negyedéves ritmushoz, és a második mérés mutatja meg a változást.</p>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={{...eyebrow, "color": "#7E3A4A"}}>ŐSZINTÉN</span>
<h2 style={{...h2, "color": "#7E3A4A"}}>Amit egy mérés nem tud</h2>
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
<span style={eyebrow}>MIT AD</span>
<h2 style={h2}>A résztvevőnek és a munkáltatónak</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(380px, 100%), 1fr))", "gap": "16px"}}>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>A résztvevőnek</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Visszajelzés arról, amit eddig csak sejtett</li>
<li>Semleges adat, minősítés nélkül</li>
<li>Célzott javaslatok az alvásra, a terhelésre, a figyelemre</li>
<li>Hat hét múlva megismételhető mérés, így a változás követhető</li>
</ul>
</div>
<div style={{...card, "background": "#FAF6F1"}}>
<b style={{"fontSize": "19px"}}>A munkáltatónak</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "6px", "color": "#3B443E"}}>
<li>Kimutatható hatás: az elégedettségi kérdőív azt méri, mennyire tetszett – a fiziológia azt, hogy történt-e valami</li>
<li>A wellbeing program mellé objektív, számszerű adatok is kerülnek</li>
<li>Csoportszintű, anonimizált kép a szervezet terheléséről</li>
<li>Az egyéni eredmény a mért személyé; a cég csak legalább 10 fő összesített eredményét látja</li>
<li>A felmérés csak a résztvevő személyes, írásos hozzájárulásával történik</li>
</ul>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px", "background": pale}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "24px", "alignItems": "start"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>BIZALOM</span>
<h2 style={h2}>Bizalom nélkül nincs mérés</h2>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>A mért személy</b>
<span style={{"color": "#3B443E"}}>Látja a teljes egyéni eredményét. A profil az övé, és senki másé.</span>
</div>
<div style={card}>
<b style={{"fontSize": "19px", "color": blue}}>A cég</b>
<span style={{"color": "#3B443E"}}>Csak összesített, anonimizált képet lát, legalább 10 fő adatából – névvel soha.</span>
</div>
<p style={{"margin": "0", "color": "#3B443E"}}>Ha ez a határ egyszer is átjárhatóvá válik, a következő mérésnél már senki nem lesz őszinte.</p>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>A MÉRÉST VEZETI</span>
<div style={{...card, "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "gap": "20px"}}>
<img src="/calm-touch/images/szaloki-laszlo.webp" alt="Szalóki László" width={480} height={480} loading="lazy" style={{"width": "140px", "height": "140px", "objectFit": "cover", "borderRadius": "70px", "flex": "0 0 auto"}} />
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "flex": "1 1 200px"}}>
<b style={{"fontFamily": "var(--ct-display)", "fontSize": "24px", "color": blue}}>Szalóki László</b>
<span style={{"color": "#3B443E"}}>Kognitív kutató · Neurotrainer</span>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>Bioptima Agytréner Központ</span>
</div>
<p style={{"margin": "0", "flex": "1 1 100%", "fontSize": "16px", "color": "#3B443E"}}>Villamosmérnök, kognitív és neurotechnológiai szakember, agytréner. Egyetemi kutatásaiban a nyelvi megértés elektrofiziológiai jeleit vizsgálta. Több mint tíz évig az Országos Sportegészségügyi Intézet Teljesítménydiagnosztikai Kutató Osztályán a kognitív modul szakmai vezetőjeként a sportolói teljesítmény mentális és idegrendszeri tényezőit vizsgálta. A Magyar Teljesítménydiagnosztikai Társaság alapító tagja, a Magyar Sporttudományi Társaság rendszeres előadója.</p>
</div>
</div>
</div>
</section>

<section style={{"padding": "clamp(40px, 5vw, 64px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={eyebrow}>KINEK AJÁNLJUK</span>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>Tartós stressz, figyelmi nehézségek vagy hangulatingadozás esetén, illetve ha valaki a munkahelyi teljesítményén szeretne javítani. Céges keretben vezetőknél és nagy terhelésű csapatoknál ajánljuk, a Calm-Touch program kiegészítéseként.</p>
<p style={{"margin": "0", "maxWidth": "860px", "fontSize": "19px", "color": "#3B443E"}}>Céges csomagra, több fős felmérésre és helyszíni mérésre egyedi ajánlatot készítünk; az árat az ajánlatkérés alapján küldjük.</p>
<a href="/calm-touch/cegeknek#ajanlat" style={{"alignSelf": "flex-start", "textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": 600, "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pulse+ ajánlatot kérek</a>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Az integrált mentális állapotfelmérés állapotfelmérő és fejlesztő szolgáltatás, orvosi diagnózist nem ad, és kezelést nem helyettesít.</span>
</div>
</section>

<footer style={{"padding": "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 24px)", "borderTop": "1px solid #EADFD2"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "16px", "fontSize": "14px", "color": "#5E6A62"}}>
<span>Calm Touch · Üzemeltető: Alternatíva Tanácsadó Csoport Kft.<FooterContact /></span>
<LegalLinks current="hu" method />
</div>
</footer>
</div>
  );
}
