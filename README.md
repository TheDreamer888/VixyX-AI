# VixyX-AI
VixyX AI is a next-generation artificial intelligence platform designed to empower creativity, productivity, and innovation. Built with modern AI models, it delivers intelligent conversations, powerful automation, coding assistance, and advanced tools through a seamless, secure, and intuitive experience.

## Landing page

Static, responsive landing page (HTML/CSS/JS, no build step) with SEO metadata (OpenGraph, JSON-LD incl. FAQ), animated hero, bento features, how-it-works, a simulated chat demo (suggestion chips, typing indicator), monthly/annual pricing toggle, FAQ and a contact form. Includes a mobile menu, scroll-reveal animations and `prefers-reduced-motion` support.

| File | Purpose |
|------|---------|
| `index.html` | Page markup, SEO/OpenGraph/JSON-LD |
| `styles.css` | Dark premium theme, responsive layout |
| `script.js` | Local chat demo (no network calls) |
| `robots.txt`, `sitemap.xml` | SEO |

### Run locally

```
python -m http.server 8080
```

Then open http://localhost:8080, or open `index.html` directly in a browser.

### Customise

Replace `https://vixyx.ai/` (canonical, sitemap, robots) and `hello@vixyx.ai` (contact form) with your real domain and email.

### Deploy (GitHub Pages)

`.github/workflows/pages.yml` publishes the site on every push to `main`. One-time setup: repository Settings > Pages > Source: **GitHub Actions**. Note the earlier caveat: GitHub Pages terms discourage online businesses; prefer Cloudflare Pages for commercial use.

### Hosting alternatives

| Option | Free tier | Notes |
|--------|-----------|-------|
| Cloudflare Pages (recommended) | 500 builds/month, unlimited static requests | Good for commercial use; Pages Functions can proxy an AI API |
| Netlify | 300 credits/month | Serverless functions for a real chat backend |
| Vercel | Hobby (non-commercial) | Hobby is personal use only |
| GitHub Pages | 1 GB site, ~100 GB/month | Docs/project sites; terms discourage online businesses |
| Azure Static Web Apps | Free plan | Integrated managed Functions API |

### Making the chat demo real

`script.js` is a local mock. To use a real model, call it from a serverless function (never put API keys in client code) — e.g. Azure OpenAI, OpenAI, or GitHub Models — and have the page `fetch` that endpoint. Add rate limiting and input validation on the function.

Note: share previews use `og-image.png` (1200x630), rendered from `og-image.svg`.
