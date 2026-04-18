import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '8rem 2rem 4rem', background: '#ffffff', borderTop: '1px solid rgba(99, 0, 226, 0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '6rem', marginBottom: '8rem' }}>
          
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
              TheUniPick
            </div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '350px' }}>
              Building future-ready digital solutions with AI, modern frameworks, and a passion for innovation.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {['🐦', '👤', '📦'].map((icon, i) => (
                <div key={i} style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', transition: '0.3s' }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--on-surface)' }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {['Home', 'About Us', 'Portfolio', 'Blog', 'Contact'].map(item => (
                <a key={item} href="#" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', transition: 'var(--transition-smooth)' }}>{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--on-surface)' }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {['React Development', 'AI Solutions', 'CMS Development', 'Node.js', 'Spring Boot', 'Mobile Apps'].map(item => (
                <a key={item} href="#" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', transition: 'var(--transition-smooth)' }}>{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--on-surface)' }}>Newsletter</div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>Stay updated with the latest in tech and AI.</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="Your email" style={{ flex: 1, background: '#F3F4F6', border: 'none', padding: '1rem 1.25rem', borderRadius: '0.75rem', fontSize: '0.9rem' }} />
              <button className="btn-primary" style={{ padding: '1rem 2rem' }}>Subscribe</button>
            </div>
          </div>

        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          paddingTop: '3rem', 
          borderTop: '1px solid rgba(99, 0, 226, 0.05)',
          color: 'var(--on-surface-variant)',
          fontSize: '0.95rem'
        }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>↑</div>
          <div>© 2026 TheUniPick. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
