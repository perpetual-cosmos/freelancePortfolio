import React from 'react';

const projects = [
  {
    title: "FinEdge Analytics Platform",
    category: "FINTECH • REACT • NODE.JS",
    desc: "A real-time financial analytics dashboard for a leading investment firm. Built with React, Node.js, and PostgreSQL with live data streaming.",
    stats: [
      { label: "Users", value: "58K+" },
      { label: "Up-time", value: "99.99%" }
    ],
    color: "#6300e2"
  },
  {
    title: "LuxeCart Marketplace",
    category: "E-COMMERCE • CMS • SPRING BOOT",
    desc: "Multi-vendor e-commerce platform handling 100K+ daily transactions. Custom CMS, Spring Boot backend, and AI-powered recommendation engine.",
    stats: [
      { label: "Revenue", value: "$12M" },
      { label: "Products", value: "500K+" }
    ],
    color: "#d946ef"
  },
  {
    title: "MediSync Management System",
    category: "HEALTHCARE • AI/ML • CLOUD",
    desc: "HIPAA-compliant healthcare management platform with AI-assisted diagnostics, patient records, and telemedicine integration.",
    stats: [
      { label: "Hospitals", value: "120+" },
      { label: "Patients", value: "2M+" }
    ],
    color: "#7c3aed"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>
              // PORTFOLIO
            </div>
            <h2 style={{ fontSize: '3.5rem' }}>Deployment Logs</h2>
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--on-surface-variant)', letterSpacing: '0.05em' }}>
            PROJECTS // 03
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12rem' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ 
              display: 'grid', 
              gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
              gap: '6rem',
              alignItems: 'center'
            }}>
              <div style={{ 
                order: i % 2 === 0 ? 1 : 2,
                position: 'relative'
              }}>
                <div className="card-premium" style={{ 
                  height: '550px', 
                  background: `linear-gradient(135deg, ${p.color}08, ${p.color}02)`,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: '80%',
                    height: '80%',
                    background: `linear-gradient(135deg, ${p.color}, #7c3aed)`,
                    borderRadius: '2rem',
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 800,
                    boxShadow: `0 40px 80px ${p.color}33`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>{p.title.split(' ')[0]}</div>
                    <div style={{ 
                      position: 'absolute', 
                      top: '20%', 
                      left: '10%', 
                      width: '100%', 
                      height: '100%', 
                      background: 'white', 
                      opacity: 0.1, 
                      borderRadius: '1rem',
                      transform: 'rotate(-45deg)'
                    }}></div>
                  </div>
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: p.color, letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                  {p.category}
                </div>
                <h3 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.15rem', marginBottom: '3.5rem', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '5rem' }}>
                  {p.stats.map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{s.label}</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 800, color: p.color, fontFamily: 'Space Grotesk' }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
