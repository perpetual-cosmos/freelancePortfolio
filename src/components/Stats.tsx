import React from 'react';

const Stats = () => {
  return (
    <section>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Emphasis on Excellence, Delivered at Scale</h2>
          <p style={{ color: 'var(--on-surface-variant)' }}>
            Our infrastructure powers millions of interactions every day, built on a foundation of reliability and elite engineering.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          {[
            { label: "Successful Deployments", value: "250+" },
            { label: "Expert Engineers", value: "85+" },
            { label: "Partner Enterprises", value: "40+" }
          ].map((stat, i) => (
            <div key={i} style={{ 
              paddingLeft: '2rem',
              borderLeft: '4px solid var(--tech-teal)'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 800, 
                color: 'var(--primary)',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                {stat.value}
              </div>
              <div style={{ 
                color: 'var(--on-surface-variant)', 
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 900px) {
          section > div { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
