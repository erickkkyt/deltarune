'use client';

import { useState } from 'react';

interface GameDetail {
  question: string;
  answer: string;
  color: string;
}

interface GameDetailsProps {
  title: string;
  details: GameDetail[];
}

export default function GameDetails({ title, details }: GameDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 主要内容框 */}
        <div className="bg-black border border-gray-700 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 font-mono">
              {title}
            </h2>
            <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          {/* 问答形式内容 */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            {/* 显示前3个问题 */}
            {details.slice(0, 3).map((item, index) => (
              <div key={index}>
                <h3 className={`text-xl font-bold ${item.color} mb-4 font-mono`}>
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}

            {/* 展开的内容 */}
            {details.length > 3 && (
              <>
                <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="space-y-8 pt-8">
                    {details.slice(3).map((item, index) => (
                      <div key={index + 3}>
                        <h3 className={`text-xl font-bold ${item.color} mb-4 font-mono`}>
                          {item.question}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Show more / Show less 按钮 */}
                <div className="text-center mt-8">
                  <button
                    onClick={toggleExpanded}
                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-mono"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                    <div className={`ml-2 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
