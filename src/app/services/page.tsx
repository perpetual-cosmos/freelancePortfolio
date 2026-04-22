"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const services = [
  {
    id: '01',
    title: 'CMS Development',
    icon: '🌐',
    color: '#3b82f6',
    problem: 'Your content team shouldn\'t need a developer to publish a blog post. And your developers shouldn\'t spend hours maintaining a rigid, outdated CMS that slows everyone down.',
    solution: 'Custom, flexible content management systems tailored to how your team actually works — not how a cookie-cutter template assumes you work.',
    includes: [
      'WordPress (Custom): Fully custom-built WordPress sites with bespoke plugin development.',
      'Strapi (Headless CMS): API-first content delivery for modern architectures.',
      'Headless CMS Architecture: Decouple your content from your presentation layer.',
      'CMS Migration: Move from legacy systems without losing content or SEO rankings.',
      'Content Modeling: Design content structures that scale.'
    ],
    outcomes: [
      'Content teams that don\'t need developer support for publishing',
      'Faster page loads via headless delivery',
      'One content source powering multiple channels',
      'SEO-safe migration with zero ranking drops'
    ],
    timeline: '1–4 weeks',
    pricing: '₹20,000'
  },
  {
    id: '02',
    title: 'React & Frontend Development',
    icon: '⚛️',
    color: '#14b8a6',
    problem: 'Slow UIs lose customers. A sluggish dashboard makes your SaaS product feel unreliable. An outdated frontend signals to users that your product isn\'t worth trusting.',
    solution: 'Modern, performant, pixel-sharp user interfaces that users love to work with — built with React, Next.js, and TypeScript as the foundation.',
    includes: [
      'React Application Development: SPAs, dashboards, and data-heavy UIs.',
      'Next.js Web Applications: SSR, SSG, and ISR for performance and SEO.',
      'TypeScript Migration: Migrate existing JavaScript for better scaling.',
      'UI/Component Library Development: Reusable, documented component systems.',
      'Performance Optimization: Core Web Vitals improvement and lazy loading.',
      'Frontend Architecture: Establishing scalable folder structures and patterns.'
    ],
    outcomes: [
      'Lighthouse Performance scores above 90',
      'Sub-2-second page loads',
      'Zero accessibility red flags (WCAG 2.1 AA)',
      'Component library that cuts future development time in half'
    ],
    stack: 'React 18+, Next.js 14+, TypeScript, Tailwind CSS, Zustand/Redux, React Query, Framer Motion',
    timeline: '2–8 weeks',
    pricing: '₹30,000'
  },
  {
    id: '03',
    title: 'Node.js Backend Development',
    icon: '🟢',
    color: '#22c55e',
    problem: 'Your frontend is beautiful. But if the backend is slow, insecure, or architecturally fragile — none of it matters. Most backend failures happen because of poor API design or lack of validation.',
    solution: 'Production-grade backend systems that scale, stay secure, and are maintainable by the next developer who inherits the codebase.',
    includes: [
      'REST API Development: Clean, documented, and versioned APIs.',
      'GraphQL API Development: Flexible query APIs for complex data.',
      'Real-Time Applications: WebSocket-powered features like chat and notifications.',
      'NestJS Application Architecture: Enterprise-structured Node.js apps.',
      'Microservices: Break monoliths into independently deployable services.',
      'Authentication & Authorization: JWT, OAuth 2.0, RBAC, and session management.',
      'Third-Party Integrations: Payment gateways, messaging, and storage.'
    ],
    outcomes: [
      'APIs handling thousands of requests per second',
      'Zero critical security vulnerabilities at launch',
      'Full documentation for your engineering team',
      '< 200ms average API response time'
    ],
    stack: 'Node.js, Express.js, NestJS, TypeScript, MongoDB, PostgreSQL, Redis, JWT, Docker',
    timeline: '3–8 weeks',
    pricing: '₹40,000'
  },
  {
    id: '04',
    title: 'Spring Boot / Java Development',
    icon: '☕',
    color: '#f59e0b',
    problem: 'Enterprise systems need enterprise-grade engineering. For high-throughput enterprise systems handling financial or sensitive data, Java and Spring Boot offer a battle-tested foundation.',
    solution: 'Robust, high-performance backend systems and APIs on the Java ecosystem — built to run at scale, survive audits, and last for years.',
    includes: [
      'Spring Boot REST APIs: Enterprise-grade API development with layered architecture.',
      'Microservices Architecture: Distributed systems with Spring Cloud.',
      'Spring Security Implementation: OAuth2, JWT, LDAP, and RBAC.',
      'Database Integration: JPA/Hibernate ORM and migrations with Flyway.',
      'Spring Batch: Large-scale data processing and ETL workflows.',
      'Legacy Java Modernization: Migrate existing Java EE to modern Spring Boot.',
      'Performance & Scalability: JVM tuning and caching strategies.'
    ],
    outcomes: [
      'Systems handling 10,000+ concurrent users',
      '99.9% uptime architecture',
      'Fully auditable and compliant codebases',
      'Clean handoff with Javadoc and architecture documentation'
    ],
    stack: 'Java 17+, Spring Boot 3.x, Spring Cloud, JPA/Hibernate, PostgreSQL, Redis, Docker',
    timeline: '4–12 weeks',
    pricing: '₹60,000'
  },
  {
    id: '05',
    title: 'AI & ML Solutions',
    icon: '🧠',
    color: '#a855f7',
    problem: 'AI is no longer optional. But most AI projects fail because of poor problem definition, bad data pipelines, or an over-engineered approach.',
    solution: 'Practical, business-focused AI solutions — not AI for AI\'s sake. We identify what can realistically be automated or enhanced.',
    includes: [
      'Custom AI Chatbots & Assistants: Powered by LLMs (GPT-4, Claude, Gemini) with RAG.',
      'NLP Solutions: Text classification, sentiment analysis, and document processing.',
      'AI Integration: Integrate LLM capabilities using LangChain or LlamaIndex.',
      'Recommendation Systems: Collaborative filtering for e-commerce and SaaS.',
      'Predictive Analytics: Forecasting, churn prediction, and anomaly detection.',
      'Computer Vision: Image classification and document OCR.',
      'AI Automation Workflows: Intelligent pipelines that reduce human intervention.'
    ],
    outcomes: [
      'Production-ready AI features integrated into your existing product',
      'Clear ROI (time saved, error rate reduction)',
      'Explainable AI outputs (not black-box decisions)',
      'Data privacy maintained with private API options'
    ],
    stack: 'Python, LangChain, LlamaIndex, OpenAI API, HuggingFace, scikit-learn, FastAPI, Pinecone',
    timeline: '3–10 weeks',
    pricing: 'Project-based'
  },
  {
    id: '06',
    title: 'Mobile Development',
    icon: '📱',
    color: '#f43f5e',
    problem: 'Native development for both iOS and Android doubles the cost and timeline. Cross-platform done right eliminates that trade-off without sacrificing performance.',
    solution: 'High-quality cross-platform mobile applications using React Native and Flutter — delivering near-native performance and UX with a shared codebase.',
    includes: [
      'React Native Development: Cross-platform iOS and Android apps.',
      'Flutter Development: Visually rich, high-performance apps.',
      'Mobile Backend Integration: Connect to existing APIs and auth systems.',
      'App Store Deployment: Full submission process for Apple and Google.',
      'Offline-First Architecture: Apps that work without connectivity.',
      'Push Notifications & Deep Linking: FCM, scheduling, and deep link routing.'
    ],
    outcomes: [
      'Single codebase running on iOS and Android',
      'App store approval without rejection delays',
      'Smooth 60fps performance on mid-range devices',
      '30-day post-launch monitoring included'
    ],
    stack: 'React Native, Flutter, Dart, Expo, Firebase, REST/GraphQL APIs',
    timeline: '6–14 weeks',
    pricing: '₹80,000'
  },
  {
    id: '07',
    title: 'Data Engineering',
    icon: '📊',
    color: '#3b82f6',
    problem: 'Business data scattered across silos is noise, not intelligence. The companies that win can ask questions of their data and get answers in seconds.',
    solution: 'End-to-end data infrastructure — from ingestion to transformation to visualization — that turns raw data into business decisions.',
    includes: [
      'ETL/ELT Pipelines: Extract, transform, and load data into warehouses.',
      'Data Warehousing: Cloud data warehouses on BigQuery, Snowflake, or Redshift.',
      'Analytics Dashboards: Custom BI dashboards using Metabase or React + D3.js.',
      'Real-Time Data Pipelines: Streaming ingestion with Kafka or Kinesis.',
      'Business Intelligence Platforms: Tools for non-technical stakeholders.',
      'Data Modeling: Star/snowflake schemas and dbt for transformation logic.'
    ],
    outcomes: [
      'Single source of truth for business metrics',
      'Reports that update automatically without manual work',
      'Business teams that can self-serve data insights',
      'ML-ready data infrastructure for future AI projects'
    ],
    stack: 'Python, Apache Airflow, dbt, PostgreSQL, BigQuery, Metabase, Kafka',
    timeline: '3–8 weeks',
    pricing: 'Project-based'
  },
  {
    id: '08',
    title: 'E-Commerce Solutions',
    icon: '🛒',
    color: '#ec4899',
    problem: 'Generic e-commerce templates convert poorly. They look like every other store, load slowly on mobile, and have checkout flows that lose customers.',
    solution: 'Conversion-optimized e-commerce platforms — from custom Shopify builds to fully bespoke commerce applications.',
    includes: [
      'Custom Shopify Development: Theme development and liquid programming.',
      'Headless Commerce: Decoupled storefronts for maximum performance.',
      'Custom E-Commerce Platforms: Built with Next.js + Node.js + PostgreSQL.',
      'Payment Integration: Razorpay, Stripe, PayPal, UPI, BNPL.',
      'Inventory & Order Management: Custom systems and status tracking.',
      'Performance & CRO: Checkout flow and product page optimization.'
    ],
    outcomes: [
      'Mobile checkout completion rate improvement',
      'Sub-2-second product page loads',
      'Abandoned cart recovery flows',
      'Scalable catalogue handling 10,000+ SKUs'
    ],
    stack: 'Shopify, Next.js, Medusa.js, Node.js, PostgreSQL, Razorpay, Stripe',
    timeline: '3–8 weeks',
    pricing: '₹35,000'
  },
  {
    id: '09',
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: '#64748b',
    problem: 'Most early-stage products run on servers set up manually. Professional infrastructure is the foundation that lets your team move fast without breaking things.',
    solution: 'Modern, automated, observable cloud infrastructure — so deployments take minutes instead of hours.',
    includes: [
      'AWS Infrastructure Setup: VPC, EC2/ECS, S3, CloudFront, RDS.',
      'GCP Infrastructure: Cloud Run, GKE, Cloud SQL, Cloud Storage.',
      'Docker & Containerization: Dockerize applications for consistency.',
      'Kubernetes (K8s): Container orchestration for applications at scale.',
      'CI/CD Pipeline Setup: GitHub Actions, GitLab CI, or CircleCI.',
      'Infrastructure as Code: Terraform for reproducible infrastructure.',
      'Monitoring & Alerting: Prometheus + Grafana, Datadog, or CloudWatch.'
    ],
    outcomes: [
      'Deployments that take minutes, not hours',
      'Zero-downtime releases via rolling updates',
      'Mean Time to Recovery (MTTR) under 15 minutes',
      'Infrastructure costs reduced by 30–50% on optimization'
    ],
    stack: 'AWS, GCP, Docker, Kubernetes, Terraform, GitHub Actions, Prometheus',
    timeline: '1–4 weeks',
    pricing: 'Project-based'
  }
];

export default function ServicesPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <Navbar />
      
      {/* Header Section */}
      <section style={{ 
        paddingTop: '12rem', 
        paddingBottom: '6rem', 
        background: 'var(--gradient-mesh)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)' }}>
            Full-Spectrum <span className="text-gradient">Development Services</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
            Nine service lines. One accountable studio. We cover the complete technology stack — so your product gets built by people who understand how all the pieces connect.
          </p>
        </div>
      </section>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: '300px 1fr', 
        gap: '4rem', 
        padding: '4rem 2rem' 
      }}>
        {/* Sticky Sidebar */}
        <aside style={{ 
          position: 'sticky', 
          top: '8rem', 
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }} className="desktop-sidebar">
          {services.map((s) => (
            <a 
              key={s.id} 
              href={`#service-${s.id}`}
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'var(--surface-container-low)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--on-surface-variant)';
              }}
            >
              <span style={{ opacity: 0.5 }}>{s.id}</span> {s.title}
            </a>
          ))}
        </aside>

        {/* Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {services.map((s) => (
            <section 
              key={s.id} 
              id={`service-${s.id}`} 
              className="card-premium"
              style={{ 
                padding: '4rem', 
                scrollMarginTop: '10rem',
                background: 'white'
              }}
            >
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--surface-container-low)', 
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: s.color
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.1em' }}>SERVICE {s.id}</div>
                  <h2 style={{ fontSize: '2.5rem', color: 'var(--on-surface)', marginTop: '0.25rem' }}>{s.title}</h2>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>The Problem</h3>
                    <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{s.problem}</p>
                  </div>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>What We Build</h3>
                    <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{s.solution}</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Key Outcomes</h3>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--on-surface-variant)' }}>
                      {s.outcomes.map((o, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{o}</li>)}
                    </ul>
                  </div>
                </div>

                <div style={{ 
                  background: 'var(--surface-container-low)', 
                  padding: '2.5rem', 
                  borderRadius: '1.5rem',
                  height: 'fit-content'
                }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Service Details</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>INCLUDES</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {s.includes.map((inc, i) => (
                          <div key={i} style={{ fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--primary)' }}>•</span>
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {s.stack && (
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TECH STACK</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--on-surface)' }}>{s.stack}</div>
                      </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--outline-variant)' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.05em', marginBottom: '0.25rem' }}>TIMELINE</div>
                        <div style={{ fontWeight: 700 }}>{s.timeline}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5, letterSpacing: '0.05em', marginBottom: '0.25rem' }}>STARTING FROM</div>
                        <div style={{ fontWeight: 700 }}>{s.pricing}</div>
                      </div>
                    </div>
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                      Get a Quote for {s.title.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <Contact />
      <Footer />

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-sidebar { display: none !important; }
          div[style*="grid-template-columns: 300px 1fr"] { grid-template-columns: 1fr !important; }
          section[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
