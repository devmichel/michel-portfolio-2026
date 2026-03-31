import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[921px] flex items-center px-4 lg:px-8 py-20 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full neumorphic-raised text-primary font-label font-semibold text-xs tracking-[0.2em] uppercase">
            {t('available')}
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight text-gradient">
            {t('title')} <br/><span className="text-primary">{t('role')}</span>
          </h1>
          <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            {t('desc')}
          </p>
          <div className="flex lg:flex-wrap gap-4 lg:gap-6 pt-4">
            <a href="#contact" className="neumorphic-button-primary px-4 lg:px-10 py-4 rounded-xl text-white font-bold text-lg inline-flex active:scale-95 transition-all">
              {t('start')}
            </a>
            <a href="#projects" className="neumorphic-raised px-4 lg:px-10 py-4 rounded-xl text-on-surface font-bold text-lg hover:shadow-lg active:scale-95 transition-all inline-flex">
              {t('portfolio')}
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 neumorphic-raised rounded-[2rem] opacity-50"></div>
          <div className="relative overflow-hidden rounded-[1.5rem] neumorphic-raised aspect-square lg:aspect-[4/5]">
            <Image 
              src="/hero.jpg" 
              alt="Michel professional workspace" 
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
