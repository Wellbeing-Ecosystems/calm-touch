import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Szerveroldali Supabase-kapcsolat az admin felülethez és a riporthoz.
 * A titkos kulcs (secret / service_role) kizárólag itt, a szerveren használható –
 * soha ne kapjon NEXT_PUBLIC_ előtagot.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const secret = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

export const adminDbConfigured = Boolean(url && secret);

export function adminDb(): SupabaseClient {
  if (!url || !secret) throw new Error("A Supabase nincs beállítva (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY).");
  return createClient(url, secret, { auth: { persistSession: false, autoRefreshToken: false } });
}
