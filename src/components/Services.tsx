import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Code2, Server, Coffee, Brain, 
  Smartphone, BarChart3, ShoppingBag, Cloud,
  ArrowRight, ExternalLink
} from 'lucide-react';

const services = [
  { id: '01', title: 'CMS Development', desc: 'Custom WordPress, Strapi, and headless CMS solutions tailored to your content workflows.', icon: <Globe size={24} />, color: '#3b82f6' },
  { id: '02', title: 'React & Frontend', desc: 'Modern UI applications built with React, Next.js, and TypeScript for seamless experiences.', icon: <Code2 size={24} />, color: '#14b8a6' },
  { id: '03', title: 'Node.js Backend', desc: 'Scalable REST & GraphQL APIs, real-time applications, and microservices architecture.', icon: <Server size={24} />, color: '#22c55e' },
  { id: '04', title: 'Spring Boot / Java', desc: 'Enterprise-grade backend systems and robust APIs built on the Java ecosystem.', icon: <Coffee size={24} />, color: '#f59e0b' },
  { id: '05', title: 'AI & ML Solutions', desc: 'Custom AI models, intelligent chatbots, NLP engines, and data-driven automation.', icon: <Brain size={24} />, color: '#a855f7' },
  { id: '06', title: 'Mobile Development', desc: 'Cross-platform mobile apps using React Native and Flutter with native performance.', icon: <Smartphone size={24} />, color: '#f43f5e' },
  { id: '07', title: 'Data Engineering', desc: 'ETL pipelines, analytics dashboards, and business intelligence platforms.', icon: <BarChart3 size={24} />, color: '#3b82f6' },
  { id: '08', title: 'E-Commerce', desc: 'Custom storefronts, Shopify integrations, and scalable e-commerce platforms.', icon: <ShoppingBag size={24} />, color: '#ec4899' },
  { id: '09', title: 'Cloud & DevOps', desc: 'AWS/GCP infrastructure, CI/CD pipelines, and automated deployment workflows.', icon: <Cloud size={24} />, color: '#64748b' },
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
            // WHAT WE BUILD
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '4.2rem', color: 'var(--on-surface)', marginBottom: '2rem' }}
          >
            Everything Your Product Needs, <br /> Under <span className="text-gradient">One Studio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}
          >
            Whether you're building an MVP, scaling an existing product, or modernizing legacy infrastructure.
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

