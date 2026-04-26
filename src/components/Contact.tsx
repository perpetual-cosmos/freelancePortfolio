"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const cardClass = "bg-white rounded-[2rem] border border-[rgba(99,0,226,0.06)] shadow-md transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group hover:-translate-y-2 hover:border-[rgba(99,0,226,0.12)] hover:shadow-lg hover:scale-[1.01] card-hover-gradient";
  const btnPrimaryClass = "relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-primary via-primary to-secondary text-white font-display font-black shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-primary/40 active:scale-95 overflow-hidden group/btn";

  return (
    <section id="contact" className="bg-surface-muted relative py-32 lg:py-48 overflow-hidden noise-overlay">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 mb-24 lg:mb-32">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.8rem] tracking-[0.2em] uppercase mb-8"
            >
              <Sparkles size={16} /> <span>Partnerships & Inquiries</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-on-surface font-display"
            >
              Let's Build the <br /><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">Next Big Thing.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-[1.2rem] max-w-[400px] leading-relaxed font-medium opacity-80"
          >
            Ready to scale your product? Our team of specialized engineers is just a message away.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-20 items-start">
          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className={`${cardClass} !p-12 lg:!p-20 bg-white`}
          >
            <h3 className="text-[2rem] font-black text-on-surface mb-12 tracking-tighter font-display relative z-10">Project Inquiry</h3>
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[0.75rem] font-black text-on-surface-muted tracking-widest uppercase">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-8 py-5 rounded-2xl border border-[rgba(99,0,226,0.06)] bg-surface-muted font-sans text-[1rem] text-on-surface transition-all focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5" 
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[0.75rem] font-black text-on-surface-muted tracking-widest uppercase">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-8 py-5 rounded-2xl border border-[rgba(99,0,226,0.06)] bg-surface-muted font-sans text-[1rem] text-on-surface transition-all focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.75rem] font-black text-on-surface-muted tracking-widest uppercase">Project Category</label>
                <div className="relative">
                  <select className="w-full px-8 py-5 rounded-2xl border border-[rgba(99,0,226,0.06)] bg-surface-muted font-sans text-[1rem] text-on-surface transition-all focus:outline-none focus:bg-white focus:border-primary appearance-none cursor-pointer">
                    <option>Next.js & Frontend Infrastructure</option>
                    <option>AI / Machine Learning Systems</option>
                    <option>Cloud / DevOps Engineering</option>
                    <option>Enterprise Architecture</option>
                    <option>Full-Product Development</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.75rem] font-black text-on-surface-muted tracking-widest uppercase">Technical Requirements</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your technical goals and scalability requirements..." 
                  className="w-full px-8 py-5 rounded-2xl border border-[rgba(99,0,226,0.06)] bg-surface-muted font-sans text-[1rem] text-on-surface transition-all focus:outline-none focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 resize-none" 
                />
              </div>

              <button className={btnPrimaryClass}>
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Engineering Review <Send size={20} className="transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] transition-transform duration-700 group-hover:translate-x-[150%]" />
              </button>
            </form>
          </motion.div>

          {/* Sidebar Info */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[1.8rem] font-black text-on-surface mb-2 tracking-tighter font-display">Direct Access</h3>

            <div className="space-y-6">
              {[
                { label: 'General Inquiries', val: 'hello@theunipick.com', color: '#6300e2', icon: <Mail size={22} /> },
                { label: 'Technical Strategy', val: '+1 (555) 012-3456', color: '#d946ef', icon: <Phone size={22} /> },
                { label: 'Engineering Hub', val: 'Silicon Valley, CA', color: '#2dd4bf', icon: <MapPin size={22} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 12 }}
                  className={`${cardBaseClass} !p-8 flex items-center gap-6 bg-white border border-[rgba(99,0,226,0.06)] shadow-sm hover:shadow-xl hover:border-[rgba(99,0,226,0.12)] transition-all duration-500`}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md"
                    style={{ color: 'white', background: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.7rem] font-black text-on-surface-muted tracking-widest uppercase mb-1 opacity-70">{item.label}</div>
                    <div className="font-black text-[1.1rem] text-on-surface truncate font-display tracking-tight">{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Consultation Card */}
            <motion.div 
              whileHover={{ y: -8 }} 
              className="relative p-12 lg:p-16 rounded-[3.5rem] overflow-hidden bg-on-surface text-white border-none mt-4 shadow-2xl group transition-all duration-500"
            >
              <div className="absolute top-[-20%] right-[-10%] opacity-[0.03] pointer-events-none transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-150">
                <Calendar size={280} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                  <Calendar size={28} />
                </div>
                <h3 className="text-[1.8rem] font-black mb-4 font-display leading-tight">Need a Technical Deep-Dive?</h3>
                <p className="text-white/70 text-[1.1rem] leading-relaxed mb-10 font-medium max-w-[300px]">
                  Book a 30-minute architectural consultation with our principal engineer.
                </p>
                <button className="bg-white text-on-surface px-10 py-5 rounded-full font-black text-[0.9rem] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                  Schedule Engineering Review <ArrowRight size={20} />
                </button>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardBaseClass = "bg-white rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group card-hover-gradient";

export default Contact;
