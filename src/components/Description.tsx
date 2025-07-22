'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface GameItem {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  category: string;
  rating: string;
}

export default function Description() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const gameDetails = [
    {
      question: "What is DELTARUNE?",
      answer: "DELTARUNE is an innovative RPG that challenges players to navigate through complex storylines, strategic battles, and emotional character development. Created by Toby Fox, this game features unique combat mechanics that blend turn-based strategy with real-time bullet-hell elements. The game is completely free to play and available across multiple platforms including Windows, Mac, Linux, Nintendo Switch, and PlayStation. The online version provides the complete experience directly in your web browser.",
      color: "text-blue-400"
    },
    {
      question: "How do you play DELTARUNE?",
      answer: "Use WASD or arrow keys to move, Z/Enter to interact, and X/Escape for menus. Combat combines strategic party management with skill-based dodging during enemy attacks. Build TP (Tension Points) to unleash powerful magic abilities. Master the unique mechanics where you can resolve conflicts peacefully through understanding enemies, or engage in strategic battles with your party of memorable characters including Kris, Susie, and Ralsei.",
      color: "text-green-400"
    },
    {
      question: "What makes DELTARUNE special?",
      answer: "DELTARUNE features a revolutionary combat system mixing turn-based and bullet-hell mechanics, compelling narrative with meaningful choices that affect the story, and an outstanding soundtrack composed by Toby Fox. The beautiful pixel art style with smooth animations creates an immersive visual experience. The game is completely free-to-play with the complete experience available online, offering cross-platform availability and cloud save functionality for seamless gameplay across devices.",
      color: "text-purple-400"
    },
    {
      question: "Why should you play DELTARUNE?",
      answer: "Experience mesmerizing storytelling that reacts dynamically to your choices. The memorable characters and deep lore create an addictive experience that's hard to stop once you start playing. Join a dedicated community of fans exploring the mysteries of the Dark World. With episodic releases, there's always new content to discover and theories to discuss.",
      color: "text-cyan-400"
    },
    {
      question: "What's the relationship to Undertale?",
      answer: "Created by Toby Fox, this game is set in a parallel universe where familiar characters play new roles. While sharing some characters like Toriel and Sans with Undertale, it presents a completely new story in the Dark World.",
      color: "text-yellow-400"
    },
    {
      question: "How does the combat system work?",
      answer: "Turn-based combat with bullet-hell mechanics and team battles. Players control Kris, Susie, and Ralsei, using the TP system to cast special abilities and magic.",
      color: "text-red-400"
    },
    {
      question: "How many chapters are available?",
      answer: "Chapters 1 and 2 are currently available for free. More chapters are planned as the story continues to expand.",
      color: "text-pink-400"
    },
    {
      question: "What platforms can I play on?",
      answer: "Available on Windows, macOS, PlayStation, Nintendo Switch, and free online browser version for easy access anywhere. The online version provides the complete gaming experience.",
      color: "text-indigo-400"
    },
    {
      question: "Who are the main characters?",
      answer: "Main characters include Kris (human protagonist), Susie (rebellious monster), and Ralsei (kind Dark Prince). Together they explore Dark World adventures.",
      color: "text-orange-400"
    },
    {
      question: "Is it really free to play?",
      answer: "Yes! DELTARUNE is completely free to play with no hidden costs. Experience the full adventure without any payment required.",
      color: "text-emerald-400"
    },
    {
      question: "What's the Dark World in DELTARUNE?",
      answer: "The Dark World is a mysterious parallel dimension where most of the adventure takes place. It's a realm filled with unique creatures called Darkners, magical landscapes, and ancient secrets. Each Dark World has its own theme and challenges, from the Card Kingdom in Chapter 1 to the Cyber World in Chapter 2. These worlds are created when Dark Fountains appear, and it's up to the heroes to seal them to maintain balance.",
      color: "text-violet-400"
    },
    {
      question: "How does the story progression work?",
      answer: "DELTARUNE features a branching narrative where your choices matter. The story follows Kris, a human living in a monster town, who gets pulled into Dark World adventures with classmates Susie and Ralsei. Each chapter introduces new areas, characters, and mysteries while building upon the overarching plot. The episodic structure allows for deep character development and world-building across multiple releases.",
      color: "text-blue-400"
    },
    {
      question: "What are the key gameplay mechanics?",
      answer: "Beyond combat, DELTARUNE features puzzle-solving, exploration, and social interaction mechanics. Players can choose to fight enemies or find peaceful solutions through ACT commands. The TP (Tension Points) system allows for powerful magic attacks and special abilities. Environmental puzzles require teamwork between characters, and dialogue choices can affect relationships and story outcomes.",
      color: "text-teal-400"
    },
    {
      question: "Who is Toby Fox and why is this game special?",
      answer: "Toby Fox is the creator of both DELTARUNE and the critically acclaimed Undertale. Known for his innovative approach to RPG mechanics and storytelling, Fox combines traditional JRPG elements with modern indie game design. His music composition skills shine through DELTARUNE's memorable soundtrack, featuring tracks that perfectly complement the emotional beats of the story.",
      color: "text-amber-400"
    },
    {
      question: "What makes the music so memorable?",
      answer: "DELTARUNE's soundtrack features over 100 original compositions by Toby Fox, ranging from upbeat battle themes to emotional character motifs. Each area has its own musical identity, with tracks like 'Rude Buster' and 'The World Revolving' becoming fan favorites. The music dynamically responds to gameplay situations, creating an immersive audio experience that enhances every moment.",
      color: "text-rose-400"
    },
    {
      question: "How long does it take to complete?",
      answer: "Each chapter of DELTARUNE offers 3-4 hours of main story content, with additional time for exploration, secret hunting, and optional content. Completionist players can spend 6-8 hours per chapter discovering all secrets, alternate routes, and hidden dialogue. With multiple chapters planned, the full experience will offer dozens of hours of content.",
      color: "text-lime-400"
    },
    {
      question: "Are there secrets and easter eggs?",
      answer: "DELTARUNE is packed with hidden content, secret areas, and easter eggs that reward curious players. From hidden bosses and alternate routes to mysterious characters and cryptic messages, there's always something new to discover. The community actively searches for secrets, with some mysteries still unsolved, adding to the game's replay value.",
      color: "text-sky-400"
    },
    {
      question: "What's the community like?",
      answer: "The DELTARUNE community is incredibly active and creative, producing fan art, theories, music remixes, and mods. Players share discoveries, discuss story theories, and create content inspired by the game. The community's dedication has helped keep the game relevant between chapter releases, with fan theories often sparking interesting discussions about the game's deeper mysteries.",
      color: "text-fuchsia-400"
    }
  ];

  const allGames: GameItem[] = [
    {
      id: 'deltarune',
      title: 'DELTARUNE',
      href: '/',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/deltarune.png',
      description: 'Epic RPG Adventure',
      category: 'RPG',
      rating: '4.9'
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
      id: 'mockup-battle-toy',
      title: 'DELTARUNE Mockup Battle Toy',
      href: '/deltarune-mockup-battle-toy',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/mockup%20battle%20toy.png',
      description: 'Battle System Demo',
      category: 'Demo',
      rating: '4.6'
    },
    {
      id: 'dreamland-saga',
      title: 'DELTARUNE Dreamland Saga',
      href: '/deltarune-dreamland-saga',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/dreamland%20saga.png',
      description: 'Fan-made Adventure',
      category: 'Fan Game',
      rating: '4.5'
    },
    {
      id: 'italian-brainrot-clicker',
      title: 'Italian Brainrot Clicker',
      href: '/italian-brainrot-clicker',
      image: 'https://pub-008230de9c1846efa1c18c636b330a63.r2.dev/clicker.png',
      description: 'Addictive Clicker Game',
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

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 主要内容框 */}
        <div className="bg-black border border-gray-700 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 font-mono">
              Game Details
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          {/* 问答形式内容 */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* 显示前3个问题 */}
            {gameDetails.slice(0, 3).map((item, index) => (
              <div key={index}>
                <h3 className={`text-xl font-bold ${item.color} mb-4 font-mono`}>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}

            {/* 展开的内容 */}
            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="space-y-8 pt-8">
                {gameDetails.slice(3).map((item, index) => (
                  <div key={index + 3}>
                    <h3 className={`text-xl font-bold ${item.color} mb-4 font-mono`}>
                      {item.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Show more / Show less 按钮 */}
            <div className="text-center mt-8">
              <button
                onClick={toggleExpanded}
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-mono"
              >
                {isExpanded ? 'Show less' : 'Show more'}
                <div className={`ml-2 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allGames.slice(1).map((game) => (
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
