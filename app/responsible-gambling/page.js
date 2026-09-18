export const metadata = {
  title: "Responsible Gambling",
  description:
    "Gambling should be entertainment, not a source of income. Guidance on limits, warning signs and where to get help.",
};

export default function ResponsibleGamblingPage() {
  return (
    <section className="bg-ink">
      <div className="container-content max-w-prose py-16 md:py-20">
        <p className="text-xs text-moss-500">18+</p>
        <h1 className="mt-2 font-display text-display-lg text-paper">
          Responsible gambling
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-clay">
          Gambling should be entertainment — never a way to make money or a way
          to cope with stress. If it stops feeling like entertainment, it's
          time to step back.
        </p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="font-display text-xl text-paper">Know your limits</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">
              Decide how much time and money you're willing to spend before you
              start, and treat that as a hard limit rather than a target.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-paper">
              Never gamble with money you can't afford to lose
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">
              Gambling funds should come from discretionary income only — never
              from money set aside for bills, savings or essentials.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-paper">Take breaks</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">
              Most licensed casinos let you set deposit limits, time-outs or
              full self-exclusion periods directly in your account settings.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-paper">Recognize warning signs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-clay">
              <li>Chasing losses with bigger bets</li>
              <li>Gambling to escape stress or difficult emotions</li>
              <li>Hiding the amount of time or money spent from others</li>
              <li>Borrowing money to keep playing</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-paper">Where to get help</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-clay">
              If gambling is affecting your life, free and confidential support
              is available through organizations such as GamCare, Gamblers
              Anonymous and BeGambleAware. National helplines are available in
              most countries and are staffed by trained counselors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
