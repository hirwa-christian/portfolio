import React from 'react';
import { motion } from 'framer-motion';
export function SectionHeader({
  title,
  subtitle,
  id




}: {title: string;subtitle?: string;id?: string;}) {
  return (
    <div className="mb-12" id={id}>
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
          once: true,
          margin: '-100px'
        }}
        className="flex items-center gap-4">
        
        <span className="text-ide-purple font-mono text-sm sm:text-base">
          function
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-ide-blue font-mono">
          {title}()
        </h2>
        <div className="h-[1px] flex-grow bg-ide-border ml-4"></div>
      </motion.div>
      {subtitle &&
      <motion.p
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.2
        }}
        className="mt-4 text-ide-muted font-mono text-sm">
        
          // {subtitle}
        </motion.p>
      }
    </div>);

}