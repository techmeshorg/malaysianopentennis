// Malaysian tennis calendar 2026 (data only; status logic lives in src/lib/events.js).
//
// Base list: TennisMalaysia "Calendar of Events 2026" (V3, 11 Sep 2026), plus later
// TennisMalaysia notices and results checked 5 Nov 2026 (see CALENDAR_META).
// Fields per event:
//   name, venue, start/end (YYYY-MM-DD), category (our own label, for filtering)
//   status   — set ONLY with evidence: 'Completed' | 'Postponed' | 'Cancelled'.
//              Leave unset for future events (shown as Upcoming/Ongoing from the dates);
//              past events without evidence automatically show as 'Unconfirmed'.
//   inMalaysia: false  — overseas events involving Malaysian teams/players
//   results: [{ category, winner, runnerUp?, score? }]  — only from official/reliable sources
//   link (official page) · resultsLink · entryLink · entryDeadline (YYYY-MM-DD)
//   reportUrl — our own news article about the event · org — override organiser badge
//   sourceUrl + sourceLabel — evidence for status/results · note — short reader-facing note
// Do not relabel 2026 events as 2027; add 2027 events only once officially published.

export const CALENDAR_META = {
  sourceLabel: 'TennisMalaysia Calendar of Events 2026, version 3 (updated 11 Sep 2026)',
  sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf',
  newsUrl: 'https://www.ltam.my/tournaments',
  checked: '5 November 2026',
  updated: '5 November 2026',
};

// Evidence shorthands
const TM_V3 = { sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3 (lists as completed)' };
const ct = (id) => 'https://www.coretennis.net/majic/pageServer/0t0100000d/en/tid/{}/Tournament-Info.html'.replace('{}', id);

export const TOURNAMENTS = [
  // ---------- January – May (completed per TennisMalaysia) ----------
  { name: 'TennisMalaysia National Circuit 2026, Leg 1', venue: 'National Tennis Centre, KL', start: '2026-01-20', end: '2026-01-25', status: 'Completed', category: 'National Circuit', link: 'https://www.ltam.my/tournaments/2024/2026-nc-leg1', ...TM_V3,
    results: [{ category: "Women's Open singles", winner: 'Daania Daniella Hazli', runnerUp: 'Elsa Wan', score: '7-5 3-6 6-3' }],
    resultsLink: 'https://www.thestar.com.my/sport/tennis/2026/01/28/daania-dazzles-attennis-national-circuit-to-land-two-titles' },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 1', venue: 'KLLTA, Kuala Lumpur', start: '2026-01-28', end: '2026-02-01', status: 'Completed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg1', ...TM_V3 },
  { name: 'ATF 14&U Series 1, Negeri Sembilan', venue: 'Seremban', start: '2026-02-08', end: '2026-02-14', status: 'Completed', category: 'ATF Junior', ...TM_V3 },
  { name: 'World Junior Tennis Asia/Oceania Pre-Qualifying 14&U Girls', venue: 'Vietnam', start: '2026-03-02', end: '2026-03-07', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'World Junior Tennis Asia/Oceania Pre-Qualifying 14&U Boys', venue: 'Vietnam', start: '2026-03-09', end: '2026-03-14', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'Junior Billie Jean King Cup Pre-Qualifying 16&U', venue: 'Sri Lanka', start: '2026-03-16', end: '2026-03-21', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'Junior Davis Cup Pre-Qualifying 16&U', venue: 'Sri Lanka', start: '2026-03-23', end: '2026-03-28', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 2 Kedah', venue: 'UUM, Kedah', start: '2026-03-31', end: '2026-04-04', status: 'Completed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg2', ...TM_V3 },
  { name: 'ITF J300 44th Premier Sarawak Cup', venue: 'SLTA Centre, Jalan Crookshank, Kuching', start: '2026-04-06', end: '2026-04-12', status: 'Completed', category: 'ITF',
    results: [{ category: "Boys' singles", winner: 'D. Jovanovski', runnerUp: 'A. Paparkar', score: '6-1 6-1' }, { category: "Girls' singles", winner: 'A. Lizunova', runnerUp: 'F. De Bresser', score: '6-2 6-2' }],
    resultsLink: ct('129899'), sourceLabel: 'CoreTennis results' },
  { name: 'ATF 14&U Series 2, Penang', venue: 'Penang', start: '2026-04-07', end: '2026-04-11', status: 'Completed', category: 'ATF Junior', ...TM_V3 },
  { name: 'ITF J200 Kuala Lumpur', venue: 'National Tennis Centre, KL', start: '2026-04-13', end: '2026-04-19', status: 'Completed', category: 'ITF',
    link: 'https://www.itftennis.com/en/tournament/j200-kuala-lumpur/mas/2026/j-j200-mas-2026-001/',
    results: [{ category: "Boys' singles", winner: 'Arnav Paparkar (IND)', runnerUp: 'Kanta Watanabe (JPN)', score: '6-1 6-2' }, { category: "Girls' singles", winner: 'U. Jeong', runnerUp: 'S. Miyazawa', score: '6-2 6-4' }],
    resultsLink: ct('129940'), sourceLabel: 'CoreTennis results' },
  { name: 'ATF 14&U Series 3, Perak', venue: 'Ipoh', start: '2026-04-14', end: '2026-04-18', status: 'Completed', category: 'ATF Junior', ...TM_V3 },
  { name: 'World Chinese Tennis Competition', venue: 'Kuching', start: '2026-04-15', end: '2026-04-18', status: 'Completed', category: 'Invitational', ...TM_V3 },
  { name: 'World Junior Tennis Asia/Oceania Final Qualifying 14&U Girls', venue: 'Kuching', start: '2026-04-20', end: '2026-04-26', status: 'Completed', category: 'International / Team', sourceUrl: 'https://www.theborneopost.com/?p=1318173', sourceLabel: 'Borneo Post report' },
  { name: 'World Junior Tennis Asia/Oceania Final Qualifying 14&U Boys', venue: 'Kuching', start: '2026-04-27', end: '2026-05-03', status: 'Completed', category: 'International / Team', ...TM_V3 },
  { name: 'TennisMalaysia National Circuit 2026, Leg 2', venue: 'Seremban', start: '2026-04-28', end: '2026-05-03', status: 'Completed', category: 'National Circuit', link: 'https://www.ltam.my/tournaments/2026/2026-nc-leg2', ...TM_V3 },
  { name: 'ATF/ITF 12&U Team Competition – Southeast Asia qualifying', venue: 'Nonthaburi, Thailand', start: '2026-05-04', end: '2026-05-09', status: 'Completed', inMalaysia: false, category: 'International / Team',
    results: [{ category: 'Girls', winner: 'Malaysia (won the event; qualified for the Finals)' }, { category: 'Boys', winner: 'Malaysia finished 4th' }],
    resultsLink: 'https://www.asiantennis.com/news/south-east-asias-u12-challenge-ends-with-singapore-spots-confirmed/', sourceLabel: 'Asian Tennis Federation' },
  { name: 'Junior Billie Jean King Cup Final Qualifying 16&U', venue: 'Kazakhstan', start: '2026-05-11', end: '2026-05-16', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 3', venue: 'National Tennis Centre, KL', start: '2026-05-13', end: '2026-05-17', status: 'Completed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg3', ...TM_V3 },
  { name: 'Junior Davis Cup Final Qualifying 16&U', venue: 'Kazakhstan', start: '2026-05-18', end: '2026-05-23', status: 'Completed', inMalaysia: false, category: 'International / Team', ...TM_V3 },
  { name: 'TennisMalaysia National Junior Championship 2026 (1)', venue: 'National Tennis Centre, KL', start: '2026-05-22', end: '2026-05-25', status: 'Completed', category: 'National Junior', link: 'https://www.ltam.my/tournaments/2026/2026-jt-champ', ...TM_V3 },
  { name: 'R.O.G National 2026 (1)', venue: 'National Tennis Centre, KL', start: '2026-05-22', end: '2026-05-25', status: 'Completed', category: 'R.O.G National', link: 'https://www.ltam.my/tournaments/2026/2026-jt-champ', ...TM_V3 },

  // ---------- June – December ----------
  { name: 'MSSM 2026 (schools championship)', venue: 'Johor', start: '2026-06-06', end: '2026-06-14', status: 'Completed', category: 'Schools / Games', ...TM_V3, note: 'Results not yet published in sources we could verify.' },
  { name: 'ITF J30 Penang', venue: 'Azman Hashim Sport Arena, USM, Gelugor, Penang', start: '2026-06-09', end: '2026-06-14', status: 'Completed', category: 'ITF',
    results: [{ category: "Boys' singles", winner: 'H. Chen', runnerUp: 'T. Kosiri', score: '7-6(3) 6-2' }, { category: "Girls' singles", winner: 'S. Gurung', runnerUp: 'J. Diaz', score: '2-6 6-0 6-0' }],
    resultsLink: ct('132395'), sourceLabel: 'CoreTennis results' },
  { name: '2026 Billie Jean King Cup Asia/Oceania Group II', venue: 'National Tennis Centre, KL', start: '2026-06-15', end: '2026-06-20', status: 'Completed', category: 'International / Team',
    link: 'https://www.billiejeankingcup.com/',
    results: [{ category: 'Promoted to Group I (2027)', winner: 'Philippines, Hong Kong China' }, { category: 'Relegated to Group III', winner: 'Laos, Kyrgyzstan' }, { category: 'Malaysia', winner: 'Remain in Group II for 2027' }],
    resultsLink: 'https://www.asiantennis.com/news/philippines-and-hong-kong-china-earn-promotion-after-dramatic-finish-in-kuala-lumpur/', sourceLabel: 'Asian Tennis Federation' },
  { name: 'ITF J30 Selangor', venue: 'MBPJ Tennis Courts, SS7 Kelana Jaya, Petaling Jaya', start: '2026-06-16', end: '2026-06-21', status: 'Completed', category: 'ITF',
    note: 'TennisMalaysia’s calendar listed the venue as Epsom; the results listing gives Kelana Jaya.',
    results: [{ category: "Boys' singles", winner: 'Z. Chen', runnerUp: 'P. Leekul', score: '6-3 7-5' }, { category: "Girls' singles", winner: 'S. Gurung', runnerUp: 'L. Leung', score: '6-3 5-7 6-3' }],
    resultsLink: ct('133184'), sourceLabel: 'CoreTennis results' },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 4 Perak', venue: 'Ipoh, Perak', start: '2026-07-01', end: '2026-07-05', status: 'Completed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg4',
    results: [{ category: "Boys' 16&U singles", winner: 'Mak Zoo-M (SEL)', score: '6-0 6-0' }, { category: "Girls' 16&U singles", winner: 'Rio Mikaela Zahri (KL)', score: '6-3 6-4' }],
    resultsLink: 'https://www.ltam.my/tournaments/2026/2026-jt-leg4', sourceLabel: 'Official draw sheets' },
  { name: '2026 Davis Cup Asia/Oceania Group III', venue: 'National Tennis Centre, KL', start: '2026-07-15', end: '2026-07-18', status: 'Completed', category: 'International / Team',
    link: 'https://www.daviscup.com/',
    results: [{ category: 'Winner', winner: 'Iran', runnerUp: 'Jordan', score: '2-0' }, { category: 'Promoted to 2027 World Group II Play-offs', winner: 'Iran, Jordan, Saudi Arabia' }, { category: 'Malaysia', winner: 'Relegated to Group IV (lost play-off 1-2 to Philippines)' }],
    resultsLink: 'https://www.asiantennis.com/news/iran-jordan-and-saudi-arabia-secure-promotion-from-davis-cup-asia-oceania-group-iii/', sourceLabel: 'Asian Tennis Federation',
    reportUrl: '/news/malaysia-relegated-davis-cup-group-iv-2026/' },
  { name: 'ITF J60 Seremban', venue: 'Seremban', start: '2026-07-21', end: '2026-07-26', status: 'Completed', category: 'ITF',
    link: 'https://www.itftennis.com/en/tournament/j60-seremban/mas/2026/j-j60-mas-2026-002/',
    results: [{ category: "Boys' singles", winner: 'Y. Hino', runnerUp: 'T. Srisen', score: '6-1 7-5' }, { category: "Girls' singles", winner: 'N. Wada', runnerUp: 'C. Kaewka', score: '7-6(4) 7-5' }],
    resultsLink: ct('132696'), sourceLabel: 'CoreTennis results' },
  { name: 'ITF J60 Ipoh', venue: 'Arena Tenis Perak, Kompleks Tenis MBI, Ipoh', start: '2026-07-28', end: '2026-08-02', status: 'Completed', category: 'ITF',
    results: [{ category: "Boys' singles", winner: 'S. Jaejun', runnerUp: 'J. Li', score: '6-4 6-4' }, { category: "Girls' singles", winner: 'C. Kaewka', runnerUp: 'L. Naswardhani', score: '6-3 6-4' }],
    resultsLink: ct('132764'), sourceLabel: 'CoreTennis results' },
  { name: 'CIMB KL Open 2026 (National Circuit Leg 3)', venue: 'National Tennis Centre, KL', start: '2026-07-28', end: '2026-08-02', status: 'Completed', category: 'National Circuit', link: 'https://www.ltam.my/tournaments/2026/2026-nc-klopen',
    results: [
      { category: "Men's singles", winner: 'Mitsuki Leong', runnerUp: 'Darrshan Suresh Kumar' },
      { category: "Women's singles", winner: 'Daania Daniella Abdul Hazli', runnerUp: 'Iman Syuhada Abdullah', score: '6-0 6-3' },
      { category: "Men's doubles", winner: 'Darrshan Suresh Kumar / Koay Hao Sheng', runnerUp: 'Louis Tan / Shaun Tung', score: '6-4 6-3' },
      { category: "Women's doubles", winner: 'Daania Daniella / Sharifah Elsa Wan', runnerUp: 'Iman Syuhada / Adani Raihan', score: '6-4 6-3' },
    ],
    resultsLink: 'https://www.thestar.com.my/sport/tennis/2026/08/04/daania-gears-up-for-sukma-after-winning-two-titles-at-cimb-kl-open', sourceLabel: 'The Star',
    reportUrl: '/news/mitsuki-leong-wins-kl-open-2026/' },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 5 Melaka', venue: 'MITC, Ayer Keroh, Melaka', start: '2026-08-05', end: '2026-08-09', status: 'Completed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg5',
    results: [{ category: "Boys' 16&U singles", winner: 'Ryoga Kho (SWK)', score: '3-6 6-0 7-5' }, { category: "Girls' 16&U singles", winner: 'Rio Mikaela Zahri (KL)', score: '6-0 6-1' }],
    resultsLink: 'https://www.ltam.my/tournaments/2026/2026-jt-leg5', sourceLabel: 'Official draw sheets' },
  { name: 'ATF 14&U Series 4, Grade A (Southeast Asia)', venue: 'National Tennis Centre, KL', start: '2026-08-10', end: '2026-08-15', status: 'Completed', category: 'ATF Junior', ...TM_V3 },
  { name: 'SUKMA 2026 (Malaysia Games) tennis', venue: 'Kelana Jaya Sports Complex, Petaling Jaya', start: '2026-08-17', end: '2026-08-24', status: 'Completed', category: 'Schools / Games', link: 'https://www.ltam.my/tournaments/2026/2026-sukma',
    results: [
      { category: "Men's singles", winner: 'Darrshan Suresh Kumar (FT)', runnerUp: 'Gareth Lim (FT), retired injured' },
      { category: "Women's singles", winner: 'Shihomi Leong (Perak)', runnerUp: 'Anja Samia Nayar (Terengganu), retired' },
      { category: "Men's / women's team", winner: 'Federal Territories (both)' },
    ],
    resultsLink: 'https://www.thestar.com.my/sport/tennis/2026/08/24/ft-tennis-players-stand-out-on-final-day-of-action', sourceLabel: 'The Star',
    reportUrl: '/news/sukma-2026-tennis-federal-territories-six-golds/' },
  { name: 'Selangor MBPJ Junior Tennis Championship 2026', venue: 'Selangor', start: '2026-08-29', end: '2026-09-02', status: 'Completed', category: 'Schools / Games', link: 'https://www.ltam.my/events/selangor-mbpj-junior-tennis-championship-2026', ...TM_V3 },
  { name: 'ITF World Tennis Tour M15 (September, week 1)', venue: 'Venue not announced', start: '2026-09-01', end: '2026-09-06', status: 'Cancelled', category: 'ITF', note: 'Removed from TennisMalaysia’s calendar in version 3 (11 Sep 2026); no reason given.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'ITF World Tennis Tour M15 (September, week 2)', venue: 'Venue not announced', start: '2026-09-08', end: '2026-09-13', status: 'Cancelled', category: 'ITF', note: 'Removed from TennisMalaysia’s calendar in version 3 (11 Sep 2026); no reason given.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'ATF/ITF 12&U Team Competition – Asia Finals', venue: 'Singapore', start: '2026-09-15', end: '2026-09-20', inMalaysia: false, category: 'International / Team', note: 'Malaysia’s girls’ team qualified. We have not found published results.' },
  { name: 'ATF 14&U Series 5, Melaka', venue: 'MITC, Melaka', start: '2026-09-22', end: '2026-09-26', category: 'ATF Junior', link: 'https://www.ltam.my/events/atf-14-u-series-5-melaka' },
  { name: 'ITF World Tennis Tour W15 (1)', venue: 'Venue not announced', start: '2026-09-22', end: '2026-09-27', status: 'Cancelled', category: 'ITF', note: 'Removed from TennisMalaysia’s calendar in version 3 (11 Sep 2026); no reason given.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'ITF World Tennis Tour W15 (2)', venue: 'Venue not announced', start: '2026-09-29', end: '2026-10-04', status: 'Cancelled', category: 'ITF', note: 'Removed from TennisMalaysia’s calendar in version 3 (11 Sep 2026); no reason given.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'ATF 14&U Series 6, Sabah', venue: 'Sabah', start: '2026-10-18', end: '2026-10-24', status: 'Cancelled', category: 'ATF Junior', note: 'Marked cancelled on TennisMalaysia’s calendar.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'TennisMalaysia National Circuit 2026, Leg 4 Melaka', venue: 'Ayer Keroh, Melaka', start: '2026-10-20', end: '2026-10-25', status: 'Postponed', category: 'National Circuit', link: 'https://www.ltam.my/tournaments/2026/2026-nc-leg4', note: 'Postponed due to weather conditions; new dates to be announced.', sourceUrl: 'https://www.ltam.my/tournaments/2026/2026-nc-leg4', sourceLabel: 'TennisMalaysia notice' },
  { name: 'ITF J100 Kuala Lumpur', venue: 'DBKL Tennis Centre, Kuala Lumpur', start: '2026-10-27', end: '2026-11-01', status: 'Completed', category: 'ITF',
    note: 'Moved from 6–10 Oct. TennisMalaysia listed the National Tennis Centre; the results listing gives the DBKL Tennis Centre.',
    results: [{ category: "Boys' singles", winner: 'Mikaeel Ali Baig (PAK)', runnerUp: 'Sota Kagawa (JPN)', score: '6-0 6-1' }, { category: "Girls' singles", winner: 'X. Lan', runnerUp: 'R. Miyamoto', score: '6-3 6-2' }],
    resultsLink: 'https://www.coretennis.net/majic/pageServer/0t0100000d/en/tid/136151/Tournament-Rounds.html', sourceLabel: 'CoreTennis results' },
  { name: 'TennisMalaysia Junior Tour 2026, Leg 6 Negeri Sembilan', venue: 'Seremban', start: '2026-10-28', end: '2026-11-01', status: 'Postponed', category: 'Junior Tour', link: 'https://www.ltam.my/tournaments/2026/2026-jt-leg6', note: 'Postponed due to weather conditions; new dates to be announced.', sourceUrl: 'https://www.ltam.my/tournaments/2026/2026-jt-leg6', sourceLabel: 'TennisMalaysia notice' },
  { name: 'ITF World Tennis Tour M15 Kuala Lumpur (1)', venue: 'National Tennis Centre, KL', start: '2026-11-09', end: '2026-11-15', category: 'ITF',
    link: 'https://www.world.tennis/en/tournament/m15-kuala-lumpur/mas/2026/m-itf-mas-2026-001/draws-and-results/', note: 'Moved from 3–8 Nov in the September calendar update.' },
  { name: 'ITF World Tennis Tour M15 Kuala Lumpur (2)', venue: 'National Tennis Centre, KL', start: '2026-11-16', end: '2026-11-22', category: 'ITF', note: 'Moved from 10–15 Nov in the September calendar update.', sourceUrl: 'https://cdn.prod.website-files.com/60740f7c45729bf0942e165e/6aa3bd44ebdaf1f88631f17a_(11.09.26)%20CALENDAR%202026%20V2%20TennisMalaysia%20(1).pdf', sourceLabel: 'TennisMalaysia calendar V3' },
  { name: 'Penang Open Junior International 2026', venue: 'Penang', start: '2026-11-24', end: '2026-11-28', category: 'Junior / International', org: 'State', link: 'https://www.ltam.my/events/penang-open-jr-international-2026', note: 'Organised by the Penang Lawn Tennis Association. 10, 12, 14 and 16&U singles and doubles.' },
  { name: 'Perlis Open Junior International 2026', venue: 'Kangar, Perlis', start: '2026-11-29', end: '2026-12-03', category: 'Junior / International', org: 'State', link: 'https://www.ltam.my/events/perlis-open-jr-international-2026', note: 'Organised by the Perlis Tennis Association with the Perlis state government. 10–16&U singles and doubles.' },
  { name: 'TennisMalaysia National Junior Championship 2026 (2)', venue: 'National Tennis Centre, KL', start: '2026-12-10', end: '2026-12-13', category: 'National Junior', link: 'https://www.ltam.my/events/tm-junior-2026-ntc' },
  { name: 'R.O.G National 2026 (2)', venue: 'National Tennis Centre, KL', start: '2026-12-10', end: '2026-12-13', category: 'R.O.G National', link: 'https://www.ltam.my/events/r-o-g-2026' },
];


// ---- Category metadata (colour-coding for the table & filters) ----
// Editorial classification only (see note above). Colours chosen for contrast.
export const CAT_META = {
  'National Circuit':       { bg: '#E4F2EA', fg: '#0F5C33' },
  'Junior Tour':            { bg: '#E9F6EE', fg: '#167D45' },
  'National Junior':        { bg: '#FDE9D6', fg: '#9A4B0B' },
  'R.O.G National':         { bg: '#F6ECD8', fg: '#7A5A12' },
  'ITF':                    { bg: '#E2EEF8', fg: '#155189' },
  'ATF Junior':             { bg: '#DDF0EF', fg: '#0C5F5E' },
  'International / Team':    { bg: '#E6E6FA', fg: '#3B2C8C' },
  'Junior / International': { bg: '#E0F2F6', fg: '#0E5C70' },
  'Invitational':           { bg: '#F0E6FA', fg: '#5B2A8C' },
  'Schools / Games':        { bg: '#FBE6EE', fg: '#9A1B52' },
};
// Categories in first-appearance order, for filter UI.
export const CATEGORIES = (() => {
  const seen = [];
  for (const t of TOURNAMENTS) if (!seen.includes(t.category)) seen.push(t.category);
  return seen;
})();

// ---- Organiser badge ----
// Derived from the event name (our own label, not an official logo).
export const ORG_META = {
  TennisMalaysia: { label: 'TennisMalaysia', color: '#167D45' },
  ITF:            { label: 'ITF',            color: '#1F6FB2' },
  ATF:            { label: 'ATF',            color: '#0C7C7B' },
  'Schools/Govt': { label: 'Schools / Govt', color: '#B45309' },
  Invitational:   { label: 'Invitational',   color: '#6D28D9' },
  State:          { label: 'State association', color: '#0E5C70' },
  Other:          { label: 'Other',          color: '#5A6862' },
};
export function orgOf(name) {
  const n = name || '';
  if (/ITF|J\d{3}|J\d{2,3}\b|World Tennis Tour/i.test(n)) return 'ITF';
  if (/\bATF\b/i.test(n)) return 'ATF';
  if (/Davis Cup|Billie Jean King Cup|WJTC|World Junior Tennis|Fed Cup/i.test(n)) return 'ITF';
  if (/TennisMalaysia|National Circuit|Junior Tour|R\.?O\.?G|National Junior|National Closed/i.test(n)) return 'TennisMalaysia';
  if (/MSSM|SUKMA|Sukan|MSSD|Schools?|Games/i.test(n)) return 'Schools/Govt';
  if (/Chinese|Invitational/i.test(n)) return 'Invitational';
  return 'TennisMalaysia';
}
