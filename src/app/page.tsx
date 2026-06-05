import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PricingCards } from "@/components/pricing-cards";
import { gangnamAreas, siteUrl } from "@/lib/areas";

export const dynamic = "force-static";

const pageTitle = "강남 출장마사지 | 합법 방문 마사지 예약 안내 - Gangnam Care Guide";
const pageDescription =
  "강남구 역삼·논현·삼성·청담 권역 방문 마사지 예약 안내. 코스, 요금, 가능 지역, 취소 규정을 투명하게 확인하세요.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: siteUrl("/"),
  },
};

const serviceCourses = [
  {
    title: "아로마 릴렉스 관리",
    description: "오일 기반의 부드러운 리듬으로 몸의 긴장을 낮추고 조용한 휴식을 돕는 코스입니다.",
    time: "60분 / 90분 / 120분",
  },
  {
    title: "스포츠 바디케어",
    description: "목, 어깨, 허리처럼 피로가 쌓이기 쉬운 부위를 중심으로 진행하는 바디케어입니다.",
    time: "60분 / 90분",
  },
  {
    title: "프리미엄 회복 관리",
    description: "출장, 장거리 이동, 늦은 업무 후 충분한 시간을 두고 맞춤 상담으로 구성하는 코스입니다.",
    time: "90분 / 120분",
  },
];

const trustItems = [
  "건전 관리 범위와 불가 요청을 예약 전 명확히 안내합니다.",
  "방문 가능 여부는 정확한 주소와 시간대 기준으로 확인합니다.",
  "총 비용, 취소 규정, 준비사항은 확정 전에 안내합니다.",
  "호텔, 오피스텔, 자택 등 장소별 출입 규정을 우선합니다.",
];

const processSteps = [
  { title: "문의", text: "지역, 희망 시간, 이용 장소 유형을 먼저 확인합니다." },
  { title: "조건 확인", text: "주소, 출입 방식, 주차 가능 여부, 이동 시간을 점검합니다." },
  { title: "코스 선택", text: "관리 목적과 소요 시간을 기준으로 코스를 정합니다." },
  { title: "방문 진행", text: "안내된 범위 안에서 합법적이고 건전하게 진행합니다." },
];

const faqs = [
  {
    question: "강남 전 지역 방문 가능한가요?",
    answer: "강남구 대부분 지역은 가능하지만 시간대와 정확한 주소에 따라 가능 여부가 달라질 수 있습니다.",
  },
  {
    question: "호텔이나 오피스텔도 가능한가요?",
    answer: "출입이 가능한 장소라면 예약 전 건물 규정과 방문 가능 여부를 확인한 뒤 진행합니다.",
  },
  {
    question: "어떤 요청은 불가한가요?",
    answer: "건전 마사지 외 위법하거나 성적 성격의 요청은 진행하지 않으며, 해당 요청이 있으면 예약이 취소될 수 있습니다.",
  },
  {
    question: "가격은 어떻게 확인하나요?",
    answer: "코스, 시간, 방문 지역, 이동 여건에 따라 예약 전 총 비용을 안내합니다.",
  },
];

export default function HomePage() {
  const visibleAreas = gangnamAreas.slice(0, 12);

  return (
    <main className="bg-[#050503] text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: pageTitle,
              url: siteUrl("/"),
              description: pageDescription,
              inLanguage: "ko-KR",
            },
            {
              "@type": "Service",
              name: "강남 방문 마사지 예약 안내",
              serviceType: "방문 마사지 예약 안내",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "서울특별시 강남구",
              },
              provider: {
                "@type": "Organization",
                name: "Gangnam Care Guide",
              },
            },
          ],
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2b2618]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(183,143,74,0.20),transparent_34rem),linear-gradient(135deg,#0a0d09_0%,#050503_62%,#000_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4 text-sm font-semibold text-[#c9a45f]">
              <span className="h-px w-14 bg-[#c9a45f]" />
              합법 방문 마사지 예약 안내
            </div>
            <h1 className="max-w-5xl text-[clamp(2.6rem,5.8vw,6.1rem)] font-black leading-[0.98] tracking-[0] text-white">
              강남 출장마사지
              <span className="mt-3 block text-[#d6b56d]">집과 호텔에서 받는 합법 방문 마사지</span>
            </h1>
            <p className="mt-8 max-w-3xl border-l border-[#c9a45f] pl-6 text-lg leading-8 text-white sm:text-xl">
              강남 출장마사지 예약 전 코스, 요금, 관리 범위, 취소 규정을 투명하게 확인할 수 있도록
              역삼·논현·삼성·청담 권역 중심의 방문 가능 기준을 정리했습니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#d6b56d] px-7 py-4 text-sm font-bold text-black hover:bg-[#f0d58a]"
              >
                예약 문의
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-[#8e7440] px-7 py-4 text-sm font-bold text-[#f0d58a] hover:border-[#d6b56d] hover:bg-[#11100b]"
              >
                코스와 요금 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">EDITORIAL GUIDE</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              예약 전에 알아야 할 기준을 먼저 보여드립니다.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#e8e2d6]">
            <p className="text-2xl leading-10 text-white">
              이 페이지는 자극적인 문구로 클릭을 유도하기보다, 강남구에서 방문 관리를 예약하기 전 실제로 확인해야 할
              정보만 정리한 신뢰형 랜딩 페이지입니다.
            </p>
            <p>
              운영 범위, 코스별 시간, 요금 확인 방식, 방문 가능 지역, 취소 기준, 불가 요청을 한 화면에서 비교할 수
              있도록 구성했습니다. 장소와 시간에 따라 가능 여부가 달라질 수 있으므로 확정 전에는 정확한 주소 기준으로
              상담을 진행합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-4">
          {trustItems.map((item, index) => (
            <article key={item} className="border-l border-[#6f5a31] pl-5">
              <p className="text-xs font-bold text-[#c9a45f]">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-lg font-bold leading-7 text-white">{item}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#2b2618] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">COURSES</p>
            <h2 className="mt-3 text-4xl font-black text-white">서비스 코스</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#cfc6b4]">
            코스는 시간과 관리 목적에 따라 선택합니다. 가격은 방문 지역, 예약 시간대, 이동 여건에 따라 확정 전 다시 안내합니다.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCourses.map((course) => (
            <article key={course.title} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-7">
              <h3 className="text-2xl font-black text-[#d6b56d]">{course.title}</h3>
              <p className="mt-5 min-h-28 text-base leading-8 text-white">{course.description}</p>
              <p className="mt-6 border-t border-[#2b2618] pt-5 text-sm font-bold text-[#c9a45f]">{course.time}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <PricingCards />
      </section>

      <section className="bg-[#0a0a07]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">AREA</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">강남 방문 가능 지역</h2>
            <p className="mt-6 text-lg leading-9 text-[#d8d0c1]">
              강남구 내 역삼동, 논현동, 삼성동, 청담동, 대치동, 신사동, 압구정동 일부 지역 방문이 가능합니다.
              정확한 주소와 시간대 기준으로 가능 여부를 확인합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {visibleAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/gangnam/${area.slug}`}
                className="rounded-md border border-[#2b2618] bg-[#050503] px-5 py-4 text-center font-bold text-white hover:border-[#d6b56d] hover:text-[#d6b56d]"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold text-[#c9a45f]">RESERVATION</p>
          <h2 className="mt-3 text-4xl font-black text-white">예약 절차</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-6">
              <p className="text-sm font-black text-[#c9a45f]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#d8d0c1]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="text-sm font-bold text-[#c9a45f]">POLICY</p>
          <blockquote className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            “건전 관리 범위 밖의 요청은 진행하지 않습니다.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#d8d0c1]">
            성적 성격의 요청, 위법 행위, 과도한 요구가 있을 경우 예약은 취소될 수 있습니다. 이용 장소의 규정과
            주변 환경을 존중하는 것을 기본 원칙으로 합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-white">자주 묻는 질문</h2>
          </div>
          <div className="divide-y divide-[#2b2618] border-y border-[#2b2618]">
            {faqs.map((faq) => (
              <details key={faq.question} className="py-6">
                <summary className="cursor-pointer text-xl font-bold text-white">{faq.question}</summary>
                <p className="mt-4 text-base leading-8 text-[#d8d0c1]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
