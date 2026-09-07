import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import ServicePageClient from './ServicePageClient';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);

  if (!service) {
    return { title: 'Service Not Found | TheUniPick' };
  }

  const metaTitle = `${service.title} Services | Tarun Singh  TheUniPick`;
  const metaDescription = `${service.description} ${service.tagline}. Professional full-stack & growth engineering by Tarun Singh.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [service.title, service.category, ...service.stack, 'freelancer India', 'TheUniPick'],
    alternates: {
      canonical: `https://theunipick.com/services/${service.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://theunipick.com/services/${service.slug}`,
      siteName: 'TheUniPick',
      images: [
        {
          url: 'https://theunipick.com/theunipicklogo.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'website',
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

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.service);

  if (!service) {
    notFound();
  }

  const jsonLdGraph: Record<string, any>[] = [
    {
      '@type': 'Service',
      '@id': `https://theunipick.com/services/${service.slug}#service`,
      'name': service.title,
      'description': service.description,
      'provider': {
        '@id': 'https://theunipick.com/#organization',
      },
      'areaServed': 'Global',
      'offers': {
        '@type': 'Offer',
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': service.startingPrice,
          'priceCurrency': 'INR',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://theunipick.com/services/${service.slug}#breadcrumb`,
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
        {
          '@type': 'ListItem',
          'position': 3,
          'name': service.title,
          'item': `https://theunipick.com/services/${service.slug}`,
        },
      ],
    },
  ];

  if (service.faq && service.faq.length > 0) {
    jsonLdGraph.push({
      '@type': 'FAQPage',
      '@id': `https://theunipick.com/services/${service.slug}#faq`,
      'mainEntity': service.faq.map((item) => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': jsonLdGraph,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient service={service} />
    </>
  );
}
