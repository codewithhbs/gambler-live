import { AFFILIATE_URL, AFFILIATE_REL } from "@/lib/affiliate";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import ScoreBar from "@/components/ScoreBar";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";

export function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const casino = getCasinoBySlug(params.slug);
  if (!casino) return {};
  return {
    title: `${casino.name} Review — Rating, Bonus & Payout Speed`,
    description: casino.verdict,
  };
}

export default function CasinoReviewPage({ params }) {
  const casino = getCasinoBySlug(params.slug);
  if (!casino) notFound();

  const related = casinos.filter((c) => c.slug !== casino.slug).slice(0, 3);

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-ink-line bg-ink">
        <div className="container-content flex gap-2 py-4 text-xs text-clay">
          <Link href="/" className="hover:text-paper">Home</Link>
          <span>/</span>
          <Link href="/casinos" className="hover:text-paper">Casinos</Link>
          <span>/</span>
          <span className="text-bone">{casino.name}</span>
        </div>
      </nav>

      <section className="border-b border-ink-line bg-ink">
        <div className="container-content grid gap-10 py-14 md:grid-cols-[1fr_320px] md:py-20">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-ink-line bg-ink-soft">
                <Image
                  src={casino.image}
                  alt={`${casino.name} logo`}
                  fill
                  sizes="56px"
                  priority
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-moss-500">{casino.tagline}</p>
            </div>
            <h1 className="mt-4 font-display text-display-lg text-paper">{casino.name} Review</h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-clay">
              {casino.verdict}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-ink-line pt-6 sm:grid-cols-4">
              <ScoreBar label="Games" value={casino.scores.games} />
              <ScoreBar label="Bonuses" value={casino.scores.bonuses} />
              <ScoreBar label="Payments" value={casino.scores.payments} />
              <ScoreBar label="Support" value={casino.scores.support} />
            </div>
          </div>

          <aside className="rounded-lg border border-ink-line bg-ink-soft p-6 shadow-card h-fit">
            <div className="text-center">
              <span className="font-display text-4xl text-moss-500 tabular-num">{casino.rating}</span>
              <span className="text-clay">/10</span>
            </div>
            <div className="mt-5 rounded border border-ink-line bg-ink p-4 text-center">
              <p className="text-xs text-clay">Welcome bonus</p>
              <p className="mt-1 text-sm font-medium text-paper">{casino.bonus}</p>
            </div>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className="mt-5 block rounded bg-moss-500 py-3 text-center text-sm font-semibold text-ink hover:bg-moss-400"
            >
              Visit casino
            </a>
            <p className="mt-3 text-center text-xs text-clay">18+. T&Cs apply.</p>
          </aside>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content grid gap-14 py-16 md:grid-cols-[1fr_320px]">
          <div className="max-w-prose space-y-12">
            <div>
              <h2 className="font-display text-2xl text-paper">Quick facts</h2>
              <dl className="mt-5 grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-3">
                {[
                  ["License", casino.license],
                  ["Founded", casino.founded],
                  ["Games", casino.games],
                  ["Min. deposit", casino.minDeposit],
                  ["Payout speed", casino.payoutSpeed],
                  ["Wagering", casino.wagering],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-clay">{label}</dt>
                    <dd className="mt-0.5 text-bone">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="font-display text-2xl text-paper">Pros &amp; cons</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-medium text-moss-500">Pros</p>
                  <ul className="space-y-2 text-sm text-clay">
                    {casino.pros.map((p) => <li key={p}>+ {p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-bone">Cons</p>
                  <ul className="space-y-2 text-sm text-clay">
                    {casino.cons.map((c) => <li key={c}>− {c}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-paper">Payment methods</h2>
              <p className="mt-3 text-sm text-clay">{casino.payments.join(", ")}.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-paper">Final verdict</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-clay">{casino.verdict}</p>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-ink-line bg-ink-soft p-6">
            <p className="text-xs uppercase tracking-wide text-clay">On this page</p>
            <ul className="mt-3 space-y-2 text-sm text-bone">
              <li>Quick facts</li>
              <li>Pros &amp; cons</li>
              <li>Payment methods</li>
              <li>Final verdict</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink">
        <div className="container-content py-16">
          <h2 className="font-display text-2xl text-paper">Related casinos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/casino/${c.slug}`}
                className="overflow-hidden rounded-lg border border-ink-line bg-ink-soft hover:border-bone"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 840px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-moss-500">{c.tagline}</p>
                  <h3 className="mt-1 font-display text-lg text-paper">{c.name}</h3>
                  <p className="mt-2 text-sm text-clay">Rated {c.rating}/10</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
