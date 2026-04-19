import React from 'react';

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Clients Served', value: '80+' },
  { label: 'Years of Experience', value: '8+' },
  { label: 'Client Satisfaction', value: '99%' },
];

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--surface-container-low)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '6rem',
        alignItems: 'center'
      }}>

        <div style={{ position: 'relative' }}>
          <div className="card-premium" style={{
            padding: 0,
            overflow: 'hidden',
            height: '550px',
            boxShadow: '0 40px 80px rgba(99, 0, 226, 0.1)',
            border: '8px solid white'
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
            <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.9, marginBottom: '0.25rem', letterSpacing: '0.1em' }}>EST.</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>2017</div>
          </div>
        </div>

        <div>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            ABOUT US
          </div>
          <h2 style={{ fontSize: '3.6rem', marginBottom: '2.5rem', lineHeight: 1.1, color: 'var(--on-surface)' }}>
            Empowering Businesses with <br />
            <span className="text-gradient">Cutting-Edge Technology</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            TheUniPick is a forward-thinking software development company specializing in building robust, scalable, and intelligent digital solutions. We combine deep technical expertise with creative problem-solving to deliver products that drive real business results.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {stats.map((stat, i) => (
              <div key={i} className="card-premium" style={{ border: '1px solid var(--outline-variant)', background: 'white', padding: '1.5rem 2rem' }}>
                <div className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'Space Grotesk' }}>{stat.value}</div>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
