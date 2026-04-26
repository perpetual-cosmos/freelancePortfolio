import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const topicsData: Record<string, { title: string, category: string, intro: string, sections: { heading: string, body: string }[], cta: string }> = {
  'what-is-nextjs': {
    title: 'What is Next.js?',
    category: 'Web Development',
    intro: 'Next.js is a React framework that gives you building blocks to create production-ready web applications. Unlike vanilla React which loads entirely in the browser, Next.js pre-renders pages on the server (SSR) or at build time (SSG), making your website load faster and rank higher on Google.',
    sections: [
      { heading: 'Why does it matter for your business?', body: 'Page speed is a Google ranking factor. A Next.js site consistently scores 90–100 on Google Lighthouse, meaning Google trusts it and ranks it higher. Faster pages also mean lower bounce rates and higher conversion \u2014 a 1-second delay in load time reduces conversions by 7%.' },
      { heading: 'Next.js vs a WordPress or Wix site', body: 'WordPress and Wix generate pages dynamically on every request, which is slow. Next.js generates HTML in advance and serves it from a CDN. The result: your homepage loads in under 1 second instead of 3\u20135 seconds. That difference is the gap between ranking on page 1 and page 3.' },
      { heading: 'Who should use Next.js?', body: 'Next.js is ideal for startups, SaaS products, and any business that wants a website that both ranks on Google and converts visitors. If you\'re a local business, WordPress is often sufficient. If you\'re building a product, Next.js is the right foundation.' },
    ],
    cta: 'Want a Next.js website built for your business?'
  },
  'what-is-headless-cms': {
    title: 'What is a Headless CMS?',
    category: 'Architecture',
    intro: 'A headless CMS separates where your content is stored from where it is displayed. Traditional CMS platforms like WordPress bundle both together. A headless CMS gives you a content editor in one place, and delivers that content via API to any platform \u2014 your website, mobile app, or any other digital touchpoint.',
    sections: [
      { heading: 'The key benefit: speed and flexibility', body: 'Because a headless CMS serves content via API to a fast front-end (like Next.js), pages load significantly faster than a traditional WordPress site. You get the best of both worlds: an easy content editor for non-technical teams, and a high-performance front-end that ranks well on Google.' },
      { heading: 'Popular headless CMS options', body: 'Sanity, Contentful, and Strapi are the most popular options. Sanity is ideal for marketing teams due to its flexible schemas. Contentful suits larger enterprises. Strapi is open-source and self-hostable, great for startups wanting full control at low cost.' },
      { heading: 'When do you actually need a headless CMS?', body: 'If your team regularly publishes blog posts, updates product information, or manages landing pages \u2014 a headless CMS saves hours every week. If your content rarely changes, a simpler solution may be more appropriate.' },
    ],
    cta: 'Want me to build your headless CMS architecture?'
  },
  'what-is-n8n': {
    title: 'What is n8n Workflow Automation?',
    category: 'AI Automation',
    intro: 'n8n is an open-source workflow automation tool that connects different apps and services together to automate repetitive tasks. Think of it as a programmable "if this, then that" system for your business \u2014 but far more powerful than off-the-shelf tools like Zapier.',
    sections: [
      { heading: 'What can you automate with n8n?', body: 'The most common use cases: sending WhatsApp messages to leads automatically, syncing data between your CRM and accounting software, triggering emails when specific events happen, routing customer support tickets, and generating reports without manual work. If your team does the same digital task more than 3 times a week, it can likely be automated.' },
      { heading: 'n8n vs Zapier: which should you use?', body: 'Zapier is easier to start with but expensive at scale \u2014 pricing jumps quickly once you hit task limits. n8n can be self-hosted for near-zero running costs, handles complex multi-step logic, and connects to any API with HTTP request nodes. For businesses wanting custom automation pipelines, n8n is the clear choice.' },
      { heading: 'What is the ROI of automation?', body: 'A typical SMB spends 20\u201340 hours per month on tasks that can be automated \u2014 data entry, follow-up emails, report generation, inventory updates. At ₹500/hour of staff time, that\'s ₹10,000\u201320,000/month wasted on manual work. A one-time automation build pays for itself within 2\u20133 months.' },
    ],
    cta: 'Want me to build a custom automation for your business?'
  },
  'what-is-core-web-vitals': {
    title: 'What are Core Web Vitals?',
    category: 'SEO',
    intro: 'Core Web Vitals are a set of three user experience metrics that Google uses as ranking signals. Since 2021, websites that score well on these metrics get a ranking boost. Websites that score poorly are actively penalized in search results.',
    sections: [
      { heading: 'The three metrics explained simply', body: 'LCP (Largest Contentful Paint) measures how quickly your main content loads \u2014 should be under 2.5 seconds. CLS (Cumulative Layout Shift) measures how much your page jumps around as it loads \u2014 should be near 0. FID/INP (Interaction to Next Paint) measures how quickly your page responds to clicks \u2014 should be under 200ms.' },
      { heading: 'Why this matters for your rankings', body: 'Google\'s ranking algorithm directly uses these scores. A site with a 95 Lighthouse score will consistently rank above an identical site with a 60 score, all else being equal. Many WordPress sites, especially those using page builders like Elementor, routinely score 40\u201360 \u2014 which is a significant ranking handicap.' },
      { heading: 'How to fix poor Core Web Vitals scores', body: 'The most common fixes: compress and lazy-load images, eliminate render-blocking JavaScript, use a CDN to serve assets, switch to a faster hosting provider, and minimize third-party scripts (chat widgets, analytics, ads). On WordPress, switching from Elementor to a lean theme can alone move you from a 50 to a 90 score.' },
    ],
    cta: 'Get a free Core Web Vitals audit for your website'
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
          <p className="text-on-surface-variant text-xl font-medium leading-relaxed mb-12 border-l-4 border-primary/20 pl-6">
            {data.intro}
          </p>

          <div className="space-y-10">
            {data.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold font-display text-on-surface mb-4">{section.heading}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-surface-muted border border-outline rounded-3xl p-10 flex flex-col items-center text-center gap-6">
           <h3 className="text-2xl font-bold font-display text-on-surface">{data.cta}</h3>
           <p className="text-on-surface-muted text-lg max-w-[500px]">
             I build high-performance solutions using these modern architectures. Get a free teardown of your current setup — delivered in 48 hours.
           </p>
           <Link href="/audit" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-black hover:-translate-y-1 transition-transform">
              Get Free Website Audit <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </main>
  );
}
