import "server-only";
import { cookies } from "next/headers";
import { roleFromSession, SESSION_COOKIE, type AdminRole } from "./admin-auth";

/** A bejelentkezett admin szerepköre (szerverkomponensben és server actionben). */
export async function currentRole(): Promise<AdminRole | null> {
  return roleFromSession((await cookies()).get(SESSION_COOKIE)?.value);
}

/** Server actionök védelme: a proxy mellett itt is ellenőrzünk. */
export async function requireRole(...allowed: AdminRole[]) {
  const role = await currentRole();
  if (!role || !allowed.includes(role)) throw new Error("Nincs jogosultság ehhez a művelethez.");
  return role;
}
