import { auth } from '@/auth';
import { Home } from '@/components/ui/home/Home';

export default async function Page() {
  const session = await auth();

  return <Home session={session} />;
}
