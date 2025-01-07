import { useEffect } from "react";
import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="px-4 sm:px-8 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
}; 