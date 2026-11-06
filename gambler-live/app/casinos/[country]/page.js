import { notFound } from "next/navigation";
import CasinoRankingCard from "@/components/CasinoRankingCard";
import SectionHeader from "@/components/SectionHeader";
import ResponsibleGamblingNotice from "@/components/ResponsibleGamblingNotice";
import { countries, getCountry } from "@/data/countries";
import { getCasinosByCountry } from "@/data/casinos";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.code }));
}

export function generateMetadata({ params }) {
  const country = getCountry(params.country);
  if (!country) return {};
  return {
    title: `Best Online Casinos for Players in ${country.name}`,
    description: country.intro,
  };
}

export default function CountryCasinosPage({ params }) {
  const country = getCountry(params.country);
  if (!country) notFound();
  const list = getCasinosByCountry(country.code);

  return (
    <>
      <section className="border-b border-ink-line bg-ink">
        <div className="container-content py-16">
          <SectionHeader
            kicker={country.name}
            title={`Best casinos for ${country.name}`}
            description={country.intro}
          />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-clay">
            <span>Regulator: <span className="text-bone">{country.regulator}</span></span>
            <span>Currency: <span className="text-bone">{country.currency}</span></span>
            <span>Popular games: <span className="text-bone">{country.popularGames.join(", ")}</span></span>
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

      <ResponsibleGamblingNotice />
    </>
  );
}
