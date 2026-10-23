import type { Metadata } from "next";
import { OfferForm } from "./OfferForm";

export const metadata: Metadata = {
  title: "Cégeknek – pilot, csomagok és Pulse riport",
  description: "Calm Touch céges csomagok: pilot, rendszeres alkalmak és Wellbeing Day, havi névtelen Calm-Touch Pulse riporttal.",
  alternates: { canonical: "/calm-touch/cegeknek" },
};

export default function CegeknekPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.55", "fontSize": "17px"}}>
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
</nav>
</div>
</header>
<section style={{"padding": "clamp(48px, 5.0vw, 72px) 20px clamp(48px, 5.6vw, 80px)"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", "gap": "48px", "alignItems": "center"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#55665A", "fontWeight": "500"}}>HR-NEK ÉS VEZETŐKNEK</span>
<h1 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 4.5vw, 58px)", "lineHeight": "1.04", "textWrap": "balance"}}>Mérhető mentális felfrissülés a munkanapon belül.</h1>
<p style={{"margin": "0", "fontSize": "19px", "color": "#3B443E", "textWrap": "pretty"}}>Munkatársai nem a feladatok mennyiségébe fáradnak bele, hanem abba, hogy nincs megállás. A Calm-Touch 15–20 perces irodai alkalmai ezt a megállást adják vissza – és havonta névtelen, összesített Pulse riportot kap arról, hogyan bírja a csapat, és mit változtattak az alkalmak.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px"}}>
<a href="#ajanlat" style={{"textDecoration": "none", "background": "#7E3A4A", "color": "#FFFFFF", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Pilot ajánlatot kérek</a>
<a href="/calm-touch/pulse-riport" style={{"textDecoration": "none", "color": "#55665A", "padding": "14px 26px", "borderRadius": "999px", "fontWeight": "500", "border": "1px solid #55665A", "minHeight": "48px", "boxSizing": "border-box", "display": "inline-flex", "alignItems": "center"}}>Példa Pulse riport</a>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "20px", "padding": "clamp(20px, 3vw, 28px)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<img src="/calm-touch/images/08-ceges-megbeszeles.webp" alt="HR-vezető és wellbeing szakember kötetlenül beszélget egy tárgyalóban, laptop és bögrék mellett." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<b style={{"fontSize": "18px"}}>Miért most?</b>
<span style={{"color": "#3B443E"}}>Az európai dolgozók 29%-a számol be stresszről, depresszióról vagy szorongásról; több mint 40%-uk súlyos időnyomás alatt dolgozik. A magyarok a munkahelyi feszültséget tartják egészségtelen szokásaik fő okozójának.</span>
<span style={{"color": "#3B443E"}}>A Calm-Touch kiegészíti – nem helyettesíti – a pszichoszociális kockázatértékelést és a szervezeti intézkedéseket.</span>
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Források: EU-OSHA, OSH Pulse 2025; STADA Health Report 2025</span>
</div>
</div>
</section>
<section id="pulse" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#2C5069", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "40px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "maxWidth": "50rem"}}>
<span style={{"alignSelf": "flex-start", "fontSize": "13px", "letterSpacing": "0.18em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08", "color": "#FFFFFF"}}>Stresszoldás és pulzusmérés egyben.</h2>
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
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>1. Terhelés-pulzus</th>
<td style={{"padding": "16px 20px"}}>Milyen állapotban érkeznek az emberek</td>
<td style={{"padding": "16px 20px"}}>Előtte-pillanatkép, feszültségindex 1–10 · minden alkalom</td>
<td style={{"padding": "16px 20px"}}>5 alatt</td>
<td style={{"padding": "16px 20px"}}>5–6,9</td>
<td style={{"padding": "16px 20px"}}>7 vagy felette</td>
</tr>
<tr style={{"borderBottom": "1px solid #EADFD2"}}>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>2. Hatás</th>
<td style={{"padding": "16px 20px"}}>Mennyit változtatott az érintés</td>
<td style={{"padding": "16px 20px"}}>Utána − előtte · minden alkalom</td>
<td style={{"padding": "16px 20px"}}>legalább 2 pont javulás</td>
<td style={{"padding": "16px 20px"}}>1–1,9 pont</td>
<td style={{"padding": "16px 20px"}}>1 pont alatt</td>
</tr>
<tr>
<th scope="row" style={{"padding": "16px 20px", "textAlign": "left"}}>3. Havi trend</th>
<td style={{"padding": "16px 20px"}}>Tartós-e a javulás, fenntartható-e a terhelés</td>
<td style={{"padding": "16px 20px"}}>11 állításos kérdőív, terhelési állítások átlaga 1–10 · havonta, résztvevőnként egyszer</td>
<td style={{"padding": "16px 20px"}}>4,5 alatt</td>
<td style={{"padding": "16px 20px"}}>4,5–6,4</td>
<td style={{"padding": "16px 20px"}}>6,5 vagy felette</td>
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
<b style={{"fontSize": "19px"}}>Kiegészítés műszeres méréssel</b>
<span style={{"color": "#F2F6F9"}}>A kérdőív mellé szívritmus-variabilitás (HRV) és EEG mérés az alkalom előtt és után, így az élmény mellett a test válasza is látható. Ára egyedi ajánlat alapján: [PULSE+ ÁR].</span>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Valós idejű terhelésjelzés</b><span style={{"color": "#EEF0EA"}}>Látja, melyik csapatnál és mikor nő a feszültség – zárási időszakban, projektcsúcsban.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Bizonyított hatás</b><span style={{"color": "#EEF0EA"}}>A wellbeing-költség mellé mért eredmény kerül, nem csak elégedettségi visszajelzés.</span></div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}><b>Megelőzés</b><span style={{"color": "#EEF0EA"}}>A tartósan piros jelzés korai figyelmeztetés: workshop, kockázatfelmérés vagy munkaszervezési lépés indítható, mielőtt kiégés lenne belőle.</span></div>
</div>
<span style={{"fontSize": "14px", "color": "#E6EAE4"}}>A küszöbértékek kiinduló javaslatok; az első három hónap adatai alapján finomítjuk őket. A riport kimondja korlátait is: az önkéntes résztvevők állapotát mutatja, nem az egész szervezetét.</span>
</div>
</section>
<section style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", "gap": "40px"}}>
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
<img src="/calm-touch/images/09-calm-touch-sarok.webp" alt="Csendes irodai pihenősarok kárpitozott székkel, bordó párnával, kis asztallal, QR-táblával és növényekkel." style={{"display": "block", "width": "100%", "aspectRatio": "3 / 2", "objectFit": "cover", "borderRadius": "14px"}} />
<span style={{"fontSize": "13px", "color": "#5E6A62"}}>Így néz ki egy előkészített Calm-Touch sarok.</span>
</div>
</div>
</section>
<section id="csomagok" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#FFFFFF"}}>
<div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "32px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<span style={{"fontSize": "13px", "letterSpacing": "0.18em", "color": "#7E3A4A", "fontWeight": "500"}}>CSOMAGOK</span>
<h2 style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "600", "fontSize": "clamp(32px, 3.7vw, 48px)", "lineHeight": "1.08"}}>A pilottól a rendszeres jelenlétig.</h2>
</div>
<p style={{"margin": "0", "color": "#3B443E", "maxWidth": "46rem"}}>Egy alkalom legalább 3 óra (9–12 fő); nagyobb csapatnak 2 × 3 óra (18–24 fő). A rendszeres jelenlét hetente, 2 vagy 3 hetente, illetve havonta kérhető – minél sűrűbb, annál kedvezőbb az alkalom ára.</p>
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
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>3 óra · 9–12 fő</span>
<span style={{"color": "#3B443E"}}>Egy csapat kipróbálja; összesített pillanatkép-riport a végén.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>50 000 Ft</span>
</div>
<div style={{"border": "1px solid #EADFD2", "borderRadius": "18px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "20px"}}>Wellbeing Day</b>
<span style={{"color": "#5E6A62", "fontSize": "15px"}}>2 × 3 óra · 18–24 fő</span>
<span style={{"color": "#3B443E"}}>Egészségnap, rendezvény, vezetői nap.</span>
<span style={{"marginTop": "auto", "fontWeight": "600"}}>75 000 Ft</span>
</div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Bevezető nettó árak. Résztvevőszám 15–20 perces alkalmakkal, egy szakemberrel. Számlázás cégre, alkalmanként.</span>
</div>
</section>
<section id="gyik" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px"}}>
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
</div>
</div>
</section>
<section id="ajanlat" style={{"padding": "clamp(53px, 6.1vw, 88px) 20px", "background": "#F4E3E4"}}>
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
<span>Calm Touch · Üzemeltető: Alternatíva Tanácsadó Csoport Kft. · [NÉV] · [E-MAIL] · [TELEFONSZÁM]</span>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "20px"}}>
<a href="#ajanlat">Adatkezelési tájékoztató</a>
<a href="#ajanlat">Impresszum</a>
</div>
</div>
</footer>
</div>
  );
}
