'use client';

type RoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondary: string;
};

export function RoutePage({ eyebrow, title, description, secondary }: RoutePageProps) {
  return (
    <section className="min-h-[600px] w-full text-white bg-[var(--bg-color)]">
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center px-4 py-10 lg:px-20">
        <p className="text-sm text-[var(--accent-color)]">{eyebrow}</p>
        <h1 className="mt-4 text-3xl lg:text-5xl text-[var(--neon-color)]">{title}</h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{description}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--nav-color)] lg:text-base">{secondary}</p>
      </div>
    </section>
  );
}