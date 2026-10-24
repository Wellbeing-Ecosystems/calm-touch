/**
 * Admin szerepkörök és belépés (saját belépőoldal + aláírt, HttpOnly süti):
 * - admin  (ADMIN_USER / ADMIN_PASSWORD): minden – cégek, alkalmak, riportok, szakemberek értékelése.
 * - admin2 (ADMIN2_USER / ADMIN2_PASSWORD): csak a helyszíni beállítás (cég + szakember → QR-kód).
 *   Riportot és szakemberértékelést nem lát.
 * A süti 12 óráig érvényes; a Kilépés gomb törli. Jelszócsere után minden korábbi belépés érvényét veszti.
 */
export type AdminRole = "admin" | "admin2";

export const SESSION_COOKIE = "ct_admin";
export const SESSION_HOURS = 12;
/** Az admin2 által elérhető útvonal (basePath nélkül). */
export const ONSITE_PATH = "/admin/helyszin";
export const LOGIN_PATH = "/admin/belepes";

/** Felhasználónév + jelszó → szerepkör (vagy null). */
export function roleFromCredentials(user: string, pass: string): AdminRole | null {
  const adminPass = process.env.ADMIN_PASSWORD;
  if (adminPass && user === (process.env.ADMIN_USER ?? "admin") && safeEqual(pass, adminPass)) return "admin";
  const admin2Pass = process.env.ADMIN2_PASSWORD;
  if (admin2Pass && user === (process.env.ADMIN2_USER ?? "admin2") && safeEqual(pass, admin2Pass)) return "admin2";
  return null;
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

/** Aláíró kulcs: SESSION_SECRET, ennek hiányában a két jelszóból képzett érték (jelszócsere = kiléptetés). */
function secret() {
  return process.env.SESSION_SECRET || `ct|${process.env.ADMIN_PASSWORD ?? ""}|${process.env.ADMIN2_PASSWORD ?? ""}`;
}

async function hmac(data: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(data)));
  return Array.from(sig, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function createSession(role: AdminRole) {
  const exp = Date.now() + SESSION_HOURS * 3600 * 1000;
  const body = `${role}.${exp}`;
  return `${body}.${await hmac(body)}`;
}

export async function roleFromSession(token: string | null | undefined): Promise<AdminRole | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [role, exp, sig] = parts;
  if (role !== "admin" && role !== "admin2") return null;
  if (!/^\d+$/.test(exp) || Number(exp) < Date.now()) return null;
  return safeEqual(sig, await hmac(`${role}.${exp}`)) ? role : null;
}
