import { NextResponse, type NextRequest } from "next/server";

/**
 * Az admin felület (/calm-touch/admin) HTTP Basic Auth-tal védett.
 * Beállítás a Vercelen: ADMIN_PASSWORD (kötelező), ADMIN_USER (alapértelmezés: admin).
 * Jelszó nélkül az admin felület nem érhető el.
 */
export function proxy(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return new NextResponse("Az admin felület nincs beállítva (ADMIN_PASSWORD).", { status: 503 });
  }
  const user = process.env.ADMIN_USER ?? "admin";
  const header = request.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const [u, ...rest] = atob(header.slice(6)).split(":");
      if (u === user && rest.join(":") === password) return NextResponse.next();
    } catch {}
  }
  return new NextResponse("Bejelentkezés szükséges.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Calm Touch admin", charset="UTF-8"' },
  });
}

export const config = { matcher: ["/admin", "/admin/:path*"] };
