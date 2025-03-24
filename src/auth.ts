import {
  CLIENT_ID_GITHUB, CLIENT_ID_GOOGLE, CLIENT_SECRET_GITHUB, CLIENT_SECRET_GOOGLE,
  NEXT_SECRET,
} from '@/config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { prisma } from './lib/prisma';

export const {
  auth, handlers, signIn, signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: CLIENT_ID_GITHUB,
      clientSecret: CLIENT_SECRET_GITHUB,
    }),
    Google({
      clientId: CLIENT_ID_GOOGLE,
      clientSecret: CLIENT_SECRET_GOOGLE,
    }),
  ],
  secret: NEXT_SECRET,
  // callbacks: {
  //   async session({ session }) {
  //     if (!session.user) return session;

  //     if (!session.user.email || !session.user.name || !session.user.image) return session;

  //     const user = await prisma.user.upsert({
  //       where: {
  //         email: session.user.email,
  //       },
  //       create: {
  //         email: session.user.email,
  //         username: session.user.name,
  //         image: session.user.image,
  //       },
  //       update: {
  //       },
  //     });

  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: user.id,
  //       },
  //     };
  //   },
  // },
});
