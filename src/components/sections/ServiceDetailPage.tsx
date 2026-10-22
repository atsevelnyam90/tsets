"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  Copyright,
  FilePenLine,
  FileSignature,
  Gavel,
  HandCoins,
  House,
  IdCard,
  Landmark,
  MapPinned,
  MessageSquareText,
  Pickaxe,
  ReceiptText,
  Scale,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./ServiceDetailPage.module.css";

export type ServicePageKey =
  | "litigation"
  | "business-advisory"
  | "retained-advisory"
  | "enforcement-proceedings"
  | "arbitration";

type ParentServiceKey =
  | "litigation"
  | "advisory"
  | "retained"
  | "enforcement"
  | "arbitration";

const parentServiceByRoute: Record<ServicePageKey, ParentServiceKey> = {
  arbitration: "arbitration",
  "business-advisory": "advisory",
  "enforcement-proceedings": "enforcement",
  litigation: "litigation",
  "retained-advisory": "retained",
};

const litigationGroupCount = 3;

const serviceCardIcons = {
  advisory: [
    [
      Building2,
      Landmark,
      House,
      Scale,
      ChartNoAxesCombined,
      FileSignature,
      Pickaxe,
    ],
  ],
  arbitration: [[Scale]],
  enforcement: [[Gavel]],
  litigation: [
    [
      FileSignature,
      Building2,
      HandCoins,
      ShieldCheck,
      Copyright,
      BadgeCheck,
      ChartNoAxesCombined,
    ],
    [Pickaxe, MapPinned, IdCard, ReceiptText, ClipboardCheck],
    [ShieldCheck],
  ],
  retained: [
    [
      MessageSquareText,
      ClipboardCheck,
      FilePenLine,
      Scale,
      Gavel,
      SearchCheck,
    ],
  ],
} satisfies Record<
  ParentServiceKey,
  readonly (readonly LucideIcon[])[]
>;

type ServiceDetailPageProps = {
  service: ServicePageKey;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const { common, practice } = useSiteMessages();
  const parentService = parentServiceByRoute[service];

  const content = (() => {
    if (parentService === "advisory") {
      return {
        description: practice.areas[1].text,
        items: practice.oneTime,
        title: practice.full.oneTimeTitle,
      };
    }
    if (parentService === "retained") {
      return {
        description: practice.retained.description,
        items: practice.retained.items,
        title: practice.full.retainedTitle,
      };
    }
    if (parentService === "enforcement") {
      return {
        description: practice.litigation[3].description,
        items: practice.litigation[3].items,
        title: practice.litigation[3].title,
      };
    }
    if (parentService === "arbitration") {
      return {
        description: practice.litigation[4].description,
        items: practice.litigation[4].items,
        title: practice.litigation[4].title,
      };
    }

    return {
      description: practice.areas[0].text,
      items: null,
      title: practice.full.litigationTitle,
    };
  })();

  const renderServiceCards = (items: readonly string[], groupIndex = 0) => (
    <ul className={styles.serviceCards}>
      {items.map((item, itemIndex) => {
        const Icon =
          serviceCardIcons[parentService][groupIndex]?.[itemIndex] ?? Scale;

        return (
          <li className={styles.serviceCard} key={item}>
            <span aria-hidden="true" className={styles.cardIcon}>
              <Icon strokeWidth={1.8} />
            </span>
            <span className={styles.cardText}>{item}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className={styles.contentSection}>
      <div className={`shell ${styles.contentGrid}`}>
        <header className={styles.pageIntro}>
          <div className={styles.introTitle}>
            <h1>{content.title}</h1>
          </div>
          <div className={styles.introAside}>
            <p>{content.description}</p>
            <Link className={styles.introCta} href="/contact">
              {common.consultation}
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </header>

        <article className={styles.article}>
          {parentService === "litigation" ? (
            <div className={styles.serviceAccordions}>
              {practice.litigation
                .slice(0, litigationGroupCount)
                .map((group, groupIndex) => (
                  <details
                    className={styles.litigationGroup}
                    key={group.title}
                    open={groupIndex === 0}
                  >
                    <summary className={styles.groupSummary}>
                      <span className={styles.groupNumber}>
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.groupQuestion}>
                        {group.title}
                      </span>
                      <span aria-hidden="true" className={styles.groupToggle} />
                    </summary>
                    <div className={styles.groupBody}>
                      <div className={styles.groupBodyInner}>
                        <p>{group.description}</p>
                        {renderServiceCards(group.items, groupIndex)}
                      </div>
                    </div>
                  </details>
                ))}
            </div>
          ) : content.items ? (
            renderServiceCards(content.items)
          ) : null}
        </article>
      </div>
    </section>
  );
}
