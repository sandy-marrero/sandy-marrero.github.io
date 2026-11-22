# sandy-marrero.github.io

Personal portfolio and interactive resume for **Sandy Marrero Hernández** — Software Engineer focused on iOS and Android mobile app development and full-stack engineering.

## Architecture & Tech Stack

Designed as a **zero-build, GitHub Pages-native** static site inspired by classic Facebook profile layouts, modernized for 2026:

- **[`data/profile.js`](data/profile.js)** — Single source of truth for experience, skills, projects, education, and links.
- **[`index.html`](index.html)** — Semantic HTML5 shell with Open Graph metadata, Schema.org `Person` JSON-LD, and Google Fonts (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`).
- **[`css/styles.css`](css/styles.css)** — Lightweight Vanilla CSS with custom properties, classic two-column profile layout, responsive mobile rules, and a dedicated `@media print` stylesheet for saving an ATS-friendly PDF resume directly from the browser.
- **[`js/app.js`](js/app.js)** — Native ES Module renderer supporting profile tabs, instant global search (`/`), interactive skill filtering, and one-click email copy.

## Updating Your Resume

1. Edit [`data/profile.js`](data/profile.js) (`experience`, `skills`, `featuredProjects`, or `education`).
2. Preview locally:
   ```bash
   python3 -m http.server 8000
   ```
3. Commit and push to `main` — GitHub Pages deploys automatically to `https://sandy-marrero.github.io/`.