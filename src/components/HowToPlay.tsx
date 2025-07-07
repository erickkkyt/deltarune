'use client';

import { useTranslations } from 'next-intl';

export default function HowToPlay() {
  const t = useTranslations('howtoplay');
  
  return (
    <section id="how-to-play" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Getting Started */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                {t('getting_started.title')}
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{t('getting_started.download.title')}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('getting_started.download.description')}
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">{t('getting_started.system.title')}</h4>
                  <p className="text-gray-400 text-sm">
                    {t('getting_started.system.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                {t('basic_controls.title')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black p-4 rounded border border-gray-600">
                  <div className="text-center mb-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-white font-mono">WASD</span>
                  </div>
                  <p className="text-gray-400 text-sm text-center">{t('basic_controls.movement')}</p>
                </div>
                <div className="bg-black p-4 rounded border border-gray-600">
                  <div className="text-center mb-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-white font-mono">Z</span>
                  </div>
                  <p className="text-gray-400 text-sm text-center">{t('basic_controls.confirm')}</p>
                </div>
                <div className="bg-black p-4 rounded border border-gray-600">
                  <div className="text-center mb-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-white font-mono">X</span>
                  </div>
                  <p className="text-gray-400 text-sm text-center">{t('basic_controls.cancel')}</p>
                </div>
                <div className="bg-black p-4 rounded border border-gray-600">
                  <div className="text-center mb-2">
                    <span className="bg-gray-700 px-3 py-1 rounded text-white font-mono">C</span>
                  </div>
                  <p className="text-gray-400 text-sm text-center">{t('basic_controls.menu')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Combat System */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                {t('combat_system.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⚔️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-1">{t('combat_system.fight.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('combat_system.fight.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-1">{t('combat_system.defend.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('combat_system.defend.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💫</div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-1">{t('combat_system.magic.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('combat_system.magic.description')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-1">{t('combat_system.spare.title')}</h4>
                    <p className="text-gray-400 text-sm">{t('combat_system.spare.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
                {t('tips.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-lg">💡</div>
                  <p className="text-gray-400 text-sm">{t('tips.tip1')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-lg">🎯</div>
                  <p className="text-gray-400 text-sm">{t('tips.tip2')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-lg">🔍</div>
                  <p className="text-gray-400 text-sm">{t('tips.tip3')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-lg">💾</div>
                  <p className="text-gray-400 text-sm">{t('tips.tip4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-12 bg-black p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 font-mono text-center">
            {t('quick_start.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t('quick_start.step1.title')}</h4>
              <p className="text-gray-300 text-sm">{t('quick_start.step1.description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t('quick_start.step2.title')}</h4>
              <p className="text-gray-300 text-sm">{t('quick_start.step2.description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t('quick_start.step3.title')}</h4>
              <p className="text-gray-300 text-sm">{t('quick_start.step3.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
