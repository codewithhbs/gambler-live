/** @type {import('next').NextConfig} */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.gamblerlive.com").replace(/\/$/, "");
const canonicalHost = new URL(SITE_URL).hostname; // www.gamblerlive.com
const altHost = canonicalHost.startsWith("www.") ? canonicalHost.slice(4) : `www.${canonicalHost}`;

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Fix duplicate WWW / non-WWW versions: 301 the alternate host to the canonical one.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: altHost }],
        destination: `${SITE_URL}/:path*`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
