import React from 'react';

const Hero = () => {
  return (
    <section style={{
      paddingTop: '16rem',
      paddingBottom: '10rem',
      background: 'var(--gradient-mesh)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
        gap: '6rem',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tech-chip" style={{ marginBottom: '2.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--tech-teal)', boxShadow: '0 0 10px var(--tech-teal)' }}></span>
            Pioneering the Digital Frontier
          </div>
          <h1 style={{ fontSize: '5rem', lineHeight: 1.05, marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '-0.04em' }}>
            Architecting <span className="text-gradient">Next-Gen</span> <br />
            Digital Infrastructure
          </h1>
          <p style={{
            color: 'var(--on-surface-variant)',
            fontSize: '1.25rem',
            marginBottom: '4rem',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            We bridge the gap between vision and reality with high-performance applications powered by AI, modern CMS, React, and Node.js.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '5rem' }}>
            <button className="btn-primary">Start Your Journey →</button>
            <button className="btn-secondary">Explore Solutions</button>
          </div>

          <div className="glass" style={{
            display: 'inline-flex',
            gap: '4rem',
            padding: '2rem 3rem',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.4)'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'Space Grotesk', lineHeight: 1 }}>250+</div>
              <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginTop: '0.5rem' }}>PROJECTS</div>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'var(--outline-variant)', alignSelf: 'center' }}></div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', fontFamily: 'Space Grotesk', lineHeight: 1 }}>15+</div>
              <div style={{ color: 'var(--on-surface-muted)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginTop: '0.5rem' }}>CORE TECHS</div>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ position: 'relative', animationDelay: '0.2s' }}>
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
            boxShadow: '0 50px 100px rgba(15, 23, 42, 0.15)',
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
          <div className="glass" style={{
            position: 'absolute',
            bottom: '-2rem',
            right: '-2rem',
            padding: '1.5rem',
            borderRadius: '1.5rem',
            zIndex: 2,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>System Status: Operational</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr; text-align: center; }
          h1 { font-size: 3.8rem; }
          div[style*="max-width: 600px"] { margin: 0 auto 4rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="display: inline-flex; gap: 4rem"] { margin: 0 auto; }
          div[style*="position: relative; animationDelay"] { margin-top: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
