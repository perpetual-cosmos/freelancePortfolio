import React from 'react';
import { motion } from 'framer-motion';
import { LucideArrowUp as ArrowUp, LucideSend as Send } from 'lucide-react';
import { TwitterLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ padding: 'clamp(5rem, 8vw, 10rem) 1.25rem clamp(3rem, 5vw, 5rem)', background: '#ffffff', borderTop: '1px solid var(--outline-variant)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.03em', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', background: 'var(--gradient-primary, linear-gradient(135deg,#6300e2,#d946ef))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', flexShrink: 0 }}>U</div>
              TheUnipick
            </div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '360px' }}>
              Full-spectrum development studio engineering production-grade digital products. From React & AI to Cloud & DevOps — we build the whole product.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {[{ icon: <TwitterLogo size={22} weight="fill" />, href: '#' }, { icon: <LinkedinLogo size={22} weight="fill" />, href: '#' }, { icon: <GithubLogo size={22} weight="fill" />, href: '#' }].map((s, i) => (
                <motion.a key={i} href={s.href} whileHover={{ y: -4, color: 'var(--primary)' }}
                  style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface-container-low, #f1f5f9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-surface-variant)', cursor: 'pointer', transition: '0.3s' }}>
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'Portfolio', href: '/portfolio' }, { name: 'About Us', href: '/about' }, { name: 'Blog', href: '/blog' }, { name: 'Contact', href: '/contact' }].map(item => (
                <motion.a key={item.name} href={item.href} whileHover={{ x: 4, color: 'var(--primary)' }}
                  style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)', fontWeight: 600, transition: 'color 0.2s', textDecoration: 'none' }}>
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <div style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Expertise</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {['React Studio', 'AI Pipelines', 'Node.js Core', 'Cloud Infra', 'Mobile Apps'].map(item => (
                <motion.a key={item} href="#" whileHover={{ x: 4, color: 'var(--primary)' }}
                  style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)', fontWeight: 600, transition: 'color 0.2s', textDecoration: 'none' }}>
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div style={{ fontWeight: 900, fontSize: '0.85rem', marginBottom: '2.5rem', color: 'var(--on-surface)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Newsletter</div>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.7 }}>Subscribe for architectural insights and engineering updates.</p>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <input type="email" placeholder="Email address"
                style={{ flex: 1, background: 'var(--surface-container-low, #f1f5f9)', border: '1px solid var(--outline-variant)', padding: '0.85rem 1.25rem', borderRadius: '1rem', fontSize: '0.95rem', outline: 'none', minWidth: 0 }} />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{ background: 'var(--primary)', color: 'white', border: 'none', width: '52px', height: '52px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <Send size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>© 2026 TheUnipick Studio. Built for Performance.</div>
          <motion.div onClick={scrollToTop} whileHover={{ y: -4 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', color: 'var(--primary)', fontWeight: 700 }}>
            BACK TO TOP <ArrowUp size={16} />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          margin-bottom: 5rem;
        }
        .footer-brand { grid-column: 1 / -1; }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 3rem;
          border-top: 1px solid var(--outline-variant);
          color: var(--on-surface-muted);
          font-size: 0.88rem;
          font-weight: 600;
        }
        @media (min-width: 480px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (min-width: 640px) {
          footer { padding-left: 1.75rem; padding-right: 1.75rem; }
          .footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2.2fr 1fr 1fr 1.8fr;
            gap: 5rem;
            margin-bottom: 7rem;
          }
          .footer-brand { grid-column: auto; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
