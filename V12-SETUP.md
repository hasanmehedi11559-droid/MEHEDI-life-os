PI EduTrack V12 — True Online Realtime Community

1. Supabase project: PI EduTrack Community.
2. Run the production community SQL/schema that you prepared in the Supabase SQL Editor.
3. Authentication → Sign In / Providers → Email: keep Email provider enabled and turn OFF “Confirm email” for this no-SMS Mobile + Password mode. Save.
4. Do NOT enable Phone provider unless you later want an SMS/OTP version. Twilio is not required for this mode.
5. This build already contains the public Supabase Project URL and publishable key in supabase-config.js. Only the publishable key is allowed in the browser.
6. Deploy the whole folder to GitHub Pages/your HTTPS host.
7. Create two separate student accounts using different mobile numbers. Male accounts automatically join BOYS; female accounts automatically join GIRLS. Users cannot manually switch groups.
8. Test realtime: open the app on two devices/browsers, log into accounts in the same gender group, send a message from one, and confirm it appears on the other.
9. The Community uses Supabase Auth, Postgres, Realtime, Storage and RLS. It does not pretend localStorage is an online shared database.
10. Never put the Supabase secret/service_role key in the app.

Important: The internal Auth email is generated from the normalized mobile number and is hidden from students. The visible account identifier remains the mobile number.
