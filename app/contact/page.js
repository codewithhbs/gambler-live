import { pageMeta } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact the GamblerLive team for editorial, partnership or business inquiries. Send a message through our contact form and we will reply by email.",
  path: "/contact",
});

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
            {/* <div>
              <dt className="text-clay">Editorial inquiries</dt>
              <dd className="mt-0.5 text-bone">editorial@gamblerlive.com</dd>
            </div>
            <div>
              <dt className="text-clay">Partnership inquiries</dt>
              <dd className="mt-0.5 text-bone">partners@gamblerlive.com</dd>
            </div> */}
            <div>
              <dt className="text-clay">Business inquiries</dt>
              <dd className="mt-0.5 text-bone">contact@gamblerlive.com</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
