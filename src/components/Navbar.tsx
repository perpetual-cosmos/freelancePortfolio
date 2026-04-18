import React from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Benefits', href: '#advantage' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--outline-variant)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
        THEUNIPICK
      </div>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            style={{ 
              fontSize: '0.9rem', 
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
        <button className="btn-primary" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
          GET A QUOTE
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
