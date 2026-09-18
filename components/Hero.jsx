import Link from "next/link";
import Image from "next/image";
import { casinos } from "@/data/casinos";

export default function Hero() {
  const top = casinos[0];

  return (
    <section
      className="
        relative
        overflow-hidden
        border-b border-[#22305E]
        bg-[#070D26]
      "
    >
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/casino-hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#070D26]/35" />

        {/* Extra readability without killing the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D26]/55 via-[#070D26]/20 to-[#070D26]/40" />
      </div>

      {/* Hero Content */}
      <div
        className="
          container-content
          relative
          z-10
          grid
          gap-14
          py-16
          md:grid-cols-2
          md:gap-10
          md:py-24
        "
      >
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm text-clay">
            Independent research, since 2019
          </p>

          <h1 className="font-display text-display-xl text-paper">
            Play smarter.
            <br />
            <span className="italic text-moss-500">
              Choose better.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-clay">
            GamblerLive helps players discover, compare and understand online
            casinos through expert reviews, rankings, bonuses and independent
            research — not marketing copy.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/casinos"
              className="
                rounded
                bg-moss-500
                px-6 py-3.5
                text-sm
                font-semibold
                text-ink
                transition-colors
                hover:bg-moss-400
              "
            >
              Explore casinos
            </Link>

            <Link
              href="/guides/how-we-review-casinos"
              className="
                rounded
                border border-ink-line
                bg-[#070D26]/20
                px-6 py-3.5
                text-sm
                font-semibold
                text-paper
                backdrop-blur-sm
                transition-colors
                hover:border-bone
              "
            >
              How we review
            </Link>
          </div>

          <dl className="mt-12 grid max-w-sm grid-cols-3 gap-6 border-t border-ink-line pt-6">
            <div>
              <dt className="text-xs text-clay">Casinos tested</dt>
              <dd className="mt-1 font-display text-2xl text-paper tabular-num">
                140+
              </dd>
            </div>

            <div>
              <dt className="text-xs text-clay">Review criteria</dt>
              <dd className="mt-1 font-display text-2xl text-paper tabular-num">
                28
              </dd>
            </div>

            <div>
              <dt className="text-xs text-clay">Updated</dt>
              <dd className="mt-1 font-display text-2xl text-paper tabular-num">
                Weekly
              </dd>
            </div>
          </dl>
        </div>

        {/* RIGHT CARD */}
        <div className="flex items-center">
          <div
            className="
              w-full
              overflow-hidden
              rounded-lg
              border border-ink-line
              bg-ink-soft/95
              shadow-card
              backdrop-blur-sm
            "
          >
            <div className="relative h-40 w-full">
              <Image
                src={top.image}
                alt={top.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-ink-line pb-4">
                <span className="text-xs text-clay">
                  This week's top pick
                </span>

                <span className="text-xs font-medium text-moss-500">
                  Editor's choice
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between">
                <div>
                  <p className="text-xs text-clay">
                    {top.tagline}
                  </p>

                  <h3 className="mt-1 font-display text-2xl text-paper">
                    {top.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="font-display text-3xl text-moss-500 tabular-num">
                    {top.rating}
                  </span>

                  <span className="text-sm text-clay">
                    /10
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded border border-ink-line bg-ink p-4">
                <p className="text-xs text-clay">
                  Welcome bonus
                </p>

                <p className="mt-1 text-[15px] font-medium text-paper">
                  {top.bonus}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-clay">
                <div>
                  License:{" "}
                  <span className="text-bone">
                    {top.license}
                  </span>
                </div>

                <div>
                  Games:{" "}
                  <span className="text-bone">
                    {top.games}
                  </span>
                </div>

                <div>
                  Payout:{" "}
                  <span className="text-bone">
                    {top.payoutSpeed}
                  </span>
                </div>

                <div>
                  Founded:{" "}
                  <span className="text-bone">
                    {top.founded}
                  </span>
                </div>
              </div>

              <Link
                href={`/casino/${top.slug}`}
                className="
                  mt-7
                  block
                  rounded
                  bg-moss-500
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-ink
                  hover:bg-moss-400
                "
              >
                Read full review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}