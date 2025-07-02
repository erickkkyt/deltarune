'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import FooterLanguageSelector from './FooterLanguageSelector';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-xl font-bold text-white font-mono">
                {t('brand.title')}
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              {t('brand.description')}
            </p>

          </div>

          {/* Deltarune Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">{t('navigation.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#game" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('navigation.play')}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('navigation.features')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('navigation.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">{t('resources.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('resources.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('resources.terms')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('resources.blog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('copyright', { year: currentYear })}
            </div>

          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-6 text-center">
          <FooterLanguageSelector />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://startupfa.me/s/deltarune-online?utm_source=deltarune.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xs transition-colors"
          >
            {t('featured')}
          </a>
        </div>
      </div>
    </footer>
  );
}
