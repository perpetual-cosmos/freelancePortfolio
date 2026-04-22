import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowUpRight, ChevronDown, 
  Globe, Code2, Server, Coffee, Brain, 
  Smartphone, BarChart3, ShoppingBag, Cloud,
  ArrowRight
} from 'lucide-react';
import AvailabilityBadge from './widgets/AvailabilityBadge';

const services = [
  { id: '01', title: 'CMS Development', desc: 'Custom WordPress & Headless CMS', icon: <Globe size={20} />, color: '#3b82f6', href: '/services#cms' },
  { id: '02', title: 'React & Frontend', desc: 'Next.js & Performance Optimization', icon: <Code2 size={20} />, color: '#14b8a6', href: '/services#react' },
  { id: '03', title: 'Node.js Backend', desc: 'Scalable APIs & Microservices', icon: <Server size={20} />, color: '#22c55e', href: '/services#node' },
  { id: '04', title: 'Enterprise Java', desc: 'Robust Spring Boot Systems', icon: <Coffee size={20} />, color: '#f59e0b', href: '/services#java' },
  { id: '05', title: 'AI & ML', desc: 'Custom Models & LLM Integration', icon: <Brain size={20} />, color: '#a855f7', href: '/services#ai' },
  { id: '06', title: 'Mobile Apps', desc: 'Native & Cross-platform solutions', icon: <Smartphone size={20} />, color: '#f43f5e', href: '/services#mobile' },
  { id: '07', title: 'Data Analytics', desc: 'ETL & Business Intelligence', icon: <BarChart3 size={20} />, color: '#3b82f6', href: '/services#data' },
  { id: '08', title: 'E-Commerce', desc: 'Scalable Storefronts & Shopify', icon: <ShoppingBag size={20} />, color: '#ec4899', href: '/services#ecommerce' },
  { id: '09', title: 'Cloud & DevOps', desc: 'AWS/GCP & CI/CD Pipelines', icon: <Cloud size={20} />, color: '#64748b', href: '/services#cloud' },
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

  return (
    <div style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 3rem)', maxWidth: '1200px', zIndex: 1000 }}>
      <nav className="glass" style={{
        padding: '0.75rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(99, 0, 226, 0.1)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        zIndex: 1001
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{ width: '32px', height: '32px', background: 'var(--gradient-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>U</div>
          TheUnipick
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <motion.a
            href="/"
            whileHover={{ y: -2 }}
            style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--on-surface-variant)', transition: 'var(--transition-fast)' }}
          >
            Home
          </motion.a>
          
          <div 
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
            style={{ position: 'relative', paddingBottom: '1rem', marginBottom: '-1rem' }}
          >
            <motion.div
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: showMegaMenu ? 'var(--primary)' : 'var(--on-surface-variant)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'var(--transition-fast)'
              }}
            >
              Services <ChevronDown size={14} style={{ transform: showMegaMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
            </motion.div>

            <AnimatePresence>
              {showMegaMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 0.75rem)',
                    left: '0',
                    width: '540px',
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    padding: '1.25rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    border: '1px solid var(--outline-variant)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                    zIndex: 1002
                  }}
                >
                  {services.map((s) => (
                    <motion.a
                      key={s.id}
                      href={s.href}
                      whileHover={{ backgroundColor: 'var(--surface-container-low)', x: 5 }}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ 
                        color: s.color, 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '10px', 
                        background: `${s.color}10`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--on-surface)', marginBottom: '0.15rem' }}>{s.title}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--on-surface-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>{s.desc}</div>
                      </div>
                    </motion.a>
                  ))}
                  
                  <div style={{ gridColumn: 'span 2', borderTop: '1px solid var(--outline-variant)', paddingTop: '1rem', marginTop: '0.5rem', textAlign: 'center' }}>
                    <a href="/services" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      Explore All Expertise <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.filter(l => l.name !== 'Home').map((link) => (
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

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div className="desktop-menu" style={{ display: 'none' }}>
            <AvailabilityBadge />
          </div>
          
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
    </div>
  );
};

export default Navbar;


