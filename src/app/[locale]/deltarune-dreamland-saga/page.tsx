import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import GameIframe from '@/components/GameIframe';
import OtherTrendingGames from '@/components/OtherTrendingGames';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'DELTARUNE Dreamland Saga - Epic Kirby Crossover Battle',
    description: 'Experience the ultimate crossover in DELTARUNE Dreamland Saga! Join Kris, Susie, and Ralsei as they face Kirby in epic battles with DELTARUNE elements.',
    alternates: {
      canonical: locale === 'en' ? '/deltarune-dreamland-saga' : `/${locale}/deltarune-dreamland-saga`,
    },
    openGraph: {
      title: 'DELTARUNE Dreamland Saga - Epic Crossover Battle',
      description: 'Play the ultimate DELTARUNE and Kirby crossover adventure with turn-based combat and bullet-hell action.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function DeltaruneDreamlandSagaPage({ params }: PageProps) {
  const { locale } = await params;
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section with Game */}
      <section id="game" className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: tCommon('nav.home'), href: '/' },
              { label: 'DELTARUNE Dreamland Saga' }
            ]}
          />

          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              DELTARUNE DREAMLAND SAGA
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Step into the whimsical DELTARUNE Dreamland Saga crossover where DELTARUNE meets Kirby's Dreamland. Face the ultimate DELTARUNE Dreamland Saga challenge against Dreamland's strongest warrior!
            </p>
          </div>

          {/* Game Container with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* Main Game Area */}
            <div className="lg:col-span-3">
              <GameIframe
                title="DELTARUNE Dreamland Saga"
                src="https://kdata1.com/2022/10/deltarune-dreamland-saga/"
                placeholder={{
                  icon: '🎮',
                  title: 'Dreamland Saga Loading...',
                  description: 'Prepare for the ultimate DELTARUNE x Kirby crossover!'
                }}
              />
            </div>

            {/* Sidebar - Other Trending Games */}
            <div className="lg:col-span-1">
              <OtherTrendingGames currentGameId="dreamland-saga" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Description */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
                About DELTARUNE Dreamland Saga
              </h2>
              <div className="w-24 h-0.5 bg-pink-400 mb-6"></div>
              <div className="space-y-6 text-gray-300">
                <p className="text-sm leading-relaxed">
                  DELTARUNE Dreamland Saga is a fan-made RPG game that combines the unique storytelling of DELTARUNE with the colorful chaos of Kirby's Dreamland. In this DELTARUNE Dreamland Saga adventure, Kris, Susie, and Ralsei will face the most unexpected DELTARUNE challenges ever.
                </p>
                <p className="text-sm leading-relaxed">
                  Your goal in this DELTARUNE Dreamland Saga game is to fight Kirby, a cute but extremely powerful pink warrior. Are you good enough to take down this formidable opponent in an epic DELTARUNE crossover battle?
                </p>
              </div>
            </div>

            {/* Game Features */}
            <div className="space-y-8">
              <div className="bg-black border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">Gameplay Features</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h4 className="text-lg font-semibold text-pink-400 mb-2">Turn-Based Combat</h4>
                    <p className="text-gray-400 text-sm">
                      Retains the classic DELTARUNE turn-based combat system with bullet-hell mechanics
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">TP System</h4>
                    <p className="text-gray-400 text-sm">
                      Build TP through successful dodges and unleash powerful spells and ACT commands
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Epic Boss Battle</h4>
                    <p className="text-gray-400 text-sm">
                      Face Kirby in a tense and creative boss battle with unique attack patterns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Tips */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Game Controls</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded font-mono text-sm">Arrow Keys</div>
                  <span className="text-gray-300 text-sm">Move heart during battles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded font-mono text-sm">Z</div>
                  <span className="text-gray-300 text-sm">Confirm or continue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 text-white px-3 py-1 rounded font-mono text-sm">X</div>
                  <span className="text-gray-300 text-sm">Cancel or return</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Battle Tips</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">💡</span>
                  <span>Close dodges (grazing) increase your TP meter faster</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">⚡</span>
                  <span>Hard Mode features faster projectiles and increased damage</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🎯</span>
                  <span>Use ACT commands strategically to find Kirby's weaknesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
