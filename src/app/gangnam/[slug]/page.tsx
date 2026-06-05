import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { DetailSection, FaqList, LongFormSection, PageHero } from "@/components/page-sections";
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

  return (
    <main>
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
      <PageHero eyebrow="강남구 지역 안내" title={title} description={description} />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="content-grid">
          <div className="space-y-6">
            <LongFormSection title={`${area.name} 지역 상세 가이드`} paragraphs={buildAreaLongForm(area)} />
            <DetailSection title="생활권" items={area.neighborhoods} />
            <DetailSection title="이용 상황" items={area.situations} />
            <DetailSection title="이동 동선" items={area.routeNotes} />
            <DetailSection title="예약 전 확인사항" items={area.precheck} />
          </div>
          <FaqList faq={area.faq} />
        </div>
      </section>
    </main>
  );
}
