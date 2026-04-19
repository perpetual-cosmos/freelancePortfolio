import React from 'react';

const tiers = [
  {
    name: "STARTER",
    subtitle: "For startups & MVPs",
    price: "$2,999",
    period: "one-time",
    features: [
      "Custom Web Application",
      "Responsive Design",
      "Basic API Integration",
      "3 Months Support",
      "SEO Optimization"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "BUSINESS GROWTH",
    subtitle: "Scale your business",
    price: "$7,999",
    period: "one-time",
    features: [
      "Full Stack Development",
      "AI Integration",
      "CMS Setup",
      "Cloud Deployment",
      "6 Months Support",
      "Analytics Dashboard"
    ],
    buttonText: "Get Started",
    highlight: true
  },
  {
    name: "ENTERPRISE",
    subtitle: "Large organization solutions",
    price: "Custom",
    period: "tailored",
    features: [
      "Microservices Architecture",
      "AI/ML Solutions",
      "Custom Integrations",
      "Dedicated Team",
      "24/7 Priority Support",
      "SLA Guarantee"
    ],
    buttonText: "Get Started",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="surface-low" style={{ background: 'var(--gradient-surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6.5rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>
            PRICING
          </div>
          <h2 style={{ fontSize: '3.6rem', color: 'var(--on-surface)' }}>
            Premium <span className="text-gradient">Packages</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', marginTop: '2rem', fontSize: '1.2rem' }}>
            Transparent pricing with no hidden fees.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {tiers.map((t, i) => (
            <div key={i} className="card-premium" style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '4rem 3rem',
              border: t.highlight ? '2px solid var(--secondary)' : '1px solid var(--outline-variant)',
              position: 'relative',
              boxShadow: t.highlight ? '0 30px 60px rgba(217, 70, 239, 0.15)' : 'var(--shadow-ambient)',
              transform: t.highlight ? 'scale(1.03)' : 'scale(1)',
              zIndex: t.highlight ? 2 : 1
            }}>
              {t.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: '0.4rem 1.5rem',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 5px 15px rgba(217, 70, 239, 0.3)'
                }}>
                  ★ Most Popular
                </div>
              )}

              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>{t.name}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', marginBottom: '2.5rem' }}>{t.subtitle}</div>

              <div style={{ marginBottom: '3rem' }}>
                <span className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>{t.price}</span>
              </div>

              <div style={{ flex: 1, marginBottom: '3.5rem' }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'center', fontSize: '1rem', color: 'var(--on-surface-variant)' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(99, 0, 226, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      fontSize: '0.75rem',
                      fontWeight: 800
                    }}>✓</div>
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
