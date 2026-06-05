import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PricingCards } from "@/components/pricing-cards";
import { gangnamAreas, getArea, siteUrl } from "@/lib/areas";
import { buildAreaLongForm } from "@/lib/content";

export const dynamic = "force-static";
export const dynamicParams = false;

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gangnamAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    return {};
  }

  return {
    title: `${area.name} 출장마사지 홈타이 | 강남구 지역별 이용 안내`,
    description: `${area.name} 출장마사지 홈타이 이용 전 확인할 수 있는 주요 생활권, 이용 절차, 요금 확인 방법, 예약 전 주의사항을 정리했습니다.`,
    alternates: {
      canonical: siteUrl(`/gangnam/${area.slug}`),
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const title = `${area.name} 출장마사지 홈타이 안내`;
  const description = `${area.name}은 ${area.neighborhoods.join(", ")}을 중심으로 이용 장소와 시간대에 따라 준비할 내용이 달라집니다.`;
  const paragraphs = buildAreaLongForm(area);

  return (
    <main className="bg-[#050503] text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: title,
          description,
          url: siteUrl(`/gangnam/${area.slug}`),
          inLanguage: "ko-KR",
          mainEntity: area.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <section className="relative overflow-hidden border-b border-[#2b2618]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(183,143,74,0.18),transparent_32rem),linear-gradient(135deg,#0a0d09_0%,#050503_62%,#000_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4 text-sm font-semibold text-[#c9a45f]">
              <span className="h-px w-14 bg-[#c9a45f]" />
              강남구 지역 안내
            </div>
            <h1 className="max-w-5xl text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[0] text-white">
              {area.name}
              <span className="mt-3 block text-[clamp(2rem,4.2vw,3.8rem)] text-[#d6b56d]">출장마사지 홈타이 안내</span>
            </h1>
            <p className="mt-7 max-w-3xl border-l border-[#c9a45f] pl-6 text-base leading-8 text-white sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">LOCAL EDITORIAL</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              {area.name}에서 먼저 확인해야 할 생활권과 예약 기준
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#e8e2d6]">
            <p className="text-2xl leading-10 text-white">{paragraphs[0]}</p>
            <p>{paragraphs[1]}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-4">
          <article className="border-l border-[#6f5a31] pl-5">
            <p className="text-xs font-bold text-[#c9a45f]">01</p>
            <h2 className="mt-3 text-lg font-bold leading-7 text-white">생활권</h2>
            <p className="mt-3 text-sm leading-7 text-[#d8d0c1]">{area.neighborhoods.join(" · ")}</p>
          </article>
          <article className="border-l border-[#6f5a31] pl-5">
            <p className="text-xs font-bold text-[#c9a45f]">02</p>
            <h2 className="mt-3 text-lg font-bold leading-7 text-white">이동 동선</h2>
            <p className="mt-3 text-sm leading-7 text-[#d8d0c1]">{area.routeNotes[0]}</p>
          </article>
          <article className="border-l border-[#6f5a31] pl-5">
            <p className="text-xs font-bold text-[#c9a45f]">03</p>
            <h2 className="mt-3 text-lg font-bold leading-7 text-white">확인사항</h2>
            <p className="mt-3 text-sm leading-7 text-[#d8d0c1]">{area.precheck.slice(0, 2).join(" · ")}</p>
          </article>
          <article className="border-l border-[#6f5a31] pl-5">
            <p className="text-xs font-bold text-[#c9a45f]">04</p>
            <h2 className="mt-3 text-lg font-bold leading-7 text-white">예약 기준</h2>
            <p className="mt-3 text-sm leading-7 text-[#d8d0c1]">정확한 주소와 시간대 기준으로 가능 여부를 확인합니다.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <PricingCards />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mb-10 flex items-center gap-4 text-sm font-bold text-[#c9a45f]">
          <span className="h-px w-12 bg-[#c9a45f]" />
          AREA DETAILS
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {paragraphs.slice(2).map((paragraph, index) => (
            <article key={paragraph} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-6">
              <h2 className="text-2xl font-black text-[#d6b56d]">{areaDetailHeadings[index]}</h2>
              <p className="mt-5 text-base leading-8 text-white">{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="text-sm font-bold text-[#c9a45f]">POLICY</p>
          <blockquote className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            “예약 전 확인한 범위 안에서만 건전하게 진행합니다.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#d8d0c1]">
            위법하거나 선정적인 요청은 진행하지 않으며, 이용 장소의 규정과 주변 환경을 우선합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-white">{area.name} 자주 묻는 질문</h2>
          </div>
          <div className="divide-y divide-[#2b2618] border-y border-[#2b2618]">
            {area.faq.map((item) => (
              <details key={item.question} className="py-6">
                <summary className="cursor-pointer text-xl font-bold text-white">{item.question}</summary>
                <p className="mt-4 text-base leading-8 text-[#d8d0c1]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const areaDetailHeadings = [
  "이동 동선",
  "예약 전 확인사항",
  "작성 기준",
  "요금 확인",
  "FAQ 맥락",
  "지역별 차별점",
  "문의 전 정리할 정보",
];
