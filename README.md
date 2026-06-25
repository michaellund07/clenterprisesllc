# CL Enterprises, LLC — Website

Static site for CL Enterprises, LLC (independent manufacturers' representative).
Pure HTML5 / CSS3 / vanilla JS — no frameworks, no build step.

## Files

```
index.html          Page markup
styles.css           All styles (design tokens at the top of the file)
script.js            Mobile nav, scroll-reveal, footer year, image-fallback handling
images/              All photography slots (currently placeholders — see below)
CNAME                GitHub Pages custom domain (clenterprisesllc.com)
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload all files in this package to the **root** of the repository
   (keep the `images/` folder structure intact).
3. In the repo: **Settings → Pages → Source** → select the branch
   (usually `main`) and root folder.
4. Custom domain: the included `CNAME` file already points to
   `clenterprisesllc.com`. In **Settings → Pages**, confirm the custom
   domain field shows that value, and point your domain's DNS to GitHub
   Pages per GitHub's custom-domain documentation.
5. Enable **Enforce HTTPS** once DNS has propagated.

No build tools, no `npm install` — it's ready to serve as-is.

## Replacing the placeholder photography

Every image in `images/` is currently a hand-built SVG placeholder (clean
line-art on a soft gradient) rather than a photo — this keeps the package
fully self-contained with nothing hotlinked from a third party. Each one
is a drop-in replacement target:

| File | Slot | Suggested real photo |
|---|---|---|
| images/hero-facility.svg | Hero background (desktop/tablet only) | Modern manufacturing facility, clean equipment, natural light, negative space on the left for the headline |
| images/chris-lund-portrait.svg | About section | Chris, business casual, inside a manufacturing environment, natural/approachable expression |
| images/medical-devices.svg | Industries card | Clean-room manufacturing |
| images/electronics.svg | Industries card | PCB assembly / circuit board production |
| images/industrial-manufacturing.svg | Industries card | Precision CNC machining |
| images/contract-manufacturing.svg | Industries card | Modern production line / assembly operation |
| images/metals-components.svg | Industries card | Precision machined metal components |
| images/cables-interconnects.svg | Industries card | Wire harness / cable assembly |

**To replace an image:** save the new photo into `images/` with the same
filename (convert to `.jpg` and update the `src` in `index.html` if the
new file uses a different extension), keeping roughly the same aspect ratio:

- Hero: wide, ~3:2 (e.g. 1800×1200 or larger)
- Portrait: vertical, ~9:11 (e.g. 1200×1467 or larger)
- Industry cards: ~4:3 (e.g. 1280×960 or larger)

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
