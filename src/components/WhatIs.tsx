export default function WhatIs() {
  return (
    <section id="about" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-mono">
              WHAT IS DELTARUNE?
            </h2>
            <div className="w-24 h-0.5 bg-blue-400 mb-6"></div>
            <div className="space-y-6 text-gray-300">
              <p className="text-sm leading-relaxed">
                Deltarune is an acclaimed episodic RPG created by Toby Fox, the creator of Undertale.
                This adventure follows Kris, a human teenager who gets pulled into the mysterious Dark World 
                alongside Susie and the Dark Prince Ralsei.
              </p>

              <p className="text-sm leading-relaxed">
                The game masterfully blends traditional turn-based RPG mechanics with innovative bullet-hell sequences.
                Players control a team of three heroes in strategic battles that challenge both tactical thinking and reflexes.
              </p>

              <div className="bg-gray-900 border border-gray-700 p-4">
                <h3 className="text-lg font-bold text-white mb-3 font-mono">STORY & CHAPTERS</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Follow Kris and friends through multiple chapters as they discover Dark Fountains appearing in their hometown. 
                  Each chapter features unique environments and deeper character development in this expanding adventure.
                </p>
              </div>
            </div>
          </div>

          {/* Game Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">GAME DETAILS</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Platforms</h4>
                  <p className="text-gray-400 text-sm">
                    Available on Windows, macOS, PlayStation, Nintendo Switch, and as free deltarune online versions playable in browsers.
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Release Info</h4>
                  <p className="text-gray-400 text-sm">
                    Chapters 1 & 2 are available for free, with deltarune online access and additional chapters planned for future release.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">GAMEPLAY ELEMENTS</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm text-gray-400">Bullet-Hell Combat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-gray-400">Team Strategy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🧩</div>
                  <div className="text-sm text-gray-400">Dark World Puzzles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💫</div>
                  <div className="text-sm text-gray-400">TP Magic System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
