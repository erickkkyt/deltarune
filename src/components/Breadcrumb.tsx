'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const tCommon = useTranslations('common');

  return (
    <nav className="mb-6">
      <div className="flex items-center space-x-2 text-sm font-mono text-gray-400">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && <span className="text-gray-600">→</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-200">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
