import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const servicesData: Record<string, { title: string, desc: string, features: string[], pricing: string, outcome: string, faq: { q: string, a: string }[] }> = {
  'web-development': {
    title: 'Full-Stack Web Development',
    desc: 'High-performance Next.js and MERN stack applications built for speed, scale, and conversion. From seed-stage MVPs to production systems with 1,000+ concurrent users.',
    features: ['Next.js 15 App Router & SSG/SSR', 'Server-Side Rendering for SEO', 'Custom API & Third-Party Integration', 'Scalable Database Design (Supabase, Postgres)', 'CI/CD Deployment Pipeline', '60-Day Post-Launch Support'],
    pricing: 'Starting from ₹25,000 for websites · ₹75,000 for full-stack apps',
    outcome: 'BlackArt Tattoo Studio went from 0 to #1 in Udaipur search results within 3 months of launch.',
    faq: [
      { q: 'How long does a project take?', a: 'A standard website takes 7–14 days. A full-stack web app with custom features takes 3–6 weeks depending on scope.' },
      { q: 'Do you use templates?', a: 'Never. Every project is built from scratch, custom-designed to your brand and business goals.' },
    ]
  },
  'shopify-development': {
    title: 'Custom Shopify Development',
    desc: 'Bespoke Shopify themes and headless storefronts for D2C brands. I specialize in conversion-rate optimization and page speed — 90+ Lighthouse score guaranteed.',
    features: ['Custom Liquid Theme Development', 'Headless Shopify with Hydrogen', 'Conversion Rate Optimization', 'Payment Gateway Integration (Razorpay, Stripe)', 'Product & Inventory Setup (up to 50 products)', 'Abandoned Cart & Email Flow Setup'],
    pricing: 'Starting from ₹35,000 for custom themes · ₹80,000 for headless builds',
    outcome: "Shopify stores I've built average a 40% increase in add-to-cart rates vs. their previous theme.",
    faq: [
      { q: 'Can you work with my existing Shopify store?', a: 'Yes. I can audit and redesign an existing store, or build from scratch on a new store.' },
      { q: 'Do you handle product uploads?', a: 'Yes, I set up up to 50 products with images, descriptions, and variants as part of the project.' },
    ]
  },
  'seo-services': {
    title: 'Technical & Content SEO',
    desc: 'Data-driven SEO strategies that drive organic revenue, not just vanity metrics. I focus on ranking for commercial-intent keywords that bring paying customers.',
    features: ['20-Point Technical SEO Audit', 'Keyword Clustering & Content Strategy', 'Core Web Vitals Optimization', 'On-Page SEO Implementation', 'Google Search Console Setup & Management', 'Monthly Ranking Reports'],
    pricing: 'One-time audit from ₹12,000 · Monthly retainer from ₹15,000/mo',
    outcome: 'BlackArt Tattoo Studio reached the #1 position for "tattoo studio Udaipur" within 90 days.',
    faq: [
      { q: 'How long does SEO take to show results?', a: 'Typically 60–90 days for initial movement on low-competition keywords. Competitive terms take 3–6 months of consistent effort.' },
      { q: 'Do you write the blog content?', a: 'Yes — content strategy and writing is included in the monthly retainer. I create SEO-optimized articles targeting your specific keyword clusters.' },
    ]
  },
  'ai-automation': {
    title: 'AI & Workflow Automation',
    desc: 'Eliminate repetitive tasks with custom n8n, Make.com, and AI integrations. If your team is doing the same digital task more than 3 times a week, it can be automated.',
    features: ['Business Process Audit & Mapping', 'Custom n8n / Make.com Workflow Build', 'WhatsApp Bot Development', 'CRM Syncing & Lead Routing', 'Email Automation Sequences', '2-Week Post-Launch Monitoring'],
    pricing: 'Single workflow from ₹15,000 · Full automation build from ₹20,000–60,000',
    outcome: 'Typical client saves 20+ hours/month on manual tasks within the first 2 weeks of deployment.',
    faq: [
      { q: "I'm not technical. Can you still help?", a: 'Absolutely. I handle all the technical setup. You just describe the repetitive task, and I build the system that handles it automatically.' },
      { q: 'What tools do you use?', a: 'n8n is my primary tool due to its flexibility and low cost. I also work with Make.com, custom Node.js scripts, and direct API integrations.' },
    ]
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
          <p className="text-on-surface-variant text-[1.4rem] font-medium leading-relaxed max-w-[800px] mb-6">
            {serviceData.desc}
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-sm">
            {serviceData.pricing}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold font-display text-on-surface mb-6">What's Included</h2>
            <ul className="space-y-4">
              {serviceData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-on-surface-variant">
                  <span className="text-primary mt-1"><Check size={20} /></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Real Client Outcome</div>
              <p className="text-on-surface font-bold text-lg leading-relaxed italic">"{serviceData.outcome}"</p>
            </div>

            <div className="bg-surface-muted border border-outline rounded-3xl p-8 flex flex-col justify-center gap-6">
              <h3 className="text-xl font-bold text-on-surface">Ready to start?</h3>
              <p className="text-on-surface-muted">
                Let's discuss how {serviceData.title} can accelerate your business.
              </p>
              <Link href="/audit" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-black hover:-translate-y-1 transition-transform">
                Get Free Audit First <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold font-display text-on-surface mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {serviceData.faq.map((item, i) => (
              <div key={i} className="bg-surface-muted border border-outline rounded-2xl p-8">
                <h3 className="font-bold text-on-surface text-lg mb-3">{item.q}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
