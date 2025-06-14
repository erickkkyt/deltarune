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
                Deltarune is an acclaimed episodic role-playing game created by Toby Fox, the creator of Undertale.
                This Deltarune adventure follows Kris, a human teenager living in a town where humans and monsters coexist.
                Kris gets pulled into the mysterious Dark World alongside Susie and the Dark Prince Ralsei.
              </p>

              <p className="text-sm leading-relaxed">
                Deltarune masterfully blends traditional turn-based RPG mechanics with innovative bullet-hell sequences.
                The Deltarune combat system creates a unique gameplay experience where players control Kris, Susie, and Ralsei
                in strategic team battles that challenge both tactical thinking and reflexes.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-900 border border-gray-700 p-4">
                  <h3 className="text-lg font-bold text-white mb-3 font-mono">DELTARUNE CHAPTERS 1 & 2 STORY</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    In Deltarune Chapter 1/2, Kris and Susie start their adventures, discovering that new Dark Fountains are appearing in their hometown. They delve into a cyber-themed Dark World created in the library, where they navigate digital dangers and confront a tyrannical Queen. The story explores the deepening friendship between the heroes and introduces unsettling questions about control and player choice, revealing that anyone can be manipulated to create these dark realms.
                  </p>
                </div>

                <div className="bg-gray-900 border border-gray-700 p-4">
                  <h3 className="text-lg font-bold text-white mb-3 font-mono">DELTARUNE CHAPTERS 3 & 4 STORY</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    In Deltarune Chapter 3/4, Kris and Susie are expected to fall into a new Dark World seemingly born from television and media. Teasers point to a reality controlled by new figures like Tenna and the previously mentioned Mike, forcing the heroes to navigate a world of screens, shows, and strange broadcasts. The story is poised to further unravel the mystery of the Knight, the entity creating the fountains, while questioning what is real and what is merely part of a show.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deltarune Game Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">DELTARUNE PLATFORMS & CHAPTERS</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Available Platforms</h4>
                  <p className="text-gray-400 text-sm">
                    Deltarune is available on Windows, macOS, PlayStation 4, and Nintendo Switch.
                    Future Deltarune releases are planned for PlayStation 5 and Nintendo Switch 2.
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Deltarune Chapters</h4>
                  <p className="text-gray-400 text-sm">
                    Deltarune Chapter 1 was released as a free survey program on October 31, 2018.
                    Deltarune Chapter 2 was also released for free on September 17, 2021.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">DELTARUNE GAMEPLAY ELEMENTS</h3>
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

            <div className="bg-gray-900 border border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-3 font-mono">DELTARUNE & UNDERTALE CONNECTION</h3>
              <p className="text-gray-400 text-sm">
                Deltarune is an anagram of "Undertale" created by Toby Fox. While Deltarune features familiar characters
                like Toriel, Alphys, and Undyne in new roles, it exists in an alternate universe separate from Undertale.
                The Deltarune world presents these characters with different relationships and backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
