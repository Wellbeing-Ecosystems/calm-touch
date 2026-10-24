import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { buildReport, fmt1, MIN_GROUP, stateStatus, wellbeingIndex, type Monthly, type Snapshot } from "@/lib/pulse-metrics";
import { H1, H2, Notice, SetupNotice, StatusPill, button, card, input, label } from "../ui";
import { PrintButton } from "./PrintButton";
import { adminLang } from "../lang";
import { LOCALE, REPORT, STATUS_LABEL, num } from "../strings";
import { isLang, LANGS, LANG_NAME, type Lang } from "@/lib/i18n";
import { missingColumn } from "@/lib/company";

export const dynamic = "force-dynamic";

const monthOf = (iso: string) =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit" }).format(new Date(iso)).slice(0, 7);

function shiftMonth(m: string, delta: number) {
  const [y, mo] = m.split("-").map(Number);
  const d = new Date(Date.UTC(y, mo - 1 + delta, 1));
  return d.toISOString().slice(0, 7);
}
const monthLabel = (m: string, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang], { year: "numeric", month: "long", timeZone: "UTC" }).format(new Date(`${m}-01T00:00:00Z`));

export default async function RiportPage({ searchParams }: { searchParams: Promise<{ c?: string; m?: string; l?: string }> }) {
  const sp = await searchParams;
  const ui = await adminLang();
  const lang: Lang = isLang(sp.l) ? sp.l : ui;
  const t = REPORT[lang];
  const f = (v: number | null, signed = false) => num(lang, fmt1(v, signed));
  if (!adminDbConfigured) {
    return (<><H1>{t.title}</H1><SetupNotice /></>);
  }
  const month = /^\d{4}-\d{2}$/.test(sp.m ?? "") ? sp.m! : monthOf(new Date().toISOString());
  const db = adminDb();
  type Co = { id: string; name: string; contact_name?: string | null; contact_email?: string | null; contact_phone?: string | null };
  const full = await db.from("ct_companies").select("id, name, contact_name, contact_email, contact_phone").order("name");
  const cRes = missingColumn(full.error) ? await db.from("ct_companies").select("id, name").order("name") : full;
  if (cRes.error) throw cRes.error;
  const companies = cRes.data as Co[] | null;
  const companyId = sp.c && companies?.some((c) => c.id === sp.c) ? sp.c : companies?.[0]?.id;
  const company = companies?.find((c) => c.id === companyId);

  let content = <p style={{ color: "#5E6A62" }}>{t.noCompany}</p>;

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
          {status && <StatusPill status={status} lang={lang} />}
        </div>
        <span style={{ fontFamily: "var(--ct-display)", fontSize: "40px", fontWeight: 700, lineHeight: 1, color: "#2C5069" }}>{value}</span>
        <span style={{ fontSize: "14px", color: "#3B443E" }}>{sub}</span>
      </div>
    );

    content = (
      <>
        {report.belowThreshold && (
          <Notice tone="warn">
            {t.below(report.participants, MIN_GROUP)}
          </Notice>
        )}
        {report.pairCount === 0 && report.monthlyCount === 0 && <Notice>{t.noData}</Notice>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "14px" }}>
          {kpi(t.participation, t.people(report.participants), t.partSub(report.occasions, String(report.completionPct ?? "–")))}
          {kpi(t.state, f(report.state), t.stateSub, report.stateStatus)}
          {kpi(t.effect, f(report.effect, true), t.effectSub(String(report.improvedPct ?? "–")), report.effectStatus)}
          {kpi(t.trend, f(report.trend), t.trendSub(report.monthlyCount), report.trendStatus)}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "14px" }}>
          <div style={card}>
            <H2>{t.itemsTitle}</H2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
              <thead>
                <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                  {t.cols.map((h) => <th key={h} scope="col" style={{ padding: "8px 6px" }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {report.items.map((it, i) => (
                  <tr key={it.label} style={{ borderBottom: "1px solid #EEF3F6" }}>
                    <th scope="row" style={{ padding: "8px 6px", textAlign: "left", fontWeight: 500 }}>{t.items[i] ?? it.label}</th>
                    <td style={{ padding: "8px 6px" }}>{f(it.pre)}</td>
                    <td style={{ padding: "8px 6px", fontWeight: 700, color: "#2C5069" }}>{f(it.post)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span style={{ fontSize: "14px", color: "#5E6A62" }}>
              {t.comfort}: {f(report.comfort)} / 10 · {t.nps}: {report.nps == null ? "–" : `${report.nps > 0 ? "+" : ""}${report.nps}`} ·
              {" "}{t.sustain}: {f(report.sustainability)} / 10 · {t.value}: {f(report.value)} / 10
            </span>
          </div>
          <div style={card}>
            <H2>{t.historyTitle}</H2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px", alignItems: "end", height: "200px", borderBottom: "1px solid #A9C1D1", padding: "0 6px" }}>
              {history.map((h, i) => (
                <div key={h.m} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: i === 3 ? 700 : 500 }}>{f(h.v)}</span>
                  <div style={{ width: "100%", maxWidth: "56px", height: `${h.v ? h.v * 16 : 2}px`, background: i === 3 ? "#3F6E8C" : "#A9C1D1", borderRadius: "6px 6px 0 0" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "16px", fontSize: "13px", color: "#5E6A62", textAlign: "center" }}>
              {history.map((h) => <span key={h.m}>{monthLabel(h.m, lang)}<br />{t.responses(h.n)} · {STATUS_LABEL[lang][stateStatus(h.v)]}</span>)}
            </div>
          </div>
        </div>

        <div style={card}>
          <H2>{t.teamsTitle(MIN_GROUP)}</H2>
          {report.teams.length === 0 ? (
            <p style={{ margin: 0, color: "#5E6A62" }}>{t.noTeams(MIN_GROUP)}</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", minWidth: "680px", borderCollapse: "collapse", fontSize: "15px" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#2C5069", borderBottom: "2px solid #DDE8EF" }}>
                    {t.teamCols.map((h) => <th key={h} scope="col" style={{ padding: "10px 8px" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {report.teams.map((tm) => (
                    <tr key={tm.id} style={{ borderBottom: "1px solid #EEF3F6" }}>
                      <th scope="row" style={{ padding: "10px 8px", textAlign: "left" }}>{tm.name}</th>
                      <td style={{ padding: "10px 8px" }}>{tm.participants}</td>
                      <td style={{ padding: "10px 8px" }}>{f(tm.state)} <StatusPill status={tm.stateStatus} lang={lang} /></td>
                      <td style={{ padding: "10px 8px" }}>{f(tm.effect, true)} <StatusPill status={tm.effectStatus} lang={lang} /></td>
                      <td style={{ padding: "10px 8px" }}>{f(tm.trend)} <StatusPill status={tm.trendStatus} lang={lang} /></td>
                      <td style={{ padding: "10px 8px" }}>{f(tm.sustainability)} / 10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {report.hiddenTeams > 0 && (
            <span style={{ fontSize: "14px", color: "#5E6A62" }}>{t.hidden(report.hiddenTeams, MIN_GROUP)}</span>
          )}
        </div>

        <Notice>
          {t.notes.join(" ")}
        </Notice>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#2C5069", fontWeight: 700 }}>{t.chip}</span>
          <H1>{company ? `${company.name} · ${monthLabel(month, lang)}` : t.title}</H1>
        </div>
        <PrintButton label={t.print} />
      </div>
      <form className="ct-noprint" style={{ ...card, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end" }}>
        <label style={{ ...label, flex: "1 1 220px" }}>
          {t.company}
          <select name="c" defaultValue={companyId} style={input}>
            {companies?.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <label style={{ ...label, flex: "0 1 200px" }}>{t.month}<input type="month" name="m" defaultValue={month} style={input} /></label>
        <label style={{ ...label, flex: "0 1 180px" }}>
          {t.reportLang}
          <select name="l" defaultValue={lang} style={input}>
            {LANGS.map((l) => <option key={l} value={l}>{LANG_NAME[l]}</option>)}
          </select>
        </label>
        <button type="submit" style={button}>{t.show}</button>
      </form>
      {company && (
        <div className="ct-noprint" style={{ ...card, flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          {company.contact_email ? (
            <>
              <span style={{ fontSize: "15px" }}>
                {t.contact}: <b>{company.contact_name ?? company.contact_email}</b>
                {" · "}<a href={`mailto:${company.contact_email}`}>{company.contact_email}</a>
                {company.contact_phone && <> · {company.contact_phone}</>}
                <br /><span style={{ fontSize: "13px", color: "#5E6A62" }}>{t.sendHint}</span>
              </span>
              <a
                href={`mailto:${company.contact_email}?subject=${encodeURIComponent(t.mailSubject(company.name, monthLabel(month, lang)))}&body=${encodeURIComponent(t.mailBody(company.contact_name ?? null, company.name, monthLabel(month, lang)))}`}
                style={{ ...button, display: "inline-flex", alignItems: "center", textDecoration: "none", background: "#7E3A4A" }}
              >{t.send}</a>
            </>
          ) : (
            <span style={{ fontSize: "14px", color: "#5E6A62" }}>{t.noEmail}</span>
          )}
        </div>
      )}
      {content}
    </>
  );
}
