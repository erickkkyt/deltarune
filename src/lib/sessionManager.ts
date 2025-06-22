// 会话管理器 - 自动维护与 deltarune.io 的会话
interface SessionData {
  cookies: string;
  lastUpdate: number;
}

class SessionManager {
  private static instance: SessionManager;
  private sessionData: SessionData | null = null;
  private readonly SESSION_VALIDITY_DURATION = 5 * 60 * 1000; // 会话有效期：5分钟
  private isRefreshing = false; // 防止并发刷新

  private constructor() {
    // 构造函数中不再启动定时器
  }

  public static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  // 核心方法：按需获取有效会话
  public async getValidSession(): Promise<SessionData> {
    if (this.isSessionValid()) {
      return this.sessionData!;
    }

    // 如果会话无效或不存在，则触发刷新
    await this.forceRefresh();

    if (!this.sessionData) {
      throw new Error('Failed to refresh session, session data is still null.');
    }
    
    return this.sessionData;
  }

  // 检查会话是否有效
  private isSessionValid(): boolean {
    if (!this.sessionData) {
      return false;
    }
    const now = Date.now();
    const sessionAge = now - this.sessionData.lastUpdate;
    return sessionAge < this.SESSION_VALIDITY_DURATION;
  }

  // 强制刷新会话
  public async forceRefresh(): Promise<boolean> {
    if (this.isRefreshing) {
      console.log('🔄 A refresh is already in progress, skipping this one.');
      //
      // 等待正在进行的刷新完成
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      return !!this.sessionData?.cookies;
    }

    this.isRefreshing = true;

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

      const response = await fetch('https://deltarune.io/', {
        method: 'GET',
        headers,
        signal: AbortSignal.timeout(20000), // 超时时间增加到20秒
      });

      if (response.ok) {
        const cookies = response.headers.get('set-cookie') || '';
        
        this.sessionData = {
          cookies,
          lastUpdate: Date.now(),
        };

        console.log('✅ 会话刷新成功');
        return true;
      } else {
        throw new Error(`HTTP ${response.status}`);
      }

    } catch (error) {
      console.error('❌ 会话刷新失败:', error);
      this.sessionData = null; // 刷新失败时，清除旧的会话数据
      return false;
    } finally {
      this.isRefreshing = false; // 确保在操作结束后重置标志
    }
  }

  // 获取当前会话数据（可能已过期）
  public getSessionData(): SessionData | null {
    return this.sessionData;
  }

  // 获取会话统计信息
  public getSessionStats(): {
    isValid: boolean;
    lastUpdate: string;
    age: string;
  } {
    if (!this.sessionData) {
      return {
        isValid: false,
        lastUpdate: 'Never',
        age: 'N/A',
      };
    }

    const now = Date.now();
    const ageMs = now - this.sessionData.lastUpdate;
    const ageMinutes = Math.floor(ageMs / 60000);
    const ageSeconds = Math.floor((ageMs % 60000) / 1000);

    return {
      isValid: this.isSessionValid(),
      lastUpdate: new Date(this.sessionData.lastUpdate).toLocaleString(),
      age: `${ageMinutes}分${ageSeconds}秒前`,
    };
  }
}

// 导出单例实例
export const sessionManager = SessionManager.getInstance();

// 在服务器环境中自动启动
if (typeof window === 'undefined') {
  console.log('🚀 服务器端会话管理器已启动');
}
