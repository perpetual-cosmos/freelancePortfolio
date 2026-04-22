"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';

const WhatsAppCTA = () => {
  const whatsappNumber = "911234567890"; // User should replace this
  const message = "Hi! I'm interested in discussing a project with TheUnipick.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          background: '#25D366',
          borderRadius: '50%',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          color: 'white',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <WhatsappLogo size={36} weight="fill" />
        
        {/* Online Status Indicator */}
        <div style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
          width: '14px',
          height: '14px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#22c55e',
            borderRadius: '50%'
          }} />
        </div>

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: '#25D366',
            zIndex: -1
          }}
        />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            right: '100%',
            marginRight: '1rem',
            background: 'white',
            padding: '0.75rem 1.25rem',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-md)',
            whiteSpace: 'nowrap',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--on-surface)',
            border: '1px solid var(--outline-variant)',
            pointerEvents: 'none'
          }}
        >
          Need a quick estimate? Chat now!
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '100%',
            transform: 'translateY(-50%)',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid white',
          }} />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppCTA;
