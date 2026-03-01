import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NimbusCode",
    description: "A high-performance, cloud-based code editor and execution environment built for speed and minimal latency.",
    tech: ["React", "Node.js", "Vercel", "Tailwind"],
    link: "https://nimbuscode.vercel.app",
    github: "https://github.com/notarkhit/nimbuscode",
    accent: "bg-latte-mauve/10 dark:bg-rosepine-iris/10",
    text: "text-latte-mauve dark:text-rosepine-iris",
    hover: "group-hover:bg-latte-mauve/20 dark:group-hover:bg-rosepine-iris/20",
    shadow: "group-hover:shadow-latte-mauve/20 dark:group-hover:shadow-rosepine-iris/20"
  },
  {
    title: "Asus Helper",
    description: "A lightweight Linux GUI for asusctl, providing an intuitive interface for controlling ASUS laptop features (RGB, fan profiles, power) specifically for ROG and TUF series laptops.",
    tech: ["Neutralinojs", "TypeScript", "Bun", "Linux"],
    link: "https://github.com/notarkhit/asus-helper",
    github: "https://github.com/notarkhit/asus-helper",
    accent: "bg-latte-blue/10 dark:bg-rosepine-foam/10",
    text: "text-latte-blue dark:text-rosepine-foam",
    hover: "group-hover:bg-latte-blue/20 dark:group-hover:bg-rosepine-foam/20",
    shadow: "group-hover:shadow-latte-blue/20 dark:group-hover:shadow-rosepine-foam/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-black mb-4 text-latte-text dark:text-rosepine-text border-l-4 border-latte-mauve dark:border-rosepine-iris pl-4">
          projects.bin
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative bg-latte-surface0 dark:bg-rosepine-surface rounded-none p-8 border-2 border-latte-surface1 dark:border-rosepine-highlightMed transition-all overflow-hidden ${project.shadow}`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${project.accent} rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-3 bg-latte-crust dark:bg-rosepine-base rounded-none border border-latte-surface2 dark:border-rosepine-highlightMed ${project.hover} transition-colors`}
                >
                  <ExternalLink className={project.text} size={24} />
                </a>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-latte-overlay2 dark:text-rosepine-subtle hover:text-latte-text dark:hover:text-rosepine-text transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-latte-text dark:text-rosepine-text">
                {project.title}
              </h3>
              <p className="text-latte-subtext1 dark:text-rosepine-subtle mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-latte-base dark:bg-rosepine-base border border-latte-surface1 dark:border-rosepine-highlightMed rounded-none text-xs font-mono text-latte-overlay0 dark:text-rosepine-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
