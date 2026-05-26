'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { RoutePage } from '../components/RoutePage';
import { localization } from '../localization';

export default function ProjectsPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <RoutePage
          eyebrow={localization[language].nav.projects}
          title={localization[language].routes.projects.title}
          description={localization[language].routes.projects.description}
          secondary={localization[language].routes.projects.secondary}
        />
      )}
    </LanguagePageShell>
  );
}