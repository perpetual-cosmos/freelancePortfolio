import React from 'react';

const services = [
  { id: '01', title: 'CMS Development', desc: 'Custom WordPress, Strapi, and headless CMS solutions tailored to your content workflows and business needs.', icon: '🌐' },
  { id: '02', title: 'React & Frontend', desc: 'Modern, performant UI applications built with React, Next.js, and TypeScript for seamless user experiences.', icon: '⚛️' },
  { id: '03', title: 'Node.js Backend', desc: 'Scalable REST & GraphQL APIs, real-time applications, and microservices architecture using Express and NestJS.', icon: '🟢' },
  { id: '04', title: 'Spring Boot / Java', desc: 'Enterprise-grade backend systems, microservices, and robust APIs built on the Java ecosystem.', icon: '☕' },
  { id: '05', title: 'AI & ML Solutions', desc: 'Custom AI models, intelligent chatbots, NLP engines, and data-driven automation for smarter operations.', icon: '🧠' },
  { id: '06', title: 'Mobile Development', desc: 'Cross-platform mobile apps using React Native and Flutter with native performance and beautiful UIs.', icon: '📱' },
  { id: '07', title: 'Data Engineering', desc: 'ETL pipelines, analytics dashboards, data warehousing, and business intelligence platforms.', icon: '📊' },
  { id: '08', title: 'E-Commerce Solutions', desc: 'Custom storefronts, Shopify integrations, payment gateways, and scalable e-commerce platforms.', icon: '🛒' },
  { id: '09', title: 'Cloud & DevOps', desc: 'AWS/GCP infrastructure, CI/CD pipelines, containerization, and automated deployment workflows.', icon: '☁️' },
];

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div style={{ color: 'var(--tech-teal)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}>
            // WHAT WE BUILD
          </div>
          <h2 style={{ fontSize: '4.2rem', color: 'var(--on-surface)' }}>
            Full-Spectrum Development
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid var(--outline-variant)',
          borderLeft: '1px solid var(--outline-variant)'
        }}>
          {services.map((s) => (
            <div key={s.id} style={{
              padding: '4rem 3rem',
              borderRight: '1px solid var(--outline-variant)',
              borderBottom: '1px solid var(--outline-variant)',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-container-low)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--surface-container)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-variant)', opacity: 0.5 }}>{s.id}</span>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--on-surface)', fontWeight: 700 }}>{s.title}</h3>
                  </div>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '1rem' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
