import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { portfolioData } from '../lib/portfolioData';
// import { downloadResume } from '../lib/downloadResume';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 pb-10">
      <div className="absolute inset-0 bg-grid opacity-50 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ide-surface border border-ide-border mb-8"
          >
            <Terminal size={14} className="text-ide-green" />
            <span className="text-ide-muted font-mono text-xs sm:text-sm">
              status: ready_for_new_challenges
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-ide-heading"
          >
            Hi, I'm <span className="text-ide-blue">{portfolioData.personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-ide-muted font-mono mb-8"
          >
            <span className="text-ide-purple">const</span> role ={' '}
            <span className="text-ide-green">"{portfolioData.personal.role}"</span>;
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-ide-text max-w-2xl mb-10 leading-relaxed"
          >
            {portfolioData.personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ide-blue text-ide-bg font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <button
              // onClick={downloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ide-surface border border-ide-border text-ide-text font-medium rounded-md hover:bg-ide-border transition-colors"
            >
              <Download size={18} /> Download Résumé
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex items-center gap-6 text-ide-muted"
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ide-text transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ide-text transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-ide-text transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
