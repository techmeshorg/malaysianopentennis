# Malaysia Open Tennis — malaysiaopentennis.com

A fast, static, SEO-focused content website built with **Astro**. No backend, no database, no CMS.
Clean sports-editorial design (white background; green, blue and subtle yellow accents) using the
system San Francisco font stack.

## Tech stack
- **Astro** (static output) — file-based pages, reusable layout + components
- Plain CSS (single global stylesheet), no UI framework
- Zero runtime dependencies in the browser beyond tiny vanilla scripts (mobile nav, tournament filter)

## Project structure
```
malaysiaopentennis/
├─ astro.config.mjs        # site URL, trailing slashes, build format
├─ package.json
├─ public/                 # served as-is at the site root
│  ├─ robots.txt
│  ├─ favicon.svg
│  ├─ logo.svg
│  ├─ og-default.png       # 1200×630 Open Graph image
│  └─ _headers             # Cloudflare Pages headers (security + caching)
└─ src/
   ├─ data/
   │  ├─ site.js           # site name, URL, email, disclaimer
   │  ├─ nav.js            # header + footer navigation
   │  ├─ site-nav.js       # combined import surface
   │  └─ tournaments.js    # 2026 TennisMalaysia calendar (51 events)
   ├─ layouts/
   │  └─ BaseLayout.astro  # <head>, SEO meta, OG/Twitter, JSON-LD, header, footer
   ├─ components/
   │  ├─ Header.astro      # dropdown nav + mobile menu
   │  ├─ Footer.astro
   │  ├─ Breadcrumbs.astro # + BreadcrumbList JSON-LD
   │  ├─ Faq.astro         # + FAQPage JSON-LD
   │  ├─ Card.astro
   │  └─ TournamentTable.astro # filterable calendar table
   ├─ pages/               # one file = one route
   │  ├─ index.astro
   │  ├─ malaysia-tennis-events.astro
   │  ├─ tennis-courts-malaysia.astro
   │  ├─ atp-wta-malaysia-history.astro
   │  ├─ tennis-rules.astro
   │  ├─ how-tennis-scoring-works.astro
   │  ├─ tennis-ranking-guide.astro
   │  ├─ malaysian-tennis-players.astro
   │  ├─ tournaments.astro
   │  ├─ news.astro
   │  ├─ about.astro / editorial-policy.astro / contact.astro
   │  ├─ privacy-policy.astro / terms.astro
   │  ├─ 404.astro
   │  ├─ sitemap.xml.js    # generates /sitemap.xml
   │  └─ malaysia-open/{tennis,badminton,golf,squash}.astro
   └─ styles/global.css
```

## Run locally
Requires Node.js 18+ (built and tested on Node 22).
```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

## Deploy: GitHub → Cloudflare Pages

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Malaysia Open Tennis static site"
git branch -M main
git remote add origin https://github.com/<your-username>/malaysiaopentennis.git
git push -u origin main
```

### 2. Create the Cloudflare Pages project
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your `malaysiaopentennis` repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - (Node version: set env var `NODE_VERSION` = `20` or higher if needed.)
4. **Save and Deploy.** Cloudflare builds and publishes to a `*.pages.dev` URL.

### 3. Connect your GoDaddy domain
1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `malaysiaopentennis.com` (and `www` if desired).
2. Cloudflare gives you DNS targets. Two options:
   - **Easiest:** change your nameservers at GoDaddy to the Cloudflare nameservers (add the domain to Cloudflare first), then the custom domain verifies automatically; or
   - **Keep GoDaddy DNS:** at GoDaddy, add the CNAME/records Cloudflare specifies for the Pages custom domain.
3. Wait for DNS to propagate and the SSL certificate to issue. The site will be live over HTTPS.

After the first deploy, every `git push` to `main` triggers an automatic rebuild and deploy.

## Editing content
- **Site name / URL / email / disclaimer:** `src/data/site.js`
- **Navigation:** `src/data/nav.js`
- **Tournament calendar:** `src/data/tournaments.js` (status: `Completed` | `Confirmed` | `TBC`)
- **A page's copy:** edit the matching file in `src/pages/`
- **Add a page:** create `src/pages/your-page.astro`, then add it to `nav.js` and the `PATHS` array in `src/pages/sitemap.xml.js`

## SEO & data notes
- Every page sets a unique title, meta description, canonical URL, Open Graph + Twitter tags, one `<h1>`, breadcrumbs, related links and a "last updated" date.
- JSON-LD: `WebSite` + `Organization` on every page; `Article` on content pages; `BreadcrumbList` via the breadcrumbs component; `FAQPage` where an FAQ exists; `ItemList` on the tournaments page.
- The 2026 calendar is transcribed from the official TennisMalaysia summary (updated 29 May 2026). No results, champions or statistics are fabricated; unconfirmed items are marked rather than guessed.
- The site currently contains **no betting or casino content**.
