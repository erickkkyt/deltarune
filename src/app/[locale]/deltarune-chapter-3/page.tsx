import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-chapter-3' });

  return {
    title: 'DELTARUNE Chapter 3 Guide - TV World Boss Battles & Maps',
    description: 'Complete DELTARUNE Chapter 3 walkthrough featuring detailed TV World maps, boss battle strategies, hidden easter egg locations, and expert tips.',
    alternates: {
      canonical: locale === 'en' ? '/deltarune-chapter-3' : `/${locale}/deltarune-chapter-3`,
    },
    openGraph: {
      title: 'DELTARUNE Chapter 3 Complete Guide',
      description: 'Master DELTARUNE Chapter 3 with detailed TV World maps, boss strategies, and collectible locations.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function DeltaruneChapter3Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-chapter-3' });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="text-sm text-gray-300 font-mono">
            Complete DELTARUNE Chapter 3 Guide | DELTARUNE TV World Walkthrough
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('overview.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t('overview.description')} This comprehensive DELTARUNE Chapter 3 guide covers all aspects of the TV World adventure, including DELTARUNE boss battles, secret locations, and character development paths in DELTARUNE.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-400">{t('overview.playtime.title')}</h3>
                <p className="text-gray-300">{t('overview.playtime.value')}</p>
              </div>
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{t('overview.newCharacters.title')}</h3>
                <p className="text-gray-300">{t('overview.newCharacters.value')}</p>
              </div>
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-green-400">{t('overview.easterEggs.title')}</h3>
                <p className="text-gray-300">{t('overview.easterEggs.value')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Map */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('chapterMap.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-400">{t('chapterMap.tvWorld.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">Explore the DELTARUNE TV World with this detailed location guide for DELTARUNE Chapter 3.</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {t.raw('chapterMap.tvWorld.locations').map((location: string, index: number) => (
                  <li key={index} className="text-sm">{location}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{t('chapterMap.importantLocations.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">Key DELTARUNE locations that are essential for completing Chapter 3 of DELTARUNE.</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {t.raw('chapterMap.importantLocations.locations').map((location: string, index: number) => (
                  <li key={index} className="text-sm">{location}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boss Battles */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('bossGuide.title')}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Master every DELTARUNE Chapter 3 boss battle with these proven strategies. Each DELTARUNE boss requires unique tactics to defeat in the TV World of DELTARUNE.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-purple-400">{t('bossGuide.mike.title')}</h3>
              <h4 className="font-semibold mb-2 text-gray-200">{t('bossGuide.mike.strategy.title')}</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {t.raw('bossGuide.mike.strategy.list').map((strategy: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{t('bossGuide.queen.title')}</h3>
              <h4 className="font-semibold mb-2 text-gray-200">{t('bossGuide.queen.strategy.title')}</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {t.raw('bossGuide.queen.strategy.list').map((strategy: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black border border-gray-700 p-6 rounded-lg hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-green-400">{t('bossGuide.tenna.title')}</h3>
              <h4 className="font-semibold mb-2 text-gray-200">{t('bossGuide.tenna.victory.title')}</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                {t.raw('bossGuide.tenna.victory.list').map((strategy: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('tipsSection.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-purple-400">{t('tipsSection.general.title')}</h3>
            <p className="text-gray-300 mb-8">
              These essential DELTARUNE Chapter 3 tips will help you master the TV World and complete all DELTARUNE challenges efficiently.
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {t.raw('tipsSection.general.list').map((tip: string, index: number) => (
                <li key={index} className="bg-gray-900 border border-gray-700 p-4 rounded-lg hover:border-purple-500 transition-colors">
                  <span className="text-purple-400 mr-2">💡</span>
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 text-yellow-400 font-mono">Explore More DELTARUNE Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-purple-500">
              {t('navigation.backToHome')}
            </a>
            <a href="/deltarune-chapter-4" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-blue-500">
              {t('navigation.chapter4Guide')}
            </a>
            <a href="/deltarune-characters" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-green-500">
              {t('navigation.charactersGuide')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
