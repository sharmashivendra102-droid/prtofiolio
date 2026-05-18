"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (replace with actual backend/Formspree/Resend)
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px divider" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(56,189,248,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-number mb-4">// 06 — Contact</div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary mb-4">
            Let's talk
          </h2>
          <p className="text-text-secondary text-base max-w-md leading-relaxed">
            Open to conversations about AI systems, fintech engineering, early-stage projects, or research opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <a
              href="mailto:sharma.shivendra102@gmail.com"
              className="flex items-center gap-4 glass rounded-xl p-5 hover-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/25 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent-blue" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">
                  Email
                </div>
                <div className="text-text-primary font-medium text-sm">
                  sharma.shivendra102@gmail.com
                </div>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-accent-blue transition-colors group-hover:translate-x-1 duration-200" />
            </a>

            <a
              href="https://github.com/sharmashivendra102-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-5 hover-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-indigo/10 border border-accent-indigo/25 flex items-center justify-center flex-shrink-0">
                <Github size={18} className="text-accent-indigo" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">
                  GitHub
                </div>
                <div className="text-text-primary font-medium text-sm">
                  github.com/sharmashivendra102-droid
                </div>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-accent-indigo transition-colors group-hover:translate-x-1 duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/shivendra-sharma-5221273bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-xl p-5 hover-card group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-teal/10 border border-accent-teal/25 flex items-center justify-center flex-shrink-0">
                <Linkedin size={18} className="text-accent-teal" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-0.5">
                  LinkedIn
                </div>
                <div className="text-text-primary font-medium text-sm">
                  linkedin.com/in/shivendra-sharma-5221273bb
                </div>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-accent-teal transition-colors group-hover:translate-x-1 duration-200" />
            </a>

            {/* Tagline */}
            <div className="pt-4">
              <p className="text-text-muted text-xs font-mono leading-relaxed">
                Based in [Your City] · Available for remote opportunities ·
                Open to research collaborations
              </p>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={48} className="text-accent-teal mb-4 mx-auto" />
                </motion.div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                  Message sent
                </h3>
                <p className="text-text-secondary text-sm">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-border-bright rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 transition-all duration-200 font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="sharma.shivendra102@gmail.com"
                    className="w-full bg-white/[0.03] border border-border-bright rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 transition-all duration-200 font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to talk about?"
                    className="w-full bg-white/[0.03] border border-border-bright rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 transition-all duration-200 resize-none font-body"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-xs text-text-muted text-center">
                  Or email directly at{" "}
                  <a href="mailto:sharma.shivendra102@gmail.com" className="text-accent-blue hover:underline">
                    sharma.shivendra102@gmail.com
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
