import { pageMeta } from "@/lib/site";
import Link from "next/link";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { casinos } from "@/data/casinos";
import JsonLd from "@/components/JsonLd";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Best Online Casinos: Full List & Reviews",
  description:
    "Browse every online casino listed on GamblerLive with license, year established, game types, payment methods, limits and welcome bonuses.",
  path: "/casinos",
});

const FILTERS = [
  { label: "All Casinos", href: "/casinos" },
  { label: "New Casinos", href: "/casinos/new" },
  { label: "Fast Payout", href: "/casinos/fast-payout" },
  { label: "Mobile", href: "/casinos/mobile" },
  { label: "Crypto Casinos", href: "/crypto-casinos" },
];

export default function CasinosPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema({ name: "Best online casinos", path: "/casinos", items: casinos.map((c) => ({ name: c.name, path: `/casino/${c.slug}` })) }),
          breadcrumbSchema([{ name: "Casinos", path: "/casinos" }]),
        ]}
      />
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker="Rankings"
            title="Best online casinos"
            description="Every casino we list, with license, year established, game types, payment methods, limits and welcome offers taken from each operator’s published information."
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Link
                key={f.label}
                href={f.href}
                className="rounded-full border border-ink-line px-4 py-1.5 text-sm text-bone hover:border-bone"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content py-14">
          <div className="space-y-5">
            {casinos.map((c) => (
              <CasinoRankingCard key={c.slug} casino={c} featured={c.position <= 3} />
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
    </>
  );
}
