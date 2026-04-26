"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const WhatsAppCTA = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const whatsappNumber = "911234567890";
  const message = "Hi! I'm interested in discussing a project with TheUnipick.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="wa-wrapper">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="wa-button"
        >
          <WhatsappLogo size={30} weight="fill" />

          {/* Online indicator */}
          <div className="wa-online-ring">
            <div className="wa-online-dot" />
          </div>

          {/* Pulse */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#25D366', zIndex: -1 }}
          />
        </motion.a>

        {/* Tooltip – hidden on very small screens, auto-hides after 5s */}
        <AnimatePresence>
          {tooltipVisible && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ delay: 1.2 }}
              className="wa-tooltip"
              onAnimationComplete={() => {
                setTimeout(() => setTooltipVisible(false), 5000);
              }}
            >
              <span>Need a quick estimate? Chat now!</span>
              {/* Arrow */}
              <div className="wa-arrow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .wa-wrapper {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .wa-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: #25D366;
          border-radius: 50%;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          color: white;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
        }
        .wa-online-ring {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 13px;
          height: 13px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .wa-online-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
        }
        .wa-tooltip {
          position: absolute;
          right: calc(100% + 0.85rem);
          top: 50%;
          transform: translateY(-50%);
          background: white;
          padding: 0.65rem 1rem;
          border-radius: 1rem;
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          border: 1px solid var(--outline-variant, rgba(0,0,0,0.06));
          white-space: nowrap;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--on-surface);
          pointer-events: none;
          display: none;
        }
        .wa-arrow {
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid white;
        }

        /* Show tooltip only on md+ */
        @media (min-width: 640px) {
          .wa-button { width: 60px; height: 60px; }
          .wa-tooltip { display: block; }
          .wa-wrapper { bottom: 2rem; right: 2rem; }
        }

        /* Slightly smaller on tiny phones */
        @media (max-width: 360px) {
          .wa-wrapper { bottom: 1rem; right: 1rem; }
          .wa-button { width: 46px; height: 46px; }
        }
      `}</style>
    </>
  );
};

export default WhatsAppCTA;
