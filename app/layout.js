import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GamblerLive — Independent Online Casino Reviews & Rankings",
    template: "%s | GamblerLive",
  },
  description:
    "Compare licensed online casinos with GamblerLive: independent reviews, welcome bonuses, payment methods, withdrawal limits and player guides. 18+ only.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    siteName: "GamblerLive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
