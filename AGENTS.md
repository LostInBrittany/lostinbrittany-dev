# AGENTS Guide

## Project Overview
- **Name**: LostInBrittany.dev
- **Type**: Static site generated with [Eleventy](https://11ty.dev/) using WebC components.
- **Purpose**: Source for Horacio Gonzalez's multilingual tech blog and talks archive.

## Key Directories
- `_components/`: Global WebC components (header, footer, post preview, talk detail, etc.). Automatically discovered via Eleventy's WebC plugin.
- `_includes/layouts/`: Page-level WebC layouts (`home`, `post`, `talk`, `talks`).
- `content/`: Markdown/WebC content organized by locale (`en`, `fr`, `es`) and section (`talks`, `slides`). Talk entries live under `content/talks/<year>/` with shared defaults in `content/talks/talks.json`.
- `_data/`: Global JSON data (site metadata and navigation links per locale).
- `css/` and `img/`: Static assets passed through to the build output.
- `_site/`: Generated output folder (overwritten by Eleventy builds).

## Configuration
- `.eleventy.js` registers the WebC plugin, watches static assets for live reload, adds an `excerpt(html, url)` helper using JSDOM, and passthrough-copies `css/` and `img/`.
- `package.json` exposes `npm run dev` (Eleventy with live server) and `npm run build` (static build). Dev dependencies: Eleventy, WebC plugin, JSDOM.

## Common Tasks
1. **Install**: `npm install`
2. **Develop locally**: `npm run dev` → serves site with live reload at http://localhost:8080/ by default.
3. **Build for production**: `npm run build` → outputs to `_site/`.
4. **Add content**:
   - Blog post: add Markdown file under `content/<locale>/` with front matter (`layout`, `title`, `date`, `permalink`, `tags`, `locale`).
   - Talk: add Markdown in `content/talks/<year>/` with front matter consumed by `talk-detail` component (event, links, etc.).

## Conventions & Notes
- Use ISO date strings in front matter so Eleventy collections sort correctly.
- Navigation labels and URLs are defined in `_data/links.json`; update per locale when adding sections.
- The home layout filters `collections.posts` by `locale` and shows the five most recent posts.
- Talk detail pages expect cover images in `img/talks/<year>/<slug>.jpg` (slug derived from URL).
- Avoid editing `_site/`; it is generated.
- Keep code ASCII; add concise comments only for non-obvious logic per repo guidelines.

## Deployment
- Build artifacts can be deployed anywhere static files are served. Repository includes a Netlify deploy button; default build command is `npm run build` and publish directory `_site/`.

