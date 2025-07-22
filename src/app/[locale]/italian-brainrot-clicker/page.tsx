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
    title: 'Italian Brainrot Clicker - Viral Meme Clicker Game Online',
    description: 'Play Italian Brainrot Clicker online! Tap your way through the viral Italian Brainrot universe. Unlock Bombardino Crocodilo, Tung Tung Sahur, and more meme characters!',
    alternates: {
      canonical: locale === 'en' ? 'https://deltarune.cc/italian-brainrot-clicker' : `https://deltarune.cc/${locale}/italian-brainrot-clicker`,
    },
    openGraph: {
      title: 'Italian Brainrot Clicker - Viral Meme Clicker Game',
      description: 'Experience the chaotic world of Italian Brainrot memes in this addictive clicker game!',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function ItalianBrainrotClickerPage({ params }: PageProps) {
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
              { label: 'Italian Brainrot Clicker' }
            ]}
          />

          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              ITALIAN BRAINROT CLICKER
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dive into the chaotic world of viral Italian Brainrot memes! This Italian Brainrot Clicker game lets you click your way through the brainrot universe and unlock legendary characters like Bombardino Crocodilo!
            </p>
          </div>

          {/* Game Container with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Game Area */}
            <div className="lg:col-span-2">
              <GameIframe
                title="Italian Brainrot Clicker"
                src="https://azgames.io/italian-brainrot-clicker-2.embed"
                placeholder={{
                  icon: '🤪',
                  title: 'Brainrot Clicker Loading...',
                  description: 'Click to start the viral meme adventure!'
                }}
              />
            </div>

            {/* Sidebar - Other Trending Games */}
            <div className="lg:col-span-1">
              <OtherTrendingGames currentGameId="brainrot-clicker" />
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
                About Italian Brainrot Clicker
              </h2>
              <div className="w-24 h-0.5 bg-orange-400 mb-6"></div>
              <div className="space-y-6 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Italian Brainrot Clicker is a chaotic meme clicker incremental game where you tap your way through the viral Italian Brainrot universe. This addictive Italian Brainrot Clicker game features all your favorite brainrot characters and memes from the viral brainrot community!
                </p>
                <p className="text-sm leading-relaxed">
                  Start with Tralalero Tralala in this Italian Brainrot Clicker and unlock legendary brainrot characters like Bombardino Crocodilo, Tung Tung Tung Sahur, Cappuccino Assassino, and many more! Can you collect all the brainrot characters in this clicker game?
                </p>
                <div className="bg-orange-900/20 border border-orange-600 rounded-lg p-4">
                  <p className="text-orange-400 font-mono text-sm">
                    🎯 Goal: Click as much as possible in this Italian Brainrot Clicker to unlock upgrades and collect all brainrot characters!
                  </p>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="space-y-8">
              <div className="bg-black border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">Game Features</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="text-lg font-semibold text-orange-400 mb-2">Viral Characters</h4>
                    <p className="text-gray-400 text-sm">
                      Unlock iconic brainrot characters like Bombardino Crocodilo, Chimpanzini Bananini, and more
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Incremental Gameplay</h4>
                    <p className="text-gray-400 text-sm">
                      Earn coins with every click and purchase upgrades to boost your clicking power
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Weather System</h4>
                    <p className="text-gray-400 text-sm">
                      Unlock different weather conditions: Normal, Rain, Sunny, Star Rain, Windy, and Snowing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters & Upgrades */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Brainrot Characters & Upgrades
            </h2>
            <div className="w-24 h-0.5 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover the legendary brainrot characters and powerful clicker upgrades that await you in the Italian Brainrot Clicker universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Characters */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Legendary Characters</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">🦈</span>
                  <div>
                    <strong>Tralalero Tralala:</strong> A shark wearing Nike shoes - your starting character
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">🐊</span>
                  <div>
                    <strong>Bombardino Crocodilo:</strong> Crocodile-bomber plane hybrid that speaks chaotic Italian
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">🦇</span>
                  <div>
                    <strong>Tung Tung Sahur:</strong> Heavily memeified character with rhythm-like chants
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">☕</span>
                  <div>
                    <strong>Cappuccino Assassino:</strong> Lightning-fast dual-katana wielding master
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">🐵</span>
                  <div>
                    <strong>Chimpanzini Bananini:</strong> Adorable monkey-fruit hybrid character
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrades */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Power Upgrades</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center justify-between">
                  <span><strong>Cursor:</strong> +1 Brainrot per click</span>
                  <span className="text-yellow-400">50 coins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Auto Click:</strong> +1 Brainrot per second</span>
                  <span className="text-yellow-400">125 coins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Mr Clicker:</strong> +5 Brainrot per click</span>
                  <span className="text-yellow-400">500 coins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Trallero Farm:</strong> +6 Brainrot per second</span>
                  <span className="text-yellow-400">1,100 coins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span><strong>Mystery Reward:</strong> ???</span>
                  <span className="text-yellow-400">12,000 coins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              How to Play
            </h2>
            <div className="w-24 h-0.5 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Master the art of brainrot clicking with these essential Italian Brainrot Clicker tips and strategies for this addictive clicker game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Controls */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-orange-400">🖱️</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Basic Controls</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><span className="text-orange-400 font-mono">Left Click:</span> Generate brainrot points</div>
                <div><span className="text-orange-400 font-mono">Click UI:</span> Purchase upgrades</div>
                <div><span className="text-orange-400 font-mono">Mobile:</span> Tap to click</div>
              </div>
            </div>

            {/* Strategy Tips */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-purple-400">🎯</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Strategy Tips</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Focus on auto-clickers for passive income</div>
                <div>• Balance manual clicking with upgrades</div>
                <div>• Save coins for expensive upgrades</div>
                <div>• Unlock characters to progress faster</div>
              </div>
            </div>

            {/* Progression */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-blue-400">📈</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Progression Guide</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Start: Tralalero Tralala (Normal weather)</div>
                <div>• 200+ clicks: Unlock Bombardino Crocodilo</div>
                <div>• 1000+ coins: Unlock Rain weather</div>
                <div>• Keep clicking to unlock all characters!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer上方的Other Trending Games */}
      <OtherTrendingGamesSection currentGameId="brainrot-clicker" />
      </main>
      <Footer />
    </div>
  );
}
