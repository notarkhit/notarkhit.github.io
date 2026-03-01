import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 p-3 rounded-none bg-latte-surface0 dark:bg-rosepine-surface shadow-lg border-2 border-latte-surface1 dark:border-rosepine-highlightMed"
    >
      {isDark ? (
        <Sun className="text-rosepine-gold" size={24} />
      ) : (
        <Moon className="text-latte-blue" size={24} />
      )}
    </motion.button>
  );
}
