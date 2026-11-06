import Link from "next/link";

export default function NewsCard({ item }) {
  const date = new Date(item.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group block border-b border-ink-line py-6 first:pt-0"
    >
      <div className="flex items-center gap-3 text-xs text-clay">
        <span className="text-moss-500">{item.category}</span>
        <span>·</span>
        <span>{date}</span>
      </div>
      <h3 className="mt-2 font-display text-lg text-paper group-hover:underline">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm text-clay">{item.excerpt}</p>
    </Link>
  );
}
