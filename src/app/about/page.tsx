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
    title: "Our Mission",
    desc: "To bridge the gap between complex engineering and business outcomes, delivering digital products that set new standards for performance and scale.",
    icon: <Target size={32} />
  },
  {
    title: "Our Vision",
    desc: "To be the global benchmark for full-spectrum development, where every line of code drives measurable value for startups and enterprises alike.",
    icon: <Eye size={32} />
  },
  {
    title: "Extreme Reliability",
    desc: "We don't just build; we architect for the long term. Our systems are built to handle the next 10x growth without breaking.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Velocity & Precision",
    desc: "Moving fast doesn't mean moving messy. We maintain enterprise-grade quality at startup speed through automated workflows.",
    icon: <Zap size={32} />
  }
];

export default function AboutPage() {
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
            OUR IDENTITY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)', lineHeight: 1.1 }}
          >
            Strategic Engineering <br />
            <span className="text-gradient">Built For Growth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}
          >
            TheUnipick is a results-driven development studio. We are architects and strategists dedicated to building high-performance digital infrastructure that doesn't just look good—it scales your business.
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
            <h2 style={{ fontSize: '3.5rem', color: 'var(--on-surface)' }}>The DNA of <span className="text-gradient">TheUnipick</span></h2>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: '1.5rem', fontSize: '1.2rem' }}>The principles that guide every architectural decision we make.</p>
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
