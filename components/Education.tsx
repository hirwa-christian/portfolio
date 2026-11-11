import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { portfolioData } from '../lib/portfolioData';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
export function Education() {
  return (
    <section id="education" className="py-24 relative bg-ide-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="education_and_certs"
          subtitle="cat /var/log/learning.log" />
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-mono text-ide-heading mb-8 flex items-center gap-2">
              <GraduationCap className="text-ide-purple" />
              <span className="text-ide-blue">class</span> Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) =>
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
                  delay: idx * 0.1
                }}
                className="glass-panel p-6 rounded-xl border-l-4 border-l-ide-blue">
                
                  <h4 className="text-lg font-bold text-ide-heading mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-ide-muted font-mono text-sm mb-3 flex justify-between items-center">
                    <span>{edu.institution}</span>
                    <span className="text-ide-amber">{edu.period}</span>
                  </div>
                  <p className="text-ide-text text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-mono text-ide-heading mb-8 flex items-center gap-2">
              <Award className="text-ide-green" />
              <span className="text-ide-blue">interface</span> Certifications
            </h3>
            <div className="space-y-6">
              {portfolioData.certifications.map((cert, idx) =>
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: idx * 0.1
                }}
                className="glass-panel p-6 rounded-xl border-l-4 border-l-ide-green group">
                
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-ide-heading mb-1 group-hover:text-ide-green transition-colors">
                        {cert.name}
                      </h4>
                      <div className="text-ide-muted font-mono text-sm mb-1">
                        {cert.issuer}
                      </div>
                      <div className="text-ide-text text-xs font-mono">
                        Issued: {cert.date}
                      </div>
                    </div>
                    <a
                    href={cert.link}
                    className="text-ide-muted hover:text-ide-heading transition-colors p-2"
                    aria-label="View Certificate">
                    
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}