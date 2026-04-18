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
    color: "#4800b2"
  },
  {
    title: "LuxeCart Marketplace",
    category: "E-COMMERCE • CMS • SPRING BOOT",
    desc: "Multi-vendor e-commerce platform handling 100K+ daily transactions. Custom CMS, Spring Boot backend, and AI-powered recommendation engine.",
    stats: [
      { label: "Revenue", value: "$12M" },
      { label: "Products", value: "500K+" }
    ],
    color: "#b80049"
  },
  {
    title: "MediSync Management System",
    category: "HEALTHCARE • AI/ML • CLOUD",
    desc: "HIPAA-compliant healthcare management platform with AI-assisted diagnostics, patient records, and telemedicine integration.",
    stats: [
      { label: "Hospitals", value: "120+" },
      { label: "Patients", value: "2M+" }
    ],
    color: "#44d8f1"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              // PORTFOLIO
            </div>
            <h2 style={{ fontSize: '3.5rem' }}>Deployment Logs</h2>
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--on-surface-variant)' }}>
            PROJECTS // 3
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
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
                  height: '500px', 
                  background: `linear-gradient(135deg, ${p.color}22, ${p.color}05)`,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: `1px solid ${p.color}33`
                }}>
                  {/* Decorative element since we lack the generated image */}
                  <div style={{
                    width: '70%',
                    height: '70%',
                    background: `linear-gradient(135deg, ${p.color}, #6200ee)`,
                    borderRadius: '1.5rem',
                    opacity: 0.8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    boxShadow: `0 30px 60px ${p.color}44`
                  }}>
                    {p.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: p.color, letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
                  {p.category}
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', gap: '4rem' }}>
                  {p.stats.map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--on-surface-variant)', marginBottom: '0.5rem' }}>{s.label}</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: p.color, fontFamily: 'Space Grotesk' }}>{s.value}</div>
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
