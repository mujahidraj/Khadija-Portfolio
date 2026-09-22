// =============================================================================
// Home Page — Composes all sections into a single-page portfolio
// =============================================================================
// EDITING GUIDE:
// • This file is the single page entry point. Each section is a separate component.
// • To reorder sections, simply rearrange the component imports below.
// • All content is driven from /data/portfolio.json — no need to edit components
//   to change text, projects, or testimonials.

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <Process />
      <Clients />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
