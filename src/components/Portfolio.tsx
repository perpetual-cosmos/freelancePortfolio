"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "FinEdge Analytics",
    category: "FINTECH • AI • DASHBOARD",
    desc: "A real-time financial analytics dashboard for investment firms, featuring predictive modeling and high-throughput data streams.",
    stats: [{ label: "Accuracy", value: "99.9%" }, { label: "Users", value: "58K+" }],
    image: "/finedge_mockup.png",
    color: "#6366f1"
  },
  {
    title: "LuxeCart Global",
    category: "E-COMMERCE • LUXURY • MOBILE",
    desc: "A high-fidelity mobile commerce experience for luxury brands, focusing on ultra-smooth transitions and zero-friction checkout.",
    stats: [{ label: "GMV Growth", value: "140%" }, { label: "Latency", value: "12ms" }],
    image: "/luxecart_mockup.png",
    color: "#d946ef"
  },
  {
    title: "MediSync Cloud",
    category: "HEALTHCARE • SECURITY • SaaS",
    desc: "HIPAA-compliant patient management system with AI-assisted diagnostics and a secure, minimalist interface.",
    stats: [{ label: "Hospitals", value: "120+" }, { label: "Security", value: "Level 4" }],
    image: "/medisync_mockup.png",
    color: "#06b6d4"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.3rem', marginBottom: '1.25rem' }}>
              // RECENT DEPLOYMENTS
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              Building the <span className="text-gradient">Next Generation</span> of Digital.
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }}
            className="portfolio-count" style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--on-surface-variant)', letterSpacing: '0.2rem', fontFamily: 'Space Grotesk' }}>
            PROJECTS // 03
          </motion.div>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(5rem, 10vw, 14rem)' }}>
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} className="project-row">

              {/* Image */}
              <div className="project-img-col" style={{ order: 1 }}>
                <motion.div whileHover={{ scale: 0.98 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--outline)', background: 'var(--surface-muted)', position: 'relative', maxHeight: 'clamp(300px, 60vh, 550px)' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.color}20, transparent)`, pointerEvents: 'none' }} />
                </motion.div>
                {/* Decorative glow */}
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: 'absolute', top: '-5%', right: '-3%', width: '80px', height: '80px', background: p.color, opacity: 0.12, filter: 'blur(35px)', borderRadius: '50%' }} />
              </div>

              {/* Text */}
              <div className="project-text-col" style={{ order: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div style={{ width: '36px', height: '2px', background: p.color, flexShrink: 0 }} />
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: p.color, letterSpacing: '0.12rem' }}>{p.category}</div>
                </div>
                <h3 style={{ marginBottom: '1.75rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>{p.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: '2.5rem', lineHeight: 1.8 }}>{p.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
                  {p.stats.map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--on-surface-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{s.label}</div>
                      <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'var(--on-surface)', fontFamily: 'Space Grotesk' }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                <motion.button whileHover={{ gap: '1.25rem' }} className="btn-secondary"
                  style={{ border: 'none', background: 'none', padding: 0, color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  EXPLORE CASE STUDY <ChevronRight size={17} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }
        .portfolio-count { display: none; }
        .project-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .project-img-col { position: relative; }
        .project-text-col {}

        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
        }
        @media (min-width: 768px) {
          .portfolio-header { flex-direction: row; justify-content: space-between; align-items: flex-end; margin-bottom: 7rem; }
          .portfolio-count { display: block; }
        }
        @media (min-width: 1024px) {
          .project-row {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
          }
          .project-img-col {
            max-width: 620px;
            margin: 0 auto;
          }
          /* Alternate layout */
          .project-row:nth-child(even) .project-img-col { order: 2; }
          .project-row:nth-child(even) .project-text-col { order: 1; }
          .project-row:nth-child(even) { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1280px) {
          .project-row { gap: 8rem; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
