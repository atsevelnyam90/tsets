"use client";

import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { siteContact } from "@/lib/site-contact";
import type { TeamMemberSlug } from "@/lib/team-members";
import { teamMembers } from "@/lib/team-members";
import styles from "./TeamMemberProfile.module.css";

export function TeamMemberProfile({ slug }: { slug: TeamMemberSlug }) {
  const { common, team } = useSiteMessages();
  const member = teamMembers.find((item) => item.slug === slug);
  const profile = team.members[slug];

  if (!member) return null;

  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.image}>
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              src={member.image}
            />
          </div>
          <div className={styles.copy}>
            <Link className={styles.backLink} href="/team">
              <span aria-hidden="true">←</span>
              {team.members.backToTeam}
            </Link>
            <p className="eyebrow">{team.members.profileEyebrow}</p>
            <h1>{profile.name}</h1>
            <p className={styles.role}>{profile.role}</p>
            <p className={styles.intro}>{team.members.intro}</p>
            <dl className={styles.information}>
              <div>
                <dt>{team.members.firmLabel}</dt>
                <dd>{common.company}</dd>
              </div>
              <div>
                <dt>{team.members.practiceLabel}</dt>
                <dd>{team.members.practiceValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`shell ${styles.contactGrid}`}>
          <div>
            <p className="eyebrow">{team.members.contactEyebrow}</p>
            <h2>{team.members.contactTitle}</h2>
          </div>
          <div>
            <p>{team.members.contactText}</p>
            <div className={styles.contactLinks}>
              <a href={`mailto:${siteContact.email}`}>
                <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
                {team.members.emailLabel}
              </a>
              <a
                aria-label={team.members.facebookLabel}
                href={siteContact.social.facebook.href}
                rel="noreferrer"
                target="_blank"
              >
                <Facebook aria-hidden="true" size={18} />
                Facebook
              </a>
              <a
                aria-label={team.members.instagramLabel}
                href={siteContact.social.instagram.href}
                rel="noreferrer"
                target="_blank"
              >
                <Instagram aria-hidden="true" size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
