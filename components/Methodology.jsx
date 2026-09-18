import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Research",
    detail: "We check licensing registers, ownership records and complaint history before a casino is added to the list.",
  },
  {
    n: "02",
    title: "Test",
    detail: "Our team opens a real account, deposits, plays across game categories, and requests a withdrawal.",
  },
  {
    n: "03",
    title: "Compare",
    detail: "Results are benchmarked against 140+ other operators across the same 28 criteria.",
  },
  {
    n: "04",
    title: "Score",
    detail: "Each category — games, bonuses, payments, support, mobile — receives an independent numeric score.",
  },
  {
    n: "05",
    title: "Review",
    detail: "A senior editor verifies the write-up and re-tests withdrawal claims before publishing.",
  },
];

export default function Methodology() {
  return (
    <section className="bg-ink">
      <div className="container-content py-20">
        <SectionHeader
          kicker="Methodology"
          title="How we rate casinos"
          description="Every score on GamblerLive comes from the same five-step process, applied consistently whether or not a casino is an advertising partner."
        />
        <div className="grid gap-8 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative border-t border-ink-line pt-5">
              <span className="font-display text-2xl text-moss-500 tabular-num">{step.n}</span>
              <h3 className="mt-2 text-[15px] font-medium text-paper">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-clay">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
