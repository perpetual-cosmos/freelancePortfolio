import { Metadata } from 'next';
import HireClient from './HireClient';

export const metadata: Metadata = {
  title: 'Hire Freelance Full-Stack Developer & SEO Specialist India | Tarun Singh',
  description: 'Hire Tarun Singh for Next.js web application development, custom Shopify Liquid e-commerce, n8n AI workflow automations, and Technical SEO. 50+ live products shipped.',
  keywords: [
    'hire freelance full stack developer India',
    'hire Next.js developer',
    'Shopify developer freelancer India',
    'AI automation consultant',
    'n8n developer India',
    'technical SEO expert India',
    'Tarun Singh developer',
    'TheUniPick',
  ],
  alternates: {
    canonical: 'https://theunipick.com/hire',
  },
  openGraph: {
    title: 'Hire Freelance Full-Stack Developer & SEO Specialist India | Tarun Singh',
    description: 'Direct 1-on-1 engineering leadership for Next.js, Shopify, AI automations, and Technical SEO. Book a scoping call.',
    url: 'https://theunipick.com/hire',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/tarunsinghmod.png', width: 1200, height: 630, alt: 'Hire Tarun Singh' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Freelance Full-Stack Developer & SEO Specialist India',
    description: 'Hire Tarun Singh for Next.js, Shopify, AI automations, and SEO.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/tarunsinghmod.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://theunipick.com/hire#service',
      'name': 'Freelance Full-Stack Web Development & Technical SEO Services',
      'description': 'End-to-end full-stack web development, Shopify custom theme builds, AI workflow automations, and SEO optimizations by Tarun Singh.',
      'provider': {
        '@id': 'https://theunipick.com/#person',
      },
      'areaServed': 'Global',
      'serviceType': 'Software Development & SEO',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/hire#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://theunipick.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Hire',
          'item': 'https://theunipick.com/hire',
        },
      ],
    },
  ],
};

export default function HirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HireClient />
    </>
  );
}
