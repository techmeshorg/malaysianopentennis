// Primary navigation. Every href resolves to a real page (no broken links).
export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Tennis',
    href: '/malaysia-tennis-events/',
    children: [
      { label: 'Malaysia Tennis Events', href: '/malaysia-tennis-events/' },
      { label: 'ATP & WTA Malaysia History', href: '/atp-wta-malaysia-history/' },
      { label: 'Tennis Rules', href: '/tennis-rules/' },
      { label: 'Tennis Ranking Guide', href: '/tennis-ranking-guide/' },
      {
        label: 'Player Profiles',
        href: '/player-profiles/men/',
        children: [
          { label: "Men's Players", href: '/player-profiles/men/' },
          { label: "Women's Players", href: '/player-profiles/women/' },
        ],
      },
      { label: 'Malaysian Tennis Players', href: '/malaysian-tennis-players/' },
      { label: 'How Tennis Scoring Works', href: '/how-tennis-scoring-works/' },
      { label: 'Tennis Courts in Malaysia', href: '/tennis-courts-malaysia/' },
    ],
  },
  { label: 'Tournaments', href: '/tournaments/' },
  { label: 'News', href: '/news/' },
  { label: 'Responsible Gambling', href: '/responsible-gambling/' },
];

export const FOOTER_LINKS = [
  { label: 'About', href: '/about/' },
  { label: 'Editorial Policy', href: '/editorial-policy/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Responsible Gambling', href: '/responsible-gambling/' },
];
