import { NextResponse, type NextRequest } from "next/server";
import { LOGIN_PATH, ONSITE_PATH, roleFromSession, SESSION_COOKIE } from "@/lib/admin-auth";

/**
 * Az admin felület (/calm-touch/admin) saját belépőoldallal védett, két szerepkörrel:
 * admin (minden) és admin2 (csak a helyszíni beállítás). Lásd: src/lib/admin-auth.ts.
 * Átirányítás helyett belső rewrite-ot használunk (a böngésző címsora nem változik), így a
 * pszichoszoc.hu rewrite mögött sem kerül át a felhasználó a vercel.app domainre.
 */
const show = (request: NextRequest, path: string) => NextResponse.rewrite(new URL(`/calm-touch${path}`, request.url));

export async function proxy(request: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return new NextResponse("Az admin felület nincs beállítva (ADMIN_PASSWORD).", { status: 503 });
  }
  const path = request.nextUrl.pathname;
  if (path === LOGIN_PATH) return NextResponse.next();
  const role = await roleFromSession(request.cookies.get(SESSION_COOKIE)?.value);
  if (!role) return show(request, `${LOGIN_PATH}?vissza=${encodeURIComponent(path + request.nextUrl.search)}`);
  if (role === "admin2" && !(path === ONSITE_PATH || path.startsWith(`${ONSITE_PATH}/`))) return show(request, ONSITE_PATH);
  return NextResponse.next();
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
