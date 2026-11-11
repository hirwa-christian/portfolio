import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Code2, Cpu, Globe, Languages, Heart, Lightbulb } from 'lucide-react';
// import { portfolioData } from '../lib/portfolioData';
export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="about_me"
          subtitle="System.out.println('Hello World');" />
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
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
            className="lg:col-span-7 space-y-6 text-ide-text leading-relaxed">
            
            <p>
              I am a passionate Full Stack Software Engineer with a deep
              appreciation for clean code, scalable architecture, and
              user-centric design. My journey in software development began with
              a curiosity about how things work on the web, which quickly
              evolved into a professional pursuit of engineering excellence.
            </p>
            {/* <p>{portfolioData.personal.philosophy}</p> */}
            <p>
              When I'm not architecting databases or fine-tuning React
              components, you can find me exploring new technologies,
              contributing to open-source, or optimizing my personal workflow.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-ide-surface border border-ide-border">
                <Languages className="text-ide-blue mb-3" size={24} />
                <h3 className="text-ide-heading font-medium mb-2">Languages</h3>
                <ul className="space-y-1">
                  {/* {portfolioData.languages.map((lang) =>
                  <li
                    key={lang.name}
                    className="text-sm flex justify-between">
                    
                      <span className="text-ide-text">{lang.name}</span>
                      <span className="text-ide-muted font-mono text-xs">
                        {lang.proficiency}
                      </span>
                    </li>
                  )} */}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-ide-surface border border-ide-border">
                <Lightbulb className="text-ide-amber mb-3" size={24} />
                <h3 className="text-ide-heading font-medium mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {/* {portfolioData.softSkills.map((skill) =>
                  <span
                    key={skill}
                    className="text-xs bg-ide-bg border border-ide-border px-2 py-1 rounded text-ide-muted">
                    
                      {skill}
                    </span>
                  )} */}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-ide-surface border border-ide-border">
                <Heart className="text-ide-red mb-3" size={24} />
                <h3 className="text-ide-heading font-medium mb-2">Interests</h3>
                <div className="flex flex-wrap gap-1">
                  {/* {portfolioData.interests.map((interest) =>
                  <span
                    key={interest}
                    className="text-xs bg-ide-bg border border-ide-border px-2 py-1 rounded text-ide-muted">
                    
                      {interest}
                    </span>
                  )} */}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-5 relative">
            
            <div className="glass-panel p-1 rounded-xl relative z-10">
              <div className="bg-ide-bg rounded-lg overflow-hidden border border-ide-border">
                <div className="flex items-center px-4 py-2 bg-ide-surface border-b border-ide-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-ide-red"></div>
                    <div className="w-3 h-3 rounded-full bg-ide-amber"></div>
                    <div className="w-3 h-3 rounded-full bg-ide-green"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-ide-muted">
                    profile.ts
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="text-ide-muted mb-2">/**</div>
                  <div className="text-ide-muted mb-2"> * @class Developer</div>
                  <div className="text-ide-muted mb-2">
                    {' '}
                    * @description Full Stack Engineer
                  </div>
                  <div className="text-ide-muted mb-2"> */</div>
                  <div>
                    <span className="text-ide-purple">class</span>{' '}
                    <span className="text-ide-amber">HIRWA_Christian</span>{' '}
                    {'{'}
                  </div>
                  <div className="ml-4 mt-2">
                    <span className="text-ide-purple">constructor</span>() {'{'}
                    <div className="ml-4">
                      <span className="text-ide-blue">this</span>.name ={' '}
                      <span className="text-ide-green">'HIRWA Christian'</span>;
                    </div>
                    <div className="ml-4">
                      <span className="text-ide-blue">this</span>.role ={' '}
                      <span className="text-ide-green">
                        'Full Stack Engineer'
                      </span>
                      ;
                    </div>
                    <div className="ml-4">
                      <span className="text-ide-blue">this</span>.experience ={' '}
                      <span className="text-ide-amber">2</span>;
                    </div>
                    {'}'}
                  </div>
                  <div className="ml-4 mt-4">
                    <span className="text-ide-blue">getTraits</span>() {'{'}
                    <div className="ml-4">
                      <span className="text-ide-purple">return</span> [
                    </div>
                    <div className="ml-8 text-ide-green">
                      'Problem Solver',
                      <br />
                      'Detail Oriented',
                      <br />
                      'Continuous Learner'
                    </div>
                    <div className="ml-4">];</div>
                    {'}'}
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
            {/* Decorative elements behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-ide-blue/20 to-ide-purple/20 blur-2xl -z-10 rounded-full opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>);

}