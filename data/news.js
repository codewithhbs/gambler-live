export const news = [
  {
    slug: "mga-tightens-affiliate-rules-2026",
    category: "Regulation",
    title: "MGA Tightens Affiliate Disclosure Rules for 2026",
    excerpt:
      "New guidance requires clearer separation between editorial content and paid placement across licensed operators' partner sites.",
    publishedAt: "2026-09-02",
    author: "GamblerLive Newsroom",
    content: [
      "The Malta Gaming Authority has issued updated guidance requiring licensed operators to ensure affiliate and marketing partners clearly label sponsored placements, ranked lists influenced by commission, and paid reviews.",
      "The change follows a wider industry pattern of regulators scrutinizing how comparison and review sites present ranked content to consumers, particularly where placement correlates with commission rates rather than product quality.",
      "Operators have a compliance window to update partner agreements. GamblerLive's own methodology already separates editorial scoring from commercial terms, and we do not expect operational changes as a result of this guidance.",
    ],
  },
  {
    slug: "provider-spotlight-new-slot-engine",
    category: "Game Releases",
    title: "A New Slot Engine Is Changing How Volatility Is Marketed",
    excerpt:
      "One major studio's new math model lets operators offer selectable volatility on the same title — here's what that means for players.",
    publishedAt: "2026-08-19",
    author: "GamblerLive Newsroom",
    content: [
      "A new slot math engine now lets players choose between low, medium and high volatility configurations of the same base game before spinning, rather than volatility being fixed at release.",
      "In practice, the RTP stays roughly constant across configurations while the payout distribution shifts — high volatility mode trims win frequency in exchange for a larger jackpot ceiling.",
      "Transparency will matter here: we'll be watching whether operators clearly label which configuration is active during play, since it's easy to obscure inside a settings menu.",
    ],
  },
];

export function getNewsBySlug(slug) {
  return news.find((n) => n.slug === slug);
}
