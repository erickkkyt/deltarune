'use client';

import { useState } from 'react';

export default function TestProxyPage() {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const testProxyAPI = async () => {
    setIsLoading(true);
    setTestResult('Testing proxy API...');
    
    try {
      const response = await fetch('/api/game-proxy');
      const result = await response.text();
      
      if (response.ok) {
        if (result.includes('Bad request') || result.includes('error')) {
          setTestResult('❌ Proxy API returned error: ' + result.substring(0, 200) + '...');
        } else {
          setTestResult('✅ Proxy API working! Game content received successfully.');
        }
      } else {
        setTestResult('❌ Proxy API failed with status: ' + response.status);
      }
    } catch (error) {
      setTestResult('❌ Network error: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const testDirectAccess = async () => {
    setIsLoading(true);
    setTestResult('Testing direct access...');
    
    try {
      const response = await fetch('https://deltarune.io/embed/deltarune', {
        mode: 'no-cors'
      });
      setTestResult('⚠️ Direct access test completed (no-cors mode - limited info available)');
    } catch (error) {
      setTestResult('❌ Direct access failed: ' + (error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-mono font-bold mb-8">Deltarune Proxy Test Page</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-mono font-semibold mb-4">API Tests</h2>
            
            <div className="space-y-4">
              <button
                onClick={testProxyAPI}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors mr-4"
              >
                {isLoading ? 'Testing...' : 'Test Proxy API'}
              </button>
              
              <button
                onClick={testDirectAccess}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors"
              >
                {isLoading ? 'Testing...' : 'Test Direct Access'}
              </button>
            </div>
            
            {testResult && (
              <div className="mt-4 p-4 bg-gray-800 border border-gray-600 rounded">
                <h3 className="font-mono font-semibold mb-2">Test Result:</h3>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">{testResult}</pre>
              </div>
            )}
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-mono font-semibold mb-4">Proxy Method Explanation</h2>
            <div className="text-gray-300 space-y-3 text-sm">
              <p>
                <strong>🔄 Session Simulation Method:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Server first visits deltarune.io main page to establish session</li>
                <li>Server captures any cookies/session data from the response</li>
                <li>Server then requests the embed page using the captured session</li>
                <li>Server forwards the game content to our iframe</li>
              </ol>
              
              <p className="mt-4">
                <strong>💡 Why this works:</strong> Many servers check if requests come from legitimate browsing sessions 
                rather than direct API calls. By simulating a real browser session, we can bypass these restrictions.
              </p>
              
              <p className="mt-4">
                <strong>⚠️ Limitations:</strong> This method depends on the server's specific security implementation 
                and may not work if additional verification methods are used.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-mono font-semibold mb-4">Live Proxy Test</h2>
            <div className="aspect-video bg-black border border-gray-600 rounded">
              <iframe
                src="/api/game-proxy"
                className="w-full h-full border-0 rounded"
                title="Proxy Test"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
