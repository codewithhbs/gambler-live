import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Poker Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about poker before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/poker",
});

export default function PokerPage() {
  return <GameCategoryContent slug="poker" />;
}
