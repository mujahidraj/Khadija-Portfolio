// =============================================================================
// Skills / Expertise Section — Tag-based layout of skills and techniques
// =============================================================================
// EDITING GUIDE:
// • Skills list comes from portfolio.json → skills array.
// • Add new skills by appending to the JSON array — no code changes needed.

"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-stone-900/50">
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
            Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100">
            Skills & Techniques
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative"
            >
              <div className="px-6 py-3.5 bg-stone-800/60 border border-stone-700/50 rounded-sm
                            hover:border-wood-600/50 hover:bg-stone-800/80
                            transition-all duration-300 cursor-default">
                <span className="text-stone-300 group-hover:text-wood-300 transition-colors duration-300 text-sm font-medium tracking-wide">
                  {skill}
                </span>
              </div>
              {/* Decorative icon for select skills */}
              {index < 4 && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-wood-500 rounded-full opacity-60" />
              )}
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
