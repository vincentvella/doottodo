import { getUser, withPageAuth } from '@supabase/auth-helpers-nextjs';

export const unauthenticated = (redirectTo: string | undefined = '/sign-in') =>
  withPageAuth({
    authRequired: true,
    redirectTo,
    async getServerSideProps(ctx) {
      const { user } = await getUser(ctx);
      return { props: { user } };
    },
  });
