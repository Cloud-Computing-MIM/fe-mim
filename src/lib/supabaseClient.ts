'use client'
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

// Create the Supabase client
const supabase = createBrowserClient(supabaseUrl, supabaseKey);
export default supabase;