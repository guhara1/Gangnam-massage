import Link from "next/link";
import { pricingPlans } from "@/lib/pricing";

export function PricingCards() {
  return (
    <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
      <p className="text-sm font-semibold text-[var(--accent)]">요금 안내</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">코스별 기본 요금</h2>
      <p className="mt-3 leading-7 text-[var(--muted)]">
        60·90·120분 코스별 기본 요금입니다. 지역, 예약 시간대, 이동 거리에 따라 상담 시 최종 확인됩니다.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "relative rounded-md border bg-black/35 p-6 text-center shadow-lg shadow-black/25",
              plan.featured ? "border-[var(--accent)]" : "border-[var(--line)]",
            ].join(" ")}
          >
            {plan.featured ? (
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-black">
                추천
              </span>
            ) : null}
            <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            <div className="mt-5 flex items-end justify-center gap-1">
              <strong className="text-4xl font-black tracking-[0] text-white sm:text-5xl">{plan.price}</strong>
              <span className="pb-2 text-sm font-semibold text-[var(--muted)]">원</span>
            </div>
            <p className="mt-4 font-bold text-[var(--accent-strong)]">{plan.minutes}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{plan.description}</p>
            <Link
              href="/contact"
              className={[
                "mt-7 inline-flex w-full justify-center rounded-md px-4 py-3 text-sm font-bold",
                plan.featured
                  ? "bg-[var(--accent)] text-black hover:bg-[var(--accent-strong)]"
                  : "border border-[var(--line)] text-white hover:border-[var(--accent)] hover:text-[var(--accent)]",
              ].join(" ")}
            >
              예약 문의
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
        지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.{" "}
        <Link href="/pricing" className="font-semibold text-[var(--accent)] hover:text-[var(--accent-strong)]">
          상세 요금 안내 보기
        </Link>
      </p>
    </section>
  );
}
