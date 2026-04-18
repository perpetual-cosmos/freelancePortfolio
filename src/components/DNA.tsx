import React from 'react';

const DNA = () => {
  return (
    <section className="surface-low" id="engineering" style={{ padding: '6rem 2rem' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        <div>
          <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Engineering Philosophy
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our DNA is Code.</h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px' }}>
            We don't just build apps; we architect ecosystems. From micro-nanoseconds in backend logic to fluid 120Hz frontend interactions, every pixel is engineered for extreme performance.
          </p>
          
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 800, fontFamily: 'Space Grotesk' }}>1.2ms</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase' }}>P99 Latency</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', color: 'var(--secondary)', fontWeight: 800, fontFamily: 'Space Grotesk' }}>O(1)</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)', fontWeight: 600, textTransform: 'uppercase' }}>Architecture</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="card-premium" style={{ height: '300px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <div className="tech-chip" style={{ background: 'var(--tech-teal-container)', color: 'var(--tech-teal)' }}>
              Core Infrastructure
            </div>
          </div>
          <div className="card-premium" style={{ height: '300px', background: 'var(--primary)', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', color: 'var(--on-primary)' }}>
            <div style={{ fontWeight: 800, fontFamily: 'Space Grotesk', fontSize: '1.5rem' }}>
              Base Operations
            </div>
          </div>
        </div>

      </div>
      
      <style jsx>{`
        @media (max-width: 900px) {
          section > div { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default DNA;
