import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { guides, getGuideBySlug } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

export default function GuidePage({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]} />

      <section className="bg-ink">
        <div className="container-content grid gap-14 py-14 md:grid-cols-[1fr_260px] md:py-20">
          <article className="max-w-prose">
            <p className="text-xs text-moss-500">{guide.category}</p>
            <h1 className="mt-2 font-display text-display-lg text-paper">{guide.title}</h1>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-clay">
              <span>{guide.author}</span>
              <span>·</span>
              <span>Published {guide.publishedAt}</span>
              <span>·</span>
              <span>Updated {guide.updatedAt}</span>
              <span>·</span>
              <span>{guide.readingTime}</span>
            </div>

            <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-clay">
              {guide.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {guide.faq && (
              <div className="mt-14">
                <h2 className="mb-4 font-display text-2xl text-paper">Frequently asked questions</h2>
                <FAQ items={guide.faq} />
              </div>
            )}
          </article>

          <aside className="h-fit space-y-6">
            <div className="rounded-lg border border-ink-line bg-ink-soft p-5">
              <p className="text-xs uppercase tracking-wide text-clay">Related guides</p>
              <ul className="mt-3 space-y-3">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="text-sm text-bone hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-ink-line bg-ink-soft p-5">
              <p className="text-sm font-medium text-paper">Explore casinos</p>
              <p className="mt-2 text-sm text-clay">See how this applies in our full rankings.</p>
              <Link
                href="/casinos"
                className="mt-4 block rounded bg-moss-500 py-2.5 text-center text-sm font-semibold text-ink hover:bg-moss-400"
              >
                View rankings
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
