"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    "/hero_premium_dashboard.png",
    "/hero_infrastructure_1776542449505.png",
    "/hero.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <section className="hero-section noise-overlay">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '-10%', right: '-5%', width: 'clamp(300px,50vw,800px)', height: 'clamp(300px,50vw,800px)', background: 'var(--primary)', filter: 'blur(140px)', borderRadius: '50%' }} />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 'clamp(200px,40vw,600px)', height: 'clamp(200px,40vw,600px)', background: 'var(--secondary)', filter: 'blur(120px)', borderRadius: '50%' }} />
      </div>

      <div className="hero-inner">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="hero-text-col">
          <motion.div variants={itemVariants} className="hero-badge">
            <Sparkles size={16} className="tech-text" />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>AVAILABLE FOR Q3 PROJECTS</span>
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Engineering <span className="text-gradient">Digital Depth</span> <br className="hero-br" /> for Modern Founders.
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-desc">
            We build high-performance software systems that don't just work—they scale. From specialized Next.js interfaces to complex AI-infused backends, we turn ambition into production-ready reality.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta-row">
            <button className="btn-primary">View Portfolio <ArrowRight size={20} /></button>
            <button className="btn-secondary">Technical Stack</button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass hero-stats-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 'clamp(1.5rem, 4vw, 4rem)',
              padding: '1.75rem 2.5rem',
              borderRadius: '2rem',
              width: 'fit-content',
              border: '1px solid var(--outline-strong)'
            }}>
            {[{ label: 'Products Shipped', value: '50+', sub: 'Last 24 months' },
            { label: 'Uptime Focus', value: '99.9%', sub: 'SLA Standard' },
            { label: 'CSAT Score', value: '4.9/5', sub: 'Founder Reviews' }
            ].map((stat, idx) => (
              <div key={idx} className="hero-stat-item" style={{ textAlign: 'center', minWidth: 'fit-content' }}>
                <div style={{ color: 'var(--on-surface)', fontWeight: 800, fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', marginBottom: '0.2rem', fontFamily: 'Space Grotesk' }}>{stat.value}</div>
                <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{stat.label.toUpperCase()}</div>
                <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.7rem', fontWeight: 600 }}>{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-col"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
          style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '600px', marginLeft: 'auto' }}>
          <div className="hero-img-wrapper" style={{ boxShadow: '0 40px 80px -20px rgba(99, 0, 226, 0.15)' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={images[currentImg]}
                alt="Premium Software Infrastructure"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </AnimatePresence>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(225deg,rgba(255,255,255,0.15) 0%,transparent 60%)', pointerEvents: 'none' }} />
          </div>

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass hero-chip"
            style={{ position: 'absolute', top: '8%', left: '-12%', zIndex: 2 }}>
            <div className="hero-chip-icon">100</div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface)' }}>Core Web Vitals</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-muted)', fontWeight: 600 }}>Performance Optimized</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-dark hero-chip"
            style={{ position: 'absolute', bottom: '12%', right: '-10%', zIndex: 2, flexDirection: 'column', alignItems: 'flex-start', gap: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', flexShrink: 0 }} />
              <span style={{ fontSize: '0.65rem', opacity: 0.8, fontWeight: 800, letterSpacing: '0.08em' }}>SYSTEM_STATUS: STABLE</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--tech-teal)', fontFamily: 'monospace', fontWeight: 700 }}>v2.4.0_production</div>
          </motion.div>

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '140%', height: '140%', background: 'radial-gradient(circle,rgba(99,0,226,0.15) 0%,transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 5rem;
          background: var(--background);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .hero-text-col { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(99,0,226,0.05);
          border: 1px solid var(--outline);
          margin-bottom: 1.5rem;
        }
        .hero-desc {
          color: var(--on-surface-variant);
          margin: 1.5rem auto 2.5rem;
          max-width: 580px;
          line-height: 1.8;
          font-weight: 500;
          font-size: 1.15rem;
        }
        .hero-cta-row {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .hero-stats-container {
          overflow-x: auto;
          scrollbar-width: none;
        }
        .hero-stats-container::-webkit-scrollbar { display: none; }
        
        .hero-img-wrapper {
          position: relative;
          z-index: 1;
          border-radius: 2.5rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.8);
          aspect-ratio: 16/10;
          background: rgba(0,0,0,0.02);
        }
        .hero-chip {
          display: flex;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-radius: 1.5rem;
          box-shadow: var(--shadow-lg);
          white-space: nowrap;
          gap: 1rem;
          border: 1px solid var(--outline-strong);
        }
        .hero-chip-icon {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(45,212,191,0.1);
          border: 2px solid var(--tech-teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 900; color: var(--tech-teal);
          flex-shrink: 0;
        }
        .hero-br { display: none; }
        
        @media (min-width: 1024px) {
          .hero-section { padding-top: 10rem; padding-bottom: 8rem; }
          .hero-inner { grid-template-columns: 1.3fr 0.7fr; gap: 6rem; padding: 0 5rem; }
          .hero-text-col { text-align: left; align-items: flex-start; }
          .hero-desc { margin-left: 0; margin-right: 0; text-align: left; }
          .hero-cta-row { justify-content: flex-start; }
          .hero-img-wrapper { border-radius: 3.5rem; transform: perspective(1200px) rotateY(-8deg) rotateX(4deg); }
          .hero-br { display: block; }
        }

        @media (max-width: 1023px) {
          .hero-chip { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;



