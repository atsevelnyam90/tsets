"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import {
  getNewsArticleRef,
  type NewsArticleSlug,
  newsContent,
  newsDetailMedia,
} from "@/lib/news-content";
import styles from "./LocalizedNewsArticle.module.css";

export function LocalizedNewsArticle({ slug }: { slug: NewsArticleSlug }) {
  const { news } = useSiteMessages();
  const articleRef = getNewsArticleRef(slug);
  const isVideo = articleRef.section === "video";

  const article = (() => {
    if (articleRef.section === "lead") return news.lead;
    if (articleRef.section === "top") {
      return news.topStories.items[articleRef.index] ?? news.lead;
    }
    if (articleRef.section === "latest") {
      return news.latest.items[articleRef.index] ?? news.lead;
    }
    if (articleRef.section === "video") {
      const video = news.videos.items[articleRef.index] ?? news.videos.items[0];
      return {
        category: video.category,
        date: newsContent.videoDates[articleRef.index],
        intro: video.intro,
        title: video.title,
      };
    }

    return {
      category: news.mostRead.title,
      date: news.article.readingTime,
      intro: news.article.body[0],
      title: news.mostRead.items[articleRef.index] ?? news.lead.title,
    };
  })();
  const publishedLabel =
    article.date === news.article.readingTime ? null : article.date;
  const videoDetail = isVideo
    ? news.article.videoDetails[articleRef.index]
    : undefined;
  const leadDetail =
    articleRef.section === "lead" ? news.article.leadDetail : undefined;
  const articleBody = isVideo
    ? (videoDetail?.body ?? news.article.videoBody)
    : (leadDetail?.body ?? news.article.body);
  const articleKeyPoints =
    videoDetail?.keyPoints ?? leadDetail?.keyPoints ?? news.article.keyPoints;
  const overviewTitle = leadDetail?.overviewTitle ?? news.article.overviewTitle;
  const implementationTitle =
    leadDetail?.implementationTitle ?? news.article.implementationTitle;
  const sectionBreak = isVideo ? 2 : leadDetail ? 4 : 3;
  const firstSection = articleBody.slice(0, sectionBreak);
  const secondSection = articleBody.slice(sectionBreak);
  const media = newsDetailMedia[slug];
  const images = media?.images ?? [];
  const videoEmbedUrl = media?.videoEmbedUrl ?? "";
  const primaryImage = videoEmbedUrl ? undefined : images[0];
  const inlineImages = videoEmbedUrl ? images : images.slice(1);
  const sourceUrl = media?.sourceUrl;

  return (
    <article className={styles.article}>
      <div className={`shell ${styles.shell}`}>
        <Link className={styles.back} href="/news">
          <ArrowLeft aria-hidden="true" size={17} />
          {news.article.back}
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.metaCategory}>{article.category}</span>
            {publishedLabel ? <time>{publishedLabel}</time> : null}
          </div>
          <div className={styles.headerGrid}>
            <h1>{article.title}</h1>
            <p>{article.intro}</p>
          </div>
        </header>

        {videoEmbedUrl ? (
          <div className={`${styles.media} ${styles.leadMedia}`}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={videoEmbedUrl}
              title={article.title}
            />
          </div>
        ) : primaryImage ? (
          <div className={styles.imagePresentation}>
            <figure
              className={`${styles.media} ${styles.leadMedia} ${
                media?.position === "top" ? styles.topCropMedia : ""
              }`}
            >
              <Image
                alt={article.title}
                fill
                sizes="(max-width: 700px) calc(100vw - 2rem), 1080px"
                src={primaryImage}
              />
            </figure>
            {sourceUrl ? (
              <a
                className={styles.sourceLink}
                href={sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                {news.article.sourceLabel}
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : null}
          </div>
        ) : null}

        <div className={styles.articleGrid}>
          <section className={styles.contentSection}>
            <span className={styles.sectionNumber}>01</span>
            <h2>{overviewTitle}</h2>
            {firstSection.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <aside className={styles.keyPoints}>
            <h2>{news.article.keyPointsTitle}</h2>
            <ul>
              {articleKeyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          {inlineImages.length > 0 ? (
            <div
              className={`${styles.inlineMedia} ${
                inlineImages.length > 1 ? styles.inlineMediaPair : ""
              }`}
            >
              {inlineImages.map((image, index) => (
                <figure className={styles.media} key={image}>
                  <Image
                    alt={`${article.title} — ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) calc(100vw - 2rem), 700px"
                    src={image}
                  />
                </figure>
              ))}
            </div>
          ) : null}

          {secondSection.length > 0 ? (
            <section
              className={`${styles.contentSection} ${styles.secondarySection}`}
            >
              <span className={styles.sectionNumber}>02</span>
              <h2>{implementationTitle}</h2>
              {secondSection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ) : null}
        </div>

        <aside className={styles.disclaimer}>{news.article.disclaimer}</aside>
      </div>
    </article>
  );
}
