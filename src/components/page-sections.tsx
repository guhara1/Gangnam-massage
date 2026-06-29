import Link from "next/link";
import type { Area } from "@/lib/areas";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
};

export function PageHero({ eyebrow, title, description, highlights = [] }: PageHeroProps) {
  return (
    <section className="border-b border-[#2b2618] bg-[linear-gradient(135deg,#07140c_0%,#020403_55%,#000_100%)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <div>
          <p className="text-sm font-semibold text-[#c9a45f]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-[0] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#d8d0c1] sm:text-lg">{description}</p>
        </div>
        {highlights.length > 0 ? (
          <div className="self-end rounded-md border border-[#2b2618] bg-black/45 p-5">
            <h2 className="text-lg font-semibold text-[#d6b56d]">핵심 확인</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white">
              {highlights.map((item) => (
                <li key={item} className="border-l-2 border-[#d6b56d] pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

type InfoBandProps = {
  title: string;
  items: string[];
};

export function InfoBand({ title, items }: InfoBandProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#d6b56d]">{title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <p key={item} className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-4 leading-7 text-[#d8d0c1]">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

type AreaLinkGridProps = {
  areas: Area[];
};

export function AreaLinkGrid({ areas }: AreaLinkGridProps) {
  return (
    <section>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#c9a45f]">강남구 동별 안내</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">생활권에 맞는 지역 페이지 선택</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#d8d0c1]">
          메뉴와 URL에는 키워드를 반복하지 않고, 실제 지역명 기준으로만 구성했습니다.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/gangnam/${area.slug}`}
            className="rounded-md border border-[#2b2618] bg-[#0b0d09] px-4 py-4 font-semibold text-white hover:border-[#d6b56d] hover:text-[#d6b56d]"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

type AreaLongTailGridProps = {
  areas: Area[];
  eyebrow?: string;
  title?: string;
  description?: string;
};

// 지역명만 나열하는 대신 생활권 키워드를 앵커 텍스트에 담아 롱테일 내부링크를 강화합니다.
export function AreaLongTailGrid({
  areas,
  eyebrow = "AREA · LONG-TAIL",
  title = "강남구 지역별 출장마사지 홈타이 안내",
  description = "각 지역 페이지는 생활권, 이동 동선, 예약 전 확인사항을 따로 정리했습니다. 이용 장소와 가까운 지역을 선택해 세부 안내를 확인하세요.",
}: AreaLongTailGridProps) {
  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 border-b border-[#2b2618] pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold text-[#c9a45f]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-[#cfc6b4]">{description}</p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/gangnam/${area.slug}`}
              className="group flex h-full flex-col rounded-md border border-[#2b2618] bg-[#0b0d09] p-5 transition hover:border-[#d6b56d] hover:bg-[#11100b]"
            >
              <span className="text-lg font-black text-white group-hover:text-[#d6b56d]">
                {area.name} 출장마사지 홈타이
              </span>
              <span className="mt-2 text-sm leading-6 text-[#cfc6b4]">
                {area.neighborhoods.join(" · ")}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#c9a45f] group-hover:text-[#f0d58a]">
                {area.name} 이용 안내 보기
                <span aria-hidden>→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

type RelatedAreasProps = {
  current: Area;
  areas: Area[];
};

// 지역 페이지 하단에서 인접/다른 생활권으로 이동하는 롱테일 내부링크 묶음입니다.
export function RelatedAreas({ current, areas }: RelatedAreasProps) {
  const others = areas.filter((area) => area.slug !== current.slug);
  const currentIndex = areas.findIndex((area) => area.slug === current.slug);
  const nearby = [...others]
    .sort(
      (a, b) =>
        Math.abs(areas.indexOf(a) - currentIndex) - Math.abs(areas.indexOf(b) - currentIndex),
    )
    .slice(0, 6);

  return (
    <section className="border-t border-[#2b2618] bg-[#090907]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-sm font-bold text-[#c9a45f]">RELATED AREAS</p>
        <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{current.name} 주변 지역 안내</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#cfc6b4]">
          {current.name}과 함께 자주 비교되는 강남구 생활권입니다. 이동 동선과 예약 조건이 다르니 가까운 지역도 함께 확인하세요.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/gangnam/${area.slug}`}
                className="group flex flex-col rounded-md border border-[#2b2618] bg-[#050503] p-5 transition hover:border-[#d6b56d]"
              >
                <span className="font-black text-white group-hover:text-[#d6b56d]">
                  {area.name} 출장마사지 홈타이
                </span>
                <span className="mt-2 text-sm leading-6 text-[#cfc6b4]">{area.neighborhoods.join(" · ")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
          <Link href="/gangnam" className="rounded-full border border-[#8e7440] px-5 py-3 text-[#f0d58a] hover:border-[#d6b56d] hover:bg-[#11100b]">
            강남구 전체 지역 보기
          </Link>
          <Link href="/pricing" className="rounded-full border border-[#8e7440] px-5 py-3 text-[#f0d58a] hover:border-[#d6b56d] hover:bg-[#11100b]">
            코스별 요금 보기
          </Link>
          <Link href="/guide" className="rounded-full border border-[#8e7440] px-5 py-3 text-[#f0d58a] hover:border-[#d6b56d] hover:bg-[#11100b]">
            이용 가이드 보기
          </Link>
          <Link href="/reviews" className="rounded-full border border-[#8e7440] px-5 py-3 text-[#f0d58a] hover:border-[#d6b56d] hover:bg-[#11100b]">
            실시간 후기 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

type DetailSectionProps = {
  title: string;
  items: string[];
};

export function DetailSection({ title, items }: DetailSectionProps) {
  return (
    <section className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-5">
      <h2 className="text-xl font-semibold text-[#d6b56d]">{title}</h2>
      <ul className="mt-4 space-y-3 text-[#d8d0c1]">
        {items.map((item) => (
          <li key={item} className="leading-7">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

type FaqListProps = {
  faq: Area["faq"];
};

export function FaqList({ faq }: FaqListProps) {
  return (
    <section className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-5">
      <h2 className="text-xl font-semibold text-[#d6b56d]">FAQ</h2>
      <div className="mt-4 divide-y divide-[#2b2618]">
        {faq.map((item) => (
          <details key={item.question} className="py-4">
            <summary className="cursor-pointer font-semibold text-white">{item.question}</summary>
            <p className="mt-3 leading-7 text-[#d8d0c1]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

type LongFormSectionProps = {
  title: string;
  paragraphs: string[];
};

export function LongFormSection({ title, paragraphs }: LongFormSectionProps) {
  return (
    <section className="rounded-md border border-[#2b2618] bg-[#0b0d09] p-5 sm:p-7">
      <p className="text-sm font-semibold text-[#c9a45f]">상세 설명</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-6 grid gap-5">
        {paragraphs.map((paragraph, index) => (
          <article key={paragraph} className="rounded-md border border-[#2b2618] bg-black/35 p-4">
            <h3 className="text-base font-semibold text-[#d6b56d]">
              {index + 1}. {longFormHeadings[index] ?? "예약 전 참고사항"}
            </h3>
            <p className="mt-3 text-base leading-8 text-white">{paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const longFormHeadings = [
  "지역 안내의 목적",
  "작성 기준과 책임",
  "안전한 이용 범위",
  "도어웨이 회피 원칙",
  "도움되는 콘텐츠 기준",
  "모바일 페이지 경험",
  "예약 전 체크리스트",
  "유해 신호와 표현 기준",
  "사이트 전체 품질 관리",
  "검색 노출보다 사용자 판단",
];
