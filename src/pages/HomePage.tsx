import React from 'react';
import { 
  Shield, 
  Search, 
  Lock, 
  AlertOctagon, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Gamepad2, 
  Briefcase, 
  HeartHandshake, 
  Info,
  PhoneCall,
  Clock,
  ExternalLink
} from 'lucide-react';
import { PageId, PersonaId } from '../types';
import { PERSONAS } from '../data/personas';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAiGuide: () => void;
  selectedPersona: PersonaId;
  setSelectedPersona: (p: PersonaId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAiGuide,
  selectedPersona,
  setSelectedPersona,
}) => {
  const currentThemes = [
    {
      title: 'Toll Road SMS Alerts',
      urgency: 'Very High',
      summary: 'Fake messages claiming overdue e-toll fees with a 12-hour penalty countdown link.',
      channel: 'SMS',
      target: 'Drivers & Commuters',
    },
    {
      title: 'Marketplace PayID "Upgrade" Scams',
      urgency: 'High',
      summary: 'Buyers on Facebook Marketplace tricking sellers into paying fake fees to "upgrade PayID".',
      channel: 'Marketplace',
      target: 'Online Sellers & Parents',
    },
    {
      title: '"Hi Mum" Family Emergency Text',
      urgency: 'High',
      summary: 'Impersonators pretending to be children with broken phones urgently asking for rent or bill money.',
      channel: 'WhatsApp / SMS',
      target: 'Parents & Grandparents',
    },
    {
      title: 'Gaming Skin & Giveaway Links',
      urgency: 'Medium',
      summary: 'Free Robux/V-Bucks/Steam knife skin generators designed to steal gaming passwords and 2FA.',
      channel: 'Discord & Games',
      target: 'Youth & Students',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-slate-900 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-200 text-xs sm:text-sm font-bold tracking-wide">
            <Shield className="w-4 h-4 text-teal-400" />
            <span>Australian Community Cyber Awareness Initiative</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-sans">
            How To Avoid Getting Scammed Online
          </h1>

          {/* Prominent Campaign Slogan */}
          <div className="max-w-3xl mx-auto py-2">
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-100 to-teal-300">
              “Know how to avoid scams; develop safe online practices.”
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A clean, friendly, and non-judgemental community resource helping Australians of all ages recognise fake messages, safeguard family accounts, and find verified help fast.
          </p>

          {/* 3 Core Primary Action CTAs */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            
            {/* CTA 1: Spot a Scam */}
            <button
              onClick={() => onNavigate('spot-a-scam')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-teal-400/80 p-5 rounded-2xl transition-all group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-teal-200 flex items-center justify-between">
                Spot a Scam
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h2>
              <p className="text-xs text-slate-300 mt-1 leading-normal">
                Inspect fictional examples of fake road tolls, myGov emails, and gaming traps.
              </p>
            </button>

            {/* CTA 2: Secure Your Accounts */}
            <button
              onClick={() => onNavigate('secure-accounts')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-cyan-400/80 p-5 rounded-2xl transition-all group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-200 flex items-center justify-between">
                Secure Your Accounts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h2>
              <p className="text-xs text-slate-300 mt-1 leading-normal">
                Turn on MFA, switch to memorable passphrases, and download our family checklist.
              </p>
            </button>

            {/* CTA 3: Get Help & Report */}
            <button
              onClick={() => onNavigate('get-help')}
              className="bg-rose-600/90 hover:bg-rose-600 border border-rose-400 p-5 rounded-2xl transition-all group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-white text-rose-700 flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                <AlertOctagon className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h2 className="text-lg font-bold text-white flex items-center justify-between">
                Get Help & Report
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h2>
              <p className="text-xs text-rose-100 mt-1 leading-normal">
                Sent money or shared bank details? Urgent 24/7 bank and IDCARE recovery steps.
              </p>
            </button>
          </div>

          {/* Quick AI Guide Banner */}
          <div className="pt-6">
            <button
              onClick={onOpenAiGuide}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Not sure where to begin? Ask our AI Pathway Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
            <p className="text-xs text-slate-400 mt-2">
              Privacy guaranteed: Never asks for passwords, personal messages, or financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Tailored Audience Pathways: Alex, Priya & Margaret */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wide">
            <Users className="w-3.5 h-3.5" />
            <span>Tailored for Australians of All Ages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Choose Your Learning Pathway
          </h2>
          <p className="text-sm text-slate-600">
            Whether you are a secondary student gaming online, a busy working parent, or enjoying retirement, we have clear advice for your daily digital routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Alex (15) */}
          <div className={`p-6 rounded-2xl border-2 transition-all ${
            selectedPersona === 'alex'
              ? 'bg-teal-50/50 border-teal-600 ring-2 ring-teal-400/30'
              : 'bg-white border-slate-200 hover:border-teal-300'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Alex, 15</h3>
                <span className="text-xs font-medium text-slate-500">Secondary student & gamer</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Navigates Discord, Steam, TikTok, and mobile video. Needs quick scenario breakdowns, gaming skin scam recognition, and reassurance to talk to parents.
            </p>
            <ul className="text-xs space-y-1.5 mb-5 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Spot fake tournament & Robux links</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>How to talk to parents without fear</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Protect Discord and gaming logins</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedPersona('alex');
                  onNavigate('spot-a-scam');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs text-center transition-colors"
              >
                View Alex&apos;s Guide
              </button>
            </div>
          </div>

          {/* Priya (38) */}
          <div className={`p-6 rounded-2xl border-2 transition-all ${
            selectedPersona === 'priya'
              ? 'bg-teal-50/50 border-teal-600 ring-2 ring-teal-400/30'
              : 'bg-white border-slate-200 hover:border-teal-300'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Priya, 38</h3>
                <span className="text-xs font-medium text-slate-500">Working parent & carer</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Manages household bills, school portals, and Marketplace transactions. Needs fast, high-impact family security checklists and practical MFA steps.
            </p>
            <ul className="text-xs space-y-1.5 mb-5 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Printable Family Cyber Safety Checklist</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>MFA for myGov, email & banking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Avoid Facebook Marketplace PayID traps</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedPersona('priya');
                  onNavigate('secure-accounts');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs text-center transition-colors"
              >
                View Priya&apos;s Guide
              </button>
            </div>
          </div>

          {/* Margaret (68) */}
          <div className={`p-6 rounded-2xl border-2 transition-all ${
            selectedPersona === 'margaret'
              ? 'bg-teal-50/50 border-teal-600 ring-2 ring-teal-400/30'
              : 'bg-white border-slate-200 hover:border-teal-300'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Margaret, 68</h3>
                <span className="text-xs font-medium text-slate-500">Retired adult & grandparent</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Enjoys staying connected with family and online banking. Needs readable text, clear distinction of real vs fake bank calls, and supportive reassurance.
            </p>
            <ul className="text-xs space-y-1.5 mb-5 text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Hang up on unexpected &quot;technicians&quot;</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Verify &quot;Hi Mum/Grandma&quot; money texts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                <span>Zero shame if you clicked a suspicious link</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSelectedPersona('margaret');
                  onNavigate('spot-a-scam');
                }}
                className="flex-1 py-2 px-3 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs text-center transition-colors"
              >
                View Margaret&apos;s Guide
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Current Scam Warning Themes in Australia */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Current Scamwatch Trends</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Active Scam Warning Themes in Australia
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Scammers constantly adapt their scripts. These are the four most frequent tactics circulating across Australian mobiles and inboxes right now.
              </p>
            </div>
            <button
              onClick={() => onNavigate('spot-a-scam')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm self-start md:self-auto transition-colors"
            >
              <span>See Full Fictional Examples</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentThemes.map((theme, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      {theme.channel}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {theme.urgency} Risk
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white">{theme.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {theme.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700/60 text-[11px] text-teal-400 font-medium">
                  Primary target: {theme.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Pause. Check. Protect." Framework Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 border border-teal-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200/60 px-3 py-1 rounded-full">
              The 3 Golden Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Pause. Check. Protect.
            </h2>
            <p className="text-sm text-slate-600">
              When an unexpected text, email, or phone call demands fast action, use this 3-step decision reflex:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">PAUSE</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take your hands off the keyboard or phone screen. Scammers rely on artificial urgency (e.g., &quot;Account suspended in 2 hours&quot;) to trigger fear and prevent logical thinking.
              </p>
              <div className="text-[11px] font-bold text-amber-700 bg-amber-50 p-2 rounded-lg">
                Rule: Genuine emergencies allow you to take a breath.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">CHECK</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Independently verify. Do not click links in the message. Type the organisation&apos;s verified web address yourself or call the phone number printed on your physical card or utility bill.
              </p>
              <div className="text-[11px] font-bold text-teal-700 bg-teal-50 p-2 rounded-lg">
                Rule: Never use contact info supplied in the message.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">PROTECT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If in doubt, delete the message and block the sender. Turn on Multi-Factor Authentication (MFA) across your critical accounts so stolen passwords cannot be used against you.
              </p>
              <div className="text-[11px] font-bold text-blue-700 bg-blue-50 p-2 rounded-lg">
                Rule: Block, report, and secure your logins.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive AI Guide Trigger Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border-2 border-teal-500/40 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Helper</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Have a Specific Concern? Ask Cybersafe Navigator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Type what you received (e.g. &quot;weird message from my bank&quot; or &quot;selling on Marketplace&quot;) and our guide will point you to the right learning steps.
            </p>
          </div>
          <button
            onClick={onOpenAiGuide}
            className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all flex-shrink-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Launch Pathway Guide</span>
          </button>
        </div>
      </section>

      {/* Official Government Support Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Trusted Australian Cybersecurity Partners & Resources
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs font-bold text-slate-600">
          <a
            href="https://www.scamwatch.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded-lg hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            <span>Scamwatch (ACCC)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.cyber.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded-lg hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            <span>Australian Cyber Security Centre</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.idcare.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded-lg hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            <span>IDCARE (Identity Support)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://my.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded-lg hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            <span>myGov Security</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};
