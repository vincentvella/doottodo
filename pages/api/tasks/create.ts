import { withApiAuth, supabaseServerClient } from '@supabase/auth-helpers-nextjs';

export default withApiAuth(async function ProtectedRoute(req, res) {
  const { summary } = req.body;
  // Run queries with RLS on the server
  const { data, error } = await supabaseServerClient({ req, res })
    .from('tasks')
    .insert([{ summary }]);
  res.json(data);
});
