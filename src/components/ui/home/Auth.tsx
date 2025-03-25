import { Session } from 'next-auth';
import { Login } from './Login';
import { Logged } from './Logged';

type AuthProps = {
  session?: Session | null;
};

export default function Auth({
  session,
}: AuthProps) {
  const name: string = session?.user?.name || session?.user?.email || '';
  const image: string = session?.user?.image || '';
  return (
    <div className="flex flex-col items-center p-8 pt-16 gap-4 bg-auth-desktop">
      {
        !session && <Login />
      }
      {
        session && <Logged name={name} image={image} />
      }
    </div>
  );
}
