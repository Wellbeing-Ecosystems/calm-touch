import type { CSSProperties, ReactNode } from "react";
import type { Status } from "@/lib/pulse-metrics";

export const card: CSSProperties = { background: "#FFFFFF", borderRadius: "16px", padding: "clamp(18px, 2.5vw, 24px)", display: "flex", flexDirection: "column", gap: "12px" };
export const input: CSSProperties = { minHeight: "44px", font: "inherit", border: "1px solid #CDB8A3", borderRadius: "10px", background: "#FFFFFF", padding: "0 12px" };
export const label: CSSProperties = { display: "flex", flexDirection: "column", gap: "6px", fontWeight: 600, fontSize: "14px" };
export const button: CSSProperties = { minHeight: "44px", border: "none", borderRadius: "999px", background: "#3F6E8C", color: "#FFFFFF", font: "inherit", fontWeight: 700, padding: "0 22px", cursor: "pointer" };
export const ghost: CSSProperties = { minHeight: "36px", border: "1px solid #A9C1D1", borderRadius: "999px", background: "transparent", color: "#2C5069", font: "inherit", fontSize: "14px", fontWeight: 600, padding: "0 14px", cursor: "pointer" };

export function H1({ children }: { children: ReactNode }) {
  return <h1 style={{ margin: 0, fontFamily: "var(--ct-display)", fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 700, color: "#2C5069", lineHeight: 1.1 }}>{children}</h1>;
}
export function H2({ children }: { children: ReactNode }) {
  return <h2 style={{ margin: 0, fontFamily: "var(--ct-display)", fontSize: "22px", fontWeight: 700, color: "#2E3631" }}>{children}</h2>;
}

const STATUS: Record<Status, [string, string, string]> = {
  "zöld": ["#DDEBE1", "#1F4A33", "#2F6B4A"],
  "sárga": ["#F6EBD3", "#5E4310", "#B07D18"],
  "piros": ["#F6DEDA", "#6B2119", "#A63D32"],
  "nincs adat": ["#EEF0EA", "#5E6A62", "#A9B39A"],
};
export function StatusPill({ status }: { status: Status }) {
  const [bg, fg, dot] = STATUS[status];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, background: bg, color: fg, borderRadius: "999px", padding: "3px 10px", whiteSpace: "nowrap" }}>
      <span style={{ width: "8px", height: "8px", borderRadius: "4px", background: dot }} />
      {status}
    </span>
  );
}

export function Notice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" }) {
  const c = tone === "warn" ? { background: "#F6EBD3", color: "#5E4310" } : { background: "#DDE8EF", color: "#2C5069" };
  return <div style={{ ...c, borderRadius: "14px", padding: "14px 18px", fontSize: "15px" }}>{children}</div>;
}

export function SetupNotice() {
  return (
    <Notice tone="warn">
      A Supabase még nincs bekötve. A Vercel projekt <b>Settings → Environment Variables</b> oldalán add meg a
      <code> NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> és <code>SUPABASE_SECRET_KEY</code> értékét,
      majd készíts új deployt. Lépések: <code>docs/supabase-beallitas.md</code>.
    </Notice>
  );
}
