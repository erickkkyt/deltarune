export default function Features() {
  const features = [
    {
      icon: "⚔️",
      title: "Strategic Combat System",
      description: "Experience innovative turn-based combat with bullet-hell mechanics. Control Kris, Susie, and Ralsei in strategic team battles."
    },
    {
      icon: "📖",
      title: "Compelling Story",
      description: "Immerse yourself in a captivating narrative by Toby Fox. Follow the heroes through the Dark World in this episodic RPG adventure."
    },
    {
      icon: "🎵",
      title: "Amazing Soundtrack",
      description: "Enjoy an acclaimed musical score that perfectly complements your Dark World adventure experience."
    },
    {
      icon: "🌟",
      title: "Multiple Chapters",
      description: "Explore unique Dark World environments with character development across expanding story chapters."
    },
    {
      icon: "🎮",
      title: "Play Online Free",
      description: "Play deltarune online directly in your browser. Experience the full free deltarune adventure on desktop, tablet, and mobile devices."
    },
    {
      icon: "💾",
      title: "Auto-Save Progress",
      description: "Your progress is automatically saved. Continue your Dark World adventure anytime without losing progress."
    }
  ];

  return (
    <section id="features" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            GAME FEATURES
          </h2>
          <div className="w-24 h-0.5 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Discover what makes this RPG by Toby Fox an unforgettable deltarune online experience
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
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Players Love This RPG
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Innovative gameplay combining classic RPG with modern mechanics
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Meaningful choices that impact story and character relationships
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Beautiful pixel art bringing the Dark World to life
                </div>
                <div className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Active community with fan theories and discussions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
