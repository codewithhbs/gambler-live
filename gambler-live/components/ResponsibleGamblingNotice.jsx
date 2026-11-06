import Link from "next/link";

export default function ResponsibleGamblingNotice() {
  return (
    <section className="border-t border-ink-line bg-ink-soft">
      <div className="container-content flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-clay">
          Gambling should be entertainment, not a source of income. Set a budget
          before you play, and stop if it stops being fun.{" "}
          <Link href="/responsible-gambling" className="text-moss-500 underline">
            Read our responsible gambling guide
          </Link>
          .
        </p>
        <p className="text-xs text-clay">18+ only. Void where prohibited.</p>
      </div>
    </section>
  );
}
