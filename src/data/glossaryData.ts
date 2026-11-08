import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'MFA (Multi-Factor Authentication)',
    simpleDefinition: 'A digital double-lock that requires two proofs of who you are before letting you log in (usually your password plus a temporary code on your phone).',
    exampleInRealLife: 'Entering your bank password on your computer, then approving a push notification on your phone before getting in.',
    safetyTip: 'Enable MFA on your main email, banking, and myGov first. Even if a scammer steals your password, they cannot log in without your physical device.',
  },
  {
    term: 'Phishing',
    simpleDefinition: 'Tricking you into giving away sensitive passwords or credit card numbers by sending fake emails that look identical to trusted organizations.',
    exampleInRealLife: 'An email with the Australian Government logo asking you to "claim an urgent tax refund" through a fake web link.',
    safetyTip: 'Never click links inside unexpected emails. Open a clean browser tab and type the official website address yourself.',
  },
  {
    term: 'Smishing (SMS Phishing)',
    simpleDefinition: 'Phishing carried out through text messages on mobile phones.',
    exampleInRealLife: 'A text message claiming to be from "Linkt" or "AusPost" saying a package is delayed or a toll is unpaid, with an urgent web link.',
    safetyTip: 'Legitimate courier and toll companies do not send links in random mobile texts. Track your items directly inside official apps.',
  },
  {
    term: 'Passphrase',
    simpleDefinition: 'A sequence of 4 or more random everyday words used as a password instead of a short string of jumbled symbols.',
    exampleInRealLife: 'Using "kangaroo-solar-teapot-ocean" instead of "P@ssw0rd123!".',
    safetyTip: 'Passphrases are vastly harder for computer algorithms to crack, but much easier for humans to remember.',
  },
  {
    term: 'Remote Access Scam',
    simpleDefinition: 'When a scammer convinces you over the phone to install software like AnyDesk or TeamViewer so they can take control of your computer or tablet.',
    exampleInRealLife: 'A caller claiming to be from "Telstra" or "Microsoft" saying your internet router has a virus and asking you to let them fix it.',
    safetyTip: 'Never install remote software for an unexpected caller. Hang up and call your provider\'s verified number directly.',
  },
  {
    term: 'PayID',
    simpleDefinition: 'A free Australian banking feature that links your bank account to your phone number or email address so people can pay you without seeing your BSB or account number.',
    exampleInRealLife: 'A buyer at a garage sale transferring money directly to your mobile number in seconds.',
    safetyTip: 'PayID is 100% free. Anyone claiming you must pay an "upgrade fee" or "business deposit" to receive a PayID transfer is attempting to scam you.',
  },
  {
    term: 'Spoofing',
    simpleDefinition: 'Faking the caller ID phone number or email sender address so a message or call appears to come from a legitimate bank, government agency, or friend.',
    exampleInRealLife: 'Your phone displays "CommBank" or an official number, but the call is actually originating from an offshore scam boiler room.',
    safetyTip: 'Caller ID cannot be trusted. If a caller claims to be your bank, hang up and call the number printed on the back of your physical card.',
  },
];
