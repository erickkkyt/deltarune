'use client';

import { useTranslations } from 'next-intl';

export default function WhyPlay() {
  const t = useTranslations('whyplay');
  
  return (
    <section id="why-play" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Game Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black border border-gray-700 p-4 rounded-lg">
            <img
              src="https://pub-dd9404e72d594f05acd661a8179747d2.r2.dev/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250630214007.png"
              alt="DELTARUNE Game Scene 1"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-black border border-gray-700 p-4 rounded-lg">
            <img
              src="https://pub-dd9404e72d594f05acd661a8179747d2.r2.dev/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250630214015.png"
              alt="DELTARUNE Game Scene 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unique Storytelling */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-purple-400 transition-colors">
            <div className="text-4xl mb-4 text-center">📖</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('storytelling.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('storytelling.description')}
            </p>
          </div>

          {/* Innovative Gameplay */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-blue-400 transition-colors">
            <div className="text-4xl mb-4 text-center">🎮</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('gameplay.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('gameplay.description')}
            </p>
          </div>

          {/* Memorable Characters */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-green-400 transition-colors">
            <div className="text-4xl mb-4 text-center">👥</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('characters.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('characters.description')}
            </p>
          </div>

          {/* Amazing Soundtrack */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition-colors">
            <div className="text-4xl mb-4 text-center">🎵</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('soundtrack.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('soundtrack.description')}
            </p>
          </div>

          {/* Community & Theories */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-red-400 transition-colors">
            <div className="text-4xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('community.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('community.description')}
            </p>
          </div>

          {/* Free to Play */}
          <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-cyan-400 transition-colors">
            <div className="text-4xl mb-4 text-center">💎</div>
            <h3 className="text-xl font-bold text-white mb-3 font-mono text-center">
              {t('free.title')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('free.description')}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-black border border-gray-700 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3 font-mono">
              {t('cta.title')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('cta.description')}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              {t('cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
