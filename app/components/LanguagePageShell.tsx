'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { type Language } from '../localization';
import Footer from '../footer/Footer';

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
    <div className="min-h-screen bg-[var(--bg-color)]">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="w-full flex-1 min-h-screen flex justify-center">{children(language)}</main>
      <Footer language={language} />
    </div>
  );
}