"use client";

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "FINTECH VENTURES", "AI RESEARCH LABS", "WEB3 PROTOCOLS", "LOGISTICS GIANTS",
  "HEALTHCARE SYSTEMS", "EDTECH LMS", "FINTECH VENTURES", "AI RESEARCH LABS"
];

const TrustBar = () => {
  return (
    <div style={{
      background: 'var(--surface)',
      padding: '5rem 0',
      borderTop: '1px solid var(--outline)',
      borderBottom: '1px solid var(--outline)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            opacity: 0.6
          }}
        >
          TRUSTED INFRASTRUCTURE FOR AMBITIOUS SCALE
        </motion.span>
      </div>

      <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{
            display: 'flex',
            gap: '8rem',
            whiteSpace: 'nowrap',
            alignItems: 'center'
          }}
        >
          {Array(3).fill(clients).flat().map((client, i) => (
            <span key={i} style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'var(--on-surface)',
              opacity: 0.1,
              letterSpacing: '0.1em',
              fontFamily: 'Space Grotesk'
            }}>
              {client}
            </span>
          ))}
        </motion.div>

        {/* Gradients for smooth fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--surface) 0%, transparent 20%, transparent 80%, var(--surface) 100%)', pointerEvents: 'none' }}></div>
      </div>
    </div>
  );
};

export default TrustBar;
