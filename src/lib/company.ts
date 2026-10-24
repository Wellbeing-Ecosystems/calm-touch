import type { Lang } from "./i18n";

/** Cégadatok az adminban: iparág, általános foglalkoztatotti létszám, kapcsolattartó (riportküldéshez). */
export type CompanyDetails = {
  industry: string | null;
  headcount: number | null;
  region: string | null;
  contact_name: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  /** A megvalósítói (Calm Touch) oldal projektmenedzserei. */
  pm1_name: string | null;
  pm2_name: string | null;
};

export const DETAIL_COLUMNS = "industry, headcount, region, contact_name, contact_phone, contact_email, pm1_name, pm2_name";

/** Iparágak – az adatbázisban a kulcs tárolódik, a felirat nyelvfüggő. */
export const INDUSTRIES: Record<string, Record<Lang, string>> = {
  it: { hu: "Informatika, szoftver", en: "IT & software", de: "IT & Software" },
  sharedservice: { hu: "Szolgáltató központ (SSC, BPO)", en: "Shared service centre (SSC, BPO)", de: "Shared-Service-Center (SSC, BPO)" },
  finance: { hu: "Pénzügy, bank, biztosítás", en: "Finance, banking, insurance", de: "Finanzen, Banken, Versicherungen" },
  professional: { hu: "Tanácsadás, jog, könyvelés", en: "Professional services", de: "Beratung & Dienstleistungen" },
  manufacturing: { hu: "Gyártás, ipar", en: "Manufacturing & industry", de: "Produktion & Industrie" },
  automotive: { hu: "Autóipar", en: "Automotive", de: "Automobilindustrie" },
  pharma: { hu: "Gyógyszeripar, egészségügy", en: "Pharma & healthcare", de: "Pharma & Gesundheitswesen" },
  food: { hu: "Élelmiszeripar, FMCG", en: "Food & FMCG", de: "Lebensmittel & FMCG" },
  retail: { hu: "Kereskedelem", en: "Retail & wholesale", de: "Handel" },
  logistics: { hu: "Logisztika, szállítás", en: "Logistics & transport", de: "Logistik & Transport" },
  energy: { hu: "Energia, közmű", en: "Energy & utilities", de: "Energie & Versorgung" },
  telecom: { hu: "Telekommunikáció, média", en: "Telecoms & media", de: "Telekommunikation & Medien" },
  construction: { hu: "Építőipar, ingatlan", en: "Construction & real estate", de: "Bau & Immobilien" },
  hospitality: { hu: "Turizmus, vendéglátás", en: "Hospitality & tourism", de: "Tourismus & Gastgewerbe" },
  public: { hu: "Közszféra, oktatás", en: "Public sector & education", de: "Öffentlicher Sektor & Bildung" },
  ngo: { hu: "Civil szervezet, alapítvány", en: "Non-profit organisation", de: "Gemeinnützige Organisation" },
  other: { hu: "Egyéb", en: "Other", de: "Sonstiges" },
};

/** Terület: Budapest, a 19 vármegye és külföld. A vármegyenevek minden nyelven azonosak. */
const COUNTY_NAMES: [string, string][] = [
  ["budapest", "Budapest"], ["baranya", "Baranya"], ["bacs-kiskun", "Bács-Kiskun"], ["bekes", "Békés"],
  ["borsod", "Borsod-Abaúj-Zemplén"], ["csongrad", "Csongrád-Csanád"], ["fejer", "Fejér"], ["gyor", "Győr-Moson-Sopron"],
  ["hajdu", "Hajdú-Bihar"], ["heves", "Heves"], ["jasz", "Jász-Nagykun-Szolnok"], ["komarom", "Komárom-Esztergom"],
  ["nograd", "Nógrád"], ["pest", "Pest"], ["somogy", "Somogy"], ["szabolcs", "Szabolcs-Szatmár-Bereg"],
  ["tolna", "Tolna"], ["vas", "Vas"], ["veszprem", "Veszprém"], ["zala", "Zala"],
];
export const REGIONS: Record<string, Record<Lang, string>> = {
  ...Object.fromEntries(COUNTY_NAMES.map(([k, n]) => [k, { hu: k === "budapest" ? n : `${n} vármegye`, en: k === "budapest" ? n : `${n} County`, de: k === "budapest" ? n : `Komitat ${n}` }])),
  abroad: { hu: "Külföld", en: "Abroad", de: "Ausland" },
};
export const regionLabel = (key: string | null, lang: Lang) => (key ? REGIONS[key]?.[lang] ?? key : null);

/** Létszám-kategóriák az összesítéshez (az EU KKV-határokhoz igazítva). */
export const SIZE_BANDS: { key: string; min: number; max: number; label: Record<Lang, string> }[] = [
  { key: "s", min: 1, max: 49, label: { hu: "1–49 fő", en: "1–49 employees", de: "1–49 Mitarbeitende" } },
  { key: "m", min: 50, max: 249, label: { hu: "50–249 fő", en: "50–249 employees", de: "50–249 Mitarbeitende" } },
  { key: "l", min: 250, max: 999, label: { hu: "250–999 fő", en: "250–999 employees", de: "250–999 Mitarbeitende" } },
  { key: "xl", min: 1000, max: Infinity, label: { hu: "1000 fő felett", en: "1,000+ employees", de: "über 1.000 Mitarbeitende" } },
];
export const sizeBand = (n: number | null) => (n == null ? null : SIZE_BANDS.find((b) => n >= b.min && n <= b.max)?.key ?? null);

export const industryLabel = (key: string | null, lang: Lang) => (key ? INDUSTRIES[key]?.[lang] ?? key : null);

const clean = (v: FormDataEntryValue | null, max: number) => {
  const s = String(v ?? "").trim().slice(0, max);
  return s || null;
};

/** Űrlapból cégadatok; a hibás e-mail-címet és létszámot nem menti (null). */
export function detailsFromForm(fd: FormData): CompanyDetails {
  const industry = clean(fd.get("industry"), 60);
  const hc = Number(String(fd.get("headcount") ?? "").replace(/\s/g, ""));
  const email = clean(fd.get("contact_email"), 200);
  const region = clean(fd.get("region"), 40);
  return {
    industry: industry && INDUSTRIES[industry] ? industry : null,
    headcount: Number.isInteger(hc) && hc >= 1 && hc <= 1000000 ? hc : null,
    region: region && REGIONS[region] ? region : null,
    contact_name: clean(fd.get("contact_name"), 120),
    contact_phone: clean(fd.get("contact_phone"), 40),
    contact_email: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null,
    pm1_name: clean(fd.get("pm1_name"), 120),
    pm2_name: clean(fd.get("pm2_name"), 120),
  };
}

/** Igaz, ha a hiba abból ered, hogy a 0002-es migráció még nem futott (hiányzó oszlop). */
export const missingColumn = (e: { code?: string; message?: string } | null) =>
  Boolean(e && (e.code === "42703" || e.code === "PGRST204" || /column .* does not exist|Could not find the '.*' column/i.test(e.message ?? "")));
