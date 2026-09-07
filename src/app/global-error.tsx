"use client";

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Global Layout Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050505', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box', textAlign: 'center' }}>
          <div style={{ maxWidth: '440px', width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '36px 24px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(99,0,226,0.2)', border: '1px solid rgba(99,0,226,0.4)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px', fontWeight: 'bold' }}>
              🛡️
            </div>

            <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
              System Protection Active
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 24px 0' }}>
              An unexpected application exception occurred. Our infrastructure has automatically contained the error to preserve security and data integrity.
            </p>

            <button
              onClick={() => reset()}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #6300e2, #8b5cf6)',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              Restore Session
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
