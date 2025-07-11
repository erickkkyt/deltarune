'use client';

import { useState } from 'react';

interface GameIframeProps {
  src?: string;
  title: string;
  placeholder?: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function GameIframe({ src, title, placeholder }: GameIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const toggleFullscreen = () => {
    const container = document.getElementById('game-container');
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fullscreen failed
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        // Exit fullscreen failed
      });
    }
  };

  return (
    <div id="game-container" className="aspect-video bg-black relative rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
      {/* Fullscreen Button */}
      {src && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded transition-all duration-200"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>
      )}

      {/* Loading State */}
      {src && isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-white font-mono text-sm">Loading {title}...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {src && hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
          <div className="text-center">
            <div className="text-red-400 text-4xl mb-4">⚠️</div>
            <p className="text-white font-mono text-sm mb-4">Failed to load {title}</p>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                // Force iframe reload by changing src
                const iframe = document.querySelector('iframe');
                if (iframe && src) {
                  iframe.src = src;
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Placeholder or Iframe */}
      {src ? (
        <iframe
          src={src}
          className="w-full h-full border-0"
          allowFullScreen
          title={title}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="fullscreen; autoplay; encrypted-media; microphone; camera"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation allow-downloads"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">{placeholder?.icon || '🎮'}</div>
            <h3 className="text-white font-mono text-xl mb-4">{placeholder?.title || 'Game Loading...'}</h3>
            <p className="text-gray-400 font-mono text-sm">
              {placeholder?.description || 'The iframe will be added here with the provided URL'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
