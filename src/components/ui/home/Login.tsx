'use client';

import { Button } from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export function Login() {
  return (
    <div className="flex flex-row gap-4 bg-green-950 p-4">
      <Button
        onClick={() => signIn('github')}
        className="flex items-center gap-1 w-max
        border-4 rounded-none text-3xl
        bg-btn-bg border-btn-border text-white shadow-inner
        hover:bg-white hover:text-black
        pulse z-20"
      >
        <FaGithub size={18} />
        {' '}
        GitHub
      </Button>
      <Button
        onClick={() => signIn('google')}
        className="flex items-center gap-1 w-max
          border-4 rounded-none text-3xl
          bg-btn-bg border-btn-border text-white shadow-inner
          hover:bg-white hover:text-black
          pulse z-20
          "
      >
        <FaGoogle size={18} />
        {' '}
        Google
      </Button>
    </div>
  );
}
