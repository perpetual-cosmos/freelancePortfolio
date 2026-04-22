"use client";

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "FINTECH VENTURES", "AI RESEARCH LABS", "WE3 PROTOCOLS", "LOGISTICS GIANTS",
  "HEALTHCARE SYSTEMS", "EDTECH LMS", "FINTECH VENTURES", "AI RESEARCH LABS"
];

const TrustBar = () => {
  return (
    <div style={{
      background: 'var(--surface)',
      padding: '4rem 0',
      borderBottom: '1px solid var(--outline-variant)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 900,
          color: 'var(--on-surface-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em'
        }}>
          Engineering Solutions for Leading Industries
        </span>
      </div>

      <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            display: 'flex',
            gap: '6rem',
            whiteSpace: 'nowrap',
            alignItems: 'center'
          }}
        >
          {Array(2).fill(clients).flat().map((client, i) => (
            <span key={i} style={{
              fontSize: '1.4rem',
              fontWeight: 900,
              color: 'var(--on-surface)',
              opacity: 0.15,
              letterSpacing: '0.05em',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              {client}
            </span>
          ))}
        </motion.div>

        {/* Gradients for smooth fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--surface) 0%, transparent 15%, transparent 85%, var(--surface) 100%)', pointerEvents: 'none' }}></div>
      </div>
    </div>
  );
};

export default TrustBar;
