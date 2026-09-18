"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NAV = [
  {
    label: "Casinos",
    href: "/casinos",
    items: [
      { label: "Best Online Casinos", href: "/casinos" },
      { label: "New Casinos", href: "/casinos/new" },
      { label: "Crypto Casinos", href: "/crypto-casinos" },
      { label: "Fast Payout Casinos", href: "/casinos/fast-payout" },
      { label: "Mobile Casinos", href: "/casinos/mobile" },
    ],
  },
  {
    label: "Bonuses",
    href: "/bonuses",
    items: [
      { label: "Best Casino Bonuses", href: "/bonuses" },
      { label: "Welcome Bonuses", href: "/bonuses?category=welcome" },
      { label: "No Deposit Bonuses", href: "/bonuses?category=no-deposit" },
      { label: "Free Spins", href: "/bonuses?category=free-spins" },
      { label: "Crypto Bonuses", href: "/bonuses?category=crypto" },
    ],
  },
  {
    label: "Games",
    href: "/games",
    items: [
      { label: "Slots", href: "/games/slots" },
      { label: "Blackjack", href: "/games/blackjack" },
      { label: "Roulette", href: "/games/roulette" },
      { label: "Baccarat", href: "/games/baccarat" },
      { label: "Live Casino", href: "/games/live-casino" },
    ],
  },
  {
    label: "Guides",
    href: "/guides",
    items: [
      { label: "Casino Guides", href: "/guides" },
      { label: "Payment Guides", href: "/guides?category=payments" },
      { label: "Responsible Gambling", href: "/responsible-gambling" },
    ],
  },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-ink-line"
          : "bg-ink border-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl tracking-tight text-paper md:text-2xl">
          Gambler<span className="text-moss-500">Live</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <div key={item.label} className="group relative py-8">
              <Link
                href={item.href}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-bone transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
              {item.items && (
                <div className="invisible absolute left-0 top-full min-w-[220px] rounded border border-ink-line bg-ink-soft py-2 opacity-0 shadow-card transition-all duration-200 ease-editorial group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-bone hover:bg-ink hover:text-paper"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/casinos"
            className="inline-flex items-center rounded bg-moss-500 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-moss-400"
          >
            Explore Casinos
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-paper"
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} nav={NAV} />
    </header>
  );
}
