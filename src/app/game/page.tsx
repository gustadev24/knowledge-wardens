import { auth } from '@/auth';
import { Game } from '@/components/game/Game';
import { redirect } from 'next/navigation';

export default async function GamePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <Game />
  );
}
