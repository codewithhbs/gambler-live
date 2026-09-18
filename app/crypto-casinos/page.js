import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { getCasinosByTag } from "@/data/casinos";

export const metadata = {
  title: "Best Crypto Casinos — Bitcoin & Ethereum Gambling",
  description:
    "Casinos scored on crypto deposit and withdrawal speed, supported coins, and network fee transparency.",
};

export default function CryptoCasinosPage() {
  const list = getCasinosByTag("crypto");

  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Crypto"
            title="Best crypto casinos"
            description="Scored on confirmed withdrawal speed, supported coins, and whether network fees are disclosed clearly before you send funds."
          />
          <div className="flex flex-wrap gap-2 text-sm text-clay">
            {["Bitcoin", "Ethereum", "USDT", "Litecoin"].map((coin) => (
              <span key={coin} className="rounded-full border border-ink-line px-4 py-1.5 text-bone">
                {coin}
              </span>
            ))}
          </div>
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

      <section className="grain-paper bg-paper">
        <div className="container-content max-w-prose py-16">
          <h2 className="font-display text-2xl text-ink">A note on crypto gambling</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
            Crypto casinos settle deposits and withdrawals on-chain, which can be
            faster than card or bank transfers but carries its own risks —
            volatility between deposit and withdrawal, and no chargeback
            mechanism if something goes wrong. Only use licensed operators, and
            keep records of every transaction hash.
          </p>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
