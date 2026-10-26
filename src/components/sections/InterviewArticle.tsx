"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/interview/interview.module.css";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";

type InterviewArticleData = {
  contents?: string;
  contentsLabel?: string;
  image: string;
  imageAlt: string;
  intro: string;
  note?: string;
  noteTitle?: string;
  publishedAt: string;
  sections: readonly {
    paragraphs: readonly string[];
    quote: string;
    title: string;
  }[];
  sourceLabel?: string;
  sourceName?: string;
  sourceUrl?: string;
  speakerName?: string;
  speakerRole?: string;
  title: string;
};

export function InterviewArticle({
  article,
}: {
  article: InterviewArticleData;
}) {
  const { common } = useSiteMessages();
  const [activeSection, setActiveSection] = useState(0);
  const contentsNav = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = article.sections
      .map((_, index) => document.getElementById(`interview-${index + 1}`))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (!visibleSection) return;

        const sectionIndex = Number(
          visibleSection.target.id.replace("interview-", ""),
        );
        setActiveSection(sectionIndex - 1);
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, [article.sections]);

  useEffect(() => {
    const nav = contentsNav.current;
    const activeLink = nav?.querySelector<HTMLAnchorElement>(
      `a[href="#interview-${activeSection + 1}"]`,
    );
    if (!nav || !activeLink) return;

    const navBounds = nav.getBoundingClientRect();
    const linkBounds = activeLink.getBoundingClientRect();

    if (linkBounds.top < navBounds.top) {
      nav.scrollTop -= navBounds.top - linkBounds.top;
    } else if (linkBounds.bottom > navBounds.bottom) {
      nav.scrollTop += linkBounds.bottom - navBounds.bottom;
    }
  }, [activeSection]);

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 850px) 100vw, 64vw"
            src={article.image}
          />
          <div className={styles.photoCaption}>
            <strong>{article.speakerName ?? common.founder}</strong>
            <span>{article.speakerRole ?? common.founderRole}</span>
          </div>
        </div>

        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">
              {article.sourceName ?? common.company} · {article.publishedAt}
            </p>
            <h1>{article.title}</h1>
            <p className={styles.intro}>{article.intro}</p>
            <div className={styles.heroActions}>
              {article.sourceUrl && article.sourceLabel ? (
                <a
                  className="button buttonGold"
                  href={article.sourceUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {article.sourceLabel}
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              ) : null}
              <Link className="button buttonOutline" href="/contact">
                {common.consultation}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <article className={styles.article}>
        <div className={`shell ${styles.articleGrid}`}>
          <aside>
            <p>{article.contents ?? "Ярилцлагын агуулга"}</p>
            <nav
              aria-label={article.contentsLabel ?? "Ярилцлагын агуулга"}
              ref={contentsNav}
            >
              {article.sections.map((section, index) => (
                <a
                  aria-current={
                    activeSection === index ? "location" : undefined
                  }
                  className={
                    activeSection === index ? styles.activeSection : undefined
                  }
                  href={`#interview-${index + 1}`}
                  key={section.title}
                  onClick={() => setActiveSection(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.content}>
            {article.sections.map((section, index) => (
              <section id={`interview-${index + 1}`} key={section.title}>
                <p className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.quote ? (
                  <blockquote>
                    <Quote aria-hidden="true" size={28} strokeWidth={1.3} />
                    <p>{section.quote}</p>
                    <cite>{article.speakerName ?? common.founder}</cite>
                  </blockquote>
                ) : null}
              </section>
            ))}

            {article.noteTitle && article.note ? (
              <div className={styles.note}>
                <strong>{article.noteTitle}</strong>
                <p>{article.note}</p>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </>
  );
}
