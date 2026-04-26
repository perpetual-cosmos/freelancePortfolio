import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "MVP TRACK",
    subtitle: "Ship high-quality early",
    price: "$5,000+",
    features: ["Modular Next.js Architecture", "Typescript-First Core", "90%+ Lighthouse Performance", "Core API & Auth Layer", "Vercel/AWS Deployment"],
    highlight: false
  },
  {
    name: "SCALE TRACK",
    subtitle: "Architected for growth",
    price: "$12,000+",
    features: ["Event-Driven Backend", "Automated Testing Suite", "Full CI/CD Pipeline Setup", "External API Integrations", "Performance Monitoring Hub", "Priority Engineering Support"],
    highlight: true
  },
  {
    name: "ENTERPRISE",
    subtitle: "Dedicated core support",
    price: "Custom",
    features: ["Microservices Migration", "Custom AI/ML Workflows", "Security & Compliance Audit", "Dedicated Dev Environment", "24/7 SLA Guarantees", "Legacy Code Refactoring"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 7vw, 8rem)' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.2em', marginBottom: '1.1rem' }}>
            // INVESTMENT STRUCTURE
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ color: 'var(--on-surface)' }}>
            Premium Engineering <span className="text-gradient">Packages</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ color: 'var(--on-surface-variant)', marginTop: '1.75rem', fontSize: 'clamp(1rem,1.5vw,1.2rem)', maxWidth: '560px', margin: '1.75rem auto 0' }}>
            Transparent, fixed-fee engineering solutions with zero hidden costs and professional delivery.
          </motion.p>
        </div>

        <div className="pricing-grid">
          {tiers.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}
              className="card-premium pricing-card"
              style={{ border: t.highlight ? '2px solid var(--primary)' : '1px solid var(--outline-variant)', background: 'white', boxShadow: t.highlight ? 'var(--shadow-lg)' : 'var(--shadow-md)', zIndex: t.highlight ? 2 : 1 }}>
              {t.highlight && (
                <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gradient-primary, linear-gradient(135deg,#6300e2,#d946ef))', color: 'white', padding: '0.45rem 1.35rem', fontSize: '0.8rem', fontWeight: 900, borderRadius: 'var(--radius-full)', boxShadow: '0 8px 16px rgba(99,0,226,0.2)', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}>
                  <Star size={13} fill="white" /> RECOMMENDED
                </div>
              )}
              <div style={{ fontWeight: 900, fontSize: '1.25rem', color: 'var(--on-surface)', marginBottom: '0.6rem', fontFamily: 'Space Grotesk' }}>{t.name}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--on-surface-muted)', marginBottom: '2.5rem', fontWeight: 600 }}>{t.subtitle}</div>
              <div style={{ marginBottom: '3rem' }}>
                <span className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, fontFamily: 'Space Grotesk', lineHeight: 1 }}>{t.price}</span>
              </div>
              <div style={{ flex: 1, marginBottom: '3rem' }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start', fontSize: '1rem', color: 'var(--on-surface-variant)' }}>
                    <div style={{ marginTop: '4px', color: 'var(--tech-teal)', flexShrink: 0 }}><Check size={17} strokeWidth={3} /></div>
                    {f}
                  </div>
                ))}
              </div>
              <button className={t.highlight ? "btn-primary" : "btn-secondary"} style={{ width: '100%', justifyContent: 'center', padding: '1.15rem' }}>
                Select Package <ArrowRight size={17} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }
        .pricing-card {
          display: flex;
          flex-direction: column;
          padding: clamp(2.5rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem);
          position: relative;
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
        }
        @media (min-width: 768px) {
          .pricing-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        }
        @media (min-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
