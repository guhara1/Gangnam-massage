"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Area } from "@/lib/areas";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderNavProps = {
  areas: Area[];
  navigation: readonly NavigationItem[];
};

export function HeaderNav({ areas, navigation }: HeaderNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav aria-label="상단 메뉴" className="flex flex-wrap items-center gap-1 text-sm">
      {navigation.map((item) =>
        item.href === "/gangnam" ? (
          <div key={item.href} ref={menuRef} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="gangnam-region-menu"
              onClick={() => setIsOpen((current) => !current)}
              className={[
                "rounded-md px-3 py-2 font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                isOpen
                  ? "bg-[var(--panel)] text-[var(--accent)]"
                  : "text-white hover:bg-[var(--panel)] hover:text-[var(--accent)]",
              ].join(" ")}
            >
              {item.label}
            </button>
            {isOpen ? (
              <div
                id="gangnam-region-menu"
                className="absolute left-0 top-full mt-2 w-[360px] rounded-md border border-[var(--line)] bg-[var(--panel)] p-3 shadow-xl shadow-black/50"
              >
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    className="col-span-3 rounded border border-[var(--line)] px-3 py-2 text-center font-semibold text-white hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    href="/gangnam"
                    onClick={() => setIsOpen(false)}
                  >
                    강남구 전체
                  </Link>
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      className="whitespace-nowrap rounded px-3 py-2 text-center text-white hover:bg-black hover:text-[var(--accent)]"
                      href={`/gangnam/${area.slug}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 font-medium text-white hover:bg-[var(--panel)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
