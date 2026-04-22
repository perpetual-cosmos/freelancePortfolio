import React from 'react';

const edges = [
  {
    title: "High Performance",
    desc: "Optimized, lightning-fast applications built for scale and extreme velocity. We focus on sub-100ms response times and fluid interactions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: "No Integration Gaps",
    desc: "The same team that builds your backend also configures your CI/CD and connects your mobile app — no finger-pointing when systems don't talk to each other.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
        <polyline points="7 12 10 15 17 8" />
      </svg>
    )
  },
  {
    title: "Consistent Standards",
    desc: "One code style, one architecture philosophy, and one security posture across every layer of your product for long-term maintainability.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <path d="M7 2v20" />
        <path d="M17 2v20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: "Single Accountability",
    desc: "One contract, one relationship, and one point of contact. We own the full stack, so you always know exactly who is responsible for delivery.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    )
  },
  {
    title: "Faster Context Switching",
    desc: "When you need to add an AI feature to your existing web app, you don't re-brief a new vendor. We already know your stack and can execute instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    )
  },
  {
    title: "Security Focused",
    desc: "Baking encryption and threat detection into every layer. We follow global standards to ensure your digital infrastructure is bulletproof.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
];

const Advantage = () => {
  return (
    <section id="advantage" style={{ background: 'var(--surface-container-lowest)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{
              color: 'var(--primary)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.2rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)' }}></span>
              THE UNIPICK ADVANTAGE
            </div>
            <h2 style={{ fontSize: '3.8rem', lineHeight: 1.1, color: 'var(--on-surface)' }}>
              Full-Spectrum Studio Over <br />
              <span className="text-gradient">Patchwork Vendors.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', maxWidth: '350px', marginBottom: '0.5rem' }}>
            The hidden cost of piecing your stack together is integration gaps and blame-shifting. We solve this by handling the full stack.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          columnGap: '3rem',
          rowGap: '4rem'
        }}>
          {edges.map((e, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              padding: '2.5rem',
              background: 'var(--surface-container-low)',
              borderRadius: '2rem',
              transition: 'var(--transition-smooth)',
              border: '1px solid rgba(99, 0, 226, 0.05)'
            }}
              className="advantage-card"
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '1.25rem',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                boxShadow: '0 10px 20px rgba(99, 0, 226, 0.05)'
              }}>
                {e.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--on-surface)', fontWeight: 700 }}>{e.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantage-card:hover {
          transform: translateY(-8px);
          background: white;
          box-shadow: 0 30px 60px rgba(99, 0, 226, 0.1);
          border-color: rgba(99, 0, 226, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Advantage;
