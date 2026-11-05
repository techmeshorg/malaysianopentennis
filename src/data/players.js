// Malaysian player profiles.
//
// Rules for this file (see Editorial Policy):
//  • Every ranking carries its official release date and a source link.
//  • Current ranking and career-high are separate lists.
//  • "National No. X" always names the list: TennisMalaysia National Circuit ranking + date.
//  • Unconfirmed details are left out rather than estimated. Juniors: tennis information only.
//  • `intro` = one-line directory text; `bio` = profile-only paragraphs (no duplication).
//  • Re-check monthly and update `checked` (also drives the sitemap lastmod).
//
// Fields: slug, name, fullName, gender ('men'|'women'), status ('Active'|'Junior'|'Retired'),
// featured, tour, intro, headline, born, plays, mainEvents,
// rankings: { current: [{system, value, date, source}], high: [{system, value, date, source}] },
// results: [{date, text, source}], highlights: [text | {text, source}], officialProfiles, sources, checked

export const PLAYERS_CHECKED = '2026-11-05';
const RANK_DATE = '2026-11-02'; // ATP & WTA ranking release used for current figures

const ATP_MAS = { label: 'ATP rankings, Malaysia filter', url: 'https://www.atptour.com/en/rankings/singles?rankRange=1-5000&region=MAS' };
const ATP_MAS_D = { label: 'ATP doubles rankings, Malaysia filter', url: 'https://www.atptour.com/en/rankings/doubles?rankRange=1-5000&region=MAS' };
const WTA_RANK = { label: 'WTA rankings', url: 'https://www.wtatennis.com/rankings/singles' };
const TM_NC = { label: 'TennisMalaysia National Circuit ranking, 30 Sep 2026', url: 'https://www.ltam.my/rankings/tennismalaysia-national-circuit-rankings-30-sept-2026' };
const TM_NC_M = { label: 'TennisMalaysia men’s singles ranking (PDF)', url: 'https://cdn.prod.website-files.com/6075acecd581bd2a73076e53/6ac759eea211cadd3908f16c_TMNC26%20Men%27s%20Singles%20Ranking%20(1).pdf' };
const TM_NC_W = { label: 'TennisMalaysia women’s singles ranking (PDF)', url: 'https://cdn.prod.website-files.com/6075acecd581bd2a73076e53/6ac75a65a211cadd390949cf_TMNC26%20Women%27s%20Singles%20Ranking%20(1).pdf' };
const STAR_DC = { label: 'The Star, 20 Jul 2026', url: 'https://www.thestar.com.my/sport/tennis/2026/07/20/home-court-misery-as-malaysian-aces-slip-into-davis-cup-relegation' };
const STAR_SEA = { label: 'The Star, 13 Dec 2025', url: 'https://www.thestar.com.my/sport/tennis/2025/12/13/darrshans-sea-games-debut-brings-a-team-bronze' };
const DC_REPORT = { label: 'our report', url: '/news/malaysia-relegated-davis-cup-group-iv-2026/' };
const KLO_REPORT = { label: 'our report', url: '/news/mitsuki-leong-wins-kl-open-2026/' };
const SUKMA_REPORT = { label: 'our report', url: '/news/sukma-2026-tennis-federal-territories-six-golds/' };
const TE_BJK = { label: 'Tennis Explorer: Billie Jean King Cup 2026', url: 'https://www.tennisexplorer.com/billie-jean-king-cup/2026/wta-women/' };

export const MEN = [
  {
    slug: 'mitsuki-leong', name: 'Mitsuki Leong', fullName: 'Leong Mitsuki Wei Kang', gender: 'men',
    status: 'Active', featured: true, tour: 'ATP Challenger & ITF',
    intro: 'Malaysia’s highest-ranked man on the ATP list, competing on the Challenger and ITF circuits in Asia and Europe.',
    headline: 'Malaysia’s top-ranked man in singles, with a career-high ATP ranking set in October 2026.',
    born: '6 August 2004', plays: 'Right-handed',
    mainEvents: 'ATP Challenger Tour and ITF World Tennis Tour; TennisMalaysia National Circuit; SEA Games',
    rankings: {
      current: [
        { system: 'ATP singles', value: 'No. 408', date: RANK_DATE, source: ATP_MAS },
        { system: 'ATP doubles', value: 'No. 1612', date: RANK_DATE, source: ATP_MAS_D },
        { system: 'TennisMalaysia men’s singles', value: 'No. 1', date: '2026-09-30', source: TM_NC_M },
      ],
      high: [{ system: 'ATP singles', value: 'No. 405', date: '19 Oct 2026', source: ATP_MAS }],
    },
    results: [
      { date: 'Nov 2026', text: 'Taipei Challenger: qualified for the main draw, lost in the first round.', source: { label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/leong-e28bd/' } },
      { date: 'Sep 2026', text: 'Zhangjiagang Challenger: semi-finalist after coming through qualifying; quarter-finalist at the Guangzhou Challenger the same month.', source: { label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/leong-e28bd/' } },
      { date: 'Aug 2026', text: 'Won his first CIMB KL Open title (TennisMalaysia National Circuit Leg 3), beating Darrshan Suresh Kumar in the final.', source: KLO_REPORT },
    ],
    highlights: [
      { text: 'Men’s team bronze at the 2025 SEA Games in Thailand.', source: STAR_SEA },
      { text: 'SUKMA 2024 men’s singles gold medallist.', source: { label: 'theSun', url: 'https://thesun.my/sports/tennis-players-mitsuki-sharifah-elsa-bid-golden-goodbye-to-sukma-fc12894706/' } },
    ],
    bio: ['Mitsuki Leong plays most of his tennis on hard courts on the ATP Challenger and ITF circuits. His run to the Zhangjiagang Challenger semi-finals in September 2026 helped lift him to a career-high ranking of No. 405 in October. He is the brother of Shihomi Leong.'],
    officialProfiles: [{ label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/mitsuki-wei-kang-leong/l0i5/overview' }],
    sources: [{ label: 'Tennis Explorer (results)', url: 'https://www.tennisexplorer.com/player/leong-e28bd/' }, { label: 'Tennis Abstract', url: 'https://www.tennisabstract.com/cgi-bin/player.cgi?p=MitsukiWeiKangLeong' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'darrshan-suresh-kumar', name: 'Darrshan Suresh Kumar', fullName: 'Darrshan Suresh Kumar', gender: 'men',
    status: 'Active', featured: true, tour: 'Davis Cup & NCAA',
    intro: 'Davis Cup player and 2026 SUKMA singles champion, playing US college tennis for the University of North Dakota.',
    headline: 'Davis Cup player and SUKMA 2026 men’s singles champion for the Federal Territories.',
    born: '2007', plays: '',
    mainEvents: 'Davis Cup (Malaysia); NCAA college tennis (University of North Dakota); TennisMalaysia National Circuit; SUKMA; SEA Games',
    note: 'Not to be confused with Darrshan Suresh (born 2001), a different Malaysian player who competes on the ITF circuit.',
    rankings: {
      current: [{ system: 'TennisMalaysia men’s singles', value: 'No. 8', date: '2026-09-30', source: TM_NC_M }],
      high: [],
    },
    rankingNote: 'He did not hold an ATP ranking on the 2 Nov 2026 list.',
    results: [
      { date: 'Aug 2026', text: 'SUKMA 2026: men’s singles and men’s doubles gold (with Imran Daniel Hazli) for the Federal Territories.', source: SUKMA_REPORT },
      { date: 'Aug 2026', text: 'CIMB KL Open: runner-up in men’s singles to Mitsuki Leong; men’s doubles champion with Koay Hao Sheng.', source: KLO_REPORT },
      { date: 'Jul 2026', text: 'Davis Cup Asia/Oceania Group III, Kuala Lumpur: won 2 of 3 singles rubbers, including 7-6(5), 6-3 over the Philippines’ Eric Jr Olivarez in the relegation play-off.', source: DC_REPORT },
    ],
    highlights: [
      { text: 'Men’s team bronze at the 2025 SEA Games.', source: STAR_SEA },
      { text: 'Part of the Federal Territories team that ended a 30-year SUKMA tennis gold drought in 2024.', source: { label: 'The Star, 21 Aug 2024', url: 'https://thestar.com.my/sport/tennis/2024/08/21/darrshan-wants-more-after-30-year-gold-drought-ends' } },
    ],
    bio: ['Darrshan Suresh Kumar joined the University of North Dakota’s men’s tennis programme in 2025. At the 2026 Davis Cup in Kuala Lumpur he was Malaysia’s most successful singles player, though the team was relegated to Group IV.'],
    officialProfiles: [],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/suresh-kumar-5a16e/' }, STAR_DC, { label: 'The Star, 21 Jul 2025 (US college move)', url: 'https://www.thestar.com.my/sport/tennis/2025/07/21/darrshan-hopes-to-rise-higher-as-hes-set-for-us-collegiate-tennis' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'koay-hao-sheng', name: 'Koay Hao Sheng', fullName: 'Koay Hao Sheng', gender: 'men',
    status: 'Active', featured: false, tour: 'ITF & Davis Cup',
    intro: 'Davis Cup squad member and 2026 KL Open doubles champion.',
    headline: 'Davis Cup squad member and 2026 KL Open men’s doubles champion.',
    born: '1998', plays: '',
    mainEvents: 'Davis Cup (Malaysia); ITF World Tennis Tour; TennisMalaysia National Circuit; SEA Games',
    rankings: {
      current: [
        { system: 'ATP singles', value: 'No. 1634 (tied)', date: RANK_DATE, source: ATP_MAS },
        { system: 'TennisMalaysia men’s singles', value: '1,050 points (listed No. 2 on the PDF)', date: '2026-09-30', source: TM_NC_M },
      ],
      high: [{ system: 'ATP singles', value: 'No. 1596 (tied)', date: '14 Sep 2026', source: ATP_MAS }],
    },
    results: [
      { date: 'Aug 2026', text: 'CIMB KL Open men’s doubles champion with Darrshan Suresh Kumar.', source: KLO_REPORT },
      { date: 'Jul 2026', text: 'Davis Cup Group III, Kuala Lumpur: played singles against Iran and Saudi Arabia and the deciding doubles against the Philippines.', source: { label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/koay/' } },
    ],
    highlights: [{ text: 'Men’s team bronze at the 2025 SEA Games.', source: STAR_SEA }],
    officialProfiles: [{ label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/hao-sheng-koay/ki34/overview' }],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/koay/' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'imran-daniel-hazli', name: 'Imran Daniel Hazli', fullName: 'Imran Daniel Abd Hazli', gender: 'men',
    status: 'Active', featured: false, tour: 'ITF & Davis Cup',
    intro: 'Davis Cup player and SUKMA 2026 doubles and mixed doubles gold medallist.',
    headline: 'Davis Cup player and double SUKMA 2026 gold medallist.',
    born: '2005', plays: '',
    mainEvents: 'Davis Cup (Malaysia); ITF World Tennis Tour; SUKMA',
    rankings: {
      current: [
        { system: 'ATP singles', value: 'No. 1734 (tied)', date: RANK_DATE, source: ATP_MAS },
        { system: 'TennisMalaysia men’s singles', value: 'No. 9', date: '2026-09-30', source: TM_NC_M },
      ],
      high: [{ system: 'ATP singles', value: 'No. 1713 (tied)', date: '24 Aug 2026', source: ATP_MAS }],
    },
    results: [
      { date: 'Aug 2026', text: 'SUKMA 2026: men’s doubles gold with Darrshan Suresh Kumar and mixed doubles gold with Daania Daniella, for the Federal Territories.', source: SUKMA_REPORT },
      { date: 'Jul 2026', text: 'Davis Cup Group III, Kuala Lumpur: singles against Vietnam and the Philippines.', source: DC_REPORT },
    ],
    officialProfiles: [{ label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/imran-daniel-abd-hazli/a0hs/overview' }],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/abdul-hazli/' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'darrshan-suresh', name: 'Darrshan Suresh', fullName: 'Darrshan Suresh', gender: 'men',
    status: 'Active', featured: false, tour: 'ITF World Tennis Tour',
    intro: 'ATP-ranked player competing mainly in ITF M15 and M25 events.',
    headline: 'ITF World Tennis Tour competitor with an ATP singles and doubles ranking.',
    born: '7 February 2001', plays: '',
    mainEvents: 'ITF World Tennis Tour (M15–M25)',
    note: 'Not to be confused with Darrshan Suresh Kumar (born 2007), the Davis Cup player and SUKMA 2026 champion.',
    rankings: {
      current: [
        { system: 'ATP singles', value: 'No. 2300 (tied)', date: RANK_DATE, source: ATP_MAS },
        { system: 'ATP doubles', value: 'No. 1192', date: RANK_DATE, source: ATP_MAS_D },
        { system: 'TennisMalaysia men’s singles', value: '1,050 points (listed No. 2 on the PDF)', date: '2026-09-30', source: TM_NC_M },
      ],
      high: [{ system: 'ATP singles', value: 'No. 1528 (tied)', date: '8 Sep 2025', source: ATP_MAS }],
    },
    results: [
      { date: 'Jul–Oct 2026', text: 'Regular ITF Futures schedule, mostly in qualifying and early rounds in singles; reached several doubles semi-finals, most recently in October 2026.', source: { label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/suresh-b7e90/' } },
    ],
    officialProfiles: [{ label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/darrshan-suresh/s0gg/overview' }],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/suresh-b7e90/' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'christian-didier-chin', name: 'Christian Didier Chin', fullName: 'Christian Didier Chin', gender: 'men',
    status: 'Retired', featured: false, tour: 'Former ATP/ITF; now padel',
    intro: 'Former Davis Cup player and top junior who now competes in padel, winning Asian Games silver in 2026.',
    headline: 'Former Davis Cup player and top-50 ITF junior, now an Asian Games padel medallist.',
    born: '23 August 2000, Sabah', plays: 'Right-handed, two-handed backhand',
    mainEvents: 'Formerly Davis Cup and the ITF World Tennis Tour; now padel',
    note: 'Bernama described him as a former tennis player in October 2026; he did not appear on the November 2026 ATP list.',
    rankings: {
      current: [],
      high: [
        { system: 'ATP singles', value: 'No. 1440', date: '23 Sep 2019', source: { label: 'Tennis Abstract', url: 'https://www.tennisabstract.com/cgi-bin/player.cgi?p=ChristianDidierChin' } },
        { system: 'ATP doubles', value: 'No. 1130', date: '18 Nov 2019', source: { label: 'Tennis Abstract', url: 'https://www.tennisabstract.com/cgi-bin/player.cgi?p=ChristianDidierChin' } },
        { system: 'ITF junior combined', value: 'No. 44', date: '1 Jan 2018', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Christian_Didier_Chin' } },
      ],
    },
    results: [
      { date: 'Oct 2026', text: 'Asian Games (Aichi-Nagoya): men’s padel doubles silver with Aidan Khairuddin Yunus, losing the final to Qatar 3-6, 1-6.', source: { label: 'Bernama', url: 'https://bernama.com/en/sports/news.php?id=2616043' } },
      { date: '2018', text: 'Reached the second round of the Australian Open junior boys’ singles and doubles.', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Christian_Didier_Chin' } },
    ],
    highlights: [{ text: 'Davis Cup record of 8 wins and 7 losses for Malaysia.', source: { label: 'Wikipedia (citing daviscup.com)', url: 'https://en.wikipedia.org/wiki/Christian_Didier_Chin' } }],
    officialProfiles: [
      { label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/christian-didier-chin/c0dt/overview' },
      { label: 'ITF profile', url: 'https://www.world.tennis/en/players/christian-didier-chin/800450005/mas/mt/S/overview/' },
    ],
    sources: [{ label: 'New Straits Times: padel silver', url: 'https://www.nst.com.my/amp/sports/racquet-sports/2026/10/1546907/padel-duo-christian-aidan-claim-silver-asian-games' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'adam-malik', name: 'Adam Malik', fullName: 'Adam Malik', gender: 'men',
    status: 'Retired', featured: true, tour: 'Former ATP Tour',
    intro: 'Davis Cup stalwart from 1982 to 1995 and a top-125 ATP doubles player in 1994.',
    headline: 'Widely described as Malaysia’s first professional tennis player; career-high ATP doubles No. 122.',
    born: '10 May 1967, Muar, Johor', plays: 'Right-handed · 1.93 m',
    mainEvents: 'ATP Tour (mainly doubles), Davis Cup (Malaysia), Asian Games',
    rankings: {
      current: [],
      high: [
        { system: 'ATP doubles', value: 'No. 122', date: '25 Jul 1994', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Adam_Malik_(tennis)' } },
        { system: 'ATP singles', value: 'No. 436', date: '10 Apr 1995', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Adam_Malik_(tennis)' } },
      ],
    },
    results: [
      { date: '1994', text: 'ATP doubles runner-up at St. Pölten with Jeff Tarango.' },
      { date: '1995', text: 'Australian Open men’s doubles, with Jeff Tarango: his only Grand Slam appearance.' },
      { date: '1982–1995', text: 'Davis Cup: debut aged 14 against Indonesia; 17 wins from 32 rubbers across 13 ties.' },
    ],
    highlights: ['All-American in singles and doubles at the University of Kentucky.', 'Later coached Malaysia’s Davis Cup team.'],
    note: 'Retired player, included for Malaysian tennis history. Career details are from secondary sources (Wikipedia, which cites the ATP and Davis Cup records).',
    officialProfiles: [{ label: 'ATP Tour profile', url: 'https://www.atptour.com/en/players/adam-malik/m221/overview' }],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Adam_Malik_(tennis)' }],
    checked: PLAYERS_CHECKED,
  },
];

export const WOMEN = [
  {
    slug: 'shihomi-leong', name: 'Shihomi Leong', fullName: 'Shihomi Li Xuan Leong', gender: 'women',
    status: 'Active', featured: true, tour: 'WTA/ITF & NCAA',
    intro: 'Malaysia’s top-ranked woman on the TennisMalaysia list; plays college tennis at Pepperdine and on the ITF tour.',
    headline: 'TennisMalaysia’s women’s No. 1, SUKMA 2026 singles champion and Pepperdine University player.',
    born: '6 June 2007', plays: 'Right-handed',
    mainEvents: 'ITF World Tennis Tour; NCAA (Pepperdine University); SUKMA; SEA Games',
    rankings: {
      current: [
        { system: 'TennisMalaysia women’s singles', value: 'No. 1', date: '2026-09-30', source: TM_NC_W },
        { system: 'WTA singles', value: 'No. 1153', date: RANK_DATE, source: WTA_RANK },
        { system: 'WTA doubles', value: 'No. 1043', date: RANK_DATE, source: WTA_RANK },
      ],
      high: [
        { system: 'WTA singles', value: 'No. 895', date: '24 Aug 2026', source: WTA_RANK },
        { system: 'ITF junior', value: 'No. 145', date: '', source: { label: 'Pepperdine roster', url: 'https://pepperdinewaves.com/sports/womens-tennis/roster/shihomi-leong/5986' } },
      ],
    },
    results: [
      { date: 'Aug 2026', text: 'SUKMA 2026 women’s singles gold for Perak; women’s doubles silver.', source: SUKMA_REPORT },
      { date: 'Aug 2026', text: 'ITF event in Tianjin: semi-finalist after coming through qualifying.', source: { label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/leong-37b8c/' } },
      { date: 'Spring 2026', text: 'Freshman season at Pepperdine: 6–4 in singles and 12–4 in doubles, named to the All-WCC Doubles Second Team.', source: { label: 'Pepperdine roster', url: 'https://pepperdinewaves.com/sports/womens-tennis/roster/shihomi-leong/5986' } },
    ],
    highlights: [
      { text: 'Nine ITF junior singles titles.', source: { label: 'Pepperdine roster', url: 'https://pepperdinewaves.com/sports/womens-tennis/roster/shihomi-leong/5986' } },
      { text: 'Helped Malaysia to women’s team bronze at the 2025 SEA Games.', source: { label: 'Pepperdine roster', url: 'https://pepperdinewaves.com/sports/womens-tennis/roster/shihomi-leong/5986' } },
    ],
    bio: ['Shihomi Leong, from Ipoh, is in her second year at Pepperdine University in California. Her career-high WTA ranking came in August 2026. She is the sister of Mitsuki Leong.'],
    officialProfiles: [{ label: 'WTA profile', url: 'https://www.wtatennis.com/players/333192/shihomi-li-xuan-leong' }, { label: 'Pepperdine roster', url: 'https://pepperdinewaves.com/sports/womens-tennis/roster/shihomi-leong/5986' }],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/leong-37b8c/' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'elsa-wan', name: 'Elsa Wan', fullName: 'Sharifah Elsa Wan Rahman', gender: 'women',
    status: 'Active', featured: true, tour: 'WTA/ITF & BJK Cup',
    intro: 'Experienced Billie Jean King Cup player and SUKMA 2024 singles champion, ranked No. 2 on TennisMalaysia’s women’s list.',
    headline: 'Billie Jean King Cup team leader and TennisMalaysia’s women’s No. 2.',
    born: '8 December 2003', plays: 'Right-handed',
    mainEvents: 'Billie Jean King Cup (Malaysia); ITF World Tennis Tour; TennisMalaysia National Circuit',
    rankings: {
      current: [
        { system: 'TennisMalaysia women’s singles', value: 'No. 2', date: '2026-09-30', source: TM_NC_W },
        { system: 'WTA singles', value: 'No. 1468', date: RANK_DATE, source: WTA_RANK },
        { system: 'WTA doubles', value: 'No. 1442', date: RANK_DATE, source: WTA_RANK },
      ],
      high: [{ system: 'WTA singles', value: 'No. 1138', date: '17 Oct 2022', source: WTA_RANK }],
    },
    rankingNote: 'She was described as the national women’s No. 1 in January 2026 (The Star). On TennisMalaysia’s 30 September 2026 list she is No. 2, behind Shihomi Leong.',
    results: [
      { date: 'Aug 2026', text: 'CIMB KL Open women’s doubles champion with Daania Hazli.', source: KLO_REPORT },
      { date: 'Jun 2026', text: 'Billie Jean King Cup Group II, Kuala Lumpur: 1 win from 3 singles rubbers; Malaysia stayed in Group II.', source: TE_BJK },
      { date: 'Jan 2026', text: 'National Circuit Leg 1, Kuala Lumpur: women’s singles runner-up to Daania Hazli.', source: { label: 'our report', url: '/news/daania-hazli-national-circuit-two-titles-2026/' } },
    ],
    highlights: [{ text: 'SUKMA 2024 women’s singles gold medallist.', source: { label: 'theSun', url: 'https://thesun.my/sports/tennis-players-mitsuki-sharifah-elsa-bid-golden-goodbye-to-sukma-fc12894706/' } }],
    officialProfiles: [
      { label: 'WTA profile', url: 'https://www.wtatennis.com/players/330715/elsa-wan' },
      { label: 'ITF profile', url: 'https://www.world.tennis/en/players/elsa-wan/800452232/mas/wt/D/overview/' },
    ],
    sources: [{ label: 'Tennis Explorer', url: 'https://www.tennisexplorer.com/player/wan-22442/' }, { label: 'Asian Tennis Federation: BJK Cup preview', url: 'https://www.asiantennis.com/news/promotion-race-takes-centre-stage-at-billie-jean-king-cup-asia-oceania-group-ii-in-kuala-lumpur/' }],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'daania-hazli', name: 'Daania Hazli', fullName: 'Daania Daniella Abd Hazli', gender: 'women',
    status: 'Junior', featured: true, tour: 'ITF Juniors & BJK Cup',
    intro: 'Leading junior who already wins senior titles: KL Open singles champion and SUKMA triple gold medallist in 2026.',
    headline: 'Malaysia’s leading junior girl, winning senior titles at the 2026 KL Open and SUKMA.',
    born: '', plays: '',
    mainEvents: 'ITF World Tennis Tour Juniors; Billie Jean King Cup (Malaysia); TennisMalaysia National Circuit; SUKMA',
    note: 'Junior player: public tennis information only.',
    rankings: {
      current: [{ system: 'TennisMalaysia women’s singles', value: 'No. 5', date: '2026-09-30', source: TM_NC_W }],
      high: [],
    },
    rankingNote: 'Her current ITF junior ranking is published on her ITF profile (linked below).',
    results: [
      { date: 'Aug 2026', text: 'SUKMA 2026: women’s doubles and mixed doubles gold, and women’s team gold, for the Federal Territories.', source: SUKMA_REPORT },
      { date: 'Aug 2026', text: 'CIMB KL Open: women’s singles champion (6-0, 6-3 in the final) and doubles champion with Elsa Wan.', source: KLO_REPORT },
      { date: 'Jun 2026', text: 'Billie Jean King Cup Group II, Kuala Lumpur: 3 wins from 5 singles rubbers.', source: TE_BJK },
      { date: 'Jan 2026', text: 'National Circuit Leg 1: women’s Open singles and doubles titles.', source: { label: 'our report', url: '/news/daania-hazli-national-circuit-two-titles-2026/' } },
    ],
    highlights: [
      { text: '2025: ITF J30 singles titles at Surabaya and Phnom Penh, and a doubles title at J30 Jakarta.', source: { label: 'The Star, 23 Nov 2025', url: 'https://www.thestar.com.my/sport/tennis/2025/11/23/teen-of-steel' } },
      { text: 'Women’s team bronze at the 2025 SEA Games.' },
    ],
    officialProfiles: [{ label: 'ITF junior profile', url: 'https://www.world.tennis/en/players/daania-daniella-hazli/800718209/mas/jt/S/overview/' }],
    sources: [],
    checked: PLAYERS_CHECKED,
  },
  {
    slug: 'khoo-chin-bee', name: 'Khoo Chin-bee', fullName: 'Khoo Chin-bee', gender: 'women',
    status: 'Retired', featured: false, tour: 'Former WTA/ITF',
    intro: 'Malaysia’s record holder for most Fed Cup / Billie Jean King Cup wins and ties; professional from 1992 to 2009.',
    headline: 'Holder of Malaysia’s Fed Cup / Billie Jean King Cup records for wins and ties played.',
    born: '', plays: '',
    mainEvents: 'Fed Cup / Billie Jean King Cup (Malaysia); ITF Women’s Circuit; SEA Games',
    note: 'Retired player, included for Malaysian tennis history. Details are from Wikipedia, which cites her Fed Cup profile.',
    rankings: {
      current: [],
      high: [
        { system: 'WTA singles', value: 'No. 329', date: '15 Sep 2003', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Khoo_Chin-bee' } },
        { system: 'WTA doubles', value: 'No. 209', date: '17 Aug 1998', source: { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Khoo_Chin-bee' } },
      ],
    },
    results: [
      { date: 'Career', text: 'Fed Cup / Billie Jean King Cup: 25 wins and 17 losses in 26 ties, Malaysian records for both wins and ties.' },
      { date: 'Career', text: '1 ITF singles title and 9 ITF doubles titles.' },
      { date: '2001', text: 'SEA Games women’s team silver.' },
    ],
    officialProfiles: [],
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Khoo_Chin-bee' }],
    checked: PLAYERS_CHECKED,
  },
];

export const ALL_PLAYERS = [...MEN, ...WOMEN];
