import { getServerSession } from 'next-auth';
import { Home } from '@/components/ui/home/Home';
import { authConfig } from './api/auth/[...nextauth]/authConfig';

export default async function Page() {
  const session = await getServerSession(authConfig);

  return <Home session={session} />;
}
