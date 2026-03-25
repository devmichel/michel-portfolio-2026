"use client";

import { motion } from "framer-motion";
import { Zap, Search, Smartphone, MousePointerClick, Code2, ShieldCheck } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Differentials() {
  const t = useTranslations('Differentials');

  const diffs = [
    { icon: Zap, title: t('t0'), desc: t('d0') },
    { icon: Search, title: t('t1'), desc: t('d1') },
    { icon: Smartphone, title: t('t2'), desc: t('d2') },
    { icon: MousePointerClick, title: t('t3'), desc: t('d3') },
    { icon: Code2, title: t('t4'), desc: t('d4') },
    { icon: ShieldCheck, title: t('t5'), desc: t('d5') },
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden" id="differentials">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24 max-w-2xl mx-auto"
        >
          <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('label')}</span>
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold mb-6">{t('title')}</h2>
          <p className="text-on-surface-variant text-lg">{t('desc')}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neumorphic-raised p-10 rounded-[2rem] hover:shadow-2xl transition-shadow group"
            >
               <div className="w-14 h-14 neumorphic-inset rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={28} />
               </div>
               <h4 className="font-headline text-xl font-bold mb-4">{item.title}</h4>
               <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
