import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.2rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <span style={{ width: '40px', height: '2px', background: 'var(--primary)' }}></span>
              INQUIRIES & PARTNERSHIPS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: '3.8rem', lineHeight: 1.1, color: 'var(--on-surface)' }}
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
            style={{ color: 'var(--on-surface-variant)', fontSize: '1.2rem', maxWidth: '350px', marginBottom: '0.5rem', lineHeight: 1.6 }}
          >
            Have a project in mind? Our team is ready to help you engineer a solution that scales.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '8rem', alignItems: 'flex-start' }}>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium" 
            style={{ background: 'white', padding: '5rem 4rem' }}
          >
            <h3 style={{ fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '3rem', fontWeight: 700 }}>Project Inquiry Form</h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface-variant)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" className="contact-input" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface-variant)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" className="contact-input" />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface-variant)' }}>Project Type</label>
                <select className="contact-input" style={{ appearance: 'none' }}>
                  <option>Web Application</option>
                  <option>AI / Machine Learning</option>
                  <option>CMS Development</option>
                  <option>Mobile App</option>
                  <option>Cloud Infrastructure</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--on-surface-variant)' }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="contact-input" style={{ resize: 'none' }}></textarea>
              </div>

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', fontSize: '1rem' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--on-surface)', marginBottom: '0.5rem', fontWeight: 800 }}>Direct Contact</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'General Email', val: 'hello@theunipick.com', color: 'var(--primary)', icon: <Mail size={20} /> },
                { label: 'Technical Support', val: '+1 (555) 012-3456', color: 'var(--secondary)', icon: <Phone size={20} /> },
                { label: 'Headquarters', val: 'Silicon Valley, CA, USA', color: 'var(--tech-teal)', icon: <MapPin size={20} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="card-premium" 
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem 2rem', background: 'white', border: '1px solid var(--outline-variant)' }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'var(--surface-container-low)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--on-surface-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--on-surface)', marginTop: '0.25rem' }}>{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="card-premium" 
              style={{ marginTop: '1.5rem', background: 'var(--gradient-primary)', color: 'white', padding: '3.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
                <Calendar size={120} />
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Ready for a Demo?</div>
              <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>Schedule a 1:1 architectural review with our engineering lead.</p>
              <button style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '1rem 2.5rem', borderRadius: 'var(--radius-full)', fontWeight: 900, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
                Book Now <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-input {
          padding: 1.25rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid var(--surface-container);
          background: var(--surface-container-low);
          font-family: 'Manrope', sans-serif;
          font-size: 1.05rem;
          color: var(--on-surface);
          transition: var(--transition-smooth);
        }
        .contact-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 0, 226, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;

