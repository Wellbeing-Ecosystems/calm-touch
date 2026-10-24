import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { buildPractitionerStats, fmt1, MIN_GROUP, type Monthly, type Snapshot } from "@/lib/pulse-metrics";
import { H1, H2, Notice, SetupNotice, StatusPill, button, card, input, label } from "../ui";
import { PrintButton } from "../riport/PrintButton";
import { adminLang } from "../lang";
import { ADMIN, LOCALE, REPORT, num } from "../strings";
import type { Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

const monthOf = (iso: string) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit" }).format(new Date(iso)).slice(0, 7);
const shiftMonth = (m: string, d: number) => {
  const [y, mo] = m.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1 + d, 1)).toISOString().slice(0, 7);
};
const monthLabel = (m: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(`${m}-01T00:00:00Z`));

export default async function SzakemberekPage({ searchParams }: { searchParams: Promise<{ m?: string; h?: string }> }) {
  const lang = await adminLang();
  const t = ADMIN[lang].prac;
  const f = (v: number | null, signed = false) => num(lang, fmt1(v, signed));
  if (!adminDbConfigured) {
    return (<><H1>{t.title}</H1><SetupNotice /></>);
  }
  const sp = await searchParams;
  const month = /^\d{4}-\d{2}$/.test(sp.m ?? "") ? sp.m! : monthOf(new Date().toISOString());
  const span = sp.h === "3" ? 3 : sp.h === "12" ? 12 : 1; // hány hónapot fog át (a kiválasztottal bezárólag)
  const months = Array.from({ length: span }, (_, i) => shiftMonth(month, -i));
  const fromMonth = months[months.length - 1];

  const from = new Date(`${fromMonth}-01T00:00:00Z`);
  from.setUTCDate(from.getUTCDate() - 1);
  const to = new Date(`${shiftMonth(month, 1)}-01T00:00:00Z`);
  to.setUTCDate(to.getUTCDate() + 1);

  const db = adminDb();
  const [pracRes, snapRes, monRes] = await Promise.all([
    db.from("ct_practitioners").select("id, name"),
    db.from("ct_snapshots")
      .select("occasion_id, practitioner_id, team_id, participant_code, phase, answers, comfort, recommend, created_at")
      .gte("created_at", from.toISOString()).lt("created_at", to.toISOString()).limit(50000),
    db.from("ct_monthly").select("practitioner_id, team_id, participant_code, answers")
      .gte("month", `${fromMonth}-01`).lte("month", `${month}-01`).limit(20000),
  ]);
  for (const r of [pracRes, snapRes, monRes]) if (r.error) throw r.error;

  const names = new Map((pracRes.data ?? []).map((p) => [p.id as string, p.name as string]));
  const snaps = ((snapRes.data ?? []) as (Snapshot & { created_at: string })[]).filter((s) => months.includes(monthOf(s.created_at)));
  const stats = buildPractitionerStats(snaps, (monRes.data ?? []) as Monthly[], names);
  const unassigned = snaps.filter((s) => !s.practitioner_id).length;
  const period = span === 1 ? monthLabel(month, lang) : `${monthLabel(fromMonth, lang)} – ${monthLabel(month, lang)}`;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#2C5069", fontWeight: 700 }}>{t.chip}</span>
          <H1>{t.title} · {period}</H1>
        </div>
        <PrintButton label={REPORT[lang].print} />
      </div>

      <form className="ct-noprint" style={{ ...card, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end" }}>
        <label style={{ ...label, flex: "0 1 200px" }}>{t.month}<input type="month" name="m" defaultValue={month} style={input} /></label>
        <label style={{ ...label, flex: "0 1 220px" }}>
          {t.period}
          <select name="h" defaultValue={String(span)} style={input}>
            <option value="1">{t.p1}</option>
            <option value="3">{t.p3}</option>
            <option value="12">{t.p12}</option>
          </select>
        </label>
        <button type="submit" style={button}>{t.show}</button>
      </form>

      <Notice>
        {t.notice(MIN_GROUP)}
      </Notice>
      {unassigned > 0 && (
        <Notice tone="warn">{t.unassigned(unassigned)}</Notice>
      )}

      {stats.length === 0 ? (
        <p style={{ color: "#5E6A62" }}>{t.empty}</p>
      ) : (
        <div style={card}>
          <H2>{t.byPrac}</H2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "820px", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                  {t.cols.map((h) => (
                    <th key={h} scope="col" style={{ padding: "10px 8px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.map((p) => (
                  <tr key={p.id} style={{ borderBottom: "1px solid #EEF3F6" }}>
                    <th scope="row" style={{ padding: "10px 8px", textAlign: "left" }}>{p.name}</th>
                    <td style={{ padding: "10px 8px" }}>{p.occasions}</td>
                    <td style={{ padding: "10px 8px" }}>
                      {p.responses}
                      {p.responses < MIN_GROUP && <span style={{ color: "#B07D18", fontSize: "13px" }}> · {t.few}</span>}
                    </td>
                    <td style={{ padding: "10px 8px" }}>{f(p.effect, true)} <StatusPill status={p.effectStatus} lang={lang} /></td>
                    <td style={{ padding: "10px 8px" }}>{p.improvedPct == null ? "–" : `${p.improvedPct}%`}</td>
                    <td style={{ padding: "10px 8px" }}>{f(p.comfort)} / 10</td>
                    <td style={{ padding: "10px 8px" }}>{p.nps == null ? "–" : `${p.nps > 0 ? "+" : ""}${p.nps}`}</td>
                    <td style={{ padding: "10px 8px" }}>{f(p.value)} / 10 <span style={{ color: "#5E6A62", fontSize: "13px" }}>({p.monthlyCount})</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span style={{ fontSize: "14px", color: "#5E6A62" }}>
            {t.foot}
          </span>
        </div>
      )}
    </>
  );
}
