import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const topicsData: Record<string, { title: string, category: string, content: string }> = {
  'what-is-nextjs': {
    title: 'What is Next.js?',
    category: 'Web Development',
    content: 'Next.js is a React framework that gives you building blocks to create web applications. Unlike traditional React which loads in the browser, Next.js can pre-render pages on the server (SSR) or at build time (SSG), making your website incredibly fast and SEO-friendly.'
  },
  'what-is-headless-cms': {
    title: 'What is a Headless CMS?',
    category: 'Architecture',
    content: 'A headless CMS separates where your content is stored (the "body") from where it is presented (the "head"). This allows you to manage content in one place but deliver it anywhere—a website, mobile app, or smartwatch—via APIs, resulting in faster load times and higher security.'
  },
  'what-is-n8n': {
    title: 'What is n8n Workflow Automation?',
    category: 'AI Automation',
    content: 'n8n is an open-source workflow automation tool. It connects different apps and APIs together to automate tasks. Unlike Zapier, n8n can be self-hosted and handles complex, multi-step logic without exponential cost scaling, making it ideal for custom AI automation pipelines.'
  },
  'what-is-core-web-vitals': {
    title: 'What are Core Web Vitals?',
    category: 'SEO',
    content: 'Core Web Vitals are a set of specific factors that Google considers important in a webpage\'s overall user experience. They consist of three specific measurements: largest contentful paint (LCP), first input delay (FID), and cumulative layout shift (CLS). Passing these is crucial for SEO.'
  }
};

export function generateStaticParams() {
  return Object.keys(topicsData).map((topic) => ({
    topic,
  }));
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const data = topicsData[params.topic];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="mb-12">
          <Link href="/learn" className="text-primary font-bold text-sm hover:underline mb-8 inline-block">
            &larr; Back to Glossary
          </Link>
          <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">{data.category}</div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold font-display leading-[1.05] tracking-tight text-on-surface mb-8">
            {data.title}
          </h1>
          <div className="prose prose-lg prose-invert max-w-none text-on-surface-variant font-medium leading-relaxed">
            <p>{data.content}</p>
          </div>
        </div>

        <div className="mt-20 bg-surface-muted border border-outline rounded-3xl p-10 flex flex-col items-center text-center gap-6">
           <h3 className="text-2xl font-bold font-display text-on-surface">Need help implementing this?</h3>
           <p className="text-on-surface-muted text-lg max-w-[500px]">
             We build high-performance solutions using these modern architectures. Get a free teardown of your current setup.
           </p>
           <Link href="/audit" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-black hover:-translate-y-1 transition-transform">
              Get Free Website Audit <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </main>
  );
}
