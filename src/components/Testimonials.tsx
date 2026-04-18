import React from 'react';

const testimonies = [
  {
    quote: "TheUniPick delivered an outstanding AI platform that transformed our data analytics. Their team's expertise and dedication exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechFlow"
  },
  {
    quote: "Working with TheUniPick has been a game-changer for our e-commerce business. The custom CMS they built is intuitive, fast, and incredibly powerful.",
    author: "Mark Davis",
    role: "CEO, NexaMart"
  },
  {
    quote: "The mobile app developed by TheUniPick is sleek, performant, and loved by our users. Their attention to detail in UI/UX is truly world-class.",
    author: "Elena Rodriguez",
    role: "Product Manager, FitPulse"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ background: 'var(--surface-container-low)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2rem', marginBottom: '1.25rem' }}>
            TESTIMONIALS
          </div>
          <h2 style={{ fontSize: '3.6rem' }}>
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '3rem'
        }}>
          {testimonies.map((t, i) => (
            <div key={i} className="card-premium" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '2.5rem',
              background: 'white',
              border: '1px solid var(--outline-variant)',
              textAlign: 'center',
              padding: '4rem 3rem'
            }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--secondary)', opacity: 0.2, lineHeight: 0, marginTop: '1.5rem' }}>“</div>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.15rem', lineHeight: 1.8, fontStyle: 'italic', flex: 1 }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--secondary)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>★★★★★</div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--on-surface)' }}>{t.author}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', fontWeight: 600 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
