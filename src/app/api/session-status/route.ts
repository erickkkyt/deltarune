import { NextRequest, NextResponse } from 'next/server';
import { sessionManager } from '@/lib/sessionManager';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const stats = sessionManager.getSessionStats();
    const sessionData = sessionManager.getSessionData();
    
    return NextResponse.json({
      success: true,
      session: {
        ...stats,
        hasCookies: sessionData?.cookies ? sessionData.cookies.length > 0 : false,
        cookiePreview: sessionData?.cookies ? 
          sessionData.cookies.substring(0, 50) + '...' : 
          'No cookies',
      },
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

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    if (action === 'refresh') {
      console.log('🔄 手动触发会话刷新...');
      const success = await sessionManager.forceRefresh();
      
      return NextResponse.json({
        success,
        message: success ? 'Session refreshed successfully' : 'Session refresh failed',
        session: sessionManager.getSessionStats(),
        timestamp: new Date().toISOString(),
      });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Invalid action',
    }, { status: 400 });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
