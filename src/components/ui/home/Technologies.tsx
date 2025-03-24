'use client';

import Image from 'next/image';

import Gradient from '@/components/ui/gradient';

const techs = [
  {
    name: 'React',
    src: '/react.svg',
  },
  {
    name: 'Next',
    src: '/next.svg',
  },
  {
    name: 'Mistral',
    src: '/mistral.svg',
  },
  {
    name: 'Vercel',
    src: '/vercel.svg',
  },
  {
    name: 'Unity',
    src: '/unity.svg',
  },
  {
    name: 'React',
    src: '/react.svg',
  },
  {
    name: 'Next',
    src: '/next.svg',
  },
  {
    name: 'Mistral',
    src: '/mistral.svg',
  },
  {
    name: 'Vercel',
    src: '/vercel.svg',
  },
  {
    name: 'Unity',
    src: '/unity.svg',
  },
  {
    name: 'React',
    src: '/react.svg',
  },
  {
    name: 'Next',
    src: '/next.svg',
  },
  {
    name: 'Mistral',
    src: '/mistral.svg',
  },
  {
    name: 'Vercel',
    src: '/vercel.svg',
  },
  {
    name: 'Unity',
    src: '/unity.svg',
  },
];

export function Technologies() {
  return (
    <div className="w-full flex flex-col items-center justify-start px-10 my-20">
      <h1 className="text-4xl font-bold font-title">
        Tecnologias
      </h1>
      <div className="w-full overflow-hidden relative max-w-6xl" id="sliderAbout">
        <div id="sliderAbout-track">
          <div className="flex justify-center items-center max-w-5xl w-full my-16">
            {
                techs.map((t) => (
                  <div key={crypto.randomUUID()} className="flex flex-col justify-center items-center gap-6 font-semibold text-xl min-w-[16rem] pl-10">
                    <Image
                      className="w-32 h-32"
                      src={t.src}
                      alt={t.name}
                      width={128}
                      height={128}
                    />
                    <span>
                      {t.name}
                    </span>
                  </div>
                ))
              }
          </div>
        </div>
        <Gradient direction="l" />
        <Gradient direction="r" />
      </div>
    </div>
  );
}
