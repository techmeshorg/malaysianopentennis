// Build-time feature graphic for every news item (template: src/lib/cards.js).
import { NEWS } from '../../../data/news.js';
import { newsCard, resultCard, svgResponse } from '../../../lib/cards.js';

export function getStaticPaths() {
  return NEWS.map((n) => ({ params: { slug: n.slug }, props: { item: n } }));
}
export function GET({ props }) {
  const n = props.item;
  const svg = n.card?.kind === 'result'
    ? resultCard({ kicker: n.category, accent: n.accent, ...n.card })
    : newsCard({ kicker: n.category, title: n.title, meta: n.displayDate, accent: n.accent });
  return svgResponse(svg);
}
