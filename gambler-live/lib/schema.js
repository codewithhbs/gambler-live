import { SITE_URL, SITE_NAME, CONTACT_EMAIL, absoluteUrl } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/icon-512.png"),
  email: CONTACT_EMAIL,
  description:
    "GamblerLive is an independent online casino review site publishing casino reviews, rankings, bonus comparisons and player guides.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    url: absoluteUrl("/contact"),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// items: [{ name, path }]  (Home is prepended automatically)
export function breadcrumbSchema(items) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: absoluteUrl(it.path) } : {}),
    })),
  };
}

export function articleSchema({ type = "Article", title, description, path, author, datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    ...(author ? { author: { "@type": "Person", name: author } } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified || datePublished ? { dateModified: dateModified || datePublished } : {}),
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function itemListSchema({ name, path, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.path),
    })),
  };
}

export function casinoReviewSchema(casino) {
  const path = `/casino/${casino.slug}`;
  const org = {
    "@type": "Organization",
    name: casino.name,
    ...(casino.website ? { url: casino.website } : {}),
    ...(casino.established ? { foundingDate: String(casino.established) } : {}),
    ...(casino.operator ? { parentOrganization: { "@type": "Organization", name: casino.operator } } : {}),
  };
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: `${casino.name} Review`,
    url: absoluteUrl(path),
    description: casino.summary,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: org,
    ...(typeof casino.rating === "number"
      ? {
          review: {
            "@type": "Review",
            itemReviewed: org,
            author: { "@id": `${SITE_URL}/#organization` },
            reviewRating: { "@type": "Rating", ratingValue: casino.rating, bestRating: 10, worstRating: 0 },
          },
        }
      : {}),
  };
}
