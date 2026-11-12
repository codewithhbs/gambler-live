import { AFFILIATE_REL } from "@/lib/affiliate";
import CasinoLogo from "./CasinoLogo";
import BrandLink from "./BrandLink";
import { casinos } from "@/data/casinos";

export default function WhereToPlay({ title }) {
  const picks = casinos.filter((c) => c.visitUrl).slice(0, 3);

  return (
    <div className="rounded-lg border border-ink-line bg-ink-soft p-6 md:p-8">
      <h2 className="font-display text-2xl text-paper">Where to play {title}</h2>
      <p className="mt-2 text-sm text-clay">
        Licensed casinos from our listings where you can play this title.
      </p>

      <div className="mt-6 space-y-3">
        {picks.map((c) => (
          <div
            key={c.slug}
            className="flex flex-col gap-4 rounded border border-ink-line bg-ink p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <BrandLink casino={c} label={`Visit ${c.name}`} className="shrink-0 transition-opacity hover:opacity-80">
                <CasinoLogo casino={c} size={48} />
              </BrandLink>
              <div>
                <p className="text-sm font-medium text-paper">
                  <BrandLink casino={c} className="hover:underline">{c.name}</BrandLink>
                </p>
                <p className="text-xs text-clay">{c.bonusHeadline || c.tagline}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:justify-end">
              
              <a
                href={c.visitUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                className="rounded bg-moss-500 px-4 py-2 text-sm font-semibold text-ink hover:bg-moss-400"
              >
                Play now
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-clay">18+. T&amp;Cs apply. Please gamble responsibly.</p>
    </div>
  );
}
