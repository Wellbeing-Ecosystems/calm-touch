import { headers } from "next/headers";
import QRCode from "qrcode";
import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { addTeams, createCompany, createOccasion, setOccasionActive } from "./actions";
import { H1, H2, SetupNotice, button, card, ghost, input, label } from "./ui";

export const dynamic = "force-dynamic";

type Company = {
  id: string;
  name: string;
  ct_teams: { id: string; name: string }[];
  ct_occasions: { id: string; slug: string; label: string | null; occasion_date: string; active: boolean }[];
};

/** A QR-linkek alapcíme: PULSE_LINK_BASE, különben az aktuális kérés domainje. */
async function linkBase() {
  if (process.env.PULSE_LINK_BASE) return process.env.PULSE_LINK_BASE.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export default async function AdminPage() {
  if (!adminDbConfigured) {
    return (
      <>
        <H1>Cégek és alkalmak</H1>
        <SetupNotice />
      </>
    );
  }

  const { data, error } = await adminDb()
    .from("ct_companies")
    .select("id, name, ct_teams(id, name), ct_occasions(id, slug, label, occasion_date, active)")
    .order("name");
  if (error) throw error;
  const companies = (data ?? []) as Company[];
  const base = await linkBase();

  const occasionsWithQr = await Promise.all(
    companies.map(async (c) => ({
      ...c,
      occasions: await Promise.all(
        [...c.ct_occasions]
          .sort((a, b) => b.occasion_date.localeCompare(a.occasion_date))
          .map(async (o) => {
            const snapUrl = `${base}/calm-touch/pillanatkep?a=${o.slug}`;
            const qr = await QRCode.toDataURL(snapUrl, { margin: 1, width: 360, color: { dark: "#2C5069", light: "#FFFFFF" } });
            return { ...o, snapUrl, monthlyUrl: `${base}/calm-touch/havi-kerdoiv?a=${o.slug}`, qr };
          }),
      ),
    })),
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <H1>Cégek és alkalmak</H1>
        <p style={{ margin: 0, color: "#5E6A62" }}>
          Minden alkalomhoz saját QR-kód tartozik. A résztvevő ezzel nyitja meg a pillanatképet; a válasz így a megfelelő céghez és alkalomhoz kerül.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "16px" }}>
        <form action={createCompany} style={card}>
          <H2>Új cég</H2>
          <label style={label}>Cégnév<input name="name" required style={input} /></label>
          <label style={label}>
            Csapatok <span style={{ fontWeight: 400, color: "#5E6A62" }}>(nem kötelező; vesszővel vagy soronként)</span>
            <textarea name="teams" rows={3} style={{ ...input, padding: "10px 12px" }} />
          </label>
          <button type="submit" style={{ ...button, alignSelf: "flex-start" }}>Cég felvétele</button>
        </form>

        <form action={createOccasion} style={card}>
          <H2>Új alkalom</H2>
          <label style={label}>
            Cég
            <select name="company_id" required style={input} defaultValue="">
              <option value="" disabled>Válassz…</option>
              {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
          <label style={label}>Dátum<input type="date" name="date" style={input} /></label>
          <label style={label}>Megnevezés <span style={{ fontWeight: 400, color: "#5E6A62" }}>(pl. „Okt. 23. délelőtt”)</span><input name="label" style={input} /></label>
          <button type="submit" style={{ ...button, alignSelf: "flex-start" }} disabled={!companies.length}>Alkalom létrehozása</button>
        </form>
      </div>

      {occasionsWithQr.length === 0 && <p style={{ color: "#5E6A62" }}>Még nincs felvett cég.</p>}

      {occasionsWithQr.map((c) => (
        <section key={c.id} style={{ ...card, gap: "18px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
            <H2>{c.name}</H2>
            <span style={{ color: "#5E6A62", fontSize: "14px" }}>
              Csapatok: {c.ct_teams.length ? c.ct_teams.map((t) => t.name).sort((a, b) => a.localeCompare(b, "hu")).join(", ") : "nincs megadva"}
            </span>
          </div>
          <form action={addTeams} style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <input type="hidden" name="company_id" value={c.id} />
            <input name="teams" placeholder="Új csapat(ok), vesszővel" aria-label={`Új csapat: ${c.name}`} style={{ ...input, flex: "1 1 220px" }} />
            <button type="submit" style={ghost}>Csapat hozzáadása</button>
          </form>
          {c.occasions.length === 0 && <p style={{ margin: 0, color: "#5E6A62" }}>Ehhez a céghez még nincs alkalom.</p>}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))", gap: "14px" }}>
            {c.occasions.map((o) => (
              <article key={o.id} style={{ border: "1px solid #DDE8EF", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", opacity: o.active ? 1 : 0.6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "baseline" }}>
                  <b>{o.occasion_date}{o.label ? ` · ${o.label}` : ""}</b>
                  <span style={{ fontSize: "13px", color: o.active ? "#2F6B4A" : "#A63D32", fontWeight: 600 }}>{o.active ? "aktív" : "lezárva"}</span>
                </div>
                <img src={o.qr} alt={`QR-kód: ${c.name}, ${o.occasion_date}`} style={{ width: "180px", height: "180px", alignSelf: "center" }} />
                <a href={o.qr} download={`calm-touch-qr-${o.occasion_date}-${o.slug}.png`} style={{ alignSelf: "center", fontSize: "14px", color: "#2C5069" }}>QR-kód letöltése</a>
                <div style={{ fontSize: "13px", wordBreak: "break-all", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span>Pillanatkép: <a href={o.snapUrl} target="_blank" rel="noopener noreferrer">{o.snapUrl}</a></span>
                  <span>Havi kérdőív: <a href={o.monthlyUrl} target="_blank" rel="noopener noreferrer">{o.monthlyUrl}</a></span>
                </div>
                <form action={setOccasionActive}>
                  <input type="hidden" name="id" value={o.id} />
                  <input type="hidden" name="active" value={o.active ? "false" : "true"} />
                  <button type="submit" style={ghost}>{o.active ? "Alkalom lezárása" : "Újranyitás"}</button>
                </form>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
