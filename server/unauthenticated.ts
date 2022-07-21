import { withPageAuth } from '@supabase/auth-helpers-nextjs';

export const unauthenticated = (redirectTo: string | undefined = '/') =>
  withPageAuth({
    authRequired: false,
    redirectTo,
  });
