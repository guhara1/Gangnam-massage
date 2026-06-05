import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { gangnamAreas, siteUrl } from "@/lib/areas";

const serviceLinks = [
  { label: "서비스 안내", href: "/service" },
  { label: "이용 요금", href: "/pricing" },
  { label: "이용 가이드", href: "/guide" },
  { label: "후기", href: "/reviews" },
  { label: "예약 문의", href: "/contact" },
];

const policyItems = [
  "합법적이고 건전한 방문 관리 범위만 안내합니다.",
  "위법하거나 선정적인 요청은 예약 단계에서 제한됩니다.",
  "의료 행위, 치료 효과, 회복 보장을 약속하지 않습니다.",
  "요금과 취소 기준은 예약 확정 전 다시 확인합니다.",
];

export function SiteFooter() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/[^\d+]/g, "");

  return (
    <footer className="border-t border-[#28323e] bg-[#080b0d] text-[#d8d0c1]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Gangnam Care Guide",
          url: siteUrl("/"),
          logo: siteUrl("/favicon.svg"),
          areaServed: {
            "@type": "AdministrativeArea",
            name: "서울특별시 강남구",
          },
          contactPoint: contactPhone
            ? {
                "@type": "ContactPoint",
                telephone: contactPhone,
                contactType: "customer support",
                areaServed: "KR",
                availableLanguage: ["ko"],
              }
            : undefined,
        }}
      />

      <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1.4fr]">
          <section>
            <Link href="/" className="text-2xl font-black tracking-[0] text-white">
              Gangnam <span className="text-[#d4a574]">Care Guide</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7">
              강남구 방문 관리 이용 전 지역별 생활권, 이동 동선, 요금 확인 기준, 예약 전 주의사항을 확인할 수 있도록 정리한 안내 사이트입니다.
            </p>
            <dl className="mt-7 grid gap-3 text-sm">
              <div>
                <dt className="font-bold text-[#d4a574]">운영 주체</dt>
                <dd className="mt-1">Gangnam Care Guide 편집팀</dd>
              </div>
              <div>
                <dt className="font-bold text-[#d4a574]">문의</dt>
                <dd className="mt-1">
                  {contactPhone ? (
                    <a href={`tel:${contactPhone}`} className="text-white hover:text-[#d4a574]">
                      {contactPhone}
                    </a>
                  ) : (
                    <Link href="/contact" className="text-white hover:text-[#d4a574]">
                      예약 문의 페이지
                    </Link>
                  )}
                </dd>
              </div>
              <div>
                <dt className="font-bold text-[#d4a574]">작성 기준</dt>
                <dd className="mt-1">실제 예약 전 확인해야 할 정보와 안전 기준 중심</dd>
              </div>
            </dl>
          </section>

          <nav aria-label="푸터 주요 메뉴">
            <h2 className="text-sm font-black text-[#d4a574]">사이트 안내</h2>
            <ul className="mt-5 grid gap-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:text-[#d4a574]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-9 text-sm font-black text-[#d4a574]">운영 기준</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6">
              {policyItems.map((item) => (
                <li key={item} className="border-l border-[#6f5a31] pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="강남구 지역별 푸터 메뉴">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-sm font-black text-[#d4a574]">강남구 지역 안내</h2>
                <p className="mt-2 text-xs leading-5 text-[#9aa7b4]">지역명만 나열하지 않고 각 지역 페이지에서 생활권과 예약 변수를 따로 안내합니다.</p>
              </div>
              <Link href="/gangnam" className="hidden text-sm font-bold text-white hover:text-[#d4a574] sm:inline">
                전체 보기
              </Link>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {gangnamAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/gangnam/${area.slug}`}
                    className="block rounded-md border border-[#28323e] bg-[#0f1419] px-3 py-2 text-center text-sm font-semibold text-white transition hover:border-[#d4a574] hover:text-[#d4a574]"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-[#28323e] pt-6 text-xs leading-6 text-[#9aa7b4]">
          <p>
            본 사이트는 예약 전 확인용 정보 제공을 목적으로 하며, 검색 순위 보장을 약속하지 않습니다. 모든 안내는 실제 상담과 장소 규정 확인 후 달라질 수 있습니다.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} Gangnam Care Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
