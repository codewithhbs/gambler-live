import Link from "next/link";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { casinos } from "@/data/casinos";

export const metadata = {
  title: "Best Online Casinos — Full Rankings",
  description:
    "Every casino on GamblerLive, ranked by games, bonuses, payments, support and mobile experience using the same fixed methodology.",
};

const FILTERS = [
  { label: "All Casinos", href: "/casinos" },
  { label: "New Casinos", href: "/casinos/new" },
  { label: "Fast Payout", href: "/casinos/fast-payout" },
  { label: "Mobile", href: "/casinos/mobile" },
  { label: "Crypto Casinos", href: "/crypto-casinos" },
];

export default function CasinosPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Rankings"
            title="Best online casinos"
            description="All operators are tested against the same 28 criteria. Position reflects overall score, not advertising spend."
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Link
                key={f.label}
                href={f.href}
                className="rounded-full border border-ink-line px-4 py-1.5 text-sm text-bone hover:border-bone"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content py-14">
          <div className="space-y-5">
            {casinos.map((c) => (
              <CasinoRankingCard key={c.slug} casino={c} featured={c.position <= 3} />
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
