import LegalPageContent from "@/components/LegalPageContent";

export const metadata = { title: "Terms of Use" };

const sections = [
  {
    heading: "Acceptance of terms",
    body: "By using GamblerLive, you agree to these terms. If you do not agree, please do not use the site.",
  },
  {
    heading: "Informational purpose",
    body: "Content on GamblerLive is for informational and entertainment purposes only and does not constitute financial, legal, or gambling advice.",
  },
  {
    heading: "No guarantee of outcomes",
    body: "We do not guarantee winnings, bonus eligibility, or the accuracy of any third-party operator's terms at the time you visit their site. Always confirm current terms directly with the operator.",
  },
  {
    heading: "Age and jurisdiction",
    body: "You must be of legal gambling age in your jurisdiction to act on any information provided here. It is your responsibility to confirm online gambling is legal where you live.",
  },
  {
    heading: "Limitation of liability",
    body: "GamblerLive is not liable for losses incurred through the use of third-party casinos linked from this site.",
  },
];

export default function TermsPage() {
  return <LegalPageContent title="Terms of Use" updated="September 1, 2026" sections={sections} />;
}
