import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { RelatedAreas } from "@/components/page-sections";
import { PricingCards } from "@/components/pricing-cards";
import { ReviewList } from "@/components/review-list";
import { getAreaEditorial } from "@/lib/area-editorials";
import { getAreaSeo } from "@/lib/area-seo";
import { gangnamAreas, getArea, siteUrl } from "@/lib/areas";
import { siteReviews } from "@/lib/reviews";
import {
  breadcrumbNode,
  faqNode,
  graph,
  serviceNode,
  webPageNode,
} from "@/lib/structured-data";

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

  const seo = getAreaSeo(area.slug);
  const title = seo?.title ?? `${area.name} 출장마사지 홈타이 | 강남구 지역 안내`;
  const description =
    seo?.description ?? `${area.name} 출장마사지 홈타이 이용 전 생활권, 이동 동선, 요금 확인 기준을 안내합니다.`;

  return {
    title,
    description,
    alternates: {
      canonical: siteUrl(`/gangnam/${area.slug}`),
    },
    openGraph: {
      title,
      description,
      url: siteUrl(`/gangnam/${area.slug}`),
      type: "article",
      locale: "ko_KR",
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getArea(slug);
  const editorial = getAreaEditorial(slug);

  if (!area || !editorial) {
    notFound();
  }

  const title = `${area.name} 출장마사지 홈타이 안내`;
  const description = `${area.name} 생활권의 이용 장소, 이동 조건, 예약 전 확인사항을 지역 특성에 맞춰 정리했습니다.`;
  const areaPath = `/gangnam/${area.slug}`;
  const areaReviews = siteReviews.filter((review) => review.area === area.name);

  return (
    <main className="bg-[#050503] text-white">
      <JsonLd
        data={graph([
          webPageNode({ name: title, description, path: areaPath }),
          breadcrumbNode([
            { name: "홈", path: "/" },
            { name: "강남구 지역 안내", path: "/gangnam" },
            { name: area.name, path: areaPath },
          ]),
          serviceNode({ areaName: area.name, reviews: areaReviews }),
          faqNode(area.faq, siteUrl(areaPath)),
        ])}
      />

      <section className="relative overflow-hidden border-b border-[#2b2618]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(183,143,74,0.16),transparent_30rem),linear-gradient(135deg,#0a0d09_0%,#050503_64%,#000_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-4 text-sm font-semibold text-[#c9a45f]">
              <span className="h-px w-14 bg-[#c9a45f]" />
              {editorial.eyebrow}
            </div>
            <h1 className="max-w-5xl text-[clamp(2.3rem,5vw,4.9rem)] font-black leading-[1.05] tracking-[0] text-white">
              {area.name}
              <span className="mt-3 block text-[clamp(1.9rem,4vw,3.8rem)] text-[#d6b56d]">출장마사지 홈타이 안내</span>
            </h1>
            <p className="mt-8 max-w-3xl border-l border-[#c9a45f] pl-6 text-base leading-8 text-white sm:text-xl sm:leading-9">
              {editorial.lead}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">LOCAL EDITORIAL</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">{editorial.contextTitle}</h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#e8e2d6]">
            <p className="text-2xl leading-10 text-white">{editorial.context[0]}</p>
            {editorial.context.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {editorial.highlights.map((item) => (
            <article key={item.title} className="border-l border-[#6f5a31] pl-5">
              <p className="text-xs font-bold text-[#c9a45f]">{item.label}</p>
              <h2 className="mt-3 text-lg font-bold leading-7 text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#d8d0c1]">{item.body}</p>
            </article>
          ))}
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
          {editorial.sections.map((section) => (
            <article key={section.title} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-6">
              <h2 className="text-2xl font-black text-[#d6b56d]">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-white">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="text-sm font-bold text-[#c9a45f]">POLICY</p>
          <blockquote className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">{editorial.quote}</blockquote>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#d8d0c1]">
            모든 안내는 합법적이고 건전한 방문 관리 범위 안에서만 제공됩니다. 위법하거나 선정적인 요청, 주변 환경을 해치는 요청은 예약 단계에서 제한됩니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold text-[#c9a45f]">FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-white">{area.name} 자주 묻는 질문</h2>
            <p className="mt-5 text-base leading-8 text-[#d8d0c1]">{editorial.faqIntro}</p>
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

      {areaReviews.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
          <ReviewList reviews={areaReviews} heading={`${area.name} 이용 후기`} />
        </section>
      ) : null}

      <RelatedAreas current={area} areas={gangnamAreas} />
    </main>
  );
}
