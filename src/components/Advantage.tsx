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
    title: "Scalable Architecture",
    desc: "Future-proof solutions that grow with your business. Our microservices-based approach ensures zero downtime during scaling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "AI & Innovation",
    desc: "Seamlessly integrate intelligent features into your workflow. From LLM integration to custom neural networks, we stay at the frontier.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: "Dedicated Experts",
    desc: "Our senior-heavy teams work exclusively on your project. You get direct access to architects, not just account managers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Agile Execution",
    desc: "Short feedback loops and weekly sprints. We prioritize transparency and rapid iteration to ensure project success.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    )
  },
  {
    title: "Security Focused",
    desc: "Baking encryption and threat detection into every layer. We follow HIPAA and SOC2 standards for data-sensitive applications.",
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
          <div style={{ maxWidth: '600px' }}>
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
              Engineering Precision, <br />
              <span className="text-gradient">Beyond Deployment.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', maxWidth: '350px', marginBottom: '0.5rem' }}>
            Our infrastructure-native approach ensures your digital products are built for extreme reliability and performance.
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
