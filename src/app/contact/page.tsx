"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from 'framer-motion';
import { Clock, Globe2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
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
            Start a <span className="text-gradient">Conversation.</span>
          </motion.h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
            Whether you're scoping a new project or looking to modernize your existing infrastructure, our engineering leads are ready to talk architecture.
          </p>
        </div>
      </section>

      {/* Main Contact Component */}
      <Contact />

      {/* Additional Info Cards */}
      <section style={{ padding: '0 2rem 10rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}>
            <div className="card-premium" style={{ padding: '3rem', background: 'white', textAlign: 'center' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <Clock size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>Response Time</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.6 }}>Our team typically responds to project inquiries within 24 business hours.</p>
            </div>

            <div className="card-premium" style={{ padding: '3rem', background: 'white', textAlign: 'center' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <Globe2 size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>Global Presence</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.6 }}>We operate across 4 time zones to ensure seamless communication with global partners.</p>
            </div>

            <div className="card-premium" style={{ padding: '3rem', background: 'white', textAlign: 'center' }}>
              <div style={{ color: 'var(--tech-teal)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <MessageSquare size={40} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>Direct Access</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: 1.6 }}>Skip the account managers. You'll speak directly with an engineering lead.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
