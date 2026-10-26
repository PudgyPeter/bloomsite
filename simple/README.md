# Bloom - simplified website

A small, no-JavaScript version of the Bloom website, built for a school submission. It is plain
HTML and CSS: no build step, no frameworks and no script files.

Open `index.html` in any browser, or serve the folder if you prefer:

```bash
npm start
# then visit http://localhost:8000/simple/
```

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: who the band are, latest release, lineup and the contact form |
| `members.html` | Profiles of all five members |
| `music.html` | Discography with full tracklists and links to the streaming services |

## Folder structure

```text
simple/
  index.html
  members.html
  music.html
  assets/
    css/style.css        the only stylesheet, linked by every page
    fonts/               two self-hosted .woff2 font files
    images/              resized band photos and album artwork
  testing/
    cross-browser-testing-1.md
    cross-browser-testing-2.md
    cross-browser-results.json
    validator-results.json
    screenshots/         testing evidence
```

## How the site meets the checklist

| # | Requirement | Where |
| --- | --- | --- |
| 1 | Submitted by the due date | - |
| 2 | At least three pages | `index.html`, `members.html`, `music.html` |
| 3 | Name and purpose clearly communicated | Site title, hero heading and intro paragraph on every page |
| 4 | File and naming standards | Images in `assets/images/`, fonts in `assets/fonts/`, one CSS file in `assets/css/`, descriptive lowercase filenames, home page is `index.html`, every page links the same stylesheet |
| 5 | Essential declarations | `<!doctype html>`, `<meta charset="UTF-8">`, one `<link rel="stylesheet">` and the viewport meta tag in every page |
| 6 | Design standards | Clear condensed display font with a readable body font, consistent dark palette with one accent colour, band photos and artwork, identical navigation on all pages, CSS grid and flexbox layout |
| 7 | Form | `index.html#contact`: First name, Last name, Email address and Comments, all `required`, plus Submit and Reset buttons |
| 8 | Code quality | One stylesheet organised into numbered sections, two-space indentation, descriptive class names, comments on each CSS section, short lines, no inline styles or scripts |
| 9 | Tested in two browsers | `testing/cross-browser-testing-1.md` (Chrome), `testing/cross-browser-testing-2.md` (Firefox) |
| 10 | Form and validator screenshots | `testing/screenshots/form-required-prompt.png`, `form-filled.png`, `w3c-html-*.png` |

## Validation

All three pages return **no errors and no warnings** from the W3C Nu HTML Checker. The stylesheet
passes the W3C CSS Validator with no errors. Saved results are in `testing/validator-results.json`
and the screenshots folder.

## Notes for the marker

- The form is a demonstration only. It uses `action="mailto:..."` so a valid submission opens the
  visitor's mail program; nothing is stored or sent by a server.
- The required attributes are enforced by the browser itself, so the "Please fill out this field"
  prompt appears with no JavaScript.
- Fonts are stored in the project rather than loaded from Google, so the site works offline and
  uses a single external stylesheet.
