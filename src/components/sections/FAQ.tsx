import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const faqs = [
    { q: t('q0'), a: t('a0') },
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('label')}</span>
          <h2 className="font-headline text-4xl font-extrabold mb-4">{t('title')}</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-surface hover:bg-surface-bright rounded-2xl border-none transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden neumorphic-raised overflow-hidden"
            >
              <summary className="p-6 flex justify-between items-center cursor-pointer font-bold text-lg text-on-surface">
                {faq.q}
                <span className="ml-4 transition-transform duration-300 group-open:rotate-45 text-primary text-2xl font-light">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
