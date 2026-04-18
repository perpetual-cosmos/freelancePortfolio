import React from 'react';

const projects = [
  {
    title: "FinEdge Global",
    desc: "Real-time banking engine for high-frequency algorithmic trading.",
    img: "/p1.png",
    metrics: [
      { label: "Latency", value: "1.2ms" },
      { label: "Scale", value: "10k RPS" }
    ]
  },
  {
    title: "LuxeCart",
    desc: "Editorial-first commerce experience for global luxury brands.",
    img: "/p2.png",
    metrics: [
      { label: "SLA", value: "100%" },
      { label: "Growth", value: "3x MRR" }
    ]
  },
  {
    title: "MediSync AI",
    desc: "Patient data ingestion platform with privacy-first AI diagnostics.",
    img: "/p3.png",
    metrics: [
      { label: "Security", value: "100% HIPAA" },
      { label: "Latency", value: "2s AI diag" }
    ]
  }
];

const Deployment = () => {
  return (
    <section id="logs" className="surface-low">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          marginBottom: '5rem'
        }}>
          <div>
            <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Performance Metrics
            </div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Case Analytics</h2>
          </div>
          <div style={{ color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>
            View all technical docs
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem'
        }}>
          {projects.map((p, i) => (
            <div key={i} className="card-premium" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Deployment Log
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{p.title}</h3>
                
                <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid var(--outline-variant)' }}>
                  {p.metrics.map((m, j) => (
                    <div key={j}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{m.value}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                
                <p style={{ color: 'var(--on-surface-variant)', marginTop: '1.5rem', fontSize: '0.9rem' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deployment;
