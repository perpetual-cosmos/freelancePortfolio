'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/caseStudies';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface CaseStudyFAQProps {
  faqs?: FAQItem[];
  projectTitle?: string;
}

export default function CaseStudyFAQ({ faqs, projectTitle }: CaseStudyFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-white/[0.01] border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <HelpCircle size={14} /> Client Knowledge Base
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-xl mx-auto">
            Technical and strategic answers regarding the execution and architecture of {projectTitle || 'this project'}.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.04] border-primary/40 shadow-[0_0_20px_rgba(99,0,226,0.15)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'bg-primary text-white border-primary rotate-180'
                        : 'bg-white/5 text-white/60 border-white/10 group-hover:border-white/30'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
