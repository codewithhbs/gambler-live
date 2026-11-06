import { pageMeta } from "@/lib/site";
import GameCategoryContent from "@/components/GameCategoryContent";

export const metadata = pageMeta({
  title: "Live Casino Guide: Rules, Odds & Top Games",
  description:
    "Everything worth knowing about live casino games before you play for real money: rules, odds, popular variants and reviewed titles.",
  path: "/games/live-casino",
});

export default function LiveCasinoPage() {
  return <GameCategoryContent slug="live-casino" />;
}
