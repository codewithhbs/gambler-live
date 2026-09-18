import SectionHeader from "./SectionHeader";
import GameCard from "./GameCard";
import { getCategory, getGamesByCategory } from "@/data/games";

export default function GameCategoryContent({ slug }) {
  const category = getCategory(slug);
  const list = getGamesByCategory(slug);

  return (
    <section className="bg-ink">
      <div className="container-content py-16">
        <SectionHeader kicker="Games" title={category.name} description={category.intro} />
        {list.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-clay">
            We're still building out reviewed titles in this category — check
            back soon.
          </p>
        )}
      </div>
    </section>
  );
}
