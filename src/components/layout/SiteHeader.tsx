"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import {
  usePublicLocale,
  useSiteMessages,
} from "@/lib/i18n/PublicI18nProvider";
import { localizeBusinessInterviews } from "@/lib/interview-localizations";
import { businessInterviews } from "@/lib/interviews";
import { siteContact } from "@/lib/site-contact";
import { LanguageSelector } from "./LanguageSelector";
import styles from "./SiteHeader.module.css";

const practiceLinks = [
  {
    href: "/practice-areas/litigation",
    image: "/images/litigation.jpg",
  },
  {
    href: "/practice-areas/business-advisory",
    image: "/images/practice-menu-advisory.jpg",
  },
  {
    href: "/practice-areas/retained-advisory",
    image: "/images/ongoing-counsel.jpg",
  },
  {
    href: "/practice-areas/enforcement-proceedings",
    image: "/images/practice-menu-103.jpg",
  },
  {
    href: "/practice-areas/arbitration",
    image: "/images/business-advice.avif",
  },
] as const;

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512">
      <path d="M207.029 381.476 12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0Z" />
    </svg>
  );
}

export function SiteHeader() {
  const messages = useSiteMessages();
  const { locale } = usePublicLocale();
  const { header, interview } = messages;
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<
    "interviews" | "services" | null
  >(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
    setMobileOpenGroup(null);
  };
  const interviewLinks = [
    {
      href: "/interview",
      image: "/images/tsets-lkhagvasuren-interview.avif",
      menuDate: "2025.06.10",
      sourceName: "Business.mn",
      title: interview.title,
    },
    ...localizeBusinessInterviews(businessInterviews, locale).map((item) => ({
      href: `/interview/${item.slug}`,
      image: item.image,
      menuDate: item.menuDate,
      sourceName: item.sourceName,
      title: item.title,
    })),
  ] as const;
  const links = [
    { href: "/", label: header.nav.home },
    {
      id: "services",
      children: practiceLinks.map((item, index) => ({
        href: item.href,
        label: header.practiceLinks[index],
      })),
      label: header.nav.services,
    },
    { href: "/about", label: header.nav.about },
    {
      id: "interviews",
      children: interviewLinks.map((item) => ({
        href: item.href,
        label: item.title,
      })),
      label: header.nav.interview,
    },
    { href: "/contact", label: header.nav.contact },
  ] as const;
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label={header.logoLabel}>
          <Image
            alt="Tsets Partners"
            height={256}
            priority
            src="/images/tsets-logo-transparent.png"
            width={256}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label={header.mainNav}>
          <Link
            className={pathname === "/" ? styles.active : undefined}
            href="/"
          >
            {header.nav.home}
          </Link>

          <div className={styles.practiceGroup}>
            <Link
              className={
                pathname.startsWith("/practice-areas")
                  ? styles.active
                  : undefined
              }
              href={practiceLinks[0].href}
            >
              {header.nav.services}
              <span>
                <ChevronIcon />
              </span>
            </Link>
            <div className={`${styles.megaMenu} ${styles.practiceMenu}`}>
              <div className={styles.practiceMenuInner}>
                <div className={styles.practiceIndex}>
                  <p>{header.nav.services}</p>
                  <nav aria-label={header.nav.services}>
                    {practiceLinks.map((item, index) => (
                      <Link href={item.href} key={item.href}>
                        {header.practiceLinks[index]}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className={styles.practiceCards}>
                  {practiceLinks.map((item, index) => (
                    <Link href={item.href} key={item.href}>
                      <span className={styles.practiceImage}>
                        <Image alt="" fill sizes="190px" src={item.image} />
                      </span>
                      <strong>{header.practiceLinks[index]}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            className={pathname === "/about" ? styles.active : undefined}
            href="/about"
          >
            {header.nav.about}
          </Link>

          <div className={styles.interviewGroup}>
            <Link
              className={
                pathname.startsWith("/interview") ? styles.active : undefined
              }
              href="/interview"
            >
              {header.nav.interview}
              <span>
                <ChevronIcon />
              </span>
            </Link>
            <div className={`${styles.megaMenu} ${styles.interviewMenu}`}>
              <div className={styles.interviewMenuInner}>
                <p>{header.nav.interview}</p>
                <div className={styles.interviewCards}>
                  {interviewLinks.map((item) => (
                    <Link href={item.href} key={item.href}>
                      <span className={styles.interviewImage}>
                        <Image alt="" fill sizes="130px" src={item.image} />
                      </span>
                      <span>
                        <small>
                          {item.sourceName} · {item.menuDate}
                        </small>
                        <strong>{item.title}</strong>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link
            className={pathname === "/contact" ? styles.active : undefined}
            href="/contact"
          >
            {header.nav.contact}
          </Link>
        </nav>

        <div className={styles.viewTools}>
          <LanguageSelector />
        </div>

        <details
          className={styles.mobileMenu}
          onToggle={(event) => {
            if (!event.currentTarget.open) setMobileOpenGroup(null);
          }}
          ref={menuRef}
        >
          <summary aria-label={header.openMenu}>
            <Menu className={styles.menuIcon} aria-hidden="true" />
            <X className={styles.closeIcon} aria-hidden="true" />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label={header.mobileNav}>
              {links.map((item) =>
                "children" in item ? (
                  <div className={styles.mobileServices} key={item.label}>
                    {(() => {
                      const isOpen = mobileOpenGroup === item.id;
                      const listId = `mobile-${item.id}-list`;

                      return (
                        <>
                          <button
                            aria-controls={listId}
                            aria-expanded={isOpen}
                            className={styles.mobileServicesButton}
                            onClick={() =>
                              setMobileOpenGroup((group) =>
                                group === item.id ? null : item.id,
                              )
                            }
                            type="button"
                          >
                            {item.label}
                            <ChevronIcon />
                          </button>
                          <div
                            aria-hidden={!isOpen}
                            className={styles.mobileServicesList}
                            data-open={isOpen ? "" : undefined}
                            id={listId}
                          >
                            <div className={styles.mobileServicesListInner}>
                              {item.children.map((child) => (
                                <Link
                                  href={child.href}
                                  key={child.href}
                                  onClick={closeMenu}
                                  tabIndex={isOpen ? undefined : -1}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <Link href={item.href} key={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className={styles.mobileMeta}>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              <a
                href={siteContact.social.facebook.href}
                rel="noreferrer"
                target="_blank"
              >
                {siteContact.social.facebook.label}
              </a>
              <a
                href={siteContact.social.instagram.href}
                rel="noreferrer"
                target="_blank"
              >
                {siteContact.social.instagram.label}
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
