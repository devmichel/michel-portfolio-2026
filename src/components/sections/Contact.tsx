import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section className="py-20 bg-surface overflow-hidden relative" id="contact">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -ml-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center">
          <div>
            <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('label')}</span>
            <h2 className="font-headline text-5xl font-extrabold mb-8 text-gradient leading-tight">{t('title')}</h2>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
              {t('desc')}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full">
            <div className="neumorphic-raised p-8 lg:p-10 rounded-[3rem] w-full flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:albuquerquemichel1992@gmail.com"
                className="flex-1 neumorphic-button-primary py-6 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                <Mail size={24} />
                {t('email')}
              </a>
              <a 
                href="#"
                className="flex-1 neumorphic-raised py-6 rounded-2xl text-on-surface font-bold text-lg transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                {t('whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
