import { Metadata } from 'next';
import PricingClient from './PricingClient';
import { pricingFaqs } from '@/data/pricingFaqs';

export const metadata: Metadata = {
  title: 'Freelance Web Development & SEO Pricing | Tarun Singh  TheUniPick',
  description: 'Website, e-commerce, web app, SEO and automation packages with the scope listed. Business website from ₹18,000 in India; international prices in USD.',
  alternates: {
    canonical: 'https://theunipick.com/pricing',
  },
  openGraph: {
    title: 'Freelance Web Development & SEO Pricing | TheUniPick',
    description: 'Website, store, software, SEO and automation packages with clear scope. Prices in INR and USD.',
    url: 'https://theunipick.com/pricing',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'TheUniPick Pricing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Web Development & SEO Pricing | TheUniPick',
    description: 'Clear package prices for websites, software and SEO, in INR and USD.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const faqs = pricingFaqs;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://theunipick.com/pricing#faq',
      'mainEntity': faqs.map((f) => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.a,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/pricing#breadcrumb',
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
          'name': 'Pricing',
          'item': 'https://theunipick.com/pricing',
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  );
}
