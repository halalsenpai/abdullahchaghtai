import { useEffect } from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  useEffect(() => {
    // Force dark mode and ensure it persists
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    // Override any system preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    mediaQuery.addEventListener('change', () => {
      document.documentElement.classList.add('dark');
    });

    return () => mediaQuery.removeEventListener('change', () => {
      document.documentElement.classList.add('dark');
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="px-4 sm:px-8 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
}; 