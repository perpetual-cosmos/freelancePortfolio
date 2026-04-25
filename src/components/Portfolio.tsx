"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "FinEdge Analytics",
    category: "FINTECH • AI • DASHBOARD",
    desc: "A real-time financial analytics dashboard for investment firms, featuring predictive modeling and high-throughput data streams.",
    stats: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Users", value: "58K+" }
    ],
    image: "/finedge_mockup.png",
    color: "#6366f1"
  },
  {
    title: "LuxeCart Global",
    category: "E-COMMERCE • LUXURY • MOBILE",
    desc: "A high-fidelity mobile commerce experience for luxury brands, focusing on ultra-smooth transitions and zero-friction checkout.",
    stats: [
      { label: "GMV Growth", value: "140%" },
      { label: "Latency", value: "12ms" }
    ],
    image: "/luxecart_mockup.png",
    color: "#d946ef"
  },
  {
    title: "MediSync Cloud",
    category: "HEALTHCARE • SECURITY • SaaS",
    desc: "HIPAA-compliant patient management system with AI-assisted diagnostics and a secure, minimalist interface.",
    stats: [
      { label: "Hospitals", value: "120+" },
      { label: "Security", value: "Level 4" }
    ],
    image: "/medisync_mockup.png",
    color: "#06b6d4"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12rem' }}>
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}
            >
              // RECENT DEPLOYMENTS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Building the <span className="text-gradient">Next</span> <br /> Generation of Digital.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--on-surface-variant)', letterSpacing: '0.2rem', fontFamily: 'Space Grotesk' }}
          >
            PROJECTS // 03
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18rem' }}>
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: '8rem',
                alignItems: 'center'
              }}
            >
              <div style={{
                order: i % 2 === 0 ? 1 : 2,
                position: 'relative'
              }}>
                <motion.div 
                  whileHover={{ scale: 0.98, rotate: i % 2 === 0 ? -1 : 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderRadius: '2.5rem',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--outline)',
                    background: 'var(--surface-muted)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, ${p.color}20, transparent)`,
                    pointerEvents: 'none'
                  }} />
                </motion.div>
                
                {/* Decorative floating element */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    top: '-5%',
                    [i % 2 === 0 ? 'right' : 'left']: '-5%',
                    width: '100px',
                    height: '100px',
                    background: p.color,
                    opacity: 0.1,
                    filter: 'blur(40px)',
                    borderRadius: '50%'
                  }}
                />
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
                  <div style={{ width: '40px', height: '2px', background: p.color }}></div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 900, color: p.color, letterSpacing: '0.15rem' }}>
                    {p.category}
                  </div>
                </div>
                
                <h3 style={{ marginBottom: '2.5rem' }}>{p.title}</h3>
                
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: '4rem', lineHeight: 1.8 }}>
                  {p.desc}
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', marginBottom: '4rem' }}>
                  {p.stats.map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{s.label}</div>
                      <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--on-surface)', fontFamily: 'Space Grotesk' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  whileHover={{ gap: '1.25rem' }}
                  className="btn-secondary"
                  style={{ border: 'none', background: 'none', padding: 0, color: 'var(--primary)', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
                >
                  EXPLORE CASE STUDY <ChevronRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
