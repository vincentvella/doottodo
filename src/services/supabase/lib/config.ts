export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.REACT_NATIVE_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.REACT_NATIVE_SUPABASE_URL || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.log('supabase config', 'Make sure you have a `.env` file to populate your variables.');
}
