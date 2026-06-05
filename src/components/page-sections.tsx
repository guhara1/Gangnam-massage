import Link from "next/link";
import type { Area } from "@/lib/areas";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-[radial-gradient(circle_at_top_left,#12351a_0,#020403_38rem)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold text-[var(--accent)]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-[0] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
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
      <h2 className="text-2xl font-semibold text-[var(--accent-strong)]">{title}</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <p
            key={item}
            className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-4 leading-7 text-[var(--muted)]"
          >
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
      <h2 className="text-2xl font-semibold text-[var(--accent-strong)]">동별 안내</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/gangnam/${area.slug}`}
            className="rounded-md border border-[var(--line)] bg-[var(--panel)] px-4 py-4 font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {area.name}
          </Link>
        ))}
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
    <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
      <h2 className="text-xl font-semibold text-[var(--accent-strong)]">{title}</h2>
      <ul className="mt-4 space-y-3 text-[var(--muted)]">
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
    <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
      <h2 className="text-xl font-semibold text-[var(--accent-strong)]">FAQ</h2>
      <div className="mt-4 divide-y divide-[var(--line)]">
        {faq.map((item) => (
          <details key={item.question} className="py-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-3 leading-7 text-[var(--muted)]">{item.answer}</p>
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
    <section className="rounded-md border border-[var(--line)] bg-[var(--panel)] p-5">
      <h2 className="text-2xl font-semibold text-[var(--accent)]">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-white">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
