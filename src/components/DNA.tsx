import React from 'react';

const DNA = () => {
  return (
    <section className="surface-low" id="engineering" style={{ padding: 'clamp(4rem, 7vw, 6rem) 1.25rem' }}>
      <div className="dna-inner">
        <div>
          <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Engineering Philosophy
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.75rem' }}>Our DNA is Code.</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.75 }}>
            We don't just build apps; we architect ecosystems. From micro-nanoseconds in backend logic to fluid 120Hz frontend interactions, every pixel is engineered for extreme performance.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--secondary)', fontWeight: 800, fontFamily: 'Space Grotesk' }}>1.2ms</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>P99 Latency</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--secondary)', fontWeight: 800, fontFamily: 'Space Grotesk' }}>O(1)</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Architecture</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div className="card-premium" style={{ minHeight: '200px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <div className="tech-chip" style={{ background: 'var(--tech-teal-container, rgba(45,212,191,0.1))', color: 'var(--tech-teal)' }}>
              Core Infrastructure
            </div>
          </div>
          <div className="card-premium" style={{ minHeight: '200px', background: 'var(--primary)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', color: 'white' }}>
            <div style={{ fontWeight: 800, fontFamily: 'Space Grotesk', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', padding: '1.5rem' }}>
              Base Operations
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dna-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
        }
        @media (min-width: 900px) {
          .dna-inner { grid-template-columns: 1fr 1fr; gap: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default DNA;
