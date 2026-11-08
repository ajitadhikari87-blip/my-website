export type PageId = 'home' | 'spot-a-scam' | 'secure-accounts' | 'learn-practice' | 'get-help' | 'about-privacy';

export type PersonaId = 'all' | 'alex' | 'priya' | 'margaret';

export interface Persona {
  id: PersonaId;
  name: string;
  age: number | string;
  tagline: string;
  avatarIcon: string;
  description: string;
  keyNeeds: string[];
  recommendedPages: PageId[];
}

export interface ScamExample {
  id: string;
  title: string;
  channel: 'SMS' | 'Email' | 'Social' | 'Gaming' | 'Shopping' | 'Phone';
  targetAudience: PersonaId[];
  scenario: string;
  sender: string;
  content: string;
  redFlags: string[];
  safeAction: string;
  officialAdvice: string;
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  context: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  educationalTakeaway: string;
  targetPersona?: PersonaId;
}

export interface ChecklistItem {
  id: string;
  category: 'Accounts & Passwords' | 'Device & Software' | 'Family & Sharing' | 'Money & Shopping';
  title: string;
  description: string;
  timeEstimate: string;
  importance: 'Essential' | 'Recommended' | 'Pro Tip';
  personaRelevance: PersonaId[];
}

export interface DiscussionCard {
  id: string;
  topic: string;
  targetAudience: string;
  question: string;
  whyItMatters: string;
  suggestedAnswers: string[];
}

export interface GlossaryTerm {
  term: string;
  simpleDefinition: string;
  exampleInRealLife: string;
  safetyTip: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  suggestedPath?: PageId;
  suggestedAction?: string;
  timestamp: string;
}
