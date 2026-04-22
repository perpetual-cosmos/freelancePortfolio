import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "STARTER",
    subtitle: "Ideal for startups & MVPs",
    price: "$2,999",
    features: [
      "Custom Web Application",
      "Responsive UI Design",
      "Core API Integration",
      "3 Months Post-Launch Support",
      "Search Engine Optimization"
    ],
    highlight: false
  },
  {
    name: "SCALABLE",
    subtitle: "Accelerate your growth",
    price: "$7,999",
    features: [
      "Advanced Full Stack Studio",
      "Custom AI Integration",
      "Automated CMS Workflows",
      "Cloud Architecture (AWS/GCP)",
      "6 Months Priority Support",
      "Performance Analytics"
    ],
    highlight: true
  },
  {
    name: "ENTERPRISE",
    subtitle: "High-level infra & security",
    price: "Custom",
    features: [
      "Microservices Migration",
      "Large-scale AI/ML Pipelines",
      "Dedicated Engineering Team",
      "24/7 Enterprise Support",
      "SLA & Compliance Audit",
      "Custom Legacy Modernization"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }}
          >
            // INVESTMENT STRUCTURE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3.8rem', color: 'var(--on-surface)' }}
          >
            Premium Engineering <span className="text-gradient">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'var(--on-surface-variant)', marginTop: '2rem', fontSize: '1.2rem', maxWidth: '600px', margin: '2rem auto 0' }}
          >
            Transparent, fixed-fee engineering solutions with zero hidden costs and professional delivery.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'stretch'
        }}>
          {tiers.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-premium" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '5rem 3rem',
                background: 'white',
                border: t.highlight ? '2px solid var(--primary)' : '1px solid var(--outline-variant)',
                position: 'relative',
                boxShadow: t.highlight ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                zIndex: t.highlight ? 2 : 1
              }}
            >
              {t.highlight && (
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 8px 16px rgba(99, 0, 226, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Star size={14} fill="white" /> RECOMMENDED
                </div>
              )}

              <div style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--on-surface)', marginBottom: '0.75rem', fontFamily: 'Space Grotesk' }}>{t.name}</div>
              <div style={{ fontSize: '1rem', color: 'var(--on-surface-muted)', marginBottom: '3.5rem', fontWeight: 600 }}>{t.subtitle}</div>

              <div style={{ marginBottom: '4rem' }}>
                <span className="text-gradient" style={{ fontSize: '4rem', fontWeight: 900, fontFamily: 'Space Grotesk', lineHeight: 1 }}>{t.price}</span>
              </div>

              <div style={{ flex: 1, marginBottom: '4rem' }}>
                {t.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', alignItems: 'flex-start', fontSize: '1.05rem', color: 'var(--on-surface-variant)' }}>
                    <div style={{
                      marginTop: '4px',
                      color: 'var(--tech-teal)',
                      flexShrink: 0
                    }}>
                      <Check size={18} strokeWidth={3} />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              <button className={t.highlight ? "btn-primary" : "btn-secondary"} style={{ width: '100%', justifyContent: 'center', padding: '1.25rem' }}>
                Select Package <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

