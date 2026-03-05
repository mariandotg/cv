# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm install        # Install dependencies
pnpm run dev        # Start dev server at localhost:4321
pnpm run build      # Type-check (astro check) then build to ./dist/
pnpm run preview    # Preview production build locally
```

There are no tests in this project.

Linting/formatting uses Biome (`biome.json`). The project also has ESLint configured (`.eslintrc.cjs`) primarily for Astro and JSX a11y rules.

## Architecture

This is an Astro + React + Tailwind CV/portfolio site with i18n support (English and Spanish).

**i18n routing:**
- `src/pages/index.astro` — root page, always renders English (`en`) data
- `src/pages/[locale]/index.astro` — dynamic locale page; `getStaticPaths` returns paths from `staticLocalePaths` in `src/data/locales.ts`
- The default locale (`en`) is defined first in `KNOWN_LANGUAGES`; adding a new language requires adding it there

**Data flow:**
- All CV content lives in `src/data/resume.data.ts` as two typed const objects (`EN_DATA`, `ES_DATA`) exported as `RESUME_DATA[locale]`
- UI string translations (section labels, button text) are in `src/data/dictionaries.ts` as `DICTIONARIES[locale]`
- Data shape is typed in `src/models/resume.data.models.ts` (`Welcome` interface)
- Pages and section components receive locale from `Astro.currentLocale` and look up their data at render time

**Component layers:**
- `src/components/layouts/Layout.astro` — HTML shell; handles theme init via inline script, SEO meta (astro-seo), Google Analytics via Partytown
- `src/components/ui/sections/*.astro` — page sections (Social, About, WorkExp, Skills, Projects); each independently fetches its slice of `RESUME_DATA` and `DICTIONARIES` using the current locale
- `src/components/design-system/` — primitive UI components (Button, Card, Badge, Avatar, JobCard, ProjectCard) built with `class-variance-authority` + `cn()` helper
- `src/components/ui/ToggleTheme.tsx` — React island (`client:load`); theme state is stored in `localStorage` and applied by toggling the `dark` class on `<html>`; the inline script in Layout.astro applies the theme before hydration to avoid flash

**Theming:**
- Dark mode uses Tailwind's `class` strategy
- CSS custom properties for all colors are defined in `Layout.astro`'s global styles (`:root` and `.dark`)
- Custom breakpoint `smx: 480px` is defined in `tailwind.config.mjs`
- Fonts: IBM Plex Sans (sans) and IBM Plex Mono (mono), self-hosted as `.woff` in `public/fonts/`

**PDF resumes:** Stored in `public/` as `MarianoGuillaumeCV-en.pdf` and `MarianoGuillaumeCV-es.pdf`; referenced from `resumeUrl` in each locale's data object.
