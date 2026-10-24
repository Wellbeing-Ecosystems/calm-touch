import type { Lang } from "@/lib/i18n";
import { sitePath } from "@/app/SiteLang";

/** Lábléc-linkek a jogi oldalakra (a generátor a current="hu"-t átírja en/de-re). */
const L: Record<Lang, { method: string; aszf: string; imp: string; data: string }> = {
  hu: { method: "Mérési módszertan", aszf: "ÁSZF", imp: "Impresszum", data: "Adatkezelés" },
  en: { method: "Measurement method", aszf: "Terms", imp: "Imprint", data: "Privacy" },
  de: { method: "Messmethodik", aszf: "AGB", imp: "Impressum", data: "Datenschutz" },
};

export function LegalLinks({ current, color, method }: { current: Lang; color?: string; method?: boolean }) {
  const t = L[current];
  const s = color ? { color } : undefined;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
      {method && <a href={sitePath(current, "/modszertan")} style={s}>{t.method}</a>}
      <a href={sitePath(current, "/aszf")} style={s}>{t.aszf}</a>
      <a href={sitePath(current, "/adatkezeles")} style={s}>{t.data}</a>
      <a href={sitePath(current, "/impresszum")} style={s}>{t.imp}</a>
    </div>
  );
}
