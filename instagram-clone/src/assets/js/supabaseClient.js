// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfrmghncuadmanfnzfqh.supabase.co'; // Replace with your Project URL
const supabaseAnonKey = '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mcm1naG5jdWFkbWFuZm56ZnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NTM0NjAsImV4cCI6MjA1MTEyOTQ2MH0.OPGiKnG9heSLCJKCa7UXiNjqpxQO8YrvVvgaFKFmGlA>'; // Replace with your Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
