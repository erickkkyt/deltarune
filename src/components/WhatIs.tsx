'use client';

import { useTranslations } from 'next-intl';

export default function WhatIs() {
  const t = useTranslations('whatis');
  
  return (
    <section id="about" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
              {t('title')}
            </h2>
            <div className="w-24 h-0.5 bg-blue-400 mb-6"></div>
            <div className="space-y-6 text-gray-300">
              <p className="text-sm leading-relaxed">
                {t('description')}
              </p>

              <p className="text-sm leading-relaxed">
                {t('game_elements')}
              </p>

              <div className="bg-gray-900 border border-gray-700 p-4">
                <h3 className="text-lg font-bold text-white mb-3 font-mono">{t('story_chapters_title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('story_and_chapters')}
                </p>
              </div>
            </div>
          </div>

          {/* Game Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">{t('game_details_title')}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{t('platforms_title')}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('platforms')}
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">{t('release_info_title')}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('release_info')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">{t('gameplay_elements_title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm text-gray-400">{t('gameplay.bullet_hell')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-gray-400">{t('gameplay.team_strategy')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🧩</div>
                  <div className="text-sm text-gray-400">{t('gameplay.puzzles')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💫</div>
                  <div className="text-sm text-gray-400">{t('gameplay.tp_magic')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
