import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
// import { downloadResume } from '../lib/downloadResume';
const navItems = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Education',
  href: '#education'
},
{
  name: 'Contact',
  href: '#contact'
}];

const sectionIds = [
'about',
'skills',
'experience',
'projects',
'education',
'contact'];

export function Layout({ children }: {children: React.ReactNode;}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0
      }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-ide-blue origin-left z-50"
        style={{
          scaleX
        }} />
      

      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-ide-bg/80 backdrop-blur-md border-b border-ide-border py-4' : 'bg-transparent py-6'}`}>
        
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 text-ide-heading font-mono font-bold text-xl group"
            aria-label="Back to top">
            
            <Terminal className="text-ide-green group-hover:text-ide-blue transition-colors" />
            <span>
              HC<span className="text-ide-blue animate-pulse">_</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`text-sm font-mono transition-colors ${isActive ? 'text-ide-blue' : 'text-ide-muted hover:text-ide-heading'}`}>
                  
                  <span className="text-ide-purple mr-1">0{i + 1}.</span>
                  {item.name}
                </a>);

            })}
            <button
              // onClick={downloadResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-ide-blue text-ide-blue rounded hover:bg-ide-blue/10 transition-colors font-mono text-sm">
              
              <Download size={15} /> Resume
            </button>
            <button
              onClick={toggleTheme}
              className="text-ide-muted hover:text-ide-amber transition-colors ml-2"
              aria-label={
              theme === 'dark' ?
              'Switch to light theme' :
              'Switch to dark theme'
              }>
              
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-4 md:hidden bg-yellow-400">
            <button
              onClick={toggleTheme}
              className="text-ide-muted hover:text-ide-amber transition-colors"
              aria-label={
              theme === 'dark' ?
              'Switch to light theme' :
              'Switch to dark theme'
              }>
              
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-ide-muted hover:text-ide-heading"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}>
              
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileMenuOpen &&
      <div className="fixed inset-0 z-30 bg-ide-bg/95 backdrop-blur-sm flex flex-col items-center justify-center md:hidden  bg-red-500">
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, i) =>
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-mono text-ide-muted hover:text-ide-heading transition-colors">
            
                <span className="text-ide-purple mr-2">0{i + 1}.</span>
                {item.name}
              </a>
          )}
            <button
            onClick={() => {
              setMobileMenuOpen(false);
              // downloadResume();
            }}
            className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 border border-ide-blue text-ide-blue rounded hover:bg-ide-blue/10 transition-colors font-mono">
            
              <Download size={16} /> Resume
            </button>
          </nav>
        </div>
      }

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="py-8 border-t border-ide-border bg-ide-surface/50 text-center">
        <p className="font-mono text-sm text-ide-muted">
          Built by <span className="text-ide-blue">HIRWA Christian</span> &copy;{' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>);

}