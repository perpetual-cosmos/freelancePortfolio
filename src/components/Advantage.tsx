import React from 'react';

const edges = [
  { title: "Rapid Delivery", desc: "Agile sprints with 2-week release cycles. Get your MVP to market faster than competitors." },
  { title: "Clean Architecture", desc: "SOLID principles, comprehensive testing, and documentation that makes handoffs seamless." },
  { title: "Dedicated Teams", desc: "Full-stack squads assigned exclusively to your project for maximum focus and velocity." },
  { title: "Scalable Systems", desc: "Infrastructure designed to handle 10x growth without re-architecture or downtime." },
  { title: "24/7 Support", desc: "Round-the-clock monitoring, incident response, and dedicated account management." },
  { title: "On-Time, On-Budget", desc: "95% of projects delivered within agreed timeline and budget. Transparent billing always." }
];

const Advantage = () => {
  return (
    <section id="advantage" className="glass" style={{ margin: '4rem 2rem', borderRadius: '3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            // WHY THEUNIPICK
          </div>
          <h2 style={{ fontSize: '3.5rem' }}>The UniPick Advantage</h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          columnGap: '4rem',
          rowGap: '5rem'
        }}>
          {edges.map((e, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 200, 
                color: 'var(--primary)', 
                fontFamily: 'Space Grotesk',
                lineHeight: 1,
                opacity: 0.3
              }}>
                0{i + 1}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{e.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
