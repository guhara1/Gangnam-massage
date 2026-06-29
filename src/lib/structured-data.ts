import { baseUrl, siteUrl } from "@/lib/areas";
import { pricingPlans } from "@/lib/pricing";
import type { SiteReview } from "@/lib/reviews";
import { reviewAggregate, siteReviews } from "@/lib/reviews";

export const ORG_ID = `${baseUrl}/#organization`;
export const WEBSITE_ID = `${baseUrl}/#website`;
export const SERVICE_ID = `${baseUrl}/#service`;

const ORG_NAME = "Gangnam Care Guide";

type SchemaNode = Record<string, unknown>;

export function graph(nodes: SchemaNode[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function organizationNode(): SchemaNode {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/[^\d+]/g, "");

  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG_NAME,
    url: siteUrl("/"),
    logo: siteUrl("/favicon.svg"),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "서울특별시 강남구",
    },
    ...(contactPhone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            telephone: contactPhone,
            contactType: "customer support",
            areaServed: "KR",
            availableLanguage: ["ko"],
          },
        }
      : {}),
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: ORG_NAME,
    url: siteUrl("/"),
    inLanguage: "ko-KR",
    publisher: { "@id": ORG_ID },
  };
}

export function aggregateRatingNode(): SchemaNode {
  return {
    "@type": "AggregateRating",
    ratingValue: reviewAggregate.ratingValue,
    reviewCount: reviewAggregate.reviewCount,
    bestRating: reviewAggregate.bestRating,
    worstRating: reviewAggregate.worstRating,
  };
}

export function reviewNodes(reviews: readonly SiteReview[] = siteReviews): SchemaNode[] {
  return reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    datePublished: review.date,
    reviewBody: review.body,
    name: `${review.area} ${review.course} 이용 후기`,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": SERVICE_ID },
  }));
}

function offerCatalogNode(): SchemaNode {
  return {
    "@type": "OfferCatalog",
    name: "코스별 기본 요금",
    itemListElement: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.replace(/,/g, ""),
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Service",
        name: `${plan.name} (${plan.minutes})`,
        description: plan.description,
      },
    })),
  };
}

type ServiceOptions = {
  areaName?: string;
  // 화면에 보이는 후기와 일치하는 목록만 전달합니다. (비어 있으면 review 미생성)
  reviews?: readonly SiteReview[];
  // 전체 서비스 평균 평점. 후기가 화면에 노출되는 페이지에서만 true.
  withAggregate?: boolean;
};

export function serviceNode({ areaName, reviews, withAggregate = false }: ServiceOptions = {}): SchemaNode {
  return {
    "@type": "Service",
    "@id": SERVICE_ID,
    serviceType: "출장마사지 홈타이",
    name: areaName ? `${areaName} 출장마사지 홈타이` : "강남 출장마사지 홈타이",
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": areaName ? "Place" : "AdministrativeArea",
      name: areaName ? `서울특별시 강남구 ${areaName}` : "서울특별시 강남구",
    },
    hasOfferCatalog: offerCatalogNode(),
    ...(withAggregate ? { aggregateRating: aggregateRatingNode() } : {}),
    ...(reviews && reviews.length > 0 ? { review: reviewNodes(reviews) } : {}),
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  };
}

export function faqNode(
  faq: readonly { question: string; answer: string }[],
  url: string,
): SchemaNode {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function webPageNode({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}): SchemaNode {
  const url = siteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function itemListNode(items: { name: string; path: string }[]): SchemaNode {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: siteUrl(item.path),
    })),
  };
}
