/** care4you pszichoszociális kockázatfelmérés – kedvezményes ajánlati doboz (főoldal és cégeknek oldal). */
export function RiskOfferBox() {
  return (
<aside aria-labelledby="kockazatfelmeres-cim" style={{ background: "#FAF6F1", color: "#2E3631", borderRadius: "28px", borderTop: "8px solid #F5B942", padding: "clamp(22px, 4vw, 40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "clamp(20px, 3vw, 32px)", alignItems: "start", boxShadow: "0 24px 60px rgba(0,0,0,.25)" }}>
<div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
<img src="/calm-touch/partners/care4you-logo.png" alt="care4you" width={204} height={107} loading="lazy" decoding="async" style={{ display: "block", height: "48px", width: "auto" }} />
<span style={{ fontSize: "13px", letterSpacing: "0.16em", fontWeight: 700, color: "#7E3A4A", background: "#F4E3E4", borderRadius: "999px", padding: "6px 14px" }}>PSZICHOSZOCIÁLIS KOCKÁZATFELMÉRÉS</span>
</div>
<h3 id="kockazatfelmeres-cim" style={{ margin: 0, fontFamily: "var(--ct-display)", fontSize: "clamp(26px, 2.8vw, 36px)", lineHeight: 1.12, color: "#2C5069" }}>A pszichoszociális kockázatok felmérése munkáltatói kötelezettség.</h3>
<p style={{ margin: 0, color: "#3B443E" }}>A munkavédelmi törvény szerint minden munkáltatónak fel kell mérnie a <b>pszichoszociális kockázatokat</b> is, és a kockázatértékelést <b>legalább ötévente</b> – lényeges változáskor, például átszervezés után azonnal – felül kell vizsgálni. A Calm-Touch Pulse megmutatja, hogyan bírja a csapat; a care4you felmérés azt is, <b>miért</b>, és hol kell beavatkozni.</p>
<ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
<li style={{ background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "6px 14px", fontSize: "15px", fontWeight: 700, color: "#2C5069" }}>Egyéni riport – Stresszleltár</li>
<li style={{ background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "6px 14px", fontSize: "15px", fontWeight: 700, color: "#2C5069" }}>Csoportos riport</li>
<li style={{ background: "#FFFFFF", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "6px 14px", fontSize: "15px", fontWeight: 700, color: "#2C5069" }}>Szervezeti riport ajánlásokkal</li>
</ul>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "14px", background: "#2C5069", color: "#FFFFFF", borderRadius: "22px", padding: "clamp(20px, 3vw, 28px)" }}>
<span style={{ alignSelf: "flex-start", fontSize: "13px", letterSpacing: "0.14em", fontWeight: 800, color: "#2E2300", background: "#F5B942", borderRadius: "999px", padding: "6px 14px" }}>KEDVEZMÉNY 2026. DECEMBER 15-IG</span>
<b style={{ fontFamily: "var(--ct-display)", fontSize: "clamp(22px, 2.2vw, 28px)", lineHeight: 1.2 }}>30 és 50 fős felmérési csomagok</b>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
<div style={{ background: "rgba(255,255,255,.1)", borderRadius: "14px", padding: "12px 14px" }}><b style={{ display: "block", fontSize: "15px" }}>A csomag · max. 30 fő</b><span style={{ fontSize: "20px", fontWeight: 800 }}>175 000 Ft</span><span style={{ fontSize: "13px", color: "#DDE8EF" }}> + ÁFA</span></div>
<div style={{ background: "rgba(255,255,255,.1)", borderRadius: "14px", padding: "12px 14px" }}><b style={{ display: "block", fontSize: "15px" }}>B csomag · max. 50 fő</b><span style={{ fontSize: "20px", fontWeight: 800 }}>275 000 Ft</span><span style={{ fontSize: "13px", color: "#DDE8EF" }}> + ÁFA</span></div>
</div>
<span style={{ fontSize: "15px", color: "#E7EFF4" }}>Egyéni, csoportos és szervezeti riport ajánlásokkal, 90 perces vezetői eredménybemutatóval. A felmérést 2027. február 15-ig kell elindítani.</span>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "4px" }}>
<a href="https://bevetel.hu/intrest?id=52e8e51604b24ded&lang=hu" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", background: "#F5B942", color: "#2E2300", padding: "13px 22px", borderRadius: "999px", fontWeight: 800, minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>Kedvezményes csomagot kérek →</a>
{/* A pszichoszoc.hu kezdőlapjára mutat (basePath nélkül), ezért nem Link. */}
{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
<a href="/#csomagok" style={{ textDecoration: "none", color: "#FFFFFF", padding: "13px 18px", borderRadius: "999px", fontWeight: 700, border: "1px solid rgba(255,255,255,.5)", minHeight: "48px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>Részletek</a>
</div>
</div>
</aside>
  );
}
