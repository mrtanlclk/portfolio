// Navbar, language picker, and localized navigation as.
'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { localization, type Language } from '../localization';

export function Navbar({
    language,
    onLanguageChange,
}: {
    language: Language;
    onLanguageChange: (language: Language) => void;
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/about', label: localization[language].nav.about },
        { href: '/career', label: localization[language].nav.career },
        { href: '/blog', label: localization[language].nav.blog },
        { href: '/readings', label: localization[language].nav.readings },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <>
        <nav className="fixed w-full z-20 top-0 start-0 bg-[var(--bg-color)]">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 gap-4">
                <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse min-w-0" onClick={() => setOpen(false)}>
                    <span className="text-sm lg:text-xl whitespace-nowrap overflow-hidden">
                        <span className="text-[var(--neon-color)]">&lt;</span>
                        <span className="text-[var(--nav-color)] ml-1">Mert</span>
                        <span className="text-[var(--accent-color)]">.Dev</span>
                        <span className="text-[var(--neon-color)]">/&gt;</span>
                    </span>
                </a>

                <div className="ml-auto flex items-center gap-3 order-2 lg:order-2">
                        <select
                        id="language-select"
                        value={language}
                        onChange={(event) => onLanguageChange(event.target.value as Language)}
                            className="rounded-base border border-default bg-neutral-secondary-soft px-2 py-1 text-xs w-14 lg:w-auto text-[var(--nav-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                    >
                        <option value="tr">TR</option>
                        <option value="en">EN</option>
                    </select>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded={open ? 'true' : 'false'}
                        onClick={(e) => {
                            // debug: ensure click handler runs on mobile
                            // eslint-disable-next-line no-console
                            e.stopPropagation();
                            setOpen(!open);
                        }}
                        className="inline-flex items-center p-1.5 w-9 h-9 justify-center text-sm text-white rounded-md lg:hidden hover:bg-neutral-secondary-soft hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                    >
                        <span className="sr-only">{open ? 'Close menu' : 'Open main menu'}</span>
                        {/* Icon: hamburger when closed, X when open */}
                        {open ? (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>

                </div>

                <div className="hidden lg:block lg:w-auto ml-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:bg-neutral-primary">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    aria-current={isActive(item.href) ? 'page' : undefined}
                                    className={
                                        isActive(item.href)
                                            ? 'block py-2 px-3 text-[var(--accent-color)] bg-brand rounded lg:text-fg-brand lg:bg-transparent'
                                            : 'block py-2 px-3 text-[var(--nav-color)] rounded hover:bg-neutral-tertiary lg:hover:text-[var(--accent-color)]'
                                    }
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                                </div>
                        </div>
                </nav>

                {/* Mobile menu: placed between navbar and Home, white background */}
                {open && (
                    <div id="mobile-menu" className="fixed top-[4.5rem] lg:hidden w-full bg-white border-b border-default z-40 pointer-events-auto">
                        <ul className="flex flex-col">
                            {navItems.map((item, index) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`block py-3 px-4 text-black ${index < navItems.length - 1 ? 'border-b' : ''}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                </>
        );
}