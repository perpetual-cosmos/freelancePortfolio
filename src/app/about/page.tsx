import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Tarun Singh | Freelance Full-Stack Engineer & SEO Specialist',
  description: 'Learn about Tarun Singh, Principal Full-Stack Engineer and founder of TheUniPick. Specializing in Next.js, Shopify, AI automations, and technical SEO for startups.',
  alternates: {
    canonical: 'https://theunipick.com/about',
  },
  openGraph: {
    title: 'About Tarun Singh | Freelance Full-Stack Engineer & SEO Specialist',
    description: 'Principal Full-Stack Engineer Tarun Singh and studio at TheUniPick. Building fast, scalable, and converting web platforms.',
    url: 'https://theunipick.com/about',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/TarunSingh.png', width: 1200, height: 630, alt: 'Tarun Singh  Full-Stack Engineer' }],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tarun Singh | Freelance Full-Stack Engineer & SEO Specialist',
    description: 'Principal Full-Stack Engineer Tarun Singh & studio at TheUniPick.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/TarunSingh.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://theunipick.com/about#webpage',
      'url': 'https://theunipick.com/about',
      'name': 'About Tarun Singh & TheUniPick Studio',
      'description': 'Background, mission, and full-stack engineering approach of Tarun Singh.',
      'mainEntity': {
        '@id': 'https://theunipick.com/#person',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/about#breadcrumb',
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
          'name': 'About',
          'item': 'https://theunipick.com/about',
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
