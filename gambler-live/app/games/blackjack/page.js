import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Blackjack Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about blackjack before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/blackjack",
});

export default function BlackjackPage() {
  return <GameCategoryContent slug="blackjack" />;
}
