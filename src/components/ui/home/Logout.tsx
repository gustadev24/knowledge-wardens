'use client';

import { Button } from '@/components/ui/Button';
import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <Button
      className="flex items-center gap-1 w-max
    border-4 rounded-none text-3xl
    bg-btn-bg border-btn-border text-white shadow-inner
    hover:bg-white hover:text-black
    pulse z-20"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
}
