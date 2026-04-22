import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 3rem)',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.75rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 'var(--radius-full)',
      border: '1px solid rgba(99, 0, 226, 0.1)',
      boxShadow: 'var(--shadow-lg)'
    }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', color: 'white', fontSize: '1rem' }}>U</div>
        TheUnipick
      </motion.div>

      {/* Desktop Menu */}
      <div style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-menu">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ y: -2 }}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--on-surface-variant)',
              transition: 'var(--transition-fast)'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--on-surface-variant)'}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', boxShadow: 'none' }}>
          Consultation <ArrowUpRight size={16} />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--on-surface)', cursor: 'pointer' }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style jsx>{`
        .desktop-menu { display: flex !important; }
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

