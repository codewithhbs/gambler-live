import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { news, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const item = getNewsBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
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
