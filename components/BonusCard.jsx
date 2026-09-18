import { AFFILIATE_URL, AFFILIATE_REL } from "@/lib/affiliate";
export default function BonusCard({ bonus }) {
  return (
    <div className="flex flex-col rounded-lg border border-ink-line bg-ink-soft p-6">
      <p className="text-xs text-moss-500">{bonus.category}</p>
      <h3 className="mt-1.5 font-display text-lg text-paper">{bonus.casino}</h3>
      <p className="mt-3 text-2xl font-medium text-paper">{bonus.amount}</p>
      {bonus.freeSpins !== "None" && (
        <p className="text-sm text-clay">{bonus.freeSpins}</p>
      )}
      <dl className="mt-5 space-y-2 border-t border-ink-line pt-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-clay">Wagering</dt>
          <dd className="text-bone">{bonus.wagering}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-clay">Min. deposit</dt>
          <dd className="text-bone">{bonus.minDeposit}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-clay">Expires</dt>
          <dd className="text-bone">{bonus.expiry}</dd>
        </div>
      </dl>
      <details className="mt-4 text-xs text-clay">
        <summary className="cursor-pointer text-bone">Terms &amp; conditions</summary>
        <p className="mt-2 leading-relaxed">{bonus.terms}</p>
      </details>
      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel={AFFILIATE_REL}
        className="mt-6 rounded bg-moss-500 py-2.5 text-center text-sm font-semibold text-ink hover:bg-moss-400"
      >
        Claim bonus
      </a>
    </div>
  );
}
