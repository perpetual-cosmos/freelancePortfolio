"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send, Terminal, Activity, MousePointer2 } from 'lucide-react';

const Contact = () => {
  const inputClass = "w-full px-6 py-4 rounded-xl border border-[rgba(99,0,226,0.08)] bg-[#f8f7ff] font-sans text-[0.95rem] text-[#1a1a2e] transition-all focus:outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-[#8e8ea8]/50";
  const labelClass = "text-[0.65rem] font-black text-primary tracking-[0.2em] uppercase mb-2 block opacity-70";

  return (
    <section id="contact" className="bg-white relative py-24 lg:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Symmetrical Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr,1.2fr] gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Context & Direct Access */}
          <div className="space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-black text-[0.7rem] tracking-[0.3em] uppercase mb-8"
              >
                <Terminal size={14} /> <span>INQUIRY_PROTOCOL_v0.6</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.95] tracking-tighter text-[#1a1a2e] font-display mb-8"
              >
                Ready to architect <br /><span className="text-gradient">your next system?</span>
              </motion.h2>
              <p className="text-[#565677] text-[1.2rem] font-medium leading-relaxed opacity-80 max-w-[420px]">
                Let's discuss your technical requirements and scalability goals. Our team is ready to review your manifest.
              </p>
            </div>

            {/* Direct Comms Matrix (Stacked in sidebar) */}
            <div className="space-y-4">
              {[
                { label: 'EMAIL_SECURE', val: 'hello@theunipick.com', color: '#6300e2', icon: <Mail size={18} /> },
                { label: 'VOICE_RELAY', val: '+1 (555) 012-3456', color: '#d946ef', icon: <Phone size={18} /> },
                { label: 'GEOGRAPHIC_HUB', val: 'Silicon Valley, CA', color: '#2dd4bf', icon: <MapPin size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-[#f8f7ff] border border-[rgba(99,0,226,0.06)]">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.6rem] font-black text-[#8e8ea8] tracking-widest uppercase mb-0.5">{item.label}</div>
                    <div className="font-black text-[0.95rem] text-[#1a1a2e]">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation Anchor */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="bg-[#050505] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10">
                <h3 className="text-[1.4rem] font-black mb-2 font-display">Technical Deep-Dive</h3>
                <p className="text-white/50 text-[0.95rem] mb-8 leading-relaxed">
                  Book a 30-minute architectural consultation with our principal.
                </p>
                <button className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[0.75rem] hover:text-white transition-colors">
                   Initiate Review <ArrowRight size={18} />
                </button>
              </div>
              <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #6300e2 1px, transparent 1px), linear-gradient(to bottom, #6300e2 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </motion.div>
          </div>

          {/* Right Column: Inquiry Manifest (Form) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="bg-white rounded-[3.5rem] border border-[rgba(99,0,226,0.06)] shadow-2xl p-8 lg:p-16 relative"
          >
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-[1.8rem] font-black text-[#1a1a2e] tracking-tighter font-display">Inquiry Manifest</h3>
               <div className="flex items-center gap-3 text-primary font-black text-[0.65rem] tracking-[0.2em] uppercase">
                  <Activity size={14} className="animate-pulse" /> SYS_READY
               </div>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>LEGAL_NAME</label>
                  <input type="text" placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>COMMS_ENDPOINT</label>
                  <input type="email" placeholder="root@domain.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>SERVICE_TYPE</label>
                  <div className="relative">
                    <select className={`${inputClass} appearance-none cursor-pointer pr-12`}>
                      <option>Next.js Infrastructure</option>
                      <option>AI Pipeline Engineering</option>
                      <option>Dist. Systems Architecture</option>
                      <option>Full Product Build</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <MousePointer2 size={16} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>TIMELINE</label>
                  <input type="text" placeholder="e.g. 3 Months" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>TECHNICAL_SCOPE</label>
                <textarea rows={6} placeholder="Briefly describe your technical objectives and scalability requirements..." className={`${inputClass} resize-none`} />
              </div>

              <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-[0.85rem] uppercase tracking-[0.3em] shadow-lg shadow-primary/30 hover:bg-secondary hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-4 group/btn">
                Initialize Transmission <Send size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
