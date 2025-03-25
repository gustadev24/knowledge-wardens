'use client';

import { Button } from '@/components/ui/Button';
import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <Button
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
}
