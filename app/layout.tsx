// =============================================================================
// Root Layout — SEO metadata, fonts, global styles
// =============================================================================
// EDITING GUIDE:
// • Metadata (title, description, OG tags) is set here using portfolio.json.
// • Fonts are imported via Google Fonts in globals.css (Playfair Display + Inter).
// • Body applies dark background via globals.css base layer.

import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/portfolio.json";

const { designer } = portfolioData;

// SEO metadata pulled from portfolio.json
export const metadata: Metadata = {
  title: `${designer.name} — ${designer.title}`,
  description: designer.tagline,
  openGraph: {
    title: `${designer.name} — ${designer.title}`,
    description: designer.tagline,
    type: "website",
    locale: "en_US",
    siteName: designer.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${designer.name} — ${designer.title}`,
    description: designer.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
