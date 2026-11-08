// Single source for every price shown on the site.
// Mirrors Rate Card v2 (8 Nov 2026) in the office folder: 05-sales/rate-card-template.md.
// INR = Indian clients. USD = international clients, built from $25/hr (not converted from INR).
// A package without `usd` is shown to Indian visitors only (e.g. Google Business Profile, WhatsApp API).

export type Currency = 'INR' | 'USD';

export interface Package {
  code: string;
  name: string;
  forWho: string;
  inr: string;
  usd?: string;
  priceNote?: { INR?: string; USD?: string };
  includes: string[];
  bugFixDays?: number;
  popular?: boolean;
}

export interface PriceCategory {
  id: string;
  label: string;
  intro: string;
  packages: Package[];
  addOns?: { INR: string; USD?: string };
}

export const priceCategories: PriceCategory[] = [
  {
    id: 'websites',
    label: 'Websites',
    intro: 'Fast, mobile-first business websites built to bring enquiries.',
    packages: [
      {
        code: 'WEB-LP',
        name: 'Landing Page',
        forWho: 'One offer, one campaign, or a first online presence',
        inr: '₹10,000',
        usd: '$350',
        includes: [
          '1 page, up to 6 sections',
          'Enquiry form, WhatsApp and call buttons, Google Map',
          'Basic SEO set-up',
          'Domain and hosting set-up (in your name)',
          '1 round of revisions',
        ],
        bugFixDays: 30,
      },
      {
        code: 'WEB-5',
        name: 'Business Website',
        forWho: 'Shops, consultants and service businesses',
        inr: '₹18,000',
        usd: '$700',
        includes: [
          '5 pages: Home, About, Services, Gallery, Contact',
          'Enquiry form, WhatsApp and call buttons, Google Map',
          'Google Search Console, sitemap and business schema',
          '2 rounds of revisions',
        ],
        bugFixDays: 30,
        popular: true,
      },
      {
        code: 'WEB-10',
        name: 'Business Plus',
        forWho: 'Businesses with several services or locations',
        inr: '₹30,000',
        usd: '$1,100',
        includes: [
          'Everything in Business Website, plus:',
          '6–10 pages, including service and location pages',
          'Google reviews section',
          'Speed tuning',
          '2 rounds of revisions',
        ],
        bugFixDays: 60,
      },
      {
        code: 'WEB-PRM',
        name: 'Premium Local Website',
        forWho: 'Clinics, builders, hotels and institutes',
        inr: '₹25,000 – ₹40,000',
        includes: [
          '6–10 pages with a semi-custom design',
          'Enquiry and booking forms',
          'Local SEO pages for your area and services',
        ],
        bugFixDays: 60,
      },
      {
        code: 'WEB-CUS',
        name: 'Custom-Designed Website',
        forWho: 'Startups and brands that need a unique look',
        inr: '₹40,000 – ₹50,000',
        usd: '$1,500',
        includes: [
          'Figma design first, approved by you before build',
          '5 custom-designed pages',
        ],
        bugFixDays: 60,
      },
    ],
    addOns: {
      INR: 'Extra page ₹1,500 · Content writing ₹1,000 per page · Extra revision round ₹1,500',
      USD: 'Extra revision round $50 · Other extras quoted at $25/hr',
    },
  },
  {
    id: 'wordpress',
    label: 'WordPress / CMS',
    intro: 'Websites you can edit yourself, with a blog and easy updates.',
    packages: [
      {
        code: 'WP-START',
        name: 'Starter CMS Site',
        forWho: 'Businesses that want to edit their own pages',
        inr: '₹25,000',
        usd: '$750',
        includes: [
          '5–8 pages on a licensed theme / Elementor',
          'Blog set-up',
          'SEO plugin, Google Analytics 4 and Search Console',
          '1-hour training to edit your site',
          '2 rounds of revisions',
        ],
        bugFixDays: 30,
      },
      {
        code: 'WP-GROW',
        name: 'Growth CMS Site',
        forWho: 'Growing businesses with more content',
        inr: '₹45,000',
        usd: '$1,250',
        includes: [
          '10–15 pages, semi-custom design',
          'Booking plugin',
          'Everything in Starter CMS Site',
          'Schema and speed optimisation',
          '3 rounds of revisions',
        ],
        bugFixDays: 60,
        popular: true,
      },
      {
        code: 'WP-LMS',
        name: 'LMS / Booking / Membership',
        forWho: 'Coaching institutes, courses and member sites',
        inr: '₹75,000',
        usd: '$1,800',
        includes: [
          'Tutor LMS or LearnDash',
          'Online payments (Razorpay in India)',
          'Student / member accounts',
          'Up to 5 courses set up',
        ],
        bugFixDays: 60,
      },
      {
        code: 'WP-THEME',
        name: 'Custom WordPress Theme',
        forWho: 'Brands that need a fully custom CMS',
        inr: 'from ₹1,00,000',
        usd: 'from $2,500',
        includes: [
          'Figma design + hand-coded theme',
          'Custom editable blocks (ACF)',
          '8–12 page templates',
        ],
        bugFixDays: 60,
      },
    ],
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    intro: 'Shopify or WooCommerce stores that take orders and payments from day one.',
    packages: [
      {
        code: 'ECO-START',
        name: 'Starter Store',
        forWho: 'First online store on Shopify or WooCommerce',
        inr: '₹30,000',
        usd: '$950',
        includes: [
          'Ready theme set up with your branding',
          'Up to 25 products uploaded',
          'Online payments (Razorpay) + Cash on Delivery',
          'Flat-rate shipping',
          '2 test orders before launch',
        ],
        bugFixDays: 30,
      },
      {
        code: 'ECO-D2C',
        name: 'D2C Growth Store',
        forWho: 'Brands selling across India',
        inr: '₹60,000',
        usd: '$1,500',
        includes: [
          'Premium theme',
          'Up to 100 products',
          'COD rules and Shiprocket shipping',
          'GST invoice app',
          'Meta Pixel tracking',
        ],
        bugFixDays: 60,
        popular: true,
      },
      {
        code: 'ECO-CUS',
        name: 'Custom-Designed Store',
        forWho: 'Brands that need a unique store',
        inr: 'from ₹1,25,000',
        usd: 'from $2,800',
        includes: [
          'Figma design first',
          'Custom theme sections',
          'Up to 200 products',
          '2 payment gateways',
        ],
        bugFixDays: 60,
      },
      {
        code: 'ECO-MIG',
        name: 'Store Migration to Shopify',
        forWho: 'Moving from WooCommerce or another platform',
        inr: 'from ₹75,000',
        usd: 'from $1,800',
        priceNote: { INR: 'Final price after a store audit', USD: 'Final price after a store audit' },
        includes: [
          'Products, customers and order history moved',
          'Old URLs redirected so you keep Google rankings',
        ],
        bugFixDays: 30,
      },
    ],
    addOns: {
      INR: 'Product upload ₹60 simple / ₹120 with variants (min ₹2,000) · Payments + Shiprocket on an existing store ₹8,000 · Extra integration ₹10,000',
      USD: 'Extras quoted at $25/hr',
    },
  },
  {
    id: 'apps',
    label: 'Web Apps & SaaS',
    intro: 'Custom software: portals, CRMs, internal tools and SaaS products.',
    packages: [
      {
        code: 'APP-PORTAL',
        name: 'Business Portal / Internal Tool',
        forWho: 'CRM, payroll, booking or admin systems',
        inr: '₹1,25,000 – ₹1,80,000',
        usd: '$2,500 – $4,000',
        includes: [
          '2 user roles (e.g. admin and staff)',
          '4–6 modules',
          'Admin dashboard',
          '1–2 integrations (payments, SMS, email, etc.)',
        ],
        bugFixDays: 30,
      },
      {
        code: 'APP-MVP',
        name: 'Startup MVP',
        forWho: 'Founders launching a first version',
        inr: '₹2,75,000 – ₹4,50,000',
        usd: '$6,000 – $10,000',
        includes: [
          '2–3 user roles',
          '8–15 screens',
          'Subscription or one-time billing',
          'Up to 3 integrations',
        ],
        bugFixDays: 60,
        popular: true,
      },
      {
        code: 'APP-SAAS',
        name: 'SaaS Product v1',
        forWho: 'Multi-customer software products',
        inr: '₹6,00,000 – ₹9,00,000',
        usd: '$12,000 – $20,000',
        includes: [
          'Multi-tenant (many customer accounts)',
          'Subscriptions and billing',
          '20+ screens',
        ],
        bugFixDays: 60,
      },
      {
        code: 'APP-RET',
        name: 'Ongoing Development',
        forWho: 'Teams that need a developer every month',
        inr: '₹65,000 / month',
        usd: '$1,000 / month',
        priceNote: { INR: '40 hrs/month · 80 hrs/month: ₹1,20,000', USD: '40 hrs/month' },
        includes: [
          'Dedicated development hours each month',
          'New features, fixes and improvements',
          'Minimum 3 months',
          'Unused hours do not carry over',
        ],
      },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & Google',
    intro: 'Get found on Google Search and Google Maps.',
    packages: [
      {
        code: 'SEO-GBP',
        name: 'Google Business Profile',
        forWho: 'Local businesses on Google Maps',
        inr: '₹5,000',
        priceNote: { INR: 'One-time' },
        includes: [
          'Profile set-up and optimisation',
        ],
      },
      {
        code: 'SEO-AUD',
        name: 'Technical SEO Audit',
        forWho: 'Find out what is holding your site back',
        inr: '₹7,500',
        usd: '$250',
        includes: ['Written report, up to 25 pages checked', 'Clear list of fixes in priority order'],
      },
      {
        code: 'SEO-ONP',
        name: 'On-Page SEO Set-up',
        forWho: 'Fix the basics on an existing site',
        inr: '₹15,000',
        usd: '$450',
        includes: ['Up to 15 pages optimised', 'Titles, descriptions, headings, schema', 'Technical fixes from the audit'],
      },
      {
        code: 'SEO-LOC',
        name: 'Local SEO (monthly)',
        forWho: 'Rank in your city on Google and Maps',
        inr: '₹12,000 / month',
        priceNote: { INR: 'Minimum 3 months' },
        includes: ['Ongoing local SEO for Google Search and Maps', 'Google Business Profile care', 'No blog writing (see Growth SEO)'],
        popular: true,
      },
      {
        code: 'SEO-GRW',
        name: 'Growth SEO (monthly)',
        forWho: 'Steady organic growth with content',
        inr: '₹22,000 / month',
        usd: '$400 / month',
        priceNote: { INR: 'Minimum 3 months', USD: 'Minimum 3 months' },
        includes: ['2 SEO blog posts + 1 new SEO page every month', 'Ongoing on-page SEO'],
      },
    ],
    addOns: {
      INR: 'Extra SEO blog (~1,000 words) ₹3,000 per post',
      USD: 'Extra SEO blog (~1,000 words) $90 per post',
    },
  },
  {
    id: 'automation',
    label: 'Automation & AI',
    intro: 'Stop doing the same task by hand: leads, follow-ups and replies on autopilot.',
    packages: [
      {
        code: 'AUT-LEAD',
        name: 'Lead Routing',
        forWho: 'Send every enquiry to the right person instantly',
        inr: '₹15,000',
        usd: '$350',
        includes: ['1–3 automated workflows', 'e.g. website form → sheet, CRM, email or WhatsApp'],
        bugFixDays: 30,
      },
      {
        code: 'AUT-WA',
        name: 'WhatsApp API Set-up',
        forWho: 'Official WhatsApp Business API (no bot)',
        inr: '₹10,000',
        includes: ['WhatsApp Business API set-up', 'No chatbot (see WhatsApp Bot + CRM)'],
        bugFixDays: 30,
      },
      {
        code: 'AUT-WABOT',
        name: 'WhatsApp Bot + CRM',
        forWho: 'Answer and track WhatsApp leads automatically',
        inr: '₹35,000',
        usd: '$1,000',
        includes: ['Automated WhatsApp replies', 'Leads saved to a CRM'],
        bugFixDays: 30,
        popular: true,
      },
      {
        code: 'AUT-AI',
        name: 'Website AI Chatbot',
        forWho: 'Answer visitor questions 24/7',
        inr: '₹30,000',
        usd: '$800',
        includes: ['AI chatbot that answers questions about your business', 'Added to your website'],
        bugFixDays: 30,
      },
      {
        code: 'AUT-BUNDLE',
        name: 'Automation Bundle',
        forWho: 'Bot + lead routing + workflows together',
        inr: '₹70,000',
        usd: '$1,500',
        includes: ['Chatbot', 'Lead routing', '3 workflows'],
        bugFixDays: 30,
      },
    ],
    addOns: {
      INR: 'Extra workflow ₹8,000 · Extra bot branch ₹3,000 · WhatsApp chat button ₹1,000',
      USD: 'Extras quoted at $25/hr',
    },
  },
];

// Shown under every category.
export const alwaysIncluded = [
  'A written quote with the full scope before any payment',
  'Domain, hosting and all accounts set up in your name',
  'Code and design files handed over on full payment',
  'A private preview link and a weekly update while we build',
];

export const notIncluded = [
  'Domain, hosting, themes, plugins, apps and API fees (paid by you at actual cost, never marked up)',
  'Text, photos and logo, unless content writing is added',
  'Anything not written in your quote (quoted separately before we do it)',
  'Guaranteed Google rankings, or approvals by Google, Meta, payment gateways or government bodies',
];

export const maintenance: { service: string; INR: string; USD?: string }[] = [
  { service: 'Website', INR: '₹6,000/yr (4 edits) · ₹1,200/mo (1 hr) · ₹2,500/mo (3 hrs)', USD: '$50/mo' },
  { service: 'WordPress', INR: '₹2,000 · ₹4,500 · ₹8,000 (LMS/booking) per month', USD: '$75/mo' },
  { service: 'E-commerce store', INR: '₹3,000 · ₹7,000 per month', USD: '$100/mo' },
  { service: 'Web app', INR: '₹4,000 · ₹10,000 · ₹20,000 per month', USD: '$150/mo' },
  { service: 'SEO / Google Business Profile', INR: '₹3,000 · ₹5,000 per month' },
  { service: 'Automation & AI bots', INR: '₹2,500 · ₹6,000 · ₹8,000 per month', USD: '$100/mo' },
];

export const fixing: { label: string; INR: string; USD: string }[] = [
  { label: 'Hourly rate', INR: '₹1,000 – ₹1,500/hr (by service)', USD: '$25/hr (1 hr minimum)' },
  { label: 'Small fix', INR: 'from ₹1,000', USD: 'from $25' },
  { label: 'Emergency (same day)', INR: 'from ₹2,500 minimum', USD: '$40/hr (2 hr minimum)' },
  { label: 'Rescue of a site built by someone else', INR: 'from ₹6,000 (after a check)', USD: 'from $250 (audit)' },
];

export const paymentTerms: Record<Currency, string> = {
  INR: 'Under ₹25,000: 50% advance, 50% before launch. Larger projects: 50% advance · 30% on preview approval · 20% before launch. Monthly plans are paid in advance.',
  USD: 'Under $500: 50% upfront, 50% before launch. Larger projects: 50% upfront · 30% on preview approval · 20% before launch. Monthly plans are paid in advance.',
};

export const taxNote: Record<Currency, string> = {
  INR: 'Not registered under GST. No GST is charged.',
  USD: 'Prices in US dollars. No Indian GST. Your local taxes and payment fees, if any, are not included.',
};

// Starting prices per service page (data/services.ts slug → price line).
export const servicePrices: Record<string, { INR: { short: string; line: string }; USD: { short: string; line: string } }> = {
  'web-development': {
    INR: { short: '₹10K+', line: 'Landing page ₹10,000 · 5-page website ₹18,000 · Web apps from ₹1,25,000' },
    USD: { short: '$350+', line: 'Landing page $350 · 5-page website $700 · Web apps from $2,500' },
  },
  'shopify-development': {
    INR: { short: '₹30K+', line: 'Starter store ₹30,000 · D2C growth store ₹60,000 · Custom store from ₹1,25,000' },
    USD: { short: '$950+', line: 'Starter store $950 · Growth store $1,500 · Custom store from $2,800' },
  },
  'ai-automation': {
    INR: { short: '₹15K+', line: 'Lead routing ₹15,000 · AI chatbot ₹30,000 · WhatsApp bot + CRM ₹35,000' },
    USD: { short: '$350+', line: 'Lead routing $350 · AI chatbot $800 · WhatsApp bot + CRM $1,000' },
  },
  'seo-services': {
    INR: { short: '₹5K+', line: 'Google Business Profile ₹5,000 · SEO audit ₹7,500 · Local SEO ₹12,000/month' },
    USD: { short: '$250+', line: 'SEO audit $250 · On-page set-up $450 · Monthly SEO $400/month' },
  },
  'cms-platforms': {
    INR: { short: '₹25K+', line: 'WordPress site ₹25,000 · Growth CMS ₹45,000 · LMS / membership ₹75,000' },
    USD: { short: '$750+', line: 'WordPress site $750 · Growth CMS $1,250 · LMS / membership $1,800' },
  },
  'design-branding': {
    INR: { short: '₹3K+', line: 'Logo ₹3,000 (3 concepts, 2 revisions) · UI/UX design ₹2,000 per screen' },
    USD: { short: '$25/hr', line: 'Logo and UI/UX design quoted at $25/hr, fixed in writing before we start' },
  },
  'crm-development': {
    INR: { short: '₹1.25L+', line: 'Custom CRM / business portal ₹1,25,000 – ₹1,80,000 · Larger systems quoted after a call' },
    USD: { short: '$2,500+', line: 'Custom CRM / business portal $2,500 – $4,000 · Larger systems quoted after a call' },
  },
  'payroll-system': {
    INR: { short: '₹1.25L+', line: 'Payroll / HR portal ₹1,25,000 – ₹1,80,000 · Larger systems quoted after a call' },
    USD: { short: '$2,500+', line: 'Payroll / HR portal $2,500 – $4,000 · Larger systems quoted after a call' },
  },
};
