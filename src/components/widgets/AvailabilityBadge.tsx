"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AvailabilityBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.35rem 0.75rem',
        background: 'rgba(45, 212, 191, 0.1)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(45, 212, 191, 0.2)',
        cursor: 'default',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
      }}
    >
      {/* Pulsing dot */}
      <div style={{ position: 'relative', width: '8px', height: '8px', flexShrink: 0 }}>
        <div style={{ width: '100%', height: '100%', background: 'var(--tech-teal)', borderRadius: '50%' }} />
        <motion.div
          animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ position: 'absolute', inset: 0, background: 'var(--tech-teal)', borderRadius: '50%', zIndex: -1 }}
        />
      </div>

      {/* Label – truncates on tiny screens */}
      <span style={{
        fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)',
        fontWeight: 800,
        color: 'var(--tech-teal)',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        Available for 3 new projects
      </span>
    </motion.div>
  );
};

export default AvailabilityBadge;
