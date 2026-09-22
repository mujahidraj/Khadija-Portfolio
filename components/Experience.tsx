// =============================================================================
// Experience Section — Timeline of work history
// =============================================================================
// EDITING GUIDE:
// • Experience entries come from portfolio.json → experience array.
// • Add new roles by appending to the JSON array — no code changes needed.
// • The timeline renders in array order (newest first recommended).

"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-wood-400 uppercase tracking-[0.25em] text-sm mb-4 font-medium">
            Career Path
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-wood-600/60 via-stone-700/40 to-transparent" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] md:left-[26px] top-1 w-3.5 h-3.5 rounded-full border-2 border-wood-500 bg-stone-950
                            group-hover:bg-wood-500 transition-colors duration-300 z-10" />

              {/* Date badge */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="px-3 py-1 bg-wood-700/15 border border-wood-700/25 text-wood-400 text-xs uppercase tracking-wider font-semibold rounded-sm">
                  {exp.startDate} — {exp.endDate}
                </span>
                <span className="text-stone-500 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {exp.location}
                </span>
              </div>

              {/* Role & Company */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-100 mb-1 leading-snug">
                {exp.role}
              </h3>
              <p className="text-wood-400 font-medium text-sm mb-3">
                {exp.company}
              </p>

              {/* Description */}
              <p className="text-stone-400 leading-relaxed text-sm mb-4 max-w-2xl">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <span
                    key={hIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800/50 border border-stone-700/40
                             text-stone-300 text-xs rounded-sm"
                  >
                    <svg className="w-3 h-3 text-wood-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-wood-600 to-transparent"
        />
      </div>
    </section>
  );
}
