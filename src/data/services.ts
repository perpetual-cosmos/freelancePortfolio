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
  relatedCaseStudySlug?: string;
  relatedCaseStudyTitle?: string;
}

const servicesData: ServiceData[] = [
  {
    slug: 'web-development',
    title: 'Full-Stack Web Development',
    tagline: 'High-performance Next.js apps built to scale',
    color: '#6300e2',
    category: 'Web Development',
    description: 'Custom full-stack web applications engineered for speed, conversion, and top Google rankings. Led by Tarun Singh, we leverage Next.js 16, TypeScript, React 19, and Node.js to build enterprise-grade platforms with sub-100ms TTFB and 100 Core Web Vitals.',
    features: [
      { title: 'Next.js 16 & React 19', desc: 'Server components, edge rendering, dynamic caching, and instant SSR.' },
      { title: 'Full-Stack TypeScript & Node.js', desc: 'End-to-end type safety with Express, Nest.js, or serverless functions.' },
      { title: 'API & Microservice Design', desc: 'REST and GraphQL APIs with OAuth2, rate limiting, and webhook systems.' },
      { title: 'Tailwind CSS Design Systems', desc: 'Custom, accessible, and responsive component libraries with dark mode.' },
      { title: 'Scalable Database Architecture', desc: 'PostgreSQL, MongoDB, Supabase, and Prisma/Mongoose ORM integration.' },
      { title: 'Core Web Vitals Optimization', desc: 'Sub-100ms TTFB, 100 Lighthouse score, and zero layout shift.' }
    ],
    pricing: 'Starting from ₹25,000 for high-converting websites · ₹75,000 for full-stack SaaS apps',
    startingPrice: '₹25,000',
    outcome: 'BlackArt Tattoo Studio went from 0 to #1 in Udaipur organic search results within 90 days of launch.',
    relatedCaseStudySlug: 'blackart-tattoo',
    relatedCaseStudyTitle: 'BlackArt Tattoo Studio Case Study',
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Supabase'],
    specs: { Latency: '< 150ms', Uptime: '99.99%', Security: 'Enterprise', Delivery: 'Edge CDN' },
    faq: [
      { q: 'How long does a full-stack project take?', a: 'A standard marketing website takes 7–14 days. A complex full-stack SaaS application takes 3–6 weeks depending on custom feature requirements.' },
      { q: 'Do you use templates or page builders?', a: 'Never. Every codebase is built from scratch with clean TypeScript & Next.js, custom-designed to match your brand and business goals.' },
      { q: 'What post-launch support is included?', a: 'Every project includes 30-60 days of complimentary post-launch support and bug fixes. Ongoing monthly maintenance retainers are also available.' }
    ]
  },
  {
    slug: 'shopify-development',
    title: 'Shopify & E-Commerce',
    tagline: 'Custom Shopify themes & headless stores built to convert',
    color: '#10b981',
    category: 'E-Commerce',
    description: 'High-converting Shopify storefronts, bespoke Liquid themes, and headless e-commerce builds for D2C brands. We optimize cart speed, checkout UX, Razorpay/Stripe payment gateway integration, and e-commerce SEO.',
    features: [
      { title: 'Custom Liquid Storefronts', desc: 'Bespoke Shopify themes built without bulky apps or bloated code.' },
      { title: 'WooCommerce & WordPress Builds', desc: 'Flexible WordPress e-commerce setups with custom product management.' },
      { title: 'Seamless Payment Gateways', desc: 'Razorpay, Stripe, UPI, Apple Pay, and Cash on Delivery integration.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'A/B tested product pages, 1-click upsells, and cart recovery.' },
      { title: 'Catalog & Inventory Setup', desc: 'Import and configuration of up to 50 products with variants and media.' },
      { title: 'Klaviyo & Automated Email Flows', desc: 'Abandoned cart sequences, post-purchase follow-ups, and review flows.' }
    ],
    pricing: 'Starting from ₹35,000 for custom Shopify themes · ₹80,000 for headless builds',
    startingPrice: '₹35,000',
    outcome: 'Biryani Babu e-commerce store achieved a 240% lift in online orders within 30 days.',
    relatedCaseStudySlug: 'biryani-babu',
    relatedCaseStudyTitle: 'Biryani Babu E-Commerce Growth Case Study',
    stack: ['Shopify', 'Liquid', 'WooCommerce', 'WordPress', 'Razorpay', 'Stripe', 'Klaviyo'],
    specs: { Latency: '< 200ms', Uptime: '99.95%', Security: 'PCI Ready', Delivery: 'Global CDN' },
    faq: [
      { q: 'Can you migrate my existing store to Shopify?', a: 'Yes. We migrate products, customer accounts, and order history from WordPress, WooCommerce, Wix, or custom platforms with zero downtime and preserved SEO canonicals.' },
      { q: 'How do custom themes compare to free Shopify themes?', a: 'Custom themes load 2–3x faster, eliminate monthly app fees, and are tailored specifically for your brand conversion funnel.' },
      { q: 'Do you handle payment gateway approvals?', a: 'Yes, we assist in integrating Razorpay, Stripe, and UPI gateways for seamless checkout.' }
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI & Workflow Automation',
    tagline: 'Eliminate manual work with n8n, OpenAI & WhatsApp bots',
    color: '#8b5cf6',
    category: 'AI & Automation',
    description: 'Save 20+ hours every month through custom n8n workflows, Make.com pipelines, Zapier automations, and official WhatsApp Business API chatbots. We connect your CRM, email, forms, and database into automated operational engines.',
    features: [
      { title: 'n8n & Make Workflow Pipelines', desc: 'Self-hosted or cloud automation flows connecting 100+ business apps.' },
      { title: 'WhatsApp Business API Bots', desc: 'Automated lead qualification, order notifications, and instant support.' },
      { title: 'CRM & Database Synchronization', desc: 'Bi-directional sync between Notion, HubSpot, Airtable, and Google Sheets.' },
      { title: 'Custom OpenAI & LLM Assistants', desc: 'GPT-powered bots trained on your internal documentation and SOPs.' },
      { title: 'Lead Routing & Instant Alerts', desc: 'Instant Slack, Telegram, and SMS alerts when a high-value lead submits.' },
      { title: 'Post-Deployment Monitoring', desc: 'Real-time error logging and 2-week monitoring for 100% operational uptime.' }
    ],
    pricing: 'Single workflow build from ₹15,000 · Full automation suite from ₹35,000–75,000',
    startingPrice: '₹15,000',
    outcome: 'Wavo Digital reduced client onboarding time by 80% using automated n8n workflows.',
    relatedCaseStudySlug: 'wavo-digital',
    relatedCaseStudyTitle: 'Wavo Digital Operations Automation Case Study',
    stack: ['n8n', 'Zapier', 'Make.com', 'OpenAI', 'Python', 'Node.js', 'WhatsApp API'],
    specs: { Response: '< 2s', Uptime: '99.9%', API: 'Private', Deploy: 'Hybrid' },
    faq: [
      { q: 'I am not technical. Can you still set up automation for me?', a: 'Yes. We handle 100% of the technical setup. You simply describe your repetitive business task, and we build the system that handles it automatically.' },
      { q: 'Why choose n8n over Zapier?', a: 'n8n provides enterprise security, zero per-task costs when self-hosted, and complete control over complex data transformations.' },
      { q: 'Can you automate WhatsApp messages for orders?', a: 'Yes, we use official Meta WhatsApp Business API integrations for transaction updates, booking confirmations, and support.' }
    ]
  },
  {
    slug: 'seo-services',
    title: 'SEO & Performance Engineering',
    tagline: 'Page 1 Google rankings & technical performance',
    color: '#f43f5e',
    category: 'SEO & Growth',
    description: 'Data-backed technical SEO, keyword strategy, schema markup, and Core Web Vitals optimization. Led by Senior Technical SEO Engineer Tarun Singh, we fix indexability issues, build internal linking graphs, and drive organic traffic.',
    features: [
      { title: 'Technical SEO Audit & Fixes', desc: 'Fix duplicate metadata, indexation blocks, broken canonicals, and sitemaps.' },
      { title: 'JSON-LD Schema Markup', desc: 'Person, LocalBusiness, Service, FAQPage, and Article schemas for rich snippets.' },
      { title: 'Commercial Keyword Targeting', desc: 'Research and content maps for high-intent search queries that drive revenue.' },
      { title: 'Core Web Vitals Optimization', desc: 'Fix LCP, CLS, and INP metrics for maximum Google ranking power.' },
      { title: 'Search Console & Analytics Management', desc: 'GSC setup, rank tracking, indexation fixes, and monthly ROI reports.' },
      { title: 'Internal Linking Architecture', desc: 'Optimize link equity flow to money pages and case studies.' }
    ],
    pricing: 'One-time technical SEO audit & fix from ₹15,000 · Monthly retainer from ₹20,000/mo',
    startingPrice: '₹15,000',
    outcome: 'Achieved 3x organic growth and #1 Google ranking for client brands within 90 days.',
    relatedCaseStudySlug: 'blackart-tattoo',
    relatedCaseStudyTitle: 'BlackArt Tattoo Organic Growth Case Study',
    stack: ['Ahrefs', 'GSC', 'Screaming Frog', 'Google Analytics', 'Schema.org', 'Lighthouse'],
    specs: { Results: '60-90 days', Coverage: 'Global', Reports: 'Monthly', Tools: 'Enterprise' },
    faq: [
      { q: 'How long before we see Google ranking results?', a: 'Technical SEO fixes and schema improvements usually reflect in Google Search Console within 3–6 weeks. Competitive keyword rankings compound over 60–90 days.' },
      { q: 'What is included in the technical SEO audit?', a: 'We crawl your entire website, audit metadata, canonicals, mobile readiness, site speed, schema markup, and internal links, then implement direct code fixes.' },
      { q: 'Do you guarantee #1 rankings?', a: 'No ethical SEO specialist guarantees specific #1 rankings, as Google algorithms evolve continuously. We guarantee technical correctness, high-intent targeting, and measurable organic growth.' }
    ]
  },
  {
    slug: 'cms-platforms',
    title: 'CMS & Custom Platforms',
    tagline: 'WordPress, LMS & headless CMS architectures',
    color: '#0ea5e9',
    category: 'CMS & Platforms',
    description: 'Custom WordPress blogs, headless CMS setups (Sanity, Strapi), learning management systems (LMS), and admin dashboards built for easy management and infinite scalability.',
    features: [
      { title: 'WordPress Custom Development', desc: 'Lightweight WordPress builds with zero bloat and security hardening.' },
      { title: 'Headless CMS Architecture', desc: 'Next.js connected to Sanity or Strapi for ultra-fast content delivery.' },
      { title: 'EdTech & LMS Platforms', desc: 'Course management, progress tracking, student portals, and Razorpay payments.' },
      { title: 'Zero-Downtime Migration', desc: 'Seamless migration from Wix, Squarespace, or old CMS to modern stacks.' },
      { title: 'Custom Business Dashboards', desc: 'Tailored admin panels and operational analytics for team workflows.' },
      { title: 'Multilingual & i18n Support', desc: 'Multi-language content systems with proper hreflang tags.' }
    ],
    pricing: 'Starting from ₹25,000 for WordPress · ₹60,000 for LMS & Custom Platforms',
    startingPrice: '₹25,000',
    outcome: 'Alumnipp platform launched with full student portal, payments, and 1,000+ active users.',
    relatedCaseStudySlug: 'alumnipp',
    relatedCaseStudyTitle: 'Alumnipp Platform Case Study',
    stack: ['WordPress', 'Headless CMS', 'Strapi', 'Sanity', 'Next.js', 'Supabase', 'PostgreSQL'],
    specs: { Speed: '< 1s', CMS: 'Headless/WP', Security: 'Hardened', Scale: 'Unlimited' },
    faq: [
      { q: 'Can you migrate my existing website without losing SEO rankings?', a: 'Yes. We map every legacy URL, configure 301 redirects, maintain URL structures, and update sitemaps to preserve 100% of your SEO authority.' },
      { q: 'Is WordPress fast enough for good SEO?', a: 'When built custom without heavy page builder plugins, WordPress delivers sub-second load times and excellent SEO performance.' }
    ]
  },
  {
    slug: 'design-branding',
    title: 'UI/UX Design & Branding',
    tagline: 'Figma prototypes & brand systems that convert',
    color: '#f59e0b',
    category: 'Design & Branding',
    description: 'High-converting UI/UX design, interactive Figma prototypes, and complete brand identity systems. We turn vague product ideas into visual assets that impress visitors and drive sales.',
    features: [
      { title: 'UI/UX & Interactive Wireframing', desc: 'User-centered interface design for web apps, SaaS, and mobile.' },
      { title: 'Clickable Figma Prototyping', desc: 'Interactive prototypes to test user flows before writing code.' },
      { title: 'Brand Identity Systems', desc: 'Logos, color palettes, typography specs, and visual guidelines.' },
      { title: 'Landing Page Conversion Design', desc: 'Hero layouts and section flows engineered for maximum conversion.' },
      { title: 'Design Systems for Developers', desc: 'Component specs ready for pixel-perfect React & Tailwind implementation.' },
      { title: 'Marketing & Pitch Decks', desc: 'Visual assets for social proof, pitch presentations, and ads.' }
    ],
    pricing: 'Logo & branding from ₹12,000 · Full UI/UX design from ₹25,000',
    startingPrice: '₹12,000',
    outcome: 'Dear Valentine SaaS brand redesign increased user engagement by 35%.',
    relatedCaseStudySlug: 'dear-valentine',
    relatedCaseStudyTitle: 'Dear Valentine SaaS Product Case Study',
    stack: ['Figma', 'Illustrator', 'Photoshop', 'Tailwind', 'Framing'],
    specs: { Tool: 'Figma', Revisions: '3 rounds', Delivery: '2-3 weeks', Format: 'Vector & Code' },
    faq: [
      { q: 'Do you provide design AND code?', a: 'Yes. We handle both Figma design and pixel-perfect Next.js implementation under one roof.' },
      { q: 'How many design revisions are included?', a: '3 rounds of design feedback and revisions are included in every design project package.' }
    ]
  },
  {
    slug: 'crm-development',
    title: 'Custom CRM Development',
    tagline: 'Tailor-made CRM systems engineered for your sales pipeline & client workflows',
    color: '#ec4899',
    category: 'Enterprise Systems',
    description: 'Custom CRM software designed to replace rigid off-the-shelf platforms with high-speed, tailored workflows. Built using Next.js 16, Node.js, and PostgreSQL by Tarun Singh, our CRM solutions provide automated lead scoring, pipeline management, WhatsApp integration, and granular analytics.',
    features: [
      { title: 'Custom Lead & Pipeline Tracking', desc: 'Visual kanban pipelines, stage gating, and multi-channel lead capture from web forms, WhatsApp, and meta ads.' },
      { title: 'Automated Follow-ups & Task Scheduling', desc: 'Trigger automated email and WhatsApp reminders for sales reps to ensure zero lead drop-offs.' },
      { title: 'Role-Based Access Control (RBAC)', desc: 'Granular permissions for admins, sales managers, and executives to keep client data secure.' },
      { title: 'Bi-directional Third-Party Integrations', desc: 'Seamless API connections with Razorpay, Stripe, Gmail, WhatsApp Business API, and Tally.' },
      { title: 'Custom Analytics & Conversion Dashboards', desc: 'Real-time sales tracking, agent performance metrics, and revenue forecasting views.' },
      { title: 'Secure Data Ownership & Self-Hosting', desc: 'Complete ownership of your customer data with options for self-hosting on AWS or VPS.' }
    ],
    pricing: 'Starting from ₹45,000 for core custom CRM setups · ₹1,200,000 for enterprise multi-tier platforms',
    startingPrice: '₹45,000',
    outcome: 'Streamlined lead management and improved sales conversion rates by 35% for B2B client teams.',
    relatedCaseStudySlug: 'wavo-digital',
    relatedCaseStudyTitle: 'Wavo Digital Operations Case Study',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind', 'n8n'],
    specs: { Security: 'RBAC Enforced', Database: 'PostgreSQL', API: 'REST & GraphQL', Audit: 'Full Logging' },
    faq: [
      { q: 'Why build a custom CRM instead of buying Salesforce or HubSpot?', a: 'Off-the-shelf CRMs charge expensive per-seat monthly fees and force you to adapt your business processes to their rigid structure. A custom CRM built by TheUniPick gives you 100% data ownership, zero recurring monthly per-user fees, and a UI tailored exactly to your sales workflow.' },
      { q: 'How long does custom CRM development take?', a: 'A core operational CRM MVP takes 3–5 weeks. Advanced enterprise CRMs with deep third-party integrations typically take 6–8 weeks.' },
      { q: 'Can the custom CRM integrate with WhatsApp Business API?', a: 'Yes. We natively integrate Meta WhatsApp Business API so your sales reps can send automated messages, view chat histories, and update deal stages directly inside the CRM.' },
      { q: 'Is our customer data secure on a custom CRM?', a: 'Absoluely. We implement strict Role-Based Access Control (RBAC), end-to-end SSL encryption, environment secret isolation, and database backup routines.' },
      { q: 'What happens as our sales team grows?', a: 'Because we build on scalable Next.js and PostgreSQL architecture, your CRM can scale from 5 users to thousands of team members without performance degradation or added software licensing fees.' }
    ]
  },
  {
    slug: 'payroll-system',
    title: 'Payroll & HR Management Systems',
    tagline: 'Automated, tax-compliant payroll software tailored for Indian & global businesses',
    color: '#06b6d4',
    category: 'Enterprise Systems',
    description: 'Custom payroll and HR management software built for precision, automated salary calculation, tax compliance, and seamless attendance tracking. Engineered with Next.js, Node.js, and secure encrypted databases.',
    features: [
      { title: 'Automated Salary & Tax Computation', desc: 'Precision engines for PF, ESI, Professional Tax, TDS, bonuses, and reimbursement management.' },
      { title: 'Attendance & Leave Tracking Portal', desc: 'Employee self-service portals for leave requests, attendance marking, and payslip downloads.' },
      { title: 'One-Click Direct Bank Transfer Exports', desc: 'Generate bank-formatted payout files for seamless monthly salary processing.' },
      { title: 'Encrypted Payslip Generation & Distribution', desc: 'Automated PDF payslip generation emailed directly to employees with password protection.' },
      { title: 'Tally & Accounting Software Sync', desc: 'Export payroll data into Tally, Zoho Books, or QuickBooks compatible XML/CSV formats.' },
      { title: 'Audit Trail & Financial Security', desc: 'Tamper-proof financial logs and AES-256 encryption for sensitive employee compensation data.' }
    ],
    pricing: 'Starting from ₹50,000 for custom payroll engines · ₹1,500,000 for full HRMS integration',
    startingPrice: '₹50,000',
    outcome: 'Eliminated manual Excel errors and reduced monthly payroll calculation time from 3 days to 15 minutes.',
    relatedCaseStudySlug: 'alumnipp',
    relatedCaseStudyTitle: 'Alumnipp Platform Case Study',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Redis', 'Docker'],
    specs: { Compliance: 'India Tax & PF Ready', Security: 'AES-256 Encrypted', Precision: 'Decimal Financial Math', Export: 'Tally / Excel' },
    faq: [
      { q: 'How does custom payroll software handle statutory compliance in India?', a: 'Our custom payroll engines auto-calculate Provident Fund (PF), Employee State Insurance (ESI), Professional Tax (PT), and Tax Deducted at Source (TDS) based on current government slabs, ensuring 100% tax compliance.' },
      { q: 'Can employees view and download their own payslips?', a: 'Yes. We include a dedicated employee self-service portal where staff can view salary structures, request leaves, and download monthly password-protected PDF payslips.' },
      { q: 'Can the payroll system export data to Tally or Zoho Books?', a: 'Yes. We provide automated exports formatted specifically for Tally Prime, Zoho Books, or QuickBooks to streamline your accounting workflows.' },
      { q: 'Is employee salary data encrypted and secure?', a: 'Yes. Salary structures, bank account details, and PAN/Aadhaar information are stored using AES-256 encryption with restricted role-based database access.' },
      { q: 'Can custom payroll handle contractor payments and freelancers?', a: 'Yes. Our systems support dual payment workflows for full-time salaried staff (TDS u/s 192) and independent contractors/freelancers (TDS u/s 194J/194C).' }
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
