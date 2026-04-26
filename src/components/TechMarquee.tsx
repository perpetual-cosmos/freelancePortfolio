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
      padding: 'clamp(1.25rem, 2.5vw, 2rem) 0',
      borderBottom: '1px solid var(--outline)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%',
      position: 'relative',
    }}>
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ display: 'inline-flex', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'center' }}
      >
        {techs.map((tech, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            <span style={{
              fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
              fontWeight: 800,
              color: 'var(--on-surface-muted)',
              letterSpacing: '0.2rem',
            }}>
              {tech}
            </span>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.2, flexShrink: 0 }} />
          </div>
        ))}
      </motion.div>

      {/* Edge fades */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--surface-muted) 0%, transparent 10%, transparent 90%, var(--surface-muted) 100%)', pointerEvents: 'none' }} />
    </div>
  );
};

export default TechMarquee;
