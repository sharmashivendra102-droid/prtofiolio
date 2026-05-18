"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Settings, Layers, MessageSquare, TrendingUp } from "lucide-react";

const contributions = [
  {
    icon: Layers,
    title: "Founded & architected the club from zero",
    desc: "Identified the gap, designed the structure, built the culture — from concept to 50+ active members.",
    color: "#38BDF8",
  },
  {
    icon: Settings,
    title: "Designed full governance & discourse system",
    desc: "Built structured rules, moderation protocols, and frameworks for civil intellectual debate at scale.",
    color: "#A78BFA",
  },
  {
    icon: MessageSquare,
    title: "Socratic debate methodology",
    desc: "Implemented rotating discussion formats with structured Socratic questioning — not open forums, but disciplined reasoning.",
    color: "#2DD4BF",
  },
  {
    icon: Users,
    title: "Scaled to 50+ active members",
    desc: "Grew engagement while maintaining intellectual quality — participation balance and moderation depth intact.",
    color: "#F472B6",
  },
  {
    icon: TrendingUp,
    title: "Led complex interdisciplinary discussions",
    desc: "Economic systems, AI governance, political philosophy, ethics, epistemology — structured, not surface-level.",
    color: "#FB923C",
  },
];

export default function Leadership() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="leadership" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-number mb-4">// 04 — Leadership</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary leading-tight">
              Leadership through
              <br />
              <span className="gradient-text">systems design</span>
            </h2>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              Not leadership by title — leadership by building the structures
              that make complex human coordination work at scale.
            </p>
          </div>
        </motion.div>

        {/* Featured leadership card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 mb-6 hover-card border-accent-violet/20 hover:border-accent-violet/40"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent-violet/10 border border-accent-violet/25 flex items-center justify-center">
              <Users size={28} className="text-accent-violet" />
            </div>
            <div>
              <div className="font-mono text-xs text-accent-violet uppercase tracking-widest mb-1">
                Founder & Systems Designer
              </div>
              <h3 className="font-display font-extrabold text-2xl text-text-primary">
                Socratic Debate, Philosophy & Economics Club
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="tag-purple">50+ Members</span>
                <span className="tag-purple">Active Weekly</span>
                <span className="tag-purple">Structured Governance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributions.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                >
                  <Icon size={16} className="mb-3" style={{ color: item.color }} />
                  <div className="text-text-primary text-sm font-semibold mb-1.5">
                    {item.title}
                  </div>
                  <div className="text-text-muted text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl border border-accent-blue/15 bg-accent-blue/5 p-6 flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b from-accent-blue to-accent-indigo" />
          <div>
            <p className="text-text-primary text-sm font-medium mb-1">
              Systems thinking applied to human communities
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              The same architectural instincts I bring to software — clear
              abstractions, defined interfaces, feedback loops, scalable
              governance — I applied to building an intellectual community.
              Scale changes the problem; systems thinking solves it either way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
