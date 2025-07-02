# 自动化清理脚本 - 解决 Node.js 进程冲突和权限问题
# 使用方法: .\scripts\cleanup.ps1

Write-Host "🔍 检查当前运行的 Node.js 进程..." -ForegroundColor Yellow

# 检查 Node.js 进程
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    Write-Host "发现 $($nodeProcesses.Count) 个 Node.js 进程正在运行" -ForegroundColor Red
    Write-Host "💀 正在停止所有 Node.js 进程..." -ForegroundColor Yellow
    
    # 停止所有 Node.js 进程
    Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
    
    Write-Host "✅ 所有 Node.js 进程已停止" -ForegroundColor Green
} else {
    Write-Host "✅ 没有发现运行中的 Node.js 进程" -ForegroundColor Green
}

# 清理 .next 缓存
Write-Host "🧹 清理 .next 缓存目录..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
    Write-Host "✅ .next 缓存已清理" -ForegroundColor Green
} else {
    Write-Host "ℹ️  .next 目录不存在，无需清理" -ForegroundColor Cyan
}

# 清理 node_modules/.cache (如果存在)
Write-Host "🧹 清理 node_modules 缓存..." -ForegroundColor Yellow
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache" -ErrorAction SilentlyContinue
    Write-Host "✅ node_modules 缓存已清理" -ForegroundColor Green
}

Write-Host "🎉 清理完成！现在可以安全地运行 'npm run dev'" -ForegroundColor Green
Write-Host ""
Write-Host "如果问题仍然存在，请检查:" -ForegroundColor Cyan
Write-Host "  1. 中间件文件是否正确配置 (src/middleware.ts)" -ForegroundColor Cyan
Write-Host "  2. 端口 3000 是否被其他应用占用" -ForegroundColor Cyan
Write-Host "  3. Windows 防火墙或安全软件是否阻止了文件访问" -ForegroundColor Cyan 