"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Stats from "@/components/Stats";
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const values = [
  {
    title: "Mission & Purpose",
    desc: "To bridge the gap between technical complexity and business growth by shipping fast, scalable, SEO-dominant digital products.",
    icon: <Target size={32} />
  },
  {
    title: "Lead Architectural Model",
    desc: "Tarun Singh personally architects, codes, and leads every project. For multi-disciplinary needs, we tap into a trusted network of specialist freelancers.",
    icon: <Eye size={32} />
  },
  {
    title: "Extreme Reliability",
    desc: "Systems are built for long-term scalability. Every product is engineered to handle 10x traffic growth with sub-100ms response times.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Velocity & Precision",
    desc: "High delivery speed without sloppy code. We maintain enterprise-grade TypeScript & Next.js standards at agile startup speed.",
    icon: <Zap size={32} />
  }
];

export default function AboutClient() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <Navbar />

      {/* Hero Header */}
      <section style={{
        paddingTop: '12rem',
        paddingBottom: '8rem',
        background: 'var(--gradient-mesh)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.3rem', marginBottom: '1.5rem' }}
          >
            ABOUT TARUN SINGH & THEUNIPICK
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)', lineHeight: 1.1 }}
          >
            Full-Stack Engineering <br />
            <span className="text-gradient">Engineered For Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}
          >
            Founded by Principal Engineer Tarun Singh, TheUniPick is a specialized web development & SEO studio. I lead every technical architecture and collaborate with a curated network of specialist freelancers to deliver production-ready products.
          </motion.p>
        </div>
      </section>

      {/* Main About Component Section */}
      <About />

      {/* Stats Section */}
      <Stats />

      {/* Core Values Section */}
      <section style={{ background: 'white', padding: '10rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--on-surface)' }}>The DNA of <span className="text-gradient">TheUniPick</span></h2>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '1.5rem', fontSize: '1.2rem' }}>The principles that guide every architectural decision made.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="card-premium"
                style={{ padding: '4rem 3rem', background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>{v.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
