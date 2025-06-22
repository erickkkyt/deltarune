import { NextRequest, NextResponse } from 'next/server';
import { sessionManager } from '@/lib/sessionManager';

// 使用 Node.js runtime 以确保兼容性
export const runtime = 'nodejs';

// 定义目标 URL
const TARGET_URL = 'https://deltarune.io/embed/deltarune';

export async function GET(request: NextRequest) {
  console.log('⚡ 收到游戏代理请求');

  try {
    // 1. 获取有效会话 (关键改动)
    // getValidSession 会按需刷新会话，确保我们总是有最新的 cookie
    console.log('🔑 正在获取有效会话...');
    const session = await sessionManager.getValidSession();
    console.log('✅ 成功获取有效会话');

    // 2. 构造代理请求头
    const headers = new Headers({
      'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Referer': 'https://deltarune-arcade-hub.vercel.app/', // 伪造来源
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'iframe',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'cross-site',
    });

    // 添加从会话中获取的 cookie
    if (session.cookies) {
      headers.set('Cookie', session.cookies);
    }

    // 3. 发起代理请求
    console.log(`📡 正在代理请求至: ${TARGET_URL}`);
    const response = await fetch(TARGET_URL, {
      method: 'GET',
      headers: headers,
      redirect: 'manual', // 手动处理重定向
    });

    console.log(`✅ 代理请求完成，状态码: ${response.status}`);

    // 4. 处理并返回响应
    const responseHeaders = new Headers(response.headers);
    
    // 清理可能导致问题的头部
    responseHeaders.delete('Content-Encoding');
    responseHeaders.delete('X-Frame-Options');
    responseHeaders.set('Access-Control-Allow-Origin', '*');

    // 读取响应体
    const body = await response.arrayBuffer();

    return new NextResponse(body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('❌ 游戏代理失败:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown proxy error';
    
    return new NextResponse(
      `Proxy failed: ${errorMessage}`,
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}
