import Link from "next/link";
import Image from "next/image";

export default function GameCard({ game }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block overflow-hidden rounded-lg border border-ink-line bg-ink-soft hover:border-bone"
    >
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={game.image}
          alt={game.title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-moss-500">{game.developer}</p>
        <h3 className="mt-1.5 font-display text-lg text-paper group-hover:underline">
          {game.title}
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-ink-line pt-4 text-xs">
          <div>
            <p className="text-clay">RTP</p>
            <p className="mt-0.5 font-medium text-bone tabular-num">{game.rtp}%</p>
          </div>
          <div>
            <p className="text-clay">Volatility</p>
            <p className="mt-0.5 font-medium text-bone">{game.volatility}</p>
          </div>
          <div>
            <p className="text-clay">Max win</p>
            <p className="mt-0.5 font-medium text-bone">{game.maxWin}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
