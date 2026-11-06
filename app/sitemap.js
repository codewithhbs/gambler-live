import { SITE_URL } from "@/lib/site";
import { casinos } from "@/data/casinos";
import { games, gameCategories } from "@/data/games";
import { guides } from "@/data/guides";
import { news } from "@/data/news";
import { countries } from "@/data/countries";

// Served at /sitemap.xml
export default function sitemap() {
  const now = new Date();
  const url = (path) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

  const staticPages = [
    ["/", 1.0, "daily"],
    ["/casinos", 0.9, "weekly"],
    ["/casinos/new", 0.8, "weekly"],
    ["/casinos/fast-payout", 0.8, "weekly"],
    ["/casinos/mobile", 0.8, "weekly"],
    ["/crypto-casinos", 0.8, "weekly"],
    ["/bonuses", 0.9, "weekly"],
    ["/games", 0.7, "monthly"],
    ["/guides", 0.7, "weekly"],
    ["/news", 0.7, "daily"],
    ["/about", 0.5, "yearly"],
    ["/contact", 0.5, "yearly"],
    ["/responsible-gambling", 0.5, "yearly"],
    ["/privacy-policy", 0.3, "yearly"],
    ["/terms", 0.3, "yearly"],
    ["/disclaimer", 0.3, "yearly"],
    ["/cookie-policy", 0.3, "yearly"],
  ].map(([path, priority, changeFrequency]) => ({ url: url(path), lastModified: now, changeFrequency, priority }));

  return [
    ...staticPages,
    ...casinos.map((c) => ({ url: url(`/casino/${c.slug}`), lastModified: now, changeFrequency: "weekly", priority: 0.8 })),
    ...countries.map((c) => ({ url: url(`/casinos/${c.code}`), lastModified: now, changeFrequency: "weekly", priority: 0.7 })),
    ...gameCategories.map((g) => ({ url: url(`/games/${g.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
    ...games.map((g) => ({ url: url(`/games/${g.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
    ...guides.map((g) => ({ url: url(`/guides/${g.slug}`), lastModified: new Date(g.updatedAt || g.publishedAt), changeFrequency: "monthly", priority: 0.6 })),
    ...news.map((n) => ({ url: url(`/news/${n.slug}`), lastModified: new Date(n.publishedAt), changeFrequency: "monthly", priority: 0.5 })),
  ];
}
