'use client';

import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt = 'Gallery image', onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (src) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-label="Close modal overlay"
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 focus:outline-none"
        aria-label="Close image lightbox"
      >
        <X size={20} />
      </button>

      <div className="relative max-w-6xl max-h-[85vh] z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
        />
      </div>
    </div>
  );
}
