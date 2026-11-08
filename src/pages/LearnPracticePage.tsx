import React, { useState } from 'react';
import { 
  GraduationCap, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Video, 
  MessageCircle, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  ChevronRight,
  Flame,
  Award
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { DISCUSSION_CARDS } from '../data/discussionCards';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { PageId, PersonaId } from '../types';

interface LearnPracticePageProps {
  onNavigate: (page: PageId) => void;
  selectedPersona: PersonaId;
}

export const LearnPracticePage: React.FC<LearnPracticePageProps> = ({ onNavigate, selectedPersona }) => {
  // Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [answeredState, setAnsweredState] = useState<{ [qId: number]: number }>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Discussion card carousel state
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  // Video scenario simulation modal state
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIdx];
  const hasAnsweredCurrent = selectedOptionIdx !== null;

  const handleSelectOption = (idx: number) => {
    if (hasAnsweredCurrent) return;
    setSelectedOptionIdx(idx);
    setAnsweredState((prev) => ({
      ...prev,
      [currentQ.id]: idx,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOptionIdx(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOptionIdx(null);
    setAnsweredState({});
    setQuizFinished(false);
  };

  // Score calculation
  const score = Object.entries(answeredState).reduce((acc, [qId, optIdx]) => {
    const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
    if (q && q.options[optIdx]?.isCorrect) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const videoScenarios = [
    {
      id: 'video-toll',
      title: 'Deconstructing the Road Toll SMS',
      duration: '1:45 min',
      audience: 'Commuters & Families',
      summary: 'Watch how scammers spoof official sender names and generate fake urgency on your lock screen.',
    },
    {
      id: 'video-gaming',
      title: 'Gaming Skin Giveaways & Hijacked Accounts',
      duration: '2:10 min',
      audience: 'Youth (Alex, 15) & Gamers',
      summary: 'Why free Discord or Steam skin links steal your inventory and how to recover a hacked account.',
    },
    {
      id: 'video-phone-call',
      title: 'The "Telstra/NBN Technician" Landline Scam',
      duration: '2:30 min',
      audience: 'Older Adults (Margaret, 68)',
      summary: 'Learn what to say and why hanging up immediately is the safest move when a caller asks for AnyDesk.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Interactive Skills Training</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Learn & Practice: Build Your Scam Radar
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Test your knowledge with our non-stored fictional scenario quiz, start conversations with family discussion cards, and explore plain-English cyber definitions.
          </p>
        </div>
      </section>

      {/* 5-Question Interactive Fictional-Scenario Quiz */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden">
          
          {/* Quiz Header Bar */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  Scenario Quiz
                </span>
                <span className="text-xs text-slate-400">
                  Question {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mt-1">
                Fictional Scam Detection Challenge
              </h2>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Local • Zero Data Stored</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2">
            <div
              className="bg-teal-600 h-2 transition-all duration-300"
              style={{ width: `${((currentQuestionIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Quiz Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {!quizFinished ? (
              <>
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    Scenario: {currentQ.scenario}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {currentQ.context}
                  </h3>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOptionIdx === idx;
                    const showFeedback = hasAnsweredCurrent;
                    
                    let cardStyle = 'border-slate-200 hover:border-slate-300 bg-white';
                    if (showFeedback) {
                      if (option.isCorrect) {
                        cardStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-400/20';
                      } else if (isSelected) {
                        cardStyle = 'border-rose-500 bg-rose-50/80 ring-2 ring-rose-400/20';
                      } else {
                        cardStyle = 'border-slate-200 opacity-60 bg-slate-50';
                      }
                    }

                    return (
                      <div key={idx} className="space-y-2">
                        <button
                          type="button"
                          onClick={() => handleSelectOption(idx)}
                          disabled={hasAnsweredCurrent}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${cardStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                            showFeedback && option.isCorrect
                              ? 'bg-emerald-600 text-white'
                              : showFeedback && isSelected
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-normal flex-1">
                            {option.text}
                          </span>
                          {showFeedback && option.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          )}
                          {showFeedback && isSelected && !option.isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                          )}
                        </button>

                        {/* Immediate Explanatory Feedback */}
                        {showFeedback && (isSelected || option.isCorrect) && (
                          <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                            option.isCorrect
                              ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                              : 'bg-rose-100 text-rose-950 border border-rose-300'
                          }`}>
                            <strong>{option.isCorrect ? 'Why this is safe: ' : 'Why this is risky: '}</strong>
                            {option.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Question Footer / Next Step */}
                {hasAnsweredCurrent && (
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-600 font-medium">
                      💡 <strong>Takeaway:</strong> {currentQ.educationalTakeaway}
                    </div>
                    <button
                      onClick={handleNextQuestion}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <span>{currentQuestionIdx === QUIZ_QUESTIONS.length - 1 ? 'See Results' : 'Next Question'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Quiz Finished View */
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900">Quiz Completed!</h3>
                  <p className="text-sm text-slate-600">
                    You scored <strong className="text-teal-700 text-lg">{score} out of 5</strong> on real-world Australian scam scenarios.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-lg mx-auto text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900">
                    {score >= 4
                      ? 'Outstanding! You have a sharp eye for modern Australian phishing and social engineering.'
                      : 'Good effort! Scammers use subtle psychological pressure. Review the Spot a Scam guide to build your reflex.'}
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    No responses or personal data are ever saved or stored on our servers.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Try Quiz Again</span>
                  </button>
                  <button
                    onClick={() => onNavigate('secure-accounts')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm transition-colors"
                  >
                    <span>Secure Your Accounts Checklist</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Family Discussion Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversation Starters</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Family Cyber Discussion Cards
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Bring these questions to the dinner table to help kids, parents, and grandparents build shared digital safety agreements.
              </p>
            </div>
            <div className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-lg self-start sm:self-auto">
              Card {activeCardIdx + 1} of {DISCUSSION_CARDS.length}
            </div>
          </div>

          {/* Active Card */}
          <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Topic: {DISCUSSION_CARDS[activeCardIdx].topic}
              </span>
              <span className="text-slate-500 font-medium">
                Best for: {DISCUSSION_CARDS[activeCardIdx].targetAudience}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
              &quot;{DISCUSSION_CARDS[activeCardIdx].question}&quot;
            </h3>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1 border border-slate-100">
              <strong className="text-slate-900 block">Why this matters to talk about:</strong>
              <p>{DISCUSSION_CARDS[activeCardIdx].whyItMatters}</p>
            </div>

            <div>
              <strong className="text-xs uppercase tracking-wider text-slate-700 block mb-2">
                Suggested Family Agreement Answers:
              </strong>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {DISCUSSION_CARDS[activeCardIdx].suggestedAnswers.map((ans, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-amber-50/50 p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{ans}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveCardIdx((prev) => (prev > 0 ? prev - 1 : DISCUSSION_CARDS.length - 1))}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              Previous Card
            </button>
            <div className="flex gap-1.5">
              {DISCUSSION_CARDS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCardIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeCardIdx === idx ? 'bg-amber-600 w-6' : 'bg-amber-200'
                  }`}
                  aria-label={`Jump to discussion card ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveCardIdx((prev) => (prev < DISCUSSION_CARDS.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors"
            >
              Next Card
            </button>
          </div>

        </div>
      </section>

      {/* Video & Visual Scenario Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Educational Scenario Walkthroughs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Short Visual Scenario Lessons
          </h2>
          <p className="text-sm text-slate-600">
            Bite-sized, animated scenario walkthroughs explaining common Australian scam tactics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoScenarios.map((vid) => (
            <div
              key={vid.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Fake Video Player Placeholder */}
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center group cursor-pointer"
                onClick={() => setActiveVideoModal(vid.title)}
              >
                <div className="w-14 h-14 rounded-full bg-teal-500/90 group-hover:bg-teal-400 group-hover:scale-110 text-slate-950 flex items-center justify-center shadow-lg transition-all">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 text-white px-2 py-0.5 rounded">
                  {vid.duration}
                </span>
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-teal-500 text-slate-950 px-2 py-0.5 rounded">
                  Interactive Explainer
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                    Audience: {vid.audience}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{vid.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {vid.summary}
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideoModal(vid.title)}
                  className="w-full py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Play Scenario Walkthrough</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Simulation Modal */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Video className="w-5 h-5 text-teal-600" />
                {activeVideoModal}
              </h3>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="text-slate-400 hover:text-slate-700 font-bold text-xl px-2"
              >
                ✕
              </button>
            </div>
            
            {/* Simulation Canvas / Key Steps */}
            <div className="bg-slate-950 text-slate-100 p-5 rounded-xl space-y-3 text-xs leading-relaxed font-sans">
              <div className="flex items-center gap-2 text-teal-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Key Learning Takeaway Breakdown</span>
              </div>
              <p>
                1. <strong>The Hook:</strong> Scammers craft believable emotional situations (overdue toll, free tournament skin, virus alert).
              </p>
              <p>
                2. <strong>The Trap:</strong> They send a link to a website visually identical to official portals (Steam, myGov, Linkt, CommBank).
              </p>
              <p>
                3. <strong>The Protection:</strong> Always look at the top address bar. A genuine Australian agency uses <code>.gov.au</code> or verified registered domains. When in doubt, navigate there yourself!
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-5 py-2 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 transition-colors"
              >
                Close Explainer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cyber Terminology Plain-English Glossary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wide">
            <BookOpen className="w-3.5 h-3.5" />
            <span>No-Jargon Dictionary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Cyber Safety Terms in Plain English
          </h2>
          <p className="text-sm text-slate-600">
            Never feel confused by technical talk again. Here is what cybersecurity jargon actually means.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GLOSSARY_TERMS.map((term, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-teal-900">{term.term}</h3>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                  {term.simpleDefinition}
                </p>
              </div>

              <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                <div className="bg-slate-50 p-2 rounded-lg text-slate-600">
                  <strong className="text-slate-800 block text-[11px]">Real life example:</strong>
                  {term.exampleInRealLife}
                </div>
                <div className="text-teal-800 bg-teal-50/80 p-2 rounded-lg font-medium">
                  <strong className="block text-teal-950 text-[11px]">Safety rule:</strong>
                  {term.safetyTip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
