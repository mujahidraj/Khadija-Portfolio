// =============================================================================
// Clients Section — Grid of client names/types
// =============================================================================

"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

export default function Clients() {
  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-wood-400 uppercase tracking-[0.25em] text-sm mb-4 font-medium">
            Collaborators
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-4xl font-bold text-stone-100">
            Trusted By
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {portfolioData.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-8 bg-stone-900/50 border border-stone-800/50 rounded-sm text-center flex flex-col items-center justify-center min-h-[120px] group hover:border-wood-600/30 transition-colors"
            >
              <h3 className="text-stone-300 font-serif font-medium text-lg md:text-xl group-hover:text-wood-200 transition-colors">
                {client.name}
              </h3>
              <p className="text-stone-500 text-xs uppercase tracking-wider mt-2">
                {client.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
