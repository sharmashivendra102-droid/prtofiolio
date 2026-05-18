"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Zap, Star } from "lucide-react";

const achievements = [
  {
    award: "MIT THINK",
    level: "Commended",
    body: "MIT School of Engineering",
    description:
      "Selected for commendation in MIT's undergraduate research competition — one of the most competitive high school innovation programs in the country, evaluated by MIT faculty and researchers.",
    icon: Star,
    color: "#38BDF8",
    year: "2026",
  },
  {
    award: "Conrad Challenge",
    level: "Innovator Award",
    body: "Conrad Foundation",
    description:
      "Received the Innovator Award for developing a solution with measurable real-world impact potential. Conrad focuses on teams that can move from problem identification to market-ready innovation.",
    icon: Zap,
    color: "#A78BFA",
    year: "2026",
  },
  {
    award: "Toshiba ExploraVision",
    level: "Honorable Mention",
    body: "National Science Teachers Association",
    description:
      "National honorable mention for a future-technology research proposal, evaluated for scientific rigor, creativity, and long-term feasibility across thousands of national submissions.",
    icon: Award,
    color: "#2DD4BF",
    year: "2026",
  },
];

export default function Achievements() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="achievements" className="relative py-32 px-6 bg-surface/30">
      <div className="absolute top-0 left-0 right-0 h-px divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-number mb-4">// 05 — Achievements</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary">
            National recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.award}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 hover-card relative overflow-hidden group"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${ach.color}10 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon + year */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}
                    >
                      <Icon size={20} style={{ color: ach.color }} />
                    </div>
                    <span className="font-mono text-xs text-text-muted">{ach.year}</span>
                  </div>

                  {/* Award name */}
                  <div className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: ach.color }}>
                    {ach.award}
                  </div>

                  {/* Level */}
                  <h3 className="font-display font-extrabold text-xl text-text-primary mb-1">
                    {ach.level}
                  </h3>

                  {/* Body */}
                  <div className="text-xs text-text-muted mb-4 font-mono">
                    {ach.body}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* STEM context note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-text-muted text-sm font-mono">
            Strong academic trajectory in STEM + economics
          </p>
        </motion.div>
      </div>
    </section>
  );
}
