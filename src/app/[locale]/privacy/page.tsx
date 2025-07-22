import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title') + ' - Deltarune Online Hub',
    description: t('introduction'),
    openGraph: {
      title: t('title') + ' - Deltarune Online Hub',
      description: t('introduction'),
    },
  };
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

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
                {tCommon('buttons.back')}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-900 border border-gray-800 p-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white font-mono mb-4">
              {t('title').toUpperCase()}
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-400 font-mono">
              {t('lastUpdated', { date: new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US') })}
            </p>
          </div>

          {/* Content Area */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📋 GENERAL INFORMATION
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>At DELTARUNE Online, we are dedicated to safeguarding the privacy of all individuals who use our websites and applications, which are accessible globally. This Privacy Policy applies to all services and products offered by the DELTARUNE Online Website. Please note that we cannot be held responsible for the privacy policy of other sites and sources. DELTARUNE Online Website will act as the data controller in the framework of this Privacy Policy.</p>
                <p>By using this Site, you agree to this Privacy Policy and confirm that you are of legal age to consent to its terms. If there are any significant changes to this Privacy Policy, your continued use of the Site will indicate your acceptance of the updated Privacy Policy. At DELTARUNE Online Website, we value the privacy of all our users and are committed to ensuring that any personal information you provide is treated confidentially.</p>
                <p>The DELTARUNE Online Website is intended for Website Visitors aged 16 and above. If you are under 16 years of age, you should not use this website. By accessing the DELTARUNE Online Site, you agree to comply with and be bound by the terms and conditions of this Privacy Policy.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🔍 WHICH DATA DO WE COLLECT?
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Data you provide</h3>
                  <p>We will only process personal data that you provide on a voluntary basis when you fill out the comment form on our Site or send us an email. This may include the following types of personal data:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Other information you choose to provide</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Data we collect automatically</h3>
                  <p>We may collect certain personal data through the use of cookies. This data can only be accessed and used during your visit to our Site and may include:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Your IP address (used for preventing double voting and location-based advertising)</li>
                    <li>Your browser type and version</li>
                    <li>The last Internet page you visited</li>
                    <li>(Mobile) device IDs</li>
                    <li>Cookie data</li>
                    <li>User-level data (such as whether you viewed or clicked on an advertisement)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🎯 WHY DO WE COLLECT THESE DATA?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>In order to optimize our services and content, we will use your personal data, provided either by you directly or automatically collected through cookies and web beacons. Additionally, we may process your personal data if required by law, such as age verification.</p>
                <p>We may also use your personal data for direct marketing purposes, including updates on new and existing games and newsletters. Furthermore, we may also use your personal data for statistical purposes and to enhance our services and products. These activities are based on legitimate interests of the DELTARUNE Online Website.</p>
                <p>Please note that advertisers on our website may collect information through cookies and/or web beacons for online behavioral advertising and/or multisite advertising.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🍪 COOKIES
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">What are cookies?</h3>
                  <p>Cookies are small files that are stored on your computer or device when you browse websites. They contain information related to the web browser and the specific website, and are saved in a designated folder on your hard drive.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Which cookies do we use?</h3>
                  <p>We will only use first-party cookies to enhance your user experience while browsing the Site. These cookies record specific information about your visit, such as your language preference, the pages visited, and the duration of your visit.</p>
                  <p>In some cases, we may provide games from third-party game distributors on our portal. By playing a game provided by a third party, your Personal Data may be processed by them through the use of cookies or similar technology.</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🛡️ SECURITY MEASURES
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>DELTARUNE Online Website has implemented reasonable and appropriate technical and organizational measures to ensure the secure processing of your Personal Information. If you have any inquiries about these security measures, please do not hesitate to contact us.</p>
                <p>Personal data within the DELTARUNE Online Website is only accessible to individuals who require access in connection with their job.</p>
                <p>At no point in time will we directly sell or rent out your personal data to third parties. However, we may occasionally use an external processor, in which case we will ensure that your information is handled confidentially and securely.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📧 CONTACT INFORMATION
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p>If you have any inquiries or concerns regarding this Privacy Policy, please reach out to us through our contact form or email us directly.</p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gray-800 border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white font-mono mb-4">
                Navigation
              </h3>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="btn-deltarune text-center py-3 px-6 transition-all"
                >
                  {tCommon('buttons.back')}
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