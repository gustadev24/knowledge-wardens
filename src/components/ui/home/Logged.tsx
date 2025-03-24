import Link from 'next/link';
import Logout from './Logout';

// type LoggedProps = {
//   name: string;
//   image: string;
//   email: string;
// };

export function Logged() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Link
        className="flex items-center gap-1 w-max
          border-4 rounded-none text-3xl
          bg-btn-bg border-btn-border text-white shadow-inner
          hover:bg-white hover:text-black
          pulse z-20"
        href="/game"
      >
        Continue adventure
      </Link>
      <Logout />
    </div>
  );
}
