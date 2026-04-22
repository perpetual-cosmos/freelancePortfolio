"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section style={{
      paddingTop: '12rem',
      paddingBottom: '8rem',
      background: 'var(--background)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium Background Elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'var(--primary)', opacity: 0.08, filter: 'blur(120px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '500px', height: '500px', background: 'var(--secondary)', opacity: 0.08, filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '20%', left: '15%', width: '300px', height: '300px', background: 'var(--tech-teal)', opacity: 0.05, filter: 'blur(80px)', borderRadius: '50%' }}></div>

        {/* Animated Noise/Grain Overlay */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
        gap: '4rem',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.h1 variants={itemVariants} style={{ fontSize: '5.5rem', lineHeight: 1.0, marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '-0.05em' }}>
            We build software <br />
            <span className="text-gradient" style={{ fontWeight: 800 }}>that works as hard</span> <br />
            as you do.
          </motion.h1>

          <motion.p variants={itemVariants} style={{
            color: 'var(--on-surface-variant)',
            fontSize: '1.35rem',
            marginBottom: '4rem',
            maxWidth: '650px',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            A specialized development studio turning complex ideas into production-ready products. We focus on Next.js, Node.js, and scaling systems without the overhead.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginBottom: '5rem' }}>
            <button className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
              View our work <ArrowRight size={22} />
            </button>
            <button className="btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Our Process</button>
          </motion.div>

          <motion.div variants={itemVariants} className="glass" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            padding: '2.5rem',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: 'var(--shadow-lg)',
            background: 'rgba(255, 255, 255, 0.4)'
          }}>
            {[
              { label: 'Products Shipped', value: '50+', sub: 'Last 24 months' },
              { label: 'Deployment Rate', value: 'Daily', sub: 'CI/CD Maturity' },
              { label: 'Uptime focus', value: '99.9%', sub: 'SLA standard' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.8rem', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ color: 'var(--on-surface)', fontWeight: 800, fontSize: '0.85rem' }}>{stat.label}</div>
                <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.75rem', fontWeight: 600 }}>{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Main Visual Component */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: '2.5rem',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}>
            <img
              src="/hero_premium_dashboard.png"
              alt="TheUnipick Premium Infrastructure"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {/* Glass Overlay for depth */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }}></div>
          </div>

          {/* Floating Performance Chip */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass"
            style={{
              position: 'absolute',
              top: '15%',
              left: '-8%',
              padding: '1.25rem 1.5rem',
              borderRadius: '1.25rem',
              zIndex: 2,
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255,255,255,0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '3px solid var(--tech-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              fontWeight: 900,
              color: 'var(--tech-teal)'
            }}>
              100
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Lighthouse</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-muted)', fontWeight: 600 }}>Performance Score</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass"
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '-5%',
              padding: '1.25rem 1.5rem',
              borderRadius: '1.25rem',
              zIndex: 2,
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              background: 'rgba(26, 26, 46, 0.95)',
              color: '#fff',
              fontFamily: 'monospace'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 700 }}>DEPLOYMENT SUCCESSFUL</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--tech-teal)' }}>main_branch_v2.4.0</div>
          </motion.div>

          {/* Background Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(99, 0, 226, 0.1) 0%, transparent 70%)',
            zIndex: 0
          }}></div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          h1 { font-size: 4.5rem !important; }
        }
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr; text-align: center; }
          h1 { font-size: 3.8rem !important; }
          div[style*="max-width: 650px"] { margin: 0 auto 4rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="display: flex; flex-wrap: wrap"] { justify-content: center; }
          div[style*="position: relative; z-index: 1"] { margin-top: 4rem; }
          div[style*="left: -10%"] { left: 0 !important; top: -10% !important; }
          div[style*="right: -5%"] { right: 0 !important; bottom: -10% !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
