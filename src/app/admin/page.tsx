import Link from "next/link";
import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { addStation, addTeams, createCompany, createOccasion, createPractitioner, setOccasionActive, setPractitionerActive, updateCompany } from "./actions";
import { CompanyFields } from "./CompanyFields";
import { DETAIL_COLUMNS, industryLabel, missingColumn, regionLabel, type CompanyDetails } from "@/lib/company";
import { codeLinks, linkBase } from "./qr";
import { H1, H2, Notice, SetupNotice, button, card, ghost, input, label } from "./ui";
import { adminLang } from "./lang";
import { ADMIN } from "./strings";

export const dynamic = "force-dynamic";

type Station = { id: string; slug: string; practitioner_id: string };
type Occasion = { id: string; slug: string; label: string | null; occasion_date: string; active: boolean; ct_stations: Station[] };
type Company = Partial<CompanyDetails> & { id: string; name: string; ct_teams: { id: string; name: string }[]; ct_occasions: Occasion[] };
type Practitioner = { id: string; name: string; active: boolean };

export default async function AdminPage() {
  const lang = await adminLang();
  const A = ADMIN[lang];
  const co = A.co;
  const t = A.main;
  if (!adminDbConfigured) {
    return (<><H1>{t.title}</H1><SetupNotice /></>);
  }
  const db = adminDb();
  const rel = "ct_teams(id, name), ct_occasions(id, slug, label, occasion_date, active, ct_stations(id, slug, practitioner_id))";
  const [cFull, pRes] = await Promise.all([
    db.from("ct_companies").select(`id, name, ${DETAIL_COLUMNS}, ${rel}`).order("name"),
    db.from("ct_practitioners").select("id, name, active").order("name"),
  ]);
  // ha a 0002-es SQL még nem futott, a cégadatok nélkül töltünk
  const detailsReady = !missingColumn(cFull.error);
  const cRes = detailsReady ? cFull : await db.from("ct_companies").select(`id, name, ${rel}`).order("name");
  if (cRes.error) throw cRes.error;
  if (pRes.error) throw pRes.error;
  const companies = (cRes.data ?? []) as unknown as Company[];
  const practitioners = (pRes.data ?? []) as Practitioner[];
  const activePractitioners = practitioners.filter((p) => p.active);
  const pmNames = [...new Set(companies.flatMap((c) => [c.pm1_name, c.pm2_name]).filter((n): n is string => Boolean(n)))].sort((a, b) => a.localeCompare(b, "hu"));
  const pName = new Map(practitioners.map((p) => [p.id, p.name]));
  const base = await linkBase();

  const view = await Promise.all(
    companies.map(async (c) => ({
      ...c,
      occasions: await Promise.all(
        [...c.ct_occasions]
          .sort((a, b) => b.occasion_date.localeCompare(a.occasion_date))
          .map(async (o) => ({
            ...o,
            general: await codeLinks(base, o.slug, 240),
            stations: await Promise.all(
              [...o.ct_stations]
                .sort((a, b) => (pName.get(a.practitioner_id) ?? "").localeCompare(pName.get(b.practitioner_id) ?? "", "hu"))
                .map(async (s) => ({ ...s, name: pName.get(s.practitioner_id) ?? "–", ...(await codeLinks(base, s.slug, 240)) })),
            ),
          })),
      ),
    })),
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <H1>{t.title}</H1>
        <p style={{ margin: 0, color: "#5E6A62" }}>
          {t.intro1} <Link href="/admin/helyszin">{A.navOnsite}</Link> {t.intro2}
        </p>
      </div>

      {!detailsReady && <Notice tone="warn">{co.migrate}</Notice>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "16px" }}>
        <form action={createCompany} style={{ ...card, gridColumn: "1 / -1" }}>
          <H2>{t.newCompany}</H2>
          <label style={label}>{t.companyName}<input name="name" required style={input} /></label>
          <label style={label}>
            {t.teams} <span style={{ fontWeight: 400, color: "#5E6A62" }}>{t.teamsHint}</span>
            <textarea name="teams" rows={2} style={{ ...input, padding: "10px 12px" }} />
          </label>
          {detailsReady && <CompanyFields lang={lang} pmNames={pmNames} />}
          <button type="submit" style={{ ...button, alignSelf: "flex-start" }}>{t.addCompany}</button>
        </form>

        <form action={createOccasion} style={card}>
          <H2>{t.newOccasion}</H2>
          <label style={label}>
            {t.company}
            <select name="company_id" required style={input} defaultValue="">
              <option value="" disabled>{t.choose}</option>
              {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
          <label style={label}>
            {t.firstPrac} <span style={{ fontWeight: 400, color: "#5E6A62" }}>{t.firstPracHint}</span>
            <select name="practitioner_id" style={input} defaultValue="">
              <option value="">{t.later}</option>
              {activePractitioners.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </label>
          <label style={label}>{t.date}<input type="date" name="date" style={input} /></label>
          <label style={label}>{t.occLabel} <span style={{ fontWeight: 400, color: "#5E6A62" }}>{t.occLabelHint}</span><input name="label" style={input} /></label>
          <button type="submit" style={{ ...button, alignSelf: "flex-start" }} disabled={!companies.length}>{t.createOccasion}</button>
        </form>

        <section style={card}>
          <H2>{t.pracs}</H2>
          <form action={createPractitioner} style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <input name="name" required placeholder={t.pracName} aria-label={t.newPrac} style={{ ...input, flex: "1 1 180px" }} />
            <button type="submit" style={ghost}>{t.add}</button>
          </form>
          {practitioners.length === 0 && <span style={{ color: "#5E6A62", fontSize: "14px" }}>{t.noPracs}</span>}
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {practitioners.map((p) => (
              <li key={p.id} style={{ display: "flex", alignItems: "center", gap: "8px", border: "1px solid #DDE8EF", borderRadius: "999px", padding: "4px 6px 4px 14px", opacity: p.active ? 1 : 0.6 }}>
                <span style={{ fontWeight: 600 }}>{p.name}</span>
                <form action={setPractitionerActive}>
                  <input type="hidden" name="id" value={p.id} />
                  <input type="hidden" name="active" value={p.active ? "false" : "true"} />
                  <button type="submit" style={{ ...ghost, minHeight: "30px", fontSize: "13px" }}>{p.active ? t.deactivate : t.activate}</button>
                </form>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {view.length === 0 && <p style={{ color: "#5E6A62" }}>{t.noCompanies}</p>}

      {view.map((c) => (
        <section key={c.id} style={{ ...card, gap: "18px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
            <H2>{c.name}</H2>
            <span style={{ color: "#5E6A62", fontSize: "14px" }}>
              {t.teamsOf}: {c.ct_teams.length ? c.ct_teams.map((tm) => tm.name).sort((a, b) => a.localeCompare(b, "hu")).join(", ") : t.none}
            </span>
          </div>
          {detailsReady && (
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", fontSize: "14px", color: "#3B443E" }}>
                <span>{co.industry}: <b>{industryLabel(c.industry ?? null, lang) ?? co.none}</b></span>
                <span>{co.region}: <b>{regionLabel(c.region ?? null, lang) ?? co.none}</b></span>
                <span>{co.headcount}: <b>{c.headcount ? co.people(c.headcount) : co.none}</b></span>
                <span>{co.pm}: <b>{[c.pm1_name, c.pm2_name].filter(Boolean).join(", ") || co.none}</b></span>
                <span>{co.contact}: <b>{[c.contact_name, c.contact_phone].filter(Boolean).join(" · ") || co.noContact}</b>{c.contact_email && <> · <a href={`mailto:${c.contact_email}`}>{c.contact_email}</a></>}</span>
              </div>
              <details>
                <summary style={{ cursor: "pointer", color: "#2C5069", fontWeight: 700, fontSize: "14px" }}>{co.edit}</summary>
                <form action={updateCompany} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
                  <input type="hidden" name="company_id" value={c.id} />
                  <label style={label}>{t.companyName}<input name="name" required defaultValue={c.name} style={input} /></label>
                  <CompanyFields lang={lang} value={c} pmNames={pmNames} idSuffix={c.id} />
                  <button type="submit" style={{ ...button, alignSelf: "flex-start" }}>{co.save}</button>
                </form>
              </details>
            </>
          )}
          <form action={addTeams} style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <input type="hidden" name="company_id" value={c.id} />
            <input name="teams" placeholder={t.newTeams} aria-label={`${t.newTeamAria}: ${c.name}`} style={{ ...input, flex: "1 1 220px" }} />
            <button type="submit" style={ghost}>{t.addTeam}</button>
          </form>
          {c.occasions.length === 0 && <p style={{ margin: 0, color: "#5E6A62" }}>{t.noOccasions}</p>}

          {c.occasions.map((o) => (
            <article key={o.id} style={{ border: "1px solid #DDE8EF", borderRadius: "14px", padding: "16px", display: "flex", flexDirection: "column", gap: "14px", opacity: o.active ? 1 : 0.6 }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <b style={{ fontSize: "17px" }}>{o.occasion_date}{o.label ? ` · ${o.label}` : ""}</b>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: o.active ? "#2F6B4A" : "#A63D32", fontWeight: 600 }}>{o.active ? t.active : t.closed}</span>
                  <form action={setOccasionActive}>
                    <input type="hidden" name="id" value={o.id} />
                    <input type="hidden" name="active" value={o.active ? "false" : "true"} />
                    <button type="submit" style={ghost}>{o.active ? t.close : t.reopen}</button>
                  </form>
                </div>
              </div>

              {o.stations.length === 0 && (
                <Notice tone="warn">{t.noStation}</Notice>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))", gap: "12px" }}>
                {o.stations.map((s) => (
                  <div key={s.id} style={{ background: "#F2F6F9", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
                    <b style={{ color: "#2C5069" }}>{s.name}</b>
                    <img src={s.qr} alt={`${t.qrAlt}: ${c.name}, ${o.occasion_date}, ${s.name}`} style={{ width: "160px", height: "160px" }} />
                    <a href={s.qr} download={`calm-touch-qr-${o.occasion_date}-${s.name}.png`} style={{ fontSize: "13px", color: "#2C5069" }}>{t.downloadQr}</a>
                    <a href={s.snapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", wordBreak: "break-all" }}>{s.snapUrl}</a>
                  </div>
                ))}
                <div style={{ border: "1px dashed #CDB8A3", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center" }}>
                  <b style={{ color: "#5E6A62" }}>{t.general}</b>
                  <img src={o.general.qr} alt={`${t.generalAlt}: ${c.name}, ${o.occasion_date}`} style={{ width: "120px", height: "120px" }} />
                  <a href={o.general.snapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", wordBreak: "break-all" }}>{o.general.snapUrl}</a>
                </div>
              </div>

              <form action={addStation} style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <input type="hidden" name="occasion_id" value={o.id} />
                <select name="practitioner_id" required defaultValue="" aria-label={t.addPracAria} style={{ ...input, flex: "1 1 200px" }}>
                  <option value="" disabled>{t.addPracOpt}</option>
                  {activePractitioners.filter((p) => !o.ct_stations.some((s) => s.practitioner_id === p.id)).map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                <button type="submit" style={ghost}>{t.addBtn}</button>
              </form>
            </article>
          ))}
        </section>
      ))}
    </>
  );
}
