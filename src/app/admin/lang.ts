import "server-only";
import { cookies } from "next/headers";
import { isLang, type Lang } from "@/lib/i18n";

export const ADMIN_LANG_COOKIE = "ct_admin_lang";

/** Az admin felület nyelve (süti); alapértelmezés: magyar. */
export async function adminLang(): Promise<Lang> {
  const v = (await cookies()).get(ADMIN_LANG_COOKIE)?.value;
  return isLang(v) ? v : "hu";
}
