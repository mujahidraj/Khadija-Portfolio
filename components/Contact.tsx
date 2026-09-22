// =============================================================================
// Contact Section — Form + direct links
// =============================================================================
// EDITING GUIDE:
// • This form is client-side only. To connect it to a real backend:
//   1. Create an API route at /app/api/contact/route.ts, OR
//   2. Wire it to Formspree (https://formspree.io) by changing the fetch URL
//      in handleSubmit below to your Formspree endpoint.
// • Email/social links come from portfolio.json → designer.socials.

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const { designer } = portfolioData;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setStatus("sending");

    // -------------------------------------------------------------------
    // 🔌 CONNECT YOUR BACKEND HERE
    // Replace this timeout with a real fetch call, e.g.:
    //
    //   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formState),
    //   });
    //   if (res.ok) setStatus("success");
    //   else setStatus("error");
    //
    // Or create a Next.js API route at /app/api/contact/route.ts
    // -------------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left — heading + direct links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-wood-400 uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100 mb-6 leading-tight">
              Let&apos;s create<br />
              <span className="text-wood-400">something together</span>
            </h2>
            <p className="text-stone-400 leading-relaxed mb-10 max-w-md">
              Whether you have a custom furniture project in mind or want to discuss a collaboration,
              I&apos;d love to hear from you. Every great piece starts with a conversation.
            </p>

            {/* Direct contact links */}
            <div className="space-y-4">
              <a
                href={`mailto:${designer.socials.email}`}
                className="flex items-center gap-3 text-stone-300 hover:text-wood-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700
                              flex items-center justify-center group-hover:border-wood-600/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm">{designer.socials.email}</span>
              </a>

              <a
                href={designer.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-300 hover:text-wood-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700
                              flex items-center justify-center group-hover:border-wood-600/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span className="text-sm">@mim.furncraft</span>
              </a>

              <a
                href={designer.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-300 hover:text-wood-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700
                              flex items-center justify-center group-hover:border-wood-600/50 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-stone-800/30 border border-stone-700/30 rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-wood-600/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-wood-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-stone-100 font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-stone-400 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-wood-400 hover:text-wood-300 text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-stone-400 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-800/50 border border-stone-700/50 rounded-sm
                             text-stone-200 placeholder-stone-600 text-sm
                             focus:outline-none focus:border-wood-600/50 focus:ring-1 focus:ring-wood-600/20
                             transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-stone-400 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-800/50 border border-stone-700/50 rounded-sm
                             text-stone-200 placeholder-stone-600 text-sm
                             focus:outline-none focus:border-wood-600/50 focus:ring-1 focus:ring-wood-600/20
                             transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-stone-400 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-800/50 border border-stone-700/50 rounded-sm
                             text-stone-200 placeholder-stone-600 text-sm resize-none
                             focus:outline-none focus:border-wood-600/50 focus:ring-1 focus:ring-wood-600/20
                             transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-3.5 bg-wood-600 hover:bg-wood-500 disabled:bg-wood-700 disabled:cursor-wait
                           text-stone-50 rounded-sm font-medium tracking-wide text-sm uppercase
                           transition-colors duration-300"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
