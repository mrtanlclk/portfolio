'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { type Language } from '../localization';
import Footer from '../footer/Footer';

export function LanguagePageShell({ children }: { children: (language: Language) => ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('language');

    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [hydrated, language]);

  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main className="w-full flex-1 min-h-screen">{children(language)}</main>
      <Footer language={language} />
    </div>
  );
}