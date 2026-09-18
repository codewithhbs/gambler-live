import LegalPageContent from "@/components/LegalPageContent";

export const metadata = { title: "Disclaimer & Affiliate Disclosure" };

const sections = [
  {
    heading: "Affiliate disclosure",
    body: "GamblerLive may earn a commission when readers sign up with an operator through links on this site. This is how we fund independent research and testing.",
  },
  {
    heading: "Editorial independence",
    body: "Commission arrangements never influence the scores, rankings, or verdicts published in our reviews. Every operator is scored against the same fixed criteria regardless of commercial relationship.",
  },
  {
    heading: "No guaranteed outcomes",
    body: "Gambling outcomes are inherently uncertain. Nothing on this site should be read as implying guaranteed wins, risk-free play, or profit.",
  },
  {
    heading: "Accuracy",
    body: "We work to keep bonus terms, licensing details and payout figures current, but operators can change terms at any time. Always verify details on the operator's own site before depositing.",
  },
];

export default function DisclaimerPage() {
  return <LegalPageContent title="Disclaimer & Affiliate Disclosure" updated="September 1, 2026" sections={sections} />;
}
