'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('navigation');
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
                {t('game')}
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white text-sm font-mono transition-colors"
              >
                {t('menu.blog')}
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white text-sm font-mono transition-colors">
                  Trending Games
                  <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/geoguessr"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-t-lg"
                  >
                    GeoGuessr
                  </Link>
                  <Link
                    href="/geometry-dash-lite"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Geometry Dash Lite
                  </Link>
                  <Link
                    href="/deltarune-dreamland-saga"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    DELTARUNE Dreamland Saga
                  </Link>
                  <Link
                    href="/deltarune-mockup-battle-toy"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    DELTARUNE Mockup Battle Toy
                  </Link>
                  <Link
                    href="/italian-brainrot-clicker"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Italian Brainrot Clicker
                  </Link>
                  <Link
                    href="/smash-karts"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-b-lg"
                  >
                    Smash Karts
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white text-sm font-mono transition-colors">
                  Guides
                  <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/deltarune-chapter-3"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-t-lg"
                  >
                    Chapter 3 Guide
                  </Link>
                  <Link
                    href="/deltarune-chapter-4"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Chapter 4 Guide
                  </Link>
                  <Link
                    href="/deltarune-characters"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-b-lg"
                  >
                    Characters
                  </Link>
                </div>
              </div>
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
              {t('game')}
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('menu.blog')}
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-400 text-xs font-mono mb-2">Trending Games</div>
              <Link
                href="/geoguessr"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                GeoGuessr
              </Link>
              <Link
                href="/geometry-dash-lite"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Geometry Dash Lite
              </Link>
              <Link
                href="/deltarune-dreamland-saga"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                DELTARUNE Dreamland Saga
              </Link>
              <Link
                href="/deltarune-mockup-battle-toy"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                DELTARUNE Mockup Battle Toy
              </Link>
              <Link
                href="/italian-brainrot-clicker"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Italian Brainrot Clicker
              </Link>
              <Link
                href="/smash-karts"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Smash Karts
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-gray-400 text-xs font-mono mb-2">Guides</div>
              <Link
                href="/deltarune-chapter-3"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Chapter 3 Guide
              </Link>
              <Link
                href="/deltarune-chapter-4"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Chapter 4 Guide
              </Link>
              <Link
                href="/deltarune-characters"
                className="text-gray-300 hover:text-white block px-3 py-1 text-sm font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                Characters
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
