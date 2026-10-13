# pukanszkypeter.github.io

Personal portfolio and CV site for Pukánszky Péter — software engineer. 👋

[![Check](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/check.yml/badge.svg)](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/check.yml)
[![Deploy to GitHub Pages](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Live site](https://img.shields.io/badge/live-pukanszkypeter.github.io-EA580C)](https://pukanszkypeter.github.io)

## ✨ Features

- Single-page portfolio: Hero, About, Projects, Skills, Experience, Education, Contact
- "Glass & Aurora" design: glass surfaces over an animated aurora background
- Project details in a native `<dialog>` with shareable links; a swipe-to-close bottom sheet on phones
- Full i18n — English, Hungarian, and German, with a working language switcher
- Light/dark mode that follows the OS setting, with a manual toggle
- Custom 404 page
- Downloadable CV as a PDF, matching the site's design and the active language
- Open Graph / Twitter social preview tags, web app manifest, sitemap, and `robots.txt`

## 🛠️ Tech stack

- [Astro 7](https://astro.build)
- Hand-written CSS with custom-property design tokens (no CSS framework or UI library)
- TypeScript
- Deployed to GitHub Pages via GitHub Actions

## 📁 Project structure

```text
/
├── public/                  # CV PDFs, favicons, app icons, manifest, OG image, robots.txt
├── src/
│   ├── assets/              # Images processed by Astro's image pipeline
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Aurora.astro      # Decorative background blobs
│   │   ├── ThemeToggle.astro
│   │   ├── LangMenu.astro
│   │   └── sections/        # One component per page section
│   ├── i18n/
│   │   └── translations.ts  # All EN/HU/DE copy, keyed by section
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css       # Design tokens (light/dark) and shared component styles
└── astro.config.mjs
```

## 🧞 Commands

All commands run from the root of the project:

| Command           | Action                                      |
| :---------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Start the local dev server at `localhost:4321` |
| `npm run check`    | Type-check the project (`astro check`)       |
| `npm run build`    | Build the production site to `./dist/`       |
| `npm run preview`  | Preview the production build locally          |

## 🌍 Translations

All UI copy lives in `src/i18n/translations.ts`, keyed by `Lang` (`en` \| `hu` \| `de`). Elements opt into translation via a `data-i18n="section.key"` attribute; `Navbar.astro`'s script walks the DOM and applies the active language on load and on switch (the 404 page has its own small copy of that logic).

## 📄 Updating the CV PDFs

The downloadable CVs (`public/pukanszky-peter-cv-{en,hu,de}.pdf`) and the social preview image (`public/og-image.png`) are designed and exported with Claude Design, then dropped into `public/`. There is no CV source in this repo. When the site's copy changes, re-export the PDFs so they stay in sync, keep the same file names, and check each one still fits on one page.

## ✅ CI

- `.github/workflows/check.yml` — type-checks and builds on every push and pull request
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `main`
- Dependabot keeps npm packages and GitHub Actions up to date weekly
