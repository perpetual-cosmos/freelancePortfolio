"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonies = [
  {
    quote: "TheUnipick delivered an outstanding AI platform that transformed our data analytics. Their team's expertise and dedication exceeded our expectations.",
    author: "Sarah Jenkins",
    role: "CTO at Nexus AI",
    color: "var(--primary)"
  },
  {
    quote: "Working with TheUnipick has been a game-changer for our e-commerce business. The custom CMS they built is intuitive, fast, and incredibly powerful.",
    author: "David Chen",
    role: "Founder of UrbanStyle",
    color: "var(--secondary)"
  },
  {
    quote: "The mobile app developed by TheUnipick is sleek, performant, and loved by our users. Their attention to detail in UI/UX is truly world-class.",
    author: "Elena Rodriguez",
    role: "Product Lead at FitTrack",
    color: "var(--tech-teal)"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}
          >
            // CLIENT FEEDBACK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Validated by <span className="text-gradient">Digital Leaders</span>
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem'
        }}>
          {testimonies.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                padding: '4rem 3.5rem',
                position: 'relative'
              }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                background: 'var(--surface-muted)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: t.color
              }}>
                <Quote size={24} fill="currentColor" opacity={0.2} />
              </div>
              
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.1rem', lineHeight: 1.8, fontStyle: 'italic', flex: 1 }}>
                "{t.quote}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', borderTop: '1px solid var(--outline)', paddingTop: '2.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--surface-muted)', border: `2px solid ${t.color}` }}></div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--on-surface)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--on-surface-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>{t.role.toUpperCase()}</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} fill={t.color} color={t.color} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
