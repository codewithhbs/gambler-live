export const gameCategories = [
  {
    slug: "slots",
    name: "Slots",
    intro:
      "Slots make up most of any casino's library. RTP, volatility and max win vary enormously between titles, and those numbers matter more than the theme.",
  },
  {
    slug: "blackjack",
    name: "Blackjack",
    intro:
      "Blackjack offers one of the lowest house edges in the casino when played with correct basic strategy. Rule variants change the edge more than players expect.",
  },
  {
    slug: "roulette",
    name: "Roulette",
    intro:
      "European single-zero roulette gives a materially better house edge than American double-zero wheels. Always check which version you're playing.",
  },
  {
    slug: "baccarat",
    name: "Baccarat",
    intro:
      "Baccarat is simple to learn and carries one of the lowest house edges available, particularly on the Banker bet.",
  },
  {
    slug: "poker",
    name: "Poker",
    intro:
      "Casino poker variants like Casino Hold'em and Three Card Poker play against the house rather than other players, with fixed house-edge math.",
  },
  {
    slug: "live-casino",
    name: "Live Casino",
    intro:
      "Live-dealer games stream a real table in real time, combining the trust of a physical casino with online convenience.",
  },
];

export const games = [
  {
    slug: "golden-reel-fortune",
    image: "/img/Golden-Reel-Fortune.webp",
    title: "Golden Reel Fortune",
    category: "slots",
    developer: "Pinnacle Studios",
    releaseDate: "2025-03-10",
    rtp: 96.4,
    volatility: "Medium-High",
    maxWin: "5,000x stake",
    reels: 5,
    paylines: 20,
    minBet: "€0.20",
    maxBet: "€100",
    overview:
      "Golden Reel Fortune is a 5-reel video slot built around a cascading-symbol mechanic, with multipliers that grow through consecutive wins in the same spin.",
    howToPlay:
      "Set your stake, choose from 20 fixed paylines, and spin. Winning symbols clear and are replaced by new ones falling from above, chaining further wins.",
    features: [
      "Cascading wins with an increasing multiplier per chain",
      "Free spins round triggered by 3+ scatter symbols",
      "Random wild overlay during the base game",
    ],
    rtpExplanation:
      "96.4% RTP means that, over a very large number of spins, the game returns €96.40 for every €100 wagered on average — it says nothing about any individual session.",
    volatilityExplanation:
      "Medium-high volatility means longer stretches without a win, offset by larger payouts when a chain connects.",
    prosCons: {
      pros: ["Strong max-win ceiling", "Chain mechanic keeps base game engaging"],
      cons: ["Free spins round is relatively rare to trigger"],
    },
  },
  {
    slug: "vault-breaker",
    image: "/img/vault-breaker.webp",
    title: "Vault Breaker",
    category: "slots",
    developer: "Ironclad Games",
    releaseDate: "2024-11-02",
    rtp: 95.8,
    volatility: "High",
    maxWin: "10,000x stake",
    reels: 6,
    paylines: 4096,
    minBet: "€0.10",
    maxBet: "€50",
    overview:
      "A high-volatility 6-reel slot using a ways-to-win structure, themed around cracking a bank vault across escalating bonus stages.",
    howToPlay:
      "Matching symbols on adjacent reels from left to right pay across all 4,096 ways, regardless of exact position.",
    features: [
      "Expanding wild reels during bonus rounds",
      "Three-tier bonus buy option",
      "Progressive multiplier that resets each spin",
    ],
    rtpExplanation:
      "95.8% RTP is slightly below the genre average, which is common in slots offering a bonus-buy feature.",
    volatilityExplanation:
      "High volatility suits players comfortable with longer losing streaks in exchange for a shot at the 10,000x ceiling.",
    prosCons: {
      pros: ["Very high win ceiling", "Bonus buy for players who want to skip to features"],
      cons: ["RTP dips further when bonus is purchased rather than triggered naturally"],
    },
  },
  {
    slug: "classic-blackjack-pro",
    image: "/img/Classic-Blackjack-Pro.jpg",
    title: "Classic Blackjack Pro",
    category: "blackjack",
    developer: "Table Works",
    releaseDate: "2023-06-15",
    rtp: 99.5,
    volatility: "Low",
    maxWin: "3x stake (blackjack payout)",
    reels: null,
    paylines: null,
    minBet: "€1",
    maxBet: "€500",
    overview:
      "A single-deck blackjack variant that pays 3:2 on natural blackjack, with standard dealer-stands-on-17 rules.",
    howToPlay:
      "Place a bet, receive two cards, and choose to hit, stand, double down or split based on the dealer's up-card and basic strategy.",
    features: [
      "Single-deck shoe reduces edge further with correct strategy",
      "Side bet: Perfect Pairs",
      "Unlimited re-splits on pairs",
    ],
    rtpExplanation:
      "99.5% RTP assumes perfect basic strategy play — deviating from it lowers your effective return.",
    volatilityExplanation:
      "Low volatility relative to slots; outcomes are close to break-even over a single session with correct strategy.",
    prosCons: {
      pros: ["One of the best house edges available on this site", "Clean, uncluttered table interface"],
      cons: ["Side bets carry a much worse house edge than the main game"],
    },
  },
  {
    slug: "riviera-live-roulette",
    image: "/img/Riviera-Live-Roulette.webp",
    title: "Riviera Live Roulette",
    category: "live-casino",
    developer: "StudioLive",
    releaseDate: "2024-02-20",
    rtp: 97.3,
    volatility: "Medium",
    maxWin: "35x stake (straight-up)",
    reels: null,
    paylines: null,
    minBet: "€0.50",
    maxBet: "€2,000",
    overview:
      "A streamed European single-zero roulette table with a professional dealer and multi-camera angles, playable directly in the browser.",
    howToPlay:
      "Place chips on the virtual betting layout before the timer ends; the live dealer spins the physical wheel and results sync automatically.",
    features: [
      "European single-zero wheel (2.7% house edge)",
      "Statistics panel showing recent number history",
      "Chat with the live dealer",
    ],
    rtpExplanation:
      "97.3% RTP reflects the standard European roulette house edge of 2.70% on all even-money and inside bets.",
    volatilityExplanation:
      "Medium volatility overall, though individual bet types range from low (even-money) to very high (straight-up numbers).",
    prosCons: {
      pros: ["True single-zero wheel, better odds than American roulette", "Fast round pace"],
      cons: ["Higher minimum bet than most RNG roulette tables"],
    },
  },
];

export function getGamesByCategory(category) {
  return games.filter((g) => g.category === category);
}

export function getGameBySlug(slug) {
  return games.find((g) => g.slug === slug);
}

export function getCategory(slug) {
  return gameCategories.find((c) => c.slug === slug);
}
