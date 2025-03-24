'use client';

import Link from 'next/link';
import UnityGame from './UnityGame';

// type GameProps = {
//   session: Session;
// };

export function Game() {
  // Estos son los datos del usuario
  // const name: string = session.user?.name || '';
  // const image: string = session.user?.image || '';
  // const email: string = session.user?.email || '';

  return (
    <main className="w-full min-h-screen relative">
      <UnityGame />
      <Link href="/" className="absolute top-10 left-10 rounded-md px-4 py-2 bg-primary/90 hover:bg-primary text-primary-foreground">
        Back
      </Link>
    </main>
  );
}
