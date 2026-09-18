"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ open, onClose, nav }) {
  const [expanded, setExpanded] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />
      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink-soft p-6">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-lg text-paper">
            Gambler<span className="text-moss-500">Live</span>
          </span>
          <button onClick={onClose} aria-label="Close" className="text-paper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile Primary">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-ink-line py-1">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="py-3 text-base font-medium text-paper"
                >
                  {item.label}
                </Link>
                {item.items && (
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="p-3 text-bone"
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <span className={`inline-block transition-transform ${expanded === item.label ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                )}
              </div>
              {item.items && expanded === item.label && (
                <div className="pb-3 pl-3">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-bone"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/casinos"
          onClick={onClose}
          className="mt-6 block rounded bg-moss-500 px-5 py-3 text-center text-sm font-semibold text-ink"
        >
          Explore Casinos
        </Link>
      </div>
    </div>
  );
}
