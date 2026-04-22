import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Heart, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '200+', icon: <Trophy size={20} /> },
  { label: 'Clients Served', value: '80+', icon: <Users size={20} /> },
  { label: 'Years Experience', value: '8+', icon: <Calendar size={20} /> },
  { label: 'Satisfaction Rate', value: '99%', icon: <Heart size={20} /> },
];

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--surface-container-low)', position: 'relative' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '6rem',
        alignItems: 'center'
      }}>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div className="card-premium" style={{
            padding: 0,
            overflow: 'hidden',
            height: '550px',
            boxShadow: 'var(--shadow-lg)',
            border: '8px solid white',
            borderRadius: 'var(--radius-xl)'
          }}>
            <img
              src="/about_excellence_1776542525381.png"
              alt="Engineering Excellence"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            bottom: '3rem',
            right: '-1.5rem',
            background: 'var(--gradient-primary)',
            color: 'var(--on-primary)',
            padding: '2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 40px rgba(217, 70, 239, 0.3)',
            zIndex: 10
          }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.9, marginBottom: '0.25rem', letterSpacing: '0.1em' }}>ESTABLISHED</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>2017</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '2px', background: 'var(--primary)' }}></div>
            OUR PHILOSOPHY
          </div>
          <h2 style={{ fontSize: '3.6rem', marginBottom: '2.5rem', lineHeight: 1.1, color: 'var(--on-surface)' }}>
            We believe in <br />
            <span className="text-gradient">Maintainable Excellence</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            TheUnipick was founded on a simple realization: the industry is full of bloated, fragile code. We choose a different path. We build lean, modular systems designed to scale from the first commit. Our focus isn't just shipping—it's shipping code that won't keep you up at night.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {[
              { label: 'Next.js Deployments', value: '40+', icon: <Trophy size={20} /> },
              { label: 'Lines of Test Code', value: '12k+', icon: <Users size={20} /> },
              { label: 'Engineering Years', value: '8+', icon: <Calendar size={20} /> },
              { label: 'Uptime SLA Met', value: '99.9%', icon: <Heart size={20} /> },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="card-premium" 
                style={{ border: '1px solid var(--outline-variant)', background: 'white', padding: '1.5rem 2rem' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{stat.icon}</div>
                <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>{stat.value}</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

