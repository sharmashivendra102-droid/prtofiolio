"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Glowing orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 animate-pulse2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.4) 0%, rgba(129,140,248,0.2) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse, rgba(45,212,191,0.5) 0%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse, rgba(167,139,250,0.6) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Fade overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/5 text-accent-blue text-xs font-mono font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-text-secondary text-lg font-medium mb-3 tracking-wide"
        >
          Shivendra Sharma
        </motion.h2>

        {/* Headline */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-6"
        >
          <span className="gradient-text">AI Systems Builder</span>
          <br />
          <span className="text-text-primary">+ Fintech Engineer</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          Building intelligent financial systems, AI-driven decision engines,
          and structured information platforms at the intersection of{" "}
          <span className="text-accent-blue">economics</span> and{" "}
          <span className="text-accent-indigo">machine learning</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/sharmashivendra102-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            Contact
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-accent-blue/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
