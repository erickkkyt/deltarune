import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 匹配所有路径，除了：
  // - 以 /api、/_next、/_vercel 开头的路径
  // - 包含点号的路径（如 favicon.ico）
  matcher: [
    // 匹配所有路径
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 