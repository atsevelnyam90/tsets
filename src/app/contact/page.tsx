"use client";

import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { LibraryContact } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { siteContact } from "@/lib/site-contact";
import styles from "./contact.module.css";

export default function ContactPage() {
  const { contact } = useSiteMessages();
  const { address, email, phone, social } = siteContact;

  return (
    <>
      <section className={styles.title}>
        <div className="shell">
          <div className={styles.titleCopy}>
            <h1>{contact.title}</h1>
            <p>{contact.intro}</p>
          </div>
          <div className={styles.contactGrid}>
            <a className={styles.contactItem} href={phone.href}>
              <span className={styles.contactIcon}>
                <Phone aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className={styles.contactCopy}>
                <span className={styles.contactLabel}>
                  {contact.phoneLabel}
                </span>
                <strong>{phone.display}</strong>
                <span>{contact.phoneNote}</span>
              </span>
            </a>
            <a className={styles.contactItem} href={`mailto:${email}`}>
              <span className={styles.contactIcon}>
                <Mail aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className={styles.contactCopy}>
                <span className={styles.contactLabel}>
                  {contact.emailLabel}
                </span>
                <strong>{email}</strong>
                <span>{contact.emailNote}</span>
              </span>
            </a>
            <a
              className={styles.contactItem}
              href={social.facebook.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className={styles.contactIcon}>
                <Facebook aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className={styles.contactCopy}>
                <span className={styles.contactLabel}>
                  {contact.facebookLabel}
                </span>
                <strong>{social.facebook.display}</strong>
                <span>{contact.facebookNote}</span>
              </span>
            </a>
            <a
              className={styles.contactItem}
              href={social.instagram.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className={styles.contactIcon}>
                <Instagram aria-hidden="true" size={20} strokeWidth={1.7} />
              </span>
              <span className={styles.contactCopy}>
                <span className={styles.contactLabel}>
                  {contact.instagramLabel}
                </span>
                <strong>{social.instagram.display}</strong>
                <span>{contact.instagramNote}</span>
              </span>
            </a>
            <div className={styles.locationItem}>
              <a
                className={styles.contactItem}
                href={address.mapHref}
                rel="noreferrer"
                target="_blank"
              >
                <span className={styles.contactIcon}>
                  <MapPin aria-hidden="true" size={20} strokeWidth={1.7} />
                </span>
                <span className={styles.contactCopy}>
                  <span className={styles.contactLabel}>
                    {contact.officeLabel}
                  </span>
                  <strong>{contact.officeValue}</strong>
                  <span>{contact.officeNote}</span>
                </span>
              </a>
              <iframe
                allowFullScreen
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={address.mapEmbedHref}
                title={`${contact.officeLabel}: ${contact.officeValue}`}
              />
            </div>
          </div>
        </div>
      </section>
      <LibraryContact />
      <section className={styles.offices} data-template-only>
        <div className="shell">
          <h2>{contact.officesTitle}</h2>
          {contact.offices.map((office) => (
            <article className={styles.office} key={office.city}>
              <h3>{office.city}</h3>
              <address>
                {office.lineOne}
                <br />
                {office.lineTwo}
              </address>
              <div className={styles.contactInfo}>
                <span>{office.note}</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(`${office.city} — ${contact.appointmentSubject}`)}`}
              >
                {contact.appointment}{" "}
                <ArrowRight aria-hidden="true" size={20} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
