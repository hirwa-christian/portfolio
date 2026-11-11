import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../lib/portfolioData';
export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader title="work_experience" subtitle="git log --oneline" />

        <div className="relative border-l border-ide-border ml-4 md:ml-6 space-y-12">
          {portfolioData.experience.map((exp, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.2
            }}
            className="relative pl-8 md:pl-12">
            
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-ide-blue ring-4 ring-ide-bg"></div>

              <div className="glass-panel p-6 md:p-8 rounded-xl hover:border-ide-blue/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-ide-heading">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-ide-blue font-mono text-sm mt-1">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-ide-muted font-mono text-sm bg-ide-surface px-3 py-1 rounded-full w-fit">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-ide-text">
                  {exp.description.map((desc, i) =>
                <li key={i} className="flex items-start gap-3">
                      <span className="text-ide-green mt-1.5 text-xs">▶</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                )}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) =>
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-ide-surface border border-ide-border text-ide-muted">
                  
                      {tech}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}