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
        gap: '0.5rem',
        padding: '0.4rem 0.8rem',
        background: 'rgba(45, 212, 191, 0.1)',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(45, 212, 191, 0.2)',
        cursor: 'default'
      }}
    >
      <div style={{ position: 'relative', width: '8px', height: '8px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'var(--tech-teal)',
          borderRadius: '50%'
        }} />
        <motion.div
          animate={{ scale: [1, 2], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--tech-teal)',
            borderRadius: '50%',
            zIndex: -1
          }}
        />
      </div>
      <span style={{
        fontSize: '0.75rem',
        fontWeight: 800,
        color: 'var(--tech-teal)',
        letterSpacing: '0.02em',
        textTransform: 'uppercase'
      }}>
        Available for 3 new project
      </span>
    </motion.div>
  );
};

export default AvailabilityBadge;
