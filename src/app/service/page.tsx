import type { Metadata } from "next";
import { DetailSection, PageHero } from "@/components/page-sections";
import { siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "서비스 안내 | 강남구 지역 이용 정보",
  description: "강남구 지역 이용 전 확인할 수 있는 서비스 범위, 예약 흐름, 이용 장소 기준을 안내합니다.",
  alternates: {
    canonical: siteUrl("/service"),
  },
};

export default function ServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="서비스 안내"
        title="서비스 이용 범위와 확인 절차"
        description="예약 전 장소, 시간, 출입 방식, 이용 규정을 확인해 일정이 무리 없이 진행되도록 돕는 안내 페이지입니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <DetailSection
          title="기본 안내"
          items={[
            "서비스는 합법적인 휴식 목적의 안내와 예약 절차를 기준으로 설명합니다.",
            "선정적인 요청, 위법 행위, 치료나 회복을 약속하는 표현은 다루지 않습니다.",
            "이용 장소의 규정과 주변 거주 환경을 존중하는 것을 전제로 합니다.",
          ]}
        />
      </section>
    </main>
  );
}
