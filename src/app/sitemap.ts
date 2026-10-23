import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Elérhető: /calm-touch/sitemap.xml – a pszichoszoc.hu robots.txt-jében érdemes hivatkozni rá. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/cegeknek", "/pulse-riport", "/folyamat"];
  return routes.map((route, index) => ({
    url: `${siteUrl}/calm-touch${route}`,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
