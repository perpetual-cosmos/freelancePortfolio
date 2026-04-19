import React from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.5rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(99, 0, 226, 0.05)'
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em' }}>
        TheUniPick
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem', marginRight: '2rem' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--on-surface-variant)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--on-surface-variant)'}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.85rem' }}>
          Get Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
