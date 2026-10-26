"use client";

import {
  Compass,
  Eye,
  Gem,
  GraduationCap,
  Scale,
  Target,
  UsersRound,
} from "lucide-react";
import { type PointerEvent as ReactPointerEvent, useState } from "react";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

const identityIcons = [Eye, Compass] as const;
const principleIcons = [UsersRound, Scale, Target, GraduationCap] as const;
const magneticStrength = 0.06;
const magneticMaxOffset = 12;
const identityVariantValues = [
  "current",
  "editorial",
  "framed",
  "timeline",
  "gradient",
  "outline",
  "ambition",
] as const;

type IdentityVariant = (typeof identityVariantValues)[number];

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
  const [identityVariant, setIdentityVariant] =
    useState<IdentityVariant>("current");
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
        <div
          className={styles.identityShowcase}
          data-identity-variant={identityVariant}
        >
          <div className={styles.identityVariantPicker}>
            <label htmlFor="identity-variant">
              {about.identity.showcasePicker}
            </label>
            <select
              id="identity-variant"
              onChange={(event) =>
                setIdentityVariant(event.target.value as IdentityVariant)
              }
              value={identityVariant}
            >
              {identityVariantValues.map((variant, index) => (
                <option key={variant} value={variant}>
                  {about.identity.showcaseOptions[index]}
                </option>
              ))}
            </select>
          </div>

          {identityVariant !== "current" ? (
            <header className={styles.identityHeading}>
              {identityVariant === "ambition" ? (
                <h1 id="identity-title">{about.identity.ambitionTitle}</h1>
              ) : (
                <h1 id="identity-title">
                  {about.identity.showcaseTitle}{" "}
                  <em>{about.identity.showcaseEmphasis}</em>{" "}
                  {about.identity.showcaseEnding}
                </h1>
              )}
            </header>
          ) : null}

          <div className={styles.identityGrid}>
            {identityStatements.map((item, index) => {
              const Icon = identityIcons[index];

              return (
                <article
                  className={styles.identityStatement}
                  key={item.title}
                  {...magneticCardEvents}
                >
                  <div className={styles.identityMeta} aria-hidden="true">
                    <span className={styles.identityIcon}>
                      <Icon />
                    </span>
                    <span className={styles.identityNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div
                    className={styles.identityRow}
                    data-reveal="fade"
                    data-reveal-delay={index * 140}
                  >
                    <div className={styles.identityLabel}>
                      {identityVariant === "current" && index === 0 ? (
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
              );
            })}
            <article
              className={`${styles.identityStatement} ${styles.identityValues}`}
              {...magneticCardEvents}
            >
              <div className={styles.identityMeta} aria-hidden="true">
                <span className={styles.identityIcon}>
                  <Gem />
                </span>
                <span className={styles.identityNumber}>03</span>
              </div>
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
                <ol className={styles.valuesManifesto}>
                  {about.identity.values.map((value, index) => (
                    <li key={value}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{value}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          </div>
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
