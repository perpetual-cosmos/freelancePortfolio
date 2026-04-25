"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--background)' }} className="noise-overlay">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <div style={{ maxWidth: '700px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.3rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <span style={{ width: '50px', height: '2px', background: 'var(--primary)' }}></span>
              PARTNERSHIPS & INQUIRIES
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Build the <br />
              <span className="text-gradient">Next Big Thing.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--on-surface-variant)', fontSize: '1.2rem', maxWidth: '400px', marginBottom: '0.5rem', lineHeight: 1.7 }}
          >
            Ready to scale your product? Our team of specialized engineers is just a message away.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium" 
            style={{ padding: '5rem 4.5rem' }}
          >
            <h3 style={{ fontSize: '2.2rem', marginBottom: '3.5rem' }}>Project Inquiry</h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>FULL NAME</label>
                  <input type="text" placeholder="John Doe" className="contact-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                  <input type="email" placeholder="john@example.com" className="contact-input" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>PROJECT CATEGORY</label>
                <select className="contact-input" style={{ appearance: 'none' }}>
                  <option>Next.js Application</option>
                  <option>AI / Machine Learning</option>
                  <option>Cloud Infrastructure</option>
                  <option>Enterprise Integration</option>
                  <option>Product Strategy</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.05em' }}>MESSAGE DETAILS</label>
                <textarea rows={5} placeholder="Tell us about your technical goals..." className="contact-input" style={{ resize: 'none' }}></textarea>
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.5rem' }}>
                Initiate Project <Send size={20} />
              </button>
            </form>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Direct Access</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'General Inquiries', val: 'hello@theunipick.com', color: 'var(--primary)', icon: <Mail size={22} /> },
                { label: 'Technical Lead', val: '+1 (555) 012-3456', color: 'var(--secondary)', icon: <Phone size={22} /> },
                { label: 'Engineering Hub', val: 'Silicon Valley, CA', color: 'var(--tech-teal)', icon: <MapPin size={22} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10, borderColor: 'var(--primary)' }}
                  className="card-premium" 
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem 2rem' }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: 'var(--surface-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--on-surface-muted)', letterSpacing: '0.1em' }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--on-surface)', marginTop: '0.25rem' }}>{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="card-premium" 
              style={{ 
                marginTop: '1rem', 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                color: 'white', 
                padding: '4rem 3rem', 
                textAlign: 'center', 
                position: 'relative', 
                overflow: 'hidden',
                border: 'none'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                <Calendar size={180} />
              </div>
              <h3 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Technical Review?</h3>
              <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>Book a 30-min architectural consultation with our principal engineer.</p>
              <button style={{ 
                background: 'white', 
                color: 'var(--primary)', 
                border: 'none', 
                padding: '1.25rem 2.5rem', 
                borderRadius: 'var(--radius-full)', 
                fontWeight: 900, 
                cursor: 'pointer', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                fontSize: '0.95rem', 
                position: 'relative', 
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                Schedule Call <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          padding: 1.25rem 1.75rem;
          border-radius: 1.25rem;
          border: 1px solid var(--outline);
          background: var(--surface-muted);
          font-family: 'Manrope', sans-serif;
          font-size: 1.05rem;
          color: var(--on-surface);
          transition: var(--transition-smooth);
          width: 100%;
        }
        .contact-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 0, 226, 0.08);
        }
      `}</style>
    </section>
  );
};

export default Contact;
