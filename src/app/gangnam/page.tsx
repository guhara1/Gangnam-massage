import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { AreaLinkGrid, DetailSection, FaqList, PageHero } from "@/components/page-sections";
import { gangnamAreas, gangnamOverview, siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: gangnamOverview.title,
  description: gangnamOverview.description,
  alternates: {
    canonical: siteUrl("/gangnam"),
  },
};

export default function GangnamPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: gangnamOverview.title,
          description: gangnamOverview.description,
          url: siteUrl("/gangnam"),
          inLanguage: "ko-KR",
          about: {
            "@type": "AdministrativeArea",
            name: "강남구",
          },
        }}
      />
      <PageHero
        eyebrow="강남구 전체"
        title={gangnamOverview.h1}
        description="강남구는 업무지구, 대형 상권, 주거 단지, 역세권 숙소가 함께 있어 이용 장소에 따라 확인해야 할 항목이 달라집니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="content-grid">
          <div className="space-y-6">
            <DetailSection
              title="생활권별 확인 포인트"
              items={[
                "테헤란로 업무권은 야근과 출장 일정이 많아 시작 시간을 여유 있게 잡는 편이 좋습니다.",
                "압구정, 청담, 신사 일대는 상권과 주거지가 가까워 건물 출입 방식 확인이 중요합니다.",
                "수서, 세곡, 자곡, 율현 권역은 차량 이동 시간이 길어질 수 있어 사전 예약이 안정적입니다.",
              ]}
            />
            <DetailSection
              title="예약 전 공통 절차"
              items={[
                "이용 장소의 정확한 주소와 건물명, 출입 방법을 확인합니다.",
                "요금은 코스 시간, 이동 여건, 예약 시간대에 따라 안내받은 뒤 확정합니다.",
                "법과 이용 규정에 어긋나거나 선정적인 요청은 안내 대상이 아니며 진행하지 않습니다.",
              ]}
            />
            <AreaLinkGrid areas={gangnamAreas} />
          </div>
          <FaqList
            faq={[
              {
                question: "강남구 전체 페이지와 동별 페이지는 어떻게 다르나요?",
                answer: "전체 페이지는 공통 절차를, 동별 페이지는 생활권과 이동 동선, 예약 전 확인사항을 더 구체적으로 다룹니다.",
              },
              {
                question: "요금은 어디에서 확인하나요?",
                answer: "이용 요금 메뉴에서 기본 기준을 확인하고, 실제 예약 전에는 시간과 위치를 기준으로 다시 안내받는 방식이 좋습니다.",
              },
              {
                question: "당일 문의도 가능한가요?",
                answer: "가능 여부는 지역과 시간대별 이동 상황에 따라 달라지므로, 정확한 주소 기준으로 확인합니다.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
