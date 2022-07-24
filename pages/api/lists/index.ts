import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-nextjs';

export default withApiAuth(async (req, res) => {
  try {
    const { data: lists, error } = await supabaseServerClient({ req, res })
      .from('lists')
      .select('*');
    console.error(error);
    res.json(lists);
  } catch (err) {
    res.status(500).send('error retrieving lists');
  }
});
