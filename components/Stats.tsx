import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../lib/portfolioData';
function Counter({ value, suffix }: {value: number;suffix: string;}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        setCount(value);
        return;
      }
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value, prefersReducedMotion]);
  return (
    <span
      ref={ref}
      className="text-3xl md:text-4xl font-bold text-ide-blue font-mono">
      
      {count}
      {suffix}
    </span>);

}
export function Stats() {
  return (
    <section className="py-12 border-y border-ide-border bg-ide-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {portfolioData.stats.map((stat, idx) =>
          <motion.div
            key={idx}
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
            className="flex flex-col items-center gap-2">
            
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-ide-muted font-mono uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}