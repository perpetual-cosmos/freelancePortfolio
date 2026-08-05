export interface ArchitectureStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  techTag?: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
  businessBenefit: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseStudySEO {
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
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
  aboutClient?: string;
  executiveSummary?: string;
  discoveryProcess?: string;
  strategyRationale?: string;
  challenge: {
    description: string;
    painPoints: string[];
  };
  challengesAndSolutions?: ChallengeSolution[];
  approach: {
    phase: string;
    description: string;
    duration: string;
  }[];
  keyHighlights?: { title: string; description: string }[];
  architectureFlow?: ArchitectureStep[];
  outcomes: string[];
  clientValueLongTerm?: string;
  futureRoadmap?: string[];
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
    verified?: boolean;
    companyLink?: string;
  };
  gallery: string[];
  seo?: CaseStudySEO;
}

export const caseStudies: Record<string, CaseStudy> = {
  "claimpilot": {
    id: "claimpilot",
    title: "ClaimPilot",
    client: "InsurTech Enterprise",
    industry: "Insurance · Enterprise Desktop App",
    role: "Full-Stack Software Development & Solution Architecture",
    timeline: "Enterprise Build",
    overview: "ClaimPilot is an AI-powered desktop enterprise platform engineered with Electron, React, TypeScript, and Supabase. It unifies case management, document automation, workflow tracking, PDF report generation, and AI assistance into a single workspace, enabling claims teams to scale operational capacity by 10×.",
    tagline: "Building an AI-Powered Insurance Claims Management Desktop Platform That Scales Operations 10×.",
    heroImage: "/case-studies/claimpilote/claimpilotdashboard.png",
    stats: [
      { label: "Claims Capacity", value: "10×", trend: "Verified Outcome" },
      { label: "Platform Type", value: "Desktop App", trend: "Electron + React" },
      { label: "AI Integration", value: "Assisted", trend: "Supabase + AI" }
    ],
    aboutClient: "Insurance organizations process hundreds to thousands of claims monthly. Behind every claim are dozens of operational activities: case registration, document verification, status tracking, customer communication, report generation, approvals, and compliance compliance. Many rely on fragmented spreadsheets, email chains, and disconnected software.",
    executiveSummary: "ClaimPilot was developed to simplify operational challenges by providing a centralized desktop platform where claims teams manage cases, automate documentation, monitor workflows, and leverage AI to improve productivity. The platform enables teams to handle 10× more claims volume with the same operational resources.",
    discoveryProcess: "Before designing the solution, the claims workflow was analyzed from entry to final resolution: how claims entered the system, where manual effort occurred, which repetitive tasks could be automated, and what visibility managers needed for decision-making. The project focused on optimizing the end-to-end operational lifecycle.",
    strategyRationale: "Built as a desktop-first enterprise application using Electron, React, and TypeScript for high-performance multi-window handling and local file operations. Supabase powers real-time data persistence, while AI services assist with document analysis and reporting without replacing human decision-making authority.",
    challenge: {
      description: "As claim volume grows, fragmented spreadsheet workflows and disconnected tools create severe operational bottlenecks that increase costs and delay processing.",
      painPoints: [
        "Fragmented case details, documents, and communication spread across spreadsheets and emails",
        "Manual documentation, report generation, and summaries consuming processing time",
        "Lack of centralized workflow visibility for managers to track bottlenecks and team performance",
        "Difficulty scaling operations under increasing claim volumes without expanding staff headcount"
      ]
    },
    challengesAndSolutions: [
      {
        challenge: "Fragmented case files, documents, and customer communications spread across multiple systems",
        solution: "Centralized operational command center consolidating CRM, case management, and missing document tracking into a single desktop application",
        businessBenefit: "Eliminated tool-switching friction and enabled 10× increase in claims processing capacity"
      },
      {
        challenge: "Repetitive manual documentation and case report generation consuming processing hours",
        solution: "Integrated AI Case Analysis, automated PDF claim report generation, and one-click Excel data exports",
        businessBenefit: "Reduced administrative documentation time by over 80% with enterprise compliance traceability"
      },
      {
        challenge: "Lack of workflow visibility for managers tracking claim progress and team bottlenecks",
        solution: "Built dynamic dashboard analytics, activity logs, and real-time lifecycle tracking",
        businessBenefit: "Full operational transparency with complete auditability and status tracking"
      }
    ],
    keyHighlights: [
      { title: "AI Case Analysis & Assistant", description: "Contextual AI helping teams summarize case details, analyze claims, and query operational data." },
      { title: "Document Automation & PDF Engine", description: "Automated generation of compliance reports and PDFs directly from claim records." },
      { title: "Centralized Command Dashboard", description: "Real-time analytics and activity logs providing complete visibility over claim lifecycles." },
      { title: "CRM & Missing Document Tracker", description: "Integrated customer follow-ups and automated missing document highlights." }
    ],
    architectureFlow: [
      { step: "01", title: "Claims Team Workspace", subtitle: "Electron Desktop App", description: "Claims managers access native desktop workspace built with Electron and React.", techTag: "Electron & React" },
      { step: "02", title: "Business Logic & State", subtitle: "TypeScript Engine", description: "Application processes case rules, workflow states, and CRM follow-up queues.", techTag: "TypeScript & Vite" },
      { step: "03", title: "Data & Storage Sync", subtitle: "Supabase Backend", description: "Real-time claims data, document metadata, and activity logs persist securely to Supabase.", techTag: "Supabase DB & Storage" },
      { step: "04", title: "AI & Reporting Pipeline", subtitle: "AI Services & PDF", description: "AI engine performs case analysis; PDF and Excel exporters render compliance reports.", techTag: "AI & PDF Exporter" }
    ],
    approach: [
      { phase: "Workflow Discovery", description: "Analyzed claims processing paths, bottleneck areas, and manual documentation friction points.", duration: "2 weeks" },
      { phase: "Desktop & UI Architecture", description: "Designed unified desktop workspace layout in Electron with React and TypeScript.", duration: "3 weeks" },
      { phase: "AI & Backend Integration", description: "Integrated Supabase persistence, AI case analysis, and CRM tracking modules.", duration: "4 weeks" },
      { phase: "Reporting & Security Audit", description: "Built PDF report generators, Excel exports, and verified role-based activity logging.", duration: "2 weeks" }
    ],
    outcomes: [
      "Enabled organization to handle 10× more claims with existing staff capacity",
      "Unified case management, CRM, documents, and analytics into a single desktop platform",
      "Reduced administrative documentation time by 80% through AI-assisted reporting",
      "Achieved 100% operational transparency with activity logs and missing document tracking"
    ],
    clientValueLongTerm: "Delivered a centralized enterprise command center that eliminates reliance on fragmented spreadsheets and disconnected tools, allowing the organization to scale claim volume without proportional administrative headcount growth.",
    futureRoadmap: [
      "OCR auto-extraction for scanned physical insurance policy documents",
      "Automated policy coverage verification integration",
      "Multi-carrier API gateway integration",
      "Predictive fraud detection scoring model"
    ],
    keyTakeaways: [
      "Operational problems should be thoroughly understood before technical solutions are designed.",
      "AI creates the most value when it supports human experts rather than replacing them.",
      "Centralizing information into a unified desktop workspace delivers higher productivity gains than disconnected web tools."
    ],
    faqs: [
      {
        question: "Why build a desktop application with Electron instead of a traditional web app?",
        answer: "Desktop applications built with Electron provide a high-performance native workspace ideal for claims managers handling multi-window workloads, heavy local document processing, and enterprise data security."
      },
      {
        question: "How does AI assist in claims processing without risking inaccurate decisions?",
        answer: "AI acts as a human-in-the-loop assistant — summarizing documents, highlighting missing items, and performing initial case analysis while keeping final claim approval strictly under human control."
      },
      {
        question: "Can operational data be exported for auditing and compliance?",
        answer: "Yes, ClaimPilot features built-in PDF document generation for formal claim reports and dynamic Excel exports for compliance auditing and business intelligence."
      }
    ],
    technologies: ["Electron", "React", "TypeScript", "Vite", "Supabase", "AI Integration", "PDF Generation", "Excel Export", "Tailwind CSS"],
    testimonial: {
      quote: "ClaimPilot transformed our entire claims operation. Centralizing case management, document automation, and AI assistance allowed our team to handle 10× more claims seamlessly.",
      author: "Operations Director",
      role: "InsurTech Enterprise Client",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/claimpilote/claimpilotdashboard.png",
      "/case-studies/claimpilote/claimpilotcasedetialandpipeline.png",
      "/case-studies/claimpilote/claimpilotaibrain.png",
      "/case-studies/claimpilote/claimpilotdocumentmanagement.png",
      "/case-studies/claimpilote/claimpilotcrm.png",
      "/case-studies/claimpilote/claimpilotexportfeature.png",
      "/case-studies/claimpilote/claimpilotattendancepayroll.png",
      "/case-studies/claimpilote/claimpilotpayroll.png"
    ],
    seo: {
      primaryKeyword: "AI insurance claims management software",
      secondaryKeywords: ["Electron desktop enterprise app", "Supabase InsurTech platform", "AI claims processing software"],
      metaTitle: "ClaimPilot Case Study | AI Insurance Claims Management Platform",
      metaDescription: "How TheUnipick built ClaimPilot — an AI-powered desktop enterprise application for insurance claims management that scaled operations 10×."
    }
  },
  "wavo-digital": {
    id: "wavo-digital",
    title: "Wavo.digital",
    client: "Oaksol Technologies",
    industry: "SaaS · AI Automation",
    role: "Lead Full-Stack & API Architect (Sole Developer)",
    timeline: "14 Weeks",
    liveUrl: "https://wavo.digital",
    overview: "An enterprise WhatsApp marketing and AI automation platform engineered solo in 14 weeks — featuring real-time Facebook Graph Webhook ingestion, contextual AI reply engines, in-chat commerce, and multi-tenant client dashboards.",
    tagline: "Building an AI WhatsApp Marketing & Conversational Commerce SaaS from 0 to Enterprise Production.",
    heroImage: "/projects/wavo.png",
    stats: [
      { label: "Build Velocity", value: "0 → Production", trend: "14 Weeks Solo" },
      { label: "System Uptime", value: "99.9%", trend: "Zero Incidents" },
      { label: "Data Security", value: "100%", trend: "Zero Leaks" },
    ],
    aboutClient: "Oaksol Technologies is an Indian technology startup focused on conversational commerce — using messaging platforms, particularly WhatsApp, to automate customer communication and drive sales for businesses. With over 500 million active WhatsApp users in India, SMBs and e-commerce brands respond to hundreds of customer messages daily manually. Founder Dhruv needed a high-performance system to automate routine inquiries, present product catalogs, and close sales directly inside WhatsApp.",
    executiveSummary: "A funded Indian startup needed an enterprise-grade platform built from scratch in 14 weeks. Wavo.digital receives thousands of real-time Meta webhooks, processes them through an AI reply engine, executes in-chat commerce flows, and surfaces analytics in a multi-tenant React dashboard. Engineered solo by TheUnipick with 99.9% uptime since production release.",
    discoveryProcess: "We spent two weeks mapping the end-to-end journey for three distinct actors: business clients, end customers on WhatsApp, and platform administrators. We identified early that the Facebook Webhook Gateway was the critical path. Everything else — AI engine, dashboard, commerce flows — depended on a stable, high-throughput gateway for receiving and verifying messages. We prioritized stabilizing the webhook ingestion pipeline before layering UI and intelligence.",
    strategyRationale: "Node.js was chosen over Python for the core gateway because incoming webhooks (500+ events/sec under peak load) represent an I/O-bound workload, where Node's event-driven non-blocking architecture excels. Python was isolated strictly for CPU-bound AI context processing. Multi-tenancy was enforced at both the database schema level (tenant_id) and database middleware layer to prevent cross-tenant data leakage by design rather than relying solely on developer query discipline.",
    challenge: {
      description: "Building an enterprise WhatsApp platform requires processing unpredictable real-time webhook bursts, executing intelligent conversational replies, managing in-chat catalog purchasing, and isolating client data with multi-tenant security.",
      painPoints: [
        "High-volume, real-time message processing via Facebook Graph & WhatsApp Cloud API webhooks",
        "Contextual AI reply generation balancing instant answers with human fallback thresholds",
        "In-chat product catalog browsing and checkout state management inside WhatsApp conversations",
        "Strict multi-tenant security guaranteeing data isolation across client businesses"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Facebook Webhook Retries causing duplicate automated message processing during high traffic bursts",
        solution: "Implemented idempotency keys fingerprinting incoming Meta payloads before processing; duplicate events are acknowledged immediately and safely discarded",
        businessBenefit: "Eliminated duplicate customer replies and prevented invalid bot behavior under heavy traffic"
      },
      {
        challenge: "Meta API strict acknowledgment timeout (sub-second response required)",
        solution: "Decoupled webhook acknowledgment from AI processing using an asynchronous event-queue processing pattern",
        businessBenefit: "Guaranteed 100% webhook receipt compliance without Meta gateway drops"
      },
      {
        challenge: "AI overconfidence leading to potential inaccurate responses to customer inquiries",
        solution: "Engineered configurable AI confidence thresholds with a human-agent escalation queue",
        businessBenefit: "Allowed clients to balance automated speed vs response quality based on risk tolerance"
      },
      {
        challenge: "Multi-tenant query degradation as database volume scaled rapidly",
        solution: "Added compound indexes (tenant_id, conversation_id, timestamp) and cursor-based pagination",
        businessBenefit: "Maintained sub-50ms dashboard query speeds at 10× initial test volume"
      }
    ],
    keyHighlights: [
      { title: "Facebook Graph Webhook Gateway", description: "Event-driven Node.js gateway acknowledging Meta webhooks sub-second while queuing async payload processing." },
      { title: "AI Automation & Intent Engine", description: "Context-aware reply engine matching FAQs, classifying customer purchase intent, and enforcing confidence thresholds." },
      { title: "In-Chat Interactive Commerce Pipeline", description: "Interactive product catalogs and checkout state machines executing direct sales within WhatsApp." },
      { title: "Multi-Tenant React Dashboard", description: "Clean, role-based dashboard for non-technical users to build campaigns and monitor live chat streams." }
    ],
    architectureFlow: [
      { step: "01", title: "Client Automation Setup", subtitle: "React Dashboard", description: "Client configures automated AI reply rules, product catalogs, and escalation thresholds in the React dashboard.", techTag: "React Dashboard" },
      { step: "02", title: "Meta Webhook Ingestion", subtitle: "Node.js Gateway", description: "Facebook Graph API dispatches real-time webhooks. Gateway validates HMAC-SHA256 signature and returns instant HTTP 200.", techTag: "Node.js Webhook Gateway" },
      { step: "03", title: "AI & Commerce Execution", subtitle: "Async Pipeline", description: "Async queue evaluates intent, queries product catalog, triggers AI reply engine, or escalates low-confidence chats.", techTag: "AI Engine & State Machine" },
      { step: "04", title: "Meta Dispatch & DB Sync", subtitle: "Persistence Layer", description: "Response dispatched back via Meta Cloud API. Message logs and conversion analytics persist to MongoDB.", techTag: "MongoDB & Meta Cloud API" }
    ],
    approach: [
      {
        phase: "API Architecture & Gateway",
        description: "Built and stress-tested the Facebook Graph webhook ingestion engine with signature verification and event queues.",
        duration: "4 weeks",
      },
      {
        phase: "AI Engine & Commerce Flow",
        description: "Implemented contextual reply logic, confidence scoring, and WhatsApp interactive message catalog templates.",
        duration: "4 weeks",
      },
      {
        phase: "Multi-Tenant React Dashboard",
        description: "Designed and constructed the client UI for campaign creation, live conversation takeover, and analytics.",
        duration: "4 weeks",
      },
      {
        phase: "Production Ops & Security Audit",
        description: "Enforced DB middleware tenant isolation, JWT authentication, and automated zero-downtime deployment.",
        duration: "2 weeks",
      },
    ],
    outcomes: [
      "99.9% system uptime maintained continuously across first 90 days post-launch",
      "Zero cross-tenant data isolation incidents in testing or production",
      "Full production system delivered solo in 14 weeks from blank repo to investor launch",
      "Direct investor confidence validation cited by the founding team during funding rounds",
    ],
    clientValueLongTerm: "Oaksol Technologies received a clean, modular technical foundation. The decoupled architecture ensures new payment gateways or AI models can be integrated without touching the core gateway. Written documentation and strict linting enabled seamless developer onboarding without technical debt.",
    futureRoadmap: [
      "Voice AI message transcription & automated voice note responses",
      "Shopify & WooCommerce real-time product catalog auto-sync",
      "A/B testing for automated conversational conversion paths",
      "Sentiment analysis triggering pre-churn human escalation alerts"
    ],
    keyTakeaways: [
      "Webhook-heavy systems require decoupling receipt acknowledgment from heavy processing to avoid retry storms.",
      "Security in multi-tenant SaaS must be enforced at both application code and DB middleware layers.",
      "Building confidence-calibrated AI fallbacks is essential for preserving client trust in B2B automation."
    ],
    faqs: [
      {
        question: "How long does it take to build an enterprise WhatsApp platform like Wavo?",
        answer: "Wavo.digital was delivered in 14 weeks by a single full-stack developer. For custom enterprise SaaS platforms with AI automation, in-chat commerce, and multi-tenant dashboards, a 12–16 week timeline is realistic."
      },
      {
        question: "How do you handle AI reply accuracy and avoid wrong responses?",
        answer: "We implemented a custom confidence scoring engine. Every AI response gets scored; if confidence is below a business client's configured threshold, the message is routed to a human review queue instead of sending an automated reply."
      },
      {
        question: "How is multi-tenant security guaranteed?",
        answer: "Tenant isolation is enforced at three distinct layers: JWT token claims at the API layer, tenant scope validation at the application service layer, and mandatory tenant-id filtering in database middleware."
      },
      {
        question: "What is the typical cost range for building a platform of this scope?",
        answer: "Developing a custom SaaS platform of this complexity (webhook gateway, AI classification, interactive commerce, multi-tenant UI, auth) typically ranges between ₹5–15 lakhs depending on scope depth."
      }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Meta Graph API", "WhatsApp Cloud API", "JWT", "Vercel"],
    testimonial: {
      quote: "TheUnipick took our complex requirements and delivered a production-ready system that impressed our investors. The architecture is rock-solid.",
      author: "Dhruv",
      role: "Founder, Oaksol Technologies",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true,
      companyLink: "https://wavo.digital"
    },
    gallery: ["/projects/wavo.png", "/projects/wavologin.png"],
    seo: {
      primaryKeyword: "WhatsApp marketing platform development",
      secondaryKeywords: ["WhatsApp automation SaaS development", "Meta Graph API developer India", "multi-tenant SaaS architecture"],
      metaTitle: "Building an AI WhatsApp Marketing SaaS | Wavo.digital Case Study",
      metaDescription: "How TheUnipick engineered Wavo.digital — an AI WhatsApp automation & commerce SaaS — solo in 14 weeks with 99.9% uptime."
    }
  },
  "dear-valentine": {
    id: "dear-valentine",
    title: "Dear Valentine",
    client: "Independent SaaS",
    industry: "SaaS · Gifting & Viral Growth",
    role: "Full-Stack Architect & Product Creator",
    timeline: "7 Weeks",
    liveUrl: "https://dearvalentine.vercel.app/",
    overview: "A custom Valentine's story creation SaaS where senders configure daily tasks & rewards, unlock unique access links via payment gateways, and track recipient responses in real-time.",
    tagline: "Customizable Valentine's Story & Daily Task Gifting SaaS — Global reach with viral referral mechanics.",
    heroImage: "/projects/dearvalentinehome.png",
    stats: [
      { label: "Organic Visits", value: "1K+", trend: "100% Organic" },
      { label: "Global Reach", value: "70+", trend: "Countries" },
      { label: "Active Signups", value: "200+", trend: "Zero Ad Spend" },
    ],
    aboutClient: "Dear Valentine was conceived as a viral direct-to-consumer SaaS product targeting global couples during the holiday season. The goal was to empower users to craft romantic 7-day story sequences with customized tasks, daily reward unlocks, and live response tracking.",
    executiveSummary: "Architected and launched a viral gifting SaaS platform with payment-gated link generation, Supabase Realtime response tracking, and global edge delivery, attracting users across 70+ countries with zero paid ad budget.",
    discoveryProcess: "Designed user flows prioritizing instant emotional gratification and frictionless recipient onboarding. Ensured senders could quickly customize days 1–7 while payment webhooks seamlessly unlocked unique recipient access slugs.",
    strategyRationale: "Built on Next.js App Router and Supabase edge backend to ensure sub-100ms global latency and handle viral traffic spikes during peak holiday usage without server management overhead.",
    challenge: {
      description: "Building a viral SaaS product from scratch with zero marketing budget requiring real-time response streaming and payment-gated link security.",
      painPoints: [
        "Multi-story custom task configuration per registered sender",
        "Unique shareable URL generation locked behind instant payment webhooks",
        "Gated recipient execution preventing preview leaks prior to payment",
        "Real-time response streaming from recipient tasks to private sender dashboard"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Preventing unauthorized access to recipient stories before payment completion",
        solution: "Implemented edge middleware authentication verifying cryptographically signed payment tokens prior to rendering story payloads",
        businessBenefit: "100% payment conversion integrity with zero unauthorized access"
      }
    ],
    keyHighlights: [
      { title: "Story Builder & Task Customizer", description: "Interactive customizer for building 7-day romantic reveal sequences." },
      { title: "Payment-Gated Unique Links", description: "Instant unique link generation unlocked via automated checkout webhooks." },
      { title: "Real-Time Response Dashboard", description: "Live WebSockets streaming recipient completed tasks to the sender." }
    ],
    architectureFlow: [
      { step: "01", title: "Story Customization", subtitle: "Sender Portal", description: "Sender builds daily task and reward payloads via Next.js form.", techTag: "Next.js & Supabase" },
      { step: "02", title: "Payment Lock", subtitle: "Gateway Sync", description: "Unique URL generated; access remains gated until payment webhook fires.", techTag: "Payment Webhook" },
      { step: "03", title: "Recipient Unlock", subtitle: "Edge Verification", description: "Recipient opens link; edge middleware verifies active payment status.", techTag: "Edge Auth" },
      { step: "04", title: "Live Response Sync", subtitle: "Realtime DB", description: "Recipient responses stream in real-time to sender dashboard.", techTag: "Supabase Realtime" }
    ],
    approach: [
      { phase: "Product Design", description: "Crafted surprise-and-delight mechanics with daily time locks.", duration: "2 weeks" },
      { phase: "Tech Architecture", description: "Built serverless Next.js + Supabase data pipeline for traffic bursts.", duration: "3 weeks" },
      { phase: "Growth Mechanics", description: "Implemented viral sharing hooks and referral triggers.", duration: "1 week" },
      { phase: "Global Deployment", description: "Optimized multi-region Edge CDN delivery across 70+ countries.", duration: "1 week" }
    ],
    outcomes: [
      "Achieved 1,000+ organic visits within the first month",
      "Successfully launched in 70+ countries with zero paid acquisition cost",
      "200+ active registered accounts created organically",
      "Zero downtime during peak Valentine's Day traffic bursts"
    ],
    clientValueLongTerm: "Created a scalable reusable micro-SaaS codebase supporting future seasonal campaign launches.",
    futureRoadmap: [
      "Custom audio note attachment upload per daily task",
      "Multi-currency local pricing support",
      "Automated WhatsApp notification triggers for senders"
    ],
    keyTakeaways: [
      "Viral hooks integrated directly into core product mechanics beat paid ad spend for D2C micro-SaaS launches."
    ],
    faqs: [
      {
        question: "How does payment gating work for unique links?",
        answer: "When a sender builds a story, a unique UUID token is generated. Edge middleware checks Supabase payment status before granting recipient view access."
      }
    ],
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"],
    testimonial: {
      quote: "The organic growth of Dear Valentine proves that a well-built product with a viral loop can compete with paid marketing.",
      author: "Tarun Singh",
      role: "Lead Developer & Creator",
      image: "/tarunsinghmod.png",
      verified: true
    },
    gallery: ["/projects/dearvalentinehome.png", "/projects/dearvalentinedashboard.png"],
    seo: {
      metaTitle: "Dear Valentine Case Study | Viral Gifting SaaS Platform",
      metaDescription: "How TheUnipick architected Dear Valentine — a viral task gifting SaaS launched across 70+ countries."
    }
  },
  "alumnipp": {
    id: "alumnipp",
    title: "Alumnipp.com",
    client: "Alumni Networking Platform",
    industry: "Platform · Institutional CRM",
    role: "Lead Full-Stack Rescue Engineer",
    timeline: "72 Hours Emergency Turnaround",
    overview: "A Laravel & React Alumni CRM platform codebase rescue executed in 72 hours — fixing failing controller routes, stabilizing database locking, and delivering dynamic automated alumni ID card PDF pipelines for 1,000+ active users.",
    tagline: "Laravel Alumni CRM Codebase Rescue — Saved 1,000+ registered users with 100% data integrity.",
    heroImage: "/projects/alumnipp.png",
    stats: [
      { label: "Users Preserved", value: "1,000+", trend: "Zero Data Lost" },
      { label: "Rescue Speed", value: "72 Hours", trend: "Full Recovery" },
      { label: "Data Integrity", value: "100%", trend: "DB Restored" },
    ],
    aboutClient: "Alumnipp is an alumni networking CRM used by educational institutions to manage graduate verification, broadcast official notices, and generate digital alumni credentials. The platform owner faced severe technical collapse with failing controller routes, database corruption, and crashing user logins under heavy usage.",
    executiveSummary: "Inherited a crashing Laravel + React stack serving 1,000+ active alumni. Executed a comprehensive emergency codebase audit, repaired corrupted relational tables, refactored broken controller pipelines, and deployed an automated PDF ID card queue within 72 hours.",
    discoveryProcess: "Conducted a rapid 24-hour log inspection and query profiler audit to isolate 500-level error tracebacks. Identified race conditions in database transaction locks and unindexed legacy SQL queries during user verification.",
    strategyRationale: "Preserved existing Laravel + React tech stack rather than rewriting from scratch to hit the urgent 72-hour operational window while ensuring zero data loss for 1,000+ active accounts.",
    challenge: {
      description: "Emergency stabilization of a failing production system with live users without causing downtime or record corruption.",
      painPoints: [
        "Failing Laravel controller routes throwing HTTP 500 errors during alumni authentication",
        "Corrupted relational locks causing database table locks during profile updates",
        "Missing background PDF generation queue for institutional alumni ID cards",
        "Strict 72-hour rescue deadline to prevent client institutional churn"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Database corruption in active user verification records",
        solution: "Wrote custom data migration & sanitation scripts normalizing broken foreign key references in MySQL",
        businessBenefit: "Restored 100% of user profiles without losing single registered account"
      }
    ],
    keyHighlights: [
      { title: "Role-Based Admin Controller Pipeline", description: "Multi-tiered permission controllers for admin verification and access control." },
      { title: "Automated Alumni ID Card Generator", description: "Background queue compiling dynamic digital ID PDFs with verification QR codes." },
      { title: "Database Repair & Normalization", description: "Sanitized legacy database tables and added transactional safety locks." }
    ],
    architectureFlow: [
      { step: "01", title: "Alumni Portal Login", subtitle: "React Frontend", description: "Alumni log into React portal to view institutional news and submit details.", techTag: "React & Laravel Auth" },
      { step: "02", title: "Admin RBAC Verification", subtitle: "Laravel Controllers", description: "Admins approve verification queues via refactored permission controllers.", techTag: "Laravel RBAC" },
      { step: "03", title: "PDF ID Queue Generation", subtitle: "Background Worker", description: "System generates PDF ID card with QR code upon verification.", techTag: "Laravel Queue & PDF" },
      { step: "04", title: "Data Storage & Asset Serve", subtitle: "MySQL & S3", description: "Sanitized records persist to MySQL database; credentials saved to S3.", techTag: "MySQL & AWS S3" }
    ],
    approach: [
      { phase: "Emergency Log Audit", description: "Identified root cause failures in Laravel controllers and DB lock failures.", duration: "24 hours" },
      { phase: "Core Backend Refactoring", description: "Refactored broken routes and stabilized React auth context state.", duration: "24 hours" },
      { phase: "Data Sanitization", description: "Repaired corrupted user records and verified relational integrity.", duration: "12 hours" },
      { phase: "Deployment & Verification", description: "Deployed stabilized release with zero user data loss.", duration: "12 hours" }
    ],
    outcomes: [
      "1,000+ active user accounts preserved with 100% data integrity",
      "Full platform stability achieved within 72 hours of intervention",
      "Automated digital ID card pipeline processing hundreds of credentials seamlessly",
      "Restored client trust and institution operational confidence"
    ],
    clientValueLongTerm: "Provided a clean, maintainable Laravel architecture blueprint that allowed internal developers to safely add new feature modules.",
    futureRoadmap: [
      "Push notification integration for institutional event updates",
      "LinkedIn profile sync for automatic alumni job history updates"
    ],
    keyTakeaways: [
      "In rescue scenarios, systematic log analysis and targeted refactoring beat panic rewrites every time."
    ],
    faqs: [
      {
        question: "How did you guarantee zero data loss during a database rescue?",
        answer: "We created isolated database snapshots, ran dry-run data migration scripts in sandbox environments, and validated foreign key constraints before execution."
      }
    ],
    technologies: ["Laravel", "React", "MySQL", "PHP", "AWS S3"],
    testimonial: {
      quote: "The turnaround was incredible. Our platform went from completely broken to rock-solid in just 3 days without losing a single user.",
      author: "Platform Lead",
      role: "Owner, Alumnipp",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: ["/projects/alumnipp.png", "/projects/alumnipp2.png", "/projects/alumnipp3.png"],
    seo: {
      metaTitle: "Alumnipp Case Study | 72-Hour Laravel Codebase Rescue",
      metaDescription: "How TheUnipick rescued Alumnipp — preserving 1,000+ user records and stabilizing a broken Laravel CRM in 72 hours."
    }
  },
  "biryanibabu-website": {
    id: "biryanibabu-website",
    title: "Biryani Babu",
    client: "Biryani Babu Kolkata",
    industry: "Food & Restaurant · Local E-Commerce",
    role: "Frontend Engineer & SEO Architect",
    timeline: "5 Weeks",
    overview: "A highly aesthetic food & QSR showcase website in Kolkata, featuring an indexable digital menu, WebP image performance tuning, and LocalBusiness Schema to dominate local search.",
    tagline: "Kolkata's #1 Biryani QSR — Aesthetic digital menu showcase & Local SEO dominance.",
    heroImage: "/case-studies/biriyanibabu-CggFjvPm.webp",
    stats: [
      { label: "Local Search", value: "#1 Rank", trend: "Top Local SEO" },
      { label: "Online Orders", value: "80+/mo", trend: "+300% Growth" },
      { label: "Mobile Speed", value: "99/100", trend: "PageSpeed" },
    ],
    aboutClient: "Biryani Babu is a popular QSR brand in Kolkata known for signature biryani offerings. Operating in a competitive food market, they needed a digital experience that reflected their rich culinary aesthetics while driving online order inquiries and local foot traffic.",
    executiveSummary: "Engineered a high-speed Vite + React digital menu showcase with structured Restaurant JSON-LD schema, resulting in #1 local Google search ranking and a 300% surge in online order inquiries within 60 days of launch.",
    discoveryProcess: "Analyzed local Kolkata food search intent, identifying that high-intent diners search for 'best biryani near me' and expecting instant visual menu clarity with pricing on mobile devices.",
    strategyRationale: "Utilized Vite and WebP image optimization to deliver high-resolution food imagery while maintaining a 99/100 mobile Google PageSpeed score. Structured schema data directly targeted Google rich snippet displays.",
    challenge: {
      description: "Showcasing rich, appetite-appealing food photography without sacrificing mobile page load speed or local search discoverability.",
      painPoints: [
        "Heavy high-resolution food images slowing down mobile loading times",
        "Absence of indexable digital menu items targeting local search terms",
        "Lack of structured Restaurant & Menu schema markup for Google Search",
        "Friction between browsing food items and placing instant direct orders"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "High-resolution dish photos causing mobile layout lag",
        solution: "Converted assets to progressive WebP format with responsive srcset tags and lazy loading",
        businessBenefit: "Achieved sub-1s initial paint with crisp image clarity on mobile networks"
      }
    ],
    keyHighlights: [
      { title: "Aesthetic Interactive Digital Menu", description: "Ultra-fast WebP food showcase with category filtering and clear pricing." },
      { title: "Restaurant Schema Engine", description: "Enriches search engine results with dish prices, ratings, and location metadata." },
      { title: "High-Converting Order Routing", description: "Direct mobile ordering CTA converting casual visitors into active customers." }
    ],
    architectureFlow: [
      { step: "01", title: "Local Discovery", subtitle: "Search Engine", description: "Diner searches local food; pre-rendered Vite pages deliver location meta tags.", techTag: "Vite & Local Schema" },
      { step: "02", title: "Digital Menu Showcase", subtitle: "React UI", description: "Visitor explores WebP food gallery and interactive category filters.", techTag: "React & Styled Components" },
      { step: "03", title: "Direct Order Gateway", subtitle: "Conversion Pipeline", description: "Customer selects menu items and triggers direct order router.", techTag: "Order Router" },
      { step: "04", title: "Review Schema Sync", subtitle: "Social Proof", description: "Diner reviews sync to maintain top local Google business ranking.", techTag: "Google Business Schema" }
    ],
    approach: [
      { phase: "On-Page Local SEO", description: "Optimized meta titles and headings for Rajarhat and New Town food keywords.", duration: "1 week" },
      { phase: "Menu Architecture", description: "Integrated indexable menu categories with high-res WebP imagery.", duration: "2 weeks" },
      { phase: "Schema Markup", description: "Implemented Restaurant, Menu, and Review JSON-LD structured data.", duration: "1 week" },
      { phase: "Performance Tuning", description: "Optimized scripts and image loading for a 99/100 Mobile PageSpeed score.", duration: "1 week" }
    ],
    outcomes: [
      "#1 Google local search ranking achieved for targeted Kolkata food queries",
      "Online orders increased from ~20/month baseline to 80+ orders/month",
      "99/100 Mobile PageSpeed score with lightning-fast image rendering",
      "Significant increase in direct weekend foot traffic"
    ],
    clientValueLongTerm: "Equipped Biryani Babu with an indexable menu asset that continuously pulls organic local search traffic without recurring ad costs.",
    futureRoadmap: [
      "Online table reservation booking widget",
      "Direct WhatsApp cart payload generator"
    ],
    keyTakeaways: [
      "Combining structured Restaurant JSON-LD schema with sub-second WebP image loading dominates local hospitality search."
    ],
    faqs: [
      {
        question: "How did LocalBusiness schema help Biryani Babu rank #1?",
        answer: "By embedding precise Restaurant and Menu JSON-LD schemas, Google could crawl exact menu item prices, geo-coordinates, and reviews directly for local rich snippets."
      }
    ],
    technologies: ["React", "Vite", "Styled-Components", "TypeScript", "Advanced SEO Schema"],
    testimonial: {
      quote: "The SEO overhaul changed everything. We're now the top result for biryani in Rajarhat, and our online orders grew from 20 to 80+ per month!",
      author: "Rahul Verma",
      role: "Operations Lead, Biryani Babu",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/biriyanibabumenu-CyXOLQob.webp",
      "/case-studies/biryanibabufoodmenu-DdVwKquE.webp",
      "/case-studies/biriyanibabufooter-CNp1aHZH.webp"
    ],
    seo: {
      primaryKeyword: "best biryani in Rajarhat Kolkata",
      metaTitle: "Biryani Babu Case Study | #1 Local SEO & Digital Menu Showcase",
      metaDescription: "How TheUnipick built an aesthetic digital menu site for Biryani Babu, achieving #1 local search rank and 300% order growth."
    }
  },
  "blackart-tattoo-studio": {
    id: "blackart-tattoo-studio",
    title: "BlackArt Tattoo Studio",
    client: "Artist Nirmal",
    industry: "Retail & Services · Custom Art",
    role: "UI/UX Architect & Full-Stack Developer",
    timeline: "6 Weeks",
    overview: "A premium tattoo studio web platform focused on high-engagement visual UI, artist portfolio showcase, mobile booking consultation, and a custom Admin Blog Management Portal.",
    tagline: "High-Engagement Tattoo Studio Experience — Premium visual UI & Custom Admin Blog Portal.",
    heroImage: "/case-studies/blackarttattoo-CLnulL0F.webp",
    stats: [
      { label: "Search Rank", value: "Top 3", trend: "Local SEO" },
      { label: "Page Speed", value: "98/100", trend: "Mobile First" },
      { label: "Inquiries", value: "+310%", trend: "3.1x Leads" },
    ],
    aboutClient: "BlackArt Tattoo Studio, founded by Artist Nirmal in Udaipur, provides high-end custom tattoo artistry to domestic and international clients. They needed an online showcase communicating surgical-grade hygiene standards, artist skill, and automated consultation booking.",
    executiveSummary: "Built a high-impact dark-mode Next.js studio platform featuring an admin CMS for blog publishing and LocalBusiness schema optimization, resulting in a 310% increase in consultation leads.",
    discoveryProcess: "Identified that high-value tattoo clients evaluate portfolios based on hygiene trust, visual artistry details, and ease of mobile consultation requests.",
    strategyRationale: "Selected Next.js with SSG and Tailwind CSS to combine dark-mode aesthetic sophistication with lightning-fast image loading and dynamic booking consultation flows.",
    challenge: {
      description: "Creating a visually striking dark UI that highlights artwork while providing studio management tools and driving appointment inquiries.",
      painPoints: [
        "Exhibiting high-resolution artwork without slowing down mobile site performance",
        "Lack of dynamic CMS for studio owner to write tattoo care blogs",
        "Friction in capturing client tattoo placement and reference image details",
        "Low initial local search visibility in competitive tourist search results"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Capturing client reference photos and placement details during consultation",
        solution: "Built a step-by-step interactive consultation funnel with image uploads and placement selectors",
        businessBenefit: "Increased qualified consultation submissions by 310%"
      }
    ],
    keyHighlights: [
      { title: "High-Engagement Visual UI", description: "Immersive dark aesthetics showcasing artwork, hygiene credentials, and artist portfolios." },
      { title: "Custom Admin Blog CMS", description: "Dedicated admin portal empowering studio owners to write and publish blog articles." },
      { title: "High-Converting Consultation Funnel", description: "Mobile-optimized booking flow capturing project details and placement ideas." }
    ],
    architectureFlow: [
      { step: "01", title: "Visual UI Entry", subtitle: "Next.js UI", description: "Visitor lands on dark UI featuring high-res artwork showcase and hygiene credentials.", techTag: "Next.js & Tailwind" },
      { step: "02", title: "Consultation Funnel", subtitle: "Lead Pipeline", description: "Client fills out consultation form detailing tattoo size, placement, and reference ideas.", techTag: "Form Pipeline" },
      { step: "03", title: "Admin Blog CMS", subtitle: "Content Portal", description: "Studio owner writes care guides and tattoo articles via secure admin portal.", techTag: "Admin CMS" },
      { step: "04", title: "Local SEO Index", subtitle: "LocalBusiness Schema", description: "Articles and studio metadata auto-index to drive search visibility in Udaipur.", techTag: "LocalBusiness Schema" }
    ],
    approach: [
      { phase: "Brand Identity", description: "Defined dark visual voice emphasizing precision safety and custom artistry.", duration: "1 week" },
      { phase: "UX & Portfolio Design", description: "Created artist layouts with high-impact visuals and consultation CTAs.", duration: "2 weeks" },
      { phase: "SEO & Admin CMS", description: "Implemented LocalBusiness schema and custom admin blog editor.", duration: "2 weeks" },
      { phase: "Testing & Launch", description: "Deployed on Vercel with real-time performance monitoring.", duration: "1 week" }
    ],
    outcomes: [
      "Top 3 local search ranking achieved for Udaipur tattoo studio queries",
      "310% increase in monthly appointment consultation inquiries",
      "98/100 Mobile PageSpeed rating with smooth dark-mode transitions",
      "Empowered artist to self-publish tattoo care blogs via admin CMS"
    ],
    clientValueLongTerm: "Gave the studio complete content autonomy via custom blog management while driving international tourist bookings.",
    futureRoadmap: [
      "Online deposit payment integration via Stripe",
      "3D tattoo placement preview tool"
    ],
    keyTakeaways: [
      "Dark-mode luxury aesthetics paired with structured consultation forms significantly increase service inquiry rates."
    ],
    faqs: [
      {
        question: "Can non-technical studio owners update the blog CMS easily?",
        answer: "Yes, we built an intuitive markdown editor interface allowing the owner to post care guides without technical assistance."
      }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Local SEO"],
    testimonial: {
      quote: "My digital presence now perfectly reflects the quality of work we do at the studio. The increase in international clients has been phenomenal.",
      author: "Artist Nirmal",
      role: "Founder, BlackArt Tattoos",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/blackarttattoo-CLnulL0F.webp",
      "/case-studies/blackarttattoo2-ClIUgKkV.webp",
      "/case-studies/blackarttattoo3-CnHNr91H.webp"
    ],
    seo: {
      metaTitle: "BlackArt Tattoo Studio Case Study | Custom Web & CMS Build",
      metaDescription: "How TheUnipick designed a high-engagement dark UI and custom CMS for BlackArt Tattoo, boosting inquiries by 310%."
    }
  },
  "alexink-tattoo-website": {
    id: "alexink-tattoo-website",
    title: "Alexink Tattoo Studio",
    client: "Artishtic Expressions",
    industry: "Arts & Lifestyle · Tattoo Studio",
    role: "Full-Stack Web Developer & UX Designer",
    timeline: "8 Weeks",
    overview: "A bold, modern tattoo studio website featuring interactive portfolio filtering, fast 1.2s page load speeds, and dynamic online deposit booking.",
    tagline: "A bold digital website presence that boosted studio bookings by 240%.",
    heroImage: "/case-studies/TattooWebsite-BCwhkFr1.webp",
    stats: [
      { label: "Bookings", value: "+240%", trend: "2.4x Growth" },
      { label: "Load Speed", value: "1.2s", trend: "Sub-2s Paint" },
      { label: "Mobile Bounce", value: "-70%", trend: "Higher Retention" },
    ],
    aboutClient: "Alexink Tattoo Studio is a high-volume tattoo collective. They suffered from an outdated website with slow 8-second load times that lost prospective clients to local competitors.",
    executiveSummary: "Redesigned and rebuilt Alexink's web platform in React and Tailwind CSS, reducing load speed from 8.0s to 1.2s and integrating Stripe deposit processing to boost studio bookings by 240%.",
    discoveryProcess: "Analyzed mobile user drop-off points, discovering that slow portfolio rendering and lack of deposit reservation options led users to abandon booking attempts.",
    strategyRationale: "Built a responsive client-side filtered portfolio with pre-processed image assets and Stripe Checkout integration for locking calendar appointments.",
    challenge: {
      description: "Overhauling a slow legacy website to provide instant portfolio filtering and online deposit checkout.",
      painPoints: [
        "Legacy 8s load speed driving away mobile visitors",
        "Lack of interactive portfolio filtering by tattoo style or artist",
        "Absence of online deposit payment system resulting in unconfirmed appointments"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Unconfirmed appointment no-shows causing revenue loss",
        solution: "Integrated Stripe Checkout API requiring session deposit payments upon slot selection",
        businessBenefit: "Reduced appointment no-shows by over 85%"
      }
    ],
    keyHighlights: [
      { title: "Filtered Artist Portfolio Showcase", description: "Interactive gallery letting visitors filter tattoos by style, artist, and placement." },
      { title: "High-Performance React Engine", description: "Cut page load times from 8.0s to 1.2s with WebP image optimization and code splitting." },
      { title: "Stripe Deposit Checkout Gateway", description: "Secures appointment slots with online deposit payments." }
    ],
    architectureFlow: [
      { step: "01", title: "Style Filtering", subtitle: "React UI", description: "Client filters tattoo artwork by category and artist portfolio.", techTag: "React & Tailwind" },
      { step: "02", title: "Consultation Form", subtitle: "Form Pipeline", description: "Client selects artist, uploads reference photos, and picks available dates.", techTag: "Form Engine" },
      { step: "03", title: "Stripe Deposit", subtitle: "Payment Gateway", description: "Client confirms booking by paying deposit via Stripe Checkout.", techTag: "Stripe API" },
      { step: "04", title: "Calendar Lock", subtitle: "PostgreSQL Sync", description: "Appointment details persist to database, locking calendar slot.", techTag: "Node.js & Postgres" }
    ],
    approach: [
      { phase: "User Journey Discovery", description: "Analyzed drop-off rates and visual client expectations.", duration: "2 weeks" },
      { phase: "UI Design & Prototyping", description: "Created high-contrast modern tattoo layout prototypes.", duration: "3 weeks" },
      { phase: "React & Stripe Engineering", description: "Built responsive frontend with Stripe payment integration.", duration: "2 weeks" },
      { phase: "Performance Tuning", description: "Optimized asset loading for 1.2s page speed.", duration: "1 week" }
    ],
    outcomes: [
      "Page load speed drastically improved from 8.0s down to 1.2s",
      "Online appointment bookings grew by 240% within 90 days",
      "Mobile bounce rate decreased by 70%",
      "Client engagement session times tripled"
    ],
    clientValueLongTerm: "Automated deposit collections saved dozens of administrative hours weekly while ensuring revenue certainty.",
    futureRoadmap: [
      "Automated SMS appointment reminders via Twilio",
      "Digital consent waiver sign-off form"
    ],
    keyTakeaways: [
      "Cutting page load time from 8s to 1.2s directly impacts service booking conversion rates."
    ],
    faqs: [
      {
        question: "How does the Stripe deposit checkout work?",
        answer: "Clients choose a date slot and pay a deposit via Stripe. The backend validates the payment webhook before confirming the calendar booking."
      }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The new site captures who we are perfectly. Clients now find us easily, and bookings have skyrocketed. The whole process was smooth and professional.",
      author: "Sarah Mitchell",
      role: "Founder, Alexink Tattoo Studio",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/TattooWebsite1-DWaV4DZc.webp",
      "/case-studies/TatooWebsitec-BOa8FhS7.webp"
    ],
    seo: {
      metaTitle: "Alexink Tattoo Studio Case Study | 240% Booking Growth",
      metaDescription: "How TheUnipick cut load times from 8s to 1.2s and integrated Stripe deposits to boost Alexink bookings by 240%."
    }
  },
  "inkmaster-tattoo-website": {
    id: "inkmaster-tattoo-website",
    title: "Inkmaster Tattoo Studio",
    client: "Inkmaster Tattoo",
    industry: "Art & Lifestyle · Creative Services",
    role: "Next.js Web Developer & UX Designer",
    timeline: "2 Weeks Fast Execution",
    overview: "A fast, artist-focused studio website featuring real-time booking inquiries, Cloudinary asset delivery, and responsive mobile navigation delivered on a rapid 2-week turnaround.",
    tagline: "Artist-focused website redesign that increased online studio bookings by 4X.",
    heroImage: "/case-studies/TattooWebsite2-D0LnzfOo.webp",
    stats: [
      { label: "Core Vitals", value: "96%", trend: "Top Performance" },
      { label: "Turnaround", value: "2 Weeks", trend: "Rapid Execution" },
      { label: "Bookings", value: "4X", trend: "Quadrupled Growth" },
    ],
    aboutClient: "Inkmaster Tattoo required a rapid digital overhaul to replace an ineffective site before peak season, needing an aesthetic portfolio showcase built within 14 days.",
    executiveSummary: "Delivered a pre-rendered Next.js + Cloudinary portfolio website in 14 days, resulting in a 4X increase in online booking inquiries.",
    discoveryProcess: "Executed a streamlined rapid discovery phase identifying essential client touchpoints: artist portfolio navigation, pricing guide, and instant inquiry submission.",
    strategyRationale: "Used Next.js Static Site Generation (SSG) and Cloudinary image transformation APIs to auto-format portfolio images for mobile devices dynamically.",
    challenge: {
      description: "Delivering a production-grade artist showcase on a tight 2-week deadline without compromising mobile rendering speed.",
      painPoints: [
        "Strict 14-day execution window",
        "Large uncompressed portfolio images causing mobile browser lag",
        "Manual consultation request tracking leading to missed leads"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Serving hundreds of high-res artwork photos rapidly on mobile",
        solution: "Integrated Cloudinary CDN with automatic WebP format conversion and dynamic resizing",
        businessBenefit: "Delivered 96% Core Web Vitals score on mobile devices"
      }
    ],
    keyHighlights: [
      { title: "Cloudinary Media CDN Integration", description: "Delivers optimized high-res portfolio images automatically scaled for mobile." },
      { title: "Next.js SSG Architecture", description: "Pre-renders static portfolio pages for sub-second load times." },
      { title: "Real-Time Booking Ingestion", description: "Captures user consultation forms and alerts studio managers instantly." }
    ],
    architectureFlow: [
      { step: "01", title: "Portfolio Discovery", subtitle: "Next.js SSG", description: "Visitors browse artist galleries rendered via Next.js SSG and Cloudinary.", techTag: "Next.js & Cloudinary" },
      { step: "02", title: "Session Request", subtitle: "React Form", description: "User submits consultation details and custom design ideas.", techTag: "React Form Component" },
      { step: "03", title: "API Processing", subtitle: "Serverless Route", description: "Next.js route validates inputs and persists lead to database.", techTag: "Next.js API Route" },
      { step: "04", title: "Admin Alert", subtitle: "MongoDB & Email", description: "Studio owner receives instant lead notification email.", techTag: "MongoDB & Alert" }
    ],
    approach: [
      { phase: "Rapid UX Research", description: "Audited competitor sites and defined core user booking paths.", duration: "2 days" },
      { phase: "UI & Layout Design", description: "Crafted mobile-first artist portfolio layouts.", duration: "3 days" },
      { phase: "Next.js & CDN Execution", description: "Built SSG site with Cloudinary integration.", duration: "7 days" },
      { phase: "Testing & Launch", description: "Optimized mobile vitals and launched production site.", duration: "2 days" }
    ],
    outcomes: [
      "Production launch completed in 14 days",
      "Online studio booking inquiries increased fourfold (4X)",
      "96% Core Web Vitals performance score on mobile devices",
      "Average user session duration increased by 180%"
    ],
    clientValueLongTerm: "Delivered a low-maintenance static site architecture with minimal hosting overhead.",
    futureRoadmap: [
      "Virtual flash tattoo design picker",
      "Direct artist availability calendar sync"
    ],
    keyTakeaways: [
      "Combining Next.js SSG with Cloudinary image optimization allows delivering fast high-image sites under aggressive deadlines."
    ],
    faqs: [
      {
        question: "How did Cloudinary improve image load times?",
        answer: "Cloudinary automatically compresses, formats to WebP, and resizes photos based on the user's specific mobile device viewport."
      }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "MongoDB", "Cloudinary"],
    testimonial: {
      quote: "We finally have a site that represents our art. Clients now comment on how easy it is to browse and book. It's been a complete transformation.",
      author: "Aditya Ranjan",
      role: "Owner, Inkmaster Tattoo",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/TattooWebsite2a-zznwtKwN.webp",
      "/case-studies/TattooWebsite2b-sUHHJZOt.webp",
      "/case-studies/TattooWebsite2c-BeHlvRw3.webp"
    ],
    seo: {
      metaTitle: "Inkmaster Tattoo Case Study | Fast 2-Week Next.js Launch",
      metaDescription: "How TheUnipick built and deployed Inkmaster Tattoo's portfolio website in 2 weeks, driving 4X booking growth."
    }
  },
  "cozycafe-branding-website": {
    id: "cozycafe-branding-website",
    title: "CozyCafe Branding & Web Platform",
    client: "CozyCafe",
    industry: "Food & Restaurant · Hospitality",
    role: "Brand Strategist & Frontend Developer",
    timeline: "7 Weeks",
    overview: "A warm, authentic cafe website featuring integrated online ordering, Firebase realtime order management, and Google Maps API location integration.",
    tagline: "Warm, authentic cafe website & branding — Tripled local search visibility & online sales.",
    heroImage: "/case-studies/CozyCafe-CBA3aU9L.webp",
    stats: [
      { label: "Foot Traffic", value: "+220%", trend: "In-Store Growth" },
      { label: "Online Sales", value: "+340%", trend: "3.4x Growth" },
      { label: "Revenue", value: "+60%", trend: "Monthly Sales" },
    ],
    aboutClient: "CozyCafe is an artisanal coffee shop seeking to bridge local foot traffic with digital pickup ordering for neighborhood commuters.",
    executiveSummary: "Designed brand identity and developed a web platform with Firebase Realtime kitchen tablet order sync, tripling local search traffic and driving 340% online order growth.",
    discoveryProcess: "Mapped the morning commuter journey, identifying that fast online order pickup options drive repeat customer retention.",
    strategyRationale: "Used Next.js for SSR local search discovery combined with Firebase Realtime Database for zero-latency kitchen tablet order dispatches.",
    challenge: {
      description: "Modernizing a local cafe's brand while building a real-time online order pipeline for kitchen staff.",
      painPoints: [
        "Inconsistent brand presence across physical and digital touchpoints",
        "No digital pickup ordering system for morning commuters",
        "Low local Google Maps search visibility"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "Transmitting web orders instantly to kitchen staff without expensive POS hardware",
        solution: "Built a web-based kitchen tablet app syncing with Firebase Realtime Database triggers",
        businessBenefit: "Reduced average pickup preparation lead time to under 8 minutes"
      }
    ],
    keyHighlights: [
      { title: "Warm Aesthetic Branding & Website", description: "Custom typography, warm palette, and clear digital menu presentation." },
      { title: "Firebase Realtime Online Ordering", description: "Streamlined checkout persisting to kitchen store tablets in real-time." },
      { title: "Google Maps API Integration", description: "Interactive map integration driving local foot traffic." }
    ],
    architectureFlow: [
      { step: "01", title: "Geo Discovery", subtitle: "Local SEO", description: "Customer searches local cafe; site delivers location schema and Google Maps.", techTag: "Next.js & Google Maps" },
      { step: "02", title: "Menu Selection", subtitle: "React UI", description: "Customer explores coffee menu with dietary tags.", techTag: "Tailwind & React" },
      { step: "03", title: "Order Checkout", subtitle: "Stripe API", description: "Customer selects pickup time and pays via Stripe.", techTag: "Stripe Payment API" },
      { step: "04", title: "Kitchen Sync", subtitle: "Firebase Realtime", description: "Order dispatches to Firebase Realtime DB, alerting kitchen staff.", techTag: "Firebase Realtime DB" }
    ],
    approach: [
      { phase: "Brand Strategy", description: "Defined warm aesthetic identity and typography.", duration: "2 weeks" },
      { phase: "Web & UX Design", description: "Designed responsive menu and ordering interface.", duration: "2 weeks" },
      { phase: "Firebase & Stripe Dev", description: "Engineered real-time order dispatch and payment checkout.", duration: "2 weeks" },
      { phase: "Launch & Local SEO", description: "Optimized Google Business Profile and launched store ordering.", duration: "1 week" }
    ],
    outcomes: [
      "Local search visibility tripled within 60 days of launch",
      "Online pickup orders grew by 340%",
      "Monthly cafe revenue increased by 60%",
      "200%+ increase in loyalty signups"
    ],
    clientValueLongTerm: "Created an independent digital ordering asset avoiding high third-party aggregator marketplace commission fees.",
    futureRoadmap: [
      "Customer digital loyalty rewards stamp card",
      "Automated morning coffee subscription billing"
    ],
    keyTakeaways: [
      "Real-time order synchronization via web technologies empowers local businesses to own customer relationships."
    ],
    faqs: [
      {
        question: "How do kitchen staff receive online orders?",
        answer: "An iPad in the kitchen runs our web app connected to Firebase Realtime DB, ringing an alert when a new order arrives."
      }
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase", "Stripe", "Google Maps API"],
    testimonial: {
      quote: "Our cafe finally feels like us — warm, welcoming, and professional. Customers tell us they found us online, which never happened before!",
      author: "Rahul Verma",
      role: "Owner, CozyCafe",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/Cozycafea-CWs9pQjz.webp",
      "/case-studies/CozyCafeb-BY2ZsLmu.webp",
      "/case-studies/CozyCafec-_5AIYppe.webp"
    ],
    seo: {
      metaTitle: "CozyCafe Case Study | Real-Time Ordering & Local Branding",
      metaDescription: "How TheUnipick created CozyCafe's web ordering platform with Firebase, tripling local search traffic and driving 340% sales growth."
    }
  },
  "creative-agency": {
    id: "creative-agency",
    title: "TechNova Enterprise Portal",
    client: "TechNova Systems",
    industry: "Enterprise SaaS · Cloud Infrastructure",
    role: "Lead Full-Stack Web Architect",
    timeline: "12 Weeks",
    overview: "A multi-tenant enterprise marketing portal and SaaS showcase platform built for next-generation tech startups featuring Redis caching and microservice gateway integration.",
    tagline: "High-performance enterprise SaaS showcase & onboarding portal driving 320% client acquisition.",
    heroImage: "/case-studies/innovation-D_EP4z-1.webp",
    stats: [
      { label: "Onboarding Speed", value: "3 Days", trend: "Down from 14d" },
      { label: "System Uptime", value: "99.9%", trend: "AWS Cloud" },
      { label: "Client Growth", value: "+320%", trend: "3.2x Platform" },
    ],
    aboutClient: "TechNova Systems delivers B2B cloud infrastructure services. They needed an enterprise-grade showcase site and onboarding gateway capable of handling heavy concurrent multi-tenant client requests.",
    executiveSummary: "Architected a Node.js microservices gateway with Redis caching and interactive product demo flows, reducing user onboarding time from 14 days to 3 days while maintaining 99.9% availability.",
    discoveryProcess: "Evaluated legacy onboarding friction points, discovering that enterprise clients dropped off due to multi-step manual provisioning.",
    strategyRationale: "Engineered an API Gateway pattern with Redis caching for instant dashboard previews and automated tenant provisioning.",
    challenge: {
      description: "Replacing a slow legacy portal with a microservices-backed onboarding platform.",
      painPoints: [
        "Complex 14-day manual onboarding flow causing lead friction",
        "Limited portal scalability under multi-tenant load spikes",
        "Fragmented analytics and product demo presentation"
      ],
    },
    challengesAndSolutions: [
      {
        challenge: "High latency when fetching complex client infrastructure analytics",
        solution: "Implemented Redis in-memory caching layer with automated cache invalidation hooks",
        businessBenefit: "Reduced dashboard data load latency by 80%"
      }
    ],
    keyHighlights: [
      { title: "Modular Product Showcase", description: "Interactive components highlighting platform features and live architectural demos." },
      { title: "Microservices API Gateway", description: "Node.js and Python microservices with Redis caching for analytics." },
      { title: "Automated Onboarding Engine", description: "Streamlined sign-up reducing onboarding friction from 14 days down to 3 days." }
    ],
    architectureFlow: [
      { step: "01", title: "Enterprise Showcase", subtitle: "React UI", description: "Client explores SaaS capabilities and interactive demo flows.", techTag: "React & TypeScript" },
      { step: "02", title: "API Gateway Provisioning", subtitle: "Node.js Gateway", description: "Gateway orchestrates tenant provisioning and authentication.", techTag: "Node.js API Gateway" },
      { step: "03", title: "Microservice Logic", subtitle: "Redis & Python", description: "Microservices process real-time analytics data feeds.", techTag: "Redis & Python Service" },
      { step: "04", title: "AWS Auto-scaling", subtitle: "Cloud Delivery", description: "Infrastructure dispatches via auto-scaling clusters with 99.9% uptime.", techTag: "AWS & Docker" }
    ],
    approach: [
      { phase: "Architecture Audit", description: "Evaluated infrastructure bottlenecks and designed microservice gateway.", duration: "4 weeks" },
      { phase: "UI/UX Redesign", description: "Created modular enterprise dashboard interfaces.", duration: "3 weeks" },
      { phase: "Gateway Development", description: "Implemented Node.js and Python microservices with Redis.", duration: "3 weeks" },
      { phase: "Launch & Scaling", description: "Set up CI/CD pipeline and auto-scaling cloud infrastructure.", duration: "2 weeks" }
    ],
    outcomes: [
      "Onboarding cycle time reduced from 14 days to 3 days",
      "Sustained 99.9% platform availability across cloud microservices",
      "320% increase in active platform client accounts",
      "55% reduction in technical support inquiries"
    ],
    clientValueLongTerm: "Delivered a decoupled microservices blueprint capable of handling 10X client account volume.",
    futureRoadmap: [
      "Automated compliance audit report generator",
      "Multi-region data residency selector"
    ],
    keyTakeaways: [
      "Decoupling marketing frontend presentation from backend microservices accelerates user acquisition and technical scalability."
    ],
    faqs: [
      {
        question: "How does the Redis caching layer improve portal performance?",
        answer: "Redis caches aggregated analytics queries in-memory, avoiding expensive database joins on every user dashboard visit."
      }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Redis", "Python", "AWS"],
    testimonial: {
      quote: "The upgrade completely changed how our platform performs. Our clients now experience faster service, and we've scaled smoothly without downtime.",
      author: "Amit Patel",
      role: "CTO, TechNova Systems",
      image: "/case-studies/testimonial-Cp3MHniS.gif",
      verified: true
    },
    gallery: [
      "/case-studies/innovationa-CHi1-TrY.webp",
      "/case-studies/innovationb-CbxODil5.webp",
      "/case-studies/innovationc-B0Jj_VJh.webp"
    ],
    seo: {
      metaTitle: "TechNova Enterprise Portal Case Study | Cloud Architecture",
      metaDescription: "How TheUnipick built a microservices portal for TechNova Systems, cutting onboarding from 14 days to 3 days."
    }
  }
};
