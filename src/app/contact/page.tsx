import type { Metadata } from "next";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "예약 문의 | 강남구 이용 안내",
  description: "예약 문의 전 준비하면 좋은 주소, 시간, 출입 방식, 요금 확인 항목을 안내합니다.",
  alternates: {
    canonical: siteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="예약 문의"
        title="문의 전 준비할 정보"
        description="정확한 안내를 위해 지역, 주소, 희망 시간, 이용 장소의 출입 조건을 먼저 정리해두면 좋습니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DetailSection
          title="필수 확인"
          items={[
            "도로명 주소와 건물명 또는 단지명을 함께 확인합니다.",
            "희망 시작 시간과 조정 가능한 시간을 정리합니다.",
            "건물 출입 방식, 주차 가능 여부, 숙소 규정을 확인합니다.",
          ]}
        />
      </section>
    </main>
  );
}
