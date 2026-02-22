# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project layout

- The actual Next.js application lives in the `tivess` subfolder. The repository root `package.json` only declares a `swiper` dependency and is not where you run dev/build commands.
- The app uses the Next.js App Router (`app` directory) with TypeScript and Tailwind CSS v4 (via the `@import "tailwindcss";` directive in `app/globals.css`).
- High‑level structure under `tivess`:
  - `app/layout.tsx` – global HTML shell, font setup, and layout that wraps every page with `Navbar` and `Footer`.
  - `app/page.tsx` – marketing/landing page for the streaming service (hero video banner, categories carousel, devices grid, FAQ accordion, pricing, and CTA).
  - `app/movies/page.tsx` – main movies discovery page with multiple Swiper carousels (featured hero slider, genres, popular genres, trending, and new releases).
  - `app/movie/page.tsx` – single movie details page driven by query‑string data from the movies page.
  - `app/component/Navbar.tsx` – top navigation bar, used globally via `layout.tsx`.
  - `app/component/Footer.tsx` – global footer with navigation, social links, and legal links.
  - `app/component/btns/AllBtns.tsx` – shared button components (`SolidMainPlayBtn`, `SolidWatchBtn`, `SolidMainBtn`, `OutlineBtn`).
  - `app/globals.css` – Tailwind setup and global styles, including Swiper overrides and some custom utility classes.
  - `next.config.ts` – minimal Next config (currently default, no custom options).
  - `eslint.config.mjs` – ESLint configuration based on `eslint-config-next` (core‑web‑vitals + TypeScript) with explicit global ignores for build artifacts.

## Development commands

All commands below should be run from the `tivess` directory unless otherwise noted.

### Install dependencies

```bash
cd tivess
npm install
```

(You can also use `yarn`, `pnpm`, or `bun` instead of `npm` if you prefer, matching the examples in `tivess/README.md`.)

### Run the development server

```bash
cd tivess
npm run dev
```

This starts the Next.js dev server (by default on http://localhost:3000). The main entry page is `app/page.tsx`.

### Build for production

```bash
cd tivess
npm run build
```

This runs `next build` using `next.config.ts` in the `tivess` folder.

### Start the production server

After building:

```bash
cd tivess
npm run start
```

This runs `next start` with the built app in `.next`.

### Linting

To lint the entire project using the configured Next + TypeScript ESLint setup:

```bash
cd tivess
npm run lint
```

To lint a specific file (useful when working on a single component):

```bash
cd tivess
npx eslint app/component/Navbar.tsx
```

Adjust the path to target the file you are editing.

### Tests

There is currently no test script defined in `tivess/package.json` and no test framework configured. If you introduce tests (e.g., Jest, Vitest, or Playwright), add the appropriate `test` script to `tivess/package.json` and document how to run individual tests here.

## High‑level architecture

### App shell and layout

- `app/layout.tsx` is the central layout component. It:
  - Imports several Google fonts (`Geist`, `Geist_Mono`, `Hanken_Grotesk`, `Bricolage_Grotesque`, `Space_Grotesk`) and exposes them as CSS variables.
  - Imports global styles from `app/globals.css`.
  - Wraps all pages with a shared `Navbar` at the top and `Footer` at the bottom.
  - Sets the global `<html>` language and the app‑wide `metadata` (title and description) for SEO.

When modifying fonts, global theming, or the persistent navigation/footer experience, `app/layout.tsx` and `app/globals.css` are the primary places to make changes.

### Routing and pages

The app uses the App Router with the following key routes:

- `/` → `app/page.tsx`
  - Client component (`'use client'`) that manages UI state for FAQs, pricing plan selection, and hero video playback via React hooks.
  - Uses Swiper (`swiper/react` with `Autoplay`, `Navigation`, `Pagination` modules) to render a horizontal carousel of static categories.
  - Contains the primary marketing content: hero video background, CTA button linking to `/movies`, device capability grid, FAQ accordion, pricing toggle/cards, and a final CTA section.

- `/movies` → `app/movies/page.tsx`
  - Also a client component, focused on content discovery.
  - Defines several in‑memory data collections: `featuredMovies`, `genreMovies`, `topMovies`, `trendingMovies`, and `newReleases`.
  - Uses multiple Swiper instances for:
    - A hero banner carousel of `featuredMovies`.
    - A “Our Genres” carousel (`genreMovies`) showing 2x2 image grids per genre.
    - A “Popular Genres” carousel (`topMovies`) with badge labels.
    - “Trending Now” and “New Releases” carousels showing individual movie cards.
  - The "Play Now" button in the hero section navigates to `/movie` with the movie object encoded into the query string (see below).

- `/movie` → `app/movie/page.tsx`
  - Client component that renders details for a single movie.
  - Reads the `data` query parameter via `useSearchParams` from `next/navigation` and parses it as JSON inside a `useMemo` hook to construct a strongly‑typed `MovieData` object.
  - Fills in default values (release year, languages, ratings, genres, director, music, cast, reviews) when they are missing from the passed object, so callers only need to send core fields (`title`, `description`, `image`, `videoUrl`).
  - Renders:
    - A hero video banner (using `movie.videoUrl` and `movie.image` as poster) with playback/mute controls and CTA buttons (`SolidMainPlayBtn`, `SolidWatchBtn`).
    - A left column with description, horizontally scrollable cast avatars, and paged reviews.
    - A right column with release year, languages, ratings visualized as star rows, genres, director info, and music info.
    - A CTA section similar to the landing page.

**Important coupling:** Navigation to `/movie` currently passes the entire movie object via the `data` query string, encoded with `JSON.stringify`. If you change the shape of the movie data used in `app/movies/page.tsx` or other callers, you should:

- Keep the payload JSON‑serializable.
- Update the `MovieData` interface in `app/movie/page.tsx` to reflect new fields.
- Adjust the default‑value logic in the `useMemo` block to avoid runtime errors when fields are absent.

### Shared UI components

- `app/component/btns/AllBtns.tsx` centralizes the core button styles for the app:
  - `SolidMainPlayBtn` – red primary button with play icon.
  - `SolidWatchBtn` – white button with TV icon for “watch party”/secondary actions.
  - `SolidMainBtn` – solid red primary button without icon.
  - `OutlineBtn` – neutral outlined button.

These components accept a `title` and optional `onClick`, plus spread any extra props onto the underlying `<button>`. Prefer using these instead of ad‑hoc buttons to stay visually consistent.

- `Navbar` (`app/component/Navbar.tsx`):
  - Fixed at the top via the layout, with a blurred black background.
  - For desktop, centers navigation links (Home, Movies & Shows, Support, Subscriptions) between the logo and right‑aligned icon buttons.
  - For mobile, toggles a slide‑in drawer menu; when open, it locks `document.body.style.overflow` to prevent background scrolling.
  - Some routes linked here (`/support`, `/subscriptions`) do not yet have corresponding pages; if you add those routes, wire them under `app/`.

- `Footer` (`app/component/Footer.tsx`):
  - Static columns for Home/Movies/Shows/Support/Subscription sections, plus social and legal links.
  - The year and brand name are hard‑coded (`©2025 TiveesMedia`), so if you rebrand or want a dynamic year, this is where to change it.

### Styling and theming

- `app/globals.css`:
  - Imports Tailwind v4 and sets CSS variables for `--background` and `--foreground`, with a dark‑mode override using `prefers-color-scheme: dark`.
  - Defines an inline Tailwind theme using the font variables created in `layout.tsx`.
  - Sets the `body` background to black and uses the Hanken Grotesk font by default.
  - Includes Swiper‑specific overrides (e.g., `.swiper-button-next .swiper-navigation-icon`) and custom classes `.mySwiper1` / `.mySwiper2` to toggle visibility for different Swiper instances.

When adjusting global look‑and‑feel, typography, or carousel chrome, prefer editing `globals.css` and the font setup in `layout.tsx` rather than scattering styles across components.

## Notes for future changes

- If you restructure routes (e.g., move from `/movie` to dynamic segments like `/movies/[id]`), ensure navigation in `app/movies/page.tsx` and other callers is updated, and consider replacing query‑string JSON with standard URL params plus server/client data fetching.
- Keep Swiper usage centralized and consistent; if you introduce new carousels, follow the existing patterns for modules (`Autoplay`, `Navigation`, `Pagination`) and breakpoints to maintain a coherent UX.
- Before adding tests, decide on a stack (e.g., React Testing Library with Jest for components, or Playwright for end‑to‑end) and document the scripts and typical commands in this file once they exist.
