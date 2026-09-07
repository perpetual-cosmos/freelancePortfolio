import { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import { getAllServices } from '@/data/services';

export const metadata: Metadata = {
  title: 'Full-Stack Development, Shopify & AI Services | TheUniPick',
  description: 'Explore full-stack Next.js web development, custom Shopify Liquid themes, n8n AI workflow automations, and Technical SEO services by Tarun Singh & studio.',
  alternates: {
    canonical: 'https://theunipick.com/services',
  },
  openGraph: {
    title: 'Full-Stack Development, Shopify & AI Services | TheUniPick',
    description: 'Next.js web development, Shopify stores, AI automations, and SEO services. Production-grade software built for scale.',
    url: 'https://theunipick.com/services',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'TheUniPick Services' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Development, Shopify & AI Services | TheUniPick',
    description: 'Next.js, Shopify, AI automations, and SEO services by Tarun Singh.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const services = getAllServices();

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': 'https://theunipick.com/services#itemlist',
      'url': 'https://theunipick.com/services',
      'name': 'Full-Stack & Growth Engineering Services',
      'itemListElement': services.map((s, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': s.title,
          'description': s.description,
          'url': `https://theunipick.com/services/${s.slug}`,
          'provider': {
            '@id': 'https://theunipick.com/#organization',
          },
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/services#breadcrumb',
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
          'name': 'Services',
          'item': 'https://theunipick.com/services',
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
