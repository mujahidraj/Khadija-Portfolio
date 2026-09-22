// =============================================================================
// Process Section — Step-by-step journey
// =============================================================================

"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const Icons = {
  pencil: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
    </svg>
  ),
  cube: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  hammer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83m-4.524 3.75L6.375 21A2.652 2.652 0 012.625 17.25l4.25-4.25m3.75 3.75l4.5-4.5m-4.5 4.5l-4.5-4.5M21 2.625a2.652 2.652 0 00-3.75 0l-4.5 4.5a2.652 2.652 0 000 3.75l4.5 4.5a2.652 2.652 0 003.75 0l4.5-4.5a2.652 2.652 0 000-3.75l-4.5-4.5z" />
    </svg>
  ),
  sparkle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.428-1.428L13.5 18.75l1.178-.394a2.25 2.25 0 001.428-1.428L16.5 15.75l.394 1.178a2.25 2.25 0 001.428 1.428l1.178.394-1.178.394a2.25 2.25 0 00-1.428 1.428z" />
    </svg>
  )
};

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-wood-400 uppercase tracking-[0.25em] text-sm mb-4 font-medium">
            Behind the Scenes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100">
            The Crafting Process
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-wood-600/30 to-transparent" />

          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {portfolioData.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-2 md:right-auto md:left-1/2 md:-translate-x-1/2 md:-top-4 w-8 h-8 rounded-full bg-wood-600 text-stone-50 flex items-center justify-center font-bold text-sm shadow-lg shadow-black/20 z-20">
                  {step.step}
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center mb-6 relative z-10 group-hover:border-wood-500/50 group-hover:bg-stone-900 transition-colors duration-500">
                  <div className="text-stone-400 group-hover:text-wood-400 transition-colors duration-500">
                    {Icons[step.icon as keyof typeof Icons] || Icons.hammer}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
