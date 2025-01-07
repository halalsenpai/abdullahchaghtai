import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="px-4 sm:px-8 max-w-6xl mx-auto">
        {children}
      </main>
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </div>
  );
}; 