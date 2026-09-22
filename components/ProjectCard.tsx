// =============================================================================
// ProjectCard — Individual project thumbnail card
// =============================================================================
// EDITING GUIDE:
// • This component is used by the Projects section to render each card.
// • Hover effect: image zooms, overlay fades in with title.
// • Clicking a card triggers onSelect (opens the ProjectModal).

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-stone-800">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      flex flex-col justify-end p-5">
          <p className="text-wood-400 text-xs uppercase tracking-[0.2em] mb-1 font-medium
                       translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {project.category} · {project.year}
          </p>
          <h3 className="font-serif text-lg text-stone-100 font-semibold
                        translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {project.title}
          </h3>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-wood-600/90 text-[10px] uppercase tracking-wider text-stone-50 font-semibold rounded-sm">
            Featured
          </div>
        )}
      </div>

      {/* Card info (visible below image on mobile) */}
      <div className="mt-3 md:hidden">
        <p className="text-wood-500 text-xs uppercase tracking-[0.15em] font-medium">
          {project.category} · {project.year}
        </p>
        <h3 className="font-serif text-base text-stone-200 font-semibold mt-0.5">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}
