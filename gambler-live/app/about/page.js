export const metadata = {
  title: "About GamblerLive",
  description:
    "Who we are, how we review casinos, and how GamblerLive makes money.",
};

const SECTIONS = [
  {
    id: "who-we-are",
    title: "Who we are",
    body:
      "GamblerLive is an independent team of researchers and writers covering the online casino industry. We test operators directly rather than relying on press materials.",
  },
  {
    id: "what-we-do",
    title: "What we do",
    body:
      "We review casinos, compare bonuses, and publish guides that explain how licensing, payments and game mathematics actually work — in plain language.",
  },
  {
    id: "editorial-standards",
    title: "Our editorial standards",
    body:
      "Every review follows the same scoring criteria regardless of whether the casino is an advertising partner. Scores are never adjusted for commercial reasons.",
  },
  {
    id: "how-we-review",
    title: "How we review casinos",
    body:
      "Our team opens a funded account, plays across game categories, and requests a real withdrawal before publishing a rating. See our full methodology for detail.",
  },
  {
    id: "how-we-make-money",
    title: "How we make money",
    body:
      "GamblerLive earns a commission when readers sign up with a casino through our links. This never influences the score a casino receives.",
  },
  {
    id: "our-commitment",
    title: "Our commitment to readers",
    body:
      "We will always disclose affiliate relationships clearly, correct errors when we find them, and promote responsible gambling resources alongside our content.",
  },
];

export default function AboutPage() {
  return (
    <section className="bg-ink">
      <div className="container-content max-w-prose py-16 md:py-20">
        <p className="text-xs text-moss-500">About</p>
        <h1 className="mt-2 font-display text-display-lg text-paper">
          Independent by design
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-clay">
          GamblerLive exists to give players a clearer picture of the online
          casino industry than marketing pages typically offer.
        </p>

        <div className="mt-14 space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id}>
              <h2 className="font-display text-2xl text-paper">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-clay">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
