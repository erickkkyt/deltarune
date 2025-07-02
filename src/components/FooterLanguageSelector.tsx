'use client';

import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

export default function FooterLanguageSelector() {
  // 检查多语言是否启用
  const isI18nEnabled = siteConfig.i18n.enabled === 1;
  
  // 如果多语言未启用，则不渲染任何内容
  if (!isI18nEnabled) return null;
  
  const locale = useLocale();
  const router = useRouter();

  // 语言标签映射
  const languageLabels = {
    en: 'English',
    zh: '中文'
  };

  const handleLanguageChange = (newLocale: string) => {
    router.replace('/', { locale: newLocale });
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {routing.locales.map((lang: string) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`text-sm font-mono transition-colors ${
            locale === lang
              ? 'text-white font-semibold border-b border-blue-400'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {languageLabels[lang as keyof typeof languageLabels] || lang}
        </button>
      ))}
    </div>
  );
} 