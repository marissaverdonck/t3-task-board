import { signIn, signOut } from 'next-auth/react';

import { trpc } from '../utils/trpc';

export const LoginButton: React.FC = () => {
  const { data: session } = trpc.auth.getSession.useQuery();

  return (
    <button
      className="rounded-lg   bg-gray-200 p-3 font-medium  no-underline transition hover:underline hover:decoration-solid"
      onClick={session ? () => signOut() : () => signIn()}
    >
      {session ? 'Sign out' : 'Sign in'}
    </button>
  );
};
