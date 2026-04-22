import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ padding: '10rem 2rem 5rem', background: '#ffffff', borderTop: '1px solid var(--outline-variant)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 2fr', gap: '8rem', marginBottom: '8rem' }}>

          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.03em', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>U</div>
              TheUniPick
            </div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '380px' }}>
              Building future-ready digital solutions with AI, modern frameworks, and architectural precision.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {[
                { icon: <Send size={20} />, href: '#' },
                { icon: <Send size={20} />, href: '#' },
                { icon: <Send size={20} />, href: '#' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, color: 'var(--primary)', backgroundColor: 'var(--surface-container)' }}
                  style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--surface-container-low)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-surface-variant)', cursor: 'pointer', transition: '0.3s' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '3rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['Home', 'About Us', 'Portfolio', 'Services', 'Contact'].map(item => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 5, color: 'var(--primary)' }}
                  style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', fontWeight: 600, transition: 'color 0.2s' }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '3rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expertise</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {['React Studio', 'AI Pipelines', 'Node.js Core', 'Cloud Infra', 'Mobile Apps'].map(item => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 5, color: 'var(--primary)' }}
                  style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', fontWeight: 600, transition: 'color 0.2s' }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 900, fontSize: '0.9rem', marginBottom: '3rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Newsletter</div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>Subscribe for architectural insights and engineering updates.</p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <input type="email" placeholder="Email address" style={{ flex: 1, background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', padding: '1rem 1.5rem', borderRadius: '1rem', fontSize: '1rem', outline: 'none' }} />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--primary)', color: 'white', border: 'none', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>

        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '4rem',
          borderTop: '1px solid var(--outline-variant)',
          color: 'var(--on-surface-muted)',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          <div>© 2026 TheUniPick Studio. Built for Performance.</div>
          <motion.div
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: 'var(--primary)' }}
          >
            BACK TO TOP <ArrowUp size={18} />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

