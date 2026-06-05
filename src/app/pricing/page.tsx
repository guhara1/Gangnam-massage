import type { Metadata } from "next";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "이용 요금 | 예약 전 확인 기준",
  description: "이용 시간, 위치, 이동 여건에 따라 달라질 수 있는 요금 확인 기준과 예약 전 체크 항목을 안내합니다.",
  alternates: {
    canonical: siteUrl("/pricing"),
  },
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="이용 요금"
        title="요금 확인 전 살펴볼 기준"
        description="요금은 코스 시간, 이동 거리, 예약 시간대, 이용 장소의 출입 조건을 함께 확인한 뒤 안내받는 것이 좋습니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DetailSection
          title="확인 항목"
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
