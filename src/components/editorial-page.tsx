import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PricingCards } from "@/components/pricing-cards";
import { ReviewList } from "@/components/review-list";
import { siteUrl } from "@/lib/areas";
import type { SiteReview } from "@/lib/reviews";
import {
  breadcrumbNode,
  faqNode,
  graph,
  serviceNode,
  webPageNode,
} from "@/lib/structured-data";

type EditorialPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  lead: string;
  quote: string;
  sections: readonly { title: string; body: string }[];
  checklist: readonly string[];
  faq?: readonly { question: string; answer: string }[];
  showPricing?: boolean;
  pageType?: string;
  breadcrumb?: { name: string; path: string }[];
  reviews?: readonly SiteReview[];
};

export function EditorialPage({
  eyebrow,
  title,
  description,
  path,
  lead,
  quote,
  sections,
  checklist,
  faq = [],
  showPricing = false,
  pageType = "WebPage",
  breadcrumb,
  reviews,
}: EditorialPageProps) {
  const crumbs = breadcrumb ?? [
    { name: "홈", path: "/" },
    { name: title, path },
  ];
  const schemaNodes: Record<string, unknown>[] = [
    webPageNode({ name: title, description, path, type: pageType }),
    breadcrumbNode(crumbs),
  ];
  if (faq.length > 0) {
    schemaNodes.push(faqNode(faq, siteUrl(path)));
  }
  if (reviews && reviews.length > 0) {
    // 후기가 화면에 노출되는 페이지에서만 평점/리뷰 스키마를 함께 제공합니다.
    schemaNodes.push(serviceNode({ withAggregate: true, reviews }));
  } else if (showPricing) {
    // 요금(오퍼) 정보가 노출되는 페이지에는 오퍼 카탈로그 중심 Service 스키마를 제공합니다.
    schemaNodes.push(serviceNode());
  }

  return (
    <main className="bg-[#050503] text-white">
      <JsonLd data={graph(schemaNodes)} />
      <section className="relative overflow-hidden border-b border-[#2b2618]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(183,143,74,0.18),transparent_32rem),linear-gradient(135deg,#0a0d09_0%,#050503_62%,#000_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4 text-sm font-semibold text-[#c9a45f]">
              <span className="h-px w-14 bg-[#c9a45f]" />
              {eyebrow}
            </div>
            <h1 className="max-w-5xl text-[clamp(2.4rem,5.2vw,5rem)] font-black leading-[1.03] tracking-[0] text-white">
              {title}
            </h1>
            <p className="mt-8 max-w-3xl border-l border-[#c9a45f] pl-6 text-lg leading-8 text-white sm:text-xl">
              {lead}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit border-t border-[#c9a45f] pt-6">
            <p className="text-sm font-bold text-[#c9a45f]">WHO · HOW · WHY</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white">작성 기준과 이용자 중심 정보</h2>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="border-l border-[#6f5a31] pl-4 text-base leading-7 text-[#d8d0c1]">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          <div className="space-y-8">
            <p className="text-2xl leading-10 text-white">{description}</p>
            {sections.map((section) => (
              <article key={section.title} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-6">
                <h2 className="text-2xl font-black text-[#d6b56d]">{section.title}</h2>
                <p className="mt-5 text-base leading-8 text-white">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {reviews && reviews.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
          <ReviewList reviews={reviews} />
        </section>
      ) : null}

      {showPricing ? (
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
          <PricingCards />
        </section>
      ) : null}

      <section className="border-y border-[#2b2618] bg-[#090907]">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="text-sm font-bold text-[#c9a45f]">EDITORIAL NOTE</p>
          <blockquote className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">{quote}</blockquote>
        </div>
      </section>

      {faq.length > 0 ? (
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold text-[#c9a45f]">FAQ</p>
              <h2 className="mt-3 text-4xl font-black text-white">자주 묻는 질문</h2>
            </div>
            <div className="divide-y divide-[#2b2618] border-y border-[#2b2618]">
              {faq.map((item) => (
                <details key={item.question} className="py-6">
                  <summary className="cursor-pointer text-xl font-bold text-white">{item.question}</summary>
                  <p className="mt-4 text-base leading-8 text-[#d8d0c1]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
        <Link href="/contact" className="inline-flex rounded-full bg-[#d6b56d] px-7 py-4 text-sm font-bold text-black hover:bg-[#f0d58a]">
          예약 문의로 이동
        </Link>
      </section>
    </main>
  );
}
