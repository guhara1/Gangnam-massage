import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";
import { pageContent } from "@/lib/editorial-pages";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const content = pageContent.pricing;

export const metadata: Metadata = {
  title: "이용 요금 | 코스별 기본 요금 안내",
  description: "60분, 90분, 120분 코스별 기본 요금과 예약 전 최종 비용 확인 기준을 안내합니다.",
  alternates: {
    canonical: siteUrl("/pricing"),
  },
};

export default function PricingPage() {
  return <EditorialPage path="/pricing" {...content} />;
}
