const fs = require('fs');
const path = require('path');

// 配置
const baseUrl = 'https://deltarune.cc';
const locales = ['en', 'zh', 'ja', 'ko', 'fr'];
const defaultLocale = 'en';

// 页面配置
const pages = [
  // 主页面
  {
    path: '',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: '2025-07-09'
  },
  // 指南页面
  {
    path: 'deltarune-chapter-3',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2025-07-09'
  },
  {
    path: 'deltarune-chapter-4',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2025-07-09'
  },
  {
    path: 'deltarune-characters',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2025-07-09'
  },
  // 博客页面
  {
    path: 'blog',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: '2025-01-04'
  },
  {
    path: 'blog/deltarune-chapters-3-4',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2025-01-04'
  },
  // 游戏页面
  {
    path: 'geoguessr',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  {
    path: 'geometry-dash-lite',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  {
    path: 'deltarune-dreamland-saga',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  {
    path: 'deltarune-mockup-battle-toy',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  {
    path: 'italian-brainrot-clicker',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  {
    path: 'smash-karts',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2025-01-22'
  },
  // 其他页面
  {
    path: 'privacy',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: '2025-01-04'
  },
  {
    path: 'terms',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: '2025-01-04'
  }
];

// 生成URL函数
function generateUrl(path, locale) {
  if (locale === defaultLocale) {
    // 默认语言不需要前缀
    return path ? `${baseUrl}/${path}` : baseUrl;
  } else {
    // 其他语言需要前缀
    return path ? `${baseUrl}/${locale}/${path}` : `${baseUrl}/${locale}`;
  }
}

// 生成hreflang链接
function generateHreflangs(path) {
  return locales.map(locale => {
    const url = generateUrl(path, locale);
    return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />`;
  }).join('\n') + '\n    <xhtml:link rel="alternate" hreflang="x-default" href="' + generateUrl(path, defaultLocale) + '" />';
}

// 生成单个URL条目
function generateUrlEntry(page, locale) {
  const url = generateUrl(page.path, locale);
  const priority = locale === defaultLocale ? page.priority : (parseFloat(page.priority) - 0.1).toFixed(1);
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangs(page.path)}
  </url>`;
}

// 生成完整的sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  // 为每个页面生成所有语言版本
  pages.forEach(page => {
    locales.forEach(locale => {
      sitemap += generateUrlEntry(page, locale) + '\n\n';
    });
  });

  sitemap += '</urlset>';
  return sitemap;
}

// 写入文件
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully at:', outputPath);
  console.log('📊 Generated URLs for', locales.length, 'locales and', pages.length, 'pages');
}

// 运行生成
writeSitemap(); 