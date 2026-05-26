'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { type Language } from '../localization';

export function LanguagePageShell({ children }: { children: (language: Language) => ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'tr';
    }

    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage === 'tr' || savedLanguage === 'en' ? savedLanguage : 'tr';
  });

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="w-full flex-1">{children(language)}</main>
    </div>
  );
}