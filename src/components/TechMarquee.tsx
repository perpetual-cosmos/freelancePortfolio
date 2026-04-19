import React from 'react';

const techs = [
  "NEXT.JS", "NODE.JS", "SPRING BOOT", "PYTHON", "TYPESCRIPT",
  "POSTGRESQL", "MONGODB", "AWS", "DOCKER", "REACT",
  "NEXT.JS", "NODE.JS", "SPRING BOOT", "PYTHON", "TYPESCRIPT",
  "POSTGRESQL", "MONGODB", "AWS", "DOCKER", "REACT"
];

const TechMarquee = () => {
  return (
    <div style={{
      background: 'var(--surface-container-low)',
      padding: '1.5rem 0',
      borderTop: '1px solid var(--outline-variant)',
      borderBottom: '1px solid var(--outline-variant)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%'
    }}>
      <div className="marquee-content" style={{
        display: 'inline-flex',
        gap: '4rem',
        animation: 'marquee 40s linear infinite'
      }}>
        {techs.map((tech, i) => (
          <span key={i} style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            color: 'var(--on-surface-variant)',
            letterSpacing: '0.2em',
            opacity: 0.6
          }}>
            {tech}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
