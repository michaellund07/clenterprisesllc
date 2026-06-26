# CL Enterprises, LLC — Website

Static site for CL Enterprises, LLC (independent manufacturers' representative).
Pure HTML5 / CSS3 / vanilla JS — no frameworks, no build step.

## Files

```
index.html          Page markup
styles.css           All styles (design tokens at the top of the file)
script.js            Mobile nav, scroll-reveal, footer year, image-fallback handling
images/              Photography, custom illustrations, and the one remaining placeholder (see below)
CNAME                GitHub Pages custom domain (clenterprisesllc.com)
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload all files in this package to the **root** of the repository
   (keep the `images/` folder structure intact — drag the `images` folder
   itself into GitHub's uploader, not its individual contents, or the
   files will land in the repo root instead of inside `images/`).
3. In the repo: **Settings → Pages → Source** → select the branch
   (usually `main`) and root folder.
4. Custom domain: the included `CNAME` file already points to
   `clenterprisesllc.com`. In **Settings → Pages**, confirm the custom
   domain field shows that value, and point your domain's DNS to GitHub
   Pages per GitHub's custom-domain documentation.
5. Enable **Enforce HTTPS** once DNS has propagated.

No build tools, no `npm install` — it's ready to serve as-is.

## Asset inventory

**Portrait (final, optimized):**
- `images/chris-lund-portrait.jpg` — 900×1100, ~150KB, served to desktop/tablet
- `images/chris-lund-portrait-640.jpg` — 640×783, ~84KB, served to phones via `srcset`

Both are real photography, cropped to the site's 9:11 frame with no
distortion. The browser automatically picks the right size for the
viewport — phones never download the larger desktop file.

**Industries Served illustrations (final, custom, ~500 bytes each):**
- `images/icon-electronics.svg`
- `images/icon-medical-devices.svg`
- `images/icon-industrial-manufacturing.svg`
- `images/icon-contract-manufacturing.svg`
- `images/icon-metals-components.svg`
- `images/icon-cable-interconnect.svg`

A custom-drawn, single-stroke line-art set sharing one visual language
(consistent stroke weight, one steel-gray linework color, one blue accent
dot per icon) — designed to read as understated and credible to a
manufacturing audience, not playful or decorative.

**Still a placeholder:**
- `images/hero-facility.svg` — line-art graphic behind the hero headline
  (visible on tablet/desktop only). This is the one remaining slot to fill
  with real photography before full launch.

| File | Slot | Suggested real photo |
|---|---|---|
| images/hero-facility.svg | Hero background (desktop/tablet only) | Modern manufacturing facility, clean equipment, natural light, negative space on the left for the headline |

**To replace it:** save the new photo into `images/` as `hero-facility.jpg`
(or keep the `.svg` name and swap the file — just update the `src` in
`index.html` if the extension changes), wide format, ~3:2 (e.g. 1800×1200
or larger).

Style guide for replacement photography: neutral color grading, blue/gray
industrial tones, natural lighting, clean modern facilities, minimal
clutter. Avoid handshakes, smiling office stock, generic warehouses,
robots, or heavy HDR — the brand is understated and relationship-driven,
not flashy.

## Favicon

The favicon is currently an inline SVG placeholder ("CLE" on navy) defined
directly in the `<head>` of `index.html` — no separate file needed. Replace
the `data:image/svg+xml,...` value on the `<link rel="icon">` tag with a
real favicon file reference once a final mark is ready.

## Browser support

Built with standard, broadly-supported CSS (Grid, Flexbox, `clamp()`,
`aspect-ratio`) and vanilla JS (`IntersectionObserver` with a fallback).
No polyfills required for current versions of Chrome, Safari, Firefox, or Edge.

