import type { Metadata } from "next";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "이용 가이드 | 예약 전 준비사항",
  description: "주소 확인, 출입 방식, 이용 시간, 주변 환경 등 예약 전 준비사항을 단계별로 안내합니다.",
  alternates: {
    canonical: siteUrl("/guide"),
  },
};

export default function GuidePage() {
  return (
    <main>
      <PageHero
        eyebrow="이용 가이드"
        title="예약 전 준비사항"
        description="처음 이용하는 경우에도 주소, 시간, 출입 방식, 장소 규정을 차례로 확인하면 일정 조율이 쉬워집니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DetailSection
          title="진행 순서"
          items={[
            "이용 지역과 정확한 주소를 확인합니다.",
            "희망 시간과 이용 장소의 출입 규정을 함께 확인합니다.",
            "요금과 준비사항을 안내받은 뒤 예약을 확정합니다.",
          ]}
        />
      </section>
    </main>
  );
}
