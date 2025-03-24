import NextAuth from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
