import React from 'react';

const services = [
  { id: '01', title: 'CMS Development', desc: 'Custom WordPress, Strapi, and headless CMS solutions tailored to your content workflows and business needs.' },
  { id: '02', title: 'React & Frontend', desc: 'Modern, performant UI applications built with React, Next.js, and TypeScript for seamless user experiences.' },
  { id: '03', title: 'Node.js Backend', desc: 'Scalable REST & GraphQL APIs, real-time applications, and microservices architecture using Express and NestJS.' },
  { id: '04', title: 'Spring Boot / Java', desc: 'Enterprise-grade backend systems, microservices, and robust APIs built on the Java ecosystem.' },
  { id: '05', title: 'AI & ML Solutions', desc: 'Custom AI models, intelligent chatbots, NLP engines, and data-driven automation for smarter operations.' },
  { id: '06', title: 'Mobile Development', desc: 'Cross-platform mobile apps using React Native and Flutter with native performance and beautiful UIs.' },
  { id: '07', title: 'Data Engineering', desc: 'ETL pipelines, analytics dashboards, data warehousing, and business intelligence platforms.' },
  { id: '08', title: 'E-Commerce Solutions', desc: 'Custom storefronts, Shopify integrations, payment gateways, and scalable e-commerce platforms.' },
  { id: '09', title: 'Cloud & DevOps', desc: 'AWS/GCP infrastructure, CI/CD pipelines, containerization, and automated deployment workflows.' },
];

const Services = () => {
  return (
    <section id="services">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            // WHAT WE BUILD
          </div>
          <h2 style={{ fontSize: '3.5rem' }}>Full-Spectrum Development</h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {services.map((s) => (
            <div key={s.id} className="card-premium" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid var(--outline-variant)',
              background: 'var(--surface-container-low)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--primary)', 
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--on-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 800
                }}>
                  {s.id}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--on-surface-variant)', letterSpacing: '0.1em' }}>
                  CORE MODULE
                </div>
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
