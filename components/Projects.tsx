import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Github, ExternalLink, FolderGit2, X, ChevronRight } from 'lucide-react';
import { portfolioData, Project } from '../lib/portfolioData';
export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = [
  'All',
  ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))];

  const filteredProjects =
  filter === 'All' ?
  portfolioData.projects :
  portfolioData.projects.filter((p) => p.category === filter);
  return (
    <section id="projects" className="py-24 relative bg-ide-surface/30">
      <div className="container mx-auto px-6">
        <SectionHeader title="featured_projects" subtitle="ls -la ./projects" />

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-4 py-1.5 rounded-full text-sm font-mono transition-colors ${filter === cat ? 'bg-ide-blue text-ide-bg font-bold' : 'bg-ide-surface border border-ide-border text-ide-muted hover:text-ide-heading'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) =>
            <motion.div
              layout
              key={project.title}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              className="glass-panel rounded-xl p-6 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-ide-surface rounded-lg text-ide-blue group-hover:text-ide-purple transition-colors">
                    <FolderGit2 size={24} />
                  </div>
                  <div
                  className="flex gap-3 text-ide-muted"
                  onClick={(e) => e.stopPropagation()}>
                  
                    <a
                    href={project.links.github}
                    className="hover:text-ide-heading transition-colors"
                    aria-label="GitHub Repository">
                    
                      <Github size={20} />
                    </a>
                    <a
                    href={project.links.live}
                    className="hover:text-ide-heading transition-colors"
                    aria-label="Live Demo">
                    
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-ide-heading mb-3 group-hover:text-ide-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-ide-text text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ide-border/50">
                  {project.tech.slice(0, 3).map((tech) =>
                <span
                  key={tech}
                  className="text-xs font-mono text-ide-muted">
                  
                      {tech}
                    </span>
                )}
                  {project.tech.length > 3 &&
                <span className="text-xs font-mono text-ide-muted">
                      +{project.tech.length - 3}
                    </span>
                }
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {/* {selectedProject &&
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-ide-bg/80 backdrop-blur-sm" />
            
              <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95
              }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-ide-surface rounded-2xl shadow-2xl z-10 custom-scrollbar">
              
                <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-ide-bg/50 rounded-full text-ide-muted hover:text-ide-heading transition-colors z-20">
                
                  <X size={24} />
                </button>

                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
                  <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-ide-surface to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 text-xs font-mono rounded bg-ide-blue/20 text-ide-blue border border-ide-blue/30">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-ide-heading">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-ide-bg border border-ide-border rounded-md text-sm font-medium hover:border-ide-muted transition-colors">
                    
                      <Github size={16} /> View Source
                    </a>
                    <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-ide-blue text-ide-bg rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                    
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono text-ide-purple mb-3 flex items-center gap-2">
                      <ChevronRight size={18} /> Overview
                    </h3>
                    <p className="text-ide-text leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-mono text-ide-green mb-3 flex items-center gap-2">
                        <ChevronRight size={18} /> Architecture
                      </h3>
                      <p className="text-ide-text leading-relaxed text-sm">
                        {selectedProject.architecture}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-mono text-ide-amber mb-3 flex items-center gap-2">
                        <ChevronRight size={18} /> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) =>
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-ide-bg border border-ide-border text-ide-muted">
                        
                            {tech}
                          </span>
                      )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-mono text-ide-red mb-3 flex items-center gap-2">
                        <ChevronRight size={18} /> Challenges
                      </h3>
                      <p className="text-ide-text leading-relaxed text-sm">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-mono text-ide-blue mb-3 flex items-center gap-2">
                        <ChevronRight size={18} /> Solutions
                      </h3>
                      <p className="text-ide-text leading-relaxed text-sm">
                        {selectedProject.solutions}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-ide-bg border border-ide-border rounded-lg">
                    <h3 className="text-sm font-mono text-ide-muted mb-2 uppercase tracking-wider">
                      Outcomes
                    </h3>
                    <p className="text-ide-heading font-medium">
                      {selectedProject.outcomes}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          } */}
        </AnimatePresence>
      </div>
    </section>);

}