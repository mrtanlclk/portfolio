'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { localization } from '../localization';

export default function CareerPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-12 pt-[4.5rem] lg:pt-0 lg:gap-20">
          <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 px-4 text-white">
            <Timeline language={language} />
          </div>
        </div>
      )}
    </LanguagePageShell>
  );
}

export function Timeline({ language }: { language: 'tr' | 'en' }) {
  return (

    <ol className="relative border-s border-default lg:mt-20">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="text-sm font-normal leading-none text-body">{localization[language].routes.career.caretta.year}</time>
        <div className="border border-default rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[var(--accent-color)] my-2">{localization[language].routes.career.caretta.title}</h3>
          <p className="mb-4 text-base font-normal text-body hidden lg:block">{localization[language].routes.career.caretta.description}</p>
            <a href="https://mrtanlclk.github.io/linktree/" className="inline-flex items-center text-[var(--neon-color)] bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-[var(--accent-color)] focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                {language === 'tr' ? 'Çalıştığım Projeler' : 'Projects I Worked On'}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
            </a>
        </div>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="text-sm font-normal leading-none text-body">{localization[language].routes.career.akinon.year}</time>
        <div className="border border-default rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[var(--accent-color)] my-2">{localization[language].routes.career.akinon.title}</h3>
          <p className="mb-4 text-base font-normal text-body hidden lg:block">{localization[language].routes.career.akinon.description}</p>
        </div>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"></div>
        <time className="mb-1 text-sm font-normal leading-none text-body">{localization[language].routes.career.vendrops.year}</time>
        <div className="border border-default rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[var(--accent-color)] my-2">{localization[language].routes.career.vendrops.title}</h3>
          <p className="mb-4 text-base font-normal text-body hidden lg:block">{localization[language].routes.career.vendrops.description}</p>
        </div>
      </li>
    </ol>

  );
}