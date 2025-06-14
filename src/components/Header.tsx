'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold text-white font-mono">
                DELTARUNE
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link
                href="#game"
                className="text-gray-300 hover:text-white text-sm font-mono transition-colors"
              >
                Game
              </Link>
              <Link
                href="#features"
                className="text-gray-300 hover:text-white text-sm font-mono transition-colors"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-white text-sm font-mono transition-colors"
              >
                About
              </Link>
              <Link
                href="#faq"
                className="text-gray-300 hover:text-white text-sm font-mono transition-colors"
              >
                FAQ
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
            <Link
              href="#game"
              className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Game
            </Link>
            <Link
              href="#features"
              className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#faq"
              className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
