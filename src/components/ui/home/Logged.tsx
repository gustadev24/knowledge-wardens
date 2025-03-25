import Image from 'next/image';
import Logout from './Logout';

type LoggedProps = {
  name: string;
  image: string;
};

export function Logged({ name, image }: LoggedProps) {
  return (
    <div className="flex gap-4 justify-center items-center bg-green-950 p-4">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h5 className="font-semibold text-white text-xl">{name}</h5>
      </div>
      <Logout />
    </div>
  );
}
