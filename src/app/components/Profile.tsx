import { redirect } from 'next/navigation';

import { getServerAuthSession } from '@/server/auth';

export default async function Profile() {
  const status = await getServerAuthSession();
  if (!status) {
    // User unauthenticated, redirect to home
    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hi, {status.user.name}
    </main>
  );
}