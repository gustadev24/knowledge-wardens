import { Game } from '@/components/game/Game';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authConfig } from '../api/auth/[...nextauth]/authConfig';

export default async function GamePage() {
  const session = await getServerSession(authConfig);

  if (!session) {
    redirect('/');
  }

  return (
    <Game />
  );
}
