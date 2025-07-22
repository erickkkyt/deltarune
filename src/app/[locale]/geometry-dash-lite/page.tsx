import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import GameIframe from '@/components/GameIframe';
import OtherTrendingGames from '@/components/OtherTrendingGames';
import OtherTrendingGamesSection from '@/components/OtherTrendingGamesSection';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Geometry Dash Lite - Free Rhythm Platformer',
    description: 'Play Geometry Dash Lite online for free! Jump, fly, and flip through challenging levels in this addictive rhythm-based platformer game with amazing music.',
    alternates: {
      canonical: locale === 'en' ? 'https://deltarune.cc/geometry-dash-lite' : `https://deltarune.cc/${locale}/geometry-dash-lite`,
    },
    openGraph: {
      title: 'Geometry Dash Lite - Free Rhythm Platformer',
      description: 'Experience the addictive rhythm-based platformer! Jump through obstacles, sync to the beat, and conquer challenging levels in Geometry Dash Lite.',
      type: 'article',
      locale: locale,
    },
  };
}



export default async function GeometryDashLitePage({ params }: PageProps) {
  const { locale } = await params;
  const tCommon = await getTranslations('common');

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        {/* Hero Section with Game */}
        <section id="game" className="bg-black py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: tCommon('nav.home'), href: '/' },
                { label: 'Geometry Dash Lite' }
              ]}
            />

            {/* Hero Text */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                GEOMETRY DASH LITE
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Play Geometry Dash Lite online! Experience the ultimate rhythm-based platformer with challenging obstacles and amazing music.
              </p>
            </div>

            {/* Game Container with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Main Game Area */}
              <div className="lg:col-span-2">
                <GameIframe
                  title="Geometry Dash Lite"
                  src="https://geometrydashlitepc.io/geometry-dash-lite.embed"
                  placeholder={{
                    icon: '🎵',
                    title: 'Geometry Dash Lite Loading...',
                    description: 'Get ready for the rhythm-based challenge!'
                  }}
                />
              </div>

              {/* Sidebar - Other Trending Games */}
              <div className="lg:col-span-1">
                <OtherTrendingGames currentGameId="geometry-dash-lite" />
              </div>
            </div>
          </div>
        </section>

        {/* Game Overview */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* About Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
                  About Geometry Dash Lite
                </h2>
                <div className="w-24 h-0.5 bg-purple-400 mb-6"></div>
                <div className="space-y-6 text-gray-300">
                  <p className="text-sm leading-relaxed">
                    Geometry Dash Lite is a rhythm-based action platformer that challenges players to navigate through obstacle-filled levels synchronized to catchy electronic music. Players control a geometric character that must jump, fly, and flip through increasingly difficult Geometry Dash Lite levels.
                  </p>
                  <p className="text-sm leading-relaxed">
                    The Geometry Dash Lite game combines precise timing, quick reflexes, and musical rhythm for an addictive gaming experience. Every obstacle and platform aligns with the background music, creating an immersive audio-visual experience.
                  </p>
                  <div className="bg-purple-900/20 border border-purple-600 rounded-lg p-4">
                    <p className="text-purple-400 font-mono text-sm">
                      🎵 Sync to the beat and conquer challenging levels!
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Play Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
                  How to Play Geometry Dash Lite
                </h2>
                <div className="w-24 h-0.5 bg-yellow-400 mb-6"></div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <p className="text-sm">Use spacebar, mouse click, or tap to make your character jump</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <p className="text-sm">Time your jumps perfectly to avoid obstacles and sync with the music</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <p className="text-sm">Navigate through spikes, gaps, and moving platforms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <p className="text-sm">Master different character forms with unique movement mechanics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer上方的Other Trending Games */}
        <OtherTrendingGamesSection currentGameId="geometry-dash-lite" />
      </main>
      <Footer />
    </div>
  );
}
