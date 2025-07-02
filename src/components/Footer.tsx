import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-xl font-bold text-white font-mono">
                DELTARUNE ARCADE HUB
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              Experience the mysterious Dark World of Deltarune online. A dedicated hub for the
              acclaimed episodic RPG adventure created by Toby Fox featuring Kris, Susie, and Ralsei.
            </p>

          </div>

          {/* Deltarune Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">DELTARUNE NAVIGATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#game" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Play Deltarune
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Deltarune Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Deltarune
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Deltarune FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.steampowered.com/app/1671210/DELTARUNE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Steam Page
                </a>
              </li>
              <li>
                <a
                  href="https://deltarune.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Official Website
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Deltarune Online Hub. Deltarune game created by Toby Fox.
              This is a fan site dedicated to the Deltarune community for educational and entertainment purposes.
            </div>

          </div>
        </div>

        {/* Deltarune Attribution */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Deltarune is a trademark of Toby Fox. All Deltarune content, characters, and assets belong to their respective owners.
            Kris, Susie, Ralsei, and the Dark World are part of the Deltarune universe created by Toby Fox.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://startupfa.me/s/deltarune-online?utm_source=deltarune.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Featured on Startup Fame
          </a>
        </div>
      </div>
    </footer>
  );
}
