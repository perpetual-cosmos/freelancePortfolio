'use client';

import React, { useState } from 'react';
import { ArchitectureStep } from '@/data/caseStudies';
import { Network, ArrowRight, Cpu, Server, Database, Sparkles, CheckCircle, Layers } from 'lucide-react';

interface ArchitectureFlowProps {
  flow?: ArchitectureStep[];
  technologies?: string[];
  title?: string;
}

export default function ArchitectureFlow({ flow, technologies = [], title = "System Architecture" }: ArchitectureFlowProps) {
  // Generate fallback flow steps if flow is not provided
  const displaySteps: ArchitectureStep[] = flow && flow.length > 0 ? flow : [
    {
      step: "01",
      title: "User Interface & Client Entry",
      subtitle: "Frontend Layer",
      description: "High-speed client application rendered on the edge with progressive enhancement.",
      techTag: technologies[0] || "React / Next.js"
    },
    {
      step: "02",
      title: "API Routing & Logic Gateway",
      subtitle: "Application Server",
      description: "Handles authentication, validation rules, and business logic execution.",
      techTag: technologies[1] || "Node.js REST / GraphQL"
    },
    {
      step: "03",
      title: "Data Persistence & State",
      subtitle: "Database Tier",
      description: "Secures real-time transactions, schema records, and state synchronization.",
      techTag: technologies[2] || "PostgreSQL / MongoDB"
    },
    {
      step: "04",
      title: "Edge CDN & Global Delivery",
      subtitle: "Infrastructure",
      description: "Distributes static assets and optimized API responses globally with low latency.",
      techTag: technologies[3] || "Vercel / AWS CDN"
    }
  ];

  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStep = displaySteps[activeStep] || displaySteps[0];

  const stepIcons = [Cpu, Server, Database, Sparkles, Layers];

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-1">
            <Network size={14} className="animate-pulse" /> Architecture & Data Pipeline
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Technical Solution <span className="text-gradient">Flow Diagram</span>
          </h3>
        </div>
        <div className="text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 self-start sm:self-auto">
          Interactive Pipeline • Click node to inspect
        </div>
      </div>

      {/* Pipeline Diagram Grid */}
      <div className="relative z-10">

        {/* Step Node Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

          {displaySteps.map((item, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            const isActive = activeStep === idx;

            return (
              <div key={idx} className="relative group">

                {/* Connecting arrow indicator for desktop (between cards) */}
                {idx < displaySteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#080808] border border-white/20 items-center justify-center text-primary shadow-md">
                    <ArrowRight size={12} />
                  </div>
                )}

                {/* Card Item */}
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between h-full ${isActive
                      ? 'bg-primary/15 border-primary/60 shadow-[0_0_25px_rgba(99,0,226,0.25)] scale-[1.02]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                    }`}
                >
                  {/* Top Row: Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center ${isActive
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                        }`}
                    >
                      {item.step}
                    </span>
                    <Icon
                      size={18}
                      className={isActive ? 'text-primary' : 'text-white/40 group-hover:text-white/70'}
                    />
                  </div>

                  {/* Node Title & Subtitle */}
                  <div>
                    <div className="text-[0.7rem] font-bold uppercase tracking-wider text-white/50 mb-1">
                      {item.subtitle}
                    </div>
                    <div className="text-sm font-bold text-white leading-snug mb-3">
                      {item.title}
                    </div>
                  </div>

                  {/* Tech Tag Pill */}
                  {item.techTag && (
                    <div className="mt-2 pt-2 border-t border-white/5">
                      <span className="inline-block text-[0.75rem] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-primary border border-primary/20">
                        {item.techTag}
                      </span>
                    </div>
                  )}
                </button>
              </div>
            );
          })}

        </div>

        {/* Detailed Inspector Panel for Selected Step */}
        <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-primary/30 relative">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                Stage {currentStep.step} Detail Breakdown
              </span>
            </div>
            <span className="text-xs font-semibold text-white/60">
              {currentStep.subtitle}
            </span>
          </div>

          <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            {currentStep.title}
          </h4>

          <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
            {currentStep.description}
          </p>

          {currentStep.techTag && (
            <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
              <CheckCircle size={14} className="text-primary" />
              <span>Core Technology Component: <strong className="text-white font-mono">{currentStep.techTag}</strong></span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
