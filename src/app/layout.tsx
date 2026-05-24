import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookCTA } from "@/components/layout/StickyBookCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { studio } from "@/lib/data";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${studio.fullName} | Bhaisepati, Lalitpur`,
    template: `%s | ${studio.name}`,
  },
  description: studio.metaDescription,
  keywords: [
    "pilates lalitpur",
    "reformer pilates bhaisepati",
    "studio n8 pilates",
    "pilates nepal",
    "wellness lalitpur",
  ],
  openGraph: {
    title: studio.fullName,
    description: studio.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: studio.name,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: studio.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: studio.fullName,
    description: studio.metaDescription,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to main content
        </a>
        <JsonLd />
        <Header />
        <main
          id="main-content"
          className="max-md:pb-[calc(4.5rem+env(safe-area-inset-bottom))]"
        >
          {children}
        </main>
        <Footer />
        <StickyBookCTA />
      </body>
    </html>
  );
}
