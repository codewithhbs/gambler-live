import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import GameArt from "@/components/GameArt";
import WhereToPlay from "@/components/WhereToPlay";
import { games, getGameBySlug } from "@/data/games";

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const game = getGameBySlug(params.slug);
  if (!game) return {};
  return {
    title: `${game.title} Review — RTP, Volatility & Max Win`,
    description: game.overview,
  };
}

export default function GameReviewPage({ params }) {
  const game = getGameBySlug(params.slug);
  if (!game) notFound();

  const facts = [
    ["Developer", game.developer],
    ["Release date", game.releaseDate],
    ["RTP", `${game.rtp}%`],
    ["Volatility", game.volatility],
    ["Max win", game.maxWin],
    ["Reels", game.reels ?? "—"],
    ["Paylines", game.paylines ?? "—"],
    ["Min bet", game.minBet],
    ["Max bet", game.maxBet],
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Games", href: "/games" }, { label: game.title }]} />

      <section className="relative overflow-hidden border-b border-ink-line bg-ink">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[440px] opacity-30 md:block">
          <GameArt category={game.category} id={game.slug} className="h-full w-full" />
        </div>

        <div className="container-content relative py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_200px] md:items-start">
            <div>
              <p className="text-xs text-moss-500">{game.developer}</p>
              <h1 className="mt-2 font-display text-display-lg text-paper">{game.title}</h1>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-clay">{game.overview}</p>
            </div>

            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-lg border border-ink-line shadow-card md:w-[200px]">
              <Image
                src={game.image}
                alt={`${game.title} in-game screenshot`}
                fill
                sizes="200px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink-line pt-6 sm:grid-cols-3 md:grid-cols-5">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-clay">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-bone tabular-num">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content max-w-prose py-16 space-y-12">
          <div>
            <h2 className="font-display text-2xl text-paper">How to play</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">{game.howToPlay}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-paper">Features</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-clay">
              {game.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-paper">RTP explained</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">{game.rtpExplanation}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-paper">Volatility explained</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">{game.volatilityExplanation}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-paper">Pros &amp; cons</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium text-moss-500">Pros</p>
                <ul className="space-y-2 text-sm text-clay">
                  {game.prosCons.pros.map((p) => <li key={p}>+ {p}</li>)}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-bone">Cons</p>
                <ul className="space-y-2 text-sm text-clay">
                  {game.prosCons.cons.map((c) => <li key={c}>− {c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink">
        <div className="container-content py-16">
          <WhereToPlay title={game.title} />
        </div>
      </section>
    </>
  );
}
