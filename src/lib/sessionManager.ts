// 会话管理器 - 自动维护与 deltarune.io 的会话
interface SessionData {
  cookies: string;
  lastUpdate: number;
  isValid: boolean;
  retryCount: number;
}

class SessionManager {
  private static instance: SessionManager;
  private sessionData: SessionData | null = null;
  private intervalId: NodeJS.Timeout | null = null;
  private readonly SESSION_DURATION = 15 * 1000; // 15秒
  private readonly MAX_RETRIES = 3;

  private constructor() {
    this.startAutoRefresh();
  }

  public static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  // 启动自动刷新
  private startAutoRefresh(): void {
    console.log('🔄 启动会话自动刷新，间隔：2分钟');
    
    // 立即执行一次
    this.refreshSession();
    
    // 设置定时器
    this.intervalId = setInterval(() => {
      this.refreshSession();
    }, this.SESSION_DURATION);
  }

  // 停止自动刷新
  public stopAutoRefresh(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('⏹️ 会话自动刷新已停止');
    }
  }

  // 刷新会话
  private async refreshSession(): Promise<void> {
    try {
      console.log('🔄 开始刷新 deltarune.io 会话...');
      
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

      // 访问主页获取会话
      const response = await fetch('https://deltarune.io/', {
        method: 'GET',
        headers,
        signal: AbortSignal.timeout(10000),
      });

      if (response.ok) {
        const cookies = response.headers.get('set-cookie') || '';
        
        this.sessionData = {
          cookies,
          lastUpdate: Date.now(),
          isValid: true,
          retryCount: 0,
        };

        console.log('✅ 会话刷新成功');
        console.log(`📊 会话状态: ${cookies ? '有Cookie' : '无Cookie'}`);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }

    } catch (error) {
      console.error('❌ 会话刷新失败:', error);
      
      if (this.sessionData) {
        this.sessionData.retryCount++;
        
        if (this.sessionData.retryCount >= this.MAX_RETRIES) {
          this.sessionData.isValid = false;
          console.log('⚠️ 会话已标记为无效（重试次数过多）');
        }
      }
    }
  }

  // 获取当前会话数据
  public getSessionData(): SessionData | null {
    return this.sessionData;
  }

  // 检查会话是否有效
  public isSessionValid(): boolean {
    if (!this.sessionData) return false;
    
    const now = Date.now();
    const sessionAge = now - this.sessionData.lastUpdate;
    
    // 如果会话超过10分钟，认为可能过期
    if (sessionAge > 10 * 60 * 1000) {
      console.log('⚠️ 会话可能已过期（超过10分钟）');
      return false;
    }
    
    return this.sessionData.isValid;
  }

  // 强制刷新会话
  public async forceRefresh(): Promise<boolean> {
    try {
      await this.refreshSession();
      return this.isSessionValid();
    } catch (error) {
      console.error('强制刷新失败:', error);
      return false;
    }
  }

  // 获取会话统计信息
  public getSessionStats(): {
    isValid: boolean;
    lastUpdate: string;
    age: string;
    retryCount: number;
  } {
    if (!this.sessionData) {
      return {
        isValid: false,
        lastUpdate: 'Never',
        age: 'N/A',
        retryCount: 0,
      };
    }

    const now = Date.now();
    const ageMs = now - this.sessionData.lastUpdate;
    const ageMinutes = Math.floor(ageMs / 60000);
    const ageSeconds = Math.floor((ageMs % 60000) / 1000);

    return {
      isValid: this.sessionData.isValid,
      lastUpdate: new Date(this.sessionData.lastUpdate).toLocaleString(),
      age: `${ageMinutes}分${ageSeconds}秒前`,
      retryCount: this.sessionData.retryCount,
    };
  }
}

// 导出单例实例
export const sessionManager = SessionManager.getInstance();

// 在服务器环境中自动启动
if (typeof window === 'undefined') {
  console.log('🚀 服务器端会话管理器已启动');
}
