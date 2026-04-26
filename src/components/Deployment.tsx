import React from 'react';

const projects = [
  { title: "FinEdge Global", desc: "Real-time banking engine for high-frequency algorithmic trading.", img: "/p1.png", metrics: [{ label: "Latency", value: "1.2ms" }, { label: "Scale", value: "10k RPS" }] },
  { title: "LuxeCart", desc: "Editorial-first commerce experience for global luxury brands.", img: "/p2.png", metrics: [{ label: "SLA", value: "100%" }, { label: "Growth", value: "3x MRR" }] },
  { title: "MediSync AI", desc: "Patient data ingestion platform with privacy-first AI diagnostics.", img: "/p3.png", metrics: [{ label: "Security", value: "100% HIPAA" }, { label: "Latency", value: "2s AI diag" }] }
];

const Deployment = () => {
  return (
    <section id="logs" className="surface-low">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div className="deployment-header">
          <div>
            <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              Performance Metrics
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Case Analytics</h2>
          </div>
          <div style={{ color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', fontSize: '0.95rem' }}>
            View all technical docs
          </div>
        </div>

        <div className="deployment-grid">
          {projects.map((p, i) => (
            <div key={i} className="card-premium" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 'clamp(180px, 25vw, 240px)' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
                <div style={{ color: 'var(--secondary)', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Deployment Log</div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: '0.5rem', color: 'var(--primary)' }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: '2rem', padding: '1.25rem 0', borderBottom: '1px solid var(--outline-variant)', flexWrap: 'wrap' }}>
                  {p.metrics.map((m, j) => (
                    <div key={j}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{m.value}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: 'var(--on-surface-variant)', marginTop: '1.25rem', fontSize: '0.9rem', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .deployment-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .deployment-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 480px) {
          .deployment-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
          .deployment-header { flex-direction: row; justify-content: space-between; align-items: baseline; margin-bottom: 4rem; }
        }
        @media (min-width: 1024px) {
          .deployment-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Deployment;
