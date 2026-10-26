"use client";

import Image from "next/image";
import Link from "next/link";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { LibraryContact } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./team.module.css";

export default function TeamPage() {
  const { common, team } = useSiteMessages();
  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroImage}>
            <Image
              alt={team.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/team-hero.jpg"
            />
          </div>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{team.hero.eyebrow}</p>
            <h1>{team.hero.title}</h1>
            <p>{team.hero.text}</p>
            <Link className="button" href="/contact">
              {common.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.founderProfile}>
        <div className={`shell ${styles.founderGrid}`}>
          <div>
            <p className="eyebrow">{common.founderRole}</p>
            <h2>{common.founder}</h2>
            <p>{team.founder.bio}</p>
            <Link href="/interview">{team.founder.readInterview}</Link>
          </div>
          <dl>
            {team.founder.facts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.team}>
        <div className="shell">
          <TeamMemberCards />
        </div>
      </section>

      <section className={styles.awards}>
        <div className="shell">
          <p className="eyebrow">{team.awards.eyebrow}</p>
          <h2>{team.awards.title}</h2>
          {team.awards.items.map((award) => (
            <div className={styles.awardRow} key={award[0]}>
              {award.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <LibraryContact />
    </>
  );
}
