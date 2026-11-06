import { pageMeta } from "@/lib/site";
import GuideCard from "@/components/GuideCard";
import SectionHeader from "@/components/SectionHeader";
import { guides } from "@/data/guides";

export const metadata = pageMeta({
  title: "Casino Guides: Bonuses, Payments & Safety",
  description:
    "Practical online casino guides on wagering requirements, payment methods, licensing and safer play, written by the GamblerLive editorial team.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16">
        <SectionHeader
          kicker="Guides"
          title="Casino guides"
          description="Written to explain the mechanics behind casino products, not to sell you on any single operator."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
