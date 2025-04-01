'use client';

import dynamic from 'next/dynamic';

const DynamicMouseParticles = dynamic(
  () => import('react-mouse-particles'),
  { ssr: false },
);

export default function MouseParticlesClient() {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]"
    >
      <DynamicMouseParticles
        g={1}
        color={['#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#37B8EF', '#2F9ECD', '#39BEF7', '#2783AB', '#1F6989', '#FFFFFF', '#F7EF39']}
      />
    </div>
  );
}
