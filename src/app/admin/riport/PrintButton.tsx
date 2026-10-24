"use client";

export function PrintButton({ label = "Nyomtatás / PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      className="ct-noprint"
      onClick={() => window.print()}
      style={{ minHeight: "40px", border: "1px solid #A9C1D1", borderRadius: "999px", background: "#FFFFFF", color: "#2C5069", font: "inherit", fontWeight: 600, padding: "0 16px", cursor: "pointer" }}
    >
      {label}
    </button>
  );
}
