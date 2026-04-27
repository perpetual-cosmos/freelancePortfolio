export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  color: string;
  description: string;
  features: ServiceFeature[];
  pricing: string;
  outcome: string;
  stack: string[];
  specs: Record<string, string>;
  faq: ServiceFAQ[];
  category: string;
  startingPrice: string;
}

const servicesData: ServiceData[] = [
  {
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    tagline: 'High-performance apps built to scale',
    color: '#6300e2',
    category: 'Web Development',
    description: 'From landing pages to complex SaaS platforms — we build fast, accessible, and SEO-ready web applications using Next.js, React, and the MERN stack.',
    features: [
      { title: 'Next.js & React Apps', desc: 'Server components, edge rendering, and blazing-fast performance.' },
      { title: 'Full-Stack MERN', desc: 'MongoDB, Express, React, Node.js — end-to-end TypeScript.' },
      { title: 'API Development', desc: 'REST and GraphQL APIs with authentication and rate limiting.' },
      { title: 'Design Systems', desc: 'Documented, accessible, and themeable UI component libraries.' },
      { title: 'Database Design', desc: 'Scalable schemas with PostgreSQL, MongoDB, or Supabase.' },
      { title: 'Performance Optimization', desc: 'Sub-100ms TTFB, perfect Core Web Vitals scores.' }
    ],
    pricing: 'Starting from ₹25,000 for websites · ₹75,000 for full-stack apps',
    startingPrice: '₹25,000',
    outcome: 'BlackArt Tattoo Studio went from 0 to #1 in Udaipur search results within 3 months of launch.',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'],
    specs: { Latency: '< 150ms', Uptime: '99.99%', Security: 'Enterprise', Delivery: 'Edge CDN' },
    faq: [
      { q: 'How long does a project take?', a: 'A standard website takes 7–14 days. A full-stack web app with custom features takes 3–6 weeks depending on scope.' },
      { q: 'Do you use templates?', a: 'Never. Every project is built from scratch, custom-designed to your brand and business goals.' },
      { q: 'What about post-launch support?', a: 'Every project includes 30-60 days of post-launch support. Monthly maintenance plans are also available.' }
    ]
  },
  {
    slug: 'shopify-development',
    title: 'Shopify & E-Commerce',
    tagline: 'Custom stores that actually convert',
    color: '#10b981',
    category: 'E-Commerce',
    description: 'Bespoke Shopify themes, WooCommerce stores, and headless commerce solutions for D2C brands. Conversion-rate optimization and 90+ Lighthouse score guaranteed.',
    features: [
      { title: 'Custom Liquid Themes', desc: 'Unique Shopify storefronts tailored to your brand identity.' },
      { title: 'WooCommerce Builds', desc: 'WordPress-powered stores with advanced product management.' },
      { title: 'Payment Integration', desc: 'Razorpay, Stripe, UPI — seamless checkout flows.' },
      { title: 'Conversion Optimization', desc: 'A/B testing, cart recovery, and data-driven improvements.' },
      { title: 'Product Setup', desc: 'Up to 50 products with images, descriptions, and variants.' },
      { title: 'Email & Cart Flows', desc: 'Abandoned cart recovery and automated email sequences.' }
    ],
    pricing: 'Starting from ₹35,000 for custom themes · ₹80,000 for headless builds',
    startingPrice: '₹35,000',
    outcome: "Shopify stores we've built average a 40% increase in add-to-cart rates vs. their previous theme.",
    stack: ['Shopify', 'Liquid', 'WooCommerce', 'WordPress', 'Razorpay', 'Stripe'],
    specs: { Latency: '< 200ms', Uptime: '99.95%', Security: 'PCI Ready', Delivery: 'Global CDN' },
    faq: [
      { q: 'How long does a project take?', a: 'A standard website takes 7–14 days. A full-stack web app with custom features takes 3–6 weeks depending on scope.' },
      { q: 'Do you use templates?', a: 'Never. Every project is built from scratch, custom-designed to your brand and business goals.' },
      { q: 'What about post-launch support?', a: 'Every project includes 30-60 days of post-launch support. Monthly maintenance plans are also available.' },
      { q: 'Can you work with my existing Shopify store?', a: 'Yes. We can audit and redesign an existing store, or build from scratch on a new one.' },
      { q: 'Do you handle product uploads?', a: 'Yes, we set up up to 50 products with images, descriptions, and variants as part of the project.' },
      { q: 'What about Shopify apps?', a: 'We integrate essential apps for reviews, email marketing, and analytics. Custom app development is also available.' }
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI & Workflow Automation',
    tagline: 'Eliminate manual tasks, scale operations',
    color: '#8b5cf6',
    category: 'AI & Automation',
    description: 'From WhatsApp chatbots to full workflow automation — we deploy n8n, Make.com, Zapier, and custom AI pipelines that save hours every week.',
    features: [
      { title: 'Workflow Automation', desc: 'n8n, Make.com, and Zapier pipelines for repetitive tasks.' },
      { title: 'WhatsApp & Email Bots', desc: 'Automated customer communication and lead routing.' },
      { title: 'CRM Integration', desc: 'Connect HubSpot, Notion, Google Sheets, Airtable, and more.' },
      { title: 'AI Chatbots', desc: 'GPT-powered assistants trained on your business data.' },
      { title: 'Process Audit', desc: 'Map your workflows to identify the best automation opportunities.' },
      { title: 'Post-Launch Monitoring', desc: '2-week monitoring period to ensure everything runs smoothly.' }
    ],
    pricing: 'Single workflow from ₹15,000 · Full automation build from ₹20,000–60,000',
    startingPrice: '₹15,000',
    outcome: 'Typical client saves 20+ hours/month on manual tasks within the first 2 weeks of deployment.',
    stack: ['n8n', 'Zapier', 'Make.com', 'OpenAI', 'Python', 'Node.js'],
    specs: { Response: '< 2s', Uptime: '99.9%', API: 'Private', Deploy: 'Hybrid' },
    faq: [
      { q: "I'm not technical. Can you still help?", a: 'Absolutely. We handle all the technical setup. You just describe the repetitive task, and we build the system that handles it.' },
      { q: 'What tools do you use?', a: 'n8n is our primary tool due to its flexibility. We also work with Make.com, Zapier, custom Node.js scripts, and direct API integrations.' },
      { q: 'Can you automate WhatsApp?', a: 'Yes — we build WhatsApp bots using the official Business API for lead capture, support, and notifications.' }
    ]
  },
  {
    slug: 'seo-services',
    title: 'SEO & Performance',
    tagline: 'Page 1 rankings, measurable growth',
    color: '#f43f5e',
    category: 'SEO & Growth',
    description: 'Data-driven SEO strategies that drive organic revenue. Technical audits, keyword strategy, content optimization, and ongoing monthly retainers.',
    features: [
      { title: 'Technical SEO Audit', desc: 'Deep crawl analysis, schema markup, and site speed fixes.' },
      { title: 'Keyword Strategy', desc: 'Research-driven targeting for high-intent search terms.' },
      { title: 'Content Optimization', desc: '4-8 optimized blog posts per month with internal linking.' },
      { title: 'Core Web Vitals', desc: 'Performance optimization for LCP, CLS, and INP metrics.' },
      { title: 'GSC Management', desc: 'Search Console setup, monitoring, and monthly reporting.' },
      { title: 'Competitor Analysis', desc: 'Benchmark against competitors and identify ranking opportunities.' }
    ],
    pricing: 'One-time audit from ₹12,000 · Monthly retainer from ₹15,000/mo',
    startingPrice: '₹12,000',
    outcome: 'BlackArt Tattoo Studio reached the #1 position for "tattoo studio Udaipur" within 90 days.',
    stack: ['Ahrefs', 'GSC', 'Screaming Frog', 'Analytics', 'Schema', 'Lighthouse'],
    specs: { Results: '3-6 months', Coverage: 'Global', Reports: 'Monthly', Tools: 'Premium' },
    faq: [
      { q: 'How long does SEO take to show results?', a: 'Typically 60–90 days for initial movement. Competitive terms take 3–6 months of consistent effort.' },
      { q: 'Do you write the blog content?', a: 'Yes — content strategy and writing is included in the monthly retainer. We create SEO-optimized articles targeting your keyword clusters.' },
      { q: 'Do you guarantee rankings?', a: "No ethical SEO provider can guarantee specific rankings. But we guarantee professional execution and transparent monthly reporting." }
    ]
  },
  {
    slug: 'cms-platforms',
    title: 'CMS & Platforms',
    tagline: 'WordPress, LMS, and custom dashboards',
    color: '#0ea5e9',
    category: 'CMS & Platforms',
    description: 'From WordPress blogs to learning management systems — we build content platforms that are easy to manage, SEO-ready, and built to scale.',
    features: [
      { title: 'WordPress Development', desc: 'Custom themes, plugins, and headless WordPress builds.' },
      { title: 'LMS / EdTech', desc: 'Course platforms with progress tracking and certificates.' },
      { title: 'Website Migration', desc: 'Zero-downtime migration from any platform to modern stack.' },
      { title: 'Custom Dashboards', desc: 'Admin panels and analytics dashboards for your business.' },
      { title: 'Multi-Language Sites', desc: 'i18n support for global audiences with RTL support.' },
      { title: 'Blog & Content Systems', desc: 'SEO-optimized blog setups with CMS integration.' }
    ],
    pricing: 'Starting from ₹25,000 for WordPress · ₹50,000 for LMS platforms',
    startingPrice: '₹25,000',
    outcome: 'ClearKaro EdTech platform launched with full course management, payments, and 500+ student capacity.',
    stack: ['WordPress', 'Headless CMS', 'Strapi', 'Sanity', 'Next.js', 'Supabase'],
    specs: { Speed: '< 1s', CMS: 'Headless', Security: 'Hardened', Scale: 'Unlimited' },
    faq: [
      { q: 'Can you migrate my existing website?', a: 'Yes — we handle full migrations from any platform (Wix, Squarespace, old WordPress) with zero downtime and SEO preservation.' },
      { q: 'Do you build custom WordPress plugins?', a: 'Yes. We can build custom plugins for specific functionality not available in existing solutions.' },
      { q: 'What about hosting?', a: 'We recommend and set up optimized hosting (Vercel, Cloudflare, or managed WP hosting) as part of every project.' }
    ]
  },
  {
    slug: 'design-branding',
    title: 'Design & Branding',
    tagline: 'UI/UX design that drives engagement',
    color: '#f59e0b',
    category: 'Design & Branding',
    description: 'From Figma prototypes to complete brand identity systems — we design interfaces that look premium and convert visitors into customers.',
    features: [
      { title: 'UI/UX Design', desc: 'User-centered design with wireframes, prototypes, and testing.' },
      { title: 'Brand Identity', desc: 'Logo design, color systems, typography, and brand guidelines.' },
      { title: 'Figma Prototyping', desc: 'Interactive prototypes for testing before development.' },
      { title: 'Landing Pages', desc: 'High-converting page designs optimized for conversions.' },
      { title: 'Design Systems', desc: 'Scalable component libraries for consistent brand experience.' },
      { title: 'Social Media Assets', desc: 'Templates for Instagram, LinkedIn, and marketing materials.' }
    ],
    pricing: 'Logo & branding from ₹10,000 · Full UI/UX design from ₹20,000',
    startingPrice: '₹10,000',
    outcome: 'Complete brand identity redesign for Dear Valentine SaaS — increased user engagement by 35%.',
    stack: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'Canva'],
    specs: { Tool: 'Figma', Revisions: '3 rounds', Delivery: '2-3 weeks', Format: 'All formats' },
    faq: [
      { q: 'Do you only design, or also develop?', a: 'Both! We can design in Figma and then build it pixel-perfect in code. Most clients prefer the full design-to-development package.' },
      { q: 'How many revision rounds?', a: '3 rounds of revisions are included in every design project. Additional rounds can be added if needed.' },
      { q: 'What files do I get?', a: 'You receive full Figma source files, exported assets in all formats (SVG, PNG, PDF), and brand guidelines documentation.' }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return servicesData;
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(s => s.slug);
}

export default servicesData;
