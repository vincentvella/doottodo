import { getUser, withPageAuth } from '@supabase/auth-helpers-nextjs';

export const authenticated = (redirectTo: string | undefined = '/sign-in') =>
  withPageAuth({
    authRequired: true,
    redirectTo,
    async getServerSideProps(ctx) {
      const { user } = await getUser(ctx);
      return { props: { user } };
    },
  });
