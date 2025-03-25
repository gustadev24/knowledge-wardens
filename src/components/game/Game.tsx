'use client';

import Link from 'next/link';
import { useUnityContext, Unity } from 'react-unity-webgl';
import { FaArrowTurnUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

// type GameProps = {
//   session: Session;
// };

export function Game() {
  // Estos son los datos del usuario
  // const name: string = session.user?.name || '';
  // const image: string = session.user?.image || '';
  // const email: string = session.user?.email || '';
  const {
    unityProvider, isLoaded, loadingProgression, unload,
  } = useUnityContext({
    loaderUrl: '/game/Build.loader.js',
    dataUrl: '/game/Build.data',
    frameworkUrl: '/game/Build.framework.js',
    codeUrl: '/game/Build.wasm',
  });
  const [devicePixelRatio, setDevicePixelRatio] = useState<number>(1);

  useEffect(
    () => {
      const updateDevicePixelRatio = () => {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`,
      );
      mediaMatcher.addEventListener('change', updateDevicePixelRatio);
      return () => {
        mediaMatcher.removeEventListener('change', updateDevicePixelRatio);
      };
    },
    [devicePixelRatio],
  );

  useEffect(() => () => {
    unload().then(() => {
      console.log('Game unloaded');
    }).catch((error: Error) => {
      console.log('Error unloading game', error);
    });
  }, [unload]);

  return (
    <main className="size-full flex justify-center items-center grow relative">
      {
        !isLoaded && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/90 rounded-md p-4">
            <p>
              Cargando... (
              {loadingProgression * 100}
              %)
            </p>
          </div>
        )
      }
      <Unity unityProvider={unityProvider} className="size-full" devicePixelRatio={devicePixelRatio} />
      <Link href=".." className="absolute top-10 left-10 rounded-md px-4 py-2 bg-primary/90 hover:bg-primary text-primary-foreground">
        <FaArrowTurnUp className="-rotate-90" />
      </Link>
    </main>
  );
}
