import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: '12rem', 
      paddingBottom: '8rem',
      background: 'radial-gradient(circle at top right, rgba(99, 0, 226, 0.08), transparent 50%), radial-gradient(circle at bottom left, rgba(217, 70, 239, 0.05), transparent 50%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="tech-chip" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--secondary)' }}></span>
            Innovating with AI, React, Node.js & More
          </div>
          <h1 style={{ fontSize: '4.8rem', lineHeight: 1.05, marginBottom: '2rem', color: 'var(--on-surface)' }}>
            Building <span className="text-gradient">Future-Ready</span> <br />
            Digital Solutions
          </h1>
          <p style={{ 
            color: 'var(--on-surface-variant)', 
            fontSize: '1.25rem', 
            marginBottom: '3.5rem', 
            maxWidth: '550px',
            lineHeight: 1.6
          }}>
            We craft high-performance applications powered by AI, modern CMS platforms, React, Node.js, and Spring Boot — transforming ideas into scalable digital products.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
            <button className="btn-primary">Start Your Project →</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>

          <div style={{ display: 'flex', gap: '4rem', borderTop: '1px solid var(--outline-variant)', paddingTop: '2.5rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>250+</div>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>PROJECTS DELIVERED</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>15+</div>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>TECHNOLOGIES</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
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
          <div className="card-premium" style={{
            padding: 0,
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(99, 0, 226, 0.15)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            position: 'relative',
            zIndex: 1
          }}>
            <img 
              src="/hero_infrastructure_1776542449505.png" 
              alt="Digital Infrastructure" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr; text-align: center; }
          h1 { font-size: 3.5rem; }
          div[style*="max-width: 550px"] { margin: 0 auto 3.5rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="display: flex; gap: 4rem"] { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
