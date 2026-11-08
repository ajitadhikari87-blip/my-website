import { Persona } from '../types';

export const PERSONAS: Persona[] = [
  {
    id: 'alex',
    name: 'Alex',
    age: 15,
    tagline: 'Secondary student & gamer',
    avatarIcon: 'Gamepad2',
    description: 'Active on Discord, Steam, TikTok and mobile games. Often encounters skin trading scams, suspicious links from classmates, and account takeovers.',
    keyNeeds: [
      'Visual, short scenario breakdowns',
      'Gaming-specific scam examples (skins, free currency)',
      'Guidance on talking with parents without fear of losing phone privileges',
    ],
    recommendedPages: ['spot-a-scam', 'learn-practice'],
  },
  {
    id: 'priya',
    name: 'Priya',
    age: 38,
    tagline: 'Employed parent & carer',
    avatarIcon: 'Briefcase',
    description: 'Juggles family schedules, online grocery shopping, and work emails. Needs quick, high-impact safety habits for the whole household.',
    keyNeeds: [
      '5-minute actionable Family Cyber Checklist',
      'Step-by-step Multi-Factor Authentication (MFA) setup',
      'Safe online shopping and marketplace rules',
    ],
    recommendedPages: ['secure-accounts', 'learn-practice', 'get-help'],
  },
  {
    id: 'margaret',
    name: 'Margaret',
    age: 68,
    tagline: 'Retired adult & grandparent',
    avatarIcon: 'HeartHandshake',
    description: 'Enjoys keeping in touch with grandchildren on iPad and managing banking online. Seeks calm reassurance and plain English without tech jargon.',
    keyNeeds: [
      'Large readable text and printable guides',
      'Clear differences between real bank notices and imposters',
      'No-shame reassurance if an accidental click happens',
    ],
    recommendedPages: ['spot-a-scam', 'secure-accounts', 'get-help'],
  },
];
