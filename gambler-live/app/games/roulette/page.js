import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Roulette Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about roulette before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/roulette",
});

export default function RoulettePage() {
  return <GameCategoryContent slug="roulette" />;
}
