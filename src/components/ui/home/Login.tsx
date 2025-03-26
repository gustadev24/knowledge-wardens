'use client';

import { Button } from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export function Login() {
  return (
    <div id="login" className="flex flex-row bg-green-950 items-center gap-4 p-4">
      <span className="text-white text-3xl">Inicia Sesión:</span>
      <Button
        onClick={() => signIn('github')}
      >
        <FiGithub size={30} />
      </Button>
      <Button
        onClick={() => signIn('google')}
      >
        <FaGoogle size={30} />
      </Button>
    </div>
  );
}
