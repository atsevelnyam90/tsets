"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { teamMembers } from "@/lib/team-members";
import styles from "./TeamMemberCards.module.css";
import { TeamMemberPlaceholder } from "./TeamMemberPlaceholder";

export function TeamMemberCards() {
  const { team } = useSiteMessages();
  const groups = [
    {
      className: styles.leadGrid,
      members: teamMembers.slice(0, 4),
      sizes: "(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw",
    },
    {
      className: styles.standardGrid,
      members: teamMembers.slice(4),
      sizes: "(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw",
    },
  ];

  return (
    <div className={styles.grid}>
      {groups.map((group) => (
        <div
          className={`${styles.cardGrid} ${group.className}`}
          key={group.className}
        >
          {group.members.map((member) => {
            const profile = team.members[member.slug];

            return (
              <article className={styles.card} key={member.slug}>
                <Link
                  aria-label={`${profile.name}: ${team.members.viewProfile}`}
                  className={styles.imageLink}
                  href={`/team/${member.slug}`}
                >
                  {member.image ? (
                    <Image alt="" fill sizes={group.sizes} src={member.image} />
                  ) : (
                    <TeamMemberPlaceholder className={styles.placeholder} />
                  )}
                </Link>
                <div className={styles.content}>
                  <h3>{profile.name}</h3>
                  <p>{profile.role}</p>
                  <Link
                    className={styles.profileLink}
                    href={`/team/${member.slug}`}
                  >
                    {team.members.viewProfile}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </div>
  );
}
