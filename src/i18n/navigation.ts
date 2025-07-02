// 从 routing.ts 重新导出导航 hooks
// 这提供了一个清晰的 API 分离，符合 next-intl 最佳实践

export { 
  Link, 
  getPathname, 
  redirect, 
  usePathname, 
  useRouter 
} from './routing'; 