import React from 'react';

const tiers = [
  {
    name: "STARTER",
    subtitle: "For startups & MVPs",
    price: "$5K",
    period: "starting from",
    features: [
      "Single-page application",
      "Responsive design",
      "Basic CMS integration",
      "3 months support",
      "1 revision cycle"
    ],
    buttonText: "GET STARTED",
    highlight: false
  },
  {
    name: "PROFESSIONAL",
    subtitle: "For growing businesses",
    price: "$15K",
    period: "starting from",
    features: [
      "Full-stack application",
      "Custom API development",
      "AI feature integration",
      "12 months support",
      "Unlimited revisions",
      "Performance optimization",
      "CI/CD pipeline setup"
    ],
    buttonText: "GET STARTED",
    highlight: true
  },
  {
    name: "ENTERPRISE",
    subtitle: "For large-scale operations",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Microservices architecture",
      "Dedicated team (4-8 devs)",
      "24/7 premium support",
      "SLA guarantee 99.99%",
      "Security audit included",
      "Cloud infrastructure setup",
      "Ongoing maintenance"
    ],
    buttonText: "CONTACT SALES",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="surface-low">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            // PREMIUM OFFERINGS
          </div>
          <h2 style={{ fontSize: '3.5rem' }}>Engagement Models</h2>
          <p style={{ color: 'var(--on-surface-variant)', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            Flexible pricing designed to scale with your ambitions. Every plan includes our commitment to engineering excellence.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {tiers.map((t, i) => (
            <div key={i} className="card-premium" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              padding: '3rem',
              border: t.highlight ? '2px solid var(--tech-teal)' : '1px solid var(--outline-variant)',
              position: 'relative',
              background: 'var(--surface-container-lowest)'
            }}>
              {t.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--tech-teal)',
                  color: 'var(--tech-teal-container)',
                  padding: '0.25rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  borderRadius: '0 0 0.5rem 0.5rem',
                  letterSpacing: '0.1em'
                }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--on-surface-variant)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{t.name}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2rem' }}>{t.subtitle}</div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>{t.price}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginLeft: '0.75rem' }}>{t.period}</span>
              </div>
              
              <div style={{ flex: 1, marginBottom: '3rem' }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>
                    <span style={{ color: 'var(--tech-teal)' }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              
              <button className={t.highlight ? "btn-primary" : "btn-secondary"} style={{ width: '100%', justifyContent: 'center' }}>
                {t.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
