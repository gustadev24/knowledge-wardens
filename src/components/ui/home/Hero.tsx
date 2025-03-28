import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import styles from './Hero.module.css';

type HeaderProps = {
  session?: Session | null;
};

export function Header({ session }: HeaderProps) {
  return (
    <header className="flex flex-col justify-between items-center
    bg-hero
    bg-cover
    bg-center min-h-[70dvh] md:min-h-[90dvh] w-full p-8 pb-0
    mx-auto relative
    "
    >
      <div className="flex flex-col items-center gap-16 py-4">
        <h1 className="text-center text-5xl lg:text-7xl text-white font-extrabold font-title">
          Knowledge Wardens
        </h1>

        <h2
          className={cn('text-center text-3xl lg:text-4xl xl:text-5xl font-title font-bold group text-blue-600 absolute -bottom-6 sm:-bottom-8 md:-bottom-10 overflow-visible', styles['teleporter-gradient'])}
        >
          <Link
            href={session ? '/game' : '/#login'}
            className="group flex flex-col items-center gap-16"
          >
            <span className="scale-75 group-hover:scale-90 transition-transform duration-300 ease-out max-w-56 md:max-w-80 text-center">
              {session ? 'Continuar aventura' : 'Empieza tu aventura'}
            </span>

            <div className="relative">
              <Image
                src="/images/things/teleporter.webp"
                alt="Teleport"
                width={300}
                height={200}
                className="w-48 sm:w-64 md:w-80 z-10"
              />
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  ease-out
                "
              >
                <span className="relative flex h-24 w-24">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 blur-sm" />
                </span>
              </div>
            </div>

          </Link>
        </h2>
      </div>

      <div className="hidden md:block">
        <Image
          src="/images/characters/prince.webp"
          alt="Queen"
          width={350}
          height={500}
          className="absolute -bottom-9 left-0 h-2/3 w-auto"
        />
        <Image
          src="/images/characters/witch.webp"
          alt="Witch"
          width={400}
          height={200}
          className="absolute -bottom-8 right-0 h-2/3 w-auto"
        />
      </div>
    </header>
  );
}
