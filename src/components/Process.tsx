import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  { id: '01', title: 'Architecture & Discovery', desc: 'We map out your technical ecosystem, from data schemas to cloud infrastructure.', icon: <Search size={26} /> },
  { id: '02', title: 'Rapid Prototyping', desc: 'Low-fidelity builds to validate core logic and user flows before full-scale engineering.', icon: <PenTool size={26} /> },
  { id: '03', title: 'Iterative Engineering', desc: 'High-velocity sprints with Typescript-first code and daily CI/CD deployments.', icon: <Code2 size={26} /> },
  { id: '04', title: 'QA & Load Testing', desc: 'Rigorous automated testing and stress tests to ensure production stability.', icon: <ShieldCheck size={26} /> },
  { id: '05', title: 'Automated Launch', desc: 'Zero-downtime releases with automated rollback safety nets and monitoring.', icon: <Rocket size={26} /> }
];

const Process = () => {
  return (
    <section id="process" style={{ background: 'var(--surface-container-low, #f8f7ff)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 7vw, 8rem)' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.2em', marginBottom: '1.1rem' }}>
            // OUR ENGINEERING LIFECYCLE
          </div>
          <h2 style={{ color: 'var(--on-surface)' }}>
            How We <span className="text-gradient">Execute</span>
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '66px', height: '66px', background: 'white', borderRadius: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--outline-variant)', marginBottom: '2rem', position: 'relative', flexShrink: 0 }}>
                {step.icon}
                <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', background: 'var(--primary)', color: 'white', fontSize: '0.7rem', fontWeight: 900, padding: '2px 7px', borderRadius: '9px' }}>
                  {step.id}
                </div>
              </div>
              <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', marginBottom: '1rem', color: 'var(--on-surface)', fontWeight: 800 }}>{step.title}</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.65, maxWidth: '200px' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem 2rem;
        }
        @media (min-width: 640px) {
          section { padding-left: 1.75rem; padding-right: 1.75rem; }
          .process-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .process-grid { grid-template-columns: repeat(5, 1fr); gap: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Process;
