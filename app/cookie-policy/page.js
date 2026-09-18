import LegalPageContent from "@/components/LegalPageContent";

export const metadata = { title: "Cookie Policy" };

const sections = [
  {
    heading: "What cookies are",
    body: "Cookies are small text files stored on your device that let a site remember information between visits.",
  },
  {
    heading: "Essential cookies",
    body: "These are required for the site to function correctly, such as remembering your cookie consent choice.",
  },
  {
    heading: "Analytics cookies",
    body: "We use analytics cookies to understand which pages are useful and where visitors run into problems, so we can improve the site over time.",
  },
  {
    heading: "Managing cookies",
    body: "Most browsers let you block or delete cookies through their settings. Blocking essential cookies may affect how parts of the site function.",
  },
];

export default function CookiePolicyPage() {
  return <LegalPageContent title="Cookie Policy" updated="September 1, 2026" sections={sections} />;
}
