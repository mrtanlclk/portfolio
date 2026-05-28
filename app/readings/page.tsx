'use client';

import { LanguagePageShell } from '../components/LanguagePageShell';
import { Card } from 'primereact/card';
import { localization } from '../localization';

import { Rating } from 'primereact/rating';



export default function ReadingsPage() {
  return (
    <LanguagePageShell>
      {(language) => (
        <div className="w-[80%] min-h-screen pt-[4.5rem]">
          <p className="text-sm text-[var(--accent-color)] lg:mb-0 mt-0  lg:py-10">{localization[language].routes.readings.title}</p>
          <p className="max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{localization[language].routes.readings.description}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{localization[language].routes.readings.secondary}</p>
          <BookCards />
        </div>
      )}
    </LanguagePageShell>
  );
}

export function BookCards() {
  return (
    <div className="flex gap-12 flex-col lg:flex-row mt-10">
      <Card className="flex justify-center w-full lg:max-w-[20%] !bg-[var(--bg-color)] border-2 border-white">
        <img style={{ height: '220px', width: '100%' }} src="/assets/books/js-definitive-guide.jpg" alt="Book 1" />
        <p className="my-4 text-white">
          Javascript Definitive Guide
        </p>
        <p className="mt-4 text-white">
          <Rating value={5} disabled cancel={false} />
        </p>
      </Card>

      <Card className="flex justify-center w-full lg:max-w-[20%] !bg-[var(--bg-color)] border-2 border-white">
        <img style={{ height: '220px', width: '100%' }} src="/assets/books/angular-up-runing.jpg" alt="Book 1" />
        <p className="my-4 text-white">
          Angular Up and Running
        </p>
        <p className="mt-4 text-white">
          <Rating value={3} disabled cancel={false} />
        </p>
      </Card>
    </div>
  );
}
