// 自动初始化脚本 - 在应用启动时自动初始化会话管理器

let isInitialized = false;

export async function autoInitializeSession() {
  if (isInitialized) return;
  
  try {
    // 在服务器环境中自动初始化
    if (typeof window === 'undefined') {
      console.log('🚀 自动初始化会话管理器...');
      
      // 延迟初始化，确保服务器完全启动
      setTimeout(async () => {
        try {
          const response = await fetch('/api/init-session', {
            method: 'POST',
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log('✅ 会话管理器初始化成功:', data);
          } else {
            console.log('⚠️ 会话管理器初始化失败');
          }
        } catch (error) {
          console.log('⚠️ 会话管理器初始化错误:', error);
        }
      }, 2000); // 2秒后初始化
      
      isInitialized = true;
    }
  } catch (error) {
    console.error('自动初始化失败:', error);
  }
}

// 在模块加载时自动执行
if (typeof window === 'undefined') {
  autoInitializeSession();
}
