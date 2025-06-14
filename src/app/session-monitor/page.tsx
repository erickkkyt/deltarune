'use client';

import { useState, useEffect } from 'react';

interface SessionStatus {
  success: boolean;
  session: {
    isValid: boolean;
    lastUpdate: string;
    age: string;
    retryCount: number;
    hasCookies: boolean;
    cookiePreview: string;
  };
  timestamp: string;
}

export default function SessionMonitorPage() {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const fetchSessionStatus = async () => {
    try {
      const response = await fetch('/api/session-status');
      const data = await response.json();
      setSessionStatus(data);
    } catch (error) {
      console.error('Failed to fetch session status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const manualRefresh = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch('/api/session-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'refresh' }),
      });
      const data = await response.json();
      console.log('Manual refresh result:', data);
      
      // 刷新状态
      await fetchSessionStatus();
    } catch (error) {
      console.error('Manual refresh failed:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSessionStatus();
    
    if (autoRefresh) {
      const interval = setInterval(fetchSessionStatus, 10000); // 每10秒更新一次显示
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 font-mono">Loading session status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-mono font-bold">🔄 Session Monitor</h1>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm font-mono">Auto Refresh</span>
            </label>
            <button
              onClick={manualRefresh}
              disabled={isRefreshing}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
            >
              {isRefreshing ? 'Refreshing...' : 'Manual Refresh'}
            </button>
          </div>
        </div>

        {sessionStatus && (
          <div className="space-y-6">
            {/* 会话状态卡片 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-mono font-semibold">Session Status</h2>
                <div className={`px-3 py-1 rounded-full text-sm font-mono ${
                  sessionStatus.session.isValid 
                    ? 'bg-green-900 text-green-400 border border-green-600' 
                    : 'bg-red-900 text-red-400 border border-red-600'
                }`}>
                  {sessionStatus.session.isValid ? '✅ ACTIVE' : '❌ INVALID'}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-sm font-mono">Last Update:</label>
                    <p className="text-white font-mono">{sessionStatus.session.lastUpdate}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-mono">Session Age:</label>
                    <p className="text-white font-mono">{sessionStatus.session.age}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="text-gray-400 text-sm font-mono">Retry Count:</label>
                    <p className="text-white font-mono">{sessionStatus.session.retryCount}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm font-mono">Has Cookies:</label>
                    <p className="text-white font-mono">
                      {sessionStatus.session.hasCookies ? '✅ Yes' : '❌ No'}
                    </p>
                  </div>
                </div>
              </div>

              {sessionStatus.session.hasCookies && (
                <div className="mt-4">
                  <label className="text-gray-400 text-sm font-mono">Cookie Preview:</label>
                  <p className="text-gray-300 font-mono text-xs bg-gray-800 p-2 rounded mt-1 break-all">
                    {sessionStatus.session.cookiePreview}
                  </p>
                </div>
              )}
            </div>

            {/* 自动化信息 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold mb-4">🤖 Automation Info</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span>自动会话刷新：每 5 分钟执行一次</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span>会话验证：每次 API 调用前检查</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span>故障恢复：自动重试机制</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">ℹ️</span>
                  <span>监控更新：每 10 秒刷新显示</span>
                </div>
              </div>
            </div>

            {/* 系统日志 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold mb-4">📊 System Info</h2>
              <div className="space-y-2 text-sm font-mono">
                <div>
                  <span className="text-gray-400">Last Check:</span>
                  <span className="ml-2 text-white">{sessionStatus.timestamp}</span>
                </div>
                <div>
                  <span className="text-gray-400">Status:</span>
                  <span className="ml-2 text-white">
                    {sessionStatus.success ? '✅ System Healthy' : '❌ System Error'}
                  </span>
                </div>
              </div>
            </div>

            {/* 测试区域 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-mono font-semibold mb-4">🧪 Quick Test</h2>
              <div className="space-y-4">
                <button
                  onClick={() => window.open('/api/game-proxy', '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors mr-4"
                >
                  Test Game Proxy
                </button>
                <button
                  onClick={() => window.open('/test-proxy', '_blank')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                >
                  Open Test Page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
