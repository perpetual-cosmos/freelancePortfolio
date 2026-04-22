import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Code2, Server, Coffee, Brain, 
  Smartphone, BarChart3, ShoppingBag, Cloud,
  ArrowRight, ExternalLink
} from 'lucide-react';

const services = [
  { id: '01', title: 'Next.js & Frontend', desc: 'Performance-first React applications with server-side rendering, edge caching, and a focus on Core Web Vitals.', icon: <Code2 size={24} />, color: '#14b8a6' },
  { id: '02', title: 'Node.js Systems', desc: 'Scalable event-driven architectures, real-time synchronization, and robust API layers designed for high throughput.', icon: <Server size={24} />, color: '#22c55e' },
  { id: '03', title: 'AI-Infused Pipelines', desc: 'Integrating LLMs, RAG systems, and custom automation workflows directly into your product ecosystem.', icon: <Brain size={24} />, color: '#a855f7' },
  { id: '04', title: 'Infrastructure (IaC)', desc: 'Automated AWS/GCP deployments using Terraform and CI/CD pipelines that ensure zero-downtime releases.', icon: <Cloud size={24} />, color: '#64748b' },
  { id: '05', title: 'Mobile (React Native)', desc: 'High-fidelity mobile experiences that share business logic with your web app for faster iteration.', icon: <Smartphone size={24} />, color: '#f43f5e' },
  { id: '06', title: 'Product Architecture', desc: 'Strategic consulting for MVPs, helping founders choose the right tech stack to avoid early technical debt.', icon: <BarChart3 size={24} />, color: '#3b82f6' },
];

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--surface)', borderTop: '1px solid var(--outline-variant)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem', padding: '0 2rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--tech-teal)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}
          >
            // OUR ENGINEERING CORE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '4.2rem', color: 'var(--on-surface)', marginBottom: '2rem' }}
          >
            Specialized Stacks for <br /> <span className="text-gradient">Ambitious Products</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}
          >
            We don't do everything. We do the things that matter most for scaling digital products.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          borderTop: '1px solid var(--outline-variant)',
          borderLeft: '1px solid var(--outline-variant)'
        }}>
          {services.map((s, idx) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ backgroundColor: 'var(--surface-container-low)' }}
              style={{
                padding: '5rem 4rem',
                borderRight: '1px solid var(--outline-variant)',
                borderBottom: '1px solid var(--outline-variant)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                transition: 'background-color 0.3s ease'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'white',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: s.color,
                boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                border: '1px solid var(--outline-variant)'
              }}>
                {s.icon}
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.4 }}>{s.id}</span>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--on-surface)', fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
              
              <motion.a 
                href={`/services#service-${s.id}`} 
                whileHover={{ gap: '0.75rem' }}
                style={{ 
                  color: 'var(--primary)', 
                  fontSize: '0.9rem', 
                  fontWeight: 800, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  marginTop: 'auto',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                View Details <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

