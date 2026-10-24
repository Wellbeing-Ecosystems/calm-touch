"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSession, LOGIN_PATH, ONSITE_PATH, roleFromCredentials, SESSION_COOKIE, SESSION_HOURS } from "@/lib/admin-auth";

const cookieOpts = { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/calm-touch/admin" };

export async function login(formData: FormData) {
  const user = String(formData.get("user") ?? "").trim();
  const pass = String(formData.get("pass") ?? "");
  const back = String(formData.get("vissza") ?? "");
  const role = roleFromCredentials(user, pass);
  if (!role) redirect(`${LOGIN_PATH}?hiba=1${back ? `&vissza=${encodeURIComponent(back)}` : ""}`);
  (await cookies()).set(SESSION_COOKIE, await createSession(role), { ...cookieOpts, maxAge: SESSION_HOURS * 3600 });
  // Csak saját admin útvonalra engedünk vissza.
  const target = back.startsWith("/admin") && !back.startsWith(LOGIN_PATH) ? back : role === "admin" ? "/admin" : ONSITE_PATH;
  redirect(role === "admin2" && !target.startsWith(ONSITE_PATH) ? ONSITE_PATH : target);
}

export async function logout() {
  (await cookies()).set(SESSION_COOKIE, "", { ...cookieOpts, maxAge: 0 });
  redirect(`${LOGIN_PATH}?kilepett=1`);
}

/** Az admin felület nyelvének váltása (HU / EN / DE). */
export async function setAdminLang(formData: FormData) {
  const lang = String(formData.get("lang") ?? "");
  const back = String(formData.get("vissza") ?? "");
  if (lang === "hu" || lang === "en" || lang === "de") {
    (await cookies()).set("ct_admin_lang", lang, { ...cookieOpts, maxAge: 365 * 24 * 3600 });
  }
  redirect(back.startsWith("/admin") ? back : "/admin");
}
