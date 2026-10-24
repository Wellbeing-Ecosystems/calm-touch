import type { Lang } from "@/lib/i18n";
import { INDUSTRIES, REGIONS, type CompanyDetails } from "@/lib/company";
import { input, label } from "./ui";
import { ADMIN } from "./strings";

const hint = { fontWeight: 400, color: "#5E6A62" } as const;
const sorted = (rec: Record<string, Record<Lang, string>>, lang: Lang, last: string) =>
  Object.entries(rec).sort(([a, x], [b, y]) => (a === last ? 1 : b === last ? -1 : x[lang].localeCompare(y[lang], lang)));

/** Cégadat-mezők (új cég és szerkesztés): iparág, létszám, vármegye, kapcsolattartó. */
export function CompanyFields({ lang, value }: { lang: Lang; value?: Partial<CompanyDetails> }) {
  const t = ADMIN[lang].co;
  const v = value ?? {};
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
        <label style={label}>
          {t.industry}
          <select name="industry" defaultValue={v.industry ?? ""} style={input}>
            <option value="">{t.none}</option>
            {sorted(INDUSTRIES, lang, "other").map(([k, l]) => <option key={k} value={k}>{l[lang]}</option>)}
          </select>
        </label>
        <label style={label}>
          {t.region}
          <select name="region" defaultValue={v.region ?? ""} style={input}>
            <option value="">{t.none}</option>
            {sorted(REGIONS, "hu", "abroad").sort(([a], [b]) => (a === "budapest" ? -1 : b === "budapest" ? 1 : 0)).map(([k, l]) => <option key={k} value={k}>{l[lang]}</option>)}
          </select>
        </label>
        <label style={label}>
          <span>{t.headcount} <span style={hint}>{t.headcountHint}</span></span>
          <input type="number" name="headcount" min={1} max={1000000} step={1} inputMode="numeric" defaultValue={v.headcount ?? ""} style={input} />
        </label>
      </div>
      <fieldset style={{ border: "1px solid #EADFD2", borderRadius: "12px", padding: "12px 14px 14px", margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
        <legend style={{ fontWeight: 700, fontSize: "14px", padding: "0 6px" }}>{t.contact} <span style={hint}>{t.contactHint}</span></legend>
        <label style={label}>{t.contactName}<input name="contact_name" autoComplete="off" maxLength={120} defaultValue={v.contact_name ?? ""} style={input} /></label>
        <label style={label}>{t.contactPhone}<input type="tel" name="contact_phone" autoComplete="off" maxLength={40} defaultValue={v.contact_phone ?? ""} style={input} /></label>
        <label style={label}>{t.contactEmail}<input type="email" name="contact_email" autoComplete="off" maxLength={200} defaultValue={v.contact_email ?? ""} style={input} /></label>
      </fieldset>
    </>
  );
}
