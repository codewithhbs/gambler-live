import { AFFILIATE_REL } from "@/lib/affiliate";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casinos, getCasinoBySlug } from "@/data/casinos";
import ScoreBar from "@/components/ScoreBar";
import CasinoLogo from "@/components/CasinoLogo";
import JsonLd from "@/components/JsonLd";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { pageMeta } from "@/lib/site";
import { breadcrumbSchema, casinoReviewSchema } from "@/lib/schema";

export function generateStaticParams() {
  return casinos.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const casino = getCasinoBySlug(params.slug);
  if (!casino) return {};
  const desc = casino.summary.length > 158 ? `${casino.summary.slice(0, 155).trimEnd()}…` : casino.summary;
  return pageMeta({
    title: `${casino.name}${/casino/i.test(casino.name) ? "" : " Casino"} Review — Bonus, License & Payments`,
    description: desc,
    path: `/casino/${casino.slug}`,
  });
}

const isUrl = (v) => typeof v === "string" && /^https?:\/\//i.test(v);
const hostOf = (u) => u.replace(/^https?:\/\//i, "").replace(/\/$/, "");

// Renders any sheet value: string, string[], {deposits, withdrawals}, URL.
function FieldValue({ value }) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1.5">
        {value.map((v) => (
          <li key={v} className="flex gap-2">
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-moss-500" />
            <span>{v}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (value && typeof value === "object") {
    return (
      <div className="space-y-2">
        {value.deposits && (
          <p>
            <span className="text-bone">Deposits:</span> {value.deposits}
          </p>
        )}
        {value.withdrawals && (
          <p>
            <span className="text-bone">Withdrawals:</span> {value.withdrawals}
          </p>
        )}
      </div>
    );
  }
  if (isUrl(value)) {
    return (
      <a href={value} target="_blank" rel="nofollow noopener noreferrer" className="break-all text-moss-500 hover:underline">
        {hostOf(value)}
      </a>
    );
  }
  return <span>{value}</span>;
}

// Field order exactly as specified in the content sheet.
const FIELDS = [
  ["website", "Website"],
  ["operator", "Operator"],
  ["established", "Established"],
  ["license", "License"],
  ["gameTypes", "Game Types"],
  ["providers", "Featured Game Providers"],
  ["currencies", "Accepted Currencies"],
  ["payments", "Payment Methods"],
  ["limits", "Limits"],
  ["availableIn", "Available In"],
  ["welcomeBonus", "Welcome Bonus"],
  ["keyFeatures", "Key Features"],
  ["support", "Customer Support"],
  ["responsibleGambling", "Responsible Gambling"],
];

export default function CasinoReviewPage({ params }) {
  const casino = getCasinoBySlug(params.slug);
  if (!casino) notFound();

  const rows = FIELDS.filter(([key]) => {
    const v = casino[key];
    if (v == null || v === "") return false;
    if (Array.isArray(v) && v.length === 0) return false;
    return true;
  }).map(([key, label]) => [key, label, key === "gameTypes" ? casino.gameTypes.join(", ") : casino[key]]);

  const related = casinos.filter((c) => c.slug !== casino.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Casinos", path: "/casinos" },
            { name: casino.name, path: `/casino/${casino.slug}` },
          ]),
          casinoReviewSchema(casino),
        ]}
      />

      <nav aria-label="Breadcrumb" className="border-b border-ink-line bg-ink">
        <div className="container-content flex gap-2 py-4 text-xs text-clay">
          <Link href="/" className="hover:text-paper">Home</Link>
          <span>/</span>
          <Link href="/casinos" className="hover:text-paper">Casinos</Link>
          <span>/</span>
          <span className="text-bone">{casino.name}</span>
        </div>
      </nav>

      <section className="border-b border-ink-line bg-ink">
        <div className="container-content grid gap-10 py-14 md:grid-cols-[1fr_320px] md:py-20">
          <div>
            <div className="flex items-center gap-4">
              <CasinoLogo casino={casino} size={56} priority />
              <p className="text-xs text-moss-500">{casino.tagline}</p>
            </div>
            <h1 className="mt-4 font-display text-display-lg text-paper">{casino.name} Review</h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-clay">{casino.summary}</p>

            {casino.scores ? (
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-ink-line pt-6 sm:grid-cols-4">
                <ScoreBar label="Games" value={casino.scores.games} />
                <ScoreBar label="Bonuses" value={casino.scores.bonuses} />
                <ScoreBar label="Payments" value={casino.scores.payments} />
                <ScoreBar label="Support" value={casino.scores.support} />
              </div>
            ) : (
              <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-ink-line pt-6 text-sm sm:grid-cols-3">
                {casino.established && (
                  <div>
                    <dt className="text-clay">Established</dt>
                    <dd className="mt-0.5 font-display text-2xl text-paper tabular-num">{casino.established}</dd>
                  </div>
                )}
                {casino.licenseShort && (
                  <div>
                    <dt className="text-clay">License</dt>
                    <dd className="mt-0.5 font-display text-2xl text-paper">{casino.licenseShort}</dd>
                  </div>
                )}
                {casino.gameTypes?.length > 0 && (
                  <div>
                    <dt className="text-clay">Game types</dt>
                    <dd className="mt-0.5 font-display text-2xl text-paper tabular-num">{casino.gameTypes.length}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>

          <aside className="h-fit rounded-lg border border-ink-line bg-ink-soft p-6 shadow-card">
            {typeof casino.rating === "number" && (
              <div className="mb-5 text-center">
                <span className="font-display text-4xl text-moss-500 tabular-num">{casino.rating}</span>
                <span className="text-clay">/10</span>
              </div>
            )}
            <div className="rounded border border-ink-line bg-ink p-4 text-center">
              {casino.bonusHeadline ? (
                <>
                  <p className="text-xs text-clay">Welcome bonus</p>
                  <p className="mt-1 text-sm font-medium text-paper">{casino.bonusHeadline}</p>
                </>
              ) : (
                <>
                  <p className="text-xs text-clay">License</p>
                  <p className="mt-1 text-sm font-medium text-paper">{casino.license}</p>
                </>
              )}
            </div>
            {casino.visitUrl && (
              <a
                href={casino.visitUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                className="mt-5 block rounded bg-moss-500 py-3 text-center text-sm font-semibold text-ink hover:bg-moss-400"
              >
                Visit {casino.name}
              </a>
            )}
            <p className="mt-3 text-center text-xs text-clay">18+. T&amp;Cs apply.</p>
          </aside>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content grid gap-14 py-16 md:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <h2 id="casino-details" className="font-display text-2xl text-paper">
              {casino.name} at a glance
            </h2>
            <dl className="mt-6 divide-y divide-ink-line border-y border-ink-line">
              {rows.map(([key, label, value]) => (
                <div key={key} id={`field-${key}`} className="grid gap-2 py-4 text-sm sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="font-medium text-bone">{label}</dt>
                  <dd className="leading-relaxed text-clay">
                    <FieldValue value={value} />
                  </dd>
                </div>
              ))}
            </dl>

            {(casino.pros?.length || casino.cons?.length) && (
              <div className="mt-12">
                <h2 className="font-display text-2xl text-paper">Pros &amp; cons</h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <ul className="space-y-2 text-sm text-clay">
                    {(casino.pros || []).map((p) => <li key={p}>+ {p}</li>)}
                  </ul>
                  <ul className="space-y-2 text-sm text-clay">
                    {(casino.cons || []).map((c) => <li key={c}>− {c}</li>)}
                  </ul>
                </div>
              </div>
            )}

            <p className="mt-10 text-xs leading-relaxed text-clay">
              Details are checked against the operator&apos;s own published information. Terms, limits and
              availability can change — always confirm on the casino&apos;s website before depositing.
            </p>
          </div>

          <aside className="h-fit rounded-lg border border-ink-line bg-ink-soft p-6 md:sticky md:top-24">
            <p className="text-xs uppercase tracking-wide text-clay">On this page</p>
            <ul className="mt-3 space-y-2 text-sm text-bone">
              {rows.map(([key, label]) => (
                <li key={key}>
                  <a href={`#field-${key}`} className="hover:text-moss-500">{label}</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink">
        <div className="container-content py-16">
          <h2 className="font-display text-2xl text-paper">Related casinos</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/casino/${c.slug}`}
                className="flex items-center gap-4 rounded-lg border border-ink-line bg-ink-soft p-5 hover:border-bone"
              >
                <CasinoLogo casino={c} size={56} />
                <div>
                  <p className="text-xs text-moss-500">{c.tagline}</p>
                  <h3 className="mt-1 font-display text-lg text-paper">{c.name}</h3>
                  {c.licenseShort && <p className="mt-1 text-sm text-clay">{c.licenseShort}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
