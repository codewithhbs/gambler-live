import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import { news } from "@/data/news";

export const metadata = {
  title: "Casino Industry News",
  description: "Regulation, operator, and game-release news from the online casino industry.",
};

export default function NewsPage() {
  return (
    <section className="bg-ink">
      <div className="container-content py-16">
        <SectionHeader kicker="News" title="Latest news" />
        <div className="max-w-3xl">
          {news.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
