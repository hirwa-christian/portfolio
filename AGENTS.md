# AI Agent Guide for Portfolio App

## Project overview
- React + TypeScript portfolio website.
- Uses Tailwind CSS imports in `index.css` and `framer-motion` for animation.
- Static content is driven by `lib/portfolioData.ts`.
- The app renders from `index.tsx` into a single-page portfolio layout.

## Key files
- `package.json`
  - Contains dependencies only.
  - No `scripts` section is present, so do not assume a build or dev command without asking.
- `index.tsx`
  - Root entry point that renders `<App />`.
- `App.tsx`
  - Composes top-level layout and page sections.
- `components/Layout.tsx`
  - Contains navigation, scroll progress bar, mobile menu, theme toggle, and footer.
- `components/theme/ThemeProvider.tsx`
  - Manages dark/light theme state and prevents hydration mismatch.
- `lib/portfolioData.ts`
  - Stores all portfolio content, experience, skills, projects, and education data.
- `lib/downloadResume.ts`
  - Uses portfolio data to generate a client-side text resume download.
- `index.css`
  - Defines CSS variables, dark theme overrides, custom scrollbars, and imports Tailwind.

## Agent guidance
- Keep edits aligned with the portfolio concept: a personal single-page website with hero, about, skills, experience, projects, education, and contact sections.
- Prefer updating structured data in `lib/portfolioData.ts` for content changes.
- Do not add new global CSS frameworks or build pipeline assumptions without confirming the project toolchain.
- Use existing CSS variables and Tailwind class conventions when adjusting styles.
- Keep the theme logic in `ThemeProvider` consistent; it intentionally delays render until mounted.
- Avoid adding runtime dependencies unless the user explicitly requests them.

## When in doubt
- Ask the user before introducing new tooling or build config.
- Confirm if the repository is intended to be a static portfolio site before adding routing, server-side code, or new architecture.
- If a task requires running or building the project, note that there is no `scripts` field in `package.json` and request the correct project command.
