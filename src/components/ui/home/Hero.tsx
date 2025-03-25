import { Session } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import { Login } from './Login';
import { Logged } from './Logged';

type HeaderProps = {
  session?: Session | null;
};

export function Header({ session }: HeaderProps) {
  const name: string = session?.user?.name || session?.user?.email || '';
  const image: string = session?.user?.image || '';

  return (
    <header className="flex flex-col justify-between items-center
    bg-main-mobile md:bg-main-desktop
    bg-cover
    bg-center min-h-[115dvh] w-full p-8 pb-0
    mx-auto relative
    "
    >
      <div className="flex flex-col items-center gap-16 py-4">
        <h1 className="text-center text-5xl lg:text-7xl text-white font-extrabold font-title">
          Knowledge Wardens
        </h1>

        <h2 className="
        w-full
        flex flex-col items-center
        mt-7
        md:w-2/6 text-center md:m-auto text-3xl lg:text-4xl xl:text-5xl font-title font-bold text-white relative
      "
        >
          {
            session && (
              <Link
                href="/game"
              >
                Continue adventure
              </Link>
            )
          }
          {
            !session && <span>Empieza tu aventura</span>
          }
          <Image
            src="/images/things/teleporter.png"
            alt="Teleport"
            width={300}
            height={200}
            className="absolute -bottom-64 md:-bottom-96 w-[200px] md:w-[300px]
        z-10"
          />
        </h2>
      </div>

      <div className="hidden md:block">
        <Image
          src="/images/characters/prince.png"
          alt="Queen"
          width={350}
          height={500}
          className="absolute top-1/2 -translate-y-1/4 left-0"
        />
        <Image
          src="/images/characters/witch2.png"
          alt="Witch"
          width={400}
          height={200}
          className="absolute top-1/2 -translate-y-1/3 right-0"
        />
      </div>

      <div className="flex flex-col p-8 gap-4">
        {
          !session && <Login />
        }
        {
          session && <Logged name={name} image={image} />
        }
      </div>
    </header>
  );
}
