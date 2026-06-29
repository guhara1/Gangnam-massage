import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // 색인 속도를 높이기 위해 주요 검색엔진 크롤러를 모두 허용합니다.
  // Yeti=네이버, Daumoa=다음/카카오, Bingbot=Bing(IndexNow), Googlebot=구글.
  const crawlers = ["*", "Googlebot", "Yeti", "Daumoa", "Bingbot", "Yandex"];

  return {
    rules: crawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    sitemap: [siteUrl("/sitemap.xml")],
    host: siteUrl("/").replace(/\/$/, ""),
  };
}
