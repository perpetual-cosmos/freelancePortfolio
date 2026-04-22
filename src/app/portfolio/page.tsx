"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

const additionalProjects = [
  {
    title: "EcoTrack IoT",
    category: "IoT • CLOUD • DATA",
    image: "/project_eco_1776542600000.png",
    desc: "Real-time environmental monitoring system for smart cities."
  },
  {
    title: "SecureAuth Pro",
    category: "SECURITY • DEV OPS",
    image: "/project_auth_1776542600001.png",
    desc: "Enterprise-grade authentication gateway for distributed systems."
  },
  {
    title: "VocalAI Assistant",
    category: "AI • NLP • MOBILE",
    image: "/project_vocal_1776542600002.png",
    desc: "Voice-controlled AI assistant for healthcare professionals."
  }
];

export default function PortfolioPage() {
  return (
    <main style={{ background: 'var(--background)' }}>
      <Navbar />
      
      {/* Header */}
      <section style={{ 
        paddingTop: '12rem', 
        paddingBottom: '8rem', 
        background: 'var(--gradient-mesh)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', color: 'var(--on-surface)', lineHeight: 1.1 }}
          >
            Digital Products <br />
            <span className="text-gradient">Built to Scale.</span>
          </motion.h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
            A curated selection of high-performance applications, AI integrations, and digital infrastructure built for the world's most ambitious companies.
          </p>
        </div>
      </section>

      {/* Main Portfolio Component */}
      <Portfolio />

      {/* Grid of Other Projects */}
      <section style={{ padding: '0 2rem 10rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Other <span className="text-gradient">Select Works</span></h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem' 
          }}>
            {additionalProjects.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="card-premium"
                style={{ padding: '1.5rem', background: 'white' }}
              >
                <div style={{ 
                  height: '240px', 
                  background: 'var(--surface-container-low)', 
                  borderRadius: '1.25rem',
                  marginBottom: '2rem',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  border: '1px solid var(--outline-variant)'
                }}>
                  {p.title}
                </div>
                <div style={{ padding: '0 1rem 1rem' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{p.category}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--on-surface)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a href="#" style={{ color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 700 }}>
                      GitHub <Code size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '8rem' }}>
            <div className="card-premium" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 6rem', background: 'var(--gradient-primary)', color: 'white' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Have a vision for something new?</h3>
              <p style={{ opacity: 0.9, marginBottom: '2.5rem' }}>Let's discuss how we can engineer your next competitive advantage.</p>
              <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
                Start a Project Discussion <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
