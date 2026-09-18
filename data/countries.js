export const countries = [
  {
    code: "uk",
    name: "United Kingdom",
    regulator: "UK Gambling Commission (UKGC)",
    currency: "GBP",
    intro:
      "UK players benefit from some of the strictest casino regulation in the world. Every operator on this page holds a valid UKGC license and follows mandatory affordability and self-exclusion rules.",
    popularGames: ["Slots", "Roulette", "Live Casino"],
  },
  {
    code: "canada",
    name: "Canada",
    regulator: "Provincial regulators (e.g. AGCO, iGaming Ontario)",
    currency: "CAD",
    intro:
      "Regulation varies by province. Ontario players should confirm an operator holds an iGaming Ontario registration; elsewhere, offshore-licensed casinos are commonly used.",
    popularGames: ["Slots", "Blackjack", "Live Casino"],
  },
  {
    code: "india",
    name: "India",
    regulator: "No central federal regulator; state law varies",
    currency: "INR",
    intro:
      "Online casino legality depends on state law. We list operators that accept Indian players and support INR-friendly payment methods, but always confirm local rules before depositing.",
    popularGames: ["Slots", "Live Casino", "Poker"],
  },
  {
    code: "australia",
    name: "Australia",
    regulator: "Interactive Gambling Act 2001",
    currency: "AUD",
    intro:
      "Australian law restricts locally licensed online casinos, so most players use offshore-licensed operators. We flag licensing clearly on every review.",
    popularGames: ["Slots", "Roulette", "Baccarat"],
  },
];

export function getCountry(code) {
  return countries.find((c) => c.code === code);
}
