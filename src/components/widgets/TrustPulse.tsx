"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Star, Globe, ShieldCheck } from 'lucide-react';

const pulses = [
  { 
    id: 1, 
    text: "Completed a Fintech React dashboard", 
    time: "Just now",
    icon: <CheckCircle size={18} />,
    color: '#3b82f6'
  },
  { 
    id: 2, 
    text: "New project for a Berlin startup", 
    time: "2 mins ago",
    icon: <Globe size={18} />,
    color: '#10b981'
  },
  { 
    id: 3, 
    text: "5.0 Rating on recent Upwork project", 
    time: "1 hour ago",
    icon: <Star size={18} />,
    color: '#f59e0b'
  },
  { 
    id: 4, 
    text: "Trusted by 50+ clients globally", 
    time: "Active",
    icon: <Users size={18} />,
    color: '#8b5cf6'
  },
];

const TrustPulse = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const duration = 8000; // 8 seconds per pulse

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % pulses.length);
        setIsVisible(true);
      }, 1000);
    }, duration + 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 9998 }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            style={{
              padding: '1rem',
              borderRadius: '1.25rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '320px',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '12px', 
                background: `${pulses[index].color}15`,
                color: pulses[index].color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {pulses[index].icon}
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: pulses[index].color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Verified Activity
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--on-surface-muted)', fontWeight: 600 }}>
                    {pulses[index].time}
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.4 }}>
                  {pulses[index].text}
                </div>
              </div>

              <button 
                onClick={() => setIsVisible(false)}
                style={{ background: 'none', border: 'none', color: 'var(--on-surface-muted)', cursor: 'pointer', fontSize: '1.2rem', padding: '0 0.2rem' }}
              >
                ×
              </button>
            </div>

            {/* Progress Bar */}
            <div style={{ height: '3px', width: '100%', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                style={{ height: '100%', background: pulses[index].color }}
              />
            </div>

            {/* Authority Badge */}
            <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.1, pointerEvents: 'none' }}>
               <ShieldCheck size={80} color="var(--primary)" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrustPulse;
