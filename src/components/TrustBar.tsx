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
      padding: 'clamp(3rem, 5vw, 5rem) 0',
      borderTop: '1px solid var(--outline)',
      borderBottom: '1px solid var(--outline)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Label */}
      <div style={{ maxWidth: '1200px', margin: '0 auto clamp(1.75rem, 3vw, 3rem) auto', textAlign: 'center', padding: '0 1.25rem' }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
            fontWeight: 800,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            opacity: 0.6,
          }}
        >
          TRUSTED INFRASTRUCTURE FOR AMBITIOUS SCALE
        </motion.span>
      </div>

      {/* Marquee */}
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: 'clamp(3.5rem, 7vw, 8rem)', whiteSpace: 'nowrap', alignItems: 'center' }}
        >
          {Array(3).fill(clients).flat().map((client, i) => (
            <span key={i} style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
              fontWeight: 800,
              color: 'var(--on-surface)',
              opacity: 0.1,
              letterSpacing: '0.08em',
              fontFamily: 'Space Grotesk',
            }}>
              {client}
            </span>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--surface) 0%, transparent 15%, transparent 85%, var(--surface) 100%)', pointerEvents: 'none' }} />
      </div>
    </div>
  );
};

export default TrustBar;
