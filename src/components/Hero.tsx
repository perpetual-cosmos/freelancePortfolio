import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Rocket, Globe, Users, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      paddingTop: '16rem',
      paddingBottom: '10rem',
      background: 'var(--gradient-mesh)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'var(--primary)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'var(--secondary)', opacity: 0.05, filter: 'blur(120px)', borderRadius: '50%' }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '6rem',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="tech-chip" style={{ marginBottom: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <Sparkles size={14} className="tech-text" />
            Full-Spectrum Development Studio · India
          </div>
          <h1 style={{ fontSize: '5rem', lineHeight: 1.05, marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '-0.04em' }}>
            From Frontend to <span className="text-gradient">AI</span> — <br />
            We Build the <span style={{ fontWeight: 800 }}>Whole</span> Product
          </h1>
          <p style={{
            color: 'var(--on-surface-variant)',
            fontSize: '1.25rem',
            marginBottom: '4rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            TheUnipick is a full-spectrum development studio. We engineer complete digital products: blazing-fast React frontends, scalable Node.js backends, AI integrations, mobile apps, and cloud infrastructure.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '5rem' }}>
            <button className="btn-primary">
              Discuss Your Project <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">Explore Services</button>
          </div>

          <div className="glass" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            padding: '2rem 3rem',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: 'var(--shadow-md)'
          }}>
            {[
              { icon: <Zap size={18} />, label: '9 Service Lines' },
              { icon: <Globe size={18} />, label: '70+ Countries' },
              { icon: <Users size={18} />, label: '1,000+ Users' },
              { icon: <Briefcase size={18} />, label: 'Startup to Enterprise' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                <div style={{ color: 'var(--on-surface)', fontWeight: 800, fontSize: '0.9rem' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '140%',
            height: '140%',
            background: 'radial-gradient(circle, rgba(99, 0, 226, 0.12) 0%, transparent 70%)',
            zIndex: 0
          }}></div>
          <div className="card-premium" style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', position: 'relative' }}>
              <img
                src="/hero_infrastructure_1776542449505.png"
                alt="Digital Infrastructure High Performance"
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(15, 23, 42, 0.2))',
                pointerEvents: 'none'
              }}></div>
            </div>
          </div>

          {/* Ornamental elements */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass" 
            style={{
              position: 'absolute',
              bottom: '-2rem',
              right: '-2rem',
              padding: '1.5rem',
              borderRadius: '1.5rem',
              zIndex: 2,
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--outline-variant)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--tech-teal)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Rocket size={20} fill="white" />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>System Status</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--tech-teal)', fontWeight: 700 }}>Operational & Optimized</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr; text-align: center; }
          h1 { font-size: 3.8rem; }
          div[style*="max-width: 600px"] { margin: 0 auto 4rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="display: flex; flex-wrap: wrap"] { justify-content: center; }
          div[style*="position: relative; scale: 1"] { margin-top: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

