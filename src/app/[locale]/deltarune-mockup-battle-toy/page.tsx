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
    title: 'DELTARUNE Mockup Battle Toy - Create Your Own Battle Scenes',
    description: 'Create your own DELTARUNE battle scenes with the Mockup Battle Toy! Import sprites, customize dialogue, and bring your creative battle ideas to life.',
    alternates: {
      canonical: locale === 'en' ? '/deltarune-mockup-battle-toy' : `/${locale}/deltarune-mockup-battle-toy`,
    },
    openGraph: {
      title: 'DELTARUNE Mockup Battle Toy - Creative Battle Scene Creator',
      description: 'Design and create custom DELTARUNE battle scenes with this powerful creative tool.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function DeltaruneMockupBattleToyPage({ params }: PageProps) {
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
              { label: 'DELTARUNE Mockup Battle Toy' }
            ]}
          />

          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              DELTARUNE MOCKUP BATTLE TOY
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Create your own DELTARUNE Mockup Battle Toy scenes where your creativity shines. Design epic DELTARUNE battles, craft dialogue, and bring your DELTARUNE imagination to life with this battle toy!
            </p>
          </div>

          {/* Game Container with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Game Area */}
            <div className="lg:col-span-2">
              <GameIframe
                title="DELTARUNE Mockup Battle Toy"
                src="https://html-classic.itch.zone/html/4489880/index.html"
                placeholder={{
                  icon: '🎭',
                  title: 'Creative Tool Loading...',
                  description: 'Unleash your creativity with DELTARUNE battle scenes!'
                }}
              />
            </div>

            {/* Sidebar - Other Trending Games */}
            <div className="lg:col-span-1">
              <OtherTrendingGames currentGameId="battle-toy" />
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
                Game Overview
              </h2>
              <div className="w-24 h-0.5 bg-green-400 mb-6"></div>
              <div className="space-y-6 text-gray-300">
                <p className="text-sm leading-relaxed">
                  DELTARUNE Mockup Battle Toy lets you bring your own DELTARUNE-inspired battle scenes to life. This DELTARUNE Mockup Battle Toy isn't a traditional RPG where you farm EXP or defeat enemies—it's a creative DELTARUNE tool for imagination and storytelling.
                </p>
                <p className="text-sm leading-relaxed">
                  This fan-made DELTARUNE Mockup Battle Toy is perfect for those who have always wanted to create their own DELTARUNE battle sequences. There are no enemies to defeat, no EXP to earn, and no ending to achieve. Instead, this DELTARUNE battle toy is about storytelling, creating memes, or simply expressing your love for DELTARUNE in a highly visual way.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                  <p className="text-yellow-400 font-mono text-sm">
                    💡 You're not just a player—you're the director of your own DELTARUNE scenes!
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Features */}
            <div className="space-y-8">
              <div className="bg-black border border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-mono">Creative Features</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Visual Customization</h4>
                    <p className="text-gray-400 text-sm">
                      Import any PNG or GIF sprites for custom enemies, OC bosses, or meme characters
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Dialogue System</h4>
                    <p className="text-gray-400 text-sm">
                      Create dramatic cutscenes, funny dialogue, or parodies with DELTARUNE-style text boxes
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Special Effects</h4>
                    <p className="text-gray-400 text-sm">
                      Add animations, screen shake, and visual effects to enhance your scenes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Guide */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              How to Use the Tool
            </h2>
            <div className="w-24 h-0.5 bg-green-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Master the controls and unleash your creativity with these essential commands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sprite Controls */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-green-400">🖼️</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Sprite Management</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><span className="text-green-400 font-mono">Paste Image:</span> Import PNG/GIF sprites</div>
                <div><span className="text-green-400 font-mono">P/O + Arrows:</span> Scale and position</div>
                <div><span className="text-green-400 font-mono">Backspace:</span> Flip horizontally</div>
                <div><span className="text-green-400 font-mono">R:</span> Reset sprite</div>
              </div>
            </div>

            {/* Text & Dialogue */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-blue-400">💬</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Dialogue & Text</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><span className="text-blue-400 font-mono">Enter:</span> Edit battle box text</div>
                <div><span className="text-blue-400 font-mono">Type:</span> Write custom dialogue</div>
                <div><span className="text-blue-400 font-mono">Style:</span> DELTARUNE-style formatting</div>
              </div>
            </div>

            {/* Effects & Animation */}
            <div className="bg-gray-900 border border-gray-700 p-6">
              <div className="text-3xl mb-4 text-purple-400">✨</div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">Effects & Animation</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><span className="text-purple-400 font-mono">1-9:</span> Trigger visual effects</div>
                <div><span className="text-purple-400 font-mono">F3:</span> Toggle screen shake</div>
                <div><span className="text-purple-400 font-mono">F2:</span> Pixel-perfect mode</div>
                <div><span className="text-purple-400 font-mono">F1:</span> Reset scene</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Ideas */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              Creative Possibilities
            </h2>
            <div className="w-24 h-0.5 bg-green-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore the endless possibilities of what you can create with this powerful tool
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Storytelling Ideas</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">📖</span>
                  <span>Create alternate universe storylines with custom characters</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🎭</span>
                  <span>Design dramatic boss battle introductions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">💫</span>
                  <span>Craft emotional character development scenes</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-400">🌟</span>
                  <span>Build epic finale battle sequences</span>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Creative Projects</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-green-400">😂</span>
                  <span>Make hilarious DELTARUNE memes and parodies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-400">🎨</span>
                  <span>Showcase your original character designs</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-400">🎬</span>
                  <span>Create screenshots for fan fiction</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-400">🎪</span>
                  <span>Design crossover battles with other game characters</span>
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
