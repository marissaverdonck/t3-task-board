import { trpc } from '@utils';

export function useSession () {
  const { data: session } = trpc.auth.getSession.useQuery();
  return session;
}
