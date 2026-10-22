"use client";

import type { FormEvent } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { siteContact } from "@/lib/site-contact";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { form: formMessages } = useSiteMessages();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const topic = String(form.get("subject") ?? formMessages.defaultSubject);
    const message = String(form.get("message") ?? "");
    const body = [
      `${formMessages.name}: ${name}`,
      `${formMessages.email}: ${email}`,
      `${formMessages.phone}: ${phone}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${siteContact.email}?subject=${encodeURIComponent(
      topic,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        autoComplete="name"
        name="name"
        placeholder={formMessages.name}
        required
      />
      <input
        autoComplete="email"
        name="email"
        placeholder={formMessages.email}
        required
        type="email"
      />
      <input
        autoComplete="tel"
        inputMode="tel"
        name="phone"
        placeholder={formMessages.phone}
        required
        type="tel"
      />
      <input name="subject" placeholder={formMessages.subject} required />
      <textarea
        name="message"
        placeholder={formMessages.message}
        required
        rows={5}
      />
      <label className={styles.consent}>
        <input required type="checkbox" />
        <span>{formMessages.consent}</span>
      </label>
      <button type="submit">{formMessages.submit}</button>
    </form>
  );
}
