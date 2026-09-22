// =============================================================================
// ProjectModal — Lightbox with gallery, description, materials, client info
// =============================================================================
// EDITING GUIDE:
// • Opened when a user clicks a ProjectCard.
// • Gallery supports prev/next navigation and keyboard arrow keys.
// • Press Escape or click backdrop to close.

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev < project.gallery.length - 1 ? prev + 1 : 0
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : project.gallery.length - 1
    );
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose, nextImage, prevImage]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 modal-backdrop bg-stone-950/85"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-stone-900 border border-stone-800/50 rounded-sm max-w-5xl w-full
                       max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center
                         bg-stone-800/80 hover:bg-stone-700 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Gallery */}
            <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.gallery[currentImageIndex]}
                    alt={`${project.title} — image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gallery navigation */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                               bg-stone-950/60 hover:bg-stone-950/80 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 text-stone-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center
                               bg-stone-950/60 hover:bg-stone-950/80 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 text-stone-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-stone-950/60 rounded-full text-xs text-stone-300 font-medium">
                    {currentImageIndex + 1} / {project.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Project details */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-wood-700/20 text-wood-400 text-xs uppercase tracking-wider font-medium rounded-sm">
                  {project.category}
                </span>
                <span className="text-stone-500 text-sm">{project.year}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-100 mb-4">
                {project.title}
              </h2>

              <p className="text-stone-400 leading-relaxed mb-6 text-base">
                {project.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Materials */}
                <div>
                  <h3 className="text-stone-500 uppercase tracking-wider text-xs font-semibold mb-2">
                    Materials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((material) => (
                      <span
                        key={material}
                        className="px-3 py-1 bg-stone-800 text-stone-300 text-xs rounded-sm border border-stone-700/50"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client */}
                <div>
                  <h3 className="text-stone-500 uppercase tracking-wider text-xs font-semibold mb-2">
                    Client
                  </h3>
                  <p className="text-stone-300 text-sm">{project.client}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
