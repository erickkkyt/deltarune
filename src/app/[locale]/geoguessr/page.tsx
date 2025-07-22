import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GameIframe from '@/components/GameIframe';
import OtherTrendingGames from '@/components/OtherTrendingGames';
import OtherTrendingGamesSection from '@/components/OtherTrendingGamesSection';
import Breadcrumb from '@/components/Breadcrumb';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'GeoGuessr Online - Free Geography Game',
    description: 'Play GeoGuessr online for free! Test your geography knowledge by guessing locations from Street View images. Challenge yourself with this addictive geography game.',
    alternates: {
      canonical: locale === 'en' ? 'https://deltarune.cc/geoguessr' : `https://deltarune.cc/${locale}/geoguessr`,
    },
    openGraph: {
      title: 'GeoGuessr Online - Free Geography Game',
      description: 'Test your geography knowledge with GeoGuessr! Guess locations from Street View images in this free online geography game.',
      type: 'article',
      locale: locale,
    },
  };
}



export default async function GeoGuessrPage({ params }: PageProps) {
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
                { label: 'GeoGuessr' }
              ]}
            />

            {/* Hero Text */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                GEOGUESSR
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Play GeoGuessr and test your geography knowledge with Street View locations. Challenge yourself with this addictive GeoGuessr geography guessing game!
              </p>
            </div>

            {/* Game Container with Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Main Game Area */}
              <div className="lg:col-span-2">
                <GameIframe
                  title="GeoGuessr"
                  src="https://openguessr.com/"
                  placeholder={{
                    icon: '🌍',
                    title: 'GeoGuessr Loading...',
                    description: 'Get ready to explore the world!'
                  }}
                />
              </div>

              {/* Sidebar - Other Trending Games */}
              <div className="lg:col-span-1">
                <OtherTrendingGames currentGameId="geoguessr" />
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
                  About GeoGuessr
                </h2>
                <div className="w-24 h-0.5 bg-blue-400 mb-6"></div>
                <div className="space-y-6 text-gray-300">
                  <p className="text-sm leading-relaxed">
                    GeoGuessr is an online geography game that challenges players to guess their location based on Google Street View imagery. Players are dropped into a random location and must use visual clues like road signs, architecture, vegetation, and cultural markers to determine where they are in the world.
                  </p>
                  <p className="text-sm leading-relaxed">
                    GeoGuessr provides an educational and entertaining way to explore the globe virtually while testing your geographical knowledge. The closer your GeoGuessr guess to the actual location, the more points you earn.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
                    <p className="text-blue-400 font-mono text-sm">
                      🌍 Explore the world from your browser with GeoGuessr!
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Play Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
                  How to Play GeoGuessr
                </h2>
                <div className="w-24 h-0.5 bg-green-400 mb-6"></div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <p className="text-sm">Look around the Street View environment using click and drag</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <p className="text-sm">Search for clues like road signs, architecture, and cultural markers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <p className="text-sm">Click on the world map to place your guess</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">4</div>
                    <p className="text-sm">Earn points based on how close your guess is to the actual location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer上方的Other Trending Games */}
        <OtherTrendingGamesSection currentGameId="geoguessr" />
      </main>
      <Footer />
    </div>
  );
}
