import Link from "next/link";

const COLUMNS = [
  {
    title: "Casinos",
    links: [
      { label: "Best Casinos", href: "/casinos" },
      { label: "Casino Reviews", href: "/casinos" },
      { label: "New Casinos", href: "/casinos/new" },
      { label: "Crypto Casinos", href: "/crypto-casinos" },
    ],
  },
  {
    title: "Bonuses",
    links: [
      { label: "Welcome Bonuses", href: "/bonuses?category=welcome" },
      { label: "Free Spins", href: "/bonuses?category=free-spins" },
      { label: "No Deposit", href: "/bonuses?category=no-deposit" },
      { label: "Cashback", href: "/bonuses?category=cashback" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Casino Guides", href: "/guides" },
      { label: "Payment Guides", href: "/guides?category=payments" },
      { label: "Game Guides", href: "/guides?category=games" },
      { label: "Responsible Gambling", href: "/responsible-gambling" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Editorial Policy", href: "/about#editorial-standards" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-content grid gap-10 py-16 md:grid-cols-6">
        <div className="md:col-span-2">
          <span className="font-display text-xl text-paper">
            Gambler<span className="text-moss-500">Live</span>
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-clay">
            Independent casino reviews, rankings and guides, built on research rather
            than marketing copy.
          </p>
          <div className="mt-6 flex gap-4 text-clay">
            {["X", "IG", "YT"].map((s) => (
              <span key={s} className="text-xs tracking-wide">{s}</span>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-bone">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-clay hover:text-paper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-line">
        <div className="container-content flex flex-col gap-3 py-6 text-xs text-clay md:flex-row md:items-center md:justify-between">
          <p>
            GamblerLive may earn a commission from operators listed on this site.
            This does not affect our editorial scoring.{" "}
            <Link href="/disclaimer" className="underline hover:text-paper">
              Affiliate Disclosure
            </Link>
          </p>
          <p className="font-medium text-bone">
            18+ · Gambling involves risk. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
