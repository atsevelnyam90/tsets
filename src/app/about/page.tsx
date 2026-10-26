"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

const magneticStrength = 0.06;
const magneticMaxOffset = 12;

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
  const { about } = useSiteMessages();
  const identityStatements = [
    {
      text: about.identity.visionText,
      title: about.identity.visionTitle,
    },
    ...about.identity.items,
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
        </div>
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
