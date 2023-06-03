import { getUser, supabaseServerClient, withApiAuth } from '@supabase/auth-helpers-nextjs';
import zod from 'zod';
import { addTodo } from '~/features/todos/validations';

export default withApiAuth(async (req, res) => {
  const { user, error: userError } = await getUser({ req, res });
  if (user) {
    let validatedData: zod.infer<typeof addTodo> | undefined;
    try {
      validatedData = addTodo.parse(req.body, {});
    } catch (error) {
      if (error instanceof zod.ZodError) {
        res.status(422).json(error);
      }
    }
    if (validatedData) {
      try {
        const { data, error } = await supabaseServerClient({ req, res }).rpc('add_task', {
          user_id: user.id,
          ...validatedData,
        });
        res.json(data);
        console.error(error);
      } catch (error) {
        res.status(500).send('error adding task');
      }
    }
  } else {
    if (userError) {
      console.error(userError);
      res.status(500).send(userError.message);
    }
  }
});
