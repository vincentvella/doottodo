import { supabaseServerClient } from '@supabase/auth-helpers-nextjs';
import { NextApiHandler } from 'next';
import zod from 'zod';
import { definitions } from '~/types/supabase';

const schema = zod.object({
  title: zod.string(),
});

const handler: NextApiHandler = async (req, res) => {
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
      const { data } = await supabaseServerClient({ req, res })
        .from<definitions['lists']>('lists')
        .insert([validatedData]);
      res.json(data);
    } catch (error) {
      res.status(500).send('error adding default list');
    }
  }
};

export default handler;
