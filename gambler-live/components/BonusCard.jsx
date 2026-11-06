import Link from "next/link";
import { AFFILIATE_REL } from "@/lib/affiliate";
import { getCasinoBySlug } from "@/data/casinos";

export default function BonusCard({ bonus }) {
  const casino = getCasinoBySlug(bonus.casinoSlug);
  const facts = [
    ["Wagering", bonus.wagering],
    ["Min. deposit", bonus.minDeposit],
    ["Expires", bonus.expiry],
  ].filter(([, v]) => v);

  return (
    <div className="flex flex-col rounded-lg border border-ink-line bg-ink-soft p-6">
      <p className="text-xs text-moss-500">{bonus.category}</p>
      <h3 className="mt-1.5 font-display text-lg text-paper">
        {casino ? (
          <Link href={`/casino/${casino.slug}`} className="hover:underline">{bonus.casino}</Link>
        ) : (
          bonus.casino
        )}
      </h3>
      <p className="mt-3 text-2xl font-medium text-paper">{bonus.amount}</p>
      {bonus.freeSpins && <p className="text-sm text-clay">{bonus.freeSpins}</p>}
      {facts.length > 0 && (
        <dl className="mt-5 space-y-2 border-t border-ink-line pt-4 text-sm">
          {facts.map(([label, v]) => (
            <div key={label} className="flex justify-between">
              <dt className="text-clay">{label}</dt>
              <dd className="text-bone">{v}</dd>
            </div>
          ))}
        </dl>
      )}
      {bonus.terms && (
        <details className="mt-4 text-xs text-clay">
          <summary className="cursor-pointer text-bone">Terms &amp; conditions</summary>
          <p className="mt-2 leading-relaxed">{bonus.terms} 18+. Full T&amp;Cs on the casino site.</p>
        </details>
      )}
      <div className="flex-1" />
      {casino?.visitUrl && (
        <a
          href={casino.visitUrl}
          target="_blank"
          rel={AFFILIATE_REL}
          className="mt-6 rounded bg-moss-500 py-2.5 text-center text-sm font-semibold text-ink hover:bg-moss-400"
        >
          Claim bonus
        </a>
      )}
    </div>
  );
}
