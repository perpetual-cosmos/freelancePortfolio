import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="surface-low">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
          
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              // GET IN TOUCH
            </div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', lineHeight: 1.1 }}>
              Let's Build Something Extraordinary.
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', marginBottom: '4rem', lineHeight: 1.6 }}>
              Ready to start your project? Share your requirements and our team will provide a detailed proposal within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>EMAIL</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>hello@theunipick.com</div>
              </div>
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>PHONE</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>+1 (555) 123-4567</div>
              </div>
              <div>
                <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>LOCATION</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>San Francisco, CA & Remote</div>
              </div>
            </div>
          </div>

          <div className="card-premium" style={{ padding: '4rem', border: '1px solid var(--outline-variant)' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '2rem', textTransform: 'uppercase' }}>
              // PROJECT INQUIRY
            </div>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>NAME</label>
                  <input type="text" placeholder="Your name" style={{ background: 'var(--surface-container-low)', border: 'none', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.95rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>EMAIL</label>
                  <input type="email" placeholder="your@email.com" style={{ background: 'var(--surface-container-low)', border: 'none', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.95rem' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>SERVICE REQUIRED</label>
                <select style={{ background: 'var(--surface-container-low)', border: 'none', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.95rem', color: 'var(--on-surface-variant)' }}>
                  <option>Select a service...</option>
                  <option>CMS Development</option>
                  <option>React & Frontend</option>
                  <option>Node.js Backend</option>
                  <option>AI & ML Solutions</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>PROJECT DETAILS</label>
                <textarea rows={4} placeholder="Tell us about your project..." style={{ background: 'var(--surface-container-low)', border: 'none', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.95rem', resize: 'none' }}></textarea>
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
