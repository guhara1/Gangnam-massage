import type { SiteReview } from "@/lib/reviews";
import { reviewAggregate } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span aria-hidden className="text-[#d6b56d]">
      {"★".repeat(full)}
      <span className="text-[#4a4434]">{"★".repeat(Math.max(0, 5 - full))}</span>
    </span>
  );
}

type ReviewListProps = {
  reviews: readonly SiteReview[];
  limit?: number;
  heading?: string;
};

export function ReviewList({ reviews, limit, heading = "검증된 이용 후기" }: ReviewListProps) {
  const visible = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section aria-label="이용 후기">
      <div className="mb-8 flex flex-col gap-6 border-b border-[#2b2618] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-[#c9a45f]">REVIEWS · 실시간 후기</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{heading}</h2>
        </div>
        <div className="flex items-center gap-4 rounded-md border border-[#2b2618] bg-[#0b0d09] px-5 py-4">
          <div className="text-center">
            <p className="text-4xl font-black text-[#d6b56d]">{reviewAggregate.ratingValue.toFixed(1)}</p>
            <p className="text-xs text-[#9aa7b4]">/ 5.0</p>
          </div>
          <div className="text-sm leading-6 text-[#d8d0c1]">
            <p className="text-lg leading-none">
              <Stars rating={reviewAggregate.ratingValue} />
            </p>
            <p className="mt-1">후기 {reviewAggregate.reviewCount}건 기준 평균 점수</p>
          </div>
        </div>
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((review) => (
          <li
            key={`${review.author}-${review.date}`}
            className="flex h-full flex-col rounded-md border border-[#2b2618] bg-[#0b0d09] p-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg leading-none">
                <Stars rating={review.rating} />
              </span>
              <span className="text-xs font-bold text-[#c9a45f]">{review.rating.toFixed(1)}</span>
            </div>
            <p className="mt-4 flex-1 text-base leading-7 text-white">{review.body}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[#2b2618] pt-4 text-sm text-[#9aa7b4]">
              <span className="font-bold text-[#d8d0c1]">{review.author}</span>
              <span>· {review.area}</span>
              <span>· {review.course}</span>
              <time dateTime={review.date} className="ml-auto">
                {review.date}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
