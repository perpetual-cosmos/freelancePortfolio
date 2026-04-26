import React from 'react';

const Stats = () => {
  return (
    <section>
      <div className="stats-outer">
        <div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1.25rem' }}>
            Emphasis on Excellence, Delivered at Scale
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', lineHeight: 1.7 }}>
            Our infrastructure powers millions of interactions every day, built on a foundation of reliability and elite engineering.
          </p>
        </div>

        <div className="stats-grid">
          {[
            { label: "Successful Deployments", value: "250+" },
            { label: "Expert Engineers", value: "85+" },
            { label: "Partner Enterprises", value: "40+" }
          ].map((stat, i) => (
            <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '4px solid var(--tech-teal)' }}>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Space Grotesk, sans-serif' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.88rem', fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-outer {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          padding: 0 1.25rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (min-width: 480px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 640px) {
          .stats-outer { padding: 0 1.75rem; }
        }
        @media (min-width: 900px) {
          .stats-outer { grid-template-columns: 1fr 2fr; gap: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
