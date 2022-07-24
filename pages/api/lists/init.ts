import { getUser, supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-nextjs';

export default withApiAuth(async (req, res) => {
  try {
    const { user, error: userError } = await getUser({ req, res });
    if (user) {
      const { data, error } = await supabaseServerClient({ req, res }).rpc('add_list', {
        user_id: user.id,
        title: 'My List',
      });
      if (error) {
        throw new Error(error.message);
      }
      res.status(200).json(data);
    } else {
      if (userError) {
        console.error(userError);
        res.status(500).send(userError.message);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('error adding initial list');
  }
});
