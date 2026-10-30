# Sisira V — Personal Portfolio

A responsive portfolio website built with React, TypeScript, and Vite. The visual direction is warm cream, black typography, and muted olive accents.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in your terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local address printed in your terminal.

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`.

## Deploy to Vercel

1. Create a new GitHub repository named `sisira-portfolio`.
2. Push this project to that repository.
3. In https://vercel.com/, choose **Add New → Project** and import the repository.
4. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
5. Click **Deploy**.

Each push to the connected branch will trigger a new deployment.

## Personalise before publishing

- `src/App.tsx`: edit biography, project details, skills, internship descriptions, and links.
- `public/resume.pdf`: replace with your latest résumé PDF (the supplied résumé is included as a starting point).
- Update GitHub and LinkedIn links in the contact section if they change.
- Add repository links to projects where the source code is public. Unavailable links are intentionally not fabricated.
- Confirm that you want your email address publicly visible before publishing.

## Notes

- No backend or environment variables are required.
- The résumé link opens `/resume.pdf`.
- The portfolio does not claim that unfinished project features are complete.
