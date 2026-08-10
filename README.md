# Tuam Records Project

A public, source-led archive of documents, claims, corrections, official records and forensic updates relating to the Tuam Mother and Baby Home.

Live site: https://tuamrecordsproject.ie (once domain is connected)

See `AGENTS.md` for the full project brief, content rules, and current status.

## What this is

A static website (Jekyll, hosted on GitHub Pages). No WordPress, no database, no admin login to secure. Pages are built directly from this repo.

## Structure

- `_config.yml`: site settings
- `_layouts/default.html`: shared page shell (header, nav, footer)
- `_includes/nav.html`: the "Evidence Pathway" navigation
- `_includes/footer.html`: shared footer and disclaimer
- `assets/css/style.css`: all site styling (design tokens at the top)
- `assets/images/`: site images
- `index.html`, `start-here.html`, `methodology.html`, `documents.html`, `timeline.html`, `claims.html`, `contact.html`: the seven core pages

## Editing content

Each page is a plain HTML file with a small front-matter block at the top (between `---` lines) and normal HTML below. To add a new document to the library, add a new `<tr>` row to the relevant table in `documents.html`, following the existing pattern (ID, title, type, date, source link).

## Rules for content on this site

- Every document, quote and figure must be dated and sourced. No invented figures, no placeholder contact details, no stock "team" bios.
- The same evidence standard applies to every claim, regardless of who it favours. See `methodology.html`.
- No inflammatory language (see `methodology.html` for the word list to avoid).

## Local preview (optional)

If you have Ruby and Jekyll installed:

```
bundle exec jekyll serve
```

Otherwise, just push to GitHub. GitHub Pages builds Jekyll sites automatically.

## Deploying / connecting the domain

1. In this repo's Settings, then Pages, set the source to the `main` branch.
2. Once the site builds, add `tuamrecordsproject.ie` as a custom domain in the same Pages settings.
3. At your domain registrar, point the domain's DNS to GitHub Pages (GitHub will show you the exact records to add).
