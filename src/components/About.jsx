import { motion } from 'framer-motion';
import { Cpu, Globe, Sparkles, Terminal } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "neofetch --portfolio",
      icon: <Terminal className="text-latte-blue dark:text-rosepine-foam" />,
      desc: "OS: Arch Linux | WM: Hyprland | Editor: Neovim",
      size: "md:col-span-2",
      bg: "bg-latte-base dark:bg-rosepine-base"
    },
    {
      title: "Current Focus",
      icon: <Sparkles className="text-latte-yellow dark:text-rosepine-gold" />,
      desc: "Optimizing dotfiles and building performant web apps.",
      size: "md:col-span-1",
      bg: "bg-latte-base dark:bg-rosepine-base"
    },
    {
      title: "Stack",
      icon: <Cpu className="text-latte-mauve dark:text-rosepine-iris" />,
      desc: "React, TS, Bun, Rust, PostgreSQL",
      size: "md:col-span-1",
      bg: "bg-latte-base dark:bg-rosepine-base"
    },
    {
      title: "Philosophy",
      icon: <Globe className="text-latte-green dark:text-rosepine-pine" />,
      desc: "Keep It Simple, Stupid (KISS). Minimalist design, maximum performance.",
      size: "md:col-span-2",
      bg: "bg-latte-base dark:bg-rosepine-base"
    }
  ];

  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-black mb-4 text-latte-text dark:text-rosepine-text border-l-4 border-latte-mauve dark:border-rosepine-iris pl-4">
          systeminfo.sh
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ 
              borderColor: "var(--tw-color-rosepine-iris)",
              boxShadow: "0 0 15px rgba(196, 167, 231, 0.2)" 
            }}
            className={`${card.size} ${card.bg} border-2 border-latte-surface1 dark:border-rosepine-highlightMed p-8 rounded-none transition-all group relative`}
          >
            {/* Window Decorator (Hyprland style) */}
            <div className="absolute top-2 right-2 flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
              <div className="w-2.5 h-2.5 rounded-full bg-latte-red dark:bg-rosepine-love" />
              <div className="w-2.5 h-2.5 rounded-full bg-latte-yellow dark:bg-rosepine-gold" />
              <div className="w-2.5 h-2.5 rounded-full bg-latte-green dark:bg-rosepine-pine" />
            </div>

            <div className="mb-4 p-2 bg-latte-surface0 dark:bg-rosepine-surface w-fit rounded-none border border-latte-surface2 dark:border-rosepine-highlightMed">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-latte-blue dark:text-rosepine-foam">$ {card.title}</h3>
            <p className="text-latte-subtext1 dark:text-rosepine-subtle leading-relaxed font-mono text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
