import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Architecture & Discovery',
    desc: 'We map out your technical ecosystem, from data schemas to cloud infrastructure.',
    icon: <Search size={28} />,
  },
  {
    id: '02',
    title: 'Rapid Prototyping',
    desc: 'Low-fidelity builds to validate core logic and user flows before full-scale engineering.',
    icon: <PenTool size={28} />,
  },
  {
    id: '03',
    title: 'Iterative Engineering',
    desc: 'High-velocity sprints with Typescript-first code and daily CI/CD deployments.',
    icon: <Code2 size={28} />,
  },
  {
    id: '04',
    title: 'QA & Load Testing',
    desc: 'Rigorous automated testing and stress tests to ensure production stability.',
    icon: <ShieldCheck size={28} />,
  },
  {
    id: '05',
    title: 'Automated Launch',
    desc: 'Zero-downtime releases with automated rollback safety nets and monitoring.',
    icon: <Rocket size={28} />,
  }
];

const Process = () => {
  return (
    <section id="process" style={{ background: 'var(--surface-container-low)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '1.25rem' }}>
            // OUR ENGINEERING LIFECYCLE
          </div>
          <h2 style={{ fontSize: '3.6rem', color: 'var(--on-surface)' }}>
            How We <span className="text-gradient">Execute</span>
          </h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{ 
                width: '72px',
                height: '72px',
                background: 'white',
                borderRadius: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--outline-variant)',
                marginBottom: '2.5rem',
                position: 'relative'
              }}>
                {step.icon}
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  background: 'var(--primary)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  padding: '2px 8px',
                  borderRadius: '10px'
                }}>
                  {step.id}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--on-surface)', fontWeight: 800 }}>{step.title}</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
