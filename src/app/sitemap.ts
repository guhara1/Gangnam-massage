import type { MetadataRoute } from "next";
import { gangnamAreas, siteUrl } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/gangnam", "/service", "/pricing", "/guide", "/reviews", "/contact"];
  const areaRoutes = gangnamAreas.map((area) => `/gangnam/${area.slug}`);

  return [...staticRoutes, ...areaRoutes].map((path) => ({
    url: siteUrl(path),
    lastModified: now,
    changeFrequency: path.startsWith("/gangnam") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path === "/gangnam" ? 0.9 : 0.7,
  }));
}
