import Link from "next/link";
import { adminDb, adminDbConfigured } from "@/lib/pulse-server";
import { startOnSite } from "../actions";
import { codeLinks, linkBase } from "../qr";
import { H1, H2, Notice, SetupNotice, button, card, ghost, input, label } from "../ui";

export const dynamic = "force-dynamic";

const todayBudapest = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Budapest", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

type StationRow = {
  slug: string;
  ct_practitioners: { name: string } | null;
  ct_occasions: { id: string; occasion_date: string; label: string | null; active: boolean; company_id: string; ct_companies: { name: string } | null } | null;
};

export default async function HelyszinPage({ searchParams }: { searchParams: Promise<{ st?: string; hiba?: string }> }) {
  if (!adminDbConfigured) {
    return (<><H1>Helyszíni beállítás</H1><SetupNotice /></>);
  }
  const sp = await searchParams;
  const db = adminDb();
  const today = todayBudapest();
  const [cRes, pRes, tRes] = await Promise.all([
    db.from("ct_companies").select("id, name").order("name"),
    db.from("ct_practitioners").select("id, name").eq("active", true).order("name"),
    db.from("ct_stations")
      .select("slug, ct_practitioners(name), ct_occasions!inner(id, occasion_date, label, active, company_id, ct_companies(name))")
      .eq("ct_occasions.occasion_date", today),
  ]);
  for (const r of [cRes, pRes, tRes]) if (r.error) throw r.error;
  const companies = cRes.data ?? [];
  const practitioners = pRes.data ?? [];
  const todays = ((tRes.data ?? []) as unknown as StationRow[]).filter((s) => s.ct_occasions?.active);

  let current: (StationRow & { snapUrl: string; monthlyUrl: string; qr: string }) | null = null;
  if (sp.st && /^[a-z0-9]{4,40}$/i.test(sp.st)) {
    const { data, error } = await db
      .from("ct_stations")
      .select("slug, ct_practitioners(name), ct_occasions(id, occasion_date, label, active, company_id, ct_companies(name))")
      .eq("slug", sp.st)
      .maybeSingle();
    if (error) throw error;
    if (data) current = { ...(data as unknown as StationRow), ...(await codeLinks(await linkBase(), sp.st, 560)) };
  }

  const companyFields = (
    <>
      <label style={label}>
        Cég
        <select name="company_id" defaultValue="" style={input}>
          <option value="">— válassz, vagy írj be újat lent —</option>
          {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </label>
      <label style={label}>vagy új cég neve<input name="new_company" autoComplete="off" style={input} /></label>
    </>
  );
  const practitionerFields = (
    <>
      <label style={label}>
        Szakember
        <select name="practitioner_id" defaultValue="" style={input}>
          <option value="">— válassz, vagy írj be újat lent —</option>
          {practitioners.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </label>
      <label style={label}>vagy új szakember neve<input name="new_practitioner" autoComplete="off" style={input} /></label>
    </>
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <H1>Helyszíni beállítás</H1>
        <p style={{ margin: 0, color: "#5E6A62" }}>
          Közvetlenül a program előtt: válaszd ki a céget és a szakembert, és mutasd meg a résztvevőknek a QR-kódot. Minden szakember a saját kódját használja – így a válaszok hozzá kötődnek. Csere esetén a beugró szakember egyszerűen a saját kódját állítja be.
        </p>
      </div>

      {sp.hiba && <Notice tone="warn">Add meg a céget és a szakembert is (választva vagy új névvel).</Notice>}

      {current && current.ct_occasions && (
        <section style={{ ...card, alignItems: "center", textAlign: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.16em", color: "#2C5069" }}>CALM-TOUCH PULSE · PILLANATKÉP</span>
          <H2>{current.ct_occasions.ct_companies?.name}</H2>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#2C5069" }}>Szakember: {current.ct_practitioners?.name}</span>
          <span style={{ color: "#5E6A62" }}>{current.ct_occasions.occasion_date}{current.ct_occasions.label ? ` · ${current.ct_occasions.label}` : ""}{current.ct_occasions.active ? "" : " · LEZÁRVA"}</span>
          <img src={current.qr} alt={`QR-kód: ${current.ct_occasions.ct_companies?.name}, ${current.ct_practitioners?.name}`} style={{ width: "min(320px, 80vw)", height: "auto", aspectRatio: "1 / 1" }} />
          <span style={{ fontSize: "15px" }}>Olvasd be a telefonod kamerájával.</span>
          <a href={current.snapUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", wordBreak: "break-all" }}>{current.snapUrl}</a>
          <div className="ct-noprint" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <a href={current.qr} download={`calm-touch-qr-${current.ct_occasions.occasion_date}-${current.ct_practitioners?.name ?? ""}.png`} style={{ ...ghost, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>QR-kód letöltése</a>
            <Link href="/admin/helyszin" style={{ ...ghost, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>Új beállítás</Link>
          </div>
          <form action={startOnSite} className="ct-noprint" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "420px", textAlign: "left", borderTop: "1px solid #DDE8EF", paddingTop: "14px" }}>
            <b>Szakembercsere vagy újabb szakember ugyanitt</b>
            <input type="hidden" name="company_id" value={current.ct_occasions.company_id} />
            {practitionerFields}
            <button type="submit" style={button}>QR-kód megjelenítése</button>
          </form>
        </section>
      )}

      {!current && (
        <form action={startOnSite} style={{ ...card, maxWidth: "560px" }}>
          <H2>Mai program indítása</H2>
          {companyFields}
          {practitionerFields}
          <label style={label}>Megnevezés <span style={{ fontWeight: 400, color: "#5E6A62" }}>(nem kötelező, pl. „délelőtt”)</span><input name="label" style={input} /></label>
          <button type="submit" style={{ ...button, minHeight: "52px", fontSize: "17px" }}>QR-kód megjelenítése</button>
          <span style={{ fontSize: "13px", color: "#5E6A62" }}>Ha a cégnek ma már van alkalma, ahhoz kapcsolódik; ha nincs, létrehozza.</span>
        </form>
      )}

      {todays.length > 0 && (
        <section style={card}>
          <H2>Mai QR-kódok</H2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {todays.map((s) => (
              <li key={s.slug}>
                <Link href={`/admin/helyszin?st=${s.slug}`} style={{ color: "#2C5069", fontWeight: 600 }}>
                  {s.ct_occasions?.ct_companies?.name} · {s.ct_practitioners?.name}{s.ct_occasions?.label ? ` · ${s.ct_occasions.label}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
