const fs = require('fs');
const path = require('path');

// 配置
const baseUrl = 'https://deltarune.cc';
const locales = ['en', 'zh', 'ja', 'ko', 'fr'];
const defaultLocale = 'en';

// 获取当前日期（ISO格式）
const getCurrentDate = () => new Date().toISOString().split('T')[0];
const currentDate = getCurrentDate();

// 页面配置 - 按重要性和更新频率优化
const pages = [
  // 主页面 - 最高优先级
  {
    path: '',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: currentDate,
    description: 'Homepage'
  },

  // 核心DELTARUNE内容页面 - 高优先级
  {
    path: 'deltarune-chapter-3',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    description: 'DELTARUNE Chapter 3 Guide'
  },
  {
    path: 'deltarune-chapter-4',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    description: 'DELTARUNE Chapter 4 Guide'
  },
  {
    path: 'deltarune-characters',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    description: 'DELTARUNE Characters Guide'
  },

  // DELTARUNE相关游戏 - 高优先级
  {
    path: 'deltarune-dreamland-saga',
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'DELTARUNE Dreamland Saga Game'
  },
  {
    path: 'deltarune-mockup-battle-toy',
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'DELTARUNE Mockup Battle Toy Game'
  },

  // 博客页面 - 中高优先级
  {
    path: 'blog',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    description: 'Blog Homepage'
  },
  {
    path: 'blog/deltarune-chapters-3-4',
    priority: '0.75',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'DELTARUNE Chapters 3-4 Blog Article'
  },

  // 其他热门游戏 - 中等优先级
  {
    path: 'geometry-dash-lite',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'Geometry Dash Lite Game'
  },
  {
    path: 'geoguessr',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'GeoGuessr Game'
  },
  {
    path: 'smash-karts',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'Smash Karts Game'
  },
  {
    path: 'italian-brainrot-clicker',
    priority: '0.65',
    changefreq: 'monthly',
    lastmod: currentDate,
    description: 'Italian Brainrot Clicker Game'
  },

  // 法律页面 - 低优先级
  {
    path: 'privacy',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate,
    description: 'Privacy Policy'
  },
  {
    path: 'terms',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate,
    description: 'Terms of Service'
  }
];

// 生成URL函数 - 优化URL结构
function generateUrl(path, locale) {
  // 确保URL格式正确，避免双斜杠
  const cleanPath = path ? path.replace(/^\/+|\/+$/g, '') : '';

  if (locale === defaultLocale) {
    // 默认语言（英文）不需要语言前缀
    return cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl;
  } else {
    // 其他语言需要语言前缀
    return cleanPath ? `${baseUrl}/${locale}/${cleanPath}` : `${baseUrl}/${locale}`;
  }
}

// 生成hreflang链接 - 改进多语言SEO
function generateHreflangs(path) {
  const hreflangs = locales.map(locale => {
    const url = generateUrl(path, locale);
    return `    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />`;
  });

  // 添加x-default指向默认语言版本
  const defaultUrl = generateUrl(path, defaultLocale);
  hreflangs.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`);

  return hreflangs.join('\n');
}

// 生成单个URL条目 - 优化优先级计算
function generateUrlEntry(page, locale) {
  const url = generateUrl(page.path, locale);

  // 优化优先级：默认语言保持原优先级，其他语言适当降低
  let priority = parseFloat(page.priority);
  if (locale !== defaultLocale) {
    // 非默认语言优先级降低0.05-0.1
    priority = Math.max(0.1, priority - 0.05).toFixed(2);
  } else {
    priority = priority.toFixed(1);
  }

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangs(page.path)}
  </url>`;
}

// 生成完整的sitemap - 优化格式和结构
function generateSitemap() {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  let urlEntries = [];
  let totalUrls = 0;

  // 按优先级排序页面，确保重要页面在前面
  const sortedPages = [...pages].sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

  // 为每个页面生成所有语言版本
  sortedPages.forEach(page => {
    locales.forEach(locale => {
      urlEntries.push(generateUrlEntry(page, locale));
      totalUrls++;
    });
  });

  const footer = '</urlset>';

  return header + urlEntries.join('\n\n') + '\n\n' + footer;
}

// 验证sitemap格式
function validateSitemap(content) {
  const urlCount = (content.match(/<url>/g) || []).length;
  const locCount = (content.match(/<loc>/g) || []).length;

  if (urlCount !== locCount) {
    throw new Error(`Sitemap validation failed: URL count (${urlCount}) doesn't match LOC count (${locCount})`);
  }

  console.log(`✅ Sitemap validation passed: ${urlCount} URLs generated`);
  return true;
}

// 写入文件 - 增强错误处理和日志
function writeSitemap() {
  try {
    console.log('🚀 Starting sitemap generation...');
    console.log(`📋 Configuration:
  - Base URL: ${baseUrl}
  - Languages: ${locales.join(', ')}
  - Default Language: ${defaultLocale}
  - Pages: ${pages.length}
  - Total URLs: ${pages.length * locales.length}`);

    const sitemapContent = generateSitemap();

    // 验证生成的sitemap
    validateSitemap(sitemapContent);

    const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

    // 创建备份（如果存在旧文件）
    if (fs.existsSync(outputPath)) {
      const backupPath = path.join(__dirname, '..', 'public', 'sitemap_backup.xml');
      fs.copyFileSync(outputPath, backupPath);
      console.log('📦 Created backup of existing sitemap');
    }

    // 写入新的sitemap
    fs.writeFileSync(outputPath, sitemapContent, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📊 Statistics:
  - Total URLs: ${pages.length * locales.length}
  - Languages: ${locales.length}
  - Pages: ${pages.length}
  - File size: ${(sitemapContent.length / 1024).toFixed(2)} KB`);

    // 显示页面优先级分布
    const priorityStats = {};
    pages.forEach(page => {
      const priority = page.priority;
      priorityStats[priority] = (priorityStats[priority] || 0) + 1;
    });

    console.log('📈 Priority distribution:');
    Object.entries(priorityStats)
      .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
      .forEach(([priority, count]) => {
        console.log(`  - Priority ${priority}: ${count} pages`);
      });

  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// 运行生成
if (require.main === module) {
  writeSitemap();
}