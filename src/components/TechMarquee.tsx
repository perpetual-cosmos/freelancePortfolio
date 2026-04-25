"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "NEXT.JS", "NODE.JS", "SPRING BOOT", "PYTHON", "TYPESCRIPT",
  "POSTGRESQL", "MONGODB", "AWS", "DOCKER", "REACT", "TAILWIND", "REDIS",
  "NEXT.JS", "NODE.JS", "SPRING BOOT", "PYTHON", "TYPESCRIPT",
  "POSTGRESQL", "MONGODB", "AWS", "DOCKER", "REACT", "TAILWIND", "REDIS"
];

const TechMarquee = () => {
  return (
    <div style={{
      background: 'var(--surface-muted)',
      padding: '2rem 0',
      borderBottom: '1px solid var(--outline)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%',
      position: 'relative'
    }}>
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          display: 'inline-flex',
          gap: '5rem',
          alignItems: 'center'
        }}
      >
        {techs.map((tech, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              color: 'var(--on-surface-muted)',
              letterSpacing: '0.2rem',
              transition: 'var(--transition-fast)'
            }}>
              {tech}
            </span>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.2 }}></div>
          </div>
        ))}
      </motion.div>

      {/* Edge Fades */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--surface-muted) 0%, transparent 15%, transparent 85%, var(--surface-muted) 100%)', pointerEvents: 'none' }}></div>
    </div>
  );
};

export default TechMarquee;
