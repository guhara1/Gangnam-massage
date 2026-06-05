import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { AreaLinkGrid, InfoBand, PageHero } from "@/components/page-sections";
import { gangnamAreas, siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "강남 출장마사지 홈타이 | 강남구 지역별 이용 안내",
  description:
    "강남 출장마사지 홈타이 이용 전 확인할 수 있는 강남구 주요 지역, 이용 절차, 요금 안내, 예약 전 주의사항을 정리했습니다.",
  alternates: {
    canonical: siteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Gangnam Care Guide",
          url: siteUrl("/"),
          inLanguage: "ko-KR",
        }}
      />
      <PageHero
        eyebrow="강남구 지역별 안내"
        title="강남 출장마사지 홈타이, 지역별 이용 안내"
        description="강남구에서 예약 전 살펴볼 수 있는 생활권 정보, 이동 여건, 확인 절차, 요금 안내를 한곳에 정리했습니다."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="content-grid">
          <div className="space-y-8">
            <InfoBand
              title="처음 확인하면 좋은 기준"
              items={[
                "아파트, 오피스텔, 호텔 등 이용 장소의 출입 방식과 주차 가능 여부를 먼저 확인합니다.",
                "늦은 시간 예약은 관리 규정, 소음, 엘리베이터 이용 제한을 함께 살피면 일정 조율이 편합니다.",
                "요금은 코스 시간, 이동 거리, 예약 시간대에 따라 달라질 수 있어 확정 전 안내 내용을 확인합니다.",
              ]}
            />
            <AreaLinkGrid areas={gangnamAreas} />
          </div>
          <aside className="rounded-md border border-[var(--line)] bg-white p-5">
            <h2 className="text-xl font-semibold">빠른 안내</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              강남구 전체 페이지에서 공통 절차를 먼저 확인한 뒤, 실제 이용 장소와 가까운 동별 안내를 살펴보면
              이동 동선과 예약 전 체크 항목을 더 구체적으로 비교할 수 있습니다.
            </p>
            <Link
              href="/gangnam"
              className="mt-5 inline-flex rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
            >
              강남구 전체 보기
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
