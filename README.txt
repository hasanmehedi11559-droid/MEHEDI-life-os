Admission Tracker 
============

Files:
- index.html
- manifest.json
- service-worker.js

Put these three files in the same web/PWA folder.

IMPORTANT:
- Existing personal-data localStorage keys are preserved:
  lifeos_dob
  lifeos_display_name
  lifeos_exams
- Admission Guide data is static and separate from personal data.
- The included guide structure deliberately marks marks/seats/rules as "See official circular" where current-year verification is required. Do not publish those fields as factual current data until they are filled from the latest official circulars.
- Service worker version is time-counter-v2. It does not clear localStorage.


ABOUT PHOTO:
- mehedi.jpg is included and shown in the About section.
