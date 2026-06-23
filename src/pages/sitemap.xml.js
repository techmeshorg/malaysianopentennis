// Static sitemap endpoint -> /sitemap.xml
import { SITE } from '../data/site.js';

const PATHS = [
  '/', '/malaysia-tennis-events/', '/atp-wta-malaysia-history/', '/tennis-rules/',
  '/how-tennis-scoring-works/', '/tennis-ranking-guide/', '/malaysian-tennis-players/',
  '/tennis-courts-malaysia/', '/player-profiles/men/', '/player-profiles/women/', '/player-profiles/men/mitsuki-leong/', '/player-profiles/men/christian-didier-chin/', '/player-profiles/men/adam-malik/', '/player-profiles/men/darrshan-suresh/', '/player-profiles/women/shihomi-leong/', '/player-profiles/women/daania-hazli/', '/player-profiles/women/elsa-wan/','/tournaments/', '/news/', '/news/tennis-malaysia-davis-cup-group-iii-2026/', '/news/malaysia-potential-pickleball-padel-2026/', '/news/j300-premier-sarawak-cup-kuching-2026/', '/news/daania-hazli-national-circuit-two-titles-2026/', '/news/daania-hazli-itf-j30-phnom-penh-2025/',
  '/about/', '/editorial-policy/', '/contact/', '/privacy-policy/', '/terms/',
];
const lastmod = new Date().toISOString().split('T')[0];

export async function GET() {
  const urls = PATHS.map((p) => {
    const priority = p === '/' ? '1.0' : '0.7';
    return `  <url>\n    <loc>${new URL(p, SITE.url).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
