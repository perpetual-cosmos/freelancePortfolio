import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2rem', marginBottom: '1.25rem' }}>
            CONTACT
          </div>
          <h2 style={{ fontSize: '3.6rem' }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '8rem', alignItems: 'flex-start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '2.4rem', color: 'var(--on-surface)', marginBottom: '1rem' }}>Send us a message</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={{ background: '#F3F4F6', border: 'none', padding: '1.25rem 1.5rem', borderRadius: '1rem', fontSize: '1rem' }} />
              <input type="email" placeholder="Your Email" style={{ background: '#F3F4F6', border: 'none', padding: '1.25rem 1.5rem', borderRadius: '1rem', fontSize: '1rem' }} />
              <textarea rows={6} placeholder="Your Message" style={{ background: '#F3F4F6', border: 'none', padding: '1.25rem 1.5rem', borderRadius: '1rem', fontSize: '1rem', resize: 'none' }}></textarea>
              <button className="btn-primary" style={{ width: 'fit-content' }}>
                🚀 Send Message
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <h3 style={{ fontSize: '2.4rem', color: 'var(--on-surface)', marginBottom: '1rem' }}>Contact Information</h3>
            
            <div className="card-premium" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white' }}>✉️</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>Email</div>
                <div style={{ color: 'var(--on-surface-variant)' }}>hello@theunipick.com</div>
              </div>
            </div>

            <div className="card-premium" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white' }}>📞</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>Phone</div>
                <div style={{ color: 'var(--on-surface-variant)' }}>+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="card-premium" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'var(--tech-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white' }}>📍</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>Location</div>
                <div style={{ color: 'var(--on-surface-variant)' }}>San Francisco, CA, USA</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
