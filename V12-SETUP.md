PI EduTrack V12 — True Online Realtime Community

1. Create a Supabase project.
2. In SQL Editor, run supabase-schema.sql.
3. Open Project Settings → API and copy the Project URL and anon/publishable key into supabase-config.js.
4. Deploy the whole folder to GitHub Pages/your HTTPS host.
5. Supabase Auth: enable Phone provider. If you want direct phone+password without OTP, configure phone verification according to your Supabase project policy; otherwise users will verify OTP after signup.
6. Create the owner/admin account normally, then promote it with the SQL comment at the end of supabase-schema.sql (run as project owner in SQL Editor).
7. NEVER put the Supabase service_role/secret key in the app.

When configured, V12 uses Supabase Auth, Postgres, Realtime, Storage and RLS. It does NOT pretend localStorage is an online shared database. If the backend is not configured, the Community remains clearly offline/unavailable instead of faking cross-device sync.
