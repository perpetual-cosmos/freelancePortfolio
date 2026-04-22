import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "FinEdge Analytics",
    category: "FINTECH • REACT • AI",
    desc: "A real-time financial analytics dashboard for leading investment firms. Built with React, Node.js, and custom AI models.",
    stats: [
      { label: "Active Users", value: "58K+" },
      { label: "Accuracy", value: "99.9%" }
    ],
    color: "#6300e2"
  },
  {
    title: "LuxeCart Global",
    category: "E-COMMERCE • CMS • JAVA",
    desc: "Multi-vendor e-commerce platform handling 100K+ daily transactions with real-time inventory management.",
    stats: [
      { label: "Annual GMV", value: "$12M" },
      { label: "Processing", value: "12ms" }
    ],
    color: "#d946ef"
  },
  {
    title: "MediSync Cloud",
    category: "HEALTHCARE • SECURITY • CLOUD",
    desc: "HIPAA-compliant healthcare platform with AI-assisted diagnostics and global telemedicine infrastructure.",
    stats: [
      { label: "Hospitals", value: "120+" },
      { label: "Compliance", value: "100%" }
    ],
    color: "#7c3aed"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10rem' }}>
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }}
            >
              // RECENT DEPLOYMENTS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '4.5rem', lineHeight: 1 }}
            >
              Building the <span className="text-gradient">Next</span> <br /> Generation of Digital.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--on-surface-variant)', letterSpacing: '0.1em' }}
          >
            PROJECTS // 03
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15rem' }}>
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
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
                  whileHover={{ scale: 0.98 }}
                  className="card-premium" 
                  style={{
                    height: '550px',
                    background: `linear-gradient(135deg, ${p.color}08, ${p.color}02)`,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid var(--outline-variant)'
                  }}
                >
                  <div style={{
                    width: '85%',
                    height: '85%',
                    background: `linear-gradient(135deg, ${p.color}, #7c3aed)`,
                    borderRadius: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    fontFamily: 'Space Grotesk',
                    boxShadow: `0 40px 100px ${p.color}22`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <span style={{ position: 'relative', zIndex: 1 }}>{p.title}</span>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem' }}>
                      <ExternalLink size={32} opacity={0.5} />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '32px', height: '2px', background: p.color }}></div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 900, color: p.color, letterSpacing: '0.15em' }}>
                    {p.category}
                  </div>
                </div>
                <h3 style={{ fontSize: '3.2rem', marginBottom: '2.5rem', lineHeight: 1.1 }}>{p.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', marginBottom: '4rem', lineHeight: 1.8 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', marginBottom: '4rem' }}>
                  {p.stats.map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                      <div style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--on-surface)', fontFamily: 'Space Grotesk' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ gap: '1.5rem' }}
                  style={{ background: 'none', border: 'none', color: p.color, fontWeight: 900, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', letterSpacing: '0.05em' }}
                >
                  VIEW CASE STUDY <ArrowRight size={20} />
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

