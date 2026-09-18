import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-line bg-ink">
      <div className="container-content flex flex-wrap gap-2 py-4 text-xs text-clay">
        <Link href="/" className="hover:text-paper">Home</Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-paper">{item.label}</Link>
            ) : (
              <span className="text-bone">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
