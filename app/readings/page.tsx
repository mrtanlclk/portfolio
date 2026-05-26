'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { RoutePage } from '../components/RoutePage';
import { localization } from '../localization';

export default function ReadingsPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <RoutePage
          eyebrow={localization[language].nav.readings}
          title={localization[language].routes.readings.title}
          description={localization[language].routes.readings.description}
          secondary={localization[language].routes.readings.secondary}
        />
      )}
    </LanguagePageShell>
  );
}