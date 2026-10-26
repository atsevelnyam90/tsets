"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { ContactForm } from "./ContactForm";
import styles from "./ThemeSections.module.css";

type ClientLogo = {
  alt: string;
  href?: string;
  src: string;
  variant: "default" | "light";
};

const clientLogos = [
  {
    alt: "Алко Групп",
    href: "https://alkogroup.com/",
    src: "/images/client-alko-group.svg",
    variant: "light",
  },
  {
    alt: "Практикал Даатгал",
    href: "https://www.practical.mn/",
    src: "/images/client-practical-insurance.png",
    variant: "default",
  },
  {
    alt: "Милая Фүүдс",
    href: "https://www.milaya.mn/",
    src: "/images/client-milaya-foods.png",
    variant: "default",
  },
  {
    alt: "Хөдөө аж ахуйн корпораци ТӨХХК",
    href: "https://www.agricorp.mn/",
    src: "/images/client-agricorp.png",
    variant: "default",
  },
  {
    alt: "Хүслэнт Бүтээмж ХХК",
    src: "/images/client-huslent-buteemj.webp",
    variant: "default",
  },
  {
    alt: "Michelle Restaurant & Lounge",
    src: "/images/client-michelle-light.webp",
    variant: "default",
  },
  {
    alt: "Монгол Тайж Металл",
    src: "/images/client-mongol-taij-metal.webp",
    variant: "default",
  },
] as const satisfies readonly ClientLogo[];

export function TrustedLogos() {
  const { shared } = useSiteMessages();
  return (
    <section className={styles.logos} data-motion-scope>
      <div className={`shell ${styles.logoRow}`}>
        <p className={`eyebrow ${styles.logoHeading}`} data-reveal="fade">
          {shared.clients}
        </p>
        {clientLogos.map((logo, index) => {
          const className = [
            styles.logoItem,
            logo.variant === "light" ? styles.lightLogo : "",
          ]
            .filter(Boolean)
            .join(" ");
          const image = (
            <Image
              alt={logo.alt}
              height={48}
              key={logo.src}
              src={logo.src}
              width={145}
            />
          );
          const revealProps = {
            "data-reveal": "fade",
            "data-reveal-delay": (index + 1) * 80,
          } as const;

          return "href" in logo ? (
            <a
              aria-label={logo.alt}
              className={className}
              href={logo.href}
              key={logo.src}
              rel="noreferrer"
              target="_blank"
              {...revealProps}
            >
              {image}
            </a>
          ) : (
            <span className={className} key={logo.src} {...revealProps}>
              {image}
            </span>
          );
        })}
      </div>
    </section>
  );
}

export function LegalMarquee() {
  const { shared } = useSiteMessages();
  const words = (
    <>
      {shared.marquee.map((word) => (
        <Fragment key={word}>
          <span>✦</span> {word}{" "}
        </Fragment>
      ))}
    </>
  );

  return (
    <section
      className={styles.marquee}
      aria-label={shared.valuesLabel}
      data-motion-scope
    >
      <div className={styles.marqueeTrack}>
        <div>{words}</div>
        <div aria-hidden="true">{words}</div>
      </div>
    </section>
  );
}

export function LibraryContact() {
  const { shared } = useSiteMessages();
  return (
    <section className={styles.libraryContact}>
      <div className={`shell ${styles.contactShell}`}>
        <div className={styles.contactCard}>
          <h2>{shared.contactTitle}</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
