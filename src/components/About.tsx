import React from 'react';

const stats = [
  { label: 'YEARS EXPERIENCE', value: '8+' },
  { label: 'PROJECTS DELIVERED', value: '250+' },
  { label: 'TEAM MEMBERS', value: '40+' },
  { label: 'CLIENT RETENTION', value: '95%' },
];

const About = () => {
  return (
    <section id="about" className="surface-low">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '6rem',
        alignItems: 'center'
      }}>
        
        <div style={{ position: 'relative' }}>
          <div className="card-premium" style={{ padding: 0, overflow: 'hidden', height: '500px' }}>
            <img 
              src="/about_excellence_1776542525381.png" 
              alt="Engineering Excellence" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '-1rem',
            background: 'var(--primary)',
            color: 'var(--on-primary)',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.8, marginBottom: '0.25rem' }}>EST.</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>2017</div>
          </div>
        </div>

        <div>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            // ABOUT THEUNIPICK
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.2 }}>
            Engineering Excellence, <br />
            Delivered at Scale.
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            TheUniPick is a full-service software development company specializing in building robust, scalable, and intelligent digital solutions. From startups to enterprises, we transform ideas into production-ready systems using cutting-edge technology stacks.
          </p>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', marginBottom: '3.5rem', lineHeight: 1.7 }}>
            Our team of architects, developers, and designers work in tight collaboration to deliver CMS platforms, AI-driven applications, React frontends, Node.js backends, Spring Boot microservices, and everything in between.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{stat.label}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <style jsx>{`
        @media (max-width: 900px) {
          section > div { grid-template-columns: 1fr; }
          h2 { font-size: 2.25rem; }
        }
      `}</style>
    </section>
  );
};

export default About;
