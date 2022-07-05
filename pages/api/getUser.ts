import Supabase from '~/services/supabase';
import { NextApiRequest, NextApiResponse } from 'next';

const fetchUserWithToken = async (token: string | string[]) => {
  if (Array.isArray(token)) {
    if (token.length) {
      return Supabase.auth.api.getUser(token[0]);
    }
  } else {
    return Supabase.auth.api.getUser(token);
  }
  throw new Error('Token not found');
};

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.token;
  if (token) {
    const { user, error } = await fetchUserWithToken(token);
    if (error) return res.status(401).json({ error: error.message });
    return res.status(200).json(user);
  }
  return res.status(404);
};

export default getUser;
