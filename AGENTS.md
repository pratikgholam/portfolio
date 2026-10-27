# AGENTS.md

Single-page Vite + React portfolio. Plain JSX (no TypeScript), ESM (`"type": "module"`).

## Commands

- `npm run dev` — start Vite dev server (HMR)
- `npm run build` — build static output to `dist/` (vite uses rolldown)
- `npm run preview` — serve `dist/` locally to verify the production build
- `npm run lint` — ESLint over the project (`eslint.config.js` flat config; `dist` is ignored)

No test script and no test runner is installed. Do not add test commands unless a runner is added first.

## Structure

- `index.html` — app shell; mounts `#root` and loads `/src/main.jsx`
- `src/main.jsx` — React 19 entrypoint (`StrictMode` + `createRoot`)
- `src/App.jsx` — composes `Hero`, `Skills`, `Projects`, `Socials`
- `src/components/` — presentational components with co-located `*.module.css`
- `src/data/` — `profile.js`, `skills.js`, `projects.js` (content data)
- `dist/` — build output; gitignored, never commit
- `node_modules/` — already installed; gitignored

## Notes

- Animations use Framer Motion (`framer-motion`); shared motion variants live in `src/components/animations.js`. ESLint's `react-refresh/only-export-components` rule means non-component exports (SVG icons) must live in their own file — do not export helpers from component files (`src/components/icons.jsx`).
- Skills render as icon cards (`src/components/Skills.jsx`), not progress bars. Add a skill by updating `src/data/skills.js` + a matching icon in `icons.jsx`.
- There is no navbar. Contact links live in `src/components/Contact.jsx` (id `contact`); the footer only shows the name and tagline. Hero is centered: status pill, name, role, bold claim, then CTA buttons.
- React inline styles turn bare numbers into **pixels** (`fontSize: 0.95` → `0.95px`). Always use unit strings like `"1.05rem"` in `style={{ ... }}`. Prefer CSS classes for repeated type/spacing.
- `Grounded QA` is in progress (not complete) — reflect that in any copy or status badges.
- ESLint uses the flat config format (`eslint.config.js`), not `.eslintrc`.
- Browser globals are enabled; JSX is parsed. If adding files, keep them `.jsx`.
- No CI, no pre-commit, no `opencode.json`, no codegen/migrations.
