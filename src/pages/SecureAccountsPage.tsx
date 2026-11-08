import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Download, 
  Printer, 
  CheckSquare, 
  Square, 
  KeyRound, 
  Smartphone, 
  RefreshCw, 
  Database, 
  EyeOff, 
  CreditCard, 
  ExternalLink, 
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/checklistData';
import { PageId, PersonaId } from '../types';

interface SecureAccountsPageProps {
  onNavigate: (page: PageId) => void;
  selectedPersona: PersonaId;
}

export const SecureAccountsPage: React.FC<SecureAccountsPageProps> = ({ onNavigate, selectedPersona }) => {
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredChecklist = CHECKLIST_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPersona = selectedPersona === 'all' || item.personaRelevance.includes(selectedPersona);
    return matchesCategory && matchesPersona;
  });

  const totalItems = CHECKLIST_ITEMS.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  // Print function
  const handlePrint = () => {
    window.print();
  };

  // Text download function
  const handleDownload = () => {
    let content = `CYBERSAFE COMMUNITY - FAMILY CYBER SAFETY CHECKLIST\n`;
    content += `Campaign slogan: "Know how to avoid scams; develop safe online practices."\n`;
    content += `Date: ${new Date().toLocaleDateString('en-AU')}\n`;
    content += `Official advice aligned with Australian Signals Directorate (ASD) & Scamwatch.\n\n`;

    CHECKLIST_ITEMS.forEach((item, idx) => {
      const isDone = checkedItems[item.id] ? '[COMPLETED]' : '[ ]';
      content += `${idx + 1}. ${isDone} ${item.title} (${item.category} - ${item.importance})\n`;
      content += `   Est. time: ${item.timeEstimate}\n`;
      content += `   Details: ${item.description}\n\n`;
    });

    content += `Need urgent help? Call IDCARE on 1800 595 160 or ReportCyber on 1300 CYBER1.\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Family-Cyber-Safety-Checklist-AU.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-16 pb-16 print-container">
      
      {/* Printable Title Header (only visible on print) */}
      <div className="hidden print:block text-black p-6 border-b-2 border-black space-y-2">
        <h1 className="text-2xl font-bold">Cybersafe Community — Family Cyber Safety Checklist</h1>
        <p className="text-sm">“Know how to avoid scams; develop safe online practices.”</p>
        <p className="text-xs">Date printed: {new Date().toLocaleDateString('en-AU')} • Non-commercial educational resource</p>
      </div>

      {/* Hero Header */}
      <section className="no-print bg-gradient-to-b from-slate-900 to-cyan-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Digital Armor & Prevention</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            How to Turn on MFA & Secure Your Accounts
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over 95% of cyber incidents can be prevented with simple, daily habits. Here are clear, step-by-step actions designed for busy Australians.
          </p>
        </div>
      </section>

      {/* Plain-English Action Guides */}
      <section className="no-print max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            5 Essential Security Pillars in Plain English
          </h2>
          <p className="text-sm text-slate-600">
            No jargon. Here is exactly what these security steps mean and why they protect your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. MFA */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Multi-Factor Authentication (MFA)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>What it is:</strong> A digital double lock. Even if a scammer acquires your password, they cannot log in without the one-time code or prompt on your physical phone.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">How to turn it on:</strong>
              <p>Go to Account Settings &gt; Security &gt; Turn on 2-Step Verification on your email, myGov, and bank app.</p>
            </div>
          </div>

          {/* 2. 4-Word Passphrases */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Four-Word Passphrases</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Why it works:</strong> Short complex passwords like &quot;P@ss1&quot; take seconds to crack. A 4-word passphrase like <code className="bg-slate-100 px-1 py-0.5 rounded text-teal-800 font-mono font-bold">kangaroo-solar-teapot-ocean</code> takes centuries to brute-force and is easy to remember.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">Australian standard:</strong>
              <p>ASD recommends at least 14 characters. Pick 4 random unrelated Australian words.</p>
            </div>
          </div>

          {/* 3. Automatic Updates */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Automatic Updates</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Why it matters:</strong> Cybercriminals search for known flaws in phones and computers. Software updates patch these holes before criminals can exploit them.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">Quick action:</strong>
              <p>Turn on &quot;Automatic Updates&quot; in your device settings so you never have to remember.</p>
            </div>
          </div>

          {/* 4. Safe Online Shopping */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">4. Safe Online Shopping</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Buyer protection:</strong> Always pay using PayPal or credit cards rather than direct bank deposit. Credit cards and PayPal feature fraud dispute systems.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">Domain check:</strong>
              <p>Ensure official Australian stores end in .com.au and feature a verified physical address.</p>
            </div>
          </div>

          {/* 5. 3-2-1 Backups */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">5. 3-2-1 Backup Strategy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Ransomware shield:</strong> Keep 3 copies of irreplaceable family photos and documents: 2 on different media (e.g. cloud + USB drive), and 1 offline.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">Peace of mind:</strong>
              <p>If a device is lost or locked by malware, you lose nothing.</p>
            </div>
          </div>

          {/* 6. Social Media Privacy */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">6. Social Privacy Lock</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Stop identity harvesting:</strong> Scammers scrape pet names, birthdays, and school names to reset banking security questions. Set social accounts to &quot;Friends Only&quot;.
            </p>
            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1 text-slate-700">
              <strong className="block text-slate-900">Youth tip:</strong>
              <p>Alex (15) can review Discord & Instagram audience settings with parents.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Downloadable / Printable Family Cyber Safety Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-teal-600 p-6 sm:p-10 shadow-lg space-y-8">
          
          {/* Header & Print controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Printable Household Resource</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Family Cyber Safety Checklist
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tick off these steps together as a household. Your progress is kept 100% private in your browser.
              </p>
            </div>

            <div className="no-print flex items-center gap-2 flex-wrap">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Checklist</span>
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download (.txt)</span>
              </button>
            </div>
          </div>

          {/* Progress Tracker Bar */}
          <div className="no-print bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-700">Household Security Readiness:</span>
              <span className="text-teal-700 font-mono text-sm">{completedCount} of {totalItems} completed ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {completedCount === totalItems && (
              <p className="text-xs font-bold text-emerald-700 text-center pt-1 animate-pulse">
                Awesome effort! Your family has implemented all core Australian cyber safety standards!
              </p>
            )}
          </div>

          {/* Category Filter Pills (no-print) */}
          <div className="no-print flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-bold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {(['All', 'Accounts & Passwords', 'Device & Software', 'Family & Sharing', 'Money & Shopping'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Checklist Items Grid */}
          <div className="space-y-3">
            {filteredChecklist.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-4 ${
                    isChecked
                      ? 'bg-teal-50/60 border-teal-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 text-teal-600 focus:outline-none flex-shrink-0"
                    aria-label={isChecked ? `Unmark ${item.title}` : `Mark ${item.title}`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 text-teal-600" />
                    ) : (
                      <Square className="w-6 h-6 text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className={`text-sm sm:text-base font-bold ${
                        isChecked ? 'text-teal-950 line-through decoration-teal-600' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {item.timeEstimate}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          item.importance === 'Essential'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.importance}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Official Links Footer */}
      <section className="no-print max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <p className="text-xs text-slate-500 font-semibold">
          Official Australian security standards and technical guides:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
          <a
            href="https://www.cyber.gov.au/protect-yourself/securing-your-accounts/multi-factor-authentication"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-700 hover:underline"
          >
            ASD Guide to Multi-Factor Authentication <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://my.gov.au/en/about/help/mygov-website/sign-in-to-mygov/passkeys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-700 hover:underline"
          >
            myGov Passkeys & Security Codes <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

    </div>
  );
};
