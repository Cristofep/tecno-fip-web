import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://undqpvzokqkgufkkyuuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZHFwdnpva3FrZ3Vma2t5dXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTMxMjUsImV4cCI6MjA2MTAyOTEyNX0.LQtqXM4hfFay5i1nhT2LqA7xNmHa5KBr51vVnI49OZc'
export const supabase = createClient(supabaseUrl, supabaseKey)
