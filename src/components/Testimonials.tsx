import React from 'react';

const testimonies = [
  {
    quote: "TheUniPick transformed our legacy system into a modern microservices architecture. Their focus on engineering excellence is unmatched. Delivery was on-time and the team communication was exemplary.",
    author: "Sarah Mitchell",
    role: "CTO, FinEdge Capital"
  },
  {
    quote: "We needed an AI-powered recommendation engine for our e-commerce platform. TheUniPick delivered a solution that increased our conversion rates by 34%. Their React and Node.js work is world-class.",
    author: "James Rodriguez",
    role: "VP Engineering, LuxeCart"
  },
  {
    quote: "Building a HIPAA-compliant healthcare platform required deep technical expertise and attention to security. TheUniPick exceeded every benchmark we set. They're our long-term technology partner.",
    author: "Dr. Priya Sharma",
    role: "Founder, MediSync"
  },
  {
    quote: "The CMS solution TheUniPick built for us handles 2M+ page views monthly without breaking a sweat. Their DevOps and cloud infrastructure work gave us 99.99% uptime consistently.",
    author: "Michael Chen",
    role: "Director of Digital, Apex Media"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            // CLIENT FEEDBACK
          </div>
          <h2 style={{ fontSize: '3.5rem' }}>Trusted by Industry Leaders</h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem'
        }}>
          {testimonies.map((t, i) => (
            <div key={i} className="card-premium" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '2rem',
              background: 'var(--surface-container-low)',
              border: '1px solid var(--outline-variant)'
            }}>
              <div style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.2, lineHeight: 0, marginTop: '1rem' }}>“</div>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic', flex: 1 }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem' }}>{t.author}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--on-surface-variant)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
