'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface LoadingMethod {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
}

export default function Hero() {
  const t = useTranslations('home');
  const [currentMethod, setCurrentMethod] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [showManualOptions, setShowManualOptions] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const loadingMethods: LoadingMethod[] = [
    {
      id: 'direct',
      name: 'Direct Connection',
      url: 'https://deltarune.fun/',
      description: 'Loading directly from deltarune.fun',
      icon: '🎮'
    },
    {
      id: 'alternative',
      name: 'Alternative Methods',
      url: '',
      description: 'Manual options for game access',
      icon: '🛠️'
    }
  ];

  const currentLoadingMethod = loadingMethods[currentMethod];

  useEffect(() => {
    // 自动尝试下一个方法
    if (hasError && currentMethod < loadingMethods.length - 1) {
      const timer = setTimeout(() => {
        console.log(`Method ${currentLoadingMethod.name} failed, trying next method...`);
        setCurrentMethod(prev => prev + 1);
        setHasError(false);
        setIsLoading(true);
        setRetryCount(prev => prev + 1);
      }, 3000);

      return () => clearTimeout(timer);
    } else if (hasError && currentMethod >= loadingMethods.length - 1) {
      // 所有自动方法都失败了，显示手动选项
      setShowManualOptions(true);
      setIsLoading(false);
    }
  }, [hasError, currentMethod]);

  const handleIframeLoad = () => {
    setIsGameLoaded(true);
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    console.log(`Loading method ${currentLoadingMethod.name} failed`);
    setHasError(true);
    setIsLoading(false);
    setIsGameLoaded(false);
  };

  const retryCurrentMethod = () => {
    setHasError(false);
    setIsLoading(true);
    setIsGameLoaded(false);
    setRetryCount(prev => prev + 1);
  };

  const openOfficialSite = () => {
    window.open('https://deltarune.io/', '_blank', 'noopener,noreferrer');
  };

  const resetToFirstMethod = () => {
    setCurrentMethod(0);
    setHasError(false);
    setIsLoading(true);
    setIsGameLoaded(false);
    setShowManualOptions(false);
    setRetryCount(0);
  };

  const toggleFullscreen = () => {
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
      if (!document.fullscreenElement) {
        gameContainer.requestFullscreen().then(() => {
          setIsFullscreen(true);
        }).catch(err => {
          console.log('Error attempting to enable fullscreen:', err);
        });
      } else {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <section id="game" className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
            {t('hero.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        {/* Game Container */}
        <div className="max-w-5xl mx-auto">
          {showManualOptions ? (
            <div className="aspect-video bg-black rounded-lg border border-gray-700 overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-white font-mono text-xl mb-4">Choose How to Play</h3>
                <p className="text-gray-400 font-mono text-sm mb-6">
                  Automatic loading methods didn't work. Please choose an option:
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={openOfficialSite}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-mono text-sm transition-colors"
                  >
                    🌐 Play on Official Site (Recommended)
                  </button>
                  
                  <button
                    onClick={resetToFirstMethod}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-mono text-sm transition-colors"
                  >
                    🔄 Try Automatic Loading Again
                  </button>
                  
                  <button
                    onClick={() => window.open('https://store.steampowered.com/app/1671210/DELTARUNE/', '_blank')}
                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-mono text-sm transition-colors"
                  >
                    💾 Download from Steam
                  </button>
                </div>

                <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg">
                  <p className="text-yellow-400 font-mono text-xs">
                    💡 Embedding restrictions are normal security measures. 
                    The official site always works best!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div id="game-container" className="aspect-video bg-black relative rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded transition-all duration-200"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9l6 6m0-6l-6 6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l6-6m0 0v5m0-5H4" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 8V4m0 0h-4m4 0l-5 5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v4m0 0h4m-4 0l5-5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 16v4m0 0h-4m4 0l-5-5" />
                  </svg>
                )}
              </button>

              {/* Loading Overlay */}
              {(isLoading || hasError) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                  <div className="text-center">
                    {isLoading && !hasError && (
                      <>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                        <div className="text-2xl mb-2">{currentLoadingMethod.icon}</div>
                        {retryCount > 0 && (
                          <p className="text-gray-500 font-mono text-xs">Attempt {retryCount + 1}</p>
                        )}
                      </>
                    )}
                    
                    {hasError && currentMethod < loadingMethods.length - 1 && (
                      <>
                        <div className="text-yellow-400 text-4xl mb-4">⚠️</div>
                        <h3 className="text-white font-mono text-lg mb-2">Method Failed</h3>
                        <p className="text-gray-400 font-mono text-sm mb-4">
                          {currentLoadingMethod.name} didn't work. Trying next method in 3 seconds...
                        </p>
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={retryCurrentMethod}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                          >
                            Retry This Method
                          </button>
                          <button
                            onClick={() => setCurrentMethod(prev => prev + 1)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                          >
                            Skip to Next Method
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Game Iframe */}
              {currentLoadingMethod.url && (
                <iframe
                  key={`${currentMethod}-${retryCount}`}
                  src={currentLoadingMethod.url}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="Deltarune Game"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  allow="fullscreen; autoplay; encrypted-media; microphone; camera"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-downloads"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
