import "server-only";
import { headers } from "next/headers";
import QRCode from "qrcode";

/** A QR-linkek alapcíme: PULSE_LINK_BASE, különben az aktuális kérés domainje. */
export async function linkBase() {
  if (process.env.PULSE_LINK_BASE) return process.env.PULSE_LINK_BASE.replace(/\/$/, "");
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function codeLinks(base: string, slug: string, width = 360) {
  const snapUrl = `${base}/calm-touch/pillanatkep?a=${slug}`;
  const qr = await QRCode.toDataURL(snapUrl, { margin: 1, width, color: { dark: "#2C5069", light: "#FFFFFF" } });
  return { snapUrl, monthlyUrl: `${base}/calm-touch/havi-kerdoiv?a=${slug}`, qr };
}
