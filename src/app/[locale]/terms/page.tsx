import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('title') + ' - Deltarune Online Hub',
    description: t('introduction'),
    openGraph: {
      title: t('title') + ' - Deltarune Online Hub',
      description: t('introduction'),
    },
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
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
                📜 GENERAL INFORMATION
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>The following Terms of Service (the "Agreement") are important and require careful reading. Your acceptance of these "Terms of Service" signifies your agreement to be bound by them. This Agreement is between you and DELTARUNE Online Website (hereinafter: "Site", "us", "we", or "our") and pertains to your use of our website, including any materials and services available therein, and any successor site(s) thereto (the "Site").</p>
                <p><strong>BY USING THE SITE, YOU AGREE THESE TERMS OF SERVICE AND CONFIRM THAT YOU ARE OLDER THAN 16 YEARS.</strong> Any reference to "you" or "your" in this Agreement applies to the individual who uses the Site.</p>
                <p>It is important to note that this Agreement includes a mandatory arbitration provision. This provision requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or any other court proceedings, or class actions of any kind.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🔄 CHANGES
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>This Agreement may be amended by us periodically, and we will notify you of such changes through any reasonable means, which may include posting a revised Agreement on the Site. Any changes made will not apply to any disputes between you and us that arose prior to the date on which we posted the revised Agreement incorporating such changes.</p>
                <p>By using the Site after any changes to this Agreement, you agree to be bound by the revised terms, and such continued use will be deemed an irrefutable presumption of your acceptance of the changes.</p>
                <p>We reserve the right to modify or discontinue all or part of the Site (including access through any third-party links), and we may charge, modify, or waive any fees required to use the Site, which will remain free for the foreseeable future.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📋 INFORMATION SUBMITTED THROUGH THE SITE
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>The submission of information through the Site is subject to the DELTARUNE Online Website Privacy Policy. By using the Site, you acknowledge and agree to the Privacy Policy.</p>
                <p>You affirm that any information you provide in connection with the Site is accurate and complete, and you commit that you will maintain and update such information as needed. If there are any discrepancies between the provisions of this Agreement and the Privacy Policy regarding personal data, the provisions of the Privacy Policy will take precedence.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🎮 RULES OF CONDUCT
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>To use the site, you agree to comply with the following rules:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>You must not post, transmit, or make available any material through or in connection with the Site that may threaten, harass, degrade, intimidate, defame, libel, fraudulently misrepresent, or violate the rights and dignity of others.</li>
                  <li>You must not use the site for any commercial purpose that is not authorized by the DELTARUNE Online Website or for any fraudulent, tortious, or unlawful purpose.</li>
                  <li>You may not collect information about site users except as permitted by the Privacy Policy.</li>
                  <li>You must not interfere with or disrupt the site's operation or the servers or networks used to make the site available.</li>
                  <li>You must not restrict or inhibit any other person from using the site.</li>
                  <li>You may not reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare, distribute, or otherwise exploit any portion of the site without our express prior written consent.</li>
                  <li>You may not reverse engineer, decompile, or disassemble any portion of the site, except where such restriction is expressly prohibited by applicable law.</li>
                  <li>You must not remove any copyright, trademark, or other proprietary rights notice from the Site.</li>
                </ul>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                🔗 THIRD-PARTY MATERIALS: LINKS
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>Certain Site functionality may provide access to Third Party Materials, such as information, products, services, advertisements, and promotions offered by third parties through techniques such as iFrames, or allow for the transmission of such materials via links.</p>
                <p>We do not control or endorse Third Party Materials, including their accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality, usefulness, or safety, nor are we responsible for any intellectual property rights associated with such materials.</p>
                <p><strong>ATTENTION: YOUR USE OF THIRD-PARTY MATERIALS IS AT YOUR OWN RISK AND SUBJECT TO ANY ADDITIONAL TERMS, CONDITIONS, AND POLICIES APPLICABLE TO SUCH MATERIALS.</strong></p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                ⚠️ DISCLAIMER OF WARRANTIES
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW: (A) THE SITE AND ANY PRODUCTS AND THIRD PARTY MATERIALS ARE MADE AVAILABLE TO YOU ON AN "AS IS," "WHERE IS" AND "WHERE AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY; AND (B) DELTARUNE ONLINE WEBSITE DISCLAIMS ALL WARRANTIES WITH RESPECT TO THE SITE AND ANY PRODUCTS AND THIRD PARTY MATERIALS.</p>
                <p>Although we strive to keep the Site timely, secure, and accurate, it cannot guarantee that the Site will remain updated, complete, correct, or secure or that access to the Site will be uninterrupted. The Site may contain errors, inaccuracies, and materials that violate this Agreement.</p>
              </div>
            </div>

            <div className="bg-black border border-gray-700 p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 font-mono mb-6">
                📧 INFORMATION OR COMPLAINTS
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p>If you have any inquiries or grievances regarding the Site, you may complete our contact form or send an email to us directly.</p>
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