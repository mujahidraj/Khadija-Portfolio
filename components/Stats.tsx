// =============================================================================
// Stats Section — Animated counters for quick visual proof
// =============================================================================

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const incrementTime = 30; // ms per frame roughly
      const steps = duration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-wood-400">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-stone-900 border-y border-stone-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-stone-800/50">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index === 0 || index === 2 ? 'pl-0' : ''}`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-stone-400 text-sm uppercase tracking-wider mt-3 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
