import React, { useState } from 'react';
import { Shield, Sparkles, Menu, X, AlertOctagon, HelpCircle } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAiGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenAiGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'spot-a-scam', label: 'Spot a Scam' },
    { id: 'secure-accounts', label: 'Secure Your Accounts' },
    { id: 'learn-practice', label: 'Learn & Practice' },
    { id: 'get-help', label: 'Get Help & Report', badge: 'Crucial' },
    { id: 'about-privacy', label: 'About & Privacy' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo & Campaign Slogan */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-lg p-1 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <Shield className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                  Cybersafe<span className="text-teal-600">.</span>Community
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wider">
                  AU Awareness
                </span>
              </div>
              <p className="hidden md:block text-xs font-semibold text-slate-500 italic">
                “Know how to avoid scams; develop safe online practices.”
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const isHelp = link.id === 'get-help';

              if (isHelp) {
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`ml-2 px-4 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-sm transition-all ${
                      isActive
                        ? 'bg-rose-700 text-white ring-2 ring-rose-400'
                        : 'bg-rose-600 hover:bg-rose-700 text-white hover:shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    <AlertOctagon className="w-4 h-4 animate-pulse" />
                    <span>Get Help & Report</span>
                  </button>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-teal-700 bg-teal-50 font-bold'
                      : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-teal-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* AI Guide quick trigger & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenAiGuide}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-300 text-teal-800 hover:border-teal-500 hover:shadow-sm transition-all"
              title="Open AI Learning Pathway Navigator"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="hidden sm:inline">AI Pathway Guide</span>
              <span className="sm:hidden">AI Guide</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slogan banner on smaller viewports */}
      <div className="md:hidden bg-teal-50/70 border-t border-teal-100 px-4 py-1.5 text-center text-[11px] font-medium text-teal-900 italic">
        “Know how to avoid scams; develop safe online practices.”
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 pb-1">
            Menu Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            const isHelp = link.id === 'get-help';

            if (isHelp) {
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-left px-4 py-3 rounded-xl font-bold text-base flex items-center justify-between bg-rose-600 text-white shadow-md active:bg-rose-700"
                >
                  <span className="flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 text-white" />
                    Get Help & Report (Emergency Steps)
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">
                    Urgent
                  </span>
                </button>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-teal-50 text-teal-800 font-bold border-l-4 border-teal-600'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="text-xs text-teal-700 font-bold">Current</span>}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiGuide();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              Ask Cybersafe AI Navigator
            </button>
            <p className="text-[11px] text-slate-500 text-center">
              Fictional examples only • Never shares your private details
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
