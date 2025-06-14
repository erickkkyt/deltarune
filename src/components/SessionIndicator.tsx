'use client';

import { useState, useEffect } from 'react';

interface SessionStatus {
  isValid: boolean;
  age: string;
  lastUpdate: string;
}

export default function SessionIndicator() {
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/session-status');
        const data = await response.json();
        if (data.success) {
          setSessionStatus(data.session);
        }
      } catch (error) {
        console.error('Failed to fetch session status:', error);
      }
    };

    // 初始获取
    fetchStatus();
    
    // 每30秒更新一次
    const interval = setInterval(fetchStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (!sessionStatus) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`transition-all duration-300 ${isVisible ? 'w-64' : 'w-12'} h-12`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 h-full flex items-center">
          {/* 状态指示器 */}
          <div className={`w-3 h-3 rounded-full mr-3 ${
            sessionStatus.isValid ? 'bg-green-400' : 'bg-red-400'
          } ${sessionStatus.isValid ? 'animate-pulse' : ''}`} />
          
          {/* 详细信息 */}
          <div className={`transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } overflow-hidden`}>
            <div className="text-white text-xs font-mono">
              Session: {sessionStatus.isValid ? 'Active' : 'Inactive'}
            </div>
            <div className="text-gray-400 text-xs font-mono">
              {sessionStatus.age}
            </div>
          </div>
          
          {/* 监控链接 */}
          {isVisible && (
            <button
              onClick={() => window.open('/session-monitor', '_blank')}
              className="ml-auto text-blue-400 hover:text-blue-300 text-xs"
              title="Open Session Monitor"
            >
              📊
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
