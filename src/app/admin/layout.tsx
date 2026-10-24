import type { Metadata } from "next";
import Link from "next/link";
import { currentRole } from "@/lib/admin-session";
import { logout } from "./session-actions";

export const metadata: Metadata = {
  title: "Pulse admin",
  robots: { index: false, follow: false },
};

const nav = { color: "#2C5069", fontWeight: 700, textDecoration: "none", fontSize: "15px" } as const;

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const role = await currentRole();
  return (
    <div style={{ minHeight: "100vh", background: "#FAF6F1", color: "#2E3631", fontSize: "16px", lineHeight: 1.5 }}>
      <header className="ct-noprint" style={{ borderBottom: "1px solid #EADFD2", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "12px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <Link href={role === "admin" ? "/admin" : "/admin/helyszin"} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <img src="/calm-touch/brand/logo-fekvo.webp" alt="Calm Touch" style={{ height: "36px", width: "auto" }} />
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#2C5069", background: "#DDE8EF", borderRadius: "999px", padding: "4px 12px" }}>
              {role === "admin" ? "Pulse admin" : role === "admin2" ? "Pulse helyszín" : "Pulse"}
            </span>
          </Link>
          {role && <nav aria-label="Admin navigáció" style={{ display: "flex", gap: "18px 22px", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/admin/helyszin" style={nav}>Helyszíni beállítás</Link>
            {role === "admin" && (
              <>
                <Link href="/admin" style={nav}>Cégek és alkalmak</Link>
                <Link href="/admin/riport" style={nav}>Havi riport</Link>
                <Link href="/admin/szakemberek" style={nav}>Szakemberek</Link>
              </>
            )}
            <form action={logout} style={{ margin: 0 }}>
              <button type="submit" style={{ minHeight: "40px", padding: "0 16px", border: "1px solid #A65D6B", borderRadius: "999px", background: "transparent", color: "#7E3A4A", font: "inherit", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>Kilépés</button>
            </form>
          </nav>}
        </div>
      </header>
      <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "32px 20px 64px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {children}
      </main>
    </div>
  );
}
