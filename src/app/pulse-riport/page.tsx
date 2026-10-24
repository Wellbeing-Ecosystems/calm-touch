import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("hu", "/pulse-riport", "Calm-Touch Pulse – havi HR riport (példa)", "Példa a havi Calm-Touch Pulse riportra: állapot-pulzus, hatás és havi trend 1–10 skálán (10 = legjobb), csapatonként, legalább 5 fős csoportokban.");

export default function PulseRiportPage() {
  return (
<div style={{"fontFamily": "var(--ct-text)", "color": "#2E3631", "background": "#FAF6F1", "lineHeight": "1.5", "fontSize": "16px"}}>
<div style={{"maxWidth": "1180px", "margin": "0 auto", "padding": "clamp(28px, 4vw, 40px) 20px clamp(48px, 6vw, 64px)", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<h1 style={{"margin": "0", "alignSelf": "flex-start", "fontSize": "12px", "letterSpacing": "0.2em", "color": "#2C5069", "background": "#DDE8EF", "borderRadius": "999px", "padding": "6px 14px", "fontWeight": "700"}}>CALM-TOUCH PULSE · HAVI RIPORT (PÉLDA)</h1>
<p style={{"overflowWrap": "break-word", "margin": "0", "fontFamily": "var(--ct-display)", "fontWeight": "700", "fontSize": "clamp(32px, 3.4vw, 44px)", "lineHeight": "1.05", "color": "#2C5069"}}>[CÉGNÉV] · [HÓNAP]</p>
</div>
<span style={{"background": "#F4E3E4", "color": "#5A4248", "borderRadius": "999px", "padding": "8px 16px", "fontSize": "14px", "fontWeight": "500"}}>Példa – illusztráció, nem mért adatok</span>
</div>
<div style={{"background": "#DDE8EF", "borderRadius": "16px", "padding": "14px 20px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "8px 20px", "color": "#2C5069", "fontSize": "15px"}}>
<b>Minden mutató 1–10 skálán</b>
<span>1 = nem jellemző</span>
<span>10 = teljes mértékben</span>
<span style={{"color": "#3F6E8C"}}>Minden mutatónál a magasabb érték a jobb; a negatív tartalmú kérdéseknél (pl. feszültség, kimerülés) a pontozás fordított: 11 − válasz.</span>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Részvétel</span>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>18 fő</span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>22 alkalom · 92% kitöltési arány</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>1. Állapot-pulzus</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#F6EBD3", "color": "#5E4310", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>sárga</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>4,6 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>/ 10</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>jóllét-index érkezéskor</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>2. Hatás</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#DDEBE1", "color": "#1F4A33", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#2F6B4A"}}></span>zöld</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>+3,3 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>pont</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>jóllét-index 4,6 <span className="ct-arrow">→</span> 7,9 · 86% javult</span>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "8px", "alignItems": "center"}}><span style={{"fontSize": "14px", "color": "#5E6A62"}}>3. Havi trend</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "13px", "fontWeight": "500", "background": "#F6EBD3", "color": "#5E4310", "borderRadius": "999px", "padding": "3px 10px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>sárga</span></div>
<span style={{"fontFamily": "var(--ct-display)", "fontSize": "44px", "fontWeight": "700", "lineHeight": "1", "color": "#2C5069"}}>5,3 <span style={{"fontSize": "18px", "color": "#5E6A62", "fontWeight": "600"}}>/ 10</span></span>
<span style={{"fontSize": "14px", "color": "#3B443E"}}>havi jóllét-index · 17 kitöltés</span>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><b style={{"fontSize": "18px"}}>Az állapot-pulzus negyedik hónapja romlik</b><span style={{"fontSize": "14px", "color": "#5E6A62"}}>Jóllét-index érkezéskor, havi átlag (1–10, 10 = legjobb) · 6 alatt sárga, 4 vagy alatta piros</span></div>
<div style={{"position": "relative", "height": "220px", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "24px", "alignItems": "end", "borderBottom": "1px solid #A9C1D1", "padding": "0 8px"}}>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>5,2</span><div style={{"width": "100%", "maxWidth": "64px", "height": "104px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>5,0</span><div style={{"width": "100%", "maxWidth": "64px", "height": "100px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "500"}}>4,9</span><div style={{"width": "100%", "maxWidth": "64px", "height": "98px", "background": "#A9C1D1", "borderRadius": "6px 6px 0 0"}}></div></div>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "6px"}}><span style={{"fontSize": "14px", "fontWeight": "700", "color": "#2C5069"}}>4,6</span><div style={{"width": "100%", "maxWidth": "64px", "height": "92px", "background": "#3F6E8C", "borderRadius": "6px 6px 0 0"}}></div></div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gap": "24px", "padding": "0 8px", "fontSize": "14px", "color": "#5E6A62", "textAlign": "center"}}><span>[1. hónap]</span><span>[2. hónap]</span><span>[3. hónap]</span><span style={{"color": "#2C5069", "fontWeight": "600"}}>[e hónap]</span></div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "10px"}}>
<b style={{"fontSize": "18px"}}>Előtte <span className="ct-arrow">→</span> utána, csoportátlag (10 = legjobb)</b>
<div style={{"display": "flex", "gap": "14px", "fontSize": "13px", "color": "#5E6A62"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "16px", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></span>előtte</span><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "16px", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></span>utána</span></div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px", "fontSize": "15px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Feszültségmentesség</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "44%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "79%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,4 <span className="ct-arrow">→</span> 7,9</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Nyugalom</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "39%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "70%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>3,9 <span className="ct-arrow">→</span> 7,0</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Gondolati nyugalom</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "42%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "77%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,2 <span className="ct-arrow">→</span> 7,7</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Mentális frissesség</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "48%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "72%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,8 <span className="ct-arrow">→</span> 7,2</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Energia</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "44%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "66%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>4,4 <span className="ct-arrow">→</span> 6,6</b></div>
<div style={{"display": "grid", "gridTemplateColumns": "150px 1fr 92px", "gap": "12px", "alignItems": "center"}}><span>Testi ellazultság</span><div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "50%", "height": "6px", "background": "#A9C1D1", "borderRadius": "3px"}}></div></div><div style={{"height": "6px", "background": "#EEF3F6", "borderRadius": "3px"}}><div style={{"width": "81%", "height": "6px", "background": "#3F6E8C", "borderRadius": "3px"}}></div></div></div><b style={{"textAlign": "right", "color": "#2C5069"}}>5,0 <span className="ct-arrow">→</span> 8,1</b></div>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>Biztonság / komfort: 9,6 / 10 · ajánlási mutató: +62</span>
</div>
</div>
<div style={{"background": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<b style={{"fontSize": "18px"}}>Csapatonként (legalább 5 fő)</b>
<div style={{"overflowX": "auto"}}>
<table style={{"width": "100%", "minWidth": "720px", "borderCollapse": "collapse", "fontSize": "15px"}}>
<thead>
<tr style={{"textAlign": "left", "borderBottom": "2px solid #DDE8EF", "color": "#2C5069"}}>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Csapat</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Fő</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Állapot-pulzus (1–10)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Hatás (pont)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Havi trend (1–10)</th>
<th scope="col" style={{"padding": "10px 12px", "fontWeight": "700"}}>Fenntarthatóság (11. állítás)</th>
</tr>
</thead>
<tbody>
<tr style={{"borderBottom": "1px solid #EEF3F6"}}>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[Pénzügy]</th>
<td style={{"padding": "12px"}}>6</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#A63D32"}}></span>3,6 · piros</span></td>
<td style={{"padding": "12px"}}>+3,0</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#A63D32"}}></span>4,1 · piros</span></td>
<td style={{"padding": "12px"}}>3,9 / 10</td>
</tr>
<tr style={{"borderBottom": "1px solid #EEF3F6"}}>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[Ügyfélszolgálat]</th>
<td style={{"padding": "12px"}}>5</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>4,4 · sárga</span></td>
<td style={{"padding": "12px"}}>+3,6</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>5,3 · sárga</span></td>
<td style={{"padding": "12px"}}>5,1 / 10</td>
</tr>
<tr>
<th scope="row" style={{"padding": "12px", "textAlign": "left"}}>[IT]</th>
<td style={{"padding": "12px"}}>7</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#2F6B4A"}}></span>6,2 · zöld</span></td>
<td style={{"padding": "12px"}}>+3,2</td>
<td style={{"padding": "12px"}}><span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "4px", "background": "#B07D18"}}></span>6,4 · sárga</span></td>
<td style={{"padding": "12px"}}>6,2 / 10</td>
</tr>
</tbody>
</table>
</div>
<span style={{"fontSize": "14px", "color": "#5E6A62"}}>5 főnél kisebb csoport nem jelenik meg külön. Havi trend: zöld 6,5 felett, sárga 4,6–6,5, piros 4,5 vagy alatta. A 11. állításnál (fenntarthatóság) a magasabb érték a jobb.</span>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", "gap": "16px"}}>
<div style={{"background": "#2C5069", "color": "#FFFFFF", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "18px"}}>Javasolt intézkedés</b>
<span style={{"color": "#E6EEF3"}}>[Pénzügy]: az állapot-pulzus három egymást követő alkalmon 4 alatt, a havi trend piros. Javaslat: célzott pszichoszociális kockázatfelmérés, stresszkezelési workshop, és sűrűbb Calm-Touch alkalom a zárási időszakban.</span>
</div>
<div style={{"border": "1px solid #A9C1D1", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
<b style={{"fontSize": "18px", "color": "#2C5069"}}>Hogyan olvassa?</b>
<span style={{"color": "#3B443E"}}>A riport az önkéntes résztvevők állapotát mutatja, nem az egész szervezetét. A Pulse pillanatkép önbevallás, nem egészségügyi mérés. A hatás rövid távú élményt mér, a tartós változásról a havi trend ad képet. Pulse+ csomagnál a riport egy egyszeri műszeres állapotfelmérés (qEEG, HRV, kognitív teszt) csoportszintű eredményeivel egészül ki.</span>
</div>
</div>
<a href="/calm-touch" style={{"alignSelf": "flex-start", "fontWeight": "600"}}><span className="ct-arrow">←</span> Vissza a főoldalra</a>
</div>
</div>
  );
}
