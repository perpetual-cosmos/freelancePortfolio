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
  "@type": "ItemList",
  "name": "TheUnipick Development Services",
  "itemListElement": [
    { "@type": "Service", "position": 1, "name": "CMS Development", "description": "Custom WordPress, Strapi, and headless CMS solutions" },
    { "@type": "Service", "position": 2, "name": "React & Frontend Development", "description": "Modern React, Next.js, and TypeScript applications" },
    { "@type": "Service", "position": 3, "name": "Node.js Backend Development", "description": "Scalable REST & GraphQL APIs and microservices" },
    { "@type": "Service", "position": 4, "name": "Spring Boot / Java Development", "description": "Enterprise-grade backend systems on the Java ecosystem" },
    { "@type": "Service", "position": 5, "name": "AI & ML Solutions", "description": "Custom AI models, chatbots, NLP, and intelligent automation" },
    { "@type": "Service", "position": 6, "name": "Mobile Development", "description": "Cross-platform iOS and Android apps with React Native and Flutter" },
    { "@type": "Service", "position": 7, "name": "Data Engineering", "description": "ETL pipelines, analytics dashboards, and data warehousing" },
    { "@type": "Service", "position": 8, "name": "E-Commerce Solutions", "description": "Custom storefronts, Shopify, and scalable commerce platforms" },
    { "@type": "Service", "position": 9, "name": "Cloud & DevOps", "description": "AWS/GCP infrastructure, CI/CD, containerization, and monitoring" }
  ]
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
