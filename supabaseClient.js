import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL='https://haxtodyurppzirfndwky.supabase.co';
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhheHRvZHl1cnBwemlyZm5kd2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NDAxOTksImV4cCI6MjA1NTAxNjE5OX0.LAMRfENLxOFkOX87qDidQDiSsd9aemgo7MnOQtgyl-I';

export const supabase=createClient(SUPABASE_URL,SUPABASE_KEY);