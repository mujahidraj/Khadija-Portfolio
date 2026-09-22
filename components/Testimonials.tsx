// =============================================================================
// Testimonials Section — Client quotes carousel/grid
// =============================================================================
// EDITING GUIDE:
// • Testimonials come from portfolio.json → testimonials array.
// • Add new testimonials by appending to the JSON array.

"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-stone-900/50">
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
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100">
            What Clients Say
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 bg-stone-800/40 border border-stone-700/30 rounded-sm
                         hover:border-wood-700/30 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 font-serif text-6xl text-wood-600/20 leading-none select-none">
                &ldquo;
              </div>

              <blockquote className="relative z-10">
                <p className="text-stone-300 leading-relaxed text-base italic mb-6 pl-4">
                  {testimonial.quote}
                </p>
                <footer className="flex items-center gap-3 pl-4">
                  {/* Avatar circle with initials */}
                  <div className="w-10 h-10 rounded-full bg-wood-700/30 border border-wood-600/30
                                flex items-center justify-center flex-shrink-0">
                    <span className="text-wood-400 font-serif font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-stone-200 font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-stone-500 text-xs uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
