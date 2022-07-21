import { getUser, withPageAuth } from '@supabase/auth-helpers-nextjs';

export const dual = withPageAuth({
  authRequired: false,
  async getServerSideProps(ctx) {
    try {
      const { user } = await getUser(ctx);
      return { props: { user } };
    } catch (err) {
      return { props: { user: null } };
    }
  },
});
