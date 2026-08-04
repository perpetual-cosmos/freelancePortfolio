'use client';

import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface CaseStudyGalleryProps {
  gallery: string[];
  title: string;
}

export default function CaseStudyGallery({ gallery, title }: CaseStudyGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {gallery.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(img)}
            className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-lg hover:border-primary/50 transition-all duration-500 ${
              i === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-[4/3]'
            }`}
          >
            <img
              src={img}
              alt={`${title} highlight ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
              <span className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <Maximize2 size={18} />
              </span>
              <span>Expand Preview</span>
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        src={activeImage}
        alt={`${title} screenshot`}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}
