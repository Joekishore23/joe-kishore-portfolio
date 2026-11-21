# Joe Kishore S – Portfolio
React + Vite + Tailwind CSS v4 + Framer Motion + Lucide.

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in /dist

Edit everything in `src/data/content.js` (profile, links, skills, projects, timeline).
Replace each project's `demo` / `github` with the real repo and live URLs.
Add project screenshots in `public/` and set `image: "/name.png"` on a project.

## Contact form (messages go to your inbox)
1. Go to https://web3forms.com, enter joekishore.it.23@gmail.com and get your free Access Key by email.
2. Copy `.env.example` to `.env` and paste the key: `VITE_WEB3FORMS_KEY=your_key`
3. Restart `npm run dev`. When deploying (Vercel/Netlify), add the same variable in project settings.
