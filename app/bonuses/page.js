import BonusCard from "@/components/BonusCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { bonuses } from "@/data/bonuses";

export const metadata = {
  title: "Casino Bonuses — Welcome Offers, Free Spins & Cashback",
  description:
    "Compare current casino bonuses with wagering requirements, minimum deposits and full terms shown up front.",
};

const CATEGORIES = ["All", "Welcome Bonus", "No Deposit Bonus", "Crypto Bonus", "Cashback"];

export default function BonusesPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Bonuses"
            title="Casino bonuses, compared"
            description="Every bonus below lists its real wagering requirement and expiry — the details that determine whether an offer is actually worth claiming."
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
