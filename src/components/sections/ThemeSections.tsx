"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
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
  {
    alt: "Ар Үр Фермер ХХК",
    src: "/images/client-ar-ur-farmer.png",
    variant: "default",
  },
  {
    alt: "Таван Богд Финанс ББСБ",
    src: "/images/client-tavan-bogd-finance.png",
    variant: "default",
  },
  {
    alt: "Blue Spot Resort Terelj",
    src: "/images/client-blue-spot-resort.png",
    variant: "default",
  },
  {
    alt: "Home Plaza",
    src: "/images/client-home-plaza.png",
    variant: "default",
  },
  {
    alt: "Jemson Logistic LLC",
    src: "/images/client-jemson-logistic.png",
    variant: "default",
  },
  {
    alt: "Хасуд Бат ХХК",
    src: "/images/client-khasud-bat.png",
    variant: "default",
  },
] as const satisfies readonly ClientLogo[];

const logosPerSlide = 2;
const clientLogoSlides = Array.from(
  { length: Math.ceil(clientLogos.length / logosPerSlide) },
  (_, index) =>
    clientLogos.slice(index * logosPerSlide, (index + 1) * logosPerSlide),
);

export function TrustedLogos() {
  const { shared } = useSiteMessages();
  const logoTrackRef = useRef<HTMLDivElement>(null);
  const [activeLogoSlide, setActiveLogoSlide] = useState(0);

  function scrollToLogoSlide(index: number) {
    const track = logoTrackRef.current;
    const slide =
      track?.querySelectorAll<HTMLElement>("[data-logo-slide]")[index];
    if (!track || !slide) return;

    const trackRect = track.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      behavior: reducedMotion ? "auto" : "smooth",
      left: track.scrollLeft + slideRect.left - trackRect.left,
    });
    setActiveLogoSlide(index);
  }

  function handleLogoScroll() {
    const track = logoTrackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    const slides = track.querySelectorAll<HTMLElement>("[data-logo-slide]");
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestIndex = index;
        closestDistance = distance;
      }
    });

    setActiveLogoSlide(closestIndex);
  }

  return (
    <section className={styles.logos} data-motion-scope>
      <div className="shell">
        <p className={`eyebrow ${styles.logoHeading}`} data-reveal="fade">
          {shared.clients}
        </p>
        <div
          className={styles.logoTrack}
          id="client-logo-carousel"
          onScroll={handleLogoScroll}
          ref={logoTrackRef}
        >
          {clientLogoSlides.map((slide, slideIndex) => (
            <div
              className={styles.logoSlide}
              data-logo-slide
              key={slide[0].src}
            >
              {slide.map((logo, logoIndex) => {
                const index = slideIndex * logosPerSlide + logoIndex;
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
          ))}
        </div>
        <div className={styles.logoControls}>
          <button
            aria-controls="client-logo-carousel"
            aria-label={shared.carouselPrevious}
            className={styles.logoArrow}
            disabled={activeLogoSlide === 0}
            onClick={() => scrollToLogoSlide(activeLogoSlide - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
          </button>
          <div className={styles.logoDots}>
            {clientLogoSlides.map((slide, index) => (
              <button
                aria-controls="client-logo-carousel"
                aria-current={activeLogoSlide === index ? "true" : undefined}
                aria-label={`${shared.clients} ${index + 1}`}
                className={styles.logoDot}
                key={slide[0].src}
                onClick={() => scrollToLogoSlide(index)}
                type="button"
              />
            ))}
          </div>
          <button
            aria-controls="client-logo-carousel"
            aria-label={shared.carouselNext}
            className={styles.logoArrow}
            disabled={activeLogoSlide === clientLogoSlides.length - 1}
            onClick={() => scrollToLogoSlide(activeLogoSlide + 1)}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
          </button>
        </div>
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
          <p className="eyebrow">{shared.contactEyebrow}</p>
          <h2>{shared.contactTitle}</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
