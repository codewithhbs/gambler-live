import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = {
  title: "Fastest Payout Casinos",
  description: "Casinos ranked by verified real-world withdrawal times, not marketing claims.",
};

export default function FastPayoutCasinosPage() {
  const list = getCasinosByTag("fast-payout");
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Casinos"
            title="Fastest payout casinos"
            description="Payout speed shown here comes from a real withdrawal test during our review process, not the operator's stated terms."
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
