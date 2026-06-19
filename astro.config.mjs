import { defineConfig } from 'astro/config';

// Production site URL — used for canonical URLs, sitemap, and Open Graph.
export default defineConfig({
  site: 'https://www.malaysianopentennis.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
