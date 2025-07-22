'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';

interface GameItem {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  category: string;
  rating: string;
}

interface OtherTrendingGamesSectionProps {
  currentGameId?: string; // 当前页面的游戏ID，用于排除自己
}

export default function OtherTrendingGamesSection({ currentGameId }: OtherTrendingGamesSectionProps) {
  // 所有游戏列表 - 使用真实游戏图片
  const allGames: GameItem[] = [
    {
      id: 'deltarune',
      title: 'DELTARUNE',
      href: '/',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/deltarune.png',
      description: 'Epic RPG Adventure',
      category: 'RPG',
      rating: '4.8'
    },
    {
      id: 'geoguessr',
      title: 'GeoGuessr',
      href: '/geoguessr',
      image: 'https://pub-dd9404e72d594f05acd661a8179747d2.r2.dev/geoguesser.png',
      description: 'Geography Guessing Game',
      category: 'Educational',
      rating: '4.8'
    },
    {
      id: 'geometry-dash-lite',
      title: 'Geometry Dash Lite',
      href: '/geometry-dash-lite',
      image: 'https://pub-dd9404e72d594f05acd661a8179747d2.r2.dev/geometry%20dash%20lite.png',
      description: 'Rhythm Platformer Game',
      category: 'Platformer',
      rating: '4.7'
    },
    {
      id: 'dreamland-saga',
      title: 'DELTARUNE Dreamland Saga',
      href: '/deltarune-dreamland-saga',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/dreamland%20saga.png',
      description: 'DELTARUNE x Kirby Crossover',
      category: 'RPG',
      rating: '4.6'
    },
    {
      id: 'battle-toy',
      title: 'DELTARUNE Mockup Battle Toy',
      href: '/deltarune-mockup-battle-toy',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/mockup%20battle%20toy.png',
      description: 'Create Battle Scenes',
      category: 'Creative',
      rating: '4.5'
    },
    {
      id: 'brainrot-clicker',
      title: 'Italian Brainrot Clicker',
      href: '/italian-brainrot-clicker',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/clicker.png',
      description: 'Viral Meme Clicker',
      category: 'Clicker',
      rating: '4.3'
    },
    {
      id: 'smash-karts',
      title: 'Smash Karts',
      href: '/smash-karts',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/smash%20karts.png',
      description: '3D Multiplayer Kart Battle',
      category: 'Action',
      rating: '4.7'
    }
  ];

  // 过滤掉当前游戏，显示其他游戏
  const otherGames = allGames.filter(game => game.id !== currentGameId);

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* OTHER TRENDING GAMES */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
              Other Trending Games
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-400 text-sm mt-4">
              Discover more exciting games in our collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherGames.slice(0, 6).map((game) => (
              <Link
                key={game.id}
                href={game.href}
                className="block bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // 如果图片加载失败，显示渐变占位符
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span class="text-white text-2xl font-bold">${game.title.charAt(0)}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {game.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-gray-300 text-sm ml-1">{game.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
