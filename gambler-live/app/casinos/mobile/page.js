import { pageMeta } from "@/lib/site";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = pageMeta({
  title: "Best Mobile Casinos: Apps & Mobile Sites",
  description:
    "Online casinos with iOS and Android apps or mobile-optimised websites, plus their license, game types, payment methods and limits.",
  path: "/casinos/mobile",
});

export default function MobileCasinosPage() {
  const list = getCasinosByTag("mobile");
  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Casinos"
            title="Best mobile casinos"
            description="Casinos that offer native iOS/Android apps or a mobile-optimised website, based on each operator’s published information."
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
