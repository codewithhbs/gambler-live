export default function Newsletter() {
  return (
    <section className="grain-paper bg-paper">
      <div className="container-content flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
        <div className="max-w-lg">
          <h2 className="font-display text-display-md text-ink">
            Get our weekly ranking updates
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
            One email a week: ranking changes, new bonus terms worth knowing, and
            anything we've flagged in our ongoing testing.
          </p>
        </div>
        <form className="flex w-full max-w-md gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@email.com"
            className="w-full rounded border border-ink/15 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-moss-600"
          />
          <button
            type="submit"
            className="shrink-0 rounded bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-ink/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
