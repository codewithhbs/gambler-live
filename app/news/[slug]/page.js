import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMeta } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { news, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const item = getNewsBySlug(params.slug);
  if (!item) return {};
  return pageMeta({ title: item.title, description: item.excerpt, path: `/news/${item.slug}`, openGraph: { type: "article", url: `/news/${item.slug}`, title: item.title, description: item.excerpt, publishedTime: item.publishedAt } });
}

export default function NewsArticlePage({ params }) {
  const item = getNewsBySlug(params.slug);
  if (!item) notFound();

  const date = new Date(item.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ type: "NewsArticle", title: item.title, description: item.excerpt, path: `/news/${item.slug}`, author: item.author, datePublished: item.publishedAt }),
          breadcrumbSchema([{ name: "News", path: "/news" }, { name: item.title, path: `/news/${item.slug}` }]),
        ]}
      />
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: item.title }]} />
      <article className="bg-ink">
        <div className="container-content max-w-prose py-14 md:py-20">
          <p className="text-xs text-moss-500">{item.category}</p>
          <h1 className="mt-2 font-display text-display-lg text-paper">{item.title}</h1>
          <div className="mt-4 flex gap-3 text-xs text-clay">
            <span>{item.author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
          <div className="mt-9 space-y-5 text-[16px] leading-relaxed text-clay">
            {item.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </article>
    </>
  );
}
