import { DiscussionCard } from '../types';

export const DISCUSSION_CARDS: DiscussionCard[] = [
  {
    id: 'card-1',
    topic: 'Urgent Family Requests',
    targetAudience: 'Parents & Grandparents',
    question: 'What would you do if you received an urgent text from a new number saying "Hi Mum, I dropped my phone in water and need $900 for rent today"?',
    whyItMatters: 'The "Hi Mum/Dad" scam relies on parental panic and the instinct to help immediately without questioning.',
    suggestedAnswers: [
      'Pause and do not transfer funds immediately.',
      'Call the family member on their known normal phone number, or call another family member who might be with them.',
      'Ask for the family safe-word or ask a question only your child would know.',
    ],
  },
  {
    id: 'card-2',
    topic: 'Gaming & Free In-Game Items',
    targetAudience: 'Youth & Parents',
    question: 'If a teammate on Roblox, Fortnite, or Discord offers you "free rare skins or 10,000 V-Bucks" if you log into their special website, what is their real motive?',
    whyItMatters: 'Gaming account theft is rampant. Scammers use fake giveaway links to steal high-value accounts or sell in-game inventories.',
    suggestedAnswers: [
      'No one gives away valuable digital items for free without an catch.',
      'Entering login credentials outside the official app will get your account stolen.',
      'Always talk to a parent or older sibling before entering account info on new websites.',
    ],
  },
  {
    id: 'card-3',
    topic: 'Safe Mistakes & No-Shame Rule',
    targetAudience: 'Whole Household',
    question: 'If someone in our family accidentally clicks a suspicious link or enters their password, what should our first reaction be?',
    whyItMatters: 'Fear of punishment or embarrassment causes people to hide cyber mistakes, giving hackers hours or days to cause more damage.',
    suggestedAnswers: [
      'Speak up immediately without fear of scolding or device confiscation.',
      'Disconnect Wi-Fi/data on the device and tell an adult or bank immediately.',
      'Remember: scammers fool professionals every day—it is nothing to be ashamed of.',
    ],
  },
  {
    id: 'card-4',
    topic: 'Online Shopping & Too-Good-To-Be-True Deals',
    targetAudience: 'Teens & Working Adults',
    question: 'You see brand new designer sneakers or a PlayStation 5 advertised on an Instagram ad for 80% off retail price. How do you check if it is real?',
    whyItMatters: 'Fake social media storefronts take payment and never deliver goods, or harvest credit card details for unauthorized overseas transactions.',
    suggestedAnswers: [
      'Search the company name + "scam" or "review" on Google or ProductReview.com.au.',
      'Check for an Australian ABN / registered business address and clear return policies.',
      'If it seems too good to be true, it almost certainly is.',
    ],
  },
  {
    id: 'card-5',
    topic: 'Unsolicited Phone Calls & Remote Control',
    targetAudience: 'Older Adults & Carers',
    question: 'A polite person calls claiming to be from your internet company saying your router has malware and asking you to install software. What is the safest rule?',
    whyItMatters: 'Remote access scams cause the largest average dollar loss per victim in Australia, especially among older citizens.',
    suggestedAnswers: [
      'Rule: Never give remote computer access to anyone who phoned you unexpectedly.',
      'Say "I will call you back on the official number on my bill", and immediately hang up.',
      'Do not worry about being "rude"—your security and peace of mind come first.',
    ],
  },
];
