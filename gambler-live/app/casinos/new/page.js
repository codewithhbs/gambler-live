import { pageMeta } from "@/lib/site";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = pageMeta({
  title: "New Online Casinos",
  description:
    "Recently launched online casinos (established 2025 and later) with their license, game types, payment methods, limits and welcome offers.",
  path: "/casinos/new",
});

export default function NewCasinosPage() {
  const list = getCasinosByTag("new");
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Casinos"
            title="New online casinos"
            description="Recently launched operators that met our minimum licensing and testing bar. Track records here are shorter than for established casinos — weigh that alongside the score."
          />
        </div>
      </section>
      <section className="bg-ink">
        <div className="container-content py-14">
          <div className="space-y-5">
            {list.map((c) => (
              <CasinoRankingCard key={c.slug} casino={c} />
            ))}
          </div>
        </div>
      </section>
      <ResponsibleGamblingNotice />
    </>
  );
}
