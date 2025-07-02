'use client';

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  // 检查多语言是否启用
  const isI18nEnabled = siteConfig.i18n.enabled === 1;
  
  // 如果多语言未启用，则不渲染任何内容
  if (!isI18nEnabled) return null;
  
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect 
      defaultValue={locale} 
      label={t('LocaleSwitcher.label')}
    >
      {routing.locales.map((cur: string) => (
        <option key={cur} value={cur}>
          {t('LocaleSwitcher.locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
} 