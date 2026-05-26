'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { RoutePage } from '../components/RoutePage';
import { localization } from '../localization';

export default function BlogPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <RoutePage
          eyebrow={localization[language].nav.blog}
          title={localization[language].routes.blog.title}
          description={localization[language].routes.blog.description}
          secondary={localization[language].routes.blog.secondary}
        />
      )}
    </LanguagePageShell>
  );
}