import LegalPageContent from "@/components/LegalPageContent";

export const metadata = { title: "Privacy Policy" };

const sections = [
  {
    heading: "Information we collect",
    body: "We collect information you provide directly, such as through the contact form or a newsletter signup, and standard technical data like browser type and pages visited via analytics tools.",
  },
  {
    heading: "How we use information",
    body: "Information is used to respond to inquiries, send newsletter content you've opted into, and understand how the site is used so we can improve it.",
  },
  {
    heading: "Cookies",
    body: "We use cookies for essential site functionality and analytics. See our Cookie Policy for full detail on what's set and why.",
  },
  {
    heading: "Third parties",
    body: "We do not sell personal information. Some data may be shared with analytics providers strictly to operate the site.",
  },
  {
    heading: "Your rights",
    body: "You can request access to, correction of, or deletion of your personal data by contacting us at editorial@gamblerlive.com.",
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPageContent title="Privacy Policy" updated="September 1, 2026" sections={sections} />;
}
