// Home section content rendered according to the selected language.
import { localization, type Language } from '../localization';

export function Home({ language }: { language: Language }) {
  return (
  <div className="flex flex-1 flex-col lg:flex-row items-center justify-start pl-0 lg:pl-20 main-content w-full min-h-screen text-white">
      {/* Mobile: show image on top; Desktop: background handles image */}
      <img src="/assets/main-bg.png" alt="background" className="w-full lg:hidden object-cover" />

      <div className="max-w-xl space-y-4 p-4 lg:p-0 mx-0 text-left">
        <div className="text-sm text-[var(--accent-color)]">
          <span>{localization[language].home.hello}!</span>
          <img src="/assets/wave.png" alt="Hi" width={24} height={24} className="inline-block ml-2" />
        </div>
        <p className="text-base lg:text-xl text-[var(--nav-color)]">{localization[language].home.description}</p>
        <p className="text-2xl lg:text-4xl py-4 text-[var(--neon-color)]">{localization[language].home.description2}</p>
        <p className="text-sm lg:text-base text-[var(--nav-color)]">{localization[language].home.description3}</p>
      </div>
    </div>
  );
}