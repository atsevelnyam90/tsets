import { notFound } from "next/navigation";
import { LocalizedInterviewArticle } from "@/components/sections/LocalizedInterviewArticle";
import {
  businessInterviews,
  getBusinessInterview,
  isBusinessInterviewSlug,
} from "@/lib/interviews";

export const dynamicParams = false;

export function generateStaticParams() {
  return businessInterviews.map((interview) => ({ slug: interview.slug }));
}

export default async function BusinessInterviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isBusinessInterviewSlug(slug)) notFound();

  const article = getBusinessInterview(slug);
  if (!article) notFound();

  return <LocalizedInterviewArticle article={article} />;
}
