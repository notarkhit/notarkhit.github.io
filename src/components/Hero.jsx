import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8 bg-latte-base dark:bg-rosepine-base transition-colors duration-300">
      {/* Background Grid Pattern (Tiling WM vibe) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--tw-color-rosepine-muted) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="z-10 text-left max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6 text-latte-mauve dark:text-rosepine-iris font-mono bg-latte-surface0/50 dark:bg-rosepine-surface/50 w-fit px-4 py-1 border border-latte-surface1 dark:border-rosepine-highlightMed"
        >
          <Terminal size={18} />
          <span>[notarkhit@archlinux ~]$ whoami</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-latte-text dark:text-rosepine-text leading-tight"
        >
          ARYAN ARKHIT<br />
          <span className="text-latte-blue dark:text-rosepine-foam text-6xl md:text-9xl">BEHRA.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-latte-subtext1 dark:text-rosepine-subtle max-w-2xl leading-relaxed mb-12 border-l-2 border-latte-surface2 dark:border-rosepine-highlightMed pl-6"
        >
          Full-stack developer building minimal, high-performance systems. 
          Rigorously adhering to the <span className="text-latte-yellow dark:text-rosepine-gold">KISS</span> principle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-transparent border-2 border-latte-mauve dark:border-rosepine-iris hover:bg-latte-mauve dark:hover:bg-rosepine-iris text-latte-mauve dark:text-rosepine-iris hover:text-latte-base dark:hover:text-rosepine-base font-bold transition-all flex items-center gap-2"
          >
            ./view_work.sh <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-6">
            <a href="https://github.com/notarkhit" target="_blank" rel="noopener noreferrer" className="text-latte-overlay2 dark:text-rosepine-subtle hover:text-latte-blue dark:hover:text-rosepine-foam transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/notarkhit" target="_blank" rel="noopener noreferrer" className="text-latte-overlay2 dark:text-rosepine-subtle hover:text-latte-blue dark:hover:text-rosepine-foam transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:aryanbehra@example.com" className="text-latte-overlay2 dark:text-rosepine-subtle hover:text-latte-blue dark:hover:text-rosepine-foam transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 font-mono text-latte-overlay0 dark:text-rosepine-muted text-sm"
      >
        -- USE [J/K] TO NAVIGATE --
      </motion.div>
    </section>
  );
}
