import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Slots Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about slots before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/slots",
});

export default function SlotsPage() {
  return <GameCategoryContent slug="slots" />;
}
