import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const servicesData: Record<string, { title: string, desc: string, features: string[] }> = {
  'web-development': {
    title: 'Full-Stack Web Development',
    desc: 'High-performance Next.js and MERN stack applications built for speed, scale, and conversion.',
    features: ['Next.js 15 App Router', 'Server-Side Rendering for SEO', 'Custom API Integration', 'Scalable Database Design']
  },
  'shopify-development': {
    title: 'Custom Shopify Development',
    desc: 'Bespoke Shopify themes and headless storefronts for D2C brands that actually convert.',
    features: ['Custom Liquid Themes', 'Headless Shopify with Hydrogen', 'Conversion Rate Optimization', 'App Integrations']
  },
  'seo-services': {
    title: 'Technical & Content SEO',
    desc: 'Data-driven SEO strategies that drive organic revenue, not just vanity metrics.',
    features: ['Comprehensive Technical Audits', 'Keyword Clustering', 'Core Web Vitals Optimization', 'Content Architecture']
  },
  'ai-automation': {
    title: 'AI & Workflow Automation',
    desc: 'Eliminate repetitive tasks with custom n8n, Make.com, and custom AI integrations.',
    features: ['Custom n8n Workflows', 'WhatsApp Bot Development', 'CRM Syncing', 'LLM Prompt Engineering']
  }
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service,
  }));
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = servicesData[params.service];

  if (!serviceData) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="mb-16">
          <Link href="/services" className="text-primary font-bold text-sm hover:underline mb-8 inline-block">
            &larr; Back to all services
          </Link>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold font-display leading-[1.05] tracking-tight text-on-surface mb-6">
            {serviceData.title}
          </h1>
          <p className="text-on-surface-variant text-[1.4rem] font-medium leading-relaxed max-w-[800px]">
            {serviceData.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold font-display text-on-surface mb-6">What You Get</h2>
            <ul className="space-y-4">
              {serviceData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-on-surface-variant">
                  <span className="text-primary mt-1"><Check size={20} /></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-muted border border-outline rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-on-surface mb-4">Ready to start?</h3>
            <p className="text-on-surface-muted mb-8">
              Let's discuss how our {serviceData.title} services can accelerate your business growth.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-black hover:-translate-y-1 transition-transform">
              Book a Strategy Call <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
