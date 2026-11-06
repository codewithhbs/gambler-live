import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = {
  title: "Best Mobile Casinos",
  description: "Casinos scored highest for mobile browser and app experience.",
};

export default function MobileCasinosPage() {
  const list = getCasinosByTag("mobile");
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Casinos"
            title="Best mobile casinos"
            description="Scored on load speed, layout on small screens, and whether a native app is required to access the full game library."
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
