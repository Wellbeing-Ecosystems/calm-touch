import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Böngészőoldali Supabase-kapcsolat a Pulse kérdőívekhez.
 * Csak a publikus (publishable / anon) kulcsot használja; a táblák RLS-sel zártak,
 * a böngésző kizárólag a ct_* adatbázis-függvényeket hívhatja.
 * Ha a környezeti változók hiányoznak, a kérdőívek demó módban futnak (nincs mentés).
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;
function getClient(): SupabaseClient | null {
  if (!url || !key) return null;
  client ??= createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

export const pulseLive = Boolean(url && key);

export type OccasionInfo = {
  company: string;
  label: string | null;
  date: string;
  teams: { id: string; name: string }[];
};

/** Az alkalom azonosítója a QR-linkből: /calm-touch/pillanatkep?a=<slug> */
export function readOccasionSlug(): string | null {
  if (typeof window === "undefined") return null;
  const slug = new URLSearchParams(window.location.search).get("a");
  return slug && /^[a-z0-9-]{4,40}$/i.test(slug) ? slug : null;
}

export async function loadOccasion(slug: string): Promise<OccasionInfo | null> {
  const db = getClient();
  if (!db) return null;
  const { data, error } = await db.rpc("ct_occasion_info", { p_slug: slug });
  if (error) throw error;
  return (data as OccasionInfo | null) ?? null;
}

export async function submitSnapshot(args: {
  slug: string;
  code: string;
  phase: "pre" | "post";
  answers: number[];
  team: string | null;
  comfort?: number | null;
  recommend?: number | null;
  word?: string | null;
}): Promise<"ok" | "duplicate"> {
  const db = getClient();
  if (!db) return "ok";
  const { data, error } = await db.rpc("ct_submit_snapshot", {
    p_slug: args.slug,
    p_code: args.code,
    p_phase: args.phase,
    p_answers: args.answers,
    p_team: args.team,
    p_comfort: args.comfort ?? null,
    p_recommend: args.recommend ?? null,
    p_word: args.word ?? null,
    p_consent: true,
  });
  if (error) throw error;
  return data as "ok" | "duplicate";
}

export async function monthlyDone(slug: string, code: string): Promise<boolean> {
  const db = getClient();
  if (!db) return false;
  const { data, error } = await db.rpc("ct_monthly_done", { p_slug: slug, p_code: code });
  if (error) throw error;
  return Boolean(data);
}

export async function submitMonthly(args: {
  slug: string;
  code: string;
  answers: number[];
  team: string | null;
  open: string;
}): Promise<"ok" | "already"> {
  const db = getClient();
  if (!db) return "ok";
  const { data, error } = await db.rpc("ct_submit_monthly", {
    p_slug: args.slug,
    p_code: args.code,
    p_answers: args.answers,
    p_team: args.team,
    p_open: args.open,
    p_consent: true,
  });
  if (error) throw error;
  return data as "ok" | "already";
}

/** A kód és a csapat a böngészőfülön belül megmarad, hogy a havi kérdőívnél ne kelljen újra beírni. */
export function rememberParticipant(code: string, team: string | null) {
  try {
    sessionStorage.setItem("ct-code", code);
    if (team) sessionStorage.setItem("ct-team", team);
  } catch {}
}
export function recallParticipant(): { code: string; team: string | null } {
  try {
    return { code: sessionStorage.getItem("ct-code") ?? "", team: sessionStorage.getItem("ct-team") };
  } catch {
    return { code: "", team: null };
  }
}
