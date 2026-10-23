/**
 * Admin szerepkörök (HTTP Basic Auth):
 * - admin  (ADMIN_USER / ADMIN_PASSWORD): minden – cégek, alkalmak, riportok, szakemberek értékelése.
 * - admin2 (ADMIN2_USER / ADMIN2_PASSWORD): csak a helyszíni beállítás (cég + szakember → QR-kód).
 *   Riportot és szakemberértékelést nem lát.
 */
export type AdminRole = "admin" | "admin2";

export function roleFromAuthorization(header: string | null | undefined): AdminRole | null {
  if (!header?.startsWith("Basic ")) return null;
  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return null;
  }
  const i = decoded.indexOf(":");
  if (i < 0) return null;
  const user = decoded.slice(0, i);
  const pass = decoded.slice(i + 1);
  const adminPass = process.env.ADMIN_PASSWORD;
  if (adminPass && user === (process.env.ADMIN_USER ?? "admin") && pass === adminPass) return "admin";
  const admin2Pass = process.env.ADMIN2_PASSWORD;
  if (admin2Pass && user === (process.env.ADMIN2_USER ?? "admin2") && pass === admin2Pass) return "admin2";
  return null;
}

/** Az admin2 által elérhető útvonal (basePath nélkül). */
export const ONSITE_PATH = "/admin/helyszin";
