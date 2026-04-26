"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--background)' }} className="noise-overlay">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.25rem' }}>
        {/* Header */}
        <div className="contact-header">
          <div style={{ maxWidth: '700px' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span style={{ width: '40px', height: '2px', background: 'var(--primary)', flexShrink: 0 }} />
              PARTNERSHIPS & INQUIRIES
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Let's Build the <br /><span className="text-gradient">Next Big Thing.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="contact-sub" style={{ color: 'var(--on-surface-variant)', fontSize: 'clamp(1rem,1.5vw,1.2rem)', maxWidth: '400px', lineHeight: 1.7 }}>
            Ready to scale your product? Our team of specialized engineers is just a message away.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="contact-grid">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card-premium contact-form-card" style={{ padding: 'clamp(2rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem)' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '2.5rem' }}>Project Inquiry</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="form-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>FULL NAME</label>
                  <input type="text" placeholder="John Doe" className="contact-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" className="contact-input" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>PROJECT CATEGORY</label>
                <select className="contact-input" style={{ appearance: 'none' }}>
                  <option>Next.js Application</option>
                  <option>AI / Machine Learning</option>
                  <option>Cloud Infrastructure</option>
                  <option>Enterprise Integration</option>
                  <option>Product Strategy</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>MESSAGE DETAILS</label>
                <textarea rows={5} placeholder="Tell us about your technical goals..." className="contact-input" style={{ resize: 'none' }} />
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem' }}>
                Initiate Project <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Side info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', marginBottom: '0.25rem' }}>Direct Access</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'General Inquiries', val: 'hello@theunipick.com', color: 'var(--primary)', icon: <Mail size={20} /> },
                { label: 'Technical Lead', val: '+1 (555) 012-3456', color: 'var(--secondary)', icon: <Phone size={20} /> },
                { label: 'Engineering Hub', val: 'Silicon Valley, CA', color: 'var(--tech-teal)', icon: <MapPin size={20} /> }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 8, borderColor: 'var(--primary)' }}
                  className="card-premium" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1.25rem 1.5rem' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--surface-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.1em' }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontWeight: 800, fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--on-surface)', marginTop: '0.2rem' }}>{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA card */}
            <motion.div whileHover={{ scale: 1.02 }} className="card-premium"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', padding: 'clamp(2.5rem, 4vw, 4rem) clamp(1.5rem, 3vw, 3rem)', textAlign: 'center', position: 'relative', overflow: 'hidden', border: 'none', marginTop: '0.5rem' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                <Calendar size={160} />
              </div>
              <h3 style={{ color: 'white', fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Technical Review?</h3>
              <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>Book a 30-min architectural consultation with our principal engineer.</p>
              <button style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '1.1rem 2rem', borderRadius: 'var(--radius-full)', fontWeight: 900, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                Schedule Call <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-header {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .contact-sub { margin-bottom: 0; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: flex-start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .contact-input {
          padding: 1rem 1.5rem;
          border-radius: 1.1rem;
          border: 1px solid var(--outline);
          background: var(--surface-muted);
          font-family: 'Manrope', sans-serif;
          font-size: 1rem;
          color: var(--on-surface);
          transition: var(--transition-smooth);
          width: 100%;
        }
        .contact-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99,0,226,0.08);
        }

        @media (min-width: 480px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
        }
        @media (min-width: 768px) {
          .contact-header { flex-direction: row; justify-content: space-between; align-items: flex-end; margin-bottom: 6rem; }
          .contact-sub { margin-bottom: 0.5rem; }
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1.3fr 1fr; gap: 5rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
