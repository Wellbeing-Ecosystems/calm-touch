import { NextResponse, type NextRequest } from "next/server";
import { ONSITE_PATH, roleFromAuthorization } from "@/lib/admin-auth";

/**
 * Az admin felület (/calm-touch/admin) HTTP Basic Auth-tal védett, két szerepkörrel:
 * admin (minden) és admin2 (csak a helyszíni beállítás). Lásd: src/lib/admin-auth.ts.
 */
export function proxy(request: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return new NextResponse("Az admin felület nincs beállítva (ADMIN_PASSWORD).", { status: 503 });
  }
  const role = roleFromAuthorization(request.headers.get("authorization"));
  if (!role) {
    return new NextResponse("Bejelentkezés szükséges.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Calm Touch admin", charset="UTF-8"' },
    });
  }
  const path = request.nextUrl.pathname;
  if (role === "admin2" && !(path === ONSITE_PATH || path.startsWith(`${ONSITE_PATH}/`))) {
    const url = request.nextUrl.clone();
    url.pathname = ONSITE_PATH;
    url.search = "";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
