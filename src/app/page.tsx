"use client";

import { ArrowUpRight, Gavel, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { TeamMemberPlaceholder } from "@/components/sections/TeamMemberPlaceholder";
import {
  LegalMarquee,
  TrustedLogos,
} from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./page.module.css";

const galleryImages = [
  "/images/litigation.jpg",
  "/images/business-advice.avif",
  "/images/ongoing-counsel.jpg",
] as const;

const serviceRoutes = [
  "/practice-areas/litigation",
  "/practice-areas/business-advisory",
  "/practice-areas/retained-advisory",
] as const;

export default function HomePage() {
  const { common, home, practice, shared } = useSiteMessages();

  return (
    <>
      <section className={styles.hero} data-motion-scope>
        <div aria-hidden="true" className={styles.heroMedia}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-modern-courtroom.avif"
            preload="auto"
          >
            <source src="/videos/tsets-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.heroCopy}>
          <h1 data-reveal="up" data-reveal-delay="100">
            {home.hero.before}
            {home.hero.beforeSeparator}
            {home.hero.emphasis}
            {home.hero.afterSeparator}
            {home.hero.after}
          </h1>
          <p data-reveal="popup" data-reveal-delay="400">
            <Gavel aria-hidden="true" size={31} /> {home.hero.tagline}
          </p>
          <Link
            className={styles.heroCta}
            data-reveal="up"
            data-reveal-delay="500"
            href="/contact"
          >
            {common.consultation}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className={styles.heroServices}>
          {practice.areas.map((area, index) => (
            <Link
              className={styles.heroServiceCard}
              data-reveal="up"
              data-reveal-delay={index * 100}
              href={serviceRoutes[index]}
              key={area.title}
            >
              <span className={styles.heroServiceNumber}>0{index + 1}</span>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
              <span className={styles.heroServiceAction}>
                {home.hero.viewServices}
                <ArrowUpRight aria-hidden="true" size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.strengths} data-motion-scope>
        <div className="shell">
          <div className={styles.strengthIntro}>
            <div data-reveal="up">
              <p className="eyebrow">{home.strengthsIntro.eyebrow}</p>
              <h2>{home.strengthsIntro.title}</h2>
            </div>
            <blockquote
              className={styles.statementQuote}
              data-reveal="up"
              data-reveal-delay="100"
            >
              {home.strengthsIntro.text}
            </blockquote>
          </div>
          <div className={styles.strengthGrid}>
            {home.strengths.map((item, index) => (
              <article
                data-reveal="up"
                data-reveal-delay={index * 100}
                key={item.title}
              >
                <div className={styles.strengthCardHeader}>
                  <span className={styles.strengthNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <TeamMemberPlaceholder
                    className={styles.strengthLogo}
                    variant="mark"
                  />
                </div>
                <span className={styles.strengthKicker}>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustedLogos />

      <section className={styles.expertise} data-motion-scope>
        <div className={`shell ${styles.expertiseGrid}`}>
          <div className={styles.expertiseImage} data-reveal="up">
            <Image
              alt={home.expertise.imageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              src="/images/legal-advisory-workspace.avif"
            />
          </div>
          <div data-reveal="up" data-reveal-delay="100">
            <p className="eyebrow">{home.expertise.eyebrow}</p>
            <h2>{home.expertise.title}</h2>
            <p>{home.expertise.text}</p>
          </div>
        </div>
      </section>

      <LegalMarquee />

      <section className={styles.darkShowcase} data-motion-scope id="news">
        <div className="shell">
          <div className={styles.darkIntro}>
            <h2 data-reveal="up">{home.showcase.title}</h2>
            <blockquote
              className={styles.statementQuote}
              data-reveal="up"
              data-reveal-delay="100"
            >
              {home.showcase.text}
            </blockquote>
          </div>
        </div>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div data-reveal="up" data-reveal-delay={index * 100} key={image}>
              <Image alt="" fill sizes="33vw" src={image} />
              <span>{home.showcase.gallery[index]}</span>
            </div>
          ))}
        </div>

        <div className={`shell ${styles.testimonial}`} data-reveal="up">
          <div aria-hidden="true" className={styles.quoteMark}>
            <Quote size={38} strokeWidth={1.25} />
          </div>
          <blockquote>{home.showcase.quote}</blockquote>
          <strong>{common.founder}</strong>
          <span>
            <Link href="/interview">{home.showcase.quoteMeta}</Link>
          </span>
        </div>
      </section>

      <section className={styles.homeContact} data-motion-scope>
        <div className={`shell ${styles.homeContactGrid}`}>
          <div className={styles.homeContactImage} data-reveal="up">
            <Image
              alt={home.contactImageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              src="/images/expert-guidance.jpg"
            />
          </div>
          <div
            className={styles.homeContactForm}
            data-reveal="up"
            data-reveal-delay="100"
          >
            <p className="eyebrow">{shared.contactEyebrow}</p>
            <h2>{shared.contactTitle}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
