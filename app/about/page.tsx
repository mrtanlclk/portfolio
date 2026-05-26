'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { RoutePage } from '../components/RoutePage';
import { localization } from '../localization';

export default function AboutPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <RoutePage
          eyebrow={localization[language].nav.about}
          title={localization[language].routes.about.title}
          description={localization[language].routes.about.description}
          secondary={localization[language].routes.about.secondary}
        />
      )}
    </LanguagePageShell>
  );
}