'use client';

import { LanguagePageShell } from './components/LanguagePageShell';
import { Home } from './home/Home';

export default function App() {
  return <LanguagePageShell>{(language) => <Home language={language} />}</LanguagePageShell>;
}
