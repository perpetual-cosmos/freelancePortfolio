"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section style={{
      paddingTop: '14rem',
      paddingBottom: '10rem',
      background: 'var(--background)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }} className="noise-overlay">
      
      {/* Dynamic Background Glows */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'var(--primary)', filter: 'blur(140px)', borderRadius: '50%' }}
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '600px', height: '600px', background: 'var(--secondary)', filter: 'blur(120px)', borderRadius: '50%' }}
        />
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '6rem',
        alignItems: 'center',
        padding: '0 2.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ y: y2, opacity }}
        >
          <motion.div variants={itemVariants} style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: '0.5rem 1rem', 
            borderRadius: 'var(--radius-full)', 
            background: 'rgba(99, 0, 226, 0.05)', 
            border: '1px solid var(--outline)',
            marginBottom: '2rem'
          }}>
            <Sparkles size={16} className="tech-text" />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.05em' }}>AVAILABLE FOR Q3 PROJECTS</span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Engineering <span className="text-gradient">Digital Depth</span> <br />
            for Modern Founders.
          </motion.h1>

          <motion.p variants={itemVariants} style={{
            color: 'var(--on-surface-variant)',
            marginTop: '2.5rem',
            marginBottom: '4rem',
            maxWidth: '600px',
            lineHeight: 1.7,
            fontWeight: 500
          }}>
            We build high-performance software systems that don't just work—they scale. 
            From specialized Next.js interfaces to complex AI-infused backends, we turn 
            ambition into production-ready reality.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginBottom: '6rem' }}>
            <button className="btn-primary">
              View Portfolio <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Technical Stack</button>
          </motion.div>

          <motion.div variants={itemVariants} className="glass" style={{
            display: 'flex',
            gap: '4rem',
            padding: '2.5rem 3.5rem',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--outline-strong)',
            width: 'fit-content'
          }}>
            {[
              { label: 'Products Shipped', value: '50+', sub: 'Last 24 months' },
              { label: 'Uptime Focus', value: '99.9%', sub: 'SLA Standard' },
              { label: 'CSAT Score', value: '4.9/5', sub: 'Founder Reviews' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ color: 'var(--on-surface)', fontWeight: 800, fontSize: '2rem', marginBottom: '0.25rem', fontFamily: 'Space Grotesk' }}>{stat.value}</div>
                <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{stat.label.toUpperCase()}</div>
                <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.75rem', fontWeight: 600 }}>{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ position: 'relative', y: y1, scale }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
        >
          {/* Main Visual Component */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '3rem',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
          }}>
            <img
              src="/hero_premium_dashboard.png"
              alt="Premium Software Infrastructure"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(225deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}></div>
          </div>

          {/* Floating Performance Chip */}
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass"
            style={{
              position: 'absolute',
              top: '10%',
              left: '-12%',
              padding: '1.5rem',
              borderRadius: '1.5rem',
              zIndex: 2,
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--outline-strong)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(45, 212, 191, 0.1)',
              border: '2px solid var(--tech-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              fontWeight: 900,
              color: 'var(--tech-teal)'
            }}>
              100
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Core Web Vitals</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-muted)', fontWeight: 600 }}>Performance Optimized</div>
            </div>
          </motion.div>

          {/* Floating Deployment Tag */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-dark"
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '-8%',
              padding: '1.25rem 2rem',
              borderRadius: '1.25rem',
              zIndex: 2,
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></div>
              <span style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 800, letterSpacing: '0.1em' }}>SYSTEM_STATUS: STABLE</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--tech-teal)', fontFamily: 'monospace', fontWeight: 700 }}>v2.4.0_production</div>
          </motion.div>

          {/* Background Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '140%',
            height: '140%',
            background: 'radial-gradient(circle, rgba(99, 0, 226, 0.15) 0%, transparent 70%)',
            zIndex: 0
          }}></div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          h1 { font-size: 4rem !important; }
        }
        @media (max-width: 1024px) {
          section { padding-top: 10rem; }
          div[style*="grid-template-columns: 1.1fr 0.9fr"] { 
            grid-template-columns: 1fr; 
            text-align: center; 
            gap: 8rem;
          }
          div[style*="display: inline-flex"] { margin: 0 auto 2rem auto; }
          div[style*="max-width: 600px"] { margin: 0 auto 4rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="width: fit-content"] { margin: 0 auto; }
          div[style*="perspective(1000px)"] { transform: none !important; }
          div[style*="left: -12%"] { left: 5% !important; top: -10% !important; }
          div[style*="right: -8%"] { right: 5% !important; bottom: -10% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
