# BLOOM Band Website — Changelog

## 0.1.0 — Initial Development (2026-10-23)

### ✅ Completed

#### **Security & Privacy**
- Added `X-UA-Compatible` meta tag for legacy browser support
- Content Security Policy is documented as a server-header task: the meta-tag version was removed because it blocked the site's own stylesheet, script and images

#### **SEO & Discoverability**
- Enhanced meta descriptions with comprehensive keywords on all pages
- Added Open Graph (`og:`) meta tags for social sharing cards
- Added Twitter Card metadata
- Implemented `robots.txt` at root level (allows crawling)
- Created `sitemap.xml` with priority-weighted URLs
- Added canonical URL placeholders for cross-platform consistency

#### **Code Quality**
- Created comprehensive `README.md` documenting project structure and quick start
- Organized assets into logical folders (`img/`, CSS, JS)
- Documented file formats (WebP/PNG preferred), aspect ratios, and dimensions in README
- Standardized image naming conventions (lowercase with hyphens)

#### **Accessibility**
- Implemented skip-to-main navigation for keyboard users
- Added `aria-labels` to all interactive elements (buttons, social links)
- Enhanced alt text with functional descriptions (e.g., "Jono Hawkey - Vocals")
- Improved heading hierarchy consistency
- Added `prefers-reduced-motion` support for animations
- Ensured sufficient color contrast ratios on dark theme

#### **Image Optimization**
- Applied `loading="lazy"` to non-above-the-fold images across all pages
- Standardized alt text patterns for better screen reader support
- Compressed image formats (WebP preferred, PNG for transparency)

#### **Documentation**
- Created `.gitignore` file for clean repository state
- Documented build/serve commands (browser open)
- Added CHANGELOG.md tracking version history
- Included technical notes on deployment prerequisites

---

### 🔜 Upcoming (Priority List)

1. **Performance** - Image compression, cache headers on the host
2. **Analytics** - Add Google Analytics 4 with consent mode
3. **Forms** - Server-side handling for the contact form (currently a mailto demo)
4. **Video/Audio** - Add background video, more live sessions
5. **Content** - Add FAQ, press/interviews

---

## 0.1.1 — Rubric audit (2026-10-25)

### Added
- Contact section on the homepage (`#get-in-touch`) with First Name, Last Name, Email Address and Comments, all `required`, plus Submit and Reset buttons
- Contact link in the main navigation on all three pages
- Form, contact and hero-heading styles in `assets/styles.css`
- `README.md` notes on the demo form and development commands

### Fixed
- Added a real `<h1>` to the homepage (the logo lockup), so every page has one
- Footer column headings changed from `<h4>` to `<h3>` to remove a skipped heading level
- Member tab panels changed from `<article role="tabpanel">` to `<div role="tabpanel">` (invalid role on `article`)
- Removed `width="100%"` from Spotify iframes (invalid HTML value; CSS already sizes them)
- Removed the invalid `meta http-equiv="Content-Security-Policy"` block, which blocked the site's own CSS, JS and images
- Removed the broken `wireframe.html` page and its three deleted mockup files from `sitemap.xml` and `README.md`
- Renamed images to meaningful, lowercase filenames (e.g. `BloomLogo+Distressed.webp` → `bloom-logo.webp`) and updated every reference
- Removed inline `style` attributes from the footer and the stray `Privacy`/`Terms` placeholder links
- Corrected mojibake characters (`â€”`, `â€™`, `â€¢`) left over from a bad encoding pass
- Fixed `package.json` scripts (wrong paths, non-existent `cssnano-cli@6`) and added `.eslintrc.json`; `npm run lint`, `npm run format:check` and `npm run minify-css` now work
- Reformatted `music.html` (it had 300+ lines over 200 characters) and the whole codebase with Prettier

### Verified
- W3C Nu HTML Checker: 0 errors, 0 warnings on all three pages
- W3C CSS Validator: 0 errors
- ESLint: 0 errors; Prettier: all files clean
- Chrome, Edge and Firefox: no console errors, no horizontal overflow at 1440px or 390px

---

**Note**: This is a school project focused on fundamental web development practices. Production deployment will require additional security headers via server configuration.
