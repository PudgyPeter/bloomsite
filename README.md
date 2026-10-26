# BLOOM — Official Band Website

Melodic hardcore from Sydney's northern beaches since 2017. Five schoolfriends, one band.

## Project Overview

This is a static HTML/CSS/JavaScript website showcasing Bloom's music, members, and discography. The site uses vanilla JavaScript with no build step required.

**Live site:** https://pudgypeter.github.io/bloomsite/

Hosted on GitHub Pages (branch `main`, root folder). Pushing to `main` republishes automatically.

## Quick Start

```bash
# Open in browser (no server required)
open index.html
# or
start index.html
```

The site runs entirely client-side using standard web technologies - perfect for school projects without hosting requirements.

## Structure

- `index.html` — Homepage with band bio, lineup, featured release and contact form
- `members.html` — Detailed member profiles with tabbed content
- `music.html` — Discography catalog with embedded Spotify players and lyrics

All pages share `assets/styles.css` and `assets/script.js`; images live in `assets/img/`.

## Assets

### Images (folder: `assets/img/`)
- All artwork and photos are WebP (quality 82, alpha preserved where present)
- `og-image.webp` is the 1200x630 social sharing card
- Aspect ratios standardized (4:5 for members, 1:1 for albums)
- Max recommended dimension: 800px width

### Styles (folder: `assets/styles.css`)
- Uses CSS custom properties (variables) in :root
- Dark mode native support via `color-scheme: dark`
- Graceful motion reduction for accessibility

### Scripts (folder: `assets/script.js`)
- Vanilla JavaScript, no frameworks
- Handles navigation toggles, tab panels, scrolling, hash routing
- Prefers-reduced-motion aware

## Contact form

The form in `index.html#get-in-touch` is a demonstration form. It collects first name, last name, email address and comments, all marked `required`, and includes Submit and Reset buttons. Submitting a valid form opens the visitor's default mail client addressed to the site's contact address (`mailto:`); nothing is stored or sent by a server. Leaving any field blank blocks submission with the browser's built-in "Please fill out this field" prompt.

## Development commands

```bash
npm install          # install eslint, prettier and cssnano-cli
npm start            # serve at http://localhost:8000
npm run lint         # eslint assets/script.js
npm run format       # prettier over HTML, CSS and JS
npm run format:check # verify formatting
npm run minify-css   # write assets/temp.min.css (build artefact, git-ignored)
```

## Key Features Implemented

✅ Responsive navigation with mobile dropdown  
✅ Tabbed member profiles with smooth animations  
✅ Spotify embed support on music page  
✅ Hash-based URL navigation  
✅ Skip-to-main navigation for accessibility  
✅ Dark color scheme with accessible contrast  
✅ Loading="lazy" on non-critical images  
✅ Required-field contact form with submit/reset  

---

**Status**: School project in development.
