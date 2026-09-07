import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Manrope } from 'next/font/google';
import WhatsAppCTA from "@/components/widgets/WhatsAppCTA";
import TrustPulse from "@/components/widgets/TrustPulse";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theunipick.com'),
  title: {
    default: "TheUniPick | Freelance Full-Stack Developer & SEO Specialist  Tarun Singh",
    template: "%s | TheUniPick"
  },
  description: "Principal full-stack engineer Tarun Singh & studio at TheUniPick. Specializing in Next.js, Shopify, AI automations (n8n), and Technical SEO. 50+ live products shipped. Request a free audit.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TheUniPick | Freelance Full-Stack Developer & SEO Specialist",
    description: "Principal full-stack engineer Tarun Singh & studio at TheUniPick. Specializing in Next.js, Shopify, AI automations, and Technical SEO.",
    url: 'https://theunipick.com',
    siteName: 'TheUniPick',
    images: [
      {
        url: '/theunipicklogo.png',
        width: 1200,
        height: 630,
        alt: 'TheUniPick  Full-Stack Development & SEO Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TheUniPick | Freelance Full-Stack Developer & SEO Specialist",
    description: "Principal full-stack engineer Tarun Singh & studio at TheUniPick. Next.js, Shopify, AI automations, and SEO.",
    creator: '@perpetual_cosmos',
    images: ['/theunipicklogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLdGraph = [
  {
    "@type": "WebSite",
    "@id": "https://theunipick.com/#website",
    "url": "https://theunipick.com",
    "name": "TheUniPick",
    "description": "Full-stack web development, Shopify, AI automation, and SEO services by Tarun Singh.",
    "publisher": {
      "@id": "https://theunipick.com/#person"
    },
    "inLanguage": "en-US"
  },
  {
    "@type": "Person",
    "@id": "https://theunipick.com/#person",
    "name": "Tarun Singh",
    "jobTitle": "Principal Full-Stack Engineer & Technical SEO Specialist",
    "worksFor": {
      "@id": "https://theunipick.com/#organization"
    },
    "url": "https://theunipick.com",
    "email": "tarun@theunipick.com",
    "telephone": "+91-9451172458",
    "sameAs": [
      "https://x.com/perpetual_cosmos",
      "https://github.com/perpetual-cosmos"
    ],
    "knowsAbout": [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "Shopify Liquid",
      "AI Automations",
      "n8n",
      "Technical SEO",
      "Core Web Vitals"
    ]
  },
  {
    "@type": "LocalBusiness",
    "@id": "https://theunipick.com/#organization",
    "name": "TheUniPick Studio",
    "url": "https://theunipick.com",
    "logo": "https://theunipick.com/theunipicklogo.png",
    "image": "https://theunipick.com/tarunsinghmod.png",
    "description": "Full-stack development and SEO studio led by Tarun Singh. Building high-ranking, fast, and converting websites, Shopify stores, and AI automation workflows.",
    "founder": {
      "@id": "https://theunipick.com/#person"
    },
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
    "telephone": "+91-9451172458",
    "email": "tarun@theunipick.com",
    "priceRange": "₹₹",
    "knowsAbout": ["Next.js", "Shopify", "WordPress", "AI Automation", "SEO", "React", "Node.js", "n8n", "Web Development"]
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": jsonLdGraph
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`} style={{ margin: 0, padding: 0 }}>
        <Analytics />
        {children}
        <WhatsAppCTA />
        <TrustPulse />
      </body>
    </html>
  );
}
