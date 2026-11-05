// Build-time profile card for every player (template: src/lib/cards.js).
// Initials monogram only — never a likeness of a real person.
import { ALL_PLAYERS } from '../../../data/players.js';
import { playerCard, svgResponse } from '../../../lib/cards.js';

export function getStaticPaths() {
  return ALL_PLAYERS.map((p) => ({ params: { slug: p.slug }, props: { p } }));
}
export function GET({ props }) {
  const p = props.p;
  return svgResponse(playerCard({
    name: p.name,
    role: p.status === 'Retired' ? 'Retired · Malaysia' : (p.cardRole || p.category.split('·')[0].trim()),
    meta: 'Malaysia (MAS)',
    accent: p.status === 'Retired' ? '#5A6862' : (p.gender === 'women' ? '#1F6FB2' : '#167D45'),
  }));
}
