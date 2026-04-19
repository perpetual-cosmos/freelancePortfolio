import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{
              color: 'var(--primary)',
              fontWeight: 800,
              fontSize: '0.85rem',
              letterSpacing: '0.2rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--primary)' }}></span>
              INQUIRIES & PARTNERSHIPS
            </div>
            <h2 style={{ fontSize: '3.8rem', lineHeight: 1.1, color: 'var(--on-surface)' }}>
              Let's Build the <br />
              <span className="text-gradient">Next Big Thing.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', maxWidth: '350px', marginBottom: '0.5rem' }}>
            Have a project in mind? Our team is ready to help you engineer a solution that scales.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>

          <div className="card-premium" style={{ background: 'white', padding: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--on-surface)', marginBottom: '2.5rem', fontWeight: 700 }}>Project Inquiry Form</h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" className="contact-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" className="contact-input" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Project Type</label>
                <select className="contact-input" style={{ appearance: 'none' }}>
                  <option>Web Application</option>
                  <option>AI / Machine Learning</option>
                  <option>CMS Development</option>
                  <option>Mobile App</option>
                  <option>Cloud Infrastructure</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="contact-input" style={{ resize: 'none' }}></textarea>
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem' }}>
                Initiate Project Discussion →
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--on-surface)', marginBottom: '1rem', fontWeight: 700 }}>Connect Directly</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'General Email', val: 'hello@theunipick.com', color: 'var(--primary)', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                { label: 'Technical Support', val: '+1 (555) 012-3456', color: 'var(--secondary)', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> },
                { label: 'Headquarters', val: 'Silicon Valley, CA, USA', color: 'var(--tech-teal)', icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></> }
              ].map((item, i) => (
                <div key={i} className="card-premium" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem 2rem', background: 'white' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '1rem',
                    background: 'var(--surface-container-low)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-variant)', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--on-surface)', marginTop: '0.25rem' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-premium" style={{ marginTop: '1rem', background: 'var(--gradient-primary)', color: 'white', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Ready for a demo?</div>
              <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a 1:1 architectural review with our engineering lead.</p>
              <button style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', fontWeight: 800, cursor: 'pointer' }}>
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          padding: 1rem 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid var(--surface-container);
          background: var(--surface-container-low);
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          color: var(--on-surface);
          transition: var(--transition-smooth);
        }
        .contact-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 0, 226, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
