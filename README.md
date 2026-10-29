# Portfolio

Single-page developer portfolio built with React 19 and Vite. Plain JSX, no TypeScript.

## Sections

- **Nav** — sticky links with active-section highlight, Resume → `public/resume.pdf`
- **Hero** — availability badge, name, role, tagline, and buttons to projects/resume
- **About** — short bio and stat chips
- **Experience** — timeline of roles plus education
- **Skills** — skills as brand-icon cards
- **Projects** — shipped work with status badges
- **Contact** — email, GitHub, LinkedIn
- **Footer** — name

## Stack

- React 19 + Vite
- Framer Motion for animations
- Plain CSS in `src/index.css` (theme tokens + layout)
- Inline SVG brand icons in `src/components/icons.jsx`

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |

Deploy: `npm run build`, then `npx wrangler deploy` (Cloudflare Workers static assets, config in `wrangler.jsonc`).

There is no test runner configured.

## Editing content

- `src/data/profile.js` — name, role, tagline, email, location
- `src/data/skills.js` — skill chips; add a matching icon in `src/components/icons.jsx`
- `src/data/projects.js` — project cards and statuses

## Structure

```
src/
  components/   Nav, Hero, About, Experience, Skills, Projects, Contact, Footer, icons, animations
  data/         Content files (profile, experience, skills, projects)
  index.css     Global styles and theme tokens (the only stylesheet)
```

`dist/` is gitignored. No CI or pre-commit hooks.
