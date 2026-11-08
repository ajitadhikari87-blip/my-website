import React from 'react';
import { Eye, Type, UserCheck, ShieldCheck } from 'lucide-react';
import { PersonaId } from '../types';

interface AccessibilityBarProps {
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  selectedPersona: PersonaId;
  setSelectedPersona: (p: PersonaId) => void;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  selectedPersona,
  setSelectedPersona,
}) => {
  return (
    <div className="accessibility-bar bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-1.5 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Persona tailoring */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-slate-400 flex items-center gap-1 font-semibold">
            <UserCheck className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Tailor for:</span>
          </span>
          <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
            <button
              onClick={() => setSelectedPersona('all')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                selectedPersona === 'all'
                  ? 'bg-teal-600 text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Everyone
            </button>
            <button
              onClick={() => setSelectedPersona('alex')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                selectedPersona === 'alex'
                  ? 'bg-teal-600 text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="Alex, 15: Gaming, messaging & youth guidance"
            >
              Alex (15)
            </button>
            <button
              onClick={() => setSelectedPersona('priya')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                selectedPersona === 'priya'
                  ? 'bg-teal-600 text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="Priya, 38: Working parent, family checklists & MFA"
            >
              Priya (38)
            </button>
            <button
              onClick={() => setSelectedPersona('margaret')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                selectedPersona === 'margaret'
                  ? 'bg-teal-600 text-white font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
              title="Margaret, 68: Retired adult, clear text & reassurance"
            >
              Margaret (68)
            </button>
          </div>
        </div>

        {/* Right: Text size & contrast */}
        <div className="flex items-center gap-3 ml-auto flex-wrap">
          <div className="flex items-center gap-1 text-slate-400">
            <Type className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden md:inline">Text Size:</span>
            <div className="inline-flex rounded bg-slate-800 p-0.5 border border-slate-700">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'normal' ? 'bg-slate-700 text-teal-300' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-xs font-bold ${
                  fontSize === 'large' ? 'bg-slate-700 text-teal-300' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Large font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1.5 py-0.5 rounded text-sm font-bold ${
                  fontSize === 'xlarge' ? 'bg-slate-700 text-teal-300' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Extra large font size for high readability"
              >
                A++
              </button>
            </div>
          </div>

          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded border text-[11px] font-semibold transition-colors ${
              highContrast
                ? 'bg-yellow-400 text-slate-950 border-yellow-300 font-bold'
                : 'border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>{highContrast ? 'High Contrast ON' : 'High Contrast'}</span>
          </button>

          <div className="hidden lg:flex items-center gap-1 text-slate-400 pl-2 border-l border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px]">100% Private & Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};
