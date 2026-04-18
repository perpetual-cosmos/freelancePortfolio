import React from 'react';

const steps = [
  {
    id: '1',
    title: 'Requirement Analysis',
    desc: 'Deep-dive into your goals, users, and technical needs.',
    icon: '🔍',
    color: '#0ea5e9' // Blue
  },
  {
    id: '2',
    title: 'Design & Planning',
    desc: 'Wireframes, architecture, and roadmap creation.',
    icon: '✒️',
    color: '#a855f7' // Purple
  },
  {
    id: '3',
    title: 'Development',
    desc: 'Agile sprints with transparent progress updates.',
    icon: '«/»',
    color: '#f59e0b' // Orange
  },
  {
    id: '4',
    title: 'Testing',
    desc: 'Comprehensive QA, performance, and security testing.',
    icon: '🧪',
    color: '#22c55e' // Green
  },
  {
    id: '5',
    title: 'Deployment & Support',
    desc: 'Smooth launch with ongoing maintenance and scaling.',
    icon: '🚀',
    color: '#ef4444' // Red
  }
];

const Process = () => {
  return (
    <section id="process" style={{ background: 'var(--surface-container-low)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>
            OUR PROCESS
          </div>
          <h2 style={{ fontSize: '3.6rem' }}>
            How We <span className="text-gradient">Work</span>
          </h2>
        </div>
        
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
          {/* Connecting Line */}
          <div style={{ 
            position: 'absolute', 
            top: '40px', 
            left: '50px', 
            right: '50px', 
            height: '2px', 
            background: 'var(--outline-variant)', 
            zIndex: 0,
            opacity: 0.5 
          }}></div>

          {steps.map((step, i) => (
            <div key={i} style={{ 
              zIndex: 1, 
              width: '18%', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ 
                position: 'relative',
                marginBottom: '2.5rem'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: step.color,
                  borderRadius: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  boxShadow: `0 20px 40px ${step.color}33`,
                  position: 'relative'
                }}>
                  {step.icon}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '32px',
                    height: '32px',
                    background: 'white',
                    border: `2px solid ${step.color}`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.color,
                    fontSize: '0.85rem',
                    fontWeight: 800
                  }}>
                    {step.id}
                  </div>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--on-surface)' }}>{step.title}</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
