import { useState } from 'react';
import Link from 'next/link';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-xl font-bold text-gray-900 dark:text-white">AC.</a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 
                         transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Abdullah-Chaghtai.pdf"
              target="_blank"
              className="px-4 py-2 rounded-md border-2 border-yellow-400 text-yellow-500 
                       hover:bg-yellow-400/10 transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 
                         hover:text-yellow-500 dark:hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}; 