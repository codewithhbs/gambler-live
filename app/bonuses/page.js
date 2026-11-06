import { pageMeta } from "@/lib/site";
import BonusCard from "@/components/BonusCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { bonuses } from "@/data/bonuses";

export const metadata = pageMeta({
  title: "Casino Bonuses: Welcome Offers & Free Spins",
  description:
    "Compare online casino welcome bonuses, deposit match offers and free spins side by side, with wagering and minimum deposit terms shown up front.",
  path: "/bonuses",
});

const CATEGORIES = ["All", "Welcome Bonus", "Welcome Package", "High Roller Bonus"];

export default function BonusesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Bonuses"
            title="Casino bonuses, compared"
            description="Welcome offers from the casinos we list, with the terms the operator publishes. Always confirm the full T&Cs on the casino site before you deposit."
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-ink-line px-4 py-1.5 text-sm text-bone"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((b) => (
              <BonusCard key={b.slug} bonus={b} />
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
