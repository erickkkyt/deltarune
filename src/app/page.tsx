import { redirect } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function RootPage() {
  // 根据多语言配置重定向到合适的路径
  const isI18nEnabled = siteConfig.i18n.enabled === 1;
  const defaultPath = isI18nEnabled 
    ? `/${siteConfig.i18n.defaultLocale}` 
    : '/';
  
  redirect(defaultPath);
}
