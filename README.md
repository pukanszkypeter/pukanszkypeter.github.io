# pukanszkypeter.github.io

Personal portfolio and CV site for Pukánszky Péter — software engineer. 👋

[![Check](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/check.yml/badge.svg)](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/check.yml)
[![Deploy to GitHub Pages](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/pukanszkypeter/pukanszkypeter.github.io/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Live site](https://img.shields.io/badge/live-pukanszkypeter.github.io-EA580C)](https://pukanszkypeter.github.io)

## ✨ Features

- Single-page portfolio: Hero, About, Projects, Skills, Experience, Education, Contact
- Full i18n — English, Hungarian, and German, with a working language switcher
- Light/dark mode
- Downloadable CV as a PDF, matching the site's design and the active language
- Open Graph / Twitter social preview tags, sitemap, and `robots.txt`

## 🛠️ Tech stack

- [Astro 7](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme`, no `tailwind.config.js`)
- TypeScript
- Deployed to GitHub Pages via GitHub Actions

## 📁 Project structure

```text
/
├── public/                  # Static assets, CV PDFs, robots.txt, OG image
├── cv-source/               # HTML/CSS source used to generate the CV PDFs (not routed by Astro)
├── src/
│   ├── assets/              # Images processed by Astro's image pipeline
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── sections/        # One component per page section
│   ├── i18n/
│   │   └── translations.ts  # All EN/HU/DE copy, keyed by section
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css       # Design tokens (colors, spacing) as Tailwind v4 @theme
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

All UI copy lives in `src/i18n/translations.ts`, keyed by `Lang` (`en` \| `hu` \| `de`). Elements opt into translation via a `data-i18n="section.key"` attribute; `Navbar.astro`'s script walks the DOM and applies the active language on load and on switch.

## 📄 Updating the CV PDFs

The downloadable CVs are generated from the HTML/CSS in `cv-source/`, rendered to PDF with headless Chromium-based browser and placed in `public/`. After editing a `cv-source/*.html` file, regenerate its PDF and verify it still fits on one page before committing.

## ✅ CI

- `.github/workflows/check.yml` — type-checks and builds on every push and pull request
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `main`
- Dependabot keeps npm packages and GitHub Actions up to date weekly
