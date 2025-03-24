/* eslint-disable react/function-component-definition */

'use client';

import React, { useEffect } from 'react';

declare function createUnityInstance(
  canvas: HTMLCanvasElement,
  config: {
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    streamingAssetsUrl?: string;
    companyName?: string;
    productName?: string;
    productVersion?: string;
  }
): Promise<any>;

const UnityGame: React.FC = () => {
  useEffect(() => {
    console.log(process.env.PUBLIC_URL);
    const script = document.createElement('script');
    script.src = '/unity-game/Build.loader.js';
    script.onload = () => {
      const canvas = document.querySelector('#unity-canvas') as HTMLCanvasElement;
      if (canvas) {
        createUnityInstance(canvas, {
          dataUrl: '/unity-game/Build.data',
          frameworkUrl: '/unity-game/Build.framework.js',
          codeUrl: '/unity-game/Build.wasm',
          streamingAssetsUrl: '/unity-game/StreamingAssets',
          companyName: 'CORS',
          productName: 'Knowledge-wardens',
          productVersion: '1.0',
        }).then(() => {
          console.log('Eureka! cargado correctamente xd');
        }).catch((message) => {
          console.error(message);
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <canvas id="unity-canvas" className="w-full min-h-screen" />
      <div id="unity-loading-bar" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div id="unity-logo" className="mb-2" />
        <div id="unity-progress-bar-empty" className="w-full bg-gray-300 h-2">
          <div id="unity-progress-bar-full" className="bg-blue-500 h-full" style={{ width: '0%' }} />
        </div>
      </div>
    </div>
  );
};

export default UnityGame;
