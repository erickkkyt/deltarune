export default function Features() {
  const features = [
    {
      icon: "⚔️",
      title: "Deltarune Combat System",
      description: "Experience Deltarune's innovative turn-based combat with bullet-hell mechanics. Control Kris, Susie, and Ralsei in strategic team battles."
    },
    {
      icon: "📖",
      title: "Deltarune Story by Toby Fox",
      description: "Immerse yourself in Deltarune's captivating narrative. Follow Kris and friends through the Dark World in this episodic RPG adventure."
    },
    {
      icon: "🎵",
      title: "Deltarune Soundtrack",
      description: "Enjoy Deltarune's acclaimed musical score by Toby Fox. The soundtrack perfectly complements your Dark World adventure."
    },
    {
      icon: "🌟",
      title: "Deltarune Chapters",
      description: "Explore multiple Deltarune chapters, each featuring unique Dark World environments and character development for Kris, Susie, and Ralsei."
    },
    {
      icon: "🎮",
      title: "Play Deltarune Online",
      description: "Play Deltarune directly in your browser. Experience the full Deltarune adventure on desktop, tablet, and mobile devices."
    },
    {
      icon: "💾",
      title: "Deltarune Save System",
      description: "Your Deltarune progress is automatically saved. Continue your Dark World adventure with Kris and the team anytime."
    }
  ];

  return (
    <section id="features" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            DELTARUNE GAME FEATURES
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Discover what makes Deltarune by Toby Fox an unforgettable RPG experience in the Dark World
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-gray-700 p-6 hover:border-blue-400 transition-colors duration-300"
            >
              <div className="text-3xl mb-4 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Players Love Deltarune
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Innovative gameplay that combines classic RPG elements with modern mechanics
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Meaningful choices that impact both story progression and character relationships
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Beautiful pixel art style that brings the Dark World to life
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Active community with fan theories and ongoing discussions
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  "A masterpiece of indie gaming"
                </div>
                <div className="text-gray-400">
                  - Gaming Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
