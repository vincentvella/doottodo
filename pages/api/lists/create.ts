import { getUser, supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-nextjs';
import zod from 'zod';

const schema = zod.object({
  title: zod.string(),
});

export default withApiAuth(async (req, res) => {
  const { user, error: userError } = await getUser({ req, res });
  if (user) {
    let validatedData: zod.infer<typeof schema> | undefined;
    try {
      validatedData = schema.parse(req.body, {});
    } catch (error) {
      if (error instanceof zod.ZodError) {
        res.status(422).json(error);
      }
    }
    if (validatedData) {
      try {
        const { data } = await supabaseServerClient({ req, res }).rpc('add_list', {
          user_id: user.id,
          ...validatedData,
        });
        res.json(data);
      } catch (error) {
        res.status(500).send('error adding default list');
      }
    }
  } else {
    if (userError) {
      console.error(userError);
      res.status(500).send(userError.message);
    }
  }
});
