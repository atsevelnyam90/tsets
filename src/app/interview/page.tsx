"use client";

import { InterviewArticle } from "@/components/sections/InterviewArticle";
import {
  usePublicLocale,
  useSiteMessages,
} from "@/lib/i18n/PublicI18nProvider";
import { originalInterviewMn } from "@/lib/original-interview";

export default function InterviewPage() {
  const { interview } = useSiteMessages();
  const { locale } = usePublicLocale();
  const localizedInterview = locale === "mn" ? originalInterviewMn : interview;

  return (
    <InterviewArticle
      article={{
        ...localizedInterview,
        image: "/images/tsets-lkhagvasuren-interview.avif",
        sourceLabel: localizedInterview.source,
        sourceName: "Business.mn",
        sourceUrl: "https://business.mn/?p=47642",
      }}
    />
  );
}
