import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, Globe, Code2, Server, Coffee, Brain, Smartphone, BarChart3, ShoppingBag, Cloud, ArrowRight } from 'lucide-react';
import AvailabilityBadge from './widgets/AvailabilityBadge';

const services = [
  { id: '01', title: 'CMS Development', desc: 'Custom WordPress & Headless CMS', icon: <Globe size={18} />, color: '#3b82f6', href: '/services#cms' },
  { id: '02', title: 'React & Frontend', desc: 'Next.js & Performance Optimization', icon: <Code2 size={18} />, color: '#14b8a6', href: '/services#react' },
  { id: '03', title: 'Node.js Backend', desc: 'Scalable APIs & Microservices', icon: <Server size={18} />, color: '#22c55e', href: '/services#node' },
  { id: '04', title: 'Enterprise Java', desc: 'Robust Spring Boot Systems', icon: <Coffee size={18} />, color: '#f59e0b', href: '/services#java' },
  { id: '05', title: 'AI & ML', desc: 'Custom Models & LLM Integration', icon: <Brain size={18} />, color: '#a855f7', href: '/services#ai' },
  { id: '06', title: 'Mobile Apps', desc: 'Native & Cross-platform solutions', icon: <Smartphone size={18} />, color: '#f43f5e', href: '/services#mobile' },
  { id: '07', title: 'Data Analytics', desc: 'ETL & Business Intelligence', icon: <BarChart3 size={18} />, color: '#3b82f6', href: '/services#data' },
  { id: '08', title: 'E-Commerce', desc: 'Scalable Storefronts & Shopify', icon: <ShoppingBag size={18} />, color: '#ec4899', href: '/services#ecommerce' },
  { id: '09', title: 'Cloud & DevOps', desc: 'AWS/GCP & CI/CD Pipelines', icon: <Cloud size={18} />, color: '#64748b', href: '/services#cloud' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  return (
    <div style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 2rem)', maxWidth: '1200px', zIndex: 1000 }}>
      <nav className="glass" style={{ padding: '0.65rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 'var(--radius-full)', border: '1px solid rgba(99, 0, 226, 0.1)', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1001 }}>
        {/* Logo */}
        <motion.a href="/" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ width: '30px', height: '30px', background: 'var(--gradient-primary, linear-gradient(135deg,#6300e2,#d946ef))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.9rem', flexShrink: 0 }}>U</div>
          <span className="nav-logo-text">TheUnipick</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          <motion.a href="/" whileHover={{ y: -2 }} style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Home</motion.a>

          <div onMouseEnter={() => setShowMegaMenu(true)} onMouseLeave={() => setShowMegaMenu(false)} style={{ position: 'relative', paddingBottom: '1rem', marginBottom: '-1rem' }}>
            <motion.div style={{ fontSize: '0.88rem', fontWeight: 600, color: showMegaMenu ? 'var(--primary)' : 'var(--on-surface-variant)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Services <ChevronDown size={13} style={{ transform: showMegaMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
            </motion.div>
            <AnimatePresence>
              {showMegaMenu && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 5, scale: 0.98 }} transition={{ duration: 0.15 }}
                  style={{ position: 'absolute', top: 'calc(100% + 0.75rem)', left: '0', width: '520px', backgroundColor: 'white', borderRadius: '1.5rem', padding: '1.25rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid var(--outline-variant)', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.4rem', zIndex: 1002 }}>
                  {services.map((s) => (
                    <motion.a key={s.id} href={s.href} whileHover={{ backgroundColor: 'var(--surface-container-low)', x: 4 }}
                      style={{ padding: '0.65rem 0.9rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
                      <div style={{ color: s.color, width: '32px', height: '32px', borderRadius: '8px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 16 })}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--on-surface)', marginBottom: '0.1rem' }}>{s.title}</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--on-surface-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '160px' }}>{s.desc}</div>
                      </div>
                    </motion.a>
                  ))}
                  <div style={{ gridColumn: 'span 2', borderTop: '1px solid var(--outline-variant)', paddingTop: '1rem', marginTop: '0.25rem', textAlign: 'center' }}>
                    <a href="/services" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      Explore All Expertise <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.filter(l => l.name !== 'Home').map((link) => (
            <motion.a key={link.name} href={link.href} whileHover={{ y: -2 }}
              style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--on-surface-variant)', textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--on-surface-variant)'}>
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="desktop-menu">
            <AvailabilityBadge />
          </div>
          <button className="btn-primary nav-cta" style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem', boxShadow: 'none' }}>
            Consultation <ArrowUpRight size={15} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle"
            style={{ background: 'none', border: 'none', color: 'var(--on-surface)', cursor: 'pointer', padding: '0.25rem' }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2 }}
            className="glass mobile-drawer">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  style={{ padding: '0.85rem 1.25rem', borderRadius: '1rem', fontSize: '1rem', fontWeight: 700, color: 'var(--on-surface)', textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(99,0,226,0.06)'; e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--on-surface)'; }}>
                  {link.name}
                </a>
              ))}

              <div>
                <button onClick={() => setShowMobileServices(!showMobileServices)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem', borderRadius: '1rem', fontSize: '1rem', fontWeight: 700, color: 'var(--on-surface)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  Services
                  <ChevronDown size={16} style={{ transform: showMobileServices ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
                </button>
                {showMobileServices && (
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: '0.25rem' }}>
                    {services.map(s => (
                      <a key={s.id} href={s.href} onClick={() => setIsOpen(false)}
                        style={{ padding: '0.65rem 1rem', borderRadius: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--on-surface-variant)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ color: s.color }}>{React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 15 })}</span>
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--outline)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem 1.5rem' }}>
                Book Consultation <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-logo-text { display: inline; }
        .desktop-menu { display: flex !important; }
        .mobile-toggle { display: none !important; }
        .mobile-drawer {
          margin-top: 0.75rem;
          border-radius: 1.75rem;
          padding: 1.25rem;
          border: 1px solid rgba(99,0,226,0.1);
          box-shadow: var(--shadow-lg);
          display: none;
        }
        @media (max-width: 1024px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .mobile-drawer { display: block; }
          .nav-cta { display: none !important; }
        }
        @media (max-width: 400px) {
          .nav-logo-text { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
