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

    </div>
  );
}; 