"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Programming & Engineering",
    color: "#38BDF8",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "AI / Data Systems",
    color: "#A78BFA",
    skills: [
      { name: "LLM Integration (Groq / OpenAI)", level: 90 },
      { name: "ML Pipelines", level: 80 },
      { name: "Financial Modeling Systems", level: 85 },
      { name: "Data Pipelines & Evaluation", level: 88 },
      { name: "Signal Generation Systems", level: 85 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    color: "#2DD4BF",
    skills: [
      { name: "Supabase", level: 82 },
      { name: "Streamlit", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "yfinance / Market APIs", level: 85 },
      { name: "RSS Ingestion Systems", level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function SkillGroupCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-7 hover-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-2 h-8 rounded-full"
          style={{ background: group.color }}
        />
        <h3 className="font-display font-bold text-text-primary text-base">
          {group.category}
        </h3>
      </div>
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
            delay={index * 0.1 + i * 0.07}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-32 px-6 bg-surface/30">
      <div className="absolute top-0 left-0 right-0 h-px divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-number mb-4">// 03 — Skills</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary">
            Technical depth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
