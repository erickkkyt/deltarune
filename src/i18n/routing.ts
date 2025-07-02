import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { siteConfig } from '@/config/site';

// 根据配置决定是否启用多语言
const isI18nEnabled = siteConfig.i18n.enabled === 1;
const locales = isI18nEnabled ? siteConfig.i18n.locales : [siteConfig.i18n.defaultLocale];
const defaultLocale = siteConfig.i18n.defaultLocale;

export const routing = defineRouting({
  // 支持的语言列表
  locales: locales as any,
  
  // 默认语言
  defaultLocale: defaultLocale,
  
  // 禁用自动语言检测，提供可控的用户体验
  localeDetection: false,
  
  // 根据多语言开关设置前缀策略
  localePrefix: isI18nEnabled ? 'as-needed' : 'never'
});

// 导出统一的导航hooks，确保多语言路由一致性
export const { Link, getPathname, redirect, usePathname, useRouter } = 
  createNavigation(routing); 