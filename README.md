# CL Enterprises, LLC — Website (v2.1)

Static site for CL Enterprises, LLC (independent manufacturers' representative
and founder-led growth partner). Pure HTML5 / CSS3 / vanilla JS — no
frameworks, no build step.

## Files

```
index.html                       Page markup
styles.css                        All styles (design tokens at the top of the file)
script.js                         Mobile nav, scroll-reveal, footer year, image-fallback handling
sitemap.xml                       SEO: sitemap
robots.txt                        SEO: crawler rules
CNAME                             GitHub Pages custom domain (clenterprisesllc.com)
chris-lund-portrait.jpg           Portrait — desktop/tablet size (900×1100)
chris-lund-portrait-640.jpg       Portrait — mobile size (640×783, served via srcset)
hero-facility.svg                 Hero background placeholder (see "Photography" below)
icon-electronics.svg              Industries Served illustration
icon-medical-devices.svg          Industries Served illustration
icon-industrial-manufacturing.svg Industries Served illustration
icon-contract-manufacturing.svg   Industries Served illustration
icon-metals-components.svg        Industries Served illustration
icon-cable-interconnect.svg       Industries Served illustration
```

Every file lives **flat at the repository root** — there is no subfolder.
This is deliberate (see "Why everything is flat" below).

## Deploying to GitHub Pages

1. Upload **all files** in this package to the repository root, exactly
   as they are — there's no folder structure to preserve, so there's
   nothing for a drag-and-drop upload to flatten incorrectly.
2. **Settings → Pages → Source** → select the branch (usually `main`)
   and root folder.
3. Custom domain: the included `CNAME` already points to
   `clenterprisesllc.com`. Confirm it under **Settings → Pages** and
   point your domain's DNS at GitHub Pages per GitHub's custom-domain docs.
4. Enable **Enforce HTTPS** once DNS has propagated.

No build tools, no `npm install`.

## Why everything is flat (no `images/` folder)

Earlier versions of this site kept images in an `images/` subfolder.
Twice, those images broke in production after upload — files ended up
sitting in the repo root instead of nested inside `images/`, depending on
how they were dragged into GitHub's web uploader. Both times the package
itself was verified correct; the failure was specifically the folder-
nesting step.

After that, images were briefly embedded as base64 data directly inside
`index.html` to remove the dependency entirely. That worked, but it
meant every image shipped on every page load with no separate browser
caching.

**This version takes the middle path:** real, external, cacheable image
files — but placed flat at the root alongside `index.html`, `styles.css`,
and `script.js`, the same pattern that has never broken across every
deployment so far. There's no subfolder left for an upload to flatten
incorrectly, but images still load and cache like normal files.

## Performance notes

- The portrait uses `srcset` (640w / 900w) so phones download the smaller
  file automatically.
- All `<img>` tags carry explicit `width`/`height` (prevents layout shift)
  and `decoding="async"`.
- Below-the-fold images (portrait, Industries icons) use `loading="lazy"`;
  the hero background uses `loading="eager"` since it's visible immediately.
- All 6 Industries icons are minified SVGs (~500 bytes each).
- Total page weight is a fraction of the previous base64-embedded version.

## SEO

- `<title>`, meta description, Open Graph, and Twitter Card tags lead with
  outcome-oriented language while keeping "manufacturers' representative"
  present (it's a real, searched industry term).
- `<link rel="canonical">` added, pointing to the homepage.
- A `ProfessionalService` JSON-LD structured-data block is in the `<head>`
  — name, founder, phone, email, and area served. Validate any future
  edits at https://validator.schema.org/ or Google's Rich Results Test.
- `sitemap.xml` and `robots.txt` ship at the root, as expected by crawlers.
- Heading hierarchy is a clean h1 → h2 (per section) → h3 (per card),
  with no skipped levels.

## Accessibility

- Skip link, landmark roles (`header`/`nav`/`main`/`footer`), and
  `aria-label`s on icon-only controls and ambiguous sections.
- Visible focus states (`:focus-visible`) and `prefers-reduced-motion`
  support.
- Decorative images (`hero-facility.svg`, the 6 Industries icons) use
  empty `alt=""`; the portrait has a descriptive `alt`.
- The contact block is a semantic `<address>` element.
- Verified WCAG AA contrast (4.5:1+) on every text/background color
  combination used on the page.

## Updating photography

| File | Slot | Status |
|---|---|---|
| chris-lund-portrait.jpg / -640.jpg | About section | Final — real photo, cropped to 9:11, no distortion |
| hero-facility.svg | Hero background (tablet/desktop only) | Placeholder — the one remaining slot before full launch |
| icon-*.svg (6 files) | Industries Served | Final — custom line-art illustrations |

**To replace the hero placeholder:** save the new photo as
`hero-facility.jpg` (or keep the `.svg` filename and swap the file), wide
format ~3:2 (1800×1200 or larger), then update the `src` in `index.html`
if the extension changes.

Style guide for replacement photography: neutral color grading, blue/gray
industrial tones, natural lighting, clean modern facilities, minimal
clutter. Avoid handshakes, smiling office stock, generic warehouses,
robots, or heavy HDR.

## Favicon

Inline SVG placeholder ("CLE" on navy), defined directly in the `<head>`
of `index.html` — no separate file. Replace the `data:image/svg+xml,...`
value on `<link rel="icon">` with a real favicon once a final mark exists.

## Browser support

Standard, broadly-supported CSS (Grid, Flexbox, `clamp()`, `aspect-ratio`)
and vanilla JS (`IntersectionObserver` with a fallback). No polyfills
required for current Chrome, Safari, Firefox, or Edge.
