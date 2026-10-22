"use client";

import { InterviewArticle } from "@/components/sections/InterviewArticle";
import { usePublicLocale } from "@/lib/i18n/PublicI18nProvider";
import { localizeBusinessInterview } from "@/lib/interview-localizations";
import type { BusinessInterview } from "@/lib/interviews";

export function LocalizedInterviewArticle({
  article,
}: {
  article: BusinessInterview;
}) {
  const { locale } = usePublicLocale();

  return (
    <InterviewArticle article={localizeBusinessInterview(article, locale)} />
  );
}
