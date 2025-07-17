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
    title: 'Smash Karts - 3D Multiplayer Kart Battle Game Online',
    description: 'Play Smash Karts online! Drive go-karts, pick up weapons, and blow up other players in this epic 3D multiplayer battle arena. Level up and unlock new characters!',
    alternates: {
      canonical: locale === 'en' ? '/smash-karts' : `/${locale}/smash-karts`,
    },
    openGraph: {
      title: 'Smash Karts - 3D Multiplayer Kart Battle Arena',
      description: 'Experience explosive kart battles with weapons, power-ups, and customizable characters!',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function SmashKartsPage({ params }: PageProps) {
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
              { label: 'Smash Karts' }
            ]}
          />

          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              SMASH KARTS
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Drive your Smash Karts go-kart, pick up weapons, and blow up other karts in this explosive 3D multiplayer Smash Karts battle arena! Level up and unlock new characters in Smash Karts!
            </p>
          </div>

          {/* Game Container with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Game Area */}
            <div className="lg:col-span-2">
              <GameIframe
                title="Smash Karts"
                src="https://smashkarts.io/"
                placeholder={{
                  icon: '🏎️',
                  title: 'Smash Karts Loading...',
                  description: 'Get ready for explosive kart battles!'
                }}
              />
            </div>

            {/* Sidebar - Other Trending Games */}
            <div className="lg:col-span-1">
              <OtherTrendingGames currentGameId="smash-karts" />
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
                About Smash Karts
              </h2>
              <div className="w-24 h-0.5 bg-red-400 mb-6"></div>
              <div className="space-y-6 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Smash Karts is a 3D multiplayer IO kart battle game where chaos meets strategy. Drive your Smash Karts go-kart through various battle arenas, collect powerful weapons, and eliminate other players to dominate the Smash Karts battlefield!
                </p>
                <p className="text-sm leading-relaxed">
                  Face off with players from around the world in intense 3+ minute Smash Karts battles. Each Smash Karts match rewards you with XP to level up, unlock new characters, and customize your kart with unique skins and accessories.
                </p>
                <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                  <p className="text-red-400 font-mono text-sm">
                    🏆 Goal: Survive the chaos, collect weapons, and become the ultimate kart champion!
                  </p>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="space-y-8">
              <div className="bg-black border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">Game Features</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Multiplayer Battles</h4>
                    <p className="text-gray-400 text-sm">
                      Face off against players worldwide in intense 3D kart battle arenas
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Weapon System</h4>
                    <p className="text-gray-400 text-sm">
                      Collect missiles, machine guns, mines, and power-ups to dominate opponents
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Customization</h4>
                    <p className="text-gray-400 text-sm">
                      Unlock and customize karts, characters, hats, and wheels as you level up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weapons & Power-ups */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Weapons & Power-ups
            </h2>
            <div className="w-24 h-0.5 bg-red-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Drive over question mark boxes to collect random weapons and power-ups for maximum chaos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Weapons */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-red-400">🚀</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Missiles</h3>
              <p className="text-gray-400 text-sm">
                Lock onto enemies and launch devastating homing missiles
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-orange-400">🔫</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Machine Gun</h3>
              <p className="text-gray-400 text-sm">
                Rapid-fire weapon for continuous damage output
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-yellow-400">💣</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Mines</h3>
              <p className="text-gray-400 text-sm">
                Drop explosive mines to trap unsuspecting opponents
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-purple-400">✨</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Invincibility</h3>
              <p className="text-gray-400 text-sm">
                Become temporarily invulnerable to all attacks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              How to Play Smash Karts
            </h2>
            <div className="w-24 h-0.5 bg-red-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Master the controls and dominate the battlefield with these essential tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Controls */}
            <div className="bg-black border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Game Controls</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded font-mono text-sm">WASD / Arrows</div>
                  <span className="text-gray-300 text-sm">Drive your kart</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 text-white px-3 py-1 rounded font-mono text-sm">Space</div>
                  <span className="text-gray-300 text-sm">Fire weapons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600 text-white px-3 py-1 rounded font-mono text-sm">Mouse</div>
                  <span className="text-gray-300 text-sm">Navigate menus</span>
                </div>
              </div>
            </div>

            {/* Strategy Tips */}
            <div className="bg-black border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Pro Tips</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">💡</span>
                  <span>Collect weapon boxes strategically - timing is everything</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🎯</span>
                  <span>Use the environment to your advantage - hide behind obstacles</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">⚡</span>
                  <span>Keep moving to avoid enemy fire and mines</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🏆</span>
                  <span>Focus on survival over kills to maximize XP gains</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progression System */}
          <div className="bg-black border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono text-center">Progression & Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h4 className="text-lg font-semibold text-white mb-2">Play & Earn XP</h4>
                <p className="text-gray-400 text-sm">Every public match rewards you with experience points</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⬆️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Level Up</h4>
                <p className="text-gray-400 text-sm">Gain levels to unlock coins, hats, wheels, and character tokens</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h4 className="text-lg font-semibold text-white mb-2">Unlock Rewards</h4>
                <p className="text-gray-400 text-sm">Use tokens in the prize machine to get new characters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps & Events */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Maps & Special Events
            </h2>
            <div className="w-24 h-0.5 bg-red-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Battle across diverse maps and participate in seasonal events for exclusive rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Battle Arenas</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-red-400">🏟️</span>
                  <div>
                    <strong>The Gravel Pit:</strong> Rocky terrain with multiple elevation levels
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-400">🌆</span>
                  <div>
                    <strong>Urban Arena:</strong> City environment with tight corners and obstacles
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-400">🏭</span>
                  <div>
                    <strong>Industrial Zone:</strong> Factory setting with conveyor belts and machinery
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-400">🌊</span>
                  <div>
                    <strong>Waterfront:</strong> Coastal battlefield with water hazards
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Seasonal Events</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-400">🎃</span>
                  <div>
                    <strong>Halloween Special:</strong> Spooky maps with themed decorations and rewards
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-400">🎄</span>
                  <div>
                    <strong>Christmas Event:</strong> Winter wonderland maps with holiday items
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-pink-400">💝</span>
                  <div>
                    <strong>Valentine's Day:</strong> Love-themed content and exclusive cosmetics
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-400">🎆</span>
                  <div>
                    <strong>New Year:</strong> Fireworks and celebration-themed battle arenas
                  </div>
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
