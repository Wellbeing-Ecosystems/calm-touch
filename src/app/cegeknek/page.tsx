import type { Metadata } from "next";
import { abs, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/app/JsonLd";
import { SiteLang } from "../SiteLang";
import { LegalLinks } from "@/app/jogi/LegalLinks";
import { MobileMenu } from "../MobileMenu";
import { OfferForm } from "./OfferForm";
import { FooterContact } from "@/app/FooterContact";

export const metadata: Metadata = pageMeta("hu", "/cegeknek", "Cégeknek – irodai stresszoldó program, csomagok és árak", "Calm Touch céges csomagok Budapesten és 20 km-es körzetében: pilot (3 óra, legfeljebb 8 fő), rendszeres alkalmak és Wellbeing Day, havi névtelen Calm-Touch Pulse riporttal.");

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${abs("hu", "/cegeknek")}#gyik`,
      mainEntity: [
    { "@type": "Question", name: "Ez masszázs?", acceptedAnswer: { "@type": "Answer", text: "Nem klasszikus masszázs: nincs erős nyomás és olaj. Lassú, gyengéd érintés ruhán keresztül, mentális felfrissülés céljából." } },
    { "@type": "Question", name: "Mi van, ha valaki nem szereti, ha megérintik?", acceptedAnswer: { "@type": "Answer", text: "A részvétel önkéntes. Az érintési területeket előre egyeztetjük, az alkalom bármikor leállítható." } },
    { "@type": "Question", name: "Mennyi időt vesz el a munkától?", acceptedAnswer: { "@type": "Answer", text: "Összesen kb. 20 perc, a pillanatképekkel együtt. A havi kérdőív havonta egyszer további kb. 2 perc." } },
    { "@type": "Question", name: "Ki látja a válaszokat?", acceptedAnswer: { "@type": "Answer", text: "A cég csak összesített eredményt kap, legalább 5 fős csoportokban. Egyéni adatot nem adunk ki; a válaszokat saját kód párosítja, név nem." } },
    { "@type": "Question", name: "Miért csak havonta egyszer a hosszabb kérdőív?", acceptedAnswer: { "@type": "Answer", text: "Hogy ne terhelje a résztvevőket, és a trend tiszta maradjon: egy fő egy hónapban egy választ ad, így a havi adatok összevethetők." } },
    { "@type": "Question", name: "Ez egészségügyi szolgáltatás?", acceptedAnswer: { "@type": "Answer", text: "Nem. Wellbeing-szolgáltatás, nem diagnosztizál és nem kezel. A pillanatkép önbevallás, nem egészségügyi mérés." } },
    { "@type": "Question", name: "Hogyan adózik a juttatás?", acceptedAnswer: { "@type": "Answer", text: "Az adózási besorolást javasoljuk a cég könyvelőjével egyeztetni." } },
    { "@type": "Question", name: "Hol érhető el a szolgáltatás?", acceptedAnswer: { "@type": "Answer", text: "A honlapon szereplő árak Budapesten és 20 km-es vonzáskörzetében érvényesek. Távolabbi helyszínre is megyünk; ilyenkor az árak az útiköltséggel nőnek." } }
      ],
    },
    {
      "@type": "Service",
      name: "Calm-Touch",
      serviceType: "Munkahelyi stresszoldó, gyengéd érintéses program",
      url: abs("hu", "/cegeknek"),
      provider: { "@type": "Organization", name: "Calm Touch", url: abs("hu", "") },
      areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 }, geoRadius: 20000 },
      audience: { "@type": "BusinessAudience" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Rendszeres csomag · bevezető nettó árak alkalmanként",
        itemListElement: [
          { "@type": "Offer", name: "Első alkalom (pilot)", description: "3 óra · legfeljebb 8 fő", price: 50000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Rendszeres – hetente", description: "3 óra / alkalom", price: 55000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Rendszeres – 2 hetente", description: "3 óra / alkalom", price: 59000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Rendszeres – 3 hetente", description: "3 óra / alkalom", price: 62000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Rendszeres – havonta", description: "3 óra / alkalom", price: 65000, priceCurrency: "HUF" },
          { "@type": "Offer", name: "Wellbeing Day", description: "2 × 3 óra · legfeljebb 16 fő", price: 75000, priceCurrency: "HUF" },
        ],
      },
    },
  ],
};

export default function CegeknekPage() {
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
<a href="#pulse" style={{"textDecoration": "none", "color": "#3F6E8C"}}>Pulse riport</a>
<a href="#csomagok" style={{"textDecoration": "none", "color": "#2E3631"}}>Csomagok</a>
<a href="#gyik" style={{"textDecoration": "none", "color": "#2E3631"}}>GYIK</a>
<a href="#ajanlat" className="ct-nav-cta" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "12px 20px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "44px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Ajánlatot kérek</a>
<SiteLang current="hu" path="/cegeknek" />
<MobileMenu lang={{ current: "hu", path: "/cegeknek" }} items={[{ href: "/calm-touch", label: "Főoldal" }, { href: "#pulse", label: "Pulse riport" }, { href: "#csomagok", label: "Csomagok" }, { href: "#gyik", label: "GYIK" }, { href: "/calm-touch/pulse-plus", label: "Pulse+ műszeres felmérés" }, { href: "/calm-touch/modszertan", label: "Mérési módszertan" }, { href: "#ajanlat", label: "Ajánlatot kérek", primary: true }]} />
</nav>
</div>
</header>
<section style={{"padding": "clamp(28px, 3.4vw, 44px) 20px clamp(32px, 3.8vw, 52px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", "gap": "32px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#55665A", "fontWeight": "500"}}>HR-NEK ÉS VEZETŐKNEK</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 4.5vw, 58px)", "lineHeight": "1.04", "textWrap": "balance"}}>Mentális felfrissülés a munkanapon belül – követhető visszajelzéssel.</h1>
<p style={{"margin": "0", "fontSize": "19px", "color": "#3B443E", "textWrap": "pretty"}}>Munkatársai nem a feladatok mennyiségébe fáradnak bele, hanem abba, hogy nincs megállás. A Calm-Touch 15–20 perces irodai alkalmai ezt a megállást adják vissza – és havonta névtelen, összesített Pulse riportot kap arról, hogyan bírja a csapat, és mit változtattak az alkalmak.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px"}}>
<a href="#ajanlat" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot ajánlatot kérek</a>
<a href="/calm-touch/pulse-riport" style={{"textDecoration": "none", "color": "#55665A", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "border": "1px solid #55665A", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Példa Pulse riport</a>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="HR-vezető és wellbeing szakember kötetlenül beszélget egy tárgyalóban, laptop és bögrék mellett." style={{"display": "block", "width": "100%", "aspectRatio": "16 / 10", "objectFit": "cover", "borderRadius": "14px"}} />
<b style={{"fontSize": "18px"}}>Miért most?</b>
<span style={{"color": "#3B443E"}}>Az európai dolgozók 29%-a számol be stresszről, depresszióról vagy szorongásról; több mint 40%-uk súlyos időnyomás alatt dolgozik. A magyarok a munkahelyi feszültséget tartják egészségtelen szokásaik fő okozójának.</span>
<span style={{"color": "#3B443E"}}>A Calm-Touch kiegészíti – nem helyettesíti – a pszichoszociális kockázatértékelést és a szervezeti intézkedéseket.</span>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Források: EU-OSHA, OSH Pulse 2025; STADA Health Report 2025</span>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(34px, 4vw, 56px) 20px", "background": "#2C5069", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "maxWidth": "50rem"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.18em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08", "color": "#FFFFFF"}}>Stresszoldás és rövid állapot-visszajelzés egyben.</h2>
<p style={{"margin": "0", "fontSize": "18px", "color": "#E6EEF3", "textWrap": "pretty"}}>A csapat állapotát nem egy éves kérdőívből látja, hanem havi, valós helyzetképből. Minden alkalom három jelet ad, mindhármat zöld–sárga–piros jelzéssel.</p>
</div>
<div style={{"overflowX": "auto", "background": "#FAF6F1", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "760px", "borderCollapse": "collapse", "color": "#2E3631", "fontSize": "15px"}}>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2"}}>
<th scope="col" style={{"padding": "16px 20px"}}>Jel</th>
<th scope="col" style={{"padding": "16px 20px"}}>Mit mutat</th>
<th scope="col" style={{"padding": "16px 20px"}}>Honnan, milyen gyakran</th>
<th scope="col" style={{"padding": "16px 20px"}}>Zöld</th>
<th scope="col" style={{"padding": "16px 20px"}}>Sárga</th>
<th scope="col" style={{"padding": "16px 20px"}}>Piros</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>1. Állapot-pulzus</th>
<td style={{"padding": "16px 20px"}}>Milyen állapotban érkeznek az emberek</td>
<td style={{"padding": "16px 20px"}}>Előtte-pillanatkép, jóllét-index 1–10 · minden alkalom</td>
<td style={{"padding": "16px 20px"}}>6 felett</td>
<td style={{"padding": "16px 20px"}}>4,1–6</td>
<td style={{"padding": "16px 20px"}}>4 vagy alatta</td>
</tr>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>2. Hatás</th>
<td style={{"padding": "16px 20px"}}>Mennyit változtatott az érintés</td>
<td style={{"padding": "16px 20px"}}>A jóllét-index változása (utána − előtte) · minden alkalom</td>
<td style={{"padding": "16px 20px"}}>legalább +2 pont</td>
<td style={{"padding": "16px 20px"}}>+1 – +1,9 pont</td>
<td style={{"padding": "16px 20px"}}>+1 pont alatt</td>
</tr>
<tr>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>3. Havi trend</th>
<td style={{"padding": "16px 20px"}}>Tartós-e a javulás, fenntartható-e a terhelés</td>
<td style={{"padding": "16px 20px"}}>11 állításos kérdőív, havi jóllét-index 1–10 · havonta, résztvevőnként egyszer</td>
<td style={{"padding": "16px 20px"}}>6,5 felett</td>
<td style={{"padding": "16px 20px"}}>4,6–6,5</td>
<td style={{"padding": "16px 20px"}}>4,5 vagy alatta</td>
</tr>
</tbody>
</table>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"background": "#FAF6F1", "color": "#2E3631", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#DDE8EF", "border": "2px solid #3F6E8C", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse</span>
<b style={{"fontSize": "19px"}}>Kérdőíves előtte–utána mérés</b>
<span style={{"color": "#3B443E"}}>6 kérdés minden alkalom előtt és után, 1–10-es skálán (1 = nem jellemző, 10 = teljes mértékben), plusz havi 11 állításos kérdőív. Minden csomag része.</span>
</div>
<div style={{"background": "#3F6E8C", "color": "#FFFFFF", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"alignSelf": "flex-start", "fontFamily": "var(--ct-display)", "fontSize": "18px", "fontWeight": "800", "color": "#2C5069", "background": "#FFFFFF", "borderRadius": "999px", "padding": "3px 16px"}}>Pulse+</span>
<b style={{"fontSize": "19px"}}>Kiegészítő műszeres állapotfelmérés</b>
<span style={{"color": "#F2F6F9"}}>Egyszeri műszeres állapotfelmérés a kérdőívek mellé: agyi aktivitás (qEEG), szívritmus-variabilitás (HRV) és kognitív teszt, így a megélt állapot mellé objektív élettani és kognitív adatok is kerülnek. Ára egyedi ajánlat alapján.</span>
<a href="/calm-touch/pulse-plus" style={{"alignSelf": "flex-start", "color": "#FFFFFF", "fontWeight": "700"}}>A Pulse+ részletei <span className="ct-arrow">→</span></a>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Rendszeres terhelésjelzés</b><span style={{"color": "#EEF0EA"}}>Havonta látja, melyik csapatnál nő a feszültség – például zárási időszakban vagy projektcsúcsban.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Követhető változás</b><span style={{"color": "#EEF0EA"}}>A wellbeing-költség mellé a résztvevők visszajelzéséből számolt mutatók kerülnek, nem csak benyomások.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Megelőzés</b><span style={{"color": "#EEF0EA"}}>A tartósan piros jelzés korai figyelmeztetés: célzott felmérés, workshop vagy munkaszervezési lépés indítható időben.</span></div>
</div>
<span style={{"fontSize": "14px", "color": "#E6EAE4"}}>Minden mutató 1–10 skálán szerepel, ahol 10 = a legjobb állapot; a negatív tartalmú kérdéseknél (pl. feszültség, kimerülés) a pontozás fordított. A küszöbértékek kiinduló javaslatok; az első három hónap adatai alapján finomítjuk őket. A riport kimondja korlátait is: az önkéntes résztvevők önbevallását mutatja, nem az egész szervezetét. A kérdéssor szakirodalmi alapokra épülő saját összeállítás, nem validált diagnosztikai mérőeszköz.</span>
</div>
</section>
<section style={{"padding": "clamp(34px, 4vw, 56px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "28px", "alignItems": "start"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>A MÉRÉS SZABÁLYAI</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.1vw, 40px)", "lineHeight": "1.1"}}>Rövid, névtelen, és senkit nem terhel túl.</h2>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<li><b>6 kérdéses pillanatkép</b> minden alkalom előtt és után, kb. 30 másodperc.</li>
<li><b>11 állításos havi kérdőív</b> havonta egyszer, résztvevőnként legfeljebb havi 1 alkalommal – a hónap első alkalma után. A rendszer a saját kód alapján felismeri, ha valaki már kitöltötte.</li>
<li>Nincs név, e-mail vagy beosztás: a résztvevő saját 4 jegyű kódot választ.</li>
<li>A cég csak legalább 5 fős csoportok összesített adatát látja. Megőrzés: 12 hónap, utána csak az összesített riport marad.</li>
</ul>
<a href="/calm-touch/folyamat" style={{"alignSelf": "flex-start", "color": "#55665A", "fontWeight": "500"}}>A teljes folyamat ábrán <span className="ct-arrow">→</span></a>
<a href="/calm-touch/modszertan" style={{"alignSelf": "flex-start", "color": "#3F6E8C", "fontWeight": "500"}}>Mérési módszertan és szakmai háttér <span className="ct-arrow">→</span></a>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<b style={{"fontSize": "18px"}}>Amit kap</b>
<ul style={{"margin": "0", "paddingLeft": "20px", "display": "flex", "flexDirection": "column", "gap": "10px", "color": "#3B443E"}}>
<li>Havi Calm-Touch Pulse riport: a csapat aktuális terhelése, az alkalmak hatása és a havi trend, zöld–sárga–piros jelzéssel.</li>
<li>A pilot végén egyoldalas riport: részvétel, változás, elégedettség, javaslat.</li>
<li>Rendszeres csomagnál negyedéves összefoglaló, intézkedési javaslattal.</li>
<li>Opcionálisan: 4 kérdéses havi csapatpulzus a nem résztvevőknek is, összehasonlító képhez.</li>
</ul>
<b style={{"fontSize": "18px", "marginTop": "8px"}}>Mire van szükség az Ön részéről?</b>
<span style={{"color": "#3B443E"}}>Egy csendes tárgyaló vagy sarok, egy szék és egy belső jelentkezési lista (sablont adunk). Minden mást – eszközöket, kérdőívet, riportot – mi hozunk.</span>
</div>
</div>
<div style={{"maxWidth": "1160px", "margin": "28px auto 0", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="Csendes irodai pihenősarok kárpitozott székkel, bordó párnával, kis asztallal, QR-táblával és növényekkel." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 1", "objectFit": "cover", "borderRadius": "14px"}} />
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Így néz ki egy előkészített Calm-Touch sarok.</span>
</div>
</section>
<section id="csomagok" style={{"padding": "clamp(34px, 4vw, 56px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>CSOMAGOK</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>A pilottól a rendszeres jelenlétig.</h2>
</div>
<p style={{"margin": "0", "color": "#3B443E", "maxWidth": "46rem"}}>Egy alkalom legalább 3 óra (legfeljebb 8 fő); nagyobb csapatnak 2 × 3 óra (legfeljebb 16 fő). A rendszeres jelenlét hetente, 2 vagy 3 hetente, illetve havonta kérhető – minél sűrűbb, annál kedvezőbb az alkalom ára.</p>
<div style={{"overflowX": "auto", "border": "2px solid #55665A", "borderRadius": "18px"}}>
<table style={{"width": "100%", "minWidth": "560px", "borderCollapse": "collapse", "fontSize": "16px"}}>
<caption style={{"textAlign": "left", "padding": "18px 22px 0", "fontWeight": "600", "fontSize": "18px"}}>Rendszeres csomag · bevezető nettó árak alkalmanként</caption>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "1px solid #EADFD2", "color": "#5E6A62"}}>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>Gyakoriság</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>3 óra / alkalom</th>
<th scope="col" style={{"padding": "14px 22px", "fontWeight": "500"}}>2 × 3 óra / alkalom</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Hetente</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>55 000 Ft</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>80 000 Ft</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>2 hetente</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>59 000 Ft</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>87 000 Ft</td>
</tr>
<tr style={{"borderBottom": "1px solid #F0E8DE"}}>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>3 hetente</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>62 000 Ft</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>90 000 Ft</td>
</tr>
<tr>
<th scope="row" style={{"padding": "14px 22px", "textAlign": "left"}}>Havonta</th>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>65 000 Ft</td>
<td style={{"padding": "14px 22px", "fontWeight": "600"}}>95 000 Ft</td>
</tr>
</tbody>
</table>
<p style={{"margin": "0", "padding": "0 22px 18px", "fontSize": "14px", "color": "#5E6A62"}}>Minden rendszeres csomaghoz havi Calm-Touch Pulse riport és negyedéves összefoglaló tartozik.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Első alkalom (pilot)</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>3 óra · legfeljebb 8 fő</span>
<span style={{"color": "#3B443E"}}>Egy csapat kipróbálja; összesített visszajelzés-riport a végén.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>50 000 Ft</span>
</div>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Wellbeing Day</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>2 × 3 óra · legfeljebb 16 fő</span>
<span style={{"color": "#3B443E"}}>Egészségnap, rendezvény, vezetői nap.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>75 000 Ft</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Bevezető nettó árak, Budapesten és 20 km-es vonzáskörzetében; távolabbi helyszín esetén az árak az útiköltséggel nőnek. A létszám 15–20 perces egyéni alkalmakkal, egy szakemberrel, az érkezéshez és a váltáshoz szükséges idővel számol. Számlázás cégre, alkalmanként.</span>
</div>
</section>
<section id="gyik" style={{"padding": "clamp(34px, 4vw, 56px) 20px"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Gyakori kérdések</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Ez masszázs?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Nem klasszikus masszázs: nincs erős nyomás és olaj. Lassú, gyengéd érintés ruhán keresztül, mentális felfrissülés céljából.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Mi van, ha valaki nem szereti, ha megérintik?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>A részvétel önkéntes. Az érintési területeket előre egyeztetjük, az alkalom bármikor leállítható.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Mennyi időt vesz el a munkától?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Összesen kb. 20 perc, a pillanatképekkel együtt. A havi kérdőív havonta egyszer további kb. 2 perc.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Ki látja a válaszokat?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>A cég csak összesített eredményt kap, legalább 5 fős csoportokban. Egyéni adatot nem adunk ki; a válaszokat saját kód párosítja, név nem.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Miért csak havonta egyszer a hosszabb kérdőív?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Hogy ne terhelje a résztvevőket, és a trend tiszta maradjon: egy fő egy hónapban egy választ ad, így a havi adatok összevethetők.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Ez egészségügyi szolgáltatás?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Nem. Wellbeing-szolgáltatás, nem diagnosztizál és nem kezel. A pillanatkép önbevallás, nem egészségügyi mérés.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Hogyan adózik a juttatás?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>Az adózási besorolást javasoljuk a cég könyvelőjével egyeztetni.</p></details>
<details style={{"background": "#FFFFFF", "borderRadius": "14px", "padding": "18px 22px"}}><summary style={{"fontWeight": "600", "cursor": "pointer", "minHeight": "28px"}}>Hol érhető el a szolgáltatás?</summary><p style={{"margin": "10px 0 0", "color": "#3B443E"}}>A honlapon szereplő árak Budapesten és 20 km-es vonzáskörzetében érvényesek. Távolabbi helyszínre is megyünk; ilyenkor az árak az útiköltséggel nőnek.</p></details>
</div>
</div>
</section>
<section id="ajanlat" style={{"padding": "clamp(34px, 4vw, 56px) 20px", "background": "#F4E3E4"}}>
<div style={{"maxWidth": "860px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>Kérjen pilot ajánlatot</h2>
<span style={{"color": "#5A4248"}}>Két munkanapon belül válaszolunk.</span>
</div>
<OfferForm />
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
