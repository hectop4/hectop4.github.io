# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:4321
npm run build        # production build → dist/
npm run preview      # preview the built site locally
```

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically on every push to `master`.

**One-time setup required:** In the GitHub repo → Settings → Pages → Source, select **GitHub Actions**.

**Contact form:** Replace `YOUR_FORM_ID` in `src/pages/index.astro`, `en/index.astro`, and `pt/index.astro` with a real Formspree form ID (free at formspree.io).

## Architecture

**Stack:** Astro 4 · Tailwind CSS 3 · TypeScript · Vanilla JS (no frameworks)

**Site structure:**
- `/` — Personal presentation page (Spanish, default)
- `/en/` — English version of the main page
- `/pt/` — Portuguese version
- `/blog/` — Blog index: 4 categories, each showing 3 latest posts
- `/blog/[category]/` — Full category listing
- `/blog/[category]/[slug]/` — Individual post rendered from Markdown

**Content collections** (`src/content/`):
| Folder | Purpose |
|---|---|
| `projects/` | Engineering projects |
| `events/`   | Conferences, hackathons, competitions |
| `thoughts/` | Personal reflections |
| `reviews/`  | Books, movies, series |

Each `.md` file needs this frontmatter:

```markdown
---
title: "Post title"
date: 2025-04-26
excerpt: "One or two sentence summary shown in cards."
lang: es          # es | en | pt
tags: ["tag1"]    # optional

# Only for reviews:
item: "Title of the book/movie/series"
itemType: book    # book | movie | series
itemAuthor: "Author name"
rating: 5         # 1–5
spoilers: true    # optional, default false — shows spoiler warning badge/banner
---
```

**i18n** (`src/i18n/`): UI strings in `ui.ts` for ES/EN/PT. `utils.ts` provides `getLangFromUrl()`, `useTranslations()`, `formatDate()`, `readingTime()`. The default locale is Spanish (no URL prefix). Adding a new translatable string requires updating all three language objects in `ui.ts`.

**Theme (dark/light):** Controlled by the `dark` class on `<html>`. CSS variables defined in `src/styles/global.css` under `:root` (light) and `.dark` (dark). The theme-init script in `BaseLayout.astro` prevents flash on load.

**Design tokens** (CSS variables):
| Variable | Purpose |
|---|---|
| `--bg` / `--bg2` | Page background / secondary background |
| `--text` / `--text-muted` | Body text / secondary text |
| `--accent` | Warm gold — buttons, links, highlights |
| `--border` | Card borders, dividers |

**Typography:** Playfair Display (serif) for all headings, Inter (sans-serif) for body. Post content is styled via the `.prose-hjp` class in `global.css`.

**Assets:** Served from `public/assets/images/` and `public/assets/docs/`. Profile photo is at `public/assets/images/profile-picture.png`.
