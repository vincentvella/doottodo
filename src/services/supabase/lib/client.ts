import { createClient } from '@supabase/supabase-js';
import { Storage } from '../../storage';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './config';

const Supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  localStorage: Storage,
});

export default Supabase;
