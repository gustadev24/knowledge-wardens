'use client';

import dynamic from 'next/dynamic';

// Es necesario la carga dinamica de este componente porque ProtonJS no es compatible con el renderizado del lado del servidor (SSR) de Next.js.

const CustomMouseParticles = dynamic(
  () => import('./CustomMouseParticles'),
  { ssr: false },
);

export default function MouseParticlesClient() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]">
      <CustomMouseParticles
        g={1}
        color={[
          '#37B8EF', '#2F9ECD', '#39BEF7',
          '#2783AB', '#1F6989', '#37B8EF',
          '#2F9ECD', '#39BEF7', '#2783AB',
          '#1F6989', '#FFFFFF', '#F7EF39',
        ]}
      />
    </div>
  );
}
