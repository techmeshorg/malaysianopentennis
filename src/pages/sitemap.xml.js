// /sitemap.xml — built from the data files so new news items and player profiles
// are included automatically. <lastmod> is each page's real last substantive update
// (not the build date), matching the visible "Last updated" dates.
import { SITE } from '../data/site.js';
import { NEWS } from '../data/news.js';
import { MEN, WOMEN } from '../data/players.js';
import { COURTS_CHECKED } from '../data/courts.js';

// Static pages and the date their content last changed substantively (YYYY-MM-DD).
const PAGES = {
  '/': '2026-11-05',
  '/tournaments/': '2026-11-05',
  '/news/': null, // = newest news item
  '/malaysia-tennis-events/': '2026-11-05',
  '/atp-wta-malaysia-history/': '2026-11-05',
  '/tennis-rules/': '2026-11-05',
  '/how-tennis-scoring-works/': '2026-11-05',
  '/tennis-ranking-guide/': '2026-11-05',
  '/malaysian-tennis-players/': '2026-11-05',
  '/player-profiles/men/': '2026-11-05',
  '/player-profiles/women/': '2026-11-05',
  '/tennis-courts-malaysia/': COURTS_CHECKED,
  '/about/': '2026-11-05',
  '/editorial-policy/': '2026-11-05',
  '/contact/': '2026-06-18',
  '/privacy-policy/': '2026-06-18',
  '/terms/': '2026-06-18',
};

const newsDate = (n) => n.updated?.date || n.date;
const latestNews = NEWS.map(newsDate).sort().at(-1);

export async function GET() {
  const entries = [
    ...Object.entries(PAGES).map(([p, d]) => [p, d || latestNews]),
    ...NEWS.map((n) => [`/news/${n.slug}/`, newsDate(n)]),
    ...MEN.map((p) => [`/player-profiles/men/${p.slug}/`, p.checked]),
    ...WOMEN.map((p) => [`/player-profiles/women/${p.slug}/`, p.checked]),
  ];
  const urls = entries.map(([p, d]) =>
    `  <url>\n    <loc>${new URL(p, SITE.url).href}</loc>${d ? `\n    <lastmod>${d}</lastmod>` : ''}\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
