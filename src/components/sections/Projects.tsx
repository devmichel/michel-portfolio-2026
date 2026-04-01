"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const t = useTranslations('Projects');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Solar Energy Solutions",
      category: t('p1'),
      tags: ["NEXT.JS", "SEO"],
      color: "bg-gradient-to-br from-primary-container to-tertiary",
    },
    {
      title: "Premium Dental Care",
      category: t('p2'),
      tags: ["UX/UI", "BOOKING"],
      color: "bg-gradient-to-br from-tertiary-container to-primary",
    },
    {
      title: "Elite Mechanical",
      category: t('p3'),
      tags: ["DASHBOARD", "REACT"],
      color: "bg-gradient-to-br from-secondary-fixed to-primary-container",
    },
  ];

  // Otimização: Usar matchMedia em vez de resize listener para detectar mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setItemsPerPage(e.matches ? 1.4 : 3);
      setCurrentIndex(0); // Resetar ao mudar de tela para evitar layout quebrado
    };

    onChange(mql);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Calcular limites de drag dinamicamente
  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && listRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const listWidth = listRef.current.scrollWidth;
        setDragConstraints({
          left: -(listWidth - containerWidth),
          right: 0
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [itemsPerPage, projects.length]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < projects.length - Math.floor(itemsPerPage);

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setCurrentIndex(prev => prev + 1);
  };

  const isMobile = itemsPerPage === 1.4;

  return (
    <section className="py-20 bg-surface-container-low overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between lg:items-end gap-8 mb-10"
        >
          <div>
            <span className="font-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{t('label')}</span>
            <h2 className="font-headline text-3xl lg:text-5xl font-extrabold text-on-surface">{t('title')}</h2>
          </div>

          {/* Setas: Ocultas no mobile e só aparecem se houver mais itens que o visível */}
          <div className={`hidden md:flex gap-4 transition-opacity duration-300 ${projects.length > itemsPerPage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button 
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`w-14 h-14 rounded-full neumorphic-raised flex items-center justify-center text-on-surface active:scale-90 transition-all ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : 'hover:text-primary'}`}
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              disabled={!canGoNext}
              className={`w-14 h-14 rounded-full neumorphic-raised flex items-center justify-center text-on-surface active:scale-90 transition-all ${!canGoNext ? 'opacity-30 cursor-not-allowed' : 'hover:text-primary'}`}
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <motion.div 
            ref={listRef}
            className="flex gap-10 cursor-grab active:cursor-grabbing"
            animate={{ x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (40 / itemsPerPage)}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={dragConstraints}
            onDragEnd={(_, info) => {
              // Sensibilidade do drag: 50px
              if (info.offset.x < -50 && canGoNext) handleNext();
              else if (info.offset.x > 50 && canGoPrev) handlePrev();
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.15 }}
                className="group neumorphic-raised rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2 shrink-0 w-full md:w-[calc(33.333%-27px)]"
                style={{
                  width: isMobile ? "70%" : undefined
                }}
              >
                <div className={`rounded-[1.5rem] overflow-hidden aspect-video mb-8 relative ${project.color}`}>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-xl">{t('view')}</span>
                  </div>
                </div>
                <div className="px-4 pb-6">
                  <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-on-surface-variant font-body">{project.category}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-surface-container-highest rounded-lg text-xs font-bold text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

  );
}


