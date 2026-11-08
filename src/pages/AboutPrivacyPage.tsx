import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { PageId } from '../types';

interface AboutPrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPrivacyPage: React.FC<AboutPrivacyPageProps> = ({ onNavigate }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState('General Feedback');

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setFeedbackText('');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 to-teal-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Community Purpose & Privacy Standard</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About Cybersafe Community & Our Privacy Charter
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our mission is simple: empower everyday Australians with practical, non-judgemental cyber safety skills that protect families and small businesses from financial harm.
          </p>
        </div>
      </section>

      {/* Campaign Purpose & Target Audiences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why Cybersafe Community Exists
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every day, millions of Australians receive deceptive messages engineered to steal their savings and identities. Traditional technical advice is often full of confusing acronyms or blames the victim for making a mistake.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cybersafe Community was built to provide a <strong>calm, friendly, and practical alternative</strong>. We teach the psychological reflexes behind scams, provide downloadable checklists, and offer a no-shame environment where asking for help is recognized as a smart, responsible step.
            </p>
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
              <p className="text-xs font-bold text-teal-900 italic">
                “Know how to avoid scams; develop safe online practices.”
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" />
              Tailored Audience Focus
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                <strong className="text-white block text-sm">Alex (15) — Secondary Students & Gamers</strong>
                Short visual breakdowns of gaming skin scams, Discord account hijacking, and encouragement to talk to parents without fearing device loss.
              </li>
              <li className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                <strong className="text-white block text-sm">Priya (38) — Busy Working Parents & Carers</strong>
                Quick 5-minute actionable family checklists, multi-factor authentication instructions, and marketplace PayID safety.
              </li>
              <li className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                <strong className="text-white block text-sm">Margaret (68) — Retired Adults & Grandparents</strong>
                Large readable text, plain English, printed instructions, and immediate reassurance when unsolicited callers pretend to be technicians.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Explicit Privacy Commitment & Data Charter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-emerald-500 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Lock className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Our Absolute Privacy Commitment
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                We believe security tools should never become privacy risks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">Zero Password or Financial Data Collection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We will never ask you to input real passwords, bank account numbers, credit cards, or identity document numbers.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">No Real-Time Message Verification Storage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We do not store private SMS or email messages. All interactive tools and quiz responses run purely in your local browser memory.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">No User Accounts or Leaderboards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You do not need to register, log in, or provide an email address to use our checklist, quiz, or educational guides.
              </p>
            </div>

          </div>

          {/* Legal Disclaimer & Educational Prototype Status */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>Educational Awareness Prototype Notice</span>
            </div>
            <p className="leading-relaxed">
              This website is an educational community awareness campaign prototype. It does not provide licensed financial advice, legal counsel, or guarantee 100% scam detection. All message examples and personas are entirely fictional. If you suspect an active cybercrime or financial theft, always consult your financial institution and official Australian authorities (ReportCyber / Scamwatch).
            </p>
          </div>
        </div>
      </section>

      {/* Content Review Date & Standards Reference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Content Review & Governance Date
              </h3>
              <p className="text-xs text-slate-600">
                Last reviewed: <strong className="text-slate-900">November 2026</strong>. Updated regularly according to Australian Cyber Security Centre (ACSC) publications and ACCC Scamwatch bulletins.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>

      {/* Community Feedback Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">Community Feedback & Suggestions</h3>
            <p className="text-xs text-slate-600">
              Help us improve our guides for Australian schools, seniors, and local groups. (Do not include private personal info).
            </p>
          </div>

          {feedbackSent ? (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-xs text-emerald-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for your feedback!</span>
              </div>
              <p>Your suggestions help keep Cybersafe Community accessible and relevant for everyday Australians.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitFeedback} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Feedback Topic:</label>
                <select
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <option>General Feedback</option>
                  <option>Suggest a New Fictional Scenario</option>
                  <option>Accessibility & Readability Suggestion</option>
                  <option>School or Community Group Resource Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Thoughts:</label>
                <textarea
                  rows={3}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Share ideas or feedback on how we can make cyber safety simpler..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <button
                type="submit"
                disabled={!feedbackText.trim()}
                className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:bg-slate-300 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Submit Feedback</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
