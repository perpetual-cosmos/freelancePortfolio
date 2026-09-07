import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Tarun Singh | Freelance Web Developer & SEO Specialist',
  description: 'Book a project scoping call or request a free website audit with Tarun Singh & TheUniPick Studio. Direct engineering access for web development, Shopify, and SEO.',
  alternates: {
    canonical: 'https://theunipick.com/contact',
  },
  openGraph: {
    title: 'Contact Tarun Singh | Freelance Web Developer & SEO Specialist',
    description: 'Book a technical scoping call or request a free website audit with Tarun Singh.',
    url: 'https://theunipick.com/contact',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'Contact TheUniPick' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tarun Singh | Freelance Web Developer & SEO Specialist',
    description: 'Get in touch with Tarun Singh for web development and SEO projects.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://theunipick.com/contact#webpage',
      'url': 'https://theunipick.com/contact',
      'name': 'Contact Tarun Singh & TheUniPick Studio',
      'description': 'Technical consultation, project scoping, and free website audit requests.',
      'mainEntity': {
        '@id': 'https://theunipick.com/#organization',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/contact#breadcrumb',
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
          'name': 'Contact',
          'item': 'https://theunipick.com/contact',
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
