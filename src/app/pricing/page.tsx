import { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Freelance Web Development & SEO Pricing | Tarun Singh  TheUniPick',
  description: 'Transparent pricing for Next.js web applications, custom Shopify themes, n8n AI automations, and monthly technical SEO retainers. Fixed fee, zero hidden costs.',
  alternates: {
    canonical: 'https://theunipick.com/pricing',
  },
  openGraph: {
    title: 'Freelance Web Development & SEO Pricing | TheUniPick',
    description: 'Transparent pricing packages for web development, Shopify, AI automation, and technical SEO by Tarun Singh.',
    url: 'https://theunipick.com/pricing',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'TheUniPick Pricing' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Web Development & SEO Pricing | TheUniPick',
    description: 'Transparent fixed-fee pricing for web development and SEO.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const faqs = [
  {
    q: 'How do you determine project timelines?',
    a: 'We use a milestone-based approach. Once we scope the project, we provide a detailed timeline with weekly sprints. A standard MVP typically takes 3–6 weeks.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. Every package includes a standard support period (30–60 days). We also offer monthly maintenance and retainer models for ongoing feature development and scaling.',
  },
  {
    q: 'Can I upgrade my package mid-project?',
    a: 'Absolutely. We build in an agile manner, allowing for scope adjustments. We will simply adjust the milestones and pricing transparently.',
  },
  {
    q: 'What payment structures do you accept?',
    a: 'Typically, we work on a 40/40/20 model: 40% initial, 40% at mid-point milestone, and 20% upon final delivery and sign-off.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We have delivered products used globally across 70+ countries. Communication is in English, and we align to your timezone for standups.',
  },
];

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
