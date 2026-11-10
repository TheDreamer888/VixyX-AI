# VixyX-AI

VixyX AI is a next-generation artificial intelligence platform designed to empower creativity, productivity, and innovation. Built with modern AI models, it delivers intelligent conversations, powerful automation, coding assistance, and advanced tools through a seamless, secure, and intuitive experience.

## Contents

- [Landing page](#landing-page)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Customise](#customise)
- [Deploy (GitHub Pages)](#deploy-github-pages)
- [Hosting alternatives](#hosting-alternatives)
- [Making the chat demo real](#making-the-chat-demo-real)
- [Quality checklist](#quality-checklist)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

## Landing page

Static, responsive landing page (HTML/CSS/JS, no build step, no dependencies) with SEO metadata (OpenGraph, JSON-LD incl. FAQ), animated hero, bento features, how-it-works, a simulated chat demo (suggestion chips, typing indicator), monthly/annual pricing toggle, FAQ, a contact form and a GDPR-style privacy policy. Includes a mobile menu, scroll-reveal animations and `prefers-reduced-motion` support.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup, SEO/OpenGraph/JSON-LD |
| `styles.css` | Dark premium theme, responsive layout |
| `script.js` | Menu, scroll reveal, pricing toggle and local chat demo (no network calls) |
| `privacidade.html` | Privacy policy template (Portuguese, GDPR) |
| `404.html` | Not-found page |
| `og-image.png`, `og-image.svg` | Social share image (PNG used in meta tags, rendered from the SVG) |
| `robots.txt`, `sitemap.xml` | SEO |
| `.github/workflows/pages.yml` | GitHub Pages deployment |

## Run locally

```
python -m http.server 8080
```

Then open http://localhost:8080, or open `index.html` directly in a browser.

## Customise

Before publishing, replace the placeholders:

| Placeholder | Where |
|-------------|-------|
| `https://vixyx.ai/` | `index.html` (canonical, `og:url`, `og:image`, `twitter:image`), `privacidade.html`, `sitemap.xml`, `robots.txt` |
| `hello@vixyx.ai` | `index.html` (contact form `action`), `privacidade.html` |
| `[...]` fields | `privacidade.html` (legal name, tax ID, address, providers, retention period) |

Brand colours live in the `:root` variables at the top of `styles.css`. Pricing text is in `index.html`; the annual Pro price is set in `script.js`.

The contact form uses `mailto:`, which opens the visitor's email client. For a real form, point `action` to a form service or a serverless endpoint.

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` publishes the site on every push to `main`. One-time setup: repository Settings > Pages > Source: **GitHub Actions**. The workflow copies an explicit list of files, so add any new page or asset to its "Stage site files" step.

GitHub Pages terms discourage online businesses; prefer Cloudflare Pages for commercial use.

## Hosting alternatives

| Option | Free tier | Notes |
|--------|-----------|-------|
| Cloudflare Pages (recommended) | 500 builds/month, unlimited static requests | Good for commercial use; Pages Functions can proxy an AI API |
| Netlify | 300 credits/month | Serverless functions for a real chat backend |
| Vercel | Hobby (non-commercial) | Hobby is personal use only |
| GitHub Pages | 1 GB site, ~100 GB/month | Docs/project sites; terms discourage online businesses |
| Azure Static Web Apps | Free plan | Integrated managed Functions API |

## Making the chat demo real

`script.js` is a local mock. To use a real model, call it from a serverless function (never put API keys in client code) — e.g. Azure OpenAI, OpenAI, or GitHub Models — and have the page `fetch` that endpoint. Add rate limiting and input validation on the function, and update `privacidade.html` (provider, data sent, retention) before going live.

## Quality checklist

- [x] Responsive layout (desktop and mobile), mobile menu
- [x] Accessible basics: skip link, labels, `aria-live` chat log, focus styles, reduced-motion support
- [x] SEO: title, description, canonical, OpenGraph/Twitter, JSON-LD, robots, sitemap, 404
- [x] No external requests, cookies or trackers
- [ ] Replace placeholders (domain, email, legal fields)
- [ ] Review privacy policy with legal advice
- [ ] Run a Lighthouse audit on the deployed URL

## Roadmap

- Real chat backend behind a serverless function
- English version of the site
- Terms of service page
- Real form handling instead of `mailto:`

## Contributing

Issues and pull requests are welcome. Keep the site dependency-free, and open `index.html` or run the local server to check changes before submitting.

Note: share previews use `og-image.png` (1200x630), rendered from `og-image.svg`.
