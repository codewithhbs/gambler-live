import Link from "next/link";
import SentEmail from "./SentEmail";

export const metadata = {
  title: "Message Sent",
  description: "Thanks for contacting GamblerLive. We have received your message.",
  alternates: { canonical: "/contact/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="bg-ink">
      <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-moss-500/15 text-moss-500">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="mt-6 text-xs text-moss-500">Contact</p>
        <h1 className="mt-2 font-display text-display-lg text-paper">Thank you!</h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-clay">
          Your message has been sent successfully. <SentEmail /> Our team usually replies within 2 business days.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded bg-moss-500 px-6 py-3 text-sm font-semibold text-ink hover:bg-moss-400">
            Back to home
          </Link>
          <Link href="/casinos" className="rounded border border-ink-line px-6 py-3 text-sm font-semibold text-paper hover:border-bone">
            Explore casinos
          </Link>
        </div>
      </div>
    </section>
  );
}
