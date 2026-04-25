"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Code2, Server, Brain, 
  Smartphone, BarChart3, Cloud,
  ArrowRight, Sparkles, Zap, ShieldCheck
} from 'lucide-react';

const services = [
  { 
    id: '01', 
    title: 'Next.js & Frontend', 
    desc: 'Performance-first React applications with server-side rendering, edge caching, and a focus on Core Web Vitals.', 
    icon: <Code2 />, 
    color: '#6366f1',
    size: 'large'
  },
  { 
    id: '02', 
    title: 'Node.js Systems', 
    desc: 'Scalable event-driven architectures and robust API layers.', 
    icon: <Server />, 
    color: '#10b981',
    size: 'small'
  },
  { 
    id: '03', 
    title: 'AI Engineering', 
    desc: 'Integrating LLMs, RAG systems, and custom automation workflows.', 
    icon: <Brain />, 
    color: '#8b5cf6',
    size: 'small'
  },
  { 
    id: '04', 
    title: 'Cloud Infrastructure', 
    desc: 'Automated AWS/GCP deployments with zero-downtime CI/CD pipelines.', 
    icon: <Cloud />, 
    color: '#64748b',
    size: 'medium'
  },
  { 
    id: '05', 
    title: 'Product Strategy', 
    desc: 'Strategic consulting for MVPs, helping founders avoid technical debt.', 
    icon: <BarChart3 />, 
    color: '#3b82f6',
    size: 'medium'
  },
];

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--surface-muted)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem', padding: '0 2rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.4rem', marginBottom: '1.5rem' }}
          >
            // OUR ENGINEERING CORE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Specialized Stacks for <br /> <span className="text-gradient">Ambitious Products</span>
          </motion.h2>
        </div>

        <div className="bento-grid">
          {services.map((s, idx) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bento-card ${s.size}`}
            >
              <div className="card-content">
                <div className="icon-box" style={{ color: s.color, background: `${s.color}10` }}>
                  {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                </div>
                
                <div className="text-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.4 }}>{s.id}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{s.title}</h3>
                  </div>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {s.desc}
                  </p>
                </div>

                <a href={`/services#${s.id}`} className="service-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
              
              {/* Decorative background element */}
              <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${s.color}15, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 350px);
          gap: 1.5rem;
          padding: 0 2rem;
        }

        .bento-card {
          background: var(--surface);
          border-radius: var(--radius-xl);
          border: 1px solid var(--outline);
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .bento-card:hover {
          transform: translateY(-5px);
          border-color: var(--outline-strong);
          box-shadow: var(--shadow-lg);
        }

        .card-content {
          position: relative;
          z-index: 2;
          padding: 3rem;
          height: 100%;
          display: flex;
          flexDirection: column;
          justifyContent: space-between;
        }

        .icon-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justifyContent: center;
          margin-bottom: 2rem;
        }

        .service-link {
          color: var(--primary);
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .service-link:hover {
          gap: 0.75rem;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .bento-card:hover .card-glow {
          opacity: 1;
        }

        /* Bento Sizes */
        .large { grid-column: span 2; grid-row: span 2; }
        .medium { grid-column: span 2; }
        .small { grid-column: span 1; }

        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .large, .medium, .small { grid-column: span 1; grid-row: span 1; }
          .bento-card { height: 400px; }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-card { height: auto; min-height: 350px; }
        }
      `}</style>
    </section>
  );
};

export default Services;
