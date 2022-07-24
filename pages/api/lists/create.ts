import { supabaseServerClient } from '@supabase/auth-helpers-nextjs';
import { NextApiHandler } from 'next';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required(),
});

const handler: NextApiHandler = async (req, res) => {
  let validatedData: yup.InferType<typeof schema> | undefined;
  try {
    validatedData = schema.validateSync(req.body, { stripUnknown: true });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      res.status(422).json(error);
    }
  }
  if (validatedData) {
    try {
      const { data } = await supabaseServerClient({ req, res })
        .from('lists')
        .insert([validatedData]);
      res.json(data);
    } catch (error) {
      res.status(500).send('error adding default list');
    }
  }
};

export default handler;
