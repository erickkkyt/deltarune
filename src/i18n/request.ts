import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { siteConfig } from '@/config/site';

export default getRequestConfig(async ({ requestLocale }) => {
  const isI18nEnabled = siteConfig.i18n.enabled === 1;
  
  // 获取请求的语言，如果多语言未启用则使用默认语言
  let locale: string = isI18nEnabled 
    ? (await requestLocale) || siteConfig.i18n.defaultLocale 
    : siteConfig.i18n.defaultLocale;

  // 确保传入的 locale 是有效的
  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      // 按页面/功能模块分割语言包，避免单一文件过大
      common: (await import(`../../messages/${locale}/common.json`)).default,
      home: (await import(`../../messages/${locale}/home.json`)).default,
      blog: (await import(`../../messages/${locale}/blog.json`)).default,
      navigation: (await import(`../../messages/${locale}/navigation.json`)).default,
      footer: (await import(`../../messages/${locale}/footer.json`)).default,
      privacy: (await import(`../../messages/${locale}/privacy.json`)).default,
      terms: (await import(`../../messages/${locale}/terms.json`)).default,
      features: (await import(`../../messages/${locale}/features.json`)).default,
      faq: (await import(`../../messages/${locale}/faq.json`)).default,
      whatis: (await import(`../../messages/${locale}/whatis.json`)).default,
      whyplay: (await import(`../../messages/${locale}/whyplay.json`)).default,
      howtoplay: (await import(`../../messages/${locale}/howtoplay.json`)).default,
      userreviews: (await import(`../../messages/${locale}/userreviews.json`)).default,
      'deltarune-chapter-3': (await import(`../../messages/${locale}/deltarune-chapter-3.json`)).default,
      'deltarune-chapter-4': (await import(`../../messages/${locale}/deltarune-chapter-4.json`)).default,
      'deltarune-characters': (await import(`../../messages/${locale}/deltarune-characters.json`)).default
    }
  };
}); 