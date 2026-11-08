import { GoogleGenAI } from '@google/genai';
import { PageId } from '../types';

interface GuideResponse {
  message: string;
  suggestedPath: PageId;
  suggestedAction: string;
}

const SYSTEM_INSTRUCTION = `You are the Cybersafe Community Navigator, a warm, non-judgmental Australian educational assistant.
Your sole purpose is to help everyday Australians (teens, parents, seniors, small business owners) find the right educational learning pathway or emergency reporting guidance on the Cybersafe Community website.

CRITICAL RULES & SAFETY BOUNDARIES:
1. You DO NOT verify whether a user's real message is a scam. If a user asks "Is this message real?", explain the warning signs to look out for, remind them that scammers can spoof real numbers, and guide them to independent verification.
2. DO NOT collect, ask for, or store passwords, PINs, bank accounts, credit card numbers, or real phone numbers. If a user tries to share one, gently tell them never to share private credentials online.
3. DO NOT give financial advice, legal advice, or guarantee scam detection.
4. If a user indicates they already sent money or shared banking credentials, immediately emphasize urgent step 1: Contact their bank's 24/7 fraud department right away.
5. Keep your tone supportive, calm, plain-English, and encouraging. Never make the user feel embarrassed or ashamed.
6. Reference official Australian resources when relevant: Scamwatch, ReportCyber, IDCARE (1800 595 160).
7. Keep responses concise (2-4 short paragraphs maximum) with clear next steps.`;

export async function askCybersafeGuide(userQuery: string): Promise<GuideResponse> {
  const queryLower = userQuery.toLowerCase();

  // 1. Triage pathways based on user intent
  let suggestedPath: PageId = 'spot-a-scam';
  let suggestedAction = 'Explore Scam Red Flags';

  if (queryLower.includes('money') || queryLower.includes('sent') || queryLower.includes('lost') || queryLower.includes('hack') || queryLower.includes('report') || queryLower.includes('bank details') || queryLower.includes('scammed')) {
    suggestedPath = 'get-help';
    suggestedAction = 'View Emergency Help & Reporting Steps';
  } else if (queryLower.includes('mfa') || queryLower.includes('2fa') || queryLower.includes('password') || queryLower.includes('passphrase') || queryLower.includes('secure') || queryLower.includes('update') || queryLower.includes('checklist')) {
    suggestedPath = 'secure-accounts';
    suggestedAction = 'Check the Family Security Checklist';
  } else if (queryLower.includes('quiz') || queryLower.includes('practice') || queryLower.includes('learn') || queryLower.includes('test') || queryLower.includes('family') || queryLower.includes('video')) {
    suggestedPath = 'learn-practice';
    suggestedAction = 'Take the 5-Question Scenario Quiz';
  } else if (queryLower.includes('shopping') || queryLower.includes('marketplace') || queryLower.includes('game') || queryLower.includes('gaming') || queryLower.includes('sms') || queryLower.includes('text') || queryLower.includes('email') || queryLower.includes('call')) {
    suggestedPath = 'spot-a-scam';
    suggestedAction = 'View Fictional Scam Examples & Warning Signs';
  }

  // Check for API key (Vite client env or node process)
  const apiKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
                 (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
                 '';

  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `User concern: "${userQuery}"\n\nProvide clear, compassionate guidance following your system instructions. Do not ask for personal details. Provide a direct answer and point them toward the best learning pathway.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
        },
      });

      if (response.text) {
        return {
          message: response.text,
          suggestedPath,
          suggestedAction,
        };
      }
    } catch {
      // Fallback to our deterministic knowledge engine if API fails or network offline
    }
  }

  // Built-in intelligent local response fallback
  return getLocalTriageResponse(userQuery, suggestedPath, suggestedAction);
}

function getLocalTriageResponse(query: string, path: PageId, action: string): GuideResponse {
  const q = query.toLowerCase();

  if (q.includes('sent money') || q.includes('transferred') || q.includes('gave my bank') || q.includes('card details')) {
    return {
      message: `If you have sent money, entered your credit card, or shared bank login details with an unverified party, please act immediately:\n\n1. Contact your bank or credit union right now on their official 24/7 fraud emergency hotline.\n2. Request an immediate recall or stop on any pending transfers and freeze compromised cards.\n3. Contact IDCARE on 1800 595 160 for free, confidential identity support.\n\nScammers use high-pressure tactics. Remember: seeking help quickly is the smartest thing you can do, and there is no reason to feel ashamed.`,
      suggestedPath: 'get-help',
      suggestedAction: 'View Australian Support Hotlines & Report Steps',
    };
  }

  if (q.includes('sms') || q.includes('text') || q.includes('toll') || q.includes('linkt') || q.includes('post') || q.includes('package')) {
    return {
      message: `Suspicious text messages (smishing) often impersonate road toll operators (like Linkt) or parcel couriers (like Australia Post), claiming an urgent bill or delayed parcel with a countdown timer.\n\nKey rule: Never tap links inside unexpected texts. Legitimate Australian services do not demand payments through links from random mobile numbers (+61 4...).\n\nTo check safely, open your official account app or type the verified website address (such as auspost.com.au or linkt.com.au) directly in your browser.`,
      suggestedPath: 'spot-a-scam',
      suggestedAction: 'Inspect the Toll SMS Fictional Breakdown',
    };
  }

  if (q.includes('game') || q.includes('gaming') || q.includes('discord') || q.includes('skin') || q.includes('robux') || q.includes('v-buck') || q.includes('steam')) {
    return {
      message: `Gaming scams frequently target secondary students and gamers by promising free skins, tournament prizes, or free currency. Scammers send links to fake login pages that look just like Steam, Epic Games, or Discord to steal accounts and inventories.\n\nGolden rule: No one gives away rare digital items for free without an angle. Never enter your password or two-factor authenticator code on external websites.\n\nIf a school friend's account sent you a strange link, check with them in person—their account might be hijacked!`,
      suggestedPath: 'spot-a-scam',
      suggestedAction: 'View the Youth Gaming Scam Example (Alex, 15)',
    };
  }

  if (q.includes('mfa') || q.includes('2fa') || q.includes('password') || q.includes('passphrase') || q.includes('secure') || q.includes('protect')) {
    return {
      message: `Securing your accounts doesn't need to be overwhelming! The two highest-impact actions you can take today are:\n\n1. Turn on Multi-Factor Authentication (MFA) on your primary email, myGov, and bank. Even if a scammer finds your password, MFA locks them out.\n2. Switch to 4-word passphrases (like "kangaroo-solar-teapot-ocean") instead of short complex passwords.\n\nYou can review our step-by-step plain-English guide and print our Family Cyber Safety Checklist to tick off items together.`,
      suggestedPath: 'secure-accounts',
      suggestedAction: 'Download the Family Cyber Safety Checklist',
    };
  }

  if (q.includes('shop') || q.includes('marketplace') || q.includes('payid') || q.includes('facebook') || q.includes('gumtree')) {
    return {
      message: `Online shopping and marketplace scams are common in Australia. A major warning sign is when a buyer insists on using PayID and sends a fake screenshot or email claiming you must pay a "business upgrade fee".\n\nRemember: PayID is completely free for everyday Australians and NEVER requires you to pay to receive money. Never send money to receive money, and verify payments in your own banking app rather than trusting buyer emails.`,
      suggestedPath: 'spot-a-scam',
      suggestedAction: 'Review the Marketplace PayID Scam Example',
    };
  }

  // Default helpful response
  return {
    message: `Welcome to Cybersafe Community! We are here to help you recognise warning signs, secure your devices, and find trusted Australian help.\n\nRemember: Our educational guide never asks for your passwords, personal documents, or banking details. If you ever encounter an unexpected message, remember to: Pause. Check. Protect.`,
    suggestedPath: path,
    suggestedAction: action,
  };
}
