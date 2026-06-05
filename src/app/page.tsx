import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { AreaLinkGrid, InfoBand, LongFormSection, PageHero } from "@/components/page-sections";
import { gangnamAreas, siteUrl } from "@/lib/areas";
import { homeLongForm } from "@/lib/content";

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
        description="강남구에서 예약 전 확인할 수 있는 생활권 정보, 이동 여건, 확인 절차, 요금 안내를 지역별로 정리했습니다."
        highlights={[
          "메뉴와 URL은 지역명 중심으로 구성",
          "각 지역 페이지는 생활권과 이동 동선이 다르게 작성",
          "위법·선정적·치료 보장 표현 없이 예약 전 확인사항만 안내",
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8">
          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">01</p>
              <h2 className="mt-2 text-xl font-semibold text-white">지역별 생활권 확인</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                신사동, 압구정동, 삼성동, 수서동처럼 같은 강남구 안에서도 이용 장소와 이동 방식이 다릅니다.
              </p>
            </article>
            <article className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">02</p>
              <h2 className="mt-2 text-xl font-semibold text-white">예약 전 체크</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                주소, 출입 방식, 주차 가능 여부, 시간대별 이동 여건을 먼저 확인하면 현장 혼선을 줄일 수 있습니다.
              </p>
            </article>
            <article className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">03</p>
              <h2 className="mt-2 text-xl font-semibold text-white">도움되는 콘텐츠 기준</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                검색용 반복 문구보다 실제 문의 전에 필요한 판단 기준과 안전한 이용 범위를 우선합니다.
              </p>
            </article>
          </section>

          <div className="content-grid">
            <div className="space-y-8">
              <LongFormSection title="강남구 이용 전 상세 안내" paragraphs={homeLongForm} />
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
            <aside className="h-fit rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="text-sm font-semibold text-[var(--accent)]">빠른 이동</p>
              <h2 className="mt-2 text-xl font-semibold text-white">강남구 전체 가이드</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                강남구 전체 페이지에서 공통 절차를 먼저 확인한 뒤 실제 이용 장소와 가까운 동별 안내를 살펴보면
                이동 동선과 예약 전 체크 항목을 더 구체적으로 비교할 수 있습니다.
              </p>
              <Link
                href="/gangnam"
                className="mt-5 inline-flex rounded-md bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black hover:bg-[var(--accent-strong)]"
              >
                강남구 전체 보기
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
