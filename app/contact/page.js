export const metadata = {
  title: "Contact GamblerLive",
  description: "Editorial, partnership and business inquiries.",
};

export default function ContactPage() {
  return (
    <section className="bg-ink">
      <div className="container-content grid gap-14 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs text-moss-500">Contact</p>
          <h1 className="mt-2 font-display text-display-lg text-paper">Get in touch</h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-clay">
            Use the form for general inquiries, or email the relevant address
            directly for a faster response.
          </p>

          <dl className="mt-10 space-y-5 border-t border-ink-line pt-6 text-sm">
            <div>
              <dt className="text-clay">Editorial inquiries</dt>
              <dd className="mt-0.5 text-bone">editorial@gamblerlive.com</dd>
            </div>
            <div>
              <dt className="text-clay">Partnership inquiries</dt>
              <dd className="mt-0.5 text-bone">partners@gamblerlive.com</dd>
            </div>
            <div>
              <dt className="text-clay">Business inquiries</dt>
              <dd className="mt-0.5 text-bone">business@gamblerlive.com</dd>
            </div>
          </dl>
        </div>

        <form className="rounded-lg border border-ink-line bg-ink-soft p-6 md:p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-bone">Name</label>
              <input
                id="name"
                type="text"
                className="w-full rounded border border-ink-line bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-clay focus:border-moss-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-bone">Email</label>
              <input
                id="email"
                type="email"
                className="w-full rounded border border-ink-line bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-clay focus:border-moss-500"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="topic" className="mb-1.5 block text-sm text-bone">Topic</label>
              <select
                id="topic"
                className="w-full rounded border border-ink-line bg-ink px-4 py-2.5 text-sm text-paper focus:border-moss-500"
              >
                <option>Editorial</option>
                <option>Partnership</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-bone">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded border border-ink-line bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-clay focus:border-moss-500"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-moss-500 py-3 text-sm font-semibold text-ink hover:bg-moss-400"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
