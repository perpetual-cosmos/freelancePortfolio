import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'TheUniPick | Freelance Full-Stack Developer & Technical SEO Specialist  Tarun Singh',
  description: 'Hire Tarun Singh & TheUniPick Studio for Next.js, Shopify e-commerce, AI automations (n8n), and Technical SEO. 50+ live products shipped. Get a free website audit today.',
  alternates: {
    canonical: 'https://theunipick.com',
  },
  openGraph: {
    title: 'TheUniPick | Freelance Full-Stack Developer & Technical SEO Specialist',
    description: 'Hire Tarun Singh & TheUniPick Studio for Next.js, Shopify, AI automations, and Technical SEO. High-converting, performant web applications.',
    url: 'https://theunipick.com',
    siteName: 'TheUniPick',
    images: [
      {
        url: 'https://theunipick.com/theunipicklogo.png',
        width: 1200,
        height: 630,
        alt: 'TheUniPick  Full-Stack Web Development & SEO Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheUniPick | Freelance Full-Stack Developer & Technical SEO Specialist',
    description: 'Hire Tarun Singh & TheUniPick Studio for Next.js, Shopify, AI automations, and Technical SEO.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}
