import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-chapter-4' });

  return {
    title: 'DELTARUNE Chapter 4 Guide - School World & Dream Sequences',
    description: 'Ultimate DELTARUNE Chapter 4 walkthrough featuring detailed school maps, dream world mechanics, multiple ending paths, and complete collectibles guide.',
    alternates: {
      canonical: locale === 'en' ? '/deltarune-chapter-4' : `/${locale}/deltarune-chapter-4`,
    },
    openGraph: {
      title: 'DELTARUNE Chapter 4 Ultimate Guide',
      description: 'Complete the most complex DELTARUNE chapter with detailed school maps, dream mechanics, and multiple ending paths.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function DeltaruneChapter4Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-chapter-4' });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-teal-900 to-cyan-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="text-sm text-gray-300 font-mono">
            Ultimate DELTARUNE Chapter 4 Guide | DELTARUNE School World Complete Walkthrough
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
              {t('overview.description')} This ultimate DELTARUNE Chapter 4 walkthrough provides complete coverage of the most complex DELTARUNE chapter, featuring detailed DELTARUNE strategies, multiple ending paths, and comprehensive DELTARUNE character development analysis.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-green-400">{t('overview.playtime.title')}</h3>
                <p className="text-gray-300">{t('overview.playtime.value')}</p>
              </div>
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{t('overview.endings.title')}</h3>
                <p className="text-gray-300">{t('overview.endings.value')}</p>
              </div>
              <div className="text-center bg-black border border-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{t('overview.hiddenContent.title')}</h3>
                <p className="text-gray-300">{t('overview.hiddenContent.value')}</p>
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
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Navigate through the most complex DELTARUNE chapter with detailed maps of every DELTARUNE location in Chapter 4.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-green-400">{t('chapterMap.schoolInterior.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">Explore every classroom and hidden area in the DELTARUNE school interior.</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {t.raw('chapterMap.schoolInterior.locations').map((location: string, index: number) => (
                  <li key={index} className="text-sm">{location}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{t('chapterMap.schoolExterior.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">Discover outdoor secrets and hidden passages in DELTARUNE Chapter 4.</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {t.raw('chapterMap.schoolExterior.locations').map((location: string, index: number) => (
                  <li key={index} className="text-sm">{location}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-purple-400">{t('chapterMap.dreamWorld.title')}</h3>
              <p className="text-gray-300 mb-4 text-sm">Enter the mysterious dream sequences unique to DELTARUNE Chapter 4.</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                {t.raw('chapterMap.dreamWorld.locations').map((location: string, index: number) => (
                  <li key={index} className="text-sm">{location}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 text-yellow-400 font-mono">Continue Your DELTARUNE Journey</h3>
          <p className="text-gray-300 mb-8">
            Explore more DELTARUNE content and master every aspect of this incredible RPG adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-green-500">
              {t('navigation.backToHome')}
            </a>
            <a href="/deltarune-chapter-3" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-purple-500">
              {t('navigation.chapter3Guide')}
            </a>
            <a href="/deltarune-characters" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-cyan-500">
              {t('navigation.charactersGuide')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
