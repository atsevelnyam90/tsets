"use client";

import { GraduationCap, Scale, Target, UsersRound } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

const magneticStrength = 0.06;
const magneticMaxOffset = 12;
const principleIcons = [UsersRound, Scale, Target, GraduationCap] as const;

function moveMagneticCard(event: ReactPointerEvent<HTMLElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const offsetX = Math.max(
    -magneticMaxOffset,
    Math.min(
      magneticMaxOffset,
      (event.clientX - (bounds.left + bounds.width / 2)) * magneticStrength,
    ),
  );
  const offsetY = Math.max(
    -magneticMaxOffset,
    Math.min(
      magneticMaxOffset,
      (event.clientY - (bounds.top + bounds.height / 2)) * magneticStrength,
    ),
  );

  card.dataset.magneticActive = "";
  card.style.setProperty("--magnetic-x", `${offsetX}px`);
  card.style.setProperty("--magnetic-y", `${offsetY}px`);
}

function resetMagneticCard(event: ReactPointerEvent<HTMLElement>) {
  const card = event.currentTarget;

  delete card.dataset.magneticActive;
  card.style.setProperty("--magnetic-x", "0px");
  card.style.setProperty("--magnetic-y", "0px");
}

const magneticCardEvents = {
  onPointerCancel: resetMagneticCard,
  onPointerLeave: resetMagneticCard,
  onPointerMove: moveMagneticCard,
};

export default function AboutPage() {
  const { about } = useSiteMessages();
  const identityStatements = [
    {
      text: about.identity.visionText,
      title: about.identity.visionTitle,
    },
    {
      text: about.identity.missionText,
      title: about.identity.missionTitle,
    },
  ];

  return (
    <>
      <section
        aria-labelledby="identity-title"
        className={styles.identity}
        data-motion-scope
        id="services"
      >
        <div className={`shell ${styles.identityGrid}`}>
          {identityStatements.map((item, index) => (
            <article
              className={styles.identityStatement}
              key={item.title}
              {...magneticCardEvents}
            >
              <div
                className={styles.identityRow}
                data-reveal="fade"
                data-reveal-delay={index * 140}
              >
                <div className={styles.identityLabel}>
                  {index === 0 ? (
                    <h1 id="identity-title">
                      <em>{item.title}</em>
                    </h1>
                  ) : (
                    <h2>
                      <em>{item.title}</em>
                    </h2>
                  )}
                </div>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
          <article
            className={`${styles.identityStatement} ${styles.identityValues}`}
            {...magneticCardEvents}
          >
            <div
              className={styles.identityRow}
              data-reveal="fade"
              data-reveal-delay={280}
            >
              <div className={styles.identityLabel}>
                <h2>
                  <em>{about.identity.valuesTitle}</em>
                </h2>
              </div>
              <ul className={styles.valuesList}>
                {about.identity.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
        <section className={styles.principles} id="principles">
          <div className={`shell ${styles.principlesInner}`}>
            <div className={styles.principlesHeading} data-reveal="fade">
              <h2>
                <em>{about.identity.principlesTitle}</em>
              </h2>
            </div>
            <div className={styles.principlesGrid}>
              {about.identity.principles.map((principle, index) => {
                const Icon = principleIcons[index];

                return (
                  <article
                    className={`${styles.identityStatement} ${styles.principleCard}`}
                    data-reveal="fade"
                    data-reveal-delay={index * 100}
                    key={principle.title}
                    {...magneticCardEvents}
                  >
                    <div className={styles.principleMeta}>
                      <span className={styles.principleIcon} aria-hidden="true">
                        <Icon />
                      </span>
                      <span className={styles.principleNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      <section className={styles.team} id="team">
        <div className="shell">
          <div className={styles.teamHeading}>
            <h2>{about.team.title}</h2>
          </div>
          <TeamMemberCards />
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

      <TrustedLogos />
    </>
  );
}
