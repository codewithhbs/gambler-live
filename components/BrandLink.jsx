import { AFFILIATE_REL } from "@/lib/affiliate";

// Wraps a brand's name / logo so it opens the brand's tracking link
// (casino.visitUrl). Falls back to plain content when no link exists.
export default function BrandLink({ casino, children, className = "", label }) {
  if (!casino?.visitUrl) return <span className={className}>{children}</span>;
  return (
    <a
      href={casino.visitUrl}
      target="_blank"
      rel={AFFILIATE_REL}
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}
