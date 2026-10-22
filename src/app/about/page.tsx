"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

function RibbonTrack({ text }: { text: string }) {
  return (
    <div aria-hidden="true" className={styles.ribbonTrack}>
      {[0, 1].map((group) => (
        <div className={styles.ribbonGroup} key={group}>
          {[0, 1, 2].map((copy) => (
            <span key={copy}>{text}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const { about, common, team } = useSiteMessages();

  return (
    <>
      <section className={styles.intro} data-motion-scope id="services">
        <div className={`shell ${styles.introGrid}`}>
          <div className={styles.introImage} data-reveal="up">
            <Image
              alt={team.members["lkhagvasuren-ganbold"].name}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              src="/images/team-lkhagvasuren.avif"
            />
          </div>
          <div
            className={styles.introCopy}
            data-reveal="up"
            data-reveal-delay="120"
          >
            <p className="eyebrow">{common.founderRole}</p>
            <h1>{common.founder}</h1>
            <p>{team.founder.bio}</p>
            <dl className={styles.founderFacts}>
              {team.founder.facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
            <Link
              className={styles.founderProfileLink}
              href="/team/lkhagvasuren-ganbold"
            >
              {team.members.viewProfile}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.team} id="team">
        <div className="shell">
          <div className={styles.teamHeading}>
            <h2>{about.team.title}</h2>
          </div>
          <TeamMemberCards hiddenSlug="lkhagvasuren-ganbold" />
        </div>
      </section>

      <section className={styles.advantages} id="advantages">
        <div className={`shell ${styles.advantagesGrid}`}>
          <div>
            <p className="eyebrow">{about.advantages.eyebrow}</p>
            <h2>{about.advantages.title}</h2>
            <p>{about.advantages.intro}</p>
          </div>
          <ol>
            {about.advantages.items.map((advantage, index) => (
              <li key={advantage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{advantage}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className={styles.ribbons}
        aria-label={about.ribbon}
        data-motion-scope
        data-reveal="ribbons"
      >
        <div className={styles.ribbon}>
          <RibbonTrack text={about.ribbon} />
        </div>
        <div className={`${styles.ribbon} ${styles.ribbonGold}`}>
          <RibbonTrack text={about.ribbon} />
        </div>
      </section>

      <TrustedLogos />
    </>
  );
}
