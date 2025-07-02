import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Deltarune Online Hub',
  description: 'Privacy Policy for Deltarune Online Hub - Learn how we protect your data and privacy.',
  openGraph: {
    title: 'Privacy Policy - Deltarune Online Hub',
    description: 'Privacy Policy for Deltarune Online Hub - Learn how we protect your data and privacy.',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="text-xl font-bold text-white font-mono">
                  DELTARUNE
                </div>
              </Link>
            </div>
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-blue-400 text-sm font-mono transition-colors"
              >
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white font-mono mb-4">
              PRIVACY POLICY
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-400 font-mono">
              Last Updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          {/* Content Area */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📋 Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                  <li>Visit our website and use our services</li>
                  <li>Contact us for support or feedback</li>
                  <li>Subscribe to our newsletter or updates</li>
                </ul>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🔒 How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you updates and technical notices</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🛡️ Information Security
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>We take reasonable measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p className="text-gray-400">However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📧 Contact Information
              </h2>
              <div className="text-gray-300 font-mono">
                <p>If you have any questions about this Privacy Policy, please contact us through our website.</p>
              </div>
            </div>

                    {/* Quick Navigation */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white font-mono mb-4">
            Navigation
          </h3>
          <div className="flex justify-center">
            <Link
              href="/"
              className="btn-deltarune text-center py-3 px-6 rounded hover:bg-blue-400 hover:text-black transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm font-mono">
              © {new Date().getFullYear()} Deltarune Online Hub. 
              Deltarune game created by Toby Fox.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 