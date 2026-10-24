import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Elérhető: /calm-touch/sitemap.xml – a pszichoszoc.hu robots.txt-jében érdemes hivatkozni rá. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/cegeknek", "/pulse-riport", "/folyamat", "/modszertan", "/pulse-plus"];
  return ["", "/en", "/de"].flatMap((prefix) =>
    routes.map((route, index) => ({
      url: `${siteUrl}/calm-touch${prefix}${route}`,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? (prefix ? 0.9 : 1) : 0.7,
    })),
  );
}
