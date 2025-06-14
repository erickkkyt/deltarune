import { NextRequest, NextResponse } from 'next/server';
import { sessionManager } from '@/lib/sessionManager';

export const runtime = 'nodejs';

// 初始化会话管理器的 API 端点
export async function GET(request: NextRequest) {
  try {
    // 确保会话管理器已启动
    const stats = sessionManager.getSessionStats();
    
    return NextResponse.json({
      success: true,
      message: 'Session manager initialized',
      session: stats,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}

// 手动启动会话管理器
export async function POST(request: NextRequest) {
  try {
    // 强制刷新会话
    const success = await sessionManager.forceRefresh();
    
    return NextResponse.json({
      success,
      message: success ? 'Session manager started successfully' : 'Failed to start session manager',
      session: sessionManager.getSessionStats(),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
