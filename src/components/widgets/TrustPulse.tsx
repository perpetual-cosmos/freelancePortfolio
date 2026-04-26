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
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 min-[360px]:bottom-4 min-[360px]:left-4 z-[9998]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="p-3.5 sm:px-[1.1rem] sm:py-4 rounded-[1.25rem] shadow-lg border border-white/50 bg-white/82 backdrop-blur-xl relative overflow-hidden w-[min(280px,calc(100vw-3rem))] sm:w-[300px]"
          >
            {/* Icon + content row */}
            <div className="flex items-start gap-3">
              <div 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] sm:rounded-[11px] flex items-center justify-center shrink-0"
                style={{ background: `${pulse.color}15`, color: pulse.color }}
              >
                {pulse.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-0.5 gap-2">
                  <span className="text-[0.65rem] sm:text-[0.7rem] font-extrabold uppercase tracking-widest whitespace-nowrap" style={{ color: pulse.color }}>
                    Verified Activity
                  </span>
                  <span className="text-[0.65rem] sm:text-[0.7rem] text-on-surface-muted font-semibold whitespace-nowrap">
                    {pulse.time}
                  </span>
                </div>
                <div className="text-[0.82rem] sm:text-[0.88rem] font-bold text-on-surface leading-snug">
                  {pulse.text}
                </div>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="bg-none border-none text-on-surface-muted cursor-pointer text-[1.1rem] leading-none px-0.5 shrink-0 hover:text-on-surface transition-colors"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-[3px] w-full bg-black/5 rounded-[2px] overflow-hidden mt-3">
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }}
                className="h-full"
                style={{ background: pulse.color }}
              />
            </div>

            {/* Watermark */}
            <div className="absolute -top-2 -right-2 opacity-[0.07] pointer-events-none">
              <ShieldCheck size={68} className="text-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrustPulse;
