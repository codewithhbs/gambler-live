import { AFFILIATE_URL, AFFILIATE_REL } from "@/lib/affiliate";
import Image from "next/image";
import { casinos } from "@/data/casinos";

export default function WhereToPlay({ title }) {
  const picks = [...casinos].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="rounded-lg border border-ink-line bg-ink-soft p-6 md:p-8">
      <h2 className="font-display text-2xl text-paper">Where to play {title}</h2>
      <p className="mt-2 text-sm text-clay">
        This title is live at these licensed, top-rated rooms this month.
      </p>

      <div className="mt-6 space-y-3">
        {picks.map((c) => (
          <div
            key={c.slug}
            className="flex flex-col gap-4 rounded border border-ink-line bg-ink p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded border border-ink-line bg-ink-soft">
                <Image src={c.image} alt={`${c.name} logo`} fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-paper">{c.name}</p>
                <p className="text-xs text-clay">{c.bonus}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:justify-end">
              <span className="text-sm text-moss-500 tabular-num">{c.rating}/10</span>
              <a
                href={AFFILIATE_URL}
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
