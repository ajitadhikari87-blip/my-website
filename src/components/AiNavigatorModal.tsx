import React, { useState } from 'react';
import { Sparkles, X, Send, ShieldAlert, ArrowRight, BookOpen, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PageId, ChatMessage } from '../types';
import { askCybersafeGuide } from '../services/geminiGuide';

interface AiNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const AiNavigatorModal: React.FC<AiNavigatorModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "G'day! I'm your Cybersafe Pathway Guide. What online safety topic or concern would you like to explore today?\n\nTip: I can guide you to the right learning path, help you spot warning signs, or connect you with urgent reporting steps.",
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    { label: 'Suspicious Toll SMS / AusPost Text', query: 'I received a suspicious SMS saying I have an overdue toll road fee or parcel delivery failure.' },
    { label: 'Gaming Skin / Discord Scam (Alex, 15)', query: 'Someone on Discord or in a game offered free skins or Robux if I click a link.' },
    { label: 'Turn on MFA & Passwords (Priya, 38)', query: 'How do I set up multi-factor authentication (MFA) and choose safe passwords for my family?' },
    { label: 'Marketplace / Fake PayID Buyer', query: 'A buyer on Facebook Marketplace wants to use PayID and says I must pay an upgrade fee.' },
    { label: 'I Think I Was Scammed / Sent Money', query: 'I think I sent money or gave my bank details to a scammer. What do I do?' },
  ];

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      timestamp: 'Now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await askCybersafeGuide(query);
      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: response.message,
        suggestedPath: response.suggestedPath,
        suggestedAction: response.suggestedAction,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'Remember: Always pause and independently verify unexpected requests. If you suspect an account is compromised or money was transferred, contact your bank immediately.',
          suggestedPath: 'get-help',
          suggestedAction: 'View Emergency Contacts',
          timestamp: 'Just now',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handlePathwaySelect = (path?: PageId) => {
    if (path) {
      onNavigate(path);
      onClose();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Cybersafe Pathway Navigator</h2>
                <span className="text-[10px] bg-teal-400/20 text-teal-200 border border-teal-400/40 px-2 py-0.5 rounded-full font-bold uppercase">
                  Educational
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Helping Australians choose the right learning path or response steps
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close navigator"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Safety Boundary Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-start gap-2 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Safety Notice:</strong> This educational tool does <em>not</em> verify real personal messages, collect passwords or banking info, or give financial advice. All examples are fictional.
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-teal-700 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-none'
                }`}
              >
                {m.text}

                {/* Suggested Action Button inside assistant responses */}
                {m.suggestedPath && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> Recommended Learning Pathway:
                    </span>
                    <button
                      onClick={() => handlePathwaySelect(m.suggestedPath)}
                      className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-900 font-bold text-xs transition-colors group"
                    >
                      <span>{m.suggestedAction || 'Go to Recommended Page'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-slate-400 mt-1 px-1">
                {m.sender === 'user' ? 'You' : 'Cybersafe Navigator'} • {m.timestamp}
              </span>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-500 text-xs py-2 px-3 bg-white rounded-xl border border-slate-200 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
              <span>Checking educational guidance...</span>
            </div>
          )}
        </div>

        {/* Quick topic pills */}
        <div className="p-3 bg-slate-100 border-t border-slate-200">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Suggested topics to ask about:
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qp.query)}
                disabled={loading}
                className="text-xs bg-white hover:bg-teal-50 border border-slate-300 hover:border-teal-400 text-slate-700 hover:text-teal-800 px-2.5 py-1.5 rounded-lg text-left transition-all font-medium disabled:opacity-50"
              >
                {qp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question (e.g., 'What are signs of a scam text?')"
              className="flex-1 bg-slate-100 text-slate-900 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:bg-slate-300 text-white font-bold text-sm inline-flex items-center gap-1.5 transition-all shadow-sm"
              aria-label="Send query"
            >
              <span>Ask</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
