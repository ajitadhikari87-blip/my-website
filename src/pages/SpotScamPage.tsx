import React, { useState } from 'react';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldAlert, 
  ExternalLink, 
  ArrowRight, 
  Eye, 
  Mail, 
  MessageSquare, 
  Gamepad2, 
  ShoppingBag, 
  PhoneCall, 
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SCAM_EXAMPLES } from '../data/scamExamples';
import { PageId, PersonaId } from '../types';

interface SpotScamPageProps {
  onNavigate: (page: PageId) => void;
  selectedPersona: PersonaId;
}

export const SpotScamPage: React.FC<SpotScamPageProps> = ({ onNavigate, selectedPersona }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'SMS' | 'Email' | 'Gaming' | 'Social' | 'Shopping' | 'Phone'>('All');
  const [selectedExampleId, setSelectedExampleId] = useState<string>(SCAM_EXAMPLES[0].id);

  // Filtered examples
  const filteredExamples = SCAM_EXAMPLES.filter((ex) => {
    const matchesCategory = activeCategory === 'All' || ex.channel === activeCategory;
    const matchesPersona = selectedPersona === 'all' || ex.targetAudience.includes(selectedPersona);
    return matchesCategory && matchesPersona;
  });

  const activeExample = SCAM_EXAMPLES.find((ex) => ex.id === selectedExampleId) || filteredExamples[0] || SCAM_EXAMPLES[0];

  // Interactive Decision Guide state
  const [decisionStep, setDecisionStep] = useState<number>(1);
  const [decisionAnswers, setDecisionAnswers] = useState<{ [step: number]: boolean }>({});

  const handleDecisionAnswer = (step: number, isYes: boolean) => {
    setDecisionAnswers((prev) => ({ ...prev, [step]: isYes }));
    setDecisionStep(step + 1);
  };

  const resetDecisionGuide = () => {
    setDecisionStep(1);
    setDecisionAnswers({});
  };

  const warningSigns = [
    {
      title: 'Artificial Urgency & Panic',
      desc: 'Phrases like "Urgent action required within 2 hours", "Account suspended", or "Late penalty applies today". Designed to shut down critical thinking.',
      badge: 'High Threat',
    },
    {
      title: 'Unexpected Contact',
      desc: 'You never reached out to them. An unsolicited email, text, or phone call arrives claiming you have an unpaid bill or winning lottery.',
      badge: 'Red Flag',
    },
    {
      title: 'Demanding Personal or Banking Info',
      desc: 'Asking for passwords, Medicare cards, passport numbers, PINs, or asking you to "verify" bank details through an email link.',
      badge: 'Never Share',
    },
    {
      title: 'Too Good to Be True',
      desc: 'Unrealistically cheap luxury items, free gaming skins, "guaranteed 40% crypto returns", or $300/day for clicking movie reviews.',
      badge: 'Deception',
    },
    {
      title: 'Unusual Payment Methods',
      desc: 'Demanding payment by iTunes/Google Play gift cards, cryptocurrency, overseas transfers, or claiming you must pay to "upgrade PayID".',
      badge: 'Immediate Stop',
    },
    {
      title: 'Impersonation of Trusted Brands',
      desc: 'Mimicking official Australian organisations like myGov, ATO, Linkt, AusPost, Telstra, CommBank, or close family members.',
      badge: 'Spoofed Brand',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-teal-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Practical Scam Radar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            How to Spot a Scam in Australia
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Scams are designed by professionals to exploit natural human emotions: urgency, fear, love for family, or excitement. Learning the red flags makes them easy to detect.
          </p>
        </div>
      </section>

      {/* 6 Key Warning Signs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            The 6 Common Warning Signs
          </h2>
          <p className="text-sm text-slate-600">
            If a message or caller displays even one of these traits, treat it with extreme caution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warningSigns.map((sign, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    {sign.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{sign.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {sign.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-teal-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Pause & independent verification required</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Fictional Examples Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-bold uppercase tracking-wider mb-2">
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive Red Flag Inspector</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Fictional Scam Examples Gallery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Explore real-world scenarios. All examples below are <strong>clearly labelled as 100% fictional</strong> for educational purposes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {(['All', 'SMS', 'Email', 'Gaming', 'Social', 'Shopping', 'Phone'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Inspection Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left list of examples */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredExamples.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedExampleId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    activeExample.id === item.id
                      ? 'bg-white border-teal-600 shadow-md ring-2 ring-teal-400/20'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.channel}
                    </span>
                    <span className="text-[10px] text-rose-600 font-bold">
                      [Fictional Example]
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.scenario}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Detailed Inspector */}
            <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-teal-600 p-6 shadow-lg space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                    Channel: {activeExample.channel}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {activeExample.title}
                  </h3>
                </div>
                <div className="bg-rose-100 text-rose-800 border border-rose-300 text-xs px-2.5 py-1 rounded-md font-bold">
                  [FICTIONAL EDUCATIONAL EXAMPLE]
                </div>
              </div>

              {/* Fictional Message Box Simulation */}
              <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 relative shadow-inner">
                <div className="text-slate-400 text-[11px] mb-2 border-b border-slate-800 pb-1.5 flex justify-between">
                  <span>From: {activeExample.sender}</span>
                  <span className="text-rose-400 font-bold">[Simulated Scam Payload]</span>
                </div>
                <div className="whitespace-pre-line leading-relaxed text-slate-200">
                  {activeExample.content}
                </div>
              </div>

              {/* Red Flags Revealed */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-rose-700">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Key Red Flags in this Example:
                </h4>
                <ul className="space-y-2">
                  {activeExample.redFlags.map((flag, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 bg-rose-50/60 border border-rose-200/80 p-2.5 rounded-lg flex items-start gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-800 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safe Action to Take */}
              <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl space-y-1.5">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  The Correct Safe Action:
                </h4>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {activeExample.safeAction}
                </p>
              </div>

              {/* Official Australian Guidance */}
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-700">Official Australian Advice:</strong> {activeExample.officialAdvice}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* "Pause. Check. Protect." Interactive Decision Guide Tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Interactive Flowchart
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              &quot;Pause. Check. Protect.&quot; Decision Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Wondering how to handle an unexpected message you received? Follow this step-by-step triage guide.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            
            {/* Step 1 */}
            {decisionStep === 1 && (
              <div className="space-y-4 text-center sm:text-left animate-in fade-in">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Step 1 of 3: Initiation Check
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Did this contact (text, email, DM, or phone call) reach you unexpectedly?
                </h3>
                <p className="text-xs text-slate-600">
                  You did not initiate the conversation, request a password reset, or apply for service in that exact minute.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    onClick={() => handleDecisionAnswer(1, true)}
                    className="flex-1 py-3 px-4 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Yes, it arrived out of the blue
                  </button>
                  <button
                    onClick={() => handleDecisionAnswer(1, false)}
                    className="flex-1 py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm rounded-xl transition-colors"
                  >
                    No, I specifically requested it
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {decisionStep === 2 && (
              <div className="space-y-4 text-center sm:text-left animate-in fade-in">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Step 2 of 3: Request Inspection
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Does the message or caller urge you to click a link, send money, or give access?
                </h3>
                <p className="text-xs text-slate-600">
                  Examples: paying an overdue fee, claiming a tax refund, providing your 2FA code, or downloading AnyDesk/TeamViewer.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    onClick={() => handleDecisionAnswer(2, true)}
                    className="flex-1 py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    Yes, it requests payment, info, or remote access
                  </button>
                  <button
                    onClick={() => handleDecisionAnswer(2, false)}
                    className="flex-1 py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm rounded-xl transition-colors"
                  >
                    No, it is purely informational
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Result */}
            {decisionStep >= 3 && (
              <div className="space-y-5 animate-in fade-in">
                {decisionAnswers[1] && decisionAnswers[2] ? (
                  <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-rose-800 font-black text-lg">
                      <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0" />
                      <span>HIGH PROBABILITY SCAM — DO NOT ENGAGE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      Unexpected contact combined with payment pressure or a link is the classic signature of cyber scammers.
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2 text-xs">
                      <h4 className="font-bold text-slate-900">Immediate Safe Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li>Do NOT click any web link or download any attachments.</li>
                        <li>Do NOT reply to the SMS or email (proves your number is active).</li>
                        <li>If it claims to be your bank or road toll, open their official app directly or look up the number on your billing statement.</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="bg-teal-50 border-2 border-teal-300 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-teal-800 font-black text-lg">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                      <span>CAUTION ADVISED — INDEPENDENT VERIFICATION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      Even if the request seems routine, remember to never share your two-factor codes or passwords. If you have any doubts, look up the organization independently.
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={resetDecisionGuide}
                    className="py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors"
                  >
                    Restart Decision Guide
                  </button>
                  <button
                    onClick={() => onNavigate('get-help')}
                    className="py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors ml-auto flex items-center gap-1.5"
                  >
                    <span>View Australian Reporting Steps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Official Links Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <p className="text-xs text-slate-500 font-semibold">
          For real-time official Australian scam alerts and data, visit:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
          <a
            href="https://www.scamwatch.gov.au/types-of-scams"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-700 hover:underline"
          >
            Scamwatch Types of Scams Directory <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.cyber.gov.au/protect-yourself/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-700 hover:underline"
          >
            ASD Cyber Security Guides <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

    </div>
  );
};
