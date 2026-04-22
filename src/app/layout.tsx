import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheUnipick | Full-Stack Web & AI Development Studio — India",
  description: "TheUnipick is a full-spectrum development studio based in India. From React & Next.js frontends to AI solutions, mobile apps, and cloud DevOps — we build production-grade digital products for startups and growing businesses.",
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
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
