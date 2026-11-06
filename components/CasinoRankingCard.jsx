import { AFFILIATE_REL } from "@/lib/affiliate";
import Link from "next/link";
import ScoreBar from "./ScoreBar";
import CasinoLogo from "./CasinoLogo";

export default function CasinoRankingCard({ casino, featured }) {
  return (
    <div
      className={`rounded-lg border p-6 md:p-7 ${
        featured
          ? "border-moss-500/40 bg-ink-soft shadow-card"
          : "border-ink-line bg-ink-soft/60"
      }`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-5">
          <span className="font-display text-3xl text-clay tabular-num">
            {String(casino.position).padStart(2, "0")}
          </span>
          <CasinoLogo casino={casino} size={64} />
          <div>
            <p className="text-xs text-moss-500">{casino.tagline}</p>
            <h3 className="mt-1 font-display text-xl text-paper md:text-2xl">
              <Link href={`/casino/${casino.slug}`} className="hover:underline">
                {casino.name}
              </Link>
            </h3>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-clay">
              {casino.licenseShort && <span>License: {casino.licenseShort}</span>}
              {casino.established && <span>Est. {casino.established}</span>}
              {casino.operator && <span>{casino.operator}</span>}
            </div>
          </div>
        </div>

        {typeof casino.rating === "number" && (
          <div className="flex items-center gap-4 md:flex-col md:items-end">
            <div className="text-right">
              <span className="font-display text-3xl text-paper tabular-num">{casino.rating}</span>
              <span className="text-sm text-clay">/10</span>
            </div>
          </div>
        )}
      </div>

      {casino.scores ? (
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-line pt-5 md:grid-cols-5">
          <ScoreBar label="Games" value={casino.scores.games} />
          <ScoreBar label="Bonuses" value={casino.scores.bonuses} />
          <ScoreBar label="Payments" value={casino.scores.payments} />
          <ScoreBar label="Support" value={casino.scores.support} />
          <ScoreBar label="Mobile" value={casino.scores.mobile} />
        </div>
      ) : casino.gameTypes?.length ? (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-line pt-5">
          {casino.gameTypes.map((g) => (
            <span key={g} className="rounded-full border border-ink-line px-3 py-1 text-xs text-bone">
              {g}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 rounded border border-ink-line bg-ink p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {casino.bonusHeadline ? (
            <>
              <p className="text-xs text-clay">Welcome bonus</p>
              <p className="text-sm font-medium text-paper">{casino.bonusHeadline}</p>
            </>
          ) : (
            <>
              <p className="text-xs text-clay">Available in</p>
              <p className="line-clamp-1 text-sm font-medium text-paper">{casino.availableIn}</p>
            </>
          )}
        </div>
        <div className="flex shrink-0 gap-3">
          <Link
            href={`/casino/${casino.slug}`}
            className="rounded border border-ink-line px-4 py-2 text-sm font-medium text-paper hover:border-bone"
          >
            Read review
          </Link>
          {casino.visitUrl && (
            <a
              href={casino.visitUrl}
              target="_blank"
              rel={AFFILIATE_REL}
              className="rounded bg-moss-500 px-4 py-2 text-sm font-semibold text-ink hover:bg-moss-400"
            >
              Visit casino
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
