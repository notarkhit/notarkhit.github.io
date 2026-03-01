import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'j') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
      }
      if (e.key === 'k') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-mocha-mauve/30 font-mono">
      <ThemeToggle />
      <main className="max-w-[1600px] mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        {/* Simple Footer */}
        <footer className="py-12 border-t border-latte-surface0 dark:border-rosepine-surface text-center">
          <p className="text-latte-overlay1 dark:text-rosepine-muted font-mono text-sm">
            Built with React • © {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
