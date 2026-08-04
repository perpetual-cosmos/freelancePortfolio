export interface ArchitectureStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  techTag?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  role?: string;
  timeline?: string;
  liveUrl?: string;
  overview?: string;
  tagline: string;
  heroImage: string;
  stats: { label: string; value: string; trend?: string }[];
  challenge: {
    description: string;
    painPoints: string[];
  };
  approach: {
    phase: string;
    description: string;
    duration: string;
  }[];
  keyHighlights?: { title: string; description: string }[];
  architectureFlow?: ArchitectureStep[];
  outcomes: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  gallery: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "dear-valentine": {
    id: "dear-valentine",
    title: "Dear Valentine",
    client: "Independent SaaS",
    industry: "SaaS · Gifting",
    role: "Full-Stack Architect & Product Creator",
    timeline: "7 Weeks",
    liveUrl: "https://dearvalentine.vercel.app/",
    overview: "A custom Valentine's story creation SaaS where senders configure daily tasks & rewards, unlock unique access links via payment, and track recipient responses in real-time.",
    tagline: "Customizable Valentine's Story & Daily Task Gifting SaaS — Global reach with viral referral mechanics.",
    heroImage: "/projects/dearvalentinehome.png",
    stats: [
      { label: "Organic Visits", value: "1K+", trend: "+100% Organic" },
      { label: "Global Reach", value: "70+", trend: "Countries" },
      { label: "Active Signups", value: "200+", trend: "Zero Paid Ads" },
    ],
    challenge: {
      description: "Building a viral SaaS product from scratch with zero marketing budget. The goal was to allow users to log in, customize daily Valentine tasks and rewards for their partners into 'Stories', and generate unique paid access links with real-time response tracking.",
      painPoints: [
        "Enabling multi-story creation per user with custom daily task and reward logic",
        "Generating unique shareable links locked behind payment activation",
        "Ensuring recipient access is strictly gated until payment confirmation",
        "Streaming recipient task responses back to the sender's live dashboard"
      ],
    },
    keyHighlights: [
      { title: "Story Builder & Task Customizer", description: "Allows senders to create multiple custom Valentine stories with daily tasks & rewards." },
      { title: "Payment-Gated Unique Links", description: "Generates unique URL slugs that activate instantly upon payment confirmation." },
      { title: "Real-Time Response Dashboard", description: "Streams recipient completed tasks & answers directly to the sender's dashboard." }
    ],
    architectureFlow: [
      { step: "01", title: "Story & Task Customization", subtitle: "Sender Creation", description: "Sender logs in and builds custom daily Valentine tasks (Days 1–7) with assigned rewards into a Story payload.", techTag: "Next.js & Supabase DB" },
      { step: "02", title: "Unique Link & Payment Lock", subtitle: "Gateway Activation", description: "System generates a unique URL slug per Story. Link remains locked until checkout payment webhook succeeds.", techTag: "Payment Webhook" },
      { step: "03", title: "Recipient Task Execution", subtitle: "Gated Access", description: "Recipient clicks unique link. System verifies active payment status, allowing recipient to attempt daily tasks & reveal rewards.", techTag: "Edge Auth Verification" },
      { step: "04", title: "Live Response Tracking", subtitle: "Sender Dashboard", description: "Recipient answers and completed task responses are persisted and streamed live to the sender's private dashboard.", techTag: "Realtime Dashboard Sync" }
    ],
    approach: [
      {
        phase: "Product Design",
        description: "Focused on a 'surprise and delight' mechanism with time-locked reveals to drive curiosity and sharing.",
        duration: "2 weeks",
      },
      {
        phase: "Tech Architecture",
        description: "Leveraged Next.js and Supabase for a serverless, highly scalable backend capable of handling traffic bursts.",
        duration: "3 weeks",
      },
      {
        phase: "Growth Engine",
        description: "Implemented referral mechanics and social sharing hooks to achieve organic growth.",
        duration: "1 week",
      },
      {
        phase: "Global Deployment",
        description: "Optimized for 70+ countries with localized time management and CDN delivery.",
        duration: "1 week",
      },
    ],
    outcomes: [
      "Achieved 1,000+ organic visits within the first month",
      "Successfully launched in 70+ countries",
      "Reached 200+ registered users with zero ad spend",
      "Zero downtime during peak Valentine's Day traffic",
    ],
    technologies: ["Next.js", "Supabase", "Facebook Pixel", "Vercel", "Tailwind CSS"],
    testimonial: {
      quote: "The organic growth of Dear Valentine proves that a well-built product with a viral loop can compete with paid marketing.",
      author: "Tarun Singh",
      role: "Lead Developer",
      image: "/tarunsinghmod.png",
    },
    gallery: ["/projects/dearvalentinehome.png", "/projects/dearvalentinedashboard.png"],
  },
  "wavo-digital": {
    id: "wavo-digital",
    title: "Wavo.digital",
    client: "Oaksol Technologies",
    industry: "SaaS · AI Automation",
    role: "Lead Frontend & API Engineer",
    timeline: "14 Weeks",
    overview: "An AI-powered WhatsApp marketing and automated commerce platform powered by Facebook Graph Webhooks, automated reply workflows, and in-chat purchase flows.",
    tagline: "WhatsApp Marketing & AI Automation Platform for funded enterprise startups.",
    heroImage: "/projects/wavo.png",
    stats: [
      { label: "Build Velocity", value: "0 → 1", trend: "Production Built" },
      { label: "Engineering Scope", value: "Sole Dev", trend: "Full Execution" },
      { label: "System Uptime", value: "99.9%", trend: "Enterprise Grade" },
    ],
    challenge: {
      description: "A funded startup needed an enterprise-grade platform to manage AI-driven WhatsApp marketing campaigns, automated customer replies, and in-chat purchasing. The challenge was building a resilient architecture to process high-volume Facebook Webhooks in real-time.",
      painPoints: [
        "Real-time processing of high-volume Facebook Graph & WhatsApp Webhooks",
        "Automating intelligent AI reply sequences and in-chat purchase options",
        "Multi-tenant data isolation and role-based client dashboard access",
        "Streamlining communication logs and conversion analytics into a live React UI"
      ],
    },
    keyHighlights: [
      { title: "Facebook Graph Webhook Gateway", description: "High-throughput endpoint receiving and verifying incoming WhatsApp messages and event triggers." },
      { title: "AI Automation & Purchase Logic", description: "Contextual AI engine managing dynamic customer replies and in-chat product purchasing options." },
      { title: "Multi-Tenant Client Dashboard", description: "Real-time React UI for configuring bot rules, managing campaigns, and tracking conversions." }
    ],
    architectureFlow: [
      { step: "01", title: "Client Automation Config", subtitle: "Dashboard UI", description: "Client logs into Wavo dashboard to configure automated AI reply rules, marketing flows, and purchase catalog options.", techTag: "React Dashboard" },
      { step: "02", title: "Facebook Webhook Dispatch", subtitle: "Gateway Ingestion", description: "Facebook Graph & WhatsApp Cloud API dispatches real-time webhooks (customer messages, button taps, purchase intents).", techTag: "Facebook Webhook API" },
      { step: "03", title: "AI Engine & Commerce Handler", subtitle: "Core Automation", description: "AI engine parses message intent, executes automated replies, processes in-chat purchase options, and updates order states.", techTag: "AI Engine & REST Gateway" },
      { step: "04", title: "Live Sync & Analytics Persist", subtitle: "Data & Dispatch", description: "Automated responses are sent back via Meta Graph API; message logs, conversation analytics, and sales persist to database.", techTag: "Meta Graph API & MongoDB" }
    ],
    approach: [
      {
        phase: "API Integration",
        description: "Architected a robust integration layer for handling real-time data from WhatsApp and Voice AI providers.",
        duration: "4 weeks",
      },
      {
        phase: "Dashboard UI",
        description: "Built a high-performance React dashboard with modular components for easy feature expansion.",
        duration: "6 weeks",
      },
      {
        phase: "Security & Auth",
        description: "Implemented enterprise-standard JWT authentication and role-based access control.",
        duration: "2 weeks",
      },
      {
        phase: "Production Ops",
        description: "Set up CI/CD pipelines and production-ready monitoring for high availability.",
        duration: "2 weeks",
      },
    ],
    outcomes: [
      "Delivered a full production-ready dashboard as the sole developer",
      "Successfully integrated complex third-party AI and communication APIs",
      "Supported the client's transition from MVP to a funded enterprise product",
      "Zero data leaks and 99.9% system uptime since launch",
    ],
    technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Vercel", "JWT"],
    testimonial: {
      quote: "TheUnipick took our complex requirements and delivered a production-ready system that impressed our investors.",
      author: "Dhruv",
      role: "Founder, Oaksol Technologies",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: ["/projects/wavo.png", "/projects/wavologin.png"],
  },
  "alumnipp": {
    id: "alumnipp",
    title: "Alumnipp.com",
    client: "Alumni Networking Platform",
    industry: "Platform · Networking",
    role: "Lead Full-Stack Rescue Engineer",
    timeline: "72 Hours Emergency Turnaround",
    overview: "A Laravel & React Alumni CRM platform featuring role-based admin controls, automated alumni verification workflows, notice management, and automated digital ID card generation.",
    tagline: "Laravel Alumni CRM Codebase Rescue — Saved 1,000+ registered users with 100% data integrity.",
    heroImage: "/projects/alumnipp.png",
    stats: [
      { label: "Users Preserved", value: "1,000+", trend: "Zero Data Lost" },
      { label: "Rescue Velocity", value: "72 Hrs", trend: "Full Recovery" },
      { label: "Data Integrity", value: "100%", trend: "DB Restored" },
    ],
    challenge: {
      description: "Inherited a failing Laravel + React codebase serving over 1,000 alumni. The platform required role-based management for admins to verify alumni, broadcast institutional notices, and issue automated digital ID cards without system crashes.",
      painPoints: [
        "Failing Laravel controller routes causing 500 errors during alumni login and verification",
        "Improper database relational locking causing corrupted alumni profile records",
        "Lack of dynamic PDF rendering pipeline for automated alumni ID card generation",
        "Urgent 72-hour window to rescue service for 1,000+ active alumni without data loss"
      ],
    },
    keyHighlights: [
      { title: "Role-Based Admin Controller Pipeline", description: "Multi-tiered permission controllers for admin verification, notices, and user access." },
      { title: "Automated Alumni ID Card Generation", description: "Background queue rendering dynamic digital ID cards with custom QR verification." },
      { title: "Database Repair & Data Integrity", description: "Normalized MySQL schema and sanitized 1,000+ legacy alumni user records." }
    ],
    architectureFlow: [
      { step: "01", title: "Alumni Portal & Auth", subtitle: "Frontend Interface", description: "Alumni log into React portal to view institutional updates, alumni directory, and submit verification details.", techTag: "React & Laravel Auth" },
      { step: "02", title: "Role-Based Controller Pipeline", subtitle: "Admin Backend", description: "Admins & role-based controllers manage verification queues, publish notices, and moderate alumni profiles.", techTag: "Laravel RBAC Middleware" },
      { step: "03", title: "Automated ID Card Generator", subtitle: "Background Queue", description: "Upon verification, system compiles alumni data and generates a dynamic PDF digital ID card with QR code.", techTag: "Laravel Queue & PDF Engine" },
      { step: "04", title: "Data Storage & Asset Serve", subtitle: "Persistence Layer", description: "Sanitized alumni records, notices, and dynamic ID cards persist to MySQL database & S3 storage.", techTag: "MySQL DB & AWS S3" }
    ],
    approach: [
      {
        phase: "Emergency Audit",
        description: "Conducted a deep-dive technical audit to identify root causes of crashes and data corruption.",
        duration: "24 hours",
      },
      {
        phase: "Core Refactoring",
        description: "Refactored the broken Laravel controllers and React components to stabilize the core architecture.",
        duration: "24 hours",
      },
      {
        phase: "Data Recovery",
        description: "Repaired corrupted database records and ensured 100% data integrity for all users.",
        duration: "12 hours",
      },
      {
        phase: "Deployment",
        description: "Launched the stabilized version with zero data loss and restored full functionality.",
        duration: "12 hours",
      },
    ],
    outcomes: [
      "Successfully preserved 1,000+ registered user accounts",
      "Restored full platform stability within 72 hours",
      "Achieved 100% data integrity with zero records lost during rescue",
      "Stabilized the system for future feature expansion",
    ],
    technologies: ["Laravel", "React", "MySQL", "PHP", "AWS"],
    testimonial: {
      quote: "The turnaround was incredible. Our platform went from completely broken to stable in just 3 days.",
      author: "Platform Owner",
      role: "Client",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: ["/projects/alumnipp.png", "/projects/alumnipp2.png", "/projects/alumnipp3.png"],
  },
  "biryanibabu-website": {
    id: "biryanibabu-website",
    title: "Biryani Babu",
    client: "Biryani Babu",
    industry: "Food & Restaurant",
    role: "Frontend Engineer & SEO Architect",
    timeline: "5 Weeks",
    overview: "A highly aesthetic food & QSR showcase website in Kolkata, featuring an indexable digital menu, WebP image performance tuning, and LocalBusiness Schema to dominate local search.",
    tagline: "Kolkata's #1 Biryani QSR — Aesthetic digital menu showcase & Local SEO dominance.",
    heroImage: "/case-studies/biriyanibabu-CggFjvPm.webp",
    stats: [
      { label: "Search Ranking", value: "#1 Local", trend: "Top Rank" },
      { label: "Online Orders", value: "+300%", trend: "3x Growth" },
      { label: "Mobile Speed", value: "99/100", trend: "Lightning Fast" },
    ],
    challenge: {
      description: "Biryani Babu required a highly aesthetic shop website to showcase their rich menu, signature dishes, and QSR brand story. The objective was to attract local biryani lovers in Kolkata and convert website visitors into online orders.",
      painPoints: [
        "Presenting a rich, aesthetic digital menu without slowing mobile load speed",
        "Integrating indexable dish categories for local Kolkata 'near me' search queries",
        "Structuring Restaurant & Menu JSON-LD Schema markup for Google Rich Results",
        "Driving smooth conversion from aesthetic menu browsing to instant online ordering"
      ],
    },
    keyHighlights: [
      { title: "Aesthetic Interactive Digital Menu", description: "Ultra-fast WebP dish showcase with category filters and high-res food photography." },
      { title: "Restaurant & Menu Schema Engine", description: "Enriches Google search results with dish prices, ratings, and location metadata." },
      { title: "High-Converting Order Pipeline", description: "Direct mobile ordering CTA converting casual visitors into foot traffic and sales." }
    ],
    architectureFlow: [
      { step: "01", title: "Local Discovery & Geo SEO", subtitle: "Search Engine Ingestion", description: "Diner searches local food in Kolkata; pre-rendered Vite pages deliver location meta tags & Restaurant JSON-LD schema.", techTag: "Vite SSR & Local Schema" },
      { step: "02", title: "Aesthetic Digital Menu Showcase", subtitle: "Interactive Frontend", description: "Visitor explores ultra-fast WebP food gallery, signature dishes, and interactive category filters with high-res visuals.", techTag: "React & Styled Components" },
      { step: "03", title: "Direct Order & Contact Gateway", subtitle: "Conversion Pipeline", description: "Customer selects menu items, customizes spice preferences, and triggers instant online order / direct phone call.", techTag: "Responsive Order Router" },
      { step: "04", title: "Review Schema & Foot Traffic Sync", subtitle: "Social Proof Layer", description: "Verified diner reviews sync with Google Business API to maintain #1 local ranking and drive store visits.", techTag: "Google Business API" }
    ],
    approach: [
      {
        phase: "On-Page SEO",
        description: "Overhauled titles, meta descriptions, and heading tags to target specific, high-value local keywords in Rajarhat and New Town.",
        duration: "1 week",
      },
      {
        phase: "Content Integration",
        description: "Integrated indexable menu content onto the main page with a 'Signature Dishes' section and wove 'near me' keywords into the copy.",
        duration: "2 weeks",
      },
      {
        phase: "Schema Markup",
        description: "Implemented advanced Restaurant, Menu, and Review Snippet structured data to enrich search results.",
        duration: "1 week",
      },
      {
        phase: "Performance tuning",
        description: "Converted high-quality images to WebP format, optimized scripts, and ensured seamless mobile usability.",
        duration: "1 week",
      },
    ],
    outcomes: [
      "Dominated local search results for 'Best Biryani in Kolkata'",
      "300% increase in online orders and foot traffic",
      "Enhanced social proof through prominent, schema-marked reviews",
      "Lightning-fast mobile load times and seamless booking experience",
    ],
    technologies: ["React", "Vite", "Styled-Components", "TypeScript", "Advanced SEO Schema"],
    testimonial: {
      quote: "The SEO overhaul changed everything. We're now the top result for biryani in Rajarhat, and our online orders have never been higher!",
      author: "Rahul Verma",
      role: "Verified Diner",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/biriyanibabumenu-CyXOLQob.webp",
      "/case-studies/biryanibabufoodmenu-DdVwKquE.webp",
      "/case-studies/biriyanibabufooter-CNp1aHZH.webp"
    ],
  },
  "blackart-tattoo-studio": {
    id: "blackart-tattoo-studio",
    title: "BlackArt Tattoo Studio",
    client: "Artist Nirmal",
    industry: "Retail & Services",
    role: "UI/UX Architect & Full-Stack Developer",
    timeline: "6 Weeks",
    overview: "A premium tattoo studio web platform focused on high-engagement visual UI, artist portfolio showcase, mobile booking consultation, and a custom Admin Blog Management Portal.",
    tagline: "High-Engagement Tattoo Studio Experience — Premium visual UI & Custom Admin Blog Portal.",
    heroImage: "/case-studies/blackarttattoo-CLnulL0F.webp",
    stats: [
      { label: "Search Visibility", value: "Top 3", trend: "Local SEO" },
      { label: "Page Speed", value: "98/100", trend: "Mobile First" },
      { label: "Client Inquiries", value: "+310%", trend: "3.1x Leads" },
    ],
    challenge: {
      description: "BlackArt Tattoos required a visually stunning digital presence to engage high-intent clients and tourists in Udaipur. The studio needed an immersive UI to showcase hygiene standards and a custom admin dashboard to publish blog updates.",
      painPoints: [
        "Delivering a high-impact, visual dark UI that keeps users engaged",
        "Building a custom Admin Blog Portal for the artist to write and publish content",
        "Streamlining consultation requests for mobile visitors and tourists",
        "Optimizing LocalBusiness Schema for Udaipur local search rankings"
      ],
    },
    keyHighlights: [
      { title: "High-Engagement Visual UI", description: "Immersive dark aesthetics showcasing artwork, hygiene standards, and artist profiles." },
      { title: "Custom Admin Blog CMS", description: "Dedicated admin panel empowering the studio owner to write, edit, and publish blog articles." },
      { title: "High-Converting Consultation Funnel", description: "Mobile-optimized booking flow capturing client project ideas and placement details." }
    ],
    architectureFlow: [
      { step: "01", title: "High-Engagement UI Entry", subtitle: "Visual Presentation", description: "Visitors land on immersive Next.js dark UI featuring high-res tattoo showcases, hygiene credentials, and interactive gallery.", techTag: "Next.js & Tailwind CSS" },
      { step: "02", title: "Consultation & Booking Gateway", subtitle: "Lead Funnel", description: "Clients fill out dynamic consultation request form specifying tattoo size, placement, and custom design ideas.", techTag: "Interactive Booking Funnel" },
      { step: "03", title: "Admin Blog CMS & Publishing", subtitle: "Content Portal", description: "Studio owner logs into secure admin portal to write blog posts, manage care guides, and publish articles.", techTag: "Admin Blog CMS Gateway" },
      { step: "04", title: "Local SEO Index & Persistence", subtitle: "SEO & Storage", description: "Blog articles and studio metadata auto-index with LocalBusiness Schema to drive search visibility in Udaipur.", techTag: "LocalBusiness Schema & Vercel" }
    ],
    approach: [
      {
        phase: "Identity",
        description: "Defined a clean, sophisticated brand voice emphasizing safety and custom artistry.",
        duration: "1 week",
      },
      {
        phase: "UX Design",
        description: "Created artist-focused layouts with high-impact visuals and streamlined CTAs.",
        duration: "2 weeks",
      },
      {
        phase: "SEO & CRO",
        description: "Implemented advanced LocalBusiness schema and optimized content for high-intent keywords.",
        duration: "2 weeks",
      },
      {
        phase: "Launch",
        description: "Deployed on high-performance infrastructure with real-time analytics.",
        duration: "1 week",
      },
    ],
    outcomes: [
      "Secured #1 ranking for 'Tattoo Studio in Udaipur' keywords",
      "310% increase in monthly appointment inquiries",
      "Perfect Core Web Vitals score for mobile experience",
      "Enhanced social proof through integrated testimonial system",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Local SEO"],
    testimonial: {
      quote: "My digital presence now perfectly reflects the quality of work we do at the studio. The increase in international clients has been phenomenal.",
      author: "Artist Nirmal",
      role: "Founder, BlackArt Tattoos",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/blackarttattoo-CLnulL0F.webp",
      "/case-studies/blackarttattoo2-ClIUgKkV.webp",
      "/case-studies/blackarttattoo3-CnHNr91H.webp"
    ],
  },
  "alexink-tattoo-website": {
    id: "alexink-tattoo-website",
    title: "Alexink Tattoo Website",
    client: "Artishtic Expressions",
    industry: "Arts & Lifestyle",
    role: "Full-Stack Web Developer & UX Designer",
    timeline: "8 Weeks",
    overview: "A bold, modern tattoo studio website featuring interactive portfolio filtering, fast 1.2s page load speeds, and dynamic online deposit booking.",
    tagline: "A bold digital website presence that boosted studio bookings by 240%.",
    heroImage: "/case-studies/TattooWebsite-BCwhkFr1.webp",
    stats: [
      { label: "Conversion Rate", value: "+240%", trend: "2.4x Bookings" },
      { label: "Page Load Time", value: "1.2s", trend: "Fast Speed" },
      { label: "Mobile Traffic", value: "+180%", trend: "Mobile Growth" },
    ],
    challenge: {
      description: "Alexink needed a modern, high-performance website to showcase artist portfolios and convert visitor sessions into booked sessions.",
      painPoints: [
        "Outdated legacy site with slow 8s load times causing high bounce rates",
        "No interactive portfolio category filtering for clients to browse styles",
        "Absence of streamlined mobile booking and deposit checkout",
        "Inconsistent visual presentation across mobile and desktop devices"
      ],
    },
    keyHighlights: [
      { title: "Filtered Artist Portfolio Showcase", description: "Interactive gallery letting visitors filter tattoos by style, artist, and placement." },
      { title: "High-Performance React Engine", description: "Cut page load times from 8.0s to 1.2s with WebP image optimization and code splitting." },
      { title: "Stripe Deposit Checkout Gateway", description: "Secures appointment slots with online deposit payments." }
    ],
    architectureFlow: [
      { step: "01", title: "Visitor Entry & Style Filtering", subtitle: "Website UI", description: "Client lands on responsive React site, filtering tattoo artwork by category, style, and artist portfolio.", techTag: "React & Tailwind" },
      { step: "02", title: "Interactive Consultation Form", subtitle: "Lead Pipeline", description: "Client selects preferred artist, uploads reference photos, and picks available session dates.", techTag: "Form Processing" },
      { step: "03", title: "Stripe Payment Deposit", subtitle: "Checkout Gateway", description: "Client confirms booking by paying session deposit via secure Stripe Checkout API.", techTag: "Stripe Payment API" },
      { step: "04", title: "Database Sync & Calendar Lock", subtitle: "Persistence Layer", description: "Appointment details and payment records persist to PostgreSQL database, locking calendar slot.", techTag: "Node.js & PostgreSQL" }
    ],
    approach: [
      {
        phase: "Discovery",
        description: "Interviewed artists and clients to understand the booking journey and visual expectations.",
        duration: "2 weeks",
      },
      {
        phase: "Design",
        description: "Developed a modern, tattoo-inspired aesthetic with a focus on showcasing artwork and streamlining bookings.",
        duration: "3 weeks",
      },
      {
        phase: "Development",
        description: "Built a fully responsive React website with integrated booking and gallery systems, optimized for performance.",
        duration: "8 weeks",
      },
      {
        phase: "Testing & Launch",
        description: "Conducted usability testing, optimized SEO, and launched with a marketing campaign targeting local audiences.",
        duration: "2 weeks",
      },
    ],
    outcomes: [
      "Page load time reduced from 8s to 1.2s",
      "Online bookings increased by 240%",
      "Mobile bounce rate dropped by 70%",
      "Customers spent 3x longer exploring artist portfolios",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The new site captures who we are perfectly. Clients now find us easily, and bookings have skyrocketed. The whole process was smooth and professional.",
      author: "Sarah Mitchell",
      role: "Founder, Alexink Tattoo Studio",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/TattooWebsite1-DWaV4DZc.webp",
      "/case-studies/TattooWebsite1-DWaV4DZc.webp",
      "/case-studies/TatooWebsitec-BOa8FhS7.webp"
    ],
  },
  "inkmaster-tattoo-website": {
    id: "inkmaster-tattoo-website",
    title: "Inkmaster Tattoo Website",
    client: "Inkmaster Tattoo",
    industry: "Art & Lifestyle",
    role: "Next.js Web Developer & UX Designer",
    timeline: "2 Weeks Fast Execution",
    overview: "A fast, artist-focused studio website featuring real-time booking inquiries, Cloudinary asset delivery, and responsive mobile navigation.",
    tagline: "Artist-focused website redesign that increased online studio bookings by 4X.",
    heroImage: "/case-studies/TattooWebsite2-D0LnzfOo.webp",
    stats: [
      { label: "Website Score", value: "96%", trend: "High Performance" },
      { label: "Session Time", value: "+180%", trend: "Longer Engagement" },
      { label: "Bookings Increase", value: "4X", trend: "4x Growth" },
    ],
    challenge: {
      description: "Inkmaster Tattoo needed an online website reflecting their offline artistry reputation, capturing client session requests and showcasing artist portfolios.",
      painPoints: [
        "Lacked a modern website to showcase studio artwork and artist specialties",
        "Need for rapid 2-week execution on a tight budget",
        "Optimizing heavy image portfolios for mobile browsers",
        "Streamlining client booking requests into an easy admin notification system"
      ],
    },
    keyHighlights: [
      { title: "Cloudinary Image CDN Integration", description: "Delivers optimized high-res portfolio images automatically scaled for mobile devices." },
      { title: "Next.js Static Site Generation", description: "Pre-renders portfolio pages for 96% Core Web Vitals speed scores." },
      { title: "Real-Time Booking Ingestion", description: "Captures user consultation forms and notifies studio managers." }
    ],
    architectureFlow: [
      { step: "01", title: "Portfolio Discovery", subtitle: "Website UI", description: "Visitors browse artist galleries rendered via Next.js SSG with Cloudinary media CDN.", techTag: "Next.js & Cloudinary" },
      { step: "02", title: "Interactive Session Request", subtitle: "Client Funnel", description: "User submits consultation details, custom design ideas, and preferred studio dates.", techTag: "React Form Component" },
      { step: "03", title: "API Gateway Processing", subtitle: "Serverless Route", description: "Next.js Serverless route validates form inputs and persists lead to database.", techTag: "Next.js API Route" },
      { step: "04", title: "Admin Notification Sync", subtitle: "Database & Alerts", description: "Studio owner receives instant lead notification; inquiry persists to MongoDB database.", techTag: "MongoDB & Email Alert" }
    ],
    approach: [
      {
        phase: "User Research",
        description: "Analyzed competitor sites, gathered client feedback, and reviewed analytics to identify key pain points.",
        duration: "2 Days",
      },
      {
        phase: "UX Design",
        description: "Created a clean, immersive design that highlighted each artist’s work with intuitive navigation.",
        duration: "2 days",
      },
      {
        phase: "Development",
        description: "Built a fast, mobile-optimized site with a real-time booking calendar and easy content management tools.",
        duration: "1 weeks",
      },
      {
        phase: "Testing & Optimization",
        description: "Launched a pilot version, monitored engagement metrics, and refined based on feedback.",
        duration: "2 days",
      },
    ],
    outcomes: [
      "Good looking portfolio website within 2 weeks",
      "Bookings increased fivefold within three months",
      "Customer satisfaction rated 4.8/5",
      "Booking increase 4times",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "MongoDB", "Cloudinary"],
    testimonial: {
      quote: "We finally have a site that represents our art. Clients now comment on how easy it is to browse and book, it’s been a complete transformation.",
      author: "Aditya Ranjan",
      role: "Owner, Inkmaster Tattoo",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/TattooWebsite2a-zznwtKwN.webp",
      "/case-studies/TattooWebsite2b-sUHHJZOt.webp",
      "/case-studies/TattooWebsite2c-BeHlvRw3.webp"
    ],
  },
  "cozycafe-branding-website": {
    id: "cozycafe-branding-website",
    title: "CozyCafe Branding & Website",
    client: "CozyCafe",
    industry: "Food & Restaurant",
    role: "Brand Strategist & Frontend Developer",
    timeline: "7 Weeks",
    overview: "A warm, authentic cafe website featuring integrated online ordering, Firebase realtime order management, and Google Maps API location integration.",
    tagline: "Warm, authentic cafe website & branding — Tripled local search visibility & online sales.",
    heroImage: "/case-studies/CozyCafe-CBA3aU9L.webp",
    stats: [
      { label: "Foot Traffic", value: "+220%", trend: "In-Store Growth" },
      { label: "Online Orders", value: "+340%", trend: "3.4x Digital" },
      { label: "Revenue Impact", value: "+60%", trend: "Monthly Sales" },
    ],
    challenge: {
      description: "CozyCafe needed a warm, authentic website to present their menu, support online pickup orders, and increase local search foot traffic.",
      painPoints: [
        "Inconsistent brand identity and outdated online menu presentation",
        "Lack of online ordering for pickup or local delivery",
        "Low visibility in local Google search results for nearby coffee lovers",
        "Need for responsive mobile navigation for customers on the go"
      ],
    },
    keyHighlights: [
      { title: "Warm Aesthetic Branding & Website", description: "Custom typography, warm color palette, and clear digital menu presentation." },
      { title: "Firebase Realtime Online Ordering", description: "Streamlined order checkout persisting to kitchen store tablets in real-time." },
      { title: "Google Maps API & Local SEO", description: "Interactive map integration driving local foot traffic." }
    ],
    architectureFlow: [
      { step: "01", title: "Local Geo Discovery", subtitle: "Website Entry", description: "Customer searches local cafe; Next.js site delivers location schema and Google Maps integration.", techTag: "Next.js & Google Maps" },
      { step: "02", title: "Interactive Menu Selection", subtitle: "Menu UI", description: "Customer explores coffee, pastry, and meal options with custom dietary tags.", techTag: "Tailwind CSS & React" },
      { step: "03", title: "Online Order Checkout", subtitle: "Payment Gateway", description: "Customer selects pickup time and pays securely via Stripe checkout gateway.", techTag: "Stripe Payment API" },
      { step: "04", title: "Kitchen Tablet Realtime Sync", subtitle: "Store Operations", description: "Order dispatches to Firebase Realtime DB, alerting kitchen staff for instant preparation.", techTag: "Firebase Realtime DB" }
    ],
    approach: [
      {
        phase: "Brand Discovery",
        description: "Worked closely with the owners to define their identity and visual direction.",
        duration: "2 weeks",
      },
      {
        phase: "Design & Branding",
        description: "Developed a warm, inviting brand identity and redesigned all digital and print assets.",
        duration: "3 weeks",
      },
      {
        phase: "Website Development",
        description: "Built a user-friendly website with integrated online ordering, responsive design, and SEO optimization.",
        duration: "7 weeks",
      },
      {
        phase: "Launch & Marketing",
        description: "Introduced the new brand through social campaigns and local SEO improvements.",
        duration: "3 weeks",
      },
    ],
    outcomes: [
      "Local search visibility tripled within two months",
      "Online orders increased by 340%",
      "Customer loyalty program sign-ups up 200%",
      "Monthly revenue increased by 60%",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase", "Stripe", "Google Maps API"],
    testimonial: {
      quote: "Our cafe finally feels like us  warm, welcoming, and professional. Customers tell us they found us online, which never happened before. We couldn’t be happier.",
      author: "Rahul Verma",
      role: "Owner, Cafe",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/Cozycafea-CWs9pQjz.webp",
      "/case-studies/CozyCafeb-BY2ZsLmu.webp",
      "/case-studies/CozyCafec-_5AIYppe.webp"
    ],
  },
  "creative-agency": {
    id: "PRJ-006",
    title: "Creative Agency",
    client: "TechNova Systems",
    industry: "Technology & Software",
    role: "Lead Full-Stack Web Architect",
    timeline: "12 Weeks",
    overview: "A modern creative agency website and SaaS showcase platform built for next-generation tech startups.",
    tagline: "A scalable SaaS website & agency showcase platform for tech startups.",
    heroImage: "/case-studies/innovation-D_EP4z-1.webp",
    stats: [
      { label: "Deployment Speed", value: "4x Faster", trend: "Fast Speed" },
      { label: "Uptime", value: "99.9%", trend: "High Availability" },
      { label: "Customer Growth", value: "+320%", trend: "3.2x Growth" },
    ],
    challenge: {
      description: "TechNova Systems wanted an agency showcase website to launch their scalable SaaS platform for tech startups.",
      painPoints: [
        "Complex onboarding process on legacy marketing website",
        "Limited scalability under heavy multi-tenant client traffic",
        "Fragmented data visualization and analytics tools",
        "Need for a high-converting agency marketing website"
      ],
    },
    keyHighlights: [
      { title: "Modular Agency Website Showcase", description: "Interactive components highlighting product features, agency work, and client testimonials." },
      { title: "Microservices & API Gateway", description: "Node.js and Python microservices with Redis caching for real-time analytics." },
      { title: "High-Converting Onboarding Funnel", description: "Streamlined sign-up reducing onboarding time from 14 days to 3 days." }
    ],
    architectureFlow: [
      { step: "01", title: "Agency Showcase Discovery", subtitle: "Marketing Website UI", description: "Startup client lands on high-converting React agency website showcasing SaaS features & demo video.", techTag: "React & TypeScript" },
      { step: "02", title: "API Gateway & Onboarding", subtitle: "Client Funnel", description: "Client signs up via streamlined onboarding flow; API Gateway handles tenant provisioning.", techTag: "Node.js API Gateway" },
      { step: "03", title: "Microservice Logic & Redis", subtitle: "Core Analytics", description: "Python & Redis microservices process real-time analytics data and dashboard feeds.", techTag: "Redis & Python Service" },
      { step: "04", title: "AWS Auto-scaling Delivery", subtitle: "Infrastructure", description: "App dispatches via AWS auto-scaling clusters with 99.9% uptime and zero latency.", techTag: "AWS & Docker" }
    ],
    approach: [
      {
        phase: "Research & Architecture",
        description: "Evaluated existing infrastructure, mapped performance bottlenecks, and designed a scalable microservice architecture.",
        duration: "4 weeks",
      },
      {
        phase: "UI/UX Redesign",
        description: "Simplified workflows and introduced modular dashboards for better data insights.",
        duration: "5 weeks",
      },
      {
        phase: "Backend Development",
        description: "Implemented Node.js and Python-based microservices with Redis caching and WebSocket for real-time updates.",
        duration: "10 weeks",
      },
      {
        phase: "Launch & Optimization",
        description: "Conducted beta rollout, integrated feedback loops, and set up automated monitoring and deployment pipelines.",
        duration: "3 weeks",
      },
    ],
    outcomes: [
      "Onboarding time reduced from 14 days to 3 days",
      "Platform uptime improved to 99.9%",
      "Customer growth increased by 320%",
      "Support requests decreased by 55%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Redis", "Python", "AWS"],
    testimonial: {
      quote: "The upgrade completely changed how our platform performs. Our clients now experience faster, smoother service, and we’ve been able to scale without downtime.",
      author: "Amit Patel",
      role: "CTO, TechNova Systems",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
    },
    gallery: [
      "/case-studies/innovationa-CHi1-TrY.webp",
      "/case-studies/innovationb-CbxODil5.webp",
      "/case-studies/innovationc-B0Jj_VJh.webp"
    ],
  }
};
