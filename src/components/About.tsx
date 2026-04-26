"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Heart, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { label: 'Next.js Deployments', value: '40+', icon: <Zap size={20} /> },
  { label: 'System Uptime', value: '99.9%', icon: <ShieldCheck size={20} /> },
  { label: 'Engineering Years', value: '8+', icon: <Calendar size={20} /> },
  { label: 'Founder Satisfaction', value: '100%', icon: <Heart size={20} /> },
];

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--surface)', position: 'relative' }} className="noise-overlay">
      <div className="about-inner">
        {/* Image column */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ position: 'relative' }}>
          <div className="about-img-wrapper">
            <img src="/about_engineering.png" alt="Engineering Excellence"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.4))' }} />
          </div>
          {/* Floating Badge */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="about-badge">
            <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.8, marginBottom: '0.4rem', letterSpacing: '0.2rem' }}>ESTABLISHED</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Space Grotesk', lineHeight: 1 }}>2017</div>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.4rem', marginBottom: '1.5rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '30px', height: '2px', background: 'var(--primary)', flexShrink: 0 }} />
            OUR PHILOSOPHY
          </div>
          <h2 style={{ marginBottom: '2rem' }}>
            We build for <span className="text-gradient">Long-term Resilience.</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: 'clamp(1rem,1.5vw,1.2rem)', marginBottom: '3rem', lineHeight: 1.8 }}>
            TheUnipick was founded on a simple principle: complexity is the enemy of scale.
            We specialize in stripping away the bloat and building lean, modular systems
            that don't just ship—they endure. Our engineering culture is obsessed with
            maintainability, performance, and the "quiet" confidence of a stable production environment.
          </p>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                className="card-premium" style={{ padding: 'clamp(1.25rem, 2vw, 2rem) clamp(1.5rem, 2.5vw, 2.5rem)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem', opacity: 0.8 }}>{stat.icon}</div>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, fontFamily: 'Space Grotesk', color: 'var(--on-surface)', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>{stat.label.toUpperCase()}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          padding: 0 1.25rem;
        }
        .about-img-wrapper {
          border-radius: 2rem;
          overflow: hidden;
          height: clamp(300px, 50vw, 500px);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--outline-strong);
          position: relative;
        }
        .about-badge {
          position: absolute;
          bottom: 2rem;
          right: -0.5rem;
          background: var(--primary);
          color: white;
          padding: 1.75rem 2rem;
          border-radius: 1.75rem;
          box-shadow: var(--shadow-glow);
          z-index: 10;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .about-inner { padding: 0 1.75rem; }
          .about-badge { right: -1rem; bottom: 3rem; padding: 2rem 2.5rem; }
        }
        @media (min-width: 1024px) {
          .about-inner {
            grid-template-columns: 1fr 1.2fr;
            gap: 8rem;
            padding: 0 2.5rem;
          }
          .about-img-wrapper {
            height: 650px;
            border-radius: 3rem;
          }
          .about-badge { right: -2rem; bottom: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
