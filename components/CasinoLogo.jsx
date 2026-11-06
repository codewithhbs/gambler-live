import Image from "next/image";

// Shows casino.image when provided (drop a logo in /public/img and set
// `image` in data/casinos.js), otherwise a clean monogram tile.
export default function CasinoLogo({ casino, size = 56, className = "", priority = false }) {
  const style = { width: size, height: size };

  if (casino.image) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-lg border border-ink-line bg-ink-soft ${className}`}
        style={style}
      >
        <Image
          src={casino.image}
          alt={`${casino.name} logo`}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const initials = casino.name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-lg border border-moss-500/30 bg-gradient-to-br from-ink-soft to-ink font-display text-moss-500 ${className}`}
      style={{ ...style, fontSize: Math.round(size * 0.38) }}
    >
      {initials}
    </div>
  );
}
