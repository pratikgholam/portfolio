# AGENTS.md

Single-page Vite + React portfolio. Plain JSX (no TypeScript), ESM (`"type": "module"`).

## Commands

- `npm run dev` — start Vite dev server (HMR)
- `npm run build` — build static output to `dist/` (vite uses rolldown)
- `npm run preview` — serve `dist/` locally to verify the production build
- `npx wrangler deploy` — build must run first (`npm run build`); `wrangler.jsonc` serves `./dist` as Cloudflare Workers static assets and includes a `previews.vars` block (required by `npx wrangler preview`). Wrangler is not a devDependency (`npx` fetches it). No CI.
- `npm run lint` — ESLint over the project (`eslint.config.js` flat config; `dist` is ignored)

No test script and no test runner is installed. Do not add test commands unless a runner is added first.

## Structure

- `index.html` — app shell; mounts `#root` and loads `/src/main.jsx`
- `src/main.jsx` — React 19 entrypoint (`StrictMode` + `createRoot`)
- `src/App.jsx` — composes `Nav`, `Hero`, `About`, `Experience`, `Skills`, `Projects`, `Contact`, `Footer` (in that order)
- `src/components/` — presentational components; all styling is global in `src/index.css` (the only stylesheet) plus inline styles — there are no per-component CSS files
  - `Nav.jsx` — sticky top nav (brand, links About/Experience/Skills/Projects/Contact, Resume → `/resume.pdf` new tab), mobile hamburger with `aria-expanded`/`aria-controls`, Esc closes + returns focus
  - `Hero.jsx` — status pill, name, role, tagline, CTAs ("See my work", "Download resume")
  - `About.jsx` — about text + stat chips (5+ years, C# / .NET Core, SQL Server, Remote-friendly)
  - `Experience.jsx` — vertical timeline cards (company, title, dates, bullets, tech tags) + education line
  - `Skills.jsx` — skill chips as icon cards (title "Skills")
  - `Projects.jsx` — project cards; tech pills always visible under the title; GitHub button (+ Live demo when `demo` is set). The "Details" button is hidden for now (no detail content yet) — `openId` state and the accordion markup stay dormant in the component; restoring the button re-enables it
  - `Contact.jsx` — email, GitHub, LinkedIn cards
  - `Footer.jsx` — name only (no tagline)
  - `animations.js` — shared Framer Motion variants
  - `icons.jsx` — inline SVG brand icons only (non-component exports must live here per ESLint `react-refresh/only-export-components`)
- `src/data/` — content data
  - `profile.js` — name, role, tagline, email
  - `experience.js` — `experience[]` (4 roles, most recent first, 2–3 verbatim bullets + tech tags each) and `education` (BE Information Technology, Mumbai University, 2015-2019)
  - `skills.js` — skill chips grouped conceptually: Backend (C#, .NET Core, ASP.NET MVC, REST APIs), Data (SQL Server, PostgreSQL, SQLite), Frontend (React.js, JavaScript), Tooling (Azure DevOps, GitHub Copilot). No AI category, no Git. Icon-less skills use a badge fallback.
  - `projects.js` — project cards (title, status, repo, demo [null if none], problem, built, decisions, evaluated, tech). Grounded QA is in progress — state "Done: project structure. Pending: implementation, evaluation." plainly; mark AI items as PLANNED. Capitalize sentence starts ("A REST API…", "A document Q&A API…").
- `public/` — static assets; `resume.pdf` lives here and is linked from Nav ("Resume") and Hero ("Download resume") in a new tab
- `dist/` — build output; gitignored, never commit
- `node_modules/` — already installed; gitignored

## Notes

- Animations use Framer Motion (`framer-motion`); shared motion variants live in `src/components/animations.js`. ESLint's `react-refresh/only-export-components` rule means non-component exports (SVG icons) must live in their own file — do not export helpers from component files (`src/components/icons.jsx`).
- Skills render as icon cards (`src/components/Skills.jsx`), not progress bars. Add a skill by updating `src/data/skills.js` + a matching icon in `icons.jsx`.
- Project cards: tech pills render under the title and are always visible. The "Details" trigger button is currently removed; the dormant accordion below each card (Built, Key decisions, Tested/evaluated, Architecture notes, Screenshot/diagram slot, Challenges, What I learned) opens from a single Details button with an underlined "Collapse" link — if you restore it, do not add a second collapse button at the bottom.
- There is a sticky navbar (`src/components/Nav.jsx`). Link order: About, Experience, Skills, Projects, Contact. Nav highlight uses IntersectionObserver (`scroll-margin-top: 90px` on sections keeps headings visible below the sticky nav).
- Contact links live in `src/components/Contact.jsx` (id `contact`); the footer only shows the name.
- React inline styles turn bare numbers into **pixels** (`fontSize: 0.95` → `0.95px`). Always use unit strings like `"1.05rem"` in `style={{ ... }}`. Prefer CSS classes for repeated type/spacing.
- `Grounded QA` is in progress (not complete) — reflect that in any copy or status badges.
- ESLint uses the flat config format (`eslint.config.js`), not `.eslintrc`.
- Browser globals are enabled; JSX is parsed. If adding files, keep them `.jsx`.
- No CI, no pre-commit, no `opencode.json`, no codegen/migrations.
