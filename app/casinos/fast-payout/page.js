import { pageMeta } from "@/lib/site";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = pageMeta({
  title: "Fast Payout Casinos: Quick Withdrawals",
  description:
    "Online casinos that advertise fast or instant withdrawals, with their published withdrawal limits, payment methods and licensing details.",
  path: "/casinos/fast-payout",
});

export default function FastPayoutCasinosPage() {
  const list = getCasinosByTag("fast-payout");
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Casinos"
            title="Fastest payout casinos"
            description="Casinos that advertise fast or instant withdrawals. Check each review for published withdrawal limits — speed also depends on verification and payment method."
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
