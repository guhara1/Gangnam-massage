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
    description: "편안한 휴식을 위한 오일 기반 관리입니다. 강한 압보다 안정적인 리듬과 휴식감을 원하는 분에게 적합합니다.",
    time: "60분 / 90분 / 120분",
    target: "호텔·오피스텔·자택에서 조용한 관리를 원하는 고객",
  },
  {
    title: "스포츠 바디케어",
    description: "목, 어깨, 허리처럼 일상 피로가 쌓이기 쉬운 부위를 중심으로 진행하는 바디케어입니다.",
    time: "60분 / 90분",
    target: "장시간 업무, 운전, 출장 후 몸의 긴장을 풀고 싶은 고객",
  },
  {
    title: "프리미엄 회복 관리",
    description: "이동과 업무가 겹친 날에 맞춰 관리 범위와 시간을 상담 후 조율하는 맞춤형 코스입니다.",
    time: "90분 / 120분",
    target: "일정 후 충분한 휴식 시간이 필요한 고객",
  },
];

const trustItems = [
  "운영 주체와 예약 안내 기준을 페이지에 명확히 공개합니다.",
  "관리사 경력과 응대 기준은 예약 전 확인 가능한 범위에서 안내합니다.",
  "수건, 오일, 손 위생 등 기본 위생 관리 기준을 사전에 설명합니다.",
  "방문 가능 시간과 장소는 정확한 주소 기준으로 확인합니다.",
  "성적 성격의 요청, 위법 행위, 과도한 요구는 진행하지 않습니다.",
  "결제, 취소, 환불 기준은 예약 확정 전 안내합니다.",
];

const processSteps = [
  { title: "문의", text: "방문 지역, 희망 시간, 이용 장소 유형을 알려주세요." },
  { title: "지역/시간 확인", text: "정확한 주소와 이동 가능 시간, 주차 또는 출입 조건을 확인합니다." },
  { title: "코스 선택", text: "관리 목적, 소요 시간, 인원, 총 비용을 확정 전 안내합니다." },
  { title: "방문 관리 진행", text: "안내된 범위 안에서 합법적이고 건전한 방문 관리를 진행합니다." },
];

const faqs = [
  {
    question: "강남 전 지역 방문 가능한가요?",
    answer: "강남구 대부분 지역은 가능하지만, 시간대와 정확한 주소에 따라 가능 여부가 달라질 수 있습니다.",
  },
  {
    question: "호텔이나 오피스텔도 가능한가요?",
    answer: "출입이 가능한 장소라면 예약 전 건물 규정과 방문 가능 여부를 확인한 뒤 진행합니다.",
  },
  {
    question: "예약 취소는 어떻게 되나요?",
    answer: "예약 확정 후 취소 시점에 따라 취소 규정이 적용될 수 있으며, 확정 전 기준을 안내합니다.",
  },
  {
    question: "어떤 요청은 불가한가요?",
    answer: "건전 마사지 외 위법하거나 성적 성격의 요청은 진행하지 않으며, 해당 요청이 있으면 예약이 취소될 수 있습니다.",
  },
  {
    question: "가격은 어떻게 확인하나요?",
    answer: "코스, 시간, 방문 지역, 이동 여건에 따라 예약 전 총 비용을 안내합니다.",
  },
  {
    question: "관리 전 준비할 것이 있나요?",
    answer: "정확한 주소, 공동현관 또는 프런트 출입 방식, 주차 가능 여부, 희망 시작 시간을 미리 정리하면 좋습니다.",
  },
];

export default function HomePage() {
  const visibleAreas = gangnamAreas.slice(0, 10);

  return (
    <main>
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
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />

      <section className="border-b border-[var(--line)] bg-[linear-gradient(135deg,#07140c_0%,#020403_58%,#000_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold text-[var(--accent)]">합법 방문 마사지 예약 안내</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-[0] text-white sm:text-5xl lg:text-6xl">
              강남 출장마사지 · 집과 호텔에서 받는 합법 방문 마사지
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              강남 출장마사지 예약 전 코스, 요금, 관리 범위, 취소 규정을 투명하게 확인할 수 있도록
              역삼·논현·삼성·청담 권역 중심의 방문 가능 기준을 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-bold text-black hover:bg-[var(--accent-strong)]"
              >
                예약 문의
              </Link>
              <Link
                href="/pricing"
                className="rounded-md border border-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--accent)] hover:bg-[var(--panel)]"
              >
                코스와 요금 보기
              </Link>
            </div>
          </div>
          <aside className="self-end rounded-md border border-[var(--line)] bg-black/45 p-5">
            <h2 className="text-lg font-semibold text-[var(--accent-strong)]">예약 전 핵심 확인</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white">
              <li className="border-l-2 border-[var(--accent)] pl-3">정확한 주소 기준으로 방문 가능 여부 확인</li>
              <li className="border-l-2 border-[var(--accent)] pl-3">총 비용과 취소 규정 사전 안내</li>
              <li className="border-l-2 border-[var(--accent)] pl-3">건전 관리 범위 외 요청은 진행 불가</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10">
          <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[var(--accent)]">Trust & Safety</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">신뢰·안전·합법 운영 안내</h2>
            <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">
              방문 관리 서비스는 오해가 생기기 쉬운 업종이므로 예약 전 가능 범위와 불가 범위를 분명히 안내합니다.
              아래 항목은 검색엔진용 문구가 아니라 실제 상담과 예약 과정에서 확인해야 하는 기준입니다.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trustItems.map((item) => (
                <div key={item} className="rounded-md border border-[var(--line)] bg-black/35 p-4 text-sm leading-7 text-white">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--accent)]">Courses</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">서비스 코스와 이용 시간</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
                가격은 코스, 시간, 방문 지역, 이동 여건에 따라 예약 전 총 비용으로 안내합니다.
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {serviceCourses.map((course) => (
                <article key={course.title} className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
                  <h3 className="text-xl font-semibold text-[var(--accent-strong)]">{course.title}</h3>
                  <p className="mt-3 leading-7 text-white">{course.description}</p>
                  <dl className="mt-5 grid gap-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[var(--accent)]">시간</dt>
                      <dd className="mt-1 text-[var(--muted)]">{course.time}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--accent)]">대상</dt>
                      <dd className="mt-1 text-[var(--muted)]">{course.target}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <PricingCards />

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold text-[var(--accent)]">Gangnam Area</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">강남 방문 가능 지역</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                강남구 내 역삼동, 논현동, 삼성동, 청담동, 대치동, 신사동, 압구정동 일부 지역 방문이 가능합니다.
                예약 시 정확한 주소와 시간대 기준으로 가능 여부를 확인합니다.
              </p>
              <Link
                href="/gangnam"
                className="mt-5 inline-flex rounded-md border border-[var(--accent)] px-4 py-3 text-sm font-bold text-[var(--accent)] hover:bg-black"
              >
                강남구 지역 안내 보기
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {visibleAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/gangnam/${area.slug}`}
                  className="rounded-md border border-[var(--line)] bg-[var(--panel)] px-4 py-4 font-semibold text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <p className="text-sm font-semibold text-[var(--accent)]">Reservation</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">예약 절차</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
                  <p className="text-sm font-bold text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold text-[var(--accent)]">Hygiene</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">관리사·위생 기준</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                관리 전후 손 위생, 개인 용품 정리, 수건과 오일 사용 기준을 확인합니다. 관리사 정보는 가능한 범위에서
                경력과 응대 기준을 안내하며, 이용 장소의 규정과 주변 환경을 우선합니다.
              </p>
            </article>
            <article className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="text-sm font-semibold text-[var(--accent)]">Reviews</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">후기 게시 기준</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">
                후기는 실제 이용 확인이 가능한 내용만 게시합니다. 현재 공개 가능한 검수 후기는 준비 중이며,
                가짜 후기나 지역명만 바꾼 복사 후기는 사용하지 않습니다.
              </p>
            </article>
          </section>

          <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[var(--accent)]">FAQ</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">자주 묻는 질문</h2>
            <div className="mt-5 divide-y divide-[var(--line)]">
              {faqs.map((faq) => (
                <details key={faq.question} className="py-4">
                  <summary className="cursor-pointer text-lg font-semibold text-white">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
