import { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Full-Stack Web & E-Commerce Portfolio | Case Studies | TheUniPick',
  description: 'Explore live web development, Shopify e-commerce, AI automation, and SEO case studies shipped by Tarun Singh & studio. Real metrics and proof of work.',
  alternates: {
    canonical: 'https://theunipick.com/portfolio',
  },
  openGraph: {
    title: 'Full-Stack Web & E-Commerce Portfolio | TheUniPick',
    description: 'Explore live web development, Shopify, AI automation, and SEO case studies shipped by Tarun Singh.',
    url: 'https://theunipick.com/portfolio',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'TheUniPick Portfolio' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Web & E-Commerce Portfolio | TheUniPick',
    description: 'Live production case studies by Tarun Singh & studio.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://theunipick.com/portfolio#webpage',
      'url': 'https://theunipick.com/portfolio',
      'name': 'TheUniPick Portfolio & Case Studies',
      'description': 'Collection of full-stack, e-commerce, AI automation, and SEO case studies.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/portfolio#breadcrumb',
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
          'name': 'Portfolio',
          'item': 'https://theunipick.com/portfolio',
        },
      ],
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}
