// =============================================================================
// Projects Section — Filterable grid with animated transitions
// =============================================================================
// EDITING GUIDE:
// • Projects data comes from portfolio.json → projects array.
// • Filter categories are derived automatically from the data.
// • To add a new project: add an entry to portfolio.json + images to /public/assets/projects/[id]/

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import type { Project, ProjectCategory } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const categories: Array<"All" | ProjectCategory> = ["All", "Wood", "Metal", "Hybrid"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? (portfolioData.projects as Project[])
      : (portfolioData.projects as Project[]).filter(
          (p) => p.category === activeFilter
        );

  return (
    <>
      <section id="projects" className="py-24 md:py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-wood-400 uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100">
              Selected Works
            </h2>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 text-sm font-medium tracking-wide uppercase rounded-sm
                  transition-all duration-300 border
                  ${
                    activeFilter === cat
                      ? "bg-wood-600 border-wood-600 text-stone-50"
                      : "bg-transparent border-stone-700 text-stone-400 hover:border-wood-600/50 hover:text-wood-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal — rendered outside the section for proper z-index stacking */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
