"use client";

import { NextIntlClientProvider } from "next-intl";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import {
  defaultPublicLocale,
  isPublicLocale,
  type PublicLocale,
  publicIntlMessages,
  publicLocaleHtmlLang,
  publicMessages,
} from "./config";

type PublicLocaleContextValue = {
  locale: PublicLocale;
  selectLocale: (locale: PublicLocale) => void;
};

const PublicLocaleContext = createContext<PublicLocaleContextValue | null>(
  null,
);
const storageKey = "tsets-public-locale";

export function PublicI18nProvider({
  children,
  locale: initialLocale = defaultPublicLocale,
}: {
  children: ReactNode;
  locale?: PublicLocale;
}) {
  const [locale, setLocale] = useState<PublicLocale>(initialLocale);
  const localeRef = useRef(locale);

  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem(storageKey);
      if (isPublicLocale(savedLocale)) setLocale(savedLocale);
    } catch {
      // The default locale remains available when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = publicLocaleHtmlLang[locale];
    return () => {
      document.documentElement.lang = previousLang;
    };
  }, [locale]);

  useEffect(() => {
    const messages = publicMessages[locale];
    const updateMetadata = () => {
      if (document.title !== messages.meta.title) {
        document.title = messages.meta.title;
      }
      for (const description of document.querySelectorAll<HTMLMetaElement>(
        'meta[name="description"]',
      )) {
        if (description.content !== messages.meta.description) {
          description.content = messages.meta.description;
        }
      }
    };

    updateMetadata();
    const frame = requestAnimationFrame(updateMetadata);
    const observer = new MutationObserver(updateMetadata);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [locale]);

  const selectLocale = useCallback((nextLocale: PublicLocale) => {
    if (nextLocale === localeRef.current) return;

    const commitLocale = () => {
      localeRef.current = nextLocale;
      setLocale(nextLocale);
      try {
        localStorage.setItem(storageKey, nextLocale);
      } catch {
        // Language switching still works for the current visit without persistence.
      }
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof document.startViewTransition !== "function"
    ) {
      commitLocale();
      return;
    }

    const root = document.documentElement;
    root.dataset.localeTransition = "active";
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        commitLocale();
      });
    });
    const finishTransition = () => {
      delete root.dataset.localeTransition;
    };
    transition.finished.then(finishTransition, finishTransition);
  }, []);

  const contextValue = useMemo(
    () => ({ locale, selectLocale }),
    [locale, selectLocale],
  );

  return (
    <PublicLocaleContext.Provider value={contextValue}>
      <NextIntlClientProvider
        locale={locale}
        messages={publicIntlMessages[locale]}
        timeZone="Asia/Ulaanbaatar"
      >
        {children}
      </NextIntlClientProvider>
    </PublicLocaleContext.Provider>
  );
}

export function usePublicLocale(): PublicLocaleContextValue {
  const context = useContext(PublicLocaleContext);
  if (!context) {
    throw new Error("usePublicLocale must be used inside PublicI18nProvider");
  }
  return context;
}

export function useSiteMessages() {
  const { locale } = usePublicLocale();
  return publicMessages[locale];
}
