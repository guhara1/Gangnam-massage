"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Area } from "@/lib/areas";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderNavProps = {
  areas: Area[];
  navigation: readonly NavigationItem[];
};

type NavChild = {
  label: string;
  href: string;
  description?: string;
};

type NavGroup = {
  label: string;
  href: string;
  wide?: boolean;
  children?: NavChild[];
};

const courseItems: NavChild[] = [
  { label: "아로마 릴렉스", href: "/service", description: "오일 기반 휴식 관리" },
  { label: "스포츠 바디케어", href: "/service", description: "목과 어깨 피로 중심" },
  { label: "프리미엄 회복 관리", href: "/service", description: "출장과 장거리 이동 후" },
  { label: "60분 코스", href: "/pricing", description: "짧은 컨디션 정리" },
  { label: "90분 코스", href: "/pricing", description: "추천 기본 구성" },
  { label: "120분 코스", href: "/pricing", description: "충분한 휴식 구성" },
];

const priceItems: NavChild[] = [
  { label: "60분 기본 요금", href: "/pricing", description: "90,000원 기준" },
  { label: "90분 추천 요금", href: "/pricing", description: "150,000원 기준" },
  { label: "120분 프리미엄", href: "/pricing", description: "180,000원 기준" },
  { label: "최종 비용 확인", href: "/pricing", description: "지역과 시간대별 상담" },
];

const guideItems: NavChild[] = [
  { label: "예약 전 준비사항", href: "/guide", description: "주소와 출입 방식 확인" },
  { label: "장소별 이용 기준", href: "/guide", description: "호텔, 오피스텔, 주거지" },
  { label: "불가 요청 안내", href: "/service", description: "건전 운영 기준" },
  { label: "자주 묻는 질문", href: "/guide", description: "처음 이용 전 확인" },
];

export function HeaderNav({ areas }: HeaderNavProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const regionItems = areas.map((area) => ({
    label: area.name,
    href: `/gangnam/${area.slug}`,
    description: area.neighborhoods.slice(0, 2).join(" · "),
  }));

  const groups: NavGroup[] = [
    { label: "홈", href: "/" },
    {
      label: "지역별",
      href: "/gangnam",
      wide: true,
      children: [{ label: "강남구 전체", href: "/gangnam", description: "전체 생활권 안내" }, ...regionItems],
    },
    { label: "코스별", href: "/service", wide: true, children: courseItems },
    { label: "가격별", href: "/pricing", children: priceItems },
    { label: "이용가이드", href: "/guide", children: guideItems },
    { label: "실시간 후기", href: "/reviews" },
  ];

  function closeMenus() {
    setActiveMenu(null);
    setMobileOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={mobileOpen}
        className="ml-auto flex flex-col gap-1.5 rounded-md p-2 text-white md:hidden"
        onClick={() => setMobileOpen((current) => !current)}
      >
        <span className="block h-0.5 w-6 bg-current" />
        <span className="block h-0.5 w-6 bg-current" />
        <span className="block h-0.5 w-6 bg-current" />
      </button>

      <nav aria-label="주요 메뉴" className={["w-full md:w-auto md:flex-1", mobileOpen ? "block" : "hidden md:block"].join(" ")}>
        <ul className="flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-end md:gap-1 md:py-0">
          {groups.map((group) => {
            const isActive = activeMenu === group.label;

            return (
              <li
                key={group.href}
                className="relative"
                onMouseEnter={() => group.children && setActiveMenu(group.label)}
                onMouseLeave={() => group.children && setActiveMenu(null)}
              >
                <Link
                  href={group.href}
                  aria-haspopup={group.children ? "menu" : undefined}
                  aria-expanded={group.children ? isActive : undefined}
                  className="relative flex items-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-[#9aa7b4] transition hover:text-white md:h-[68px] md:py-0"
                  onFocus={() => group.children && setActiveMenu(group.label)}
                  onClick={closeMenus}
                >
                  {group.label}
                  {group.children ? <span className={["mt-[-3px] text-xs transition", isActive ? "rotate-180" : ""].join(" ")}>⌄</span> : null}
                  <span
                    className={[
                      "absolute bottom-3 left-4 right-4 hidden h-px origin-left bg-[#d4a574] transition md:block",
                      isActive ? "scale-x-100" : "scale-x-0",
                    ].join(" ")}
                  />
                </Link>

                {group.children ? (
                  <div
                    className={[
                      "static rounded-lg border border-[#28323e] bg-[#161d26] p-2 shadow-2xl shadow-black/40 md:absolute md:left-0 md:top-full md:z-50 md:transition",
                      group.wide ? "md:w-[520px]" : "md:w-[260px]",
                      mobileOpen || isActive
                        ? "block md:visible md:translate-y-0 md:opacity-100"
                        : "hidden md:invisible md:block md:translate-y-2 md:opacity-0",
                    ].join(" ")}
                  >
                    <ul className={group.wide ? "grid gap-1 md:grid-cols-2" : "grid gap-1"}>
                      {group.children.map((child) => (
                        <li key={`${group.label}-${child.label}`}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm font-semibold text-[#d8d0c1] transition hover:bg-[#1e2732] hover:text-[#d4a574]"
                            onMouseDown={() => setActiveMenu(null)}
                            onClick={closeMenus}
                          >
                            {child.label}
                            {child.description ? <small className="mt-1 block text-xs font-normal text-[#7f8b96]">{child.description}</small> : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>

      <Link
        href="/contact"
        className="hidden rounded-md bg-[#d4a574] px-5 py-3 text-sm font-bold text-[#1a130a] transition hover:-translate-y-0.5 hover:bg-[#e3b888] lg:inline-flex"
        onClick={closeMenus}
      >
        업체 등록 문의
      </Link>
    </>
  );
}
