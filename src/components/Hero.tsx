import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: '10rem', 
      paddingBottom: '6rem',
      background: 'radial-gradient(circle at top right, rgba(72, 0, 178, 0.05), transparent 40%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ color: 'var(--tech-teal)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
            // SOFTWARE DEVELOPMENT COMPANY
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
            We Build Digital <br />
            <span style={{ color: 'var(--tech-teal)' }}>Infrastructure.</span>
          </h1>
          <p style={{ 
            color: 'var(--on-surface-variant)', 
            fontSize: '1.2rem', 
            marginBottom: '3rem', 
            maxWidth: '550px',
            lineHeight: 1.6
          }}>
            TheUniPick delivers end-to-end software solutions — from AI-powered applications to enterprise-grade platforms. CMS, React, Node.js, Spring Boot, and beyond.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
            <button className="btn-primary">START YOUR PROJECT</button>
            <button className="btn-secondary">VIEW PORTFOLIO</button>
          </div>

          <div style={{ display: 'flex', gap: '4rem', borderTop: '1px solid var(--outline-variant)', paddingTop: '2rem' }}>
            <div>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>PROJECTS DELIVERED</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>250+</div>
            </div>
            <div>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TECHNOLOGIES</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>15+</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="glass" style={{
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
            border: '1px solid var(--outline-variant)'
          }}>
            <img 
              src="/hero_infrastructure_1776542449505.png" 
              alt="Digital Infrastructure" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-2rem',
            right: '-2rem',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, var(--tech-teal), var(--primary))',
            borderRadius: '2rem',
            zIndex: -1,
            opacity: 0.15
          }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr; text-align: center; }
          h1 { fontSize: '3.5rem'; }
          div[style*="justify-content: space-between"] { justify-content: center !important; }
          div[style*="max-width: 550px"] { margin: 0 auto 3rem auto; }
          div[style*="display: flex; gap: 1.5rem"] { justify-content: center; }
          div[style*="display: flex; gap: 4rem"] { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
