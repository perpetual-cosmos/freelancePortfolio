import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { getAllBlogs } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Full-Stack Web Development, SEO & AI Automation Articles | Blog',
  description: 'In-depth guides on Next.js performance, Shopify e-commerce costs, n8n AI workflow automations, and Technical SEO by Tarun Singh & TheUniPick.',
  alternates: {
    canonical: 'https://theunipick.com/blog',
  },
  openGraph: {
    title: 'Full-Stack Web Development, SEO & AI Automation Articles | Blog',
    description: 'Practical guides on web development, Shopify pricing, AI automations, and Core Web Vitals optimization.',
    url: 'https://theunipick.com/blog',
    siteName: 'TheUniPick',
    images: [{ url: 'https://theunipick.com/theunipicklogo.png', width: 1200, height: 630, alt: 'TheUniPick Blog' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Web Development, SEO & AI Automation Articles',
    description: 'Technical and business guides by Tarun Singh.',
    creator: '@perpetual_cosmos',
    images: ['https://theunipick.com/theunipicklogo.png'],
  },
};

const blogs = getAllBlogs();

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': 'https://theunipick.com/blog#blog',
      'url': 'https://theunipick.com/blog',
      'name': 'TheUniPick Engineering & Strategy Blog',
      'description': 'Technical SEO, Next.js optimization, Shopify e-commerce, and AI automation guides.',
      'blogPost': blogs.map((b) => ({
        '@type': 'BlogPosting',
        'headline': b.title,
        'url': `https://theunipick.com/blog/${b.slug}`,
        'datePublished': b.date,
        'author': {
          '@type': 'Person',
          'name': 'Tarun Singh',
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://theunipick.com/blog#breadcrumb',
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
          'name': 'Blog',
          'item': 'https://theunipick.com/blog',
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
