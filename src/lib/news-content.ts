export const newsContent = {
  leadSlug: "government-building-rule-invalidated",
  latestSlugs: [
    "business-legal-changes",
    "professional-training-program",
    "contract-review-checklist",
    "business-legal-risk-event",
  ],
  mostReadSlugs: [
    "contract-checklist",
    "receivables-documentation",
    "insurance-claim-denial",
    "employee-responsibility",
  ],
  topStorySlugs: [
    "long-term-contract-pricing",
    "internal-policy-update",
    "business-law-training",
  ],
  videoSlugs: [
    "employment-agreement-essentials-video",
    "business-legal-compliance-video",
  ],
  videoDates: ["2025.08.31", "2025.12.17"],
} as const;

const newsArticleSlugs = [
  newsContent.leadSlug,
  ...newsContent.topStorySlugs,
  ...newsContent.mostReadSlugs,
  ...newsContent.latestSlugs,
  ...newsContent.videoSlugs,
] as const;

export type NewsArticleSlug = (typeof newsArticleSlugs)[number];

type NewsDetailMedia = {
  images?: readonly [string] | readonly [string, string];
  position?: "top";
  sourceUrl?: string;
  videoEmbedUrl?: string;
};

export const newsDetailMedia: Partial<
  Record<NewsArticleSlug, NewsDetailMedia>
> = {
  [newsContent.leadSlug]: {
    images: ["/images/news-building-rule-invalidated-hero.jpg"],
    position: "top",
    sourceUrl:
      "https://www.facebook.com/photo?fbid=122144679345039916&set=a.122099410641039916",
  },
  [newsContent.latestSlugs[1]]: {
    images: ["/images/library.jpg"],
  },
  [newsContent.videoSlugs[0]]: {
    videoEmbedUrl: "https://www.youtube.com/embed/vHyaoM2T8Is",
  },
  [newsContent.videoSlugs[1]]: {
    videoEmbedUrl: "https://www.youtube.com/embed/E6w0iYQ6IOM",
  },
};

export function isNewsArticleSlug(value: string): value is NewsArticleSlug {
  return newsArticleSlugs.some((slug) => slug === value);
}

export function getNewsArticleRef(slug: NewsArticleSlug) {
  if (slug === newsContent.leadSlug) {
    return { index: 0, section: "lead" } as const;
  }

  const topIndex = newsContent.topStorySlugs.indexOf(
    slug as (typeof newsContent.topStorySlugs)[number],
  );
  if (topIndex >= 0) return { index: topIndex, section: "top" } as const;

  const mostReadIndex = newsContent.mostReadSlugs.indexOf(
    slug as (typeof newsContent.mostReadSlugs)[number],
  );
  if (mostReadIndex >= 0) {
    return { index: mostReadIndex, section: "mostRead" } as const;
  }

  const videoIndex = newsContent.videoSlugs.indexOf(
    slug as (typeof newsContent.videoSlugs)[number],
  );
  if (videoIndex >= 0) {
    return { index: videoIndex, section: "video" } as const;
  }

  return {
    index: newsContent.latestSlugs.indexOf(
      slug as (typeof newsContent.latestSlugs)[number],
    ),
    section: "latest",
  } as const;
}

export function getNewsArticleSlugs() {
  return [...newsArticleSlugs];
}
