import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const industriesData: Record<string, { title: string, desc: string }> = {
  'ecommerce': {
    title: 'eCommerce & D2C Brands',
    desc: 'High-converting Shopify stores and headless commerce architectures that scale during peak traffic.',
  },
  'saas': {
    title: 'SaaS Startups',
    desc: 'Scalable Next.js dashboards, secure auth, and multi-tenant architectures built for hyper-growth.',
  },
  'local-businesses': {
    title: 'Local Businesses',
    desc: 'Lead-generating websites optimized for Local SEO to dominate your city\'s search results.',
  }
};

export function generateStaticParams() {
  return Object.keys(industriesData).map((industry) => ({
    industry,
  }));
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = industriesData[params.industry];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-black text-[0.7rem] uppercase tracking-widest mb-6 border border-primary/10">
             Industry Expertise
          </div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold font-display leading-[1.05] tracking-tight text-on-surface mb-6">
            Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{data.title}</span>
          </h1>
          <p className="text-on-surface-variant text-[1.4rem] font-medium leading-relaxed max-w-[800px]">
            {data.desc}
          </p>
        </div>

        <div className="bg-surface-muted border border-outline rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h3 className="text-2xl font-bold font-display text-on-surface mb-2">Stop losing leads to your competitors.</h3>
              <p className="text-on-surface-muted text-lg">Get a free teardown of your current digital strategy.</p>
           </div>
           <Link href="/audit" className="shrink-0 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-white text-black font-black shadow-lg hover:-translate-y-1 transition-transform">
              Get Free Industry Audit <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </main>
  );
}
