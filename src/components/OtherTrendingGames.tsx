'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
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

interface OtherTrendingGamesProps {
  currentGameId?: string; // 当前页面的游戏ID，用于排除自己
}

export default function OtherTrendingGames({ currentGameId }: OtherTrendingGamesProps) {
  const tCommon = useTranslations('common');

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
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-white mb-6 font-mono text-center">
        Other Trending Games
      </h3>

      {/* 2x2网格布局 */}
      <div className="grid grid-cols-2 gap-4">
        {otherGames.slice(0, 4).map((game) => (
          <Link
            key={game.id}
            href={game.href}
            className="block bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-blue-400 transition-all duration-300 group relative"
          >
            {/* 游戏图片 */}
            <div className="w-full h-24 bg-gray-600 relative overflow-hidden">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
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

            {/* 游戏名称 */}
            <div className="p-3">
              <h4 className="text-white font-mono text-sm font-semibold group-hover:text-blue-400 transition-colors text-center truncate">
                {game.title}
              </h4>
            </div>

            {/* Play按钮覆盖层 */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-mono font-semibold transform scale-90 group-hover:scale-100 transition-transform">
                PLAY →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 底部提示 */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-center text-sm text-gray-500 font-mono">
          Discover more amazing games!
        </p>
      </div>
    </div>
  );
}
