import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <header className="sticky top-0 w-full z-50 glass-header border-none shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-8 py-4 gap-2">
        <div className="flex items-center gap-1 lg:gap-2 font-headline font-bold text-sm lg:text-xl tracking-widest text-on-surface">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-on-surface rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-sm lg:text-xl">M</span>
          </div>
          <span className="tracking-[0.1em]">ICHEL ALBUQUERQUE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold tracking-tight">{t('hero')}</a>
          <a href="#projects" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold tracking-tight">{t('projects')}</a>
          <a href="#differentials" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold tracking-tight">{t('differentials')}</a>
          <a href="#faq" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold tracking-tight">{t('faq')}</a>
          <a href="#contact" className="text-on-surface-variant hover:text-on-surface transition-colors font-bold tracking-tight">{t('contact')}</a>
        </div>

        <div className="neumorphic-inset px-2 lg:px-4 py-2 rounded-full flex items-center gap-4 text-on-surface font-bold tracking-tight text-sm">
          <Globe size={18} className="text-primary" />
          <div className="flex items-center gap-3">
            <a href="/en" className="hover:text-primary transition-colors">EN</a>
            <a href="/es" className="hover:text-primary transition-colors">ES</a>
            <a href="/pt" className="hover:text-primary transition-colors">PT</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
