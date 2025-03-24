import { Session } from 'next-auth';
import Image from 'next/image';
import { Login } from './Login';
import { Logged } from './Logged';
import { UserInfo } from './UserInfo';

type HeaderProps = {
  session?: Session | null;
};

export function Header({ session }: HeaderProps) {
  const name: string = session?.user?.name || '';
  const email: string = session?.user?.email || '';

  return (
    <header className="flex flex-col justify-between items-center
    bg-main-mobile md:bg-main-desktop
    bg-cover
    bg-center min-h-[800px] max-h-full p-8 pb-0
    mx-auto
    "
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-5xl lg:text-7xl xl:text-7xl pt-5 text-white font-extrabold  font-title">
          Knowledge Wardens
        </h1>

        <div className="relative flex flex-col items-center justify-center
        md:w-3/6 rounded-3xl p-4 bg-main-text bg-cover bg-center"
        >
          <h3 className="text-gray-300 md:text-xl lg:text-2xl xl:text-2xl relative z-10 text-center">
            El poderoso hechicero ha poseído a tu amo y solo hay una manera de derrotarlo. Debes superar su antiguo conocimiento. Una leyenda es tu esperanza; busca a los guardianes del conocimiento y alcanza la victoria.
          </h3>
          <div className="absolute inset-0
          bg-black bg-opacity-80"
          />
        </div>

        <h2 className="
        w-[100%]
        mt-7
        md:w-2/6 text-center md:m-auto text-3xl lg:text-4xl xl:text-5xl  text-withe font-title font-bold text-white
        pulse
      "
        >
          {
            session && <UserInfo name={name} email={email} />
          }
          {
            !session && <span>Empieza tu aventura</span>
          }
        </h2>
      </div>

      <div className="hidden md:block">
        <Image
          src="/images/characters/prince.png"
          alt="Queen"
          width={350}
          height={500}
          className="absolute top-[40%] left-[4%] z-10"
        />
        <Image
          src="/images/characters/witch2.png"
          alt="Witch"
          width={400}
          height={200}
          className="absolute
        top-[34%] right-[2%] z-10"
        />
      </div>

      <Image
        src="/images/things/teleporter.png"
        alt="Teleport"
        width={300}
        height={200}
        className="absolute
        top-[50%] w-[200px] md:w-[300px]
        md:top-[50%] md:left-[40.5%]
        z-10"
      />

      <div className="flex flex-col p-8 gap-4">
        {
          !session && <Login />
        }
        {
          session && <Logged />
        }
      </div>
    </header>
  );
}
