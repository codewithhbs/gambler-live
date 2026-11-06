import Link from "next/link";

export default function GuideCard({ guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-lg border border-ink-line bg-ink-soft p-6 transition-colors hover:border-bone"
    >
      <p className="text-xs text-moss-500">{guide.category}</p>
      <h3 className="mt-2 font-display text-lg leading-snug text-paper group-hover:underline">
        {guide.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-clay">{guide.excerpt}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-clay">
        <span>{guide.author}</span>
        <span>·</span>
        <span>{guide.readingTime}</span>
      </div>
    </Link>
  );
}
