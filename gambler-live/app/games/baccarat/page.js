import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Baccarat Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about baccarat before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/baccarat",
});

export default function BaccaratPage() {
  return <GameCategoryContent slug="baccarat" />;
}
