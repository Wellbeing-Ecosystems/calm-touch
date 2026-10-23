import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./calm-touch.css";

const display = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--ct-display",
  display: "swap",
});
const text = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--ct-text",
  display: "swap",
});

const description =
  "15–20 perces, ruhán keresztüli, gyengéd érintéses mentális felfrissülés az irodában, Calm-Touch Pulse előtte–utána méréssel.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Calm Touch – Stresszoldás érintéssel", template: "%s | Calm Touch" },
  description,
  icons: {
    icon: [
      { url: "/calm-touch/brand/favicon.ico", sizes: "any" },
      { url: "/calm-touch/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/calm-touch/brand/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/calm-touch/brand/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Calm Touch",
    title: "Calm Touch – Stresszoldás érintéssel",
    description,
    url: "/calm-touch",
    images: [{ url: "/calm-touch/images/og-1200x630.jpg", width: 1200, height: 630, type: "image/jpeg" }],
  },
  twitter: { card: "summary_large_image", title: "Calm Touch – Stresszoldás érintéssel", description, images: ["/calm-touch/images/og-1200x630.jpg"] },
};

export const viewport = { themeColor: "#7D8B3E" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`ct-root ${display.variable} ${text.variable}`}>{children}</body>
    </html>
  );
}
