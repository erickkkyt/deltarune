# Vercel 部署指南

## 自动部署（推荐）

### 1. GitHub 集成部署

1. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **连接 Vercel**：
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择您的 GitHub 仓库
   - 点击 "Deploy"

### 2. Vercel CLI 部署

1. **安装 Vercel CLI**：
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**：
   ```bash
   vercel login
   ```

3. **部署项目**：
   ```bash
   vercel --prod
   ```

## 手动部署

### 1. 构建项目
```bash
npm run build
```

### 2. 上传到 Vercel
- 将构建后的文件上传到 Vercel 控制台

## 环境变量配置

在 Vercel 控制台中设置以下环境变量（如果需要）：

- `NODE_ENV`: `production`
- `NEXT_PUBLIC_SITE_URL`: 您的域名

## 域名配置

1. 在 Vercel 控制台中点击项目
2. 进入 "Settings" → "Domains"
3. 添加自定义域名

## 性能优化建议

1. **启用 Edge Functions**：已在 `vercel.json` 中配置
2. **缓存策略**：API 路由已配置适当的缓存头
3. **图片优化**：已在 `next.config.js` 中配置

## 故障排除

### 常见问题

1. **API 路由超时**：
   - 已设置 30 秒超时限制
   - 如果仍有问题，检查网络连接

2. **CORS 错误**：
   - 已配置 CORS 头部
   - 确保 API 路由正确返回头部

3. **构建失败**：
   - 检查 TypeScript 错误
   - 确保所有依赖已安装

### 调试步骤

1. 检查 Vercel 函数日志
2. 测试 API 端点：`/api/game-proxy`
3. 验证环境变量设置

## 部署后测试

部署完成后，访问以下 URL 进行测试：

- 主页：`https://your-domain.vercel.app`
- 代理测试：`https://your-domain.vercel.app/test-proxy`
- API 端点：`https://your-domain.vercel.app/api/game-proxy`

## 监控和维护

1. **性能监控**：使用 Vercel Analytics
2. **错误追踪**：检查 Vercel 函数日志
3. **更新部署**：推送新代码到 GitHub 自动触发部署
