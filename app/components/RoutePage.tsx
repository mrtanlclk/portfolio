'use client';

type RoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondary: string;
};

export function RoutePage({ eyebrow, title, description, secondary }: RoutePageProps) {
  return (
    <section className="w-full text-white bg-[var(--bg-color)] pt-[4.5rem] lg:pt-0">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-center items-center text-center px-4 py-6 lg:items-start lg:text-left lg:px-20 lg:py-10">
        <p className="text-sm text-[var(--accent-color)]">{eyebrow}</p>
        <h1 className="mt-3 text-2xl sm:text-3xl lg:text-5xl text-[var(--neon-color)]">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{description}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{secondary}</p>
      </div>
    </section>
  );
}