'use client';

import { LanguagePageShell } from './components/LanguagePageShell';
import { Home } from './components/Home';

export default function App() {
  return <LanguagePageShell>{(language) => <Home language={language} />}</LanguagePageShell>;
}
