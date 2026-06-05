import type { Metadata } from "next";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "후기 | 이용 전 참고사항",
  description: "강남구 지역 이용 전 참고할 수 있는 후기 확인 기준과 신뢰할 수 있는 정보 판단 방법을 안내합니다.",
  alternates: {
    canonical: siteUrl("/reviews"),
  },
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="후기"
        title="후기 확인 기준"
        description="후기는 지역, 시간대, 장소 유형, 안내 정확성처럼 실제 예약 판단에 도움이 되는 항목을 중심으로 확인합니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DetailSection
          title="살펴볼 내용"
          items={[
            "과장된 표현보다 예약 과정과 안내 정확성을 확인합니다.",
            "지역과 장소 유형이 비슷한 후기가 실제 판단에 더 도움이 됩니다.",
            "불법적이거나 선정적인 내용은 신뢰 기준에서 제외합니다.",
          ]}
        />
      </section>
    </main>
  );
}
