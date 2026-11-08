import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: 'Road Toll SMS with Expiring Penalty Link',
    context: 'You receive a text at 8:30pm: "Linkt: You have an unpaid toll of $9.15. Avoid $165 court penalty by paying within 4 hours at: https://linkt-portal-au-express.com". What is your best move?',
    targetPersona: 'priya',
    options: [
      {
        text: 'Tap the link quickly and pay $9.15 to avoid risking the $165 penalty.',
        isCorrect: false,
        explanation: 'Scammers deliberately manufacture urgent, terrifying penalties to trigger adrenaline and rush you past your doubts. Tapping the link exposes your credit card.',
      },
      {
        text: 'Reply "STOP" or "UNSUBSCRIBE" to make them take you off their SMS list.',
        isCorrect: false,
        explanation: 'Replying tells the scammer that your mobile phone number is active and monitored, which leads to even more scam messages.',
      },
      {
        text: 'Pause, do not click the link, and independently check via the official Linkt app or website.',
        isCorrect: true,
        explanation: 'Correct! Always use official bookmarks or search engines to reach "linkt.com.au" directly. Never trust links inside unsolicited SMS messages.',
      },
      {
        text: 'Forward the message to all your family members so they can pay it for you.',
        isCorrect: false,
        explanation: 'Forwarding without warning could put your family members at risk of clicking the fake link.',
      },
    ],
    educationalTakeaway: 'Rule 1: Urgency + Link = High Alert. Official toll agencies do not demand payment links through random mobile numbers.',
  },
  {
    id: 2,
    scenario: 'Discord or Steam "Free Knife Skin / V-Bucks" Offer',
    context: 'A school friend\'s Discord account sends you a message: "Bro my team won a tournament and we got 3 spare legendary skins! Sign in with your Steam account here to get one: https://steamcommunity-giftrewards.top". What should you do?',
    targetPersona: 'alex',
    options: [
      {
        text: 'Enter your username and password, but quickly change your password afterwards.',
        isCorrect: false,
        explanation: 'Scammer bots can steal your credentials and 2FA session token in milliseconds, instantly changing the recovery email and locking you out.',
      },
      {
        text: 'Recognise that your friend\'s account is likely hijacked, don\'t click the link, and message your friend via another app or at school.',
        isCorrect: true,
        explanation: 'Spot on! Account hijacking is very common in gaming. Compromised accounts automatically blast fake giveaway links to all their friends. Verifying via another channel saves your account.',
      },
      {
        text: 'Click the link and only inspect if the website looks like Steam before deciding.',
        isCorrect: false,
        explanation: 'Modern phishing sites look visually identical to official login portals. Visiting the page can also trigger malicious downloads.',
      },
      {
        text: 'Give them your 2FA authenticator code instead of your password.',
        isCorrect: false,
        explanation: 'Never give your 2FA authenticator code to anyone! It gives full access to bypass your account security.',
      },
    ],
    educationalTakeaway: 'Rule 2: If a friend\'s message sounds unusual or offers free gaming assets, their account might be compromised. Always check with them in person or by phone.',
  },
  {
    id: 3,
    scenario: 'myGov "Unclaimed Tax Refund" Email',
    context: 'An email with the Australian Government crest states: "myGov: You have an unclaimed tax return of $1,420. Click here to confirm your bank account and Medicare details." How should you handle this?',
    targetPersona: 'margaret',
    options: [
      {
        text: 'Open the link, enter your Medicare card number, and verify your bank account.',
        isCorrect: false,
        explanation: 'This is a phishing attempt designed to steal your identity documents (Medicare) and financial accounts.',
      },
      {
        text: 'Delete or report the email, and remember that real myGov notifications never include direct login links or state refund amounts in emails.',
        isCorrect: true,
        explanation: 'Brilliant! Legitimate myGov emails only say: "You have a new message in your myGov inbox". They will never tell you dollar amounts or provide direct login links in emails.',
      },
      {
        text: 'Reply to the sender email asking if it is authentic.',
        isCorrect: false,
        explanation: 'Replying reaches the scammer, who will simply lie and reassure you that the message is authentic.',
      },
      {
        text: 'Send the email to the local police station in an envelope.',
        isCorrect: false,
        explanation: 'While well-intentioned, police don\'t investigate unsolicited emails unless cybercrime or actual financial loss has occurred.',
      },
    ],
    educationalTakeaway: 'Rule 3: myGov and the ATO never include clickable links to login screens in email or SMS notifications.',
  },
  {
    id: 4,
    scenario: 'Facebook Marketplace Buyer Demands "PayID Business Upgrade"',
    context: 'You are selling a lawnmower for $150 on Facebook Marketplace. The buyer says: "I sent the money via PayID, but check your email—you must send $300 to upgrade to a PayID Business Account before my payment releases. It is 100% refundable." What is true?',
    targetPersona: 'priya',
    options: [
      {
        text: 'PayID is a free Australian banking service and NEVER requires users to pay to upgrade or receive money.',
        isCorrect: true,
        explanation: 'Exactly right! PayID never charges fees to receive funds, and there is no such thing as a "PayID business upgrade fee" for individuals. Anyone asking you to send money to receive money is a scammer.',
      },
      {
        text: 'Send the $300 quickly because the buyer’s email screenshot proves it will be refunded.',
        isCorrect: false,
        explanation: 'The screenshot and confirmation email are fake documents forged by the scammer. The $300 would go straight into their hands.',
      },
      {
        text: 'Offer to split the $300 fee 50/50 with the buyer.',
        isCorrect: false,
        explanation: 'You would still lose $150 to a scammer for an entirely fictional fee.',
      },
      {
        text: 'Ask the buyer to pay by iTunes or Google Play gift cards instead.',
        isCorrect: false,
        explanation: 'Gift cards are non-refundable and a favourite tool of scammers. Never use gift cards for legitimate marketplace transactions.',
      },
    ],
    educationalTakeaway: 'Rule 4: You NEVER have to send money to receive money. PayID is free for regular Australians.',
  },
  {
    id: 5,
    scenario: 'Unexpected Phone Call from "Telstra / NBN Technical Support"',
    context: 'A caller with an Australian accent claims: "We have detected dangerous hacking activity on your home internet. I need you to install AnyDesk on your tablet right now so we can clean your network." What should you do?',
    targetPersona: 'margaret',
    options: [
      {
        text: 'Follow their step-by-step instructions because protecting your internet connection is important.',
        isCorrect: false,
        explanation: 'Installing AnyDesk gives the scammer remote access to see your screen, install keyloggers, and access your open bank sessions.',
      },
      {
        text: 'Hang up the phone immediately. If you have concerns about your internet, call your provider using the number on your monthly bill.',
        isCorrect: true,
        explanation: 'Spot on! It is never rude to hang up on an unexpected caller. Legitimate telecommunications companies do not call out of the blue demanding remote computer access.',
      },
      {
        text: 'Keep them on the phone while giving them a fake credit card number.',
        isCorrect: false,
        explanation: 'Engaging with scammers is risky and wastes your valuable time. Hanging up immediately is the safest and most effective move.',
      },
      {
        text: 'Ask them to give you their badge number so you can trust them.',
        isCorrect: false,
        explanation: 'Scammers readily invent fake badge numbers, employee IDs, and supervisor names to sound legitimate.',
      },
    ],
    educationalTakeaway: 'Rule 5: Never give remote access to your devices to unsolicited callers. Always hang up and verify.',
  },
];
