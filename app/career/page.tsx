'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { RoutePage } from '../components/RoutePage';
import { localization } from '../localization';

export default function CareerPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <RoutePage
          eyebrow={localization[language].nav.career}
          title={localization[language].routes.career.title}
          description={localization[language].routes.career.description}
          secondary={localization[language].routes.career.secondary}
        />
      )}
    </LanguagePageShell>
  );
}