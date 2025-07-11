import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: 'Exploring DELTARUNE Online: Chapters 3 & 4 Deep Dive - Deltarune Online Hub',
    description: 'Experience DELTARUNE Chapters 3 and 4 online with our comprehensive guide. Play DELTARUNE free in your browser and discover the Dark World adventures.',
    alternates: {
      canonical: 'https://deltarune.cc/blog/deltarune-chapters-3-4',
    },
    openGraph: {
      title: 'Exploring DELTARUNE Online: Chapters 3 & 4 Deep Dive',
      description: 'Experience DELTARUNE Chapters 3 and 4 online with our comprehensive guide. Play DELTARUNE free in your browser and discover the Dark World adventures.',
      url: 'https://deltarune.cc/blog/deltarune-chapters-3-4',
    },
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold font-mono text-white hover:text-blue-400 transition-colors">
                DELTARUNE
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white font-mono text-sm transition-colors">
                {tCommon('nav.home')}
              </Link>
              <Link href="/blog" className="text-blue-400 font-mono text-sm">
                {tCommon('nav.blog')}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: tCommon('nav.home'), href: '/' },
            { label: tCommon('nav.blog'), href: '/blog' },
            { label: 'Chapters 3 & 4 Deep Dive' }
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-blue-400 text-black px-3 py-1 text-xs font-mono font-bold">
              GAME GUIDE
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-mono mb-6 leading-tight">
            Exploring DELTARUNE Online: Chapters 3 & 4 Deep Dive
          </h1>
          <div className="flex items-center space-x-6 text-gray-400 text-sm font-mono">
            <span>{new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="text-gray-300 font-mono leading-relaxed space-y-6">
            <p className="text-lg">
              DELTARUNE continues to captivate players worldwide with its unique blend of traditional RPG mechanics and innovative bullet-hell combat. 
              Chapters 3 and 4 introduce exciting new elements that push the boundaries of what we expect from Toby Fox's masterpiece.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's New in Chapter 3</h2>
            <p>
              Chapter 3 takes players into a TV-themed Dark World, where the medium of television becomes a playground for creative game mechanics. 
              The chapter explores themes of media consumption and digital entertainment in ways that feel both nostalgic and cutting-edge.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Chapter 4's Innovations</h2>
            <p>
              Building on the foundation laid by previous chapters, Chapter 4 introduces new party dynamics and combat mechanics that challenge 
              players to think strategically about their approach to both battles and puzzle-solving.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Playing DELTARUNE Online</h2>
            <p>
              The beauty of experiencing DELTARUNE online lies in its accessibility. No downloads, no installations – just pure gaming enjoyment 
              directly in your browser. This makes it easier than ever to dive into Kris, Susie, and Ralsei's adventure.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features to Explore</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Enhanced character development and dialogue systems</li>
              <li>New Dark World environments with unique mechanics</li>
              <li>Improved battle system with fresh strategic elements</li>
              <li>Deeper exploration of the game's central mysteries</li>
              <li>Seamless browser-based gameplay experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Future of DELTARUNE</h2>
            <p>
              As we look ahead to future chapters, it's clear that Toby Fox has created something truly special. The online accessibility of 
              DELTARUNE ensures that this incredible journey remains available to players regardless of their platform or device limitations.
            </p>

            <p className="text-lg font-semibold">
              Ready to experience DELTARUNE for yourself? Head back to our homepage and start your adventure in the Dark World today!
            </p>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="btn-deltarune inline-block py-2 px-4 text-sm font-mono font-bold"
            >
              ← BACK TO BLOG
            </Link>
            <Link
              href="/"
              className="btn-deltarune inline-block py-2 px-4 text-sm font-mono font-bold"
            >
              PLAY DELTARUNE →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
