import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-characters' });

  return {
    title: 'DELTARUNE Characters Guide - Kris, Susie, Ralsei & More',
    description: 'Complete DELTARUNE character encyclopedia featuring Kris, Susie, Ralsei, and supporting cast with detailed abilities, backgrounds, and story development.',
    alternates: {
      canonical: locale === 'en' ? '/deltarune-characters' : `/${locale}/deltarune-characters`,
    },
    openGraph: {
      title: 'DELTARUNE Character Encyclopedia',
      description: 'Discover every DELTARUNE character with detailed abilities, backgrounds, and story development analysis.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function DeltaruneCharactersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'deltarune-characters' });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="text-sm text-gray-300 font-mono">
            Complete DELTARUNE Character Guide | DELTARUNE Heroes & Supporting Cast Encyclopedia
          </div>
        </div>
      </section>

      {/* Main Characters */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('mainCharacters.title')}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Meet the core DELTARUNE characters who drive the story forward. Each DELTARUNE hero brings unique abilities and personality to your adventure.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-700 p-6 rounded-lg text-center hover:border-red-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-red-400">{t('mainCharacters.kris.name')}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{t('mainCharacters.kris.background.description')}</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p><strong className="text-red-300">Role:</strong> {t('mainCharacters.kris.basicInfo.role')}</p>
                <p><strong className="text-red-300">Weapon:</strong> {t('mainCharacters.kris.basicInfo.weapon')}</p>
              </div>
            </div>
            <div className="bg-black border border-gray-700 p-6 rounded-lg text-center hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-purple-400">{t('mainCharacters.susie.name')}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{t('mainCharacters.susie.background.description')}</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p><strong className="text-purple-300">Role:</strong> {t('mainCharacters.susie.basicInfo.role')}</p>
                <p><strong className="text-purple-300">Weapon:</strong> {t('mainCharacters.susie.basicInfo.weapon')}</p>
              </div>
            </div>
            <div className="bg-black border border-gray-700 p-6 rounded-lg text-center hover:border-green-500 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-green-400">{t('mainCharacters.ralsei.name')}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{t('mainCharacters.ralsei.background.description')}</p>
              <div className="text-sm text-gray-400 space-y-1">
                <p><strong className="text-green-300">Role:</strong> {t('mainCharacters.ralsei.basicInfo.role')}</p>
                <p><strong className="text-green-300">Weapon:</strong> {t('mainCharacters.ralsei.basicInfo.weapon')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Characters */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-mono text-yellow-400">
            {t('supportingCharacters.title')}
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover the rich cast of DELTARUNE supporting characters who shape the world and story. Each DELTARUNE character adds depth to the overall narrative experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-yellow-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-yellow-400">{t('supportingCharacters.toriel.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.toriel.description')}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-orange-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-orange-400">{t('supportingCharacters.asgore.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.asgore.description')}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-green-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-green-400">{t('supportingCharacters.alphys.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.alphys.description')}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-blue-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-blue-400">{t('supportingCharacters.undyne.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.undyne.description')}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-cyan-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-cyan-400">{t('supportingCharacters.sans.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.sans.description')}</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg text-center hover:border-pink-500 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-pink-400">{t('supportingCharacters.papyrus.name')}</h3>
              <p className="text-sm text-gray-300">{t('supportingCharacters.papyrus.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8 text-yellow-400 font-mono">Explore More DELTARUNE Guides</h3>
          <p className="text-gray-300 mb-8">
            Now that you know the DELTARUNE characters, dive deeper into specific chapter guides and gameplay strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-indigo-500">
              {t('navigation.backToHome')}
            </a>
            <a href="/deltarune-chapter-3" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-purple-500">
              {t('navigation.chapter3Guide')}
            </a>
            <a href="/deltarune-chapter-4" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors font-mono border border-pink-500">
              {t('navigation.chapter4Guide')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
