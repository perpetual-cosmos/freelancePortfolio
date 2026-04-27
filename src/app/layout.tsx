import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Manrope } from 'next/font/google';
import WhatsAppCTA from "@/components/widgets/WhatsAppCTA";
import TrustPulse from "@/components/widgets/TrustPulse";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "TheUnipick | Full-Stack Development & SEO Team — We Build Websites That Rank, Convert & Scale",
  description: "Expert full-stack development team specializing in Next.js, Shopify, AI automations, and SEO. 5+ years experience, 30+ live products shipped. Get a free website audit today.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TheUnipick",
  "url": "https://theunipicks.vercel.app/",
  "logo": "https://theunipicks.vercel.app/logo.png",
  "image": "https://theunipicks.vercel.app/og-image.png",
  "description": "We build production-ready web products — from idea to ranked, converting website. Specializing in Next.js, Shopify, WordPress, and AI automation.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kanpur",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.4499",
    "longitude": "80.3319"
  },
  "url": "https://theunipicks.vercel.app/",
  "telephone": "+91-9451172458",
  "priceRange": "₹₹",
  "knowsAbout": ["Next.js", "Shopify", "WordPress", "AI Automation", "SEO", "React", "Node.js", "n8n", "Web Development"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`} style={{ margin: 0, padding: 0 }}>
        {children}
        <WhatsAppCTA />
        <TrustPulse />
      </body>
    </html>
  );
}
