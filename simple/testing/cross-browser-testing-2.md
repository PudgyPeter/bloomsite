# Cross-Browser Testing Document 2

**Project:** Bloom website (simplified version)
**Tester:** _
**Date:** _
**Site version:** simple/ (HTML and CSS only, no JavaScript)

---

## 1. Environment

| Item | Detail |
| --- | --- |
| Browser 2 | Mozilla Firefox 158.0.1 |
| Operating system | Windows 11 (64-bit) |
| Screen resolution | 1440 x 1000 (desktop test), 390 x 844 (mobile test) |
| How the site was opened | Local web server: `npm start`, then `http://localhost:8000/simple/` |
| Pages tested | `index.html`, `members.html`, `music.html` |

---

## 2. Test results

| # | Test | Steps | Expected result | Result |
| --- | --- | --- | --- | --- |
| 1 | Home page loads | Open `index.html` | Page loads, dark theme, "BLOOM" hero heading visible | Pass |
| 2 | Navigation works | Click Members, Music, Contact in the header | Correct page or section opens every time | Pass |
| 3 | Current page indicated | Visit each page | The active nav link is highlighted with an accent underline | Pass |
| 4 | Members page | Open `members.html` | All five profiles show photo, name, role and text | Pass |
| 5 | Music page | Open `music.html` | Four releases show artwork, description and full tracklist | Pass |
| 6 | Internal anchors | Click a member tile on the home page | `members.html` opens at that member's profile | Pass |
| 7 | Contact form layout | Scroll to "Get in touch" | Form shows First name, Last name, Email address and Comments | Pass |
| 8 | Required fields | Click Submit with the form empty | Submission is blocked and a "Please fill out this field" prompt appears | Pass |
| 9 | Submit button | Fill all four fields, click Submit | Browser hands the completed form to the default mail client (mailto:) | Pass |
| 10 | Reset button | Fill all four fields, click Reset | All four fields clear | Pass |
| 11 | Images | Scroll through all three pages | All photos and artwork load, nothing is broken | Pass |
| 12 | Fonts | Reload the site | Headings use the condensed display font, body text uses Work Sans | Pass |
| 13 | Responsive layout | Resize the window to phone width | Content stacks into one column, no sideways scrolling | Pass |
| 14 | Keyboard access | Press Tab from the top of the page | Focus moves visibly through skip link, nav, links and form fields | Pass |
| 15 | HTML validation | Check all three pages at validator.w3.org | No errors and no warnings | Pass |

---

## 3. Screenshots

| Screenshot | File |
| --- | --- |
| Home page | `screenshots/cross-browser-firefox-home.png` |
| Members page | `screenshots/cross-browser-firefox-members.png` |
| Music page | `screenshots/cross-browser-firefox-music.png` |
| Form with required-field prompt | `screenshots/form-required-prompt.png` |
| Form completed with Submit and Reset visible | `screenshots/form-filled.png` |
| W3C HTML validation, home page | `screenshots/w3c-html-index.png` |
| W3C HTML validation, members page | `screenshots/w3c-html-members.png` |
| W3C HTML validation, music page | `screenshots/w3c-html-music.png` |

---

## 4. Comparison with Browser 1

| Item | Chrome 155 | Firefox 158 |
| --- | --- | --- |
| Layout | Matches design | Matches design |
| Fonts loaded | Yes | Yes |
| Horizontal scroll at 1440px | None | None |
| Horizontal scroll at 390px | None | None |
| Form required-field prompt | Shown, field highlighted | Shown, field highlighted |
| Console errors | None | None |

---

## 5. Defects found

| # | Page | Description | Severity | Fixed? |
| --- | --- | --- | --- | --- |
| 1 | All | None found in this browser | - | - |

---

## 6. Tester sign-off

Name: ______________________  Date: ____________  Signature: ______________________
