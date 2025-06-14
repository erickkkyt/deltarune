import { NextRequest, NextResponse } from 'next/server';
import { sessionManager } from '@/lib/sessionManager';

// 使用 Node.js runtime 以确保兼容性
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  // 添加 CORS 头部
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // 使用会话管理器获取会话数据
    let sessionData = sessionManager.getSessionData();
    let cookies = '';

    // 检查会话是否有效
    if (!sessionManager.isSessionValid()) {
      console.log('🔄 会话无效或过期，尝试强制刷新...');
      const refreshSuccess = await sessionManager.forceRefresh();

      if (!refreshSuccess) {
        console.log('⚠️ 会话刷新失败，使用传统方法...');

        // 回退到传统方法
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
        };

        const mainPageResponse = await fetch('https://deltarune.io/', {
          method: 'GET',
          headers,
          signal: AbortSignal.timeout(10000),
        });

        if (!mainPageResponse.ok) {
          throw new Error(`主页访问失败: ${mainPageResponse.status}`);
        }

        cookies = mainPageResponse.headers.get('set-cookie') || '';
      } else {
        sessionData = sessionManager.getSessionData();
        cookies = sessionData?.cookies || '';
      }
    } else {
      console.log('✅ 使用缓存的会话数据');
      cookies = sessionData?.cookies || '';
    }

    console.log(`📊 会话状态: ${sessionManager.getSessionStats().age}`);

    // 第二步：使用获取的Cookie访问embed页面
    console.log('🎮 正在访问受保护的embed页面...');
    const embedHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Cookie': cookies,
      'Referer': 'https://deltarune.io/',
      'Sec-Fetch-Dest': 'iframe',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
    };

    const embedResponse = await fetch('https://deltarune.io/embed/deltarune', {
      method: 'GET',
      headers: embedHeaders,
      signal: AbortSignal.timeout(15000),
    });

    if (!embedResponse.ok) {
      throw new Error(`Embed页面访问失败: ${embedResponse.status}`);
    }

    const embedContent = await embedResponse.text();

    // 检查是否仍然返回错误
    if (embedContent.includes('Bad request') || embedContent.includes('error')) {
      return NextResponse.json({
        success: false,
        error: 'Server still returned error despite session simulation',
        content: embedContent.substring(0, 500) // 限制返回内容长度
      }, {
        status: 400,
        headers: corsHeaders
      });
    }

    // 成功获取内容
    console.log('请求成功！已成功绕过限制');

    // 处理HTML内容，确保相对路径正确
    const processedContent = embedContent
      .replace(/src="\/([^"]*)/g, 'src="https://deltarune.io/$1')
      .replace(/href="\/([^"]*)/g, 'href="https://deltarune.io/$1')
      .replace(/url\(\/([^)]*)/g, 'url(https://deltarune.io/$1');

    // 返回处理后的HTML内容
    return new NextResponse(processedContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Frame-Options': 'SAMEORIGIN',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        ...corsHeaders,
      },
    });

  } catch (error) {
    console.error('代理请求失败:', error);

    // 区分不同类型的错误
    let errorMessage = 'Unknown error';
    let statusCode = 500;

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        errorMessage = 'Request timeout';
        statusCode = 408;
      } else if (error.message.includes('fetch')) {
        errorMessage = 'Network connection failed';
        statusCode = 503;
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json({
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    }, {
      status: statusCode,
      headers: corsHeaders
    });
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
