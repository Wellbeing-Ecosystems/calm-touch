import type { Metadata } from "next";
import type { Lang } from "./i18n";
import { siteUrl } from "./site";

/**
 * Oldalankénti SEO-metaadatok: cím, leírás, kanonikus URL, hreflang (hu/en/de), Open Graph, Twitter.
 * A magyar oldalakon pageMeta("hu", ...) szerepel; az angol/német változatba a generátor
 * (scripts/i18n/generate.py) "en"/"de"-t ír.
 */
const prefix = (lang: Lang) => (lang === "hu" ? "" : `/${lang}`);
const OG_LOCALE: Record<Lang, string> = { hu: "hu_HU", en: "en_GB", de: "de_DE" };
const OG_IMAGE = { url: "/calm-touch/images/og-1200x630.jpg", width: 1200, height: 630, type: "image/jpeg" };

export const pagePath = (lang: Lang, path: string) => `/calm-touch${prefix(lang)}${path}`;
/** Abszolút URL (strukturált adatokhoz). */
export const abs = (lang: Lang, path: string) => `${siteUrl}${pagePath(lang, path)}`;

export function pageMeta(lang: Lang, path: string, title: string, description: string, opts: { absolute?: boolean; noindex?: boolean } = {}): Metadata {
  const url = pagePath(lang, path);
  return {
    title: opts.absolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { hu: pagePath("hu", path), en: pagePath("en", path), de: pagePath("de", path), "x-default": pagePath("hu", path) },
    },
    openGraph: { type: "website", siteName: "Calm Touch", locale: OG_LOCALE[lang], title, description, url, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
