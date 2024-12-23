'use client';

import { Button } from '@/components/ui/button';
import AuthPage from '@/features/auth/components/AuthPage';
import { useAuthActions } from '@convex-dev/auth/react';

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <>
      <div>user signed in</div>
      <Button onClick={() => signOut()}>Sign out</Button>
    </>
  );
}
