"use client";

import { ArrowRight, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { newsContent } from "@/lib/news-content";
import { newsMedia } from "@/lib/news-media";
import styles from "./news.module.css";

type NewsCard = {
  category: string;
  date: string;
  duration?: string;
  href: string;
  intro: string;
  kind: "article" | "video";
  sourceUrl: string;
  title: string;
  thumbnailUrl?: string;
  thumbnailPosition?: "top";
  tone: (typeof newsMedia.newsTones)[number];
  visual: boolean;
};

export default function NewsPage() {
  const { news } = useSiteMessages();
  const videoItems: NewsCard[] = news.videos.items.map((item, index) => ({
    ...item,
    date: newsContent.videoDates[index],
    href: `/news/${newsContent.videoSlugs[index]}`,
    kind: "video",
    sourceUrl:
      index === 0
        ? "https://www.youtube.com/watch?v=vHyaoM2T8Is"
        : "https://www.youtube.com/watch?v=E6w0iYQ6IOM",
    thumbnailUrl:
      index === 0
        ? "https://i.ytimg.com/vi/vHyaoM2T8Is/hqdefault.jpg"
        : "https://i.ytimg.com/vi/E6w0iYQ6IOM/hqdefault.jpg",
    tone: newsMedia.videoTones[index],
    visual: true,
  }));
  const leadItem: NewsCard = {
    category: news.lead.category,
    date: news.lead.date.split(" · ")[0],
    href: `/news/${newsContent.leadSlug}`,
    intro: news.lead.intro,
    kind: "article",
    sourceUrl:
      "https://www.facebook.com/photo?fbid=122144679345039916&set=a.122099410641039916",
    thumbnailPosition: "top",
    thumbnailUrl: "/images/news-building-rule-invalidated-hero.jpg",
    title: news.lead.title,
    tone: "burgundy",
    visual: true,
  };
  const cards = [leadItem, videoItems[0], videoItems[1]].filter(
    (item): item is NewsCard => Boolean(item),
  );

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className="shell">
          <span className={styles.kicker}>{news.masthead.eyebrow}</span>
          <div className={styles.headerRow}>
            <h1>{news.masthead.title}</h1>
            <p>{news.masthead.intro}</p>
          </div>
        </div>
      </header>

      <section className={styles.feed} data-motion-scope>
        <div className="shell">
          <div className={styles.cardGrid}>
            {cards.map((item, index) => (
              <article
                className={`${styles.card} ${
                  item.visual ? styles.cardWithVisual : styles.textCard
                }`}
                data-reveal="up"
                data-reveal-delay={Math.min(index, 2) * 45}
                key={`${item.kind}-${item.title}`}
              >
                <div className={styles.cardDate}>
                  <time>{item.date}</time>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{item.category}</span>
                  </div>
                  <h2>
                    <Link href={item.href}>{item.title}</Link>
                  </h2>
                  <p>{item.intro}</p>
                  <div className={styles.cardActions}>
                    <Link className={styles.cardAction} href={item.href}>
                      {news.latest.read}
                      <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                    <a
                      className={styles.sourceAction}
                      href={item.sourceUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {news.latest.source}
                      <ExternalLink aria-hidden="true" size={15} />
                    </a>
                  </div>
                </div>

                {item.visual ? (
                  <Link
                    aria-label={`${news.latest.read}: ${item.title}`}
                    className={styles.cardVisual}
                    data-has-thumbnail={item.thumbnailUrl ? "true" : undefined}
                    data-kind={item.kind}
                    data-tone={item.tone}
                    href={item.href}
                  >
                    {item.thumbnailUrl ? (
                      <span
                        aria-hidden="true"
                        className={styles.thumbnail}
                        style={{
                          backgroundImage: `url(${item.thumbnailUrl})`,
                          backgroundPosition:
                            item.thumbnailPosition ?? "center",
                        }}
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className={styles.visualPattern}
                      />
                    )}
                    {item.kind === "video" ? (
                      <span className={styles.play}>
                        <Play
                          aria-hidden="true"
                          fill="currentColor"
                          size={20}
                        />
                      </span>
                    ) : (
                      <small>ЦЭЦ ПАРТНЕРС</small>
                    )}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
