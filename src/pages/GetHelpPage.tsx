import React, { useState } from 'react';
import { 
  AlertOctagon, 
  PhoneCall, 
  ShieldCheck, 
  HeartHandshake, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Lock, 
  PhoneForwarded,
  Info
} from 'lucide-react';
import { PageId } from '../types';

interface GetHelpPageProps {
  onNavigate: (page: PageId) => void;
}

export const GetHelpPage: React.FC<GetHelpPageProps> = ({ onNavigate }) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  const recoverySteps = [
    {
      step: 1,
      title: 'Contact Your Bank / Financial Institution Immediately',
      urgency: 'Within Minutes',
      summary: 'If money was transferred, cards shared, or internet banking accessed, your bank’s 24/7 fraud department can freeze transactions and secure your funds.',
      actions: [
        'Call the official 24/7 fraud hotline on the back of your physical bank card or banking app.',
        'Ask them to place an immediate stop or recall on recent transfers.',
        'Request temporary locks on your debit/credit cards and reset your online banking passwords.',
      ],
      hotline: 'Check back of your bank card',
    },
    {
      step: 2,
      title: 'Contact IDCARE for Free Identity Protection Support',
      urgency: 'Same Day',
      summary: 'IDCARE is Australia and New Zealand’s free, independent national identity & cyber support service. Case managers provide customized identity recovery plans.',
      actions: [
        'Phone 1800 595 160 (Monday to Friday, 8am - 5pm AEST) or complete their online form.',
        'A dedicated identity security counselor helps you safeguard your driver licence, Medicare, and credit file.',
        'They guide you on requesting a temporary credit ban with Equifax, Experian, and Illion so scammers cannot take loans in your name.',
      ],
      hotline: '1800 595 160 (Free call)',
      link: 'https://www.idcare.org',
    },
    {
      step: 3,
      title: 'Report Cybercrime to ReportCyber (Police / ASD)',
      urgency: 'Within 24 Hours',
      summary: 'ReportCyber is run by the Australian Cyber Security Centre and Australian Police. It is the official law enforcement intake for cybercrime and identity theft.',
      actions: [
        'File an official report online at cyber.gov.au/report.',
        'You will receive an official Police Reference Number, which banks and insurance providers often require.',
        'Applicable for: unauthorized bank account access, ransomware, online shopping fraud, or extortion.',
      ],
      hotline: '1300 CYBER1 (1300 292 371)',
      link: 'https://www.cyber.gov.au/report',
    },
    {
      step: 4,
      title: 'Report Scam Trends to Scamwatch (ACCC)',
      urgency: 'When Ready',
      summary: 'Scamwatch gathers national intelligence to disrupt scammers, issue public warnings, and assist telecommunications companies in blocking scam numbers.',
      actions: [
        'Submit the scam details at scamwatch.gov.au/report-a-scam.',
        'Helps protect other Australians from falling victim to the exact same tactic.',
        'Note: Scamwatch does not investigate individual cases or recover lost funds.',
      ],
      hotline: 'scamwatch.gov.au',
      link: 'https://www.scamwatch.gov.au/report-a-scam',
    },
    {
      step: 5,
      title: 'Secure Accounts & Revoke Remote Access',
      urgency: 'Immediate',
      summary: 'If a scammer had remote access or your email password, ensure they cannot reconnect.',
      actions: [
        'Uninstall remote tools (AnyDesk, TeamViewer) and disconnect the device from Wi-Fi.',
        'From a clean separate device, change your primary email password and sign out of all active sessions.',
        'Turn on Multi-Factor Authentication (MFA) with an authenticator app.',
      ],
      hotline: 'See Secure Accounts Guide',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Urgent Warning Hero Header */}
      <section className="bg-gradient-to-b from-rose-950 via-slate-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-rose-900/50">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg animate-pulse">
            <AlertOctagon className="w-4 h-4" />
            <span>Priority Emergency Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            What To Do If You Have Been Scammed in Australia
          </h1>

          <div className="bg-rose-600/20 border-2 border-rose-500 rounded-3xl p-6 sm:p-8 text-left space-y-4 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 text-rose-300 font-black text-lg">
              <PhoneCall className="w-6 h-6 text-rose-400 flex-shrink-0" />
              <span>URGENT FIRST STEP: Call Your Bank Now</span>
            </div>
            <p className="text-sm sm:text-base text-rose-100 leading-relaxed font-medium">
              If you have transferred funds, entered your credit card, or gave a caller remote computer access to your bank, <strong>every minute counts</strong>.
            </p>
            <div className="bg-white/10 p-4 rounded-xl text-xs sm:text-sm space-y-2 text-white border border-white/20">
              <p className="font-bold">Immediate Instructions:</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-200">
                <li>Turn your phone over and dial the <strong>24/7 fraud number on the back of your bank card</strong>.</li>
                <li>Tell the operator: <em>&quot;I believe I have been the target of a scam. Please hold any pending transfers and freeze my cards.&quot;</em></li>
                <li>Ask for an incident reference number and note the operator&apos;s name and time of call.</li>
              </ol>
            </div>
          </div>

          {/* Supportive Compassionate Messaging */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="inline-flex items-center gap-2 text-teal-300 text-xs sm:text-sm font-semibold bg-teal-950/60 border border-teal-800/80 px-4 py-2 rounded-xl">
              <HeartHandshake className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>
                <strong>Remember:</strong> Modern scams are executed by coordinated criminal syndicates. Seeking help is brave, sensible, and not something to ever be ashamed of.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Crucial Difference: Scamwatch vs ReportCyber */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Clear Australian Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Scamwatch vs ReportCyber: Which One Do I Use?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Many Australians find government reporting channels confusing. Here is the straightforward distinction:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Scamwatch */}
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                    ACCC Consumer Service
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Trend Intelligence</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Scamwatch (ACCC)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Scamwatch is run by the Australian Competition and Consumer Commission. It collects scam reports to identify trends, warn the public, and work with telcos to block malicious SMS and phone networks.
                </p>
                <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <strong>Important Limitation:</strong>
                  <p>Scamwatch does <em>not</em> investigate individual crimes, trace money, or provide police report numbers.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="https://www.scamwatch.gov.au/report-a-scam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Report Scam Details to Scamwatch</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Box 2: ReportCyber */}
            <div className="p-6 rounded-2xl bg-teal-50/70 border-2 border-teal-500 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-teal-200 text-teal-900">
                    Official Police Intake
                  </span>
                  <span className="text-xs text-teal-800 font-semibold">Official Police Number</span>
                </div>
                <h3 className="text-xl font-bold text-teal-950">
                  ReportCyber (ASD / Police)
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  ReportCyber is run by the Australian Signals Directorate in partnership with State and Federal Police. Use this if you have experienced cybercrime, hacking, identity theft, or financial loss.
                </p>
                <div className="bg-emerald-100 p-3 rounded-xl border border-emerald-300 text-xs text-emerald-950 space-y-1">
                  <strong>Official Reference Number:</strong>
                  <p>Generates an official Police Reference Number required by banks, insurers, and superannuation funds.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-teal-200">
                <a
                  href="https://www.cyber.gov.au/report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>File Official Report at ReportCyber</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Step-by-Step Triage Plan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Step-by-Step Recovery Action Plan
          </h2>
          <p className="text-sm text-slate-600">
            Follow these chronological steps to minimize damage, regain control, and safeguard your future.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {recoverySteps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStepTab(s.step)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${
                activeStepTab === s.step
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeStepTab === s.step ? 'bg-teal-500 text-slate-950' : 'bg-slate-200 text-slate-800'
              }`}>
                {s.step}
              </span>
              <span>Step {s.step}</span>
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        {(() => {
          const current = recoverySteps.find((s) => s.step === activeStepTab) || recoverySteps[0];
          return (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-teal-600 p-6 sm:p-8 shadow-lg space-y-6 animate-in fade-in duration-150">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
                    Step {current.step} Action
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {current.title}
                  </h3>
                </div>
                <span className="text-xs font-bold bg-rose-100 text-rose-800 px-3 py-1 rounded-full border border-rose-300">
                  Timeline: {current.urgency}
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {current.summary}
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  What to do right now:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {current.actions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-600">
                  <strong>Direct Contact:</strong> <span className="font-mono font-bold text-slate-900">{current.hotline}</span>
                </div>
                {current.link && (
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Official Directory of Australian Emergency Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Official Australian Support Hotlines Directory
            </h2>
            <p className="text-sm text-slate-400">
              Save these numbers to your phone or keep them printed for immediate household reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                Free Identity Counseling
              </span>
              <h3 className="font-bold text-lg text-white">IDCARE</h3>
              <p className="text-xs text-slate-300">
                National identity and cyber security community support service.
              </p>
              <div className="pt-2 border-t border-slate-700">
                <div className="text-teal-300 font-mono font-black text-lg">1800 595 160</div>
                <div className="text-[11px] text-slate-400">Mon-Fri 8am-5pm AEST</div>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                Australian Police Cybercrime
              </span>
              <h3 className="font-bold text-lg text-white">ReportCyber</h3>
              <p className="text-xs text-slate-300">
                Official intake for cyber attacks, identity theft, and online extortion.
              </p>
              <div className="pt-2 border-t border-slate-700">
                <div className="text-teal-300 font-mono font-black text-lg">1300 292 371</div>
                <div className="text-[11px] text-slate-400">24/7 Phone Support (1300 CYBER1)</div>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                Emotional Reassurance
              </span>
              <h3 className="font-bold text-lg text-white">Lifeline Australia</h3>
              <p className="text-xs text-slate-300">
                24/7 crisis support and confidential counseling for anyone feeling distressed.
              </p>
              <div className="pt-2 border-t border-slate-700">
                <div className="text-teal-300 font-mono font-black text-lg">13 11 14</div>
                <div className="text-[11px] text-slate-400">Available 24/7 / 365 Days</div>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 space-y-3">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                Online Safety for Youth
              </span>
              <h3 className="font-bold text-lg text-white">eSafety Commissioner</h3>
              <p className="text-xs text-slate-300">
                Help with online bullying, image-based abuse, and youth cyber safety.
              </p>
              <div className="pt-2 border-t border-slate-700">
                <div className="text-teal-300 font-mono font-black text-base">esafety.gov.au</div>
                <div className="text-[11px] text-slate-400">Online reporting & triage</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
