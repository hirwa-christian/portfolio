import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { portfolioData } from '../lib/portfolioData';
export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-ide-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="technical_skills" subtitle="Loading modules..." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((category, idx) =>
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="glass-panel p-6 rounded-xl">
            
              <h3 className="text-xl font-mono text-ide-heading mb-6 flex items-center gap-2">
                <span className="text-ide-purple">import</span>
                <span className="text-ide-amber">{'{'}</span>
                {category.title}
                <span className="text-ide-amber">{'}'}</span>
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill) =>
              <div key={skill.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium text-ide-text">
                        {skill.name}
                      </span>
                      <span className="text-ide-muted font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-ide-bg rounded-full overflow-hidden border border-ide-border">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-ide-blue to-ide-purple"
                      />
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}