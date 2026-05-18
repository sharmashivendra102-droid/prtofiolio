"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "17", label: "Module architecture", desc: "FinSight AI system design" },
  { value: "50+", label: "Club members led", desc: "Socratic debate & philosophy" },
  { value: "3×", label: "National competitions", desc: "MIT THINK, Conrad, ExploraVision" },
  { value: "10+", label: "Financial data sources", desc: "Real-time RSS ingestion" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      {/* Subtle top fade */}
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-number mb-4">// 01 — About</div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary mb-8 leading-tight">
              I build systems,
              <br />
              <span className="gradient-text">not just software.</span>
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                My work sits at the convergence of artificial intelligence,
                financial engineering, and systems architecture. I'm drawn to
                problems where data complexity meets decision-making — the kind
                of environments where good architecture compounds over time.
              </p>
              <p>
                The projects I build aren't single-file scripts or demo
                applications. They're multi-module systems with real pipelines:
                ingestion layers, evaluation engines, signal generation loops,
                and feedback mechanisms that improve over time. I think in
                closed-loop systems — where outputs inform future inputs.
              </p>
              <p>
                My interest in economics and markets gave me a framework for
                thinking about signal quality, information asymmetry, and
                decision under uncertainty. Machine learning gave me the tools
                to operationalize that thinking. The intersection is where I
                spend most of my time.
              </p>
              <p>
                I'm self-directed by nature. The most significant things I've
                built weren't assigned — they were problems I identified,
                architectures I designed, and systems I shipped independently.
                That mindset extends beyond code: I founded and scaled a
                structured intellectual community, designing governance systems
                and frameworks for complex human reasoning.
              </p>
              <p className="text-text-primary font-medium">
                I'm interested in early-stage environments where technical depth
                and systems thinking create real leverage.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="glass rounded-xl p-6 hover-card"
              >
                <div className="font-display font-extrabold text-4xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-primary font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-text-muted text-xs font-mono">
                  {stat.desc}
                </div>
              </motion.div>
            ))}

            {/* Tech line */}
            <div className="col-span-2 glass rounded-xl p-5">
              <div className="text-xs font-mono text-text-muted mb-3 uppercase tracking-widest">
                Core stack
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "TypeScript",
                  "Next.js",
                  "Groq / LLaMA 3.3",
                  "Supabase",
                  "Streamlit",
                  "yfinance",
                ].map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
