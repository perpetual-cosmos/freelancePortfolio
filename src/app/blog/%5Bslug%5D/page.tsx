import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs } from '@/data/blogs';
import BlogReaderClient from './BlogReaderClient';

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    return { title: 'Article Not Found | TheUniPick' };
  }

  const metaTitle = `${post.title} | TheUniPick Blog`;
  const metaDescription = post.description || post.hook;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...post.tags, ...post.relatedKeywords, 'TheUniPick', 'Tarun Singh'],
    alternates: {
      canonical: `https://theunipick.com/blog/${post.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://theunipick.com/blog/${post.slug}`,
      siteName: 'TheUniPick',
      images: [
        {
          url: 'https://theunipick.com/theunipicklogo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      creator: '@perpetual_cosmos',
      images: ['https://theunipick.com/theunipicklogo.png'],
    },
  };
}

export default async function BlogReaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://theunipick.com/blog/${post.slug}#article`,
        'headline': post.title,
        'description': post.description || post.hook,
        'datePublished': post.date,
        'author': {
          '@type': 'Person',
          'name': 'Tarun Singh',
          'url': 'https://theunipick.com/about',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'TheUniPick Studio',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://theunipick.com/theunipicklogo.png',
          },
        },
        'mainEntityOfPage': `https://theunipick.com/blog/${post.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://theunipick.com/blog/${post.slug}#breadcrumb`,
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
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.title,
            'item': `https://theunipick.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogReaderClient post={post} />
    </>
  );
}
