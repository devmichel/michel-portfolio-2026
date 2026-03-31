"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('Projects');

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
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full neumorphic-raised flex items-center justify-center text-on-surface active:scale-90 transition-transform" aria-label="Previous Project">
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 rounded-full neumorphic-raised flex items-center justify-center text-on-surface active:scale-90 transition-transform" aria-label="Next Project">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group neumorphic-raised rounded-[2rem] p-4 transition-all duration-500 hover:-translate-y-2"
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
        </div>
      </div>
    </section>
  );
}
