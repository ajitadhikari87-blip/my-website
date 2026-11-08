import React from 'react';
import { Shield, ExternalLink, Heart, Lock, AlertCircle, Phone } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Initiative info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Cybersafe<span className="text-teal-400">.</span>Community
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              An Australian community awareness initiative empowering young people, working parents, older adults, and small businesses to navigate the digital world with confidence.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
              <p className="text-xs font-semibold text-teal-300 italic">
                “Know how to avoid scams; develop safe online practices.”
              </p>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Learning
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('spot-a-scam')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Spot a Scam (Fictional Examples)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secure-accounts')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Secure Your Accounts (MFA & Passphrases)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn-practice')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Learn & Practice (5-Question Quiz)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('get-help')}
                  className="text-rose-400 hover:text-rose-300 font-bold transition-colors text-left"
                >
                  Get Help & Report (Emergency Steps)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-privacy')}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  About & Privacy Commitment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Australian Hotlines */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-rose-400" />
              Trusted Australian Hotlines
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-white block">IDCARE (Identity Support)</span>
                <span className="text-teal-300 font-mono font-bold text-sm">1800 595 160</span>
                <span className="text-slate-400 block text-[11px]">Free national identity & cyber counseling</span>
              </li>
              <li className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-white block">ReportCyber (ASD / Police)</span>
                <span className="text-teal-300 font-mono font-bold text-sm">1300 CYBER1 (1300 292 371)</span>
                <span className="text-slate-400 block text-[11px]">Official police report for cybercrime</span>
              </li>
              <li className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                <span className="font-bold text-white block">Lifeline (24/7 Crisis Support)</span>
                <span className="text-teal-300 font-mono font-bold text-sm">13 11 14</span>
                <span className="text-slate-400 block text-[11px]">Free confidential emotional reassurance</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Privacy & Safety Guarantee */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              Privacy & Trust Guarantee
            </h3>
            <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3 text-xs space-y-2 text-emerald-200">
              <p className="font-semibold">
                This platform is strictly educational and community-focused.
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                <li>Zero personal data or passwords collected</li>
                <li>No real-time message verification storage</li>
                <li>No financial advice or detection guarantees</li>
                <li>All scenario examples are 100% fictional</li>
              </ul>
            </div>
            <p className="text-[11px] text-slate-400">
              Last content review date: <strong className="text-white">November 2026</strong>. Aligned with ASD Essential Eight & Scamwatch guidance.
            </p>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>
            © 2026 Cybersafe Community. Developed as an Australian public cyber safety awareness prototype.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://www.scamwatch.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-teal-300"
            >
              Scamwatch.gov.au <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.cyber.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-teal-300"
            >
              Cyber.gov.au <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.esafety.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-teal-300"
            >
              eSafety.gov.au <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
