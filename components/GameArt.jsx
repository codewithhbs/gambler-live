const PATTERNS = {
  slots: (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={30 + i * 62}
          y={i % 2 === 0 ? 40 : 70}
          width="34"
          height={i % 2 === 0 ? 140 : 90}
          rx="4"
          fill="none"
          stroke="#22D3EE"
          strokeOpacity={i === 2 ? 0.9 : 0.35}
          strokeWidth="1.5"
        />
      ))}
      <circle cx="30" cy="200" r="1.5" fill="#C3CDE6" opacity="0.5" />
      <circle cx="290" cy="30" r="1.5" fill="#C3CDE6" opacity="0.5" />
    </>
  ),
  blackjack: (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      {[-10, 8, 26].map((rot, i) => (
        <rect
          key={i}
          x="118"
          y="55"
          width="64"
          height="90"
          rx="6"
          fill="none"
          stroke="#22D3EE"
          strokeOpacity={i === 1 ? 0.9 : 0.4}
          strokeWidth="1.5"
          transform={`rotate(${rot} 150 100)`}
        />
      ))}
    </>
  ),
  roulette: (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      <circle cx="150" cy="100" r="70" fill="none" stroke="#22D3EE" strokeOpacity="0.9" strokeWidth="1.5" />
      <circle cx="150" cy="100" r="46" fill="none" stroke="#C3CDE6" strokeOpacity="0.4" strokeWidth="1" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 150 + Math.cos(a) * 46;
        const y1 = 100 + Math.sin(a) * 46;
        const x2 = 150 + Math.cos(a) * 70;
        const y2 = 100 + Math.sin(a) * 70;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#22D3EE" strokeOpacity="0.25" strokeWidth="1" />;
      })}
      <circle cx="150" cy="100" r="3" fill="#22D3EE" />
    </>
  ),
  baccarat: (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      <rect x="100" y="45" width="58" height="82" rx="5" fill="none" stroke="#22D3EE" strokeOpacity="0.85" strokeWidth="1.5" />
      <rect x="142" y="73" width="58" height="82" rx="5" fill="none" stroke="#C3CDE6" strokeOpacity="0.45" strokeWidth="1.5" />
    </>
  ),
  poker: (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle
          key={i}
          cx={70 + i * 40}
          cy="100"
          r="14"
          fill="none"
          stroke="#22D3EE"
          strokeOpacity={i === 2 ? 0.9 : 0.35}
          strokeWidth="1.5"
        />
      ))}
    </>
  ),
  "live-casino": (id) => (
    <>
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B40" />
          <stop offset="100%" stopColor="#0A1230" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#g-${id})`} />
      <rect x="90" y="60" width="120" height="80" rx="6" fill="none" stroke="#22D3EE" strokeOpacity="0.85" strokeWidth="1.5" />
      <circle cx="150" cy="100" r="20" fill="none" stroke="#C3CDE6" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="150" cy="100" r="6" fill="#22D3EE" opacity="0.8" />
    </>
  ),
};

export default function GameArt({ category, id = "a", className = "" }) {
  const draw = PATTERNS[category] || PATTERNS.slots;
  return (
    <svg
      viewBox="0 0 300 200"
      className={className}
      role="img"
      aria-label={`${category} artwork`}
    >
      {draw(id)}
    </svg>
  );
}
