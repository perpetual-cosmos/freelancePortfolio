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
  title: "Tarun Singh | Full-Stack Developer & SEO Specialist — I Build Websites That Rank, Convert & Scale",
  description: "Full-stack web developer specializing in Next.js, Shopify, WordPress, and AI automations. 10+ live products shipped. 70+ countries reached. Get a free website audit today.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Tarun Singh",
  "url": "https://theunipick.com",
  "sameAs": [
    "https://github.com/perpetual-cosmos",
    "https://www.linkedin.com/in/perpetual-cosmos/",
    "https://x.com/perpetual_cosmos"
  ],
  "jobTitle": "Full-Stack Developer & SEO Specialist",
  "description": "I build production-ready web products for Indian founders — from idea to ranked, converting website, in 4–8 weeks. Specializing in Next.js, Shopify, WordPress, and AI automation.",
  "knowsAbout": ["Next.js", "Shopify", "WordPress", "AI Automation", "SEO", "React", "Node.js", "n8n", "Web Development"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kanpur",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "offers": {
    "@type": "Offer",
    "description": "Free 20-point website audit covering SEO, speed, and conversion rate optimization. Delivered in 48 hours.",
    "price": "0",
    "priceCurrency": "INR"
  }
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
