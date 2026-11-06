import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SectionHeader from "@/components/SectionHeader";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import Methodology from "@/components/Methodology";
import BonusCard from "@/components/BonusCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import Newsletter from "@/components/Newsletter";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { casinos } from "@/data/casinos";
import { bonuses } from "@/data/bonuses";
import { guides } from "@/data/guides";
import { news } from "@/data/news";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="bg-ink">
        <div className="container-content py-20">
          <SectionHeader
            kicker="Rankings"
            title="Best online casinos"
            description="Our top-rated picks this month, ranked on games, bonuses, payments, support and mobile experience."
            action={
              <Link href="/casinos" className="text-sm font-medium text-moss-500 hover:underline">
                View full rankings
              </Link>
            }
          />
          <div className="space-y-5">
            {casinos.slice(0, 4).map((c) => (
              <CasinoRankingCard key={c.slug} casino={c} featured={c.position <= 3} />
            ))}
          </div>
        </div>
      </section>

      <Methodology />

      <section className="bg-ink">
        <div className="container-content py-20">
          <SectionHeader
            kicker="Bonuses"
            title="Popular bonuses this week"
            description="Terms are shown in full — no hidden wagering conditions."
            action={
              <Link href="/bonuses" className="text-sm font-medium text-moss-500 hover:underline">
                Browse all bonuses
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bonuses.slice(0, 3).map((b) => (
              <BonusCard key={b.slug} bonus={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="grain-paper bg-paper">
        <div className="container-content py-20">
          <SectionHeader
            light
            kicker="Guides"
            title="Latest guides"
            description="Long-form explainers on how casinos, bonuses and payments actually work."
            action={
              <Link href="/guides" className="text-sm font-medium text-moss-700 hover:underline">
                All guides
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2">
            {guides.slice(0, 4).map((g) => (
              <div key={g.slug} className="rounded-lg border border-ink/10 bg-ink/[0.02] p-6">
                <p className="text-xs text-moss-700">{g.category}</p>
                <h3 className="mt-2 font-display text-lg leading-snug text-ink">
                  <Link href={`/guides/${g.slug}`} className="hover:underline">
                    {g.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{g.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-ink/50">
                  <span>{g.author}</span>
                  <span>·</span>
                  <span>{g.readingTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-content py-20">
          <SectionHeader
            kicker="News"
            title="Latest news"
            action={
              <Link href="/news" className="text-sm font-medium text-moss-500 hover:underline">
                All news
              </Link>
            }
          />
          <div className="max-w-3xl">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <ResponsibleGamblingNotice />
      {/* <Newsletter /> */}
    </>
  );
}
