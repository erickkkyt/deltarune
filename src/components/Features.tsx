'use client';

import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('features');
  const features = [
    {
      icon: "⚔️",
      title: t('features.combat.title'),
      description: t('features.combat.description')
    },
    {
      icon: "📖",
      title: t('features.story.title'),
      description: t('features.story.description')
    },
    {
      icon: "🎵",
      title: t('features.music.title'),
      description: t('features.music.description')
    },
    {
      icon: "🌟",
      title: t('features.chapters.title'),
      description: t('features.chapters.description')
    },
    {
      icon: "🎮",
      title: t('features.online.title'),
      description: t('features.online.description')
    },
    {
      icon: "💾",
      title: t('features.save.title'),
      description: t('features.save.description')
    }
  ];

  return (
    <section id="features" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            {t('title')}
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 p-6 hover:border-blue-400 transition-colors duration-300"
            >
              <div className="text-3xl mb-4 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('whyLove.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  {t('whyLove.points.adventure')}
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  {t('whyLove.points.storytelling')}
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  {t('whyLove.points.music')}
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  {t('whyLove.points.free')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
