// Single source of truth for the preferred (canonical) domain.
// Non-www requests are 301-redirected to this host in next.config.mjs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.gamblerlive.com").replace(/\/$/, "");
export const SITE_NAME = "GamblerLive";
export const CONTACT_EMAIL = "contact@gamblerlive.com";

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Helper for per-page metadata: self-referencing canonical + matching OG url.
export function pageMeta({ title, description, path, absoluteTitle = false, ...rest }) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${SITE_NAME}`,
      description,
    },
    ...rest,
  };
}
