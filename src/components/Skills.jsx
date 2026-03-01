import { motion } from 'framer-motion';
import { Code2, Globe, Settings, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "languages.bin",
    icon: <Code2 size={20} />,
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "Lua", "Shell Scripting"],
    color: "text-latte-blue dark:text-rosepine-foam",
  },
  {
    title: "web_stack.dev",
    icon: <Globe size={20} />,
    skills: ["React.js", "Node.js", "Bun", "jQuery", "HTML5", "CSS3"],
    color: "text-latte-mauve dark:text-rosepine-iris",
  },
  {
    title: "system_config.dot",
    icon: <Settings size={20} />,
    skills: ["Arch Linux", "Linux Ricing", "Neovim", "Git & GitHub", "Wayland (Hyprland)"],
    color: "text-latte-green dark:text-rosepine-pine",
  },
  {
    title: "database.sql",
    icon: <Database size={20} />,
    skills: ["SQL", "PostgreSQL", "Data Modeling"],
    color: "text-latte-yellow dark:text-rosepine-gold",
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-black mb-4 text-latte-text dark:text-rosepine-text border-l-4 border-latte-yellow dark:border-rosepine-gold pl-4">
          capabilities.conf
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-latte-surface0 dark:bg-rosepine-surface border-2 border-latte-surface1 dark:border-rosepine-highlightMed p-6 rounded-none relative group hover:border-latte-text dark:hover:border-rosepine-iris transition-all`}
          >
            {/* Window Decorators */}
            <div className="absolute top-3 right-3 flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-latte-red dark:bg-rosepine-love opacity-50" />
              <div className="w-2 h-2 rounded-full bg-latte-yellow dark:bg-rosepine-gold opacity-50" />
              <div className="w-2 h-2 rounded-full bg-latte-green dark:bg-rosepine-pine opacity-50" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 bg-latte-crust dark:bg-rosepine-base border border-latte-surface2 dark:border-rosepine-highlightMed ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="font-mono font-bold text-lg text-latte-text dark:text-rosepine-text">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-latte-base dark:bg-rosepine-base border border-latte-surface1 dark:border-rosepine-highlightMed font-mono text-sm text-latte-subtext0 dark:text-rosepine-subtle hover:text-latte-blue dark:hover:text-rosepine-foam hover:border-latte-blue dark:hover:border-rosepine-foam transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
