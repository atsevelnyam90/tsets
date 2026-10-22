"use client";

import { MessageCircle } from "lucide-react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { siteContact } from "@/lib/site-contact";
import styles from "./FloatingContact.module.css";

export function FloatingContact() {
  const { floatingContact } = useSiteMessages();
  return (
    <a
      aria-label={floatingContact.label}
      className={styles.chat}
      href={`mailto:${siteContact.email}`}
    >
      <i>
        <MessageCircle aria-hidden="true" size={22} strokeWidth={1.8} />
      </i>
    </a>
  );
}
