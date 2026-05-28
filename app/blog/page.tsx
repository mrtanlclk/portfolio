'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { localization } from '../localization';

export default function BlogPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <section className="w-full text-white bg-[var(--bg-color)] pt-[4.5rem]">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-center items-center text-center px-4 py-6 lg:items-start lg:text-left lg:px-20 lg:py-10">
            <p className="text-sm text-[var(--accent-color)]">{localization[language].routes.blog.title}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{localization[language].routes.blog.description}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{localization[language].routes.blog.secondary}</p>
          </div>
        </section>
      )}
    </LanguagePageShell>
  );
}