// Calendar logic shared by the homepage, /tournaments/ and the events guide.
//
// Status rules (never assume an event happened because its date passed):
//   • An explicit `status` in the data (Completed / Postponed / Cancelled / Unconfirmed)
//     always wins. Only set Completed when there is evidence (results or a report).
//   • With no explicit status, status is derived from the dates in Malaysia time:
//       start in the future  → Upcoming
//       today within dates   → Ongoing
//       end date has passed  → Unconfirmed (we have no evidence either way)
// The site rebuilds on a weekly schedule (see .github/workflows/deploy.yaml), so
// Upcoming/Ongoing labels stay current between content updates.

import { TOURNAMENTS } from '../data/tournaments.js';

export const STATUSES = ['Upcoming', 'Ongoing', 'Completed', 'Postponed', 'Cancelled', 'Unconfirmed'];

// Today's date in Malaysia (UTC+8) as YYYY-MM-DD, evaluated at build time.
export function todayMY(now = new Date()) {
  return new Date(now.getTime() + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

export function statusOf(t, today = todayMY()) {
  if (t.status) return t.status;
  if (!t.start) return 'Unconfirmed';
  if (t.start > today) return 'Upcoming';
  if ((t.end || t.start) >= today) return 'Ongoing';
  return 'Unconfirmed';
}

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parts = (iso) => { const [y, m, d] = iso.split('-').map(Number); return { y, m: MON[m - 1], d }; };

// "15–18 Jul 2026", "28 Jul – 2 Aug 2026", "29 Dec 2026 – 3 Jan 2027"
export function fmtRange(start, end) {
  if (!start) return 'Date TBC';
  const a = parts(start), b = parts(end || start);
  if (start === (end || start)) return `${a.d} ${a.m} ${a.y}`;
  if (a.y !== b.y) return `${a.d} ${a.m} ${a.y} – ${b.d} ${b.m} ${b.y}`;
  if (a.m !== b.m) return `${a.d} ${a.m} – ${b.d} ${b.m} ${b.y}`;
  return `${a.d}–${b.d} ${a.m} ${b.y}`;
}
export function fmtDate(iso) {
  if (!iso) return '';
  const a = parts(iso); return `${a.d} ${a.m} ${a.y}`;
}

export function withStatus(list = TOURNAMENTS, today = todayMY()) {
  return list.map((t) => ({ ...t, status: statusOf(t, today), dates: fmtRange(t.start, t.end) }));
}

// Upcoming + ongoing, nearest first.
export function upcoming(list, today = todayMY()) {
  return withStatus(list, today)
    .filter((t) => t.status === 'Upcoming' || t.status === 'Ongoing')
    .sort((a, b) => a.start.localeCompare(b.start));
}

// Everything whose dates have passed (or is postponed/cancelled), most recent first.
export function past(list, today = todayMY()) {
  return withStatus(list, today)
    .filter((t) => !(t.status === 'Upcoming' || t.status === 'Ongoing'))
    .sort((a, b) => (b.end || b.start).localeCompare(a.end || a.start));
}

export function counts(list, today = todayMY()) {
  const rows = withStatus(list, today);
  return STATUSES.map((s) => ({ s, n: rows.filter((t) => t.status === s).length })).filter((c) => c.n > 0);
}

// Completed events that have at least one sourced result, most recent first.
export function recentResults(list, n = 5, today = todayMY()) {
  return past(list, today).filter((t) => t.status === 'Completed' && t.results?.length).slice(0, n);
}
