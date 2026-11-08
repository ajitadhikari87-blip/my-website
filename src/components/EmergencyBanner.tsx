import React from 'react';
import { AlertTriangle, PhoneCall, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface EmergencyBannerProps {
  onNavigate: (page: PageId) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onNavigate }) => {
  return (
    <aside aria-label="Urgent scam assistance" className="emergency-banner bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white px-4 py-2.5 shadow-sm text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="p-1 bg-white/20 rounded-full flex-shrink-0 animate-pulse">
            <AlertTriangle className="w-4 h-4 text-amber-200" />
          </span>
          <span>
            <strong className="font-bold underline decoration-amber-300">Urgent:</strong> If you recently sent money or shared bank details with a suspicious party, contact your bank&apos;s 24/7 fraud team right now.
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => onNavigate('get-help')}
            className="inline-flex items-center gap-1.5 bg-white text-rose-800 hover:bg-amber-50 px-3 py-1 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Emergency Help Steps</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </aside>
  );
};
