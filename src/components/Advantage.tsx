import React from 'react';

const edges = [
  { title: "High Performance", desc: "Optimized, lightning-fast applications built for scale and extreme velocity. We focus on sub-100ms response times and fluid interactions.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>) },
  { title: "No Integration Gaps", desc: "The same team that builds your backend also configures your CI/CD and connects your mobile app — no finger-pointing when systems don't talk.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" /><polyline points="7 12 10 15 17 8" /></svg>) },
  { title: "Consistent Standards", desc: "One code style, one architecture philosophy, and one security posture across every layer of your product for long-term maintainability.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2" /><path d="M7 2v20" /><path d="M17 2v20" /><path d="M2 12h20" /></svg>) },
  { title: "Single Accountability", desc: "One contract, one relationship, and one point of contact. We own the full stack, so you always know exactly who is responsible for delivery.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>) },
  { title: "Faster Context Switching", desc: "When you need to add an AI feature to your existing web app, you don't re-brief a new vendor. We already know your stack and can execute instantly.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>) },
  { title: "Security Focused", desc: "Baking encryption and threat detection into every layer. We follow global standards to ensure your digital infrastructure is bulletproof.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>) }
];

const Advantage = () => {
  return (
    <section id="advantage" style={{ background: 'var(--surface-container-lowest, #fafafa)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* Header */}
        <div className="advantage-header">
          <div style={{ maxWidth: '680px' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '36px', height: '1px', background: 'var(--primary)', flexShrink: 0 }} />
              THE UNIPICK ADVANTAGE
            </div>
            <h2 style={{ lineHeight: 1.1, color: 'var(--on-surface)' }}>
              Full-Spectrum Studio Over <br />
              <span className="text-gradient">Patchwork Vendors.</span>
            </h2>
          </div>
          <p className="advantage-sub" style={{ color: 'var(--on-surface-variant)', fontSize: 'clamp(1rem,1.5vw,1.1rem)', maxWidth: '340px', lineHeight: 1.7 }}>
            The hidden cost of piecing your stack together is integration gaps and blame-shifting. We solve this by handling the full stack.
          </p>
        </div>

        {/* Cards */}
        <div className="advantage-grid">
          {edges.map((e, i) => (
            <div key={i} className="advantage-card"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: 'clamp(1.75rem, 2.5vw, 2.5rem)', background: 'var(--surface-container-low, #f1f5f9)', borderRadius: '1.75rem', transition: 'var(--transition-smooth)', border: '1px solid rgba(99,0,226,0.05)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '1.1rem', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: '0 8px 20px rgba(99,0,226,0.06)', flexShrink: 0 }}>
                {e.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', marginBottom: '0.85rem', color: 'var(--on-surface)', fontWeight: 700 }}>{e.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.7 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantage-header {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: clamp(4rem, 7vw, 8rem);
        }
        .advantage-sub { margin-bottom: 0.5rem; }
        .advantage-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        .advantage-card:hover {
          transform: translateY(-6px);
          background: white;
          box-shadow: 0 24px 50px rgba(99,0,226,0.1);
          border-color: rgba(99,0,226,0.18);
        }
        @media (min-width: 480px) {
          .advantage-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
        }
        @media (min-width: 768px) {
          .advantage-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
        }
        @media (min-width: 1024px) {
          .advantage-grid { grid-template-columns: repeat(3, 1fr); column-gap: 2.5rem; row-gap: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Advantage;
