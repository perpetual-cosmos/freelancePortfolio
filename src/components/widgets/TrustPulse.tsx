"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Star, Globe, ShieldCheck } from 'lucide-react';

const pulses = [
  { id: 1, text: "Completed a Fintech React dashboard", time: "Just now", icon: <CheckCircle size={16} />, color: '#3b82f6' },
  { id: 2, text: "New project for a Berlin startup", time: "2 mins ago", icon: <Globe size={16} />, color: '#10b981' },
  { id: 3, text: "5.0 Rating on recent Upwork project", time: "1 hour ago", icon: <Star size={16} />, color: '#f59e0b' },
  { id: 4, text: "Trusted by 50+ clients globally", time: "Active", icon: <Users size={16} />, color: '#8b5cf6' },
];

const DURATION = 8000;

const TrustPulse = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => setIsVisible(true), 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % pulses.length);
        setIsVisible(true);
      }, 900);
    }, DURATION + 1000);

    return () => { clearTimeout(initialTimer); clearInterval(interval); };
  }, []);

  const pulse = pulses[index];

  return (
    <>
      <div className="tp-wrapper">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.92 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              className="tp-card"
            >
              {/* Icon + content row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div className="tp-icon" style={{ background: `${pulse.color}15`, color: pulse.color }}>
                  {pulse.icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem', gap: '0.5rem' }}>
                    <span className="tp-label" style={{ color: pulse.color }}>Verified Activity</span>
                    <span className="tp-time">{pulse.time}</span>
                  </div>
                  <div className="tp-text">{pulse.text}</div>
                </div>

                <button
                  onClick={() => setIsVisible(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--on-surface-muted)', cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1, padding: '0 0.15rem', flexShrink: 0 }}
                  aria-label="Dismiss"
                >
                  ×
                </button>
              </div>

              {/* Progress bar */}
              <div style={{ height: '3px', width: '100%', background: 'rgba(0,0,0,0.06)', borderRadius: '2px', overflow: 'hidden', marginTop: '0.75rem' }}>
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: DURATION / 1000, ease: 'linear' }}
                  style={{ height: '100%', background: pulse.color }}
                />
              </div>

              {/* Watermark */}
              <div style={{ position: 'absolute', top: -8, right: -8, opacity: 0.07, pointerEvents: 'none' }}>
                <ShieldCheck size={68} color="var(--primary)" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .tp-wrapper {
          position: fixed;
          bottom: 1.5rem;
          left: 1.5rem;
          z-index: 9998;
        }
        .tp-card {
          padding: 0.85rem 1rem;
          border-radius: 1.25rem;
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          width: min(280px, calc(100vw - 3rem));
        }
        .tp-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tp-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        .tp-time {
          font-size: 0.65rem;
          color: var(--on-surface-muted);
          font-weight: 600;
          white-space: nowrap;
        }
        .tp-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--on-surface);
          line-height: 1.4;
        }

        @media (min-width: 640px) {
          .tp-wrapper { bottom: 2rem; left: 2rem; }
          .tp-card {
            width: 300px;
            padding: 1rem 1.1rem;
          }
          .tp-icon { width: 40px; height: 40px; border-radius: 11px; }
          .tp-label, .tp-time { font-size: 0.7rem; }
          .tp-text { font-size: 0.88rem; }
        }

        @media (max-width: 360px) {
          .tp-wrapper { bottom: 1rem; left: 1rem; }
        }
      `}</style>
    </>
  );
};

export default TrustPulse;
