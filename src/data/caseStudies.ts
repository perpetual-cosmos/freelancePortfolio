export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  tagline: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  challenge: {
    description: string;
    painPoints: string[];
  };
  approach: {
    phase: string;
    description: string;
    duration: string;
  }[];
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
    tagline: "Time-Locked Valentine Gifting SaaS — Global reach with zero ad spend.",
    heroImage: "/projects/dearvalentine.webp",
    stats: [
      { label: "Organic Visits", value: "1K+" },
      { label: "Countries", value: "70+" },
      { label: "Signups", value: "200+" },
    ],
    challenge: {
      description: "Building a viral SaaS product from scratch with zero marketing budget. The goal was to create a platform where users could send time-locked digital gifts for Valentine's Day, ensuring high deliverability and engagement across different time zones.",
      painPoints: [
        "Need for a viral growth loop without paid ads",
        "Managing time-locked reveals across global time zones",
        "Ensuring high performance under sudden traffic spikes",
        "Implementing a seamless user onboarding flow"
      ],
    },
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
      image: "/about_engineering.png",
    },
    gallery: ["/projects/dearvalentine.webp"],
  },
  "wavo-digital": {
    id: "wavo-digital",
    title: "Wavo.digital",
    client: "Oaksol Technologies",
    industry: "SaaS · AI Automation",
    tagline: "WhatsApp & Voice AI Automation Dashboard for a funded startup.",
    heroImage: "/projects/wavo.webp",
    stats: [
      { label: "Build Type", value: "From 0 → Production" },
      { label: "Team Size", value: "Sole Developer" },
      { label: "Scalability", value: "Enterprise-Ready" },
    ],
    challenge: {
      description: "A funded startup needed an enterprise-grade dashboard to manage WhatsApp and Voice AI automations. The challenge was to build a secure, scalable, and highly interactive interface for complex communication workflows.",
      painPoints: [
        "Real-time data visualization of communication logs",
        "Complex integration with WhatsApp and Voice AI APIs",
        "Multi-tenant architecture requirements",
        "Need for a premium, startup-friendly UI/UX"
      ],
    },
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
    gallery: ["/projects/wavo.webp"],
  },
  "alumnipp": {
    id: "alumnipp",
    title: "Alumnipp.com",
    client: "Alumni Networking Platform",
    industry: "Platform · Networking",
    tagline: "Production Codebase Rescue — Saving 1,000+ users from a broken system.",
    heroImage: "/projects/alumnipp.webp",
    stats: [
      { label: "Users Saved", value: "1,000+" },
      { label: "Turnaround", value: "72 Hours" },
      { label: "Data Integrity", value: "100%" },
    ],
    challenge: {
      description: "Inherited a completely broken Laravel + React production codebase that was failing to serve over 1,000 registered users. Critical bugs, database inconsistencies, and architectural flaws were threatening the platform's survival.",
      painPoints: [
        "High user churn due to system crashes",
        "Corrupted database records and networking logic",
        "Extremely messy and undocumented legacy code",
        "Immediate pressure to restore service without data loss"
      ],
    },
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
    gallery: ["/projects/alumnipp.webp"],
  },
  "biryanibabu-website": {
    id: "biryanibabu-website",
    title: "Biryani Babu",
    client: "Biryani Babu",
    industry: "Food & Restaurant",
    tagline: "Kolkata's 1st Biryani QSR - Local SEO Dominance",
    heroImage: "/case-studies/biriyanibabu-CggFjvPm.webp",
    stats: [
      { label: "Search Ranking", value: "#1 Local" },
      { label: "Online Orders", value: "+300%" },
      { label: "Mobile Conversion", value: "+180%" },
    ],
    challenge: {
      description: "Biryani Babu needed to transform their website into the #1 ranked online destination for biryani and kebab lovers in Kolkata, attracting high-intent local customers and converting them into foot traffic and online orders.",
      painPoints: [
        "Lacked static, powerful titles and indexable menu content",
        "High-quality cinematic images were slowing down mobile load times",
        "Missing critical Restaurant and Menu JSON-LD Schema markup",
        "No natural integration of local 'near me' keywords"
      ],
    },
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
    tagline: "Local SEO dominance and high-converting studio presence",
    heroImage: "/case-studies/blackarttattoo-CLnulL0F.webp",
    stats: [
      { label: "Search Visibility", value: "Top 3" },
      { label: "Page Speed", value: "98/100" },
      { label: "Client Inquiries", value: "+310%" },
    ],
    challenge: {
      description: "BlackArt Tattoos needed a digital presence that matched their international hygiene standards and artistic excellence. The goal was to dominate local search in Udaipur and convert tourists into clients.",
      painPoints: [
        "Need for premium, trust-building visual identity",
        "High competition in local tattoo service search",
        "Requirement to showcase hygiene and safety protocols",
        "Mobile-first audience needing quick booking access"
      ],
    },
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
    tagline: "A bold digital presence that boosted bookings by 240%",
    heroImage: "/case-studies/TattooWebsite-BCwhkFr1.webp",
    stats: [
      { label: "Conversion Rate", value: "+240%" },
      { label: "Page Load Time", value: "1.2s" },
      { label: "Mobile Traffic", value: "+180%" },
    ],
    challenge: {
      description: "Alexink, a boutique tattoo studio, had a dated website that didn’t reflect the artistry or professionalism of their brand. Slow load times and poor mobile usability meant most visitors left before booking a session.",
      painPoints: [
        "Outdated design that didn’t represent the studio’s creative quality",
        "8+ second load times leading to high bounce rates",
        "No online booking or portfolio filtering",
        "Inconsistent experience across devices"
      ],
    },
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
    tagline: "Redesigned UX that turned visitors into loyal clients",
    heroImage: "/case-studies/TattooWebsite2-D0LnzfOo.webp",
    stats: [
      { label: "Website Performance", value: "96%" },
      { label: "Average Session Time", value: "+180%" },
      { label: "Booking increased", value: "4X" },
    ],
    challenge: {
      description: "Inkmaster Tattoo had a strong reputation offline but lacked an online identity. They do not have any site which reflect their artistry, and failed to convert visitors into bookings.",
      painPoints: [
        "Strict demand for a visually rich, artist-focused design",
        "No reference were provided by the client ",
        "Low budget and tight timeline",
        "SEO visibility"
      ],
    },
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
    tagline: "From local cafe to community favorite through authentic branding",
    heroImage: "/case-studies/CozyCafe-CBA3aU9L.webp",
    stats: [
      { label: "Foot Traffic", value: "+220%" },
      { label: "Online Orders", value: "+340%" },
      { label: "Social Engagement", value: "+180%" },
    ],
    challenge: {
      description: "CozyCafe, a small family-owned coffee shop, struggled to attract new customers despite great products. Their old branding felt inconsistent and their website wasn’t optimized for local search or online ordering.",
      painPoints: [
        "Outdated logo and color palette",
        "Unclear menu presentation",
        "No online ordering or delivery integration",
        "Low visibility in Google search results"
      ],
    },
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
      quote: "Our cafe finally feels like us — warm, welcoming, and professional. Customers tell us they found us online, which never happened before. We couldn’t be happier.",
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
    tagline: "A scalable SaaS platform built for next-generation startups",
    heroImage: "/case-studies/innovation-D_EP4z-1.webp",
    stats: [
      { label: "Deployment Speed", value: "4x Faster" },
      { label: "Uptime", value: "99.9%" },
      { label: "Customer Growth", value: "+320%" },
    ],
    challenge: {
      description: "TechNova Systems wanted to modernize their legacy SaaS infrastructure to better support startups launching data-driven products. Their existing system lacked scalability, intuitive UX, and analytics clarity.",
      painPoints: [
        "Complex onboarding process",
        "Limited scalability under heavy load",
        "Fragmented data visualization tools",
        "High customer churn rate"
      ],
    },
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
