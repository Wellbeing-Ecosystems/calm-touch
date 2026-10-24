import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { fmt1, groupMetrics, MIN_GROUP, type GroupMetrics, type Monthly, type Snapshot } from "@/lib/pulse-metrics";
import { INDUSTRIES, REGIONS, SIZE_BANDS, missingColumn, sizeBand } from "@/lib/company";
import { H1, Notice, SetupNotice, StatusPill, button, card, input, label } from "../ui";
import { PrintButton } from "../riport/PrintButton";
import { adminLang } from "../lang";
import { ADMIN, LOCALE, REPORT, num } from "../strings";
import type { Lang } from "@/lib/i18n";

export const dynamic = "force-dynamic";

/** Egy csoport csak ennyi cég adatából jelenik meg – így egyetlen cég eredménye sem azonosítható. */
const MIN_COMPANIES = 3;

type Dim = "industry" | "size" | "region";
type Co = { id: string; industry: string | null; headcount: number | null; region: string | null };

const monthOf = (iso: string) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit" }).format(new Date(iso)).slice(0, 7);
const shiftMonth = (m: string, d: number) => {
  const [y, mo] = m.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1 + d, 1)).toISOString().slice(0, 7);
};
const monthLabel = (m: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(`${m}-01T00:00:00Z`));

function groupKey(c: Co, dim: Dim): string | null {
  if (dim === "industry") return c.industry;
  if (dim === "region") return c.region;
  return sizeBand(c.headcount);
}
function groupLabel(key: string, dim: Dim, lang: Lang): string {
  if (dim === "industry") return INDUSTRIES[key]?.[lang] ?? key;
  if (dim === "region") return REGIONS[key]?.[lang] ?? key;
  return SIZE_BANDS.find((b) => b.key === key)?.label[lang] ?? key;
}

export default async function OsszesitoPage({ searchParams }: { searchParams: Promise<{ m?: string; h?: string; g?: string }> }) {
  const lang = await adminLang();
  const A = ADMIN[lang];
  const t = A.agg;
  const f = (v: number | null, signed = false) => num(lang, fmt1(v, signed));
  if (!adminDbConfigured) {
    return (<><H1>{t.title}</H1><SetupNotice /></>);
  }
  const sp = await searchParams;
  const dim: Dim = sp.g === "size" || sp.g === "region" ? sp.g : "industry";
  const month = /^\d{4}-\d{2}$/.test(sp.m ?? "") ? sp.m! : monthOf(new Date().toISOString());
  const span = sp.h === "1" ? 1 : sp.h === "12" ? 12 : 3;
  const months = Array.from({ length: span }, (_, i) => shiftMonth(month, -i));
  const fromMonth = months[months.length - 1];
  const from = new Date(`${fromMonth}-01T00:00:00Z`);
  from.setUTCDate(from.getUTCDate() - 1);
  const to = new Date(`${shiftMonth(month, 1)}-01T00:00:00Z`);
  to.setUTCDate(to.getUTCDate() + 1);

  const db = adminDb();
  const coRes = await db.from("ct_companies").select("id, industry, headcount, region");
  if (missingColumn(coRes.error)) {
    return (<><H1>{t.title}</H1><Notice tone="warn">{A.co.migrate}</Notice></>);
  }
  if (coRes.error) throw coRes.error;
  const [snapRes, monRes] = await Promise.all([
    db.from("ct_snapshots")
      .select("company_id, occasion_id, team_id, participant_code, phase, answers, comfort, recommend, created_at")
      .gte("created_at", from.toISOString()).lt("created_at", to.toISOString()).limit(100000),
    db.from("ct_monthly").select("company_id, team_id, participant_code, answers")
      .gte("month", `${fromMonth}-01`).lte("month", `${month}-01`).limit(50000),
  ]);
  for (const r of [snapRes, monRes]) if (r.error) throw r.error;

  // A saját kód csak cégen belül egyedi, ezért a céggel együtt azonosítjuk a résztvevőt.
  type S = Snapshot & { company_id: string; created_at: string };
  type M = Monthly & { company_id: string };
  const snaps = ((snapRes.data ?? []) as S[])
    .filter((s) => months.includes(monthOf(s.created_at)))
    .map((s) => ({ ...s, participant_code: `${s.company_id}:${s.participant_code}` }));
  const monthly = ((monRes.data ?? []) as M[]).map((m) => ({ ...m, participant_code: `${m.company_id}:${m.participant_code}` }));

  const companies = (coRes.data ?? []) as Co[];
  const keyOf = new Map(companies.map((c) => [c.id, groupKey(c, dim)]));
  const active = new Set([...snaps, ...monthly].map((x) => x.company_id));
  const missing = [...active].filter((id) => !keyOf.get(id)).length;

  const groups = new Map<string, { snaps: S[]; monthly: M[]; companies: Set<string> }>();
  for (const id of active) {
    const k = keyOf.get(id) ?? "__none";
    if (!groups.has(k)) groups.set(k, { snaps: [], monthly: [], companies: new Set() });
    groups.get(k)!.companies.add(id);
  }
  for (const s of snaps) groups.get(keyOf.get(s.company_id) ?? "__none")?.snaps.push(s);
  for (const m of monthly) groups.get(keyOf.get(m.company_id) ?? "__none")?.monthly.push(m);

  type Row = { key: string; name: string; companies: number } & GroupMetrics;
  const rows: Row[] = [];
  let hidden = 0;
  for (const [key, g] of groups) {
    const gm = groupMetrics(g.snaps, g.monthly);
    if (g.companies.size < MIN_COMPANIES || gm.participants < MIN_GROUP) { hidden += 1; continue; }
    rows.push({ key, name: key === "__none" ? t.unknown : groupLabel(key, dim, lang), companies: g.companies.size, ...gm });
  }
  rows.sort((a, b) => (a.key === "__none" ? 1 : b.key === "__none" ? -1 : b.participants - a.participants));
  const total = { companies: active.size, ...groupMetrics(snaps, monthly) };
  const showTotal = active.size >= MIN_COMPANIES && total.participants >= MIN_GROUP;
  const period = span === 1 ? monthLabel(month, lang) : `${monthLabel(fromMonth, lang)} – ${monthLabel(month, lang)}`;
  const td = { padding: "10px 8px" } as const;

  const line = (r: { name: string; companies: number } & GroupMetrics, strong = false) => (
    <tr key={r.name} style={{ borderBottom: "1px solid #EEF3F6", ...(strong ? { background: "#F2F6F9" } : {}) }}>
      <th scope="row" style={{ ...td, textAlign: "left" }}>{r.name}</th>
      <td style={td}>{r.companies}</td>
      <td style={td}>{r.participants}</td>
      <td style={td}>{f(r.state)} <StatusPill status={r.stateStatus} lang={lang} /></td>
      <td style={td}>{f(r.effect, true)} <StatusPill status={r.effectStatus} lang={lang} /></td>
      <td style={td}>{r.improvedPct == null ? "–" : `${r.improvedPct}%`}</td>
      <td style={td}>{f(r.trend)} <StatusPill status={r.trendStatus} lang={lang} /></td>
      <td style={td}>{f(r.sustainability)} / 10</td>
    </tr>
  );

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
        <label style={{ ...label, flex: "0 1 220px" }}>
          {t.groupBy}
          <select name="g" defaultValue={dim} style={input}>
            <option value="industry">{t.byIndustry}</option>
            <option value="size">{t.bySize}</option>
            <option value="region">{t.byRegion}</option>
          </select>
        </label>
        <label style={{ ...label, flex: "0 1 200px" }}>{A.prac.month}<input type="month" name="m" defaultValue={month} style={input} /></label>
        <label style={{ ...label, flex: "0 1 220px" }}>
          {A.prac.period}
          <select name="h" defaultValue={String(span)} style={input}>
            <option value="1">{A.prac.p1}</option>
            <option value="3">{A.prac.p3}</option>
            <option value="12">{A.prac.p12}</option>
          </select>
        </label>
        <button type="submit" style={button}>{A.prac.show}</button>
      </form>

      <Notice>{t.notice(MIN_COMPANIES, MIN_GROUP)}</Notice>

      <div style={card}>
        {rows.length === 0 && !showTotal ? (
          <p style={{ margin: 0, color: "#5E6A62" }}>{active.size ? t.hidden(groups.size) : t.empty}</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "820px", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                  {t.cols.map((h) => <th key={h} scope="col" style={td}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => line(r))}
                {showTotal && line({ name: t.all, ...total }, true)}
              </tbody>
            </table>
          </div>
        )}
        {(rows.length > 0 || showTotal) && hidden > 0 && <span style={{ fontSize: "14px", color: "#5E6A62" }}>{t.hidden(hidden)}</span>}
        {missing > 0 && <span style={{ fontSize: "14px", color: "#5E6A62" }}>{t.missing(missing)}</span>}
      </div>
    </>
  );
}
