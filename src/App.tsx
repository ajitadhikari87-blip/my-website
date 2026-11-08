import React, { useState, useEffect } from 'react';
import { PageId, PersonaId } from './types';
import { EmergencyBanner } from './components/EmergencyBanner';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiNavigatorModal } from './components/AiNavigatorModal';
import { HomePage } from './pages/HomePage';
import { SpotScamPage } from './pages/SpotScamPage';
import { SecureAccountsPage } from './pages/SecureAccountsPage';
import { LearnPracticePage } from './pages/LearnPracticePage';
import { GetHelpPage } from './pages/GetHelpPage';
import { AboutPrivacyPage } from './pages/AboutPrivacyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [selectedPersona, setSelectedPersona] = useState<PersonaId>('all');
  const [isAiGuideOpen, setIsAiGuideOpen] = useState<boolean>(false);

  // Synchronize SEO Title & Meta Descriptions dynamically on page navigation
  useEffect(() => {
    let title = 'How To Avoid Getting Scammed Online | Cybersafe Community';
    let description = 'Know how to avoid scams; develop safe online practices. An Australian community awareness initiative helping youth, parents, and seniors spot scams, secure accounts, and report cyber threats.';

    switch (currentPage) {
      case 'home':
        title = 'How To Avoid Getting Scammed Online | Cybersafe Community';
        description = 'Campaign slogan: Know how to avoid scams; develop safe online practices. Australian community awareness for youth, families, and seniors.';
        break;
      case 'spot-a-scam':
        title = 'How To Spot a Scam in Australia | Cybersafe Community';
        description = 'Learn to recognise scam warning signs, inspect fictional email/SMS/gaming scam examples, and use the Pause. Check. Protect. decision guide.';
        break;
      case 'secure-accounts':
        title = 'How To Turn On MFA & Secure Accounts | Cybersafe Community';
        description = 'Step-by-step plain English guides to Multi-Factor Authentication, 4-word passphrases, and a downloadable Family Cyber Safety Checklist.';
        break;
      case 'learn-practice':
        title = 'Practice Scam Radar & 5-Question Quiz | Cybersafe Community';
        description = 'Test your skills with our non-stored fictional scenario quiz, dinner conversation cards, and plain-English glossary of cybersecurity terms.';
        break;
      case 'get-help':
        title = 'What To Do If You Have Been Scammed in Australia | Cybersafe Community';
        description = 'Urgent bank advice, Scamwatch vs ReportCyber differences, and official Australian hotline directory (IDCARE, ReportCyber, Lifeline).';
        break;
      case 'about-privacy':
        title = 'About & Privacy Commitment | Cybersafe Community';
        description = 'Learn about our community awareness purpose, audience personas (Alex, Priya, Margaret), and strict zero-data collection guarantee.';
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fontScaleClass = 
    fontSize === 'large' 
      ? 'font-scale-large' 
      : fontSize === 'xlarge' 
      ? 'font-scale-xlarge' 
      : 'font-scale-normal';

  return (
    <div className={`min-h-screen flex flex-col transition-colors ${fontScaleClass} ${highContrast ? 'high-contrast bg-slate-100 text-slate-950' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* 1. Emergency Banner (Top Priority) */}
      <EmergencyBanner onNavigate={handleNavigate} />

      {/* 2. Accessibility Controls & Persona Selector */}
      <AccessibilityBar
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        selectedPersona={selectedPersona}
        setSelectedPersona={setSelectedPersona}
      />

      {/* 3. Sticky Responsive Header with Prominent Get Help Button */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAiGuide={() => setIsAiGuideOpen(true)}
      />

      {/* 4. Active Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAiGuide={() => setIsAiGuideOpen(true)}
            selectedPersona={selectedPersona}
            setSelectedPersona={setSelectedPersona}
          />
        )}
        {currentPage === 'spot-a-scam' && (
          <SpotScamPage
            onNavigate={handleNavigate}
            selectedPersona={selectedPersona}
          />
        )}
        {currentPage === 'secure-accounts' && (
          <SecureAccountsPage
            onNavigate={handleNavigate}
            selectedPersona={selectedPersona}
          />
        )}
        {currentPage === 'learn-practice' && (
          <LearnPracticePage
            onNavigate={handleNavigate}
            selectedPersona={selectedPersona}
          />
        )}
        {currentPage === 'get-help' && (
          <GetHelpPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about-privacy' && (
          <AboutPrivacyPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 5. Accessible Footer with Hotlines & Privacy Commitment */}
      <Footer onNavigate={handleNavigate} />

      {/* 6. AI Pathway Navigator Modal */}
      <AiNavigatorModal
        isOpen={isAiGuideOpen}
        onClose={() => setIsAiGuideOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
