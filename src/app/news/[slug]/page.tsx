import { notFound } from "next/navigation";
import { LocalizedNewsArticle } from "@/components/sections/LocalizedNewsArticle";
import { getNewsArticleSlugs, isNewsArticleSlug } from "@/lib/news-content";

export function generateStaticParams() {
  return getNewsArticleSlugs().map((slug) => ({ slug }));
}

export default async function NewsArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isNewsArticleSlug(slug)) notFound();

  return <LocalizedNewsArticle slug={slug} />;
}
