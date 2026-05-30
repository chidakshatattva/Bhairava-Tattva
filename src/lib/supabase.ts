import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zdmabhrbudhlywzrkmeq.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkbWFiaHJidWRobHl3enJrbWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzU5NTUsImV4cCI6MjA5NTY1MTk1NX0.0WswHuPNvTU41VnNi8dtVbtbuRhOAhfDlEVTMQ3kmq0'

export const supabase = createClient(supabaseUrl, supabaseKey)
