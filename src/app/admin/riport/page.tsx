import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { buildReport, fmt1, MIN_GROUP, stateStatus, wellbeingIndex, type Monthly, type Snapshot } from "@/lib/pulse-metrics";
import { H1, H2, Notice, SetupNotice, StatusPill, button, card, input, label } from "../ui";
import { PrintButton } from "./PrintButton";

export const dynamic = "force-dynamic";

const monthOf = (iso: string) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit" }).format(new Date(iso)).slice(0, 7);

function shiftMonth(m: string, delta: number) {
  const [y, mo] = m.split("-").map(Number);
  const d = new Date(Date.UTC(y, mo - 1 + delta, 1));
  return d.toISOString().slice(0, 7);
}
const monthLabel = (m: string) =>
  new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(`${m}-01T00:00:00Z`));

export default async function RiportPage({ searchParams }: { searchParams: Promise<{ c?: string; m?: string }> }) {
  if (!adminDbConfigured) {
    return (<><H1>Havi riport</H1><SetupNotice /></>);
  }
  const sp = await searchParams;
  const month = /^\d{4}-\d{2}$/.test(sp.m ?? "") ? sp.m! : monthOf(new Date().toISOString());
  const db = adminDb();
  const { data: companies, error: cErr } = await db.from("ct_companies").select("id, name").order("name");
  if (cErr) throw cErr;
  const companyId = sp.c && companies?.some((c) => c.id === sp.c) ? sp.c : companies?.[0]?.id;
  const company = companies?.find((c) => c.id === companyId);

  let content = <p style={{ color: "#5E6A62" }}>Még nincs felvett cég.</p>;

  if (company) {
    // 4 hónapnyi adat (trendhez), egy nap ráhagyással az időzóna miatt
    const from = new Date(`${shiftMonth(month, -3)}-01T00:00:00Z`);
    from.setUTCDate(from.getUTCDate() - 1);
    const to = new Date(`${shiftMonth(month, 1)}-01T00:00:00Z`);
    to.setUTCDate(to.getUTCDate() + 1);

    const [snapRes, monRes, teamRes] = await Promise.all([
      db.from("ct_snapshots")
        .select("occasion_id, team_id, participant_code, phase, answers, comfort, recommend, created_at")
        .eq("company_id", company.id).gte("created_at", from.toISOString()).lt("created_at", to.toISOString())
        .limit(20000),
      db.from("ct_monthly").select("team_id, participant_code, answers")
        .eq("company_id", company.id).eq("month", `${month}-01`).limit(5000),
      db.from("ct_teams").select("id, name").eq("company_id", company.id),
    ]);
    for (const r of [snapRes, monRes, teamRes]) if (r.error) throw r.error;

    const all = (snapRes.data ?? []) as (Snapshot & { created_at: string })[];
    const snaps = all.filter((s) => monthOf(s.created_at) === month);
    const report = buildReport(snaps, (monRes.data ?? []) as Monthly[], new Map((teamRes.data ?? []).map((t) => [t.id, t.name])));
    const history = [-3, -2, -1, 0].map((d) => {
      const m = shiftMonth(month, d);
      const pres = all.filter((s) => s.phase === "pre" && monthOf(s.created_at) === m);
      const v = pres.length ? pres.reduce((a, s) => a + wellbeingIndex(s.answers), 0) / pres.length : null;
      return { m, v, n: pres.length };
    });

    const kpi = (title: string, value: string, sub: string, status?: Parameters<typeof StatusPill>[0]["status"]) => (
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "14px", color: "#5E6A62" }}>{title}</span>
          {status && <StatusPill status={status} />}
        </div>
        <span style={{ fontFamily: "var(--ct-display)", fontSize: "40px", fontWeight: 700, lineHeight: 1, color: "#2C5069" }}>{value}</span>
        <span style={{ fontSize: "14px", color: "#3B443E" }}>{sub}</span>
      </div>
    );

    content = (
      <>
        {report.belowThreshold && (
          <Notice tone="warn">
            Ebben a hónapban {report.participants} résztvevő adata van. {MIN_GROUP} fő alatt a riport a cég felé nem adható ki – csak belső tájékozódásra.
          </Notice>
        )}
        {report.pairCount === 0 && report.monthlyCount === 0 && <Notice>Erre a hónapra még nincs beküldött adat.</Notice>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "14px" }}>
          {kpi("Részvétel", `${report.participants} fő`, `${report.occasions} alkalom · ${report.completionPct ?? "–"}% kitöltötte az utána-kérdéseket is`)}
          {kpi("1. Állapot-pulzus", fmt1(report.state), "jóllét-index érkezéskor, 1–10 (10 = legjobb)", report.stateStatus)}
          {kpi("2. Hatás", fmt1(report.effect, true), `jóllét-index változása, pont · ${report.improvedPct ?? "–"}% javult`, report.effectStatus)}
          {kpi("3. Havi trend", fmt1(report.trend), `havi jóllét-index, 1–10 · ${report.monthlyCount} kitöltés`, report.trendStatus)}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "14px" }}>
          <div style={card}>
            <H2>Előtte → utána, csoportátlag (10 = legjobb)</H2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                  <th scope="col" style={{ padding: "8px 6px" }}>Kérdés</th>
                  <th scope="col" style={{ padding: "8px 6px" }}>Előtte</th>
                  <th scope="col" style={{ padding: "8px 6px" }}>Utána</th>
                </tr>
              </thead>
              <tbody>
                {report.items.map((it) => (
                  <tr key={it.label} style={{ borderBottom: "1px solid #EEF3F6" }}>
                    <th scope="row" style={{ padding: "8px 6px", textAlign: "left", fontWeight: 500 }}>{it.label}</th>
                    <td style={{ padding: "8px 6px" }}>{fmt1(it.pre)}</td>
                    <td style={{ padding: "8px 6px", fontWeight: 700, color: "#2C5069" }}>{fmt1(it.post)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span style={{ fontSize: "14px", color: "#5E6A62" }}>
              Biztonság / komfort: {fmt1(report.comfort)} / 10 · ajánlási mutató: {report.nps == null ? "–" : `${report.nps > 0 ? "+" : ""}${report.nps}`} ·
              fenntarthatóság: {fmt1(report.sustainability)} / 10 · alkalmak értékelése: {fmt1(report.value)} / 10
            </span>
          </div>
          <div style={card}>
            <H2>Állapot-pulzus, 4 hónap</H2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px", alignItems: "end", height: "200px", borderBottom: "1px solid #A9C1D1", padding: "0 6px" }}>
              {history.map((h, i) => (
                <div key={h.m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: i === 3 ? 700 : 500 }}>{fmt1(h.v)}</span>
                  <div style={{ width: "100%", maxWidth: "56px", height: `${h.v ? h.v * 16 : 2}px`, background: i === 3 ? "#3F6E8C" : "#A9C1D1", borderRadius: "6px 6px 0 0" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px", fontSize: "13px", color: "#5E6A62", textAlign: "center" }}>
              {history.map((h) => <span key={h.m}>{monthLabel(h.m)}<br />{h.n} kitöltés · {stateStatus(h.v)}</span>)}
            </div>
          </div>
        </div>

        <div style={card}>
          <H2>Csapatonként (legalább {MIN_GROUP} fő)</H2>
          {report.teams.length === 0 ? (
            <p style={{ margin: 0, color: "#5E6A62" }}>Nincs olyan csapat, amelyből legalább {MIN_GROUP} fő töltött ki.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "680px", borderCollapse: "collapse", fontSize: "15px" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                    {["Csapat", "Fő", "Állapot-pulzus", "Hatás", "Havi trend", "Fenntarthatóság"].map((h) => <th key={h} scope="col" style={{ padding: "10px 8px" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {report.teams.map((t) => (
                    <tr key={t.id} style={{ borderBottom: "1px solid #EEF3F6" }}>
                      <th scope="row" style={{ padding: "10px 8px", textAlign: "left" }}>{t.name}</th>
                      <td style={{ padding: "10px 8px" }}>{t.participants}</td>
                      <td style={{ padding: "10px 8px" }}>{fmt1(t.state)} <StatusPill status={t.stateStatus} /></td>
                      <td style={{ padding: "10px 8px" }}>{fmt1(t.effect, true)} <StatusPill status={t.effectStatus} /></td>
                      <td style={{ padding: "10px 8px" }}>{fmt1(t.trend)} <StatusPill status={t.trendStatus} /></td>
                      <td style={{ padding: "10px 8px" }}>{fmt1(t.sustainability)} / 10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {report.hiddenTeams > 0 && (
            <span style={{ fontSize: "14px", color: "#5E6A62" }}>{report.hiddenTeams} csapat {MIN_GROUP} főnél kisebb, ezért külön nem jelenik meg.</span>
          )}
        </div>

        <Notice>
          A riport az önkéntes résztvevők állapotát mutatja, nem az egész szervezetét. A pillanatkép önbevallás, nem egészségügyi mérés.
          Minden érték 1–10 skálán, 10 = a legjobb állapot; a negatív tartalmú kérdéseknél (pl. feszültség, kimerülés) a pontozás fordított: 11 − válasz.
          Küszöbök – állapot-pulzus: 6 felett zöld, 4 vagy alatta piros; hatás: legalább +2 pont zöld, +1 sárga; havi trend: 6,5 felett zöld, 4,5 vagy alatta piros.
        </Notice>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#2C5069", fontWeight: 700 }}>CALM-TOUCH PULSE · HAVI RIPORT</span>
          <H1>{company ? `${company.name} · ${monthLabel(month)}` : "Havi riport"}</H1>
        </div>
        <PrintButton />
      </div>
      <form className="ct-noprint" style={{ ...card, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end" }}>
        <label style={{ ...label, flex: "1 1 220px" }}>
          Cég
          <select name="c" defaultValue={companyId} style={input}>
            {companies?.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <label style={{ ...label, flex: "0 1 200px" }}>Hónap<input type="month" name="m" defaultValue={month} style={input} /></label>
        <button type="submit" style={button}>Megjelenítés</button>
      </form>
      {content}
    </>
  );
}
