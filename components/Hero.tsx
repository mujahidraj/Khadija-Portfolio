// =============================================================================
// Hero Section — Full-viewport intro with animated text
// =============================================================================
// EDITING GUIDE:
// • Content is pulled from portfolio.json → designer object.
// • Background uses a gradient + noise texture. To use a real hero image,
//   replace the gradient div with a next/image component.

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const { designer } = portfolioData;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: custom generated image */}
      <div className="absolute inset-0 z-0 bg-stone-950">
        <Image
          src="/assets/hero_bg.jpg"
          alt="Workshop Background"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        {/* Warm accent glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-wood-700/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-wood-500/10 rounded-full blur-[100px] mix-blend-screen" />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/60 to-stone-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-wood-400 uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          {designer.title}
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-stone-100 leading-[1.1] mb-8"
        >
          {designer.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {designer.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-wood-600 hover:bg-wood-500 text-stone-50 rounded-sm font-medium tracking-wide transition-colors duration-300 text-sm uppercase"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-stone-600 hover:border-wood-500 text-stone-300 hover:text-wood-300 rounded-sm font-medium tracking-wide transition-all duration-300 text-sm uppercase"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-stone-600 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-wood-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
