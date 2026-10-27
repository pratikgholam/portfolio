# Pratik G — Portfolio

Single-page developer portfolio built with React 19 and Vite. Plain JSX, no TypeScript.

## Sections

- **Hero** — availability badge, name, role, tagline, and buttons to projects/contact
- **Toolbox** — skills as brand-icon chips
- **Projects** — shipped work with status badges
- **Contact** — email, GitHub, LinkedIn
- **Footer** — name and tagline

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

There is no test runner configured.

## Editing content

- `src/data/profile.js` — name, role, tagline, email, location
- `src/data/skills.js` — skill chips; add a matching icon in `src/components/icons.jsx`
- `src/data/projects.js` — project cards and statuses

## Structure

```
src/
  components/   Hero, Skills, Projects, Contact, Footer, icons
  data/         Content files
  index.css     Global styles and theme tokens
```

`dist/` is gitignored. No CI or pre-commit hooks.
