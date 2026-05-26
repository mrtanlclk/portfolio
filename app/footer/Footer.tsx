export default function Footer({ language }: { language: 'tr' | 'en' }) {
    return (
        <footer className="w-full text-[8px] text-center text-[var(--nav-color)] py-6 bg-[var(--bg-color)]">
            <p className="mt-1">{language === 'tr' ? 'React ile kodlandı.' : 'Built with React.'}</p>
            <p>&copy; 2026 Mert Anıl ÇELİK. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
        </footer>
    );
}