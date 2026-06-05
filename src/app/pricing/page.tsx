import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing-cards";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "이용 요금 | 강남 방문 마사지 코스별 기본 요금",
  description: "60분, 90분, 120분 코스별 기본 요금과 예약 전 최종 비용 확인 기준을 안내합니다.",
  alternates: {
    canonical: siteUrl("/pricing"),
  },
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="이용 요금"
        title="코스별 기본 요금 안내"
        description="60·90·120분 코스별 기본 요금입니다. 숨겨진 추가 비용 없이 예약 전 총 비용과 취소 규정을 확인합니다."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6">
        <PricingCards />
        <DetailSection
          title="예약 전 최종 확인 항목"
          items={[
            "기본 시간과 연장 가능 여부를 먼저 확인합니다.",
            "심야 시간, 장거리 이동, 주차 여건에 따라 안내 내용이 달라질 수 있습니다.",
            "최종 금액은 예약 확정 전 고지된 내용 기준으로 확인합니다.",
          ]}
        />
      </section>
    </main>
  );
}
