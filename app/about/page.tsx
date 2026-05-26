'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { localization } from '../localization';
import { Icon } from '../components/Icon';

export default function AboutPage() {

  return (
    <LanguagePageShell>
      {(_language) => (

        <Thumbnail language={_language} />
      )}
    </LanguagePageShell>
  );
}

export function Thumbnail({ language }: { language: 'tr' | 'en' }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col gap-12 pt-[4.5rem] lg:pt-0 lg:gap-20">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 px-4">
        <img
          src="/assets/thumbnail.png"
          alt="About Page Thumbnail"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-[var(--accent-color)] shadow-[var(--box-shadow)]"
        />

        <div className="mt-4 lg:mt-6 text-center lg:text-left">
          <p className="text-sm text-[var(--accent-color)]">{localization[language].routes.about.title}</p>
          <p className="mt-2 text-base sm:text-lg text-[var(--nav-color)]">
            {localization[language].routes.about.description}
          </p>
        </div>
      </div>

      <div className="w-full max-w-screen-xl flex flex-col items-center gap-6 px-4">
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center border border-[var(--nav-color)] pt-6">
          <h3 className="col-span-full text-sm text-[var(--accent-color)] text-center">{language === 'tr' ? 'Teknolojiler' : 'Technologies'}</h3>
          {[
            { key: 'html', label: 'HTML', icon: (
              <Icon name="html" size={48} label="HTML" />
            )},
            { key: 'css', label: 'CSS', icon: (
              <Icon name="css" size={48} label="CSS" />
            )},
            { key: 'js', label: 'JavaScript', icon: (
              <Icon name="js" size={48} label="JavaScript" />
            )},
            { key: 'ts', label: 'TypeScript', icon: (
              <Icon name="ts" size={48} label="TypeScript" />
            )},
            { key: 'angular', label: 'Angular', icon: (
              <Icon name="angular" size={48} label="Angular" />
            )},
            { key: 'react', label: 'React', icon: (
              <Icon name="react" size={48} label="React" />
            )},
          ].map((t) => (
            <div key={t.key} className="flex flex-col items-center justify-center p-3">
              <div className="p-3 bg-neutral-secondary-soft rounded-md flex items-center justify-center w-16 h-16">
                {t.icon}
              </div>
              <p className="mt-2 text-[10px] text-[var(--nav-color)]">{t.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}