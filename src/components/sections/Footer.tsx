import { MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low">
      <div className="w-full py-12 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col flex-wrap md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-on-surface rounded-lg flex items-center justify-center">
              <span className="text-surface font-black text-sm">M</span>
            </div>
            <span className="font-headline font-black text-on-surface tracking-widest text-lg">ICHEL ALBUQUERQUE</span>
          </div>
          <p className="font-body text-sm text-on-surface-variant">{t('copyright', { year: currentYear })}</p>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <MapPin size={18} />
            <span className="text-sm font-semibold">{t('location')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
