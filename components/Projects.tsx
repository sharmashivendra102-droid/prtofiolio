"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  BarChart2,
  Users,
  Trophy,
  TrendingUp,
  Brain,
  Database,
} from "lucide-react";

const projects = [
  {
    id: "01",
    status: "Flagship",
    statusColor: "accent-blue",
    title: "FinSight AI",
    subtitle: "Financial Intelligence & AI Signal Platform",
    description:
      "A full-stack financial intelligence system that integrates real-time market data, AI-generated insights, and structured evaluation loops to analyze financial signals and portfolio performance.",
    longDesc:
      "Designed as a closed-loop financial intelligence engine where signals feed evaluation, evaluation informs performance tracking, and performance data refines future decision logic. Not a dashboard — a self-improving signal system.",
    architecture: [
      "17-module system architecture with clear separation of concerns",
      "Real-time RSS ingestion engine pulling from 10+ financial sources with deduplication",
      "AI signal generation pipeline using LLaMA 3.3 70B via Groq API",
      "Portfolio tracker with live P&L, technical indicators, and market data",
      "Signal evaluation engine measuring directional accuracy, MFE/MAE performance",
      "Strategy profitability ranking engine comparing signal performance over time",
      "Multi-strategy backtesting: RSI, MA crossover, momentum, ML-driven models",
    ],
    techStack: ["Python", "Streamlit", "Groq / LLaMA 3.3 70B", "Supabase", "yfinance", "RSS"],
    tagColor: "tag",
    icon: Brain,
    accentColor: "#38BDF8",
    gradient: "from-accent-blue/10 via-accent-indigo/5 to-transparent",
    borderHover: "hover:border-accent-blue/40",
  },
  {
    id: "02",
    status: "Founded",
    statusColor: "accent-violet",
    title: "Socratic Debate Club",
    subtitle: "Philosophy, Economics & Intellectual Leadership",
    description:
      "Founded and architected a student-led Socratic discussion community focused on philosophy, economics, political theory, and ethics — built around systems for structured reasoning and civil discourse.",
    longDesc:
      "The challenge wasn't starting a club — it was designing governance systems and discourse frameworks that scale to 50+ participants without losing intellectual quality or becoming chaos.",
    architecture: [
      "Designed complete governance and rule framework for structured civil discourse",
      "Built rotating debate formats using Socratic questioning methodologies",
      "Managed meeting flow, moderation protocols, and participation balance",
      "Organized structured discussions: economic systems, AI ethics, political philosophy",
      "Created consistent intellectual environment with strong recurring engagement",
      "Scaled to 50+ active members with maintained quality and leadership depth",
    ],
    techStack: ["Organizational Design", "Socratic Method", "Systems Governance", "50+ Members"],
    tagColor: "tag-purple",
    icon: Users,
    accentColor: "#A78BFA",
    gradient: "from-accent-violet/10 via-accent-indigo/5 to-transparent",
    borderHover: "hover:border-accent-violet/40",
  },
  {
    id: "03",
    status: "Recognized",
    statusColor: "accent-teal",
    title: "National Innovation Awards",
    subtitle: "MIT THINK · Conrad Challenge · ExploraVision",
    description:
      "Selected for recognition across three national-level innovation and research competitions, demonstrating early research methodology, structured problem-solving, and real-world impact design.",
    longDesc:
      "Each competition demanded a different mode of thinking — from scientific rigor at MIT THINK to market-facing innovation at Conrad Challenge — building a foundation for interdisciplinary technical reasoning.",
    architecture: [
      "MIT THINK — Commended: research-grade science and engineering proposal",
      "Conrad Challenge — Innovator Award: market-ready innovation with real-world impact",
      "Toshiba ExploraVision — Honorable Mention: future-technology vision and research",
      "Demonstrated early ability to frame complex problems for expert panels",
      "Applied interdisciplinary thinking across science, engineering, and economics",
    ],
    techStack: ["MIT THINK", "Conrad Challenge", "ExploraVision", "Research", "Innovation"],
    tagColor: "tag-teal",
    icon: Trophy,
    accentColor: "#2DD4BF",
    gradient: "from-accent-teal/10 via-accent-blue/5 to-transparent",
    borderHover: "hover:border-accent-teal/40",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-2xl p-8 hover-card ${project.borderHover} group relative overflow-hidden`}
    >
      {/* Background gradient */}
      <div
        className={`absolute top-0 right-0 w-80 h-80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
        style={{
          background: `radial-gradient(ellipse, ${project.accentColor}12 0%, transparent 70%)`,
          transform: "translate(30%, -30%)",
          filter: "blur(40px)",
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}30` }}
          >
            <Icon size={18} style={{ color: project.accentColor }} />
          </div>
          <div>
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: project.accentColor }}
            >
              {project.status}
            </span>
            <div className="font-mono text-xs text-text-muted mt-0.5">{project.id}</div>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          className="text-text-muted group-hover:text-text-secondary transition-colors"
        />
      </div>

      {/* Title */}
      <h3 className="font-display font-extrabold text-2xl text-text-primary mb-1 group-hover:gradient-text transition-all duration-300">
        {project.title}
      </h3>
      <p className="text-sm font-medium text-text-muted mb-5 font-mono">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {project.description}
      </p>
      <p className="text-text-muted text-xs leading-relaxed mb-6 italic">
        {project.longDesc}
      </p>

      {/* Architecture */}
      <div className="mb-6">
        <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-3">
          System Architecture
        </div>
        <ul className="space-y-2">
          {project.architecture.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: project.accentColor }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span key={tech} className={project.tagColor}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-number mb-4">// 02 — Projects</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
              What I've built
            </h2>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Multi-module systems with real pipelines, evaluation loops, and
              architecture that scales. Not demos — deployable systems.
            </p>
          </div>
        </motion.div>

        {/* FinSight — full width flagship */}
        <div className="mb-6">
          <ProjectCard project={projects[0]} index={0} />
        </div>

        {/* 2-col grid for remaining */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        {/* Signal loop diagram for FinSight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-6">
            FinSight AI — Closed-loop signal architecture
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {[
              { label: "News Ingestion", icon: Database, color: "#38BDF8" },
              { label: "→", icon: null, color: "#475569" },
              { label: "AI Signal Gen", icon: Brain, color: "#818CF8" },
              { label: "→", icon: null, color: "#475569" },
              { label: "Portfolio Tracking", icon: TrendingUp, color: "#2DD4BF" },
              { label: "→", icon: null, color: "#475569" },
              { label: "Evaluation Engine", icon: BarChart2, color: "#A78BFA" },
              { label: "→", icon: null, color: "#475569" },
              { label: "Strategy Ranking", icon: Zap, color: "#F472B6" },
            ].map((node, i) =>
              node.icon ? (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ background: `${node.color}0D`, border: `1px solid ${node.color}25` }}
                >
                  <node.icon size={16} style={{ color: node.color }} />
                  <span className="text-xs font-mono text-text-secondary whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              ) : (
                <div key={i} className="text-text-muted text-lg font-light px-1">
                  {node.label}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
