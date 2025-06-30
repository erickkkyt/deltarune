'use client';

import { useState } from 'react';

export default function Hero() {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const [loadingMethod, setLoadingMethod] = useState<'direct' | 'proxy' | 'alternatives'>('direct');
  const [isLoadingProxy, setIsLoadingProxy] = useState(false);

  const toggleFullscreen = () => {
    const gameFrame = document.getElementById('game-frame') as HTMLIFrameElement;
    if (gameFrame) {
      if (!document.fullscreenElement) {
        gameFrame.requestFullscreen().then(() => {
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

  const handleIframeError = () => {
    console.log('Direct iframe failed, trying proxy method...');
    setHasError(true);
    setIsGameLoaded(false);
  };

  const tryProxyMethod = async () => {
    setIsLoadingProxy(true);
    setLoadingMethod('proxy');
    setHasError(false);

    try {
      const response = await fetch('/api/game-proxy');
      if (response.ok) {
        const gameFrame = document.getElementById('game-frame') as HTMLIFrameElement;
        if (gameFrame) {
          // 使用代理URL
          gameFrame.src = '/api/game-proxy';
          setRetryCount(prev => prev + 1);
        }
      } else {
        throw new Error('Proxy method failed');
      }
    } catch (error) {
      console.error('Proxy method failed:', error);
      setLoadingMethod('alternatives');
    } finally {
      setIsLoadingProxy(false);
    }
  };

  const retryDirect = () => {
    setRetryCount(prev => prev + 1);
    setHasError(false);
    setIsGameLoaded(false);
    setLoadingMethod('direct');
    setIframeKey(prev => prev + 1);
  };

  const openInNewTab = () => {
    window.open('https://deltarune.fun/', '_blank', 'noopener,noreferrer');
  };

  const getIframeSrc = () => {
    switch (loadingMethod) {
      case 'proxy':
        return '/api/game-proxy';
      case 'direct':
      default:
        return 'https://deltarune.fun/';
    }
  };

  return (
    <section id="game" className="bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Game Container */}
        <div className="relative">
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className="relative">
              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded transition-all duration-200"
                title="Toggle Fullscreen"
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

              {/* Loading Tip - Above iframe */}
              <div className="text-gray-500 text-xs font-mono mb-1 px-1">
                If not loading, try refreshing or re-entering. Game loads within 30 seconds max.
              </div>

              <div className="aspect-video bg-black relative">
                {(!isGameLoaded && !hasError) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                      <p className="text-gray-400 font-mono text-sm">
                        {isLoadingProxy ? 'Trying proxy method...' :
                         loadingMethod === 'proxy' ? 'Loading via proxy...' :
                         'Loading Deltarune...'}
                      </p>
                      {retryCount > 0 && (
                        <p className="text-gray-500 font-mono text-xs mt-2">
                          Attempt {retryCount + 1} - {loadingMethod} method
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {hasError && loadingMethod !== 'alternatives' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="text-center p-6">
                      <div className="text-yellow-400 text-4xl mb-4">🔄</div>
                      <h3 className="text-white font-mono text-lg mb-2">Connection Issue Detected</h3>
                      <p className="text-gray-400 font-mono text-sm mb-4">
                        {loadingMethod === 'direct'
                          ? 'Direct connection failed. Trying alternative methods...'
                          : 'Proxy method failed. Trying other options...'}
                      </p>
                      <div className="space-y-2">
                        {loadingMethod === 'direct' && (
                          <button
                            onClick={tryProxyMethod}
                            disabled={isLoadingProxy}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors mr-2"
                          >
                            {isLoadingProxy ? 'Trying...' : 'Try Proxy Method'}
                          </button>
                        )}
                        <button
                          onClick={retryDirect}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors mr-2"
                        >
                          Retry Direct
                        </button>
                        <button
                          onClick={openInNewTab}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
                        >
                          Open Official Site
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {loadingMethod !== 'alternatives' && (
                  <iframe
                    key={iframeKey}
                    id="game-frame"
                    src={getIframeSrc()}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title="Deltarune Game"
                    onLoad={() => {
                      setIsGameLoaded(true);
                      setHasError(false);
                    }}
                    onError={handleIframeError}
                    allow="fullscreen; autoplay; encrypted-media; microphone; camera"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-downloads"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
