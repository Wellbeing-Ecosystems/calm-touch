import { login } from "../session-actions";
import { adminLang } from "../lang";
import { ADMIN } from "../strings";

export const dynamic = "force-dynamic";

const input = { minHeight: "48px", font: "inherit", padding: "0 14px", border: "1px solid #CDB8A3", borderRadius: "12px", background: "#FFFFFF" } as const;

export default async function BelepesPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  const t = ADMIN[await adminLang()].login;
  return (
    <div style={{ maxWidth: "420px", width: "100%", margin: "24px auto 0", background: "#FFFFFF", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <h1 style={{ margin: 0, fontFamily: "var(--ct-display)", fontSize: "28px", color: "#2C5069" }}>{t.title}</h1>
      {sp.kilepett && <p role="status" style={{ margin: 0, background: "#E9EBD6", borderRadius: "12px", padding: "10px 14px", fontSize: "14px" }}>{t.loggedOut}</p>}
      {sp.hiba && <p role="alert" style={{ margin: 0, background: "#FBEFF0", border: "1px solid #A65D6B", color: "#5A4248", borderRadius: "12px", padding: "10px 14px", fontSize: "14px" }}>{t.wrong}</p>}
      <form action={login} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <input type="hidden" name="vissza" value={sp.vissza ?? ""} />
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: 600 }}>
          {t.user}
          <input name="user" autoComplete="username" required autoCapitalize="none" style={input} />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: 600 }}>
          {t.pass}
          <input name="pass" type="password" autoComplete="current-password" required style={input} />
        </label>
        <button type="submit" style={{ minHeight: "50px", border: "none", borderRadius: "999px", background: "#7E3A4A", color: "#FFFFFF", font: "inherit", fontWeight: 600, cursor: "pointer" }}>{t.submit}</button>
      </form>
      <span style={{ fontSize: "13px", color: "#5E6A62" }}>{t.note}</span>
    </div>
  );
}
