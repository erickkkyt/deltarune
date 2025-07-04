export const siteConfig = {
  // 多语言设置
  i18n: {
    enabled: 1,                    // 0: 关闭多语言, 1: 启用多语言
    defaultLocale: "en",           // 默认语言
    locales: ["en", "zh", "ja", "ko", "fr"]  // 支持的语言列表 (英文、中文、日文、韩文、法文)
  },
  
  // 网站基本信息
  name: "Deltarune Online",
  description: "Play Deltarune online for free. Join Kris, Susie, and Ralsei in Toby Fox's acclaimed RPG adventure.",
  canonical: "https://deltarune.cc",
  
  // SEO 关键词
  keywords: [
    "deltarune",
    "deltarune online", 
    "toby fox",
    "undertale",
    "rpg game",
    "browser game",
    "free game"
  ],
  
  // 作者信息
  author: {
    name: "Deltarune Online Hub",
    url: "https://deltarune.cc"
  }
};

export type SiteConfig = typeof siteConfig; 