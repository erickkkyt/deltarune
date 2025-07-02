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
                📋 {t('sections.informationCollection')}
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>{t('introduction')}</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🔒 {t('sections.informationUse')}
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>We use the information we collect to provide and improve our services.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🛡️ {t('sections.dataSecurity')}
              </h2>
              <div className="space-y-4 text-gray-300 font-mono">
                <p>We take reasonable measures to protect your personal information.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📧 {t('sections.contactUs')}
              </h2>
              <div className="text-gray-300 font-mono">
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
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