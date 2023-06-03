import { supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-nextjs';

export default withApiAuth(async (req, res) => {
  try {
    const { data: tasks, error } = await supabaseServerClient({ req, res })
      .from('tasks')
      .select('*');
    console.error(error);
    res.json(tasks);
  } catch (err) {
    res.status(500).send('error retrieving lists');
  }
});
