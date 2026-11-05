// Reusable on-brand image templates (SVG, generated at build time).
//
// One template, three variants:
//   kind: 'news'   — article feature image (kicker + headline + date)
//   kind: 'result' — result card (event + winner + score line)
//   kind: 'player' — player card (initials monogram, never a likeness)
//
// These are original graphics, not photographs. Every <img> that uses them must
// carry descriptive alt text (see cardAlt() below). To use a licensed photo
// instead, set `photo` on the data item; pages prefer the photo when present.

const C = {
  green: '#167D45', deep: '#0B3A25', mid: '#0E5A30', blue: '#1F6FB2',
  yellow: '#E8C23B', ink: '#15201A', white: '#FFFFFF',
};

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Greedy word-wrap by approximate glyph width (system sans, bold ≈ 0.56em).
function wrap(text, fontSize, maxWidth, maxLines) {
  const perLine = Math.max(8, Math.floor(maxWidth / (fontSize * 0.56)));
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? cur + ' ' + w : w;
    if (next.length <= perLine) cur = next;
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\s+\S*$/, '') + '…';
    return kept;
  }
  return lines;
}

// Fit a headline: try sizes from large to small until it fits in maxLines.
function fitHeadline(text, maxWidth, maxLines, sizes = [64, 58, 52, 46, 42]) {
  for (const s of sizes) {
    const perLine = Math.floor(maxWidth / (s * 0.56));
    const words = String(text).split(/\s+/);
    let lines = 1, cur = 0;
    for (const w of words) {
      if (cur === 0) cur = w.length;
      else if (cur + 1 + w.length <= perLine) cur += 1 + w.length;
      else { lines++; cur = w.length; }
    }
    if (lines <= maxLines) return { size: s, lines: wrap(text, s, maxWidth, maxLines) };
  }
  const s = sizes[sizes.length - 1];
  return { size: s, lines: wrap(text, s, maxWidth, maxLines) };
}

// Top-down court drawn in perspective on the right-hand side — the site's motif.
function courtMotif(accent) {
  return `
  <g opacity="0.9">
    <polygon points="760,120 1120,120 1190,560 690,560" fill="${accent}" opacity="0.22"/>
    <g fill="none" stroke="#FFFFFF" stroke-opacity="0.38" stroke-width="3">
      <polygon points="760,120 1120,120 1190,560 690,560"/>
      <line x1="782" y1="120" x2="718" y2="560"/>
      <line x1="1098" y1="120" x2="1162" y2="560"/>
      <line x1="725" y1="340" x2="1155" y2="340" stroke-opacity="0.7" stroke-width="5"/>
      <line x1="772" y1="230" x2="1108" y2="230"/>
      <line x1="740" y1="450" x2="1140" y2="450"/>
      <line x1="940" y1="230" x2="940" y2="450"/>
    </g>
  </g>
  <circle cx="1050" cy="270" r="24" fill="${C.yellow}"/>
  <path d="M1031 258 q19 12 38 0 M1031 282 q19 -12 38 0" fill="none" stroke="#FFFFFF" stroke-opacity="0.75" stroke-width="3"/>`;
}

function frame(inner, accent, a11yTitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-label="${esc(a11yTitle)}">
  <title>${esc(a11yTitle)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.mid}"/><stop offset="1" stop-color="${C.deep}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  ${courtMotif(accent)}
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>
  ${inner}
  <g font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <line x1="64" y1="560" x2="1136" y2="560" stroke="#FFFFFF" stroke-opacity="0.18"/>
    <text x="64" y="598" fill="#FFFFFF" font-size="22" font-weight="800">Malaysian<tspan fill="${C.yellow}"> Open </tspan>Tennis</text>
    <text x="1136" y="598" fill="#CFE3D6" font-size="20" text-anchor="end">malaysianopentennis.com</text>
  </g>
</svg>`;
}

function chip(label, accent, x = 64, y = 64) {
  const w = Math.round(String(label).length * 13.2 + 40);
  return `<g font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <rect x="${x}" y="${y}" width="${w}" height="44" rx="22" fill="#FFFFFF"/>
    <text x="${x + w / 2}" y="${y + 29}" fill="${accent}" font-size="19" font-weight="800" text-anchor="middle" letter-spacing="1.2">${esc(String(label).toUpperCase())}</text>
  </g>`;
}

export function newsCard({ kicker = 'News', title, meta = '', accent = C.green }) {
  const { size, lines } = fitHeadline(title, 640, 4);
  const lh = Math.round(size * 1.12);
  const top = 520 - lh * lines.length - (meta ? 34 : 0);
  const tspans = lines.map((l, i) => `<tspan x="64" dy="${i === 0 ? 0 : lh}">${esc(l)}</tspan>`).join('');
  const inner = `${chip(kicker, accent)}
  <g font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <text x="64" y="${top + size}" fill="#FFFFFF" font-size="${size}" font-weight="800" letter-spacing="-1">${tspans}</text>
    ${meta ? `<text x="64" y="${top + size + lh * (lines.length - 1) + 50}" fill="${C.yellow}" font-size="24" font-weight="700">${esc(meta)}</text>` : ''}
  </g>`;
  return frame(inner, accent, `${kicker}: ${title}`);
}

export function resultCard({ kicker = 'Result', event, winner, score = '', meta = '', accent = C.blue }) {
  const ev = wrap(event, 34, 640, 2);
  const win = fitHeadline(winner, 640, 2, [60, 52, 46, 40]);
  const lh = Math.round(win.size * 1.12);
  const inner = `${chip(kicker, accent)}
  <g font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <text x="64" y="180" fill="#CFE3D6" font-size="34" font-weight="700">${ev.map((l, i) => `<tspan x="64" dy="${i ? 42 : 0}">${esc(l)}</tspan>`).join('')}</text>
    <text x="64" y="${190 + ev.length * 42 + win.size}" fill="#FFFFFF" font-size="${win.size}" font-weight="800" letter-spacing="-1">${win.lines.map((l, i) => `<tspan x="64" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('')}</text>
    ${score ? `<text x="64" y="${200 + ev.length * 42 + win.size + lh * (win.lines.length - 1) + 64}" fill="${C.yellow}" font-size="44" font-weight="800" font-family="ui-monospace,Menlo,Consolas,monospace">${esc(score)}</text>` : ''}
    ${meta ? `<text x="64" y="530" fill="#CFE3D6" font-size="22">${esc(meta)}</text>` : ''}
  </g>`;
  return frame(inner, accent, `${kicker}: ${event} — ${winner}${score ? ' ' + score : ''}`);
}

export function playerCard({ name, role = '', meta = '', accent = C.green }) {
  const initials = String(name).split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
  const nm = fitHeadline(name, 330, 2, [58, 50, 44, 38]);
  const lh = Math.round(nm.size * 1.12);
  const inner = `${chip('Player profile', accent)}
  <g font-family="-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <circle cx="190" cy="290" r="110" fill="#FFFFFF"/>
    <circle cx="190" cy="290" r="110" fill="none" stroke="${C.yellow}" stroke-width="8"/>
    <text x="190" y="322" fill="${accent}" font-size="92" font-weight="800" text-anchor="middle">${esc(initials)}</text>
    <text x="340" y="${270 - (nm.lines.length - 1) * lh / 2}" fill="#FFFFFF" font-size="${nm.size}" font-weight="800" letter-spacing="-1">${nm.lines.map((l, i) => `<tspan x="340" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('')}</text>
    ${role ? `<text x="340" y="${318 + (nm.lines.length - 1) * lh / 2}" fill="${C.yellow}" font-size="24" font-weight="700">${wrap(role, 24, 340, 2).map((l, i) => `<tspan x="340" dy="${i ? 30 : 0}">${esc(l)}</tspan>`).join('')}</text>` : ''}
    <text x="64" y="500" fill="#CFE3D6" font-size="22">${esc(meta || 'Malaysia (MAS)')}</text>
  </g>`;
  return frame(inner, accent, `Player profile card: ${name}${role ? ', ' + role : ''}`);
}

// Alt text helper — use for every card <img>.
export function cardAlt(kind, item) {
  if (kind === 'player') return `Profile card for ${item.name}, Malaysian tennis player — initials monogram on a tennis-court graphic`;
  if (kind === 'result') return `Result graphic: ${item.event} — ${item.winner}${item.score ? ', ' + item.score : ''}`;
  return `Illustration for "${item.title}": ${item.category || 'news'} headline over a stylised tennis court`;
}

export const svgResponse = (svg) =>
  new Response(svg, { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
