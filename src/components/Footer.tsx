import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '6rem 2rem 2rem', background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
          
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              THEUNIPICK
            </div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>
              Full-service software development company engineering digital solutions that scale. From AI to enterprise-grade platforms.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--tech-teal)' }}></div>
              Available for new projects
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: 'var(--on-surface-variant)' }}>// SERVICES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['CMS Development', 'React & Frontend', 'Node.js Backend', 'AI & ML Solutions', 'Mobile Apps'].map(item => (
                <a key={item} href="#" style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', transition: 'var(--transition-smooth)' }}>{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: 'var(--on-surface-variant)' }}>// COMPANY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['About Us', 'Portfolio', 'Testimonials', 'Careers', 'Blog'].map(item => (
                <a key={item} href="#" style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', transition: 'var(--transition-smooth)' }}>{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: 'var(--on-surface-variant)' }}>// RESOURCES</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Documentation', 'Case Studies', 'Tech Stack', 'Privacy Policy', 'Terms of Service'].map(item => (
                <a key={item} href="#" style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', transition: 'var(--transition-smooth)' }}>{item}</a>
              ))}
            </div>
          </div>

        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid var(--outline-variant)',
          color: 'var(--on-surface-variant)',
          fontSize: '0.85rem'
        }}>
          <div>© 2026 TheUniPick. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
