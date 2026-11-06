import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import GameCard from "@/components/GameCard";
import { gameCategories, games } from "@/data/games";

export const metadata = {
  title: "Casino Games — Slots, Blackjack, Roulette & More",
  description:
    "Browse casino games by category with RTP, volatility and max win data for every title we've reviewed.",
};

export default function GamesPage() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16">
        <SectionHeader
          kicker="Games"
          title="Casino games, by category"
          description="Each category page explains the math that actually determines your odds, not just how the game looks."
        />

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/games/${cat.slug}`}
              className="rounded-lg border border-ink-line bg-ink-soft p-6 hover:border-bone"
            >
              <h3 className="font-display text-lg text-paper">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-clay">{cat.intro}</p>
            </Link>
          ))}
        </div>

        <h2 className="mb-6 font-display text-2xl text-paper">Recently reviewed games</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
